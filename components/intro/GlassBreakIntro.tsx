"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "@/gsap";
import { useLenis } from "@/hooks/useLenis";
import { GlassOverlay } from "./GlassOverlay";
import { HammerCursor, type HammerCursorHandle } from "./HammerCursor";
import { CrackCanvas, type CrackCanvasHandle } from "./CrackCanvas";
import { GlassShards, type GlassShardsHandle } from "./GlassShards";
import { ParticleSystem, type ParticleSystemHandle } from "./ParticleSystem";
import { IntroText } from "./IntroText";

// Audio player stubs
const playImpactSound = () => {
  // TODO: Implement metallic hammer hit audio player
  // const audio = new Audio("/audio/hammer-impact.mp3");
  // audio.volume = 0.8;
  // audio.play();
  console.log("[Audio] Hammer impact played.");
};

const playBreakSound = () => {
  // TODO: Implement glass shatter & cracking audio player
  // const audio = new Audio("/audio/glass-break.mp3");
  // audio.volume = 0.7;
  // audio.play();
  console.log("[Audio] Glass break played.");
};

interface GlassBreakIntroProps {
  onComplete?: () => void;
}

export function GlassBreakIntro({ onComplete }: GlassBreakIntroProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  const hammerRef = useRef<HammerCursorHandle>(null);
  const crackRef = useRef<CrackCanvasHandle>(null);
  const shardsRef = useRef<GlassShardsHandle>(null);
  const particlesRef = useRef<ParticleSystemHandle>(null);

  const lenis = useLenis();

  // Stop scrolling on mount, restore on unmount (or completion)
  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }

    // Check accessibility reduced-motion query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    requestAnimationFrame(() => {
      setPrefersReducedMotion(mediaQuery.matches);
    });

    return () => {
      if (lenis) {
        lenis.start();
      }
    };
  }, [lenis]);

  const handleGlassClick = (e: React.MouseEvent) => {
    if (isClicked || !isActive) return;
    setIsClicked(true);

    const cx = e.clientX;
    const cy = e.clientY;

    // Accessibility check: Skip full timeline if user prefers reduced motion
    if (prefersReducedMotion) {
      playImpactSound();
      playBreakSound();

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
    // 1. Hammer Swing
    hammerRef.current?.triggerSwing(() => {
      // 2. On Impact: Shake screen, Play sound stubs
      playImpactSound();
      
      const shakeTimeline = gsap.timeline();
      shakeTimeline
        .to(containerRef.current, {
          x: () => (Math.random() - 0.5) * 10,
          y: () => (Math.random() - 0.5) * 10,
          duration: 0.04,
          repeat: 4,
          yoyo: true,
          ease: "power1.inOut",
        })
        .set(containerRef.current, { x: 0, y: 0 }); // reset layout alignment

      // 3. Draw cracks radiating outward
      crackRef.current?.generateCrack(cx, cy, () => {
        // Crack completes — now shatter the glass
        playBreakSound();

        // 4. Spawn falling glass shards & dust particles
        particlesRef.current?.spawnParticles(cx, cy);
        shardsRef.current?.spawnShards(cx, cy);

        // 5. INSTANTLY remove the frosted glass, blur, and crack lines
        //    The canvas-drawn falling shards visually replace the glass pane
        crackRef.current?.clearCanvas();

        gsap.set(glassRef.current, { opacity: 0, pointerEvents: "none" });
        gsap.set(blurRef.current, { opacity: 0, pointerEvents: "none" });

        // 6. Complete intro after shards have fallen off screen
        gsap.delayedCall(2.2, () => {
          completeIntro();
        });
      });
    });
  };

  const completeIntro = () => {
    setIsActive(false);
    sessionStorage.setItem("oneimpact-intro", "true");
    
    // Clear and dispose of canvas loops
    crackRef.current?.clearCanvas();
    shardsRef.current?.clear();
    particlesRef.current?.clear();

    if (lenis) {
      lenis.start();
    }
    if (onComplete) {
      onComplete();
    }
  };

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      onClick={handleGlassClick}
      className="fixed inset-0 w-screen h-screen z-9999 overflow-hidden custom-cursor-active select-none"
    >
      {/* Layer 2: Website Blur Overlay */}
      <div
        ref={blurRef}
        className="absolute inset-0 z-0 bg-transparent backdrop-blur-[14px] pointer-events-none transition-all duration-300"
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
