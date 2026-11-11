"use client";

import React, { useState, useCallback, useRef, useSyncExternalStore } from "react";
import { gsap } from "@/gsap";

function subscribeResize(callback: () => void) {
  window.addEventListener("resize", callback, { passive: true });
  return () => window.removeEventListener("resize", callback);
}

/**
 * IconBubblePop
 *
 * Invisible clickable hotspots overlaid on the hero illustration's app icons
 * (Ps, Ai, AE, Pr, Instagram, etc.). When clicked, the icon "pops" like a
 * childhood bubble game — bounces up, scales, spawns sparkle particles, then
 * floats away and fades out.
 *
 * All positions are percentage-based so they scale with the illustration.
 */

interface IconHotspot {
  id: string;
  /** Center X as percentage of container width */
  x: number;
  /** Center Y as percentage of container height */
  y: number;
  /** Hotspot diameter as percentage of container width */
  size: number;
}

/**
 * Hotspot positions mapped to the hero illustration icons.
 * These are approximate positions based on the illustration layout.
 * Mobile illustration (portrait) has different icon positions than desktop.
 */
const DESKTOP_HOTSPOTS: IconHotspot[] = [
  // Ps (Photoshop) — left side
  { id: "ps", x: 18, y: 62, size: 6 },
  // Ai (Illustrator) — left-center
  { id: "ai", x: 28, y: 72, size: 6 },
  // AE (After Effects) — center-right
  { id: "ae", x: 58, y: 38, size: 6 },
  // Pr (Premiere) — right side
  { id: "pr", x: 78, y: 58, size: 6 },
  // Instagram — right-center
  { id: "instagram", x: 62, y: 55, size: 5 },
  // Headphones — center-right upper
  { id: "headphones", x: 68, y: 30, size: 5.5 },
  // Lightbulb — left lower
  { id: "lightbulb", x: 12, y: 50, size: 4.5 },
  // Camera icon — top left
  { id: "camera", x: 22, y: 18, size: 6 },
  // WordPress — top left corner
  { id: "wordpress", x: 10, y: 8, size: 5 },
  // Settings/gear — right side
  { id: "settings", x: 85, y: 48, size: 4.5 },
];

const MOBILE_HOTSPOTS: IconHotspot[] = [
  // Ps (Photoshop) — left side
  { id: "ps-m", x: 18, y: 42, size: 10 },
  // Ai (Illustrator) — left-center lower
  { id: "ai-m", x: 22, y: 52, size: 10 },
  // AE (After Effects) — center upper
  { id: "ae-m", x: 55, y: 22, size: 10 },
  // Pr (Premiere) — right side
  { id: "pr-m", x: 78, y: 45, size: 8 },
  // Instagram — left lower
  { id: "instagram-m", x: 10, y: 75, size: 9 },
  // Meta — right lower
  { id: "meta-m", x: 72, y: 72, size: 8 },
  // Gear/Settings — right center
  { id: "settings-m", x: 88, y: 50, size: 8 },
  // WordPress — top left
  { id: "wordpress-m", x: 8, y: 6, size: 9 },
  // Lightbulb — left center
  { id: "lightbulb-m", x: 8, y: 62, size: 8 },
];

/** Small sparkle particle that bursts out on pop */
interface Sparkle {
  id: string;
  x: number;
  y: number;
}

/**
 * Procedural bubble pop sound via Web Audio API
 */
function playBubblePopSound() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // High-pitched pop
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);

    setTimeout(() => ctx.close().catch(() => {}), 300);
  } catch {
    // Silent fail
  }
}

export function IconBubblePop() {
  const [poppedIds, setPoppedIds] = useState<Set<string>>(new Set());
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sparkleIdRef = useRef(0);
  const isMobile = useSyncExternalStore(
    subscribeResize,
    () => window.innerWidth < 768,
    () => false
  );

  const hotspots = isMobile ? MOBILE_HOTSPOTS : DESKTOP_HOTSPOTS;

  const handlePop = useCallback(
    (hotspot: IconHotspot, e: React.MouseEvent | React.TouchEvent) => {
      if (poppedIds.has(hotspot.id)) return;

      // Mark as popped
      setPoppedIds((prev) => new Set(prev).add(hotspot.id));

      // Play sound
      playBubblePopSound();

      // Get the clicked element
      const target = e.currentTarget as HTMLElement;

      // Bubble pop animation: scale up → float up → fade out
      gsap.timeline()
        .to(target, {
          scale: 1.6,
          duration: 0.12,
          ease: "back.out(3)",
        })
        .to(target, {
          y: -80,
          scale: 0.3,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });

      // Spawn sparkle particles around the pop point
      const rect = target.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const centerX = rect.left + rect.width / 2 - containerRect.left;
      const centerY = rect.top + rect.height / 2 - containerRect.top;

      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 6; i++) {
        sparkleIdRef.current += 1;
        newSparkles.push({
          id: `sparkle-${sparkleIdRef.current}`,
          x: centerX,
          y: centerY,
        });
      }
      setSparkles((prev) => [...prev, ...newSparkles]);

      // Animate sparkles outward
      requestAnimationFrame(() => {
        newSparkles.forEach((s) => {
          const el = document.getElementById(s.id);
          if (!el) return;

          const angle = Math.random() * Math.PI * 2;
          const distance = 40 + Math.random() * 60;

          gsap.fromTo(
            el,
            { scale: 1, opacity: 1 },
            {
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance - 30,
              scale: 0,
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
              onComplete: () => {
                setSparkles((prev) => prev.filter((sp) => sp.id !== s.id));
              },
            }
          );
        });
      });
    },
    [poppedIds]
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[6] pointer-events-none"
    >
      {/* Clickable icon hotspots */}
      {hotspots.map((hotspot) => {
        if (poppedIds.has(hotspot.id)) {
          // Still render for exit animation, but not clickable
          return (
            <div
              key={hotspot.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${hotspot.x - hotspot.size / 2}%`,
                top: `${hotspot.y - hotspot.size / 2}%`,
                width: `${hotspot.size}%`,
                height: `${hotspot.size}%`,
              }}
            />
          );
        }

        return (
          <button
            key={hotspot.id}
            className="absolute rounded-full pointer-events-auto cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-90 group"
            style={{
              left: `${hotspot.x - hotspot.size / 2}%`,
              top: `${hotspot.y - hotspot.size / 2}%`,
              width: `${hotspot.size}%`,
              height: `${hotspot.size}%`,
              background: "transparent",
              border: "none",
              outline: "none",
            }}
            onClick={(e) => handlePop(hotspot, e)}
            aria-label={`Pop ${hotspot.id} icon`}
          >
            {/* Subtle hover ring hint */}
            <div className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(249,210,48,0.3)]" />
          </button>
        );
      })}

      {/* Sparkle particles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          id={s.id}
          className="absolute pointer-events-none"
          style={{
            left: s.x,
            top: s.y,
            width: 8,
            height: 8,
          }}
        >
          <svg viewBox="0 0 16 16" className="w-full h-full">
            <polygon
              points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6"
              fill="#f9d230"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default IconBubblePop;
