"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "@/gsap";
import { useLenis } from "@/hooks/useLenis";
import { GlassOverlay } from "./GlassOverlay";
import { HammerCursor, type HammerCursorHandle } from "./HammerCursor";
import { CrackCanvas, type CrackCanvasHandle } from "./CrackCanvas";
import { GlassShards, type GlassShardsHandle } from "./GlassShards";
import { ParticleSystem, type ParticleSystemHandle } from "./ParticleSystem";
import { IntroText } from "./IntroText";

/**
 * Procedural glass shatter sound via Web Audio API.
 * No external audio files needed — generates a realistic
 * crack + tinkle effect using noise bursts and filtered sweeps.
 */
const playGlassShatterSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();

    // ── 1. Initial crack/impact — short noise burst ──
    const impactDuration = 0.08;
    const impactBuffer = ctx.createBuffer(1, ctx.sampleRate * impactDuration, ctx.sampleRate);
    const impactData = impactBuffer.getChannelData(0);
    for (let i = 0; i < impactData.length; i++) {
      const t = i / impactData.length;
      impactData[i] = (Math.random() * 2 - 1) * (1 - t) * 0.7;
    }
    const impactSrc = ctx.createBufferSource();
    impactSrc.buffer = impactBuffer;
    const impactFilter = ctx.createBiquadFilter();
    impactFilter.type = "highpass";
    impactFilter.frequency.value = 800;
    const impactGain = ctx.createGain();
    impactGain.gain.setValueAtTime(0.5, ctx.currentTime);
    impactGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + impactDuration);
    impactSrc.connect(impactFilter).connect(impactGain).connect(ctx.destination);
    impactSrc.start(ctx.currentTime);

    // ── 2. Glass tinkle — high-frequency shimmer ──
    const tinkleDuration = 0.5;
    const tinkleBuffer = ctx.createBuffer(1, ctx.sampleRate * tinkleDuration, ctx.sampleRate);
    const tinkleData = tinkleBuffer.getChannelData(0);
    for (let i = 0; i < tinkleData.length; i++) {
      const t = i / tinkleData.length;
      tinkleData[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3) * 0.35;
    }
    const tinkleSrc = ctx.createBufferSource();
    tinkleSrc.buffer = tinkleBuffer;
    const tinkleFilter = ctx.createBiquadFilter();
    tinkleFilter.type = "bandpass";
    tinkleFilter.frequency.value = 4500;
    tinkleFilter.Q.value = 2;
    const tinkleGain = ctx.createGain();
    tinkleGain.gain.setValueAtTime(0.35, ctx.currentTime);
    tinkleGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + tinkleDuration);
    tinkleSrc.connect(tinkleFilter).connect(tinkleGain).connect(ctx.destination);
    tinkleSrc.start(ctx.currentTime + 0.02);

    // ── 3. Falling shards — low resonant crunch ──
    const crunchDuration = 0.3;
    const crunchBuffer = ctx.createBuffer(1, ctx.sampleRate * crunchDuration, ctx.sampleRate);
    const crunchData = crunchBuffer.getChannelData(0);
    for (let i = 0; i < crunchData.length; i++) {
      const t = i / crunchData.length;
      crunchData[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2) * 0.4;
    }
    const crunchSrc = ctx.createBufferSource();
    crunchSrc.buffer = crunchBuffer;
    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = "lowpass";
    crunchFilter.frequency.value = 1200;
    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.3, ctx.currentTime);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + crunchDuration);
    crunchSrc.connect(crunchFilter).connect(crunchGain).connect(ctx.destination);
    crunchSrc.start(ctx.currentTime + 0.03);

    // Auto-close the context after sounds finish
    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 1200);
  } catch {
    // Silently fail — sound is not critical
  }
};

/** Detect touch-primary devices (smartphones / tablets) */
const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
};

interface GlassBreakIntroProps {
  onComplete?: () => void;
}

export function GlassBreakIntro({ onComplete }: GlassBreakIntroProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  const hammerRef = useRef<HammerCursorHandle>(null);
  const crackRef = useRef<CrackCanvasHandle>(null);
  const shardsRef = useRef<GlassShardsHandle>(null);
  const particlesRef = useRef<ParticleSystemHandle>(null);

  const lenis = useLenis();

  const completeIntro = useCallback(() => {
    setIsActive(false);
    sessionStorage.setItem("oneimpact-intro", "true");

    // Clear and dispose of canvas loops (safe no-ops if never spawned)
    crackRef.current?.clearCanvas();
    shardsRef.current?.clear();
    particlesRef.current?.clear();

    document.body.classList.remove("custom-cursor-active");
    document.body.style.cursor = "";

    if (lenis) {
      lenis.start();
    } else {
      // Mobile: restore body overflow
      document.body.style.overflow = "";
    }
    if (onComplete) {
      onComplete();
    }
  }, [lenis, onComplete]);

  // Detect mobile & stop scrolling on mount; always restore on unmount
  useEffect(() => {
    const mobile = isTouchDevice();
    setIsMobile(mobile);

    if (!mobile) {
      document.body.classList.add("custom-cursor-active");
      document.body.style.cursor = "none";
    }

    if (lenis) {
      lenis.stop();
    } else {
      // Mobile: no Lenis, lock scroll via body overflow
      document.body.style.overflow = "hidden";
    }

    // Check accessibility reduced-motion query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    requestAnimationFrame(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    });

    // Safety: ensure scrolling & cursor are ALWAYS restored on unmount
    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.body.style.cursor = "";
      if (lenis) {
        lenis.start();
      } else {
        document.body.style.overflow = "";
      }
    };
  }, [lenis]);

  // ─── MOBILE: lightweight tap-to-dismiss ────────────────────────────
  const handleMobileTap = useCallback(() => {
    if (isClicked || !isActive) return;
    setIsClicked(true);

    // Simple, lightweight fade-out — no canvas, no particles, no shards
    const tl = gsap.timeline({
      onComplete: () => {
        completeIntro();
      },
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isClicked, isActive, completeIntro]);

  // ─── DESKTOP: full glass-break experience ──────────────────────────
  const handleGlassClick = (e: React.MouseEvent) => {
    // On mobile use the lightweight handler instead
    if (isMobile) {
      handleMobileTap();
      return;
    }

    if (isClicked || !isActive) return;
    setIsClicked(true);

    const cx = e.clientX;
    const cy = e.clientY;

    // Accessibility check: Skip full timeline if user prefers reduced motion
    if (prefersReducedMotion) {
      playGlassShatterSound();

      const skipTl = gsap.timeline({
        onComplete: () => {
          completeIntro();
        },
      });

      skipTl.to([blurRef.current, glassRef.current], {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      return;
    }

    // Master GSAP Timeline Execution
    // 1. Instant Hammer Swing (40ms impact)
    hammerRef.current?.triggerSwing(() => {
      // 2. On Impact: Shake screen, Play sounds
      playGlassShatterSound();

      const shakeTimeline = gsap.timeline();
      shakeTimeline
        .to(containerRef.current, {
          x: () => (Math.random() - 0.5) * 12,
          y: () => (Math.random() - 0.5) * 12,
          duration: 0.03,
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut",
        })
        .set(containerRef.current, { x: 0, y: 0 });

      // 3. Draw cracks radiating outward instantly
      crackRef.current?.generateCrack(cx, cy, () => {});

      // 4. Spawn falling glass shards & dust particles immediately on impact
      particlesRef.current?.spawnParticles(cx, cy);
      shardsRef.current?.spawnShards(cx, cy);

      // 5. Instantly fade out the frosted glass, blur, and solid background
      gsap.to([glassRef.current, blurRef.current], {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          crackRef.current?.clearCanvas();
        },
      });

      gsap.to(containerRef.current, {
        backgroundColor: "transparent",
        duration: 0.25,
        ease: "power2.out",
      });

      // 6. Complete intro after shards have dispersed
      gsap.delayedCall(1.6, () => {
        completeIntro();
      });
    });
  };

  if (!isActive) return null;

  // ─── MOBILE RENDER: lightweight overlay, no canvases/particles ─────
  if (isMobile) {
    return (
      <div
        ref={containerRef}
        onTouchEnd={handleMobileTap}
        onClick={handleMobileTap}
        className="fixed inset-0 w-screen h-screen z-[9999] overflow-hidden select-none"
        style={{ touchAction: "manipulation" }}
      >
        {/* Blur backdrop */}
        <div className="absolute inset-0 z-0 bg-transparent backdrop-blur-[14px]" />

        {/* Glass overlay & tap prompt */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <GlassOverlay />
          <IntroText isClicked={isClicked} />
        </div>
      </div>
    );
  }

  // ─── DESKTOP RENDER: full glass-break experience ───────────────────
  return (
    <div
      ref={containerRef}
      onClick={handleGlassClick}
      className="fixed inset-0 w-screen h-screen z-[9999] overflow-hidden custom-cursor-active select-none cursor-none"
      style={{ cursor: "none" }}
    >
      {/* Layer 2: Website Blur Overlay with dark blackout backdrop */}
      <div
        ref={blurRef}
        className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[18px] pointer-events-none"
      />

      {/* Glass overlay & text graphics */}
      <div ref={glassRef} className="absolute inset-0 z-10 w-full h-full origin-center">
        {/* Layer 3: Frosted glass pane visual */}
        <GlassOverlay />

        {/* Layer 7: Prompt texts */}
        <IntroText isClicked={isClicked} />
      </div>

      {/* Layer 4: Cracking canvas */}
      <CrackCanvas ref={crackRef} />

      {/* Layer 5: Shattering shards and sparkles */}
      <GlassShards ref={shardsRef} />
      <ParticleSystem ref={particlesRef} />

      {/* Layer 6: Hammer cursor */}
      <HammerCursor ref={hammerRef} isClicked={isClicked} />
    </div>
  );
}

export default GlassBreakIntro;
