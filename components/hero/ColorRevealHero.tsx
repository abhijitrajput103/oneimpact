"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

/**
 * ColorRevealHero
 *
 * Desktop (md+): Interactive cursor hover reveal over video artwork using CSS mask-image
 * Mobile (<md):  Touch-based scratch-to-reveal using CSS mask with multiple radial gradients.
 *                No canvas, no blocking touch events. Uses passive touch listeners only.
 */

const LERP_FACTOR = 0.1;
const RADIUS_DESKTOP = 220;
const RADIUS_TABLET = 170;
const MOBILE_SCRATCH_RADIUS = 50;
const EDGE_BLUR = 2;
const DEFAULT_CURSOR_SIZE = RADIUS_DESKTOP * 2;

interface ColorRevealHeroProps {
  className?: string;
}

/** Detect touch-primary devices */
function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function ColorRevealHero({ className }: ColorRevealHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const grayscaleRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mobileGrayscaleRef = useRef<HTMLDivElement>(null);

  // Desktop mouse position refs
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isMouseInside = useRef(false);
  const frameId = useRef<number | null>(null);
  const radiusRef = useRef(RADIUS_DESKTOP);
  const isMobileRef = useRef(false);

  // Mobile scratch state — store scratched circles as CSS radial-gradient masks
  const [isMobile, setIsMobile] = useState(false);
  const scratchPointsRef = useRef<Array<{ x: number; y: number }>>([]);
  const [scratchPercent, setScratchPercent] = useState(0);
  const touchActiveRef = useRef(false);

  // Check if mobile on mount
  useEffect(() => {
    const mobile = isTouchDevice() || window.innerWidth < 768;
    setIsMobile(mobile);
    isMobileRef.current = mobile;
  }, []);

  // ─── MOBILE TOUCH SCRATCH HANDLER ──────────────────────────────────
  const handleTouchScratch = useCallback(
    (e: React.TouchEvent) => {
      if (!mobileGrayscaleRef.current) return;

      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const touch = e.touches[0];
      if (!touch) return;

      const x = touch.clientX - containerRect.left;
      const y = touch.clientY - containerRect.top;

      // Add scratch point (throttle: skip if too close to last point)
      const points = scratchPointsRef.current;
      const last = points[points.length - 1];
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        if (dx * dx + dy * dy < 100) return; // skip if < 10px distance
      }

      points.push({ x, y });

      // Build CSS mask from all scratch points — each is a transparent circle
      const r = MOBILE_SCRATCH_RADIUS;
      const maskParts = points.map(
        (p) =>
          `radial-gradient(circle ${r}px at ${p.x}px ${p.y}px, transparent ${r - 2}px, black ${r}px)`
      );

      // Compose masks: all circles create transparent holes in the grayscale layer
      mobileGrayscaleRef.current.style.maskImage = maskParts.join(", ");
      mobileGrayscaleRef.current.style.webkitMaskImage = maskParts.join(", ");
      mobileGrayscaleRef.current.style.maskComposite = "intersect";
      (mobileGrayscaleRef.current.style as unknown as Record<string, string>).webkitMaskComposite = "source-in";

      // Update scratch percentage for auto-reveal
      const area = containerRect.width * containerRect.height;
      const scratchedArea = points.length * Math.PI * r * r;
      const pct = Math.min(100, (scratchedArea / area) * 100);
      setScratchPercent(pct);
    },
    []
  );

  // Auto-reveal when enough area is scratched
  useEffect(() => {
    if (scratchPercent > 30 && mobileGrayscaleRef.current) {
      // Fade out the grayscale layer smoothly
      mobileGrayscaleRef.current.style.transition = "opacity 0.8s ease-out";
      mobileGrayscaleRef.current.style.opacity = "0";
    }
  }, [scratchPercent]);

  // ─── DESKTOP MOUSE REVEAL ─────────────────────────────────────────
  useEffect(() => {
    if (isMobileRef.current) return;

    const container = containerRef.current;
    const grayscale = grayscaleRef.current;
    const cursor = cursorRef.current;
    if (!container || !grayscale || !cursor) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      grayscale.style.opacity = "0";
      return;
    }

    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 768) {
        isMobileRef.current = true;
        radiusRef.current = 0;
      } else if (w < 1024) {
        isMobileRef.current = false;
        radiusRef.current = RADIUS_TABLET;
      } else {
        isMobileRef.current = false;
        radiusRef.current = RADIUS_DESKTOP;
      }

      const d = radiusRef.current * 2;
      cursor.style.width = `${d}px`;
      cursor.style.height = `${d}px`;
    };

    updateRadius();

    const tick = () => {
      if (isMobileRef.current) {
        frameId.current = null;
        return;
      }

      currentX.current += (targetX.current - currentX.current) * LERP_FACTOR;
      currentY.current += (targetY.current - currentY.current) * LERP_FACTOR;

      const x = currentX.current;
      const y = currentY.current;
      const r = radiusRef.current;
      const innerR = Math.max(0, r - EDGE_BLUR);

      const maskValue = `radial-gradient(circle ${r}px at ${x}px ${y}px, transparent ${innerR}px, rgba(0,0,0,1) ${r}px)`;

      grayscale.style.maskImage = maskValue;
      grayscale.style.webkitMaskImage = maskValue;

      cursor.style.transform = `translate3d(${x - r}px, ${y - r}px, 0)`;

      if (isMouseInside.current) {
        frameId.current = requestAnimationFrame(tick);
      } else {
        frameId.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileRef.current) return;
      const rect = container.getBoundingClientRect();
      targetX.current = e.clientX - rect.left;
      targetY.current = e.clientY - rect.top;

      if (!isMouseInside.current) {
        isMouseInside.current = true;
        currentX.current = targetX.current;
        currentY.current = targetY.current;
        cursor.style.opacity = "1";
        if (!frameId.current) {
          frameId.current = requestAnimationFrame(tick);
        }
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (isMobileRef.current) return;
      const rect = container.getBoundingClientRect();
      targetX.current = e.clientX - rect.left;
      targetY.current = e.clientY - rect.top;
      currentX.current = targetX.current;
      currentY.current = targetY.current;
      isMouseInside.current = true;
      cursor.style.opacity = "1";
      if (!frameId.current) {
        frameId.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseLeave = () => {
      isMouseInside.current = false;
      cursor.style.opacity = "0";
      grayscale.style.maskImage = "none";
      grayscale.style.webkitMaskImage = "none";
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }
    };

    const handleResize = () => {
      updateRadius();
      cursor.style.opacity = "0";
      grayscale.style.maskImage = "none";
      grayscale.style.webkitMaskImage = "none";
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${isMobile ? "pointer-events-auto" : "pointer-events-none md:pointer-events-auto"} ${className ?? ""}`}
      onTouchMove={isMobile ? handleTouchScratch : undefined}
      onTouchStart={isMobile ? () => { touchActiveRef.current = true; } : undefined}
      onTouchEnd={isMobile ? () => { touchActiveRef.current = false; } : undefined}
      style={isMobile ? { touchAction: "pan-y" } : undefined}
    >
      {/* ------------------------------------------------------------------- */}
      {/* DESKTOP MEDIA LAYERS (md and up)                                   */}
      {/* ------------------------------------------------------------------- */}
      {/* Layer 1: Colorful desktop video (always visible underneath) */}
      {!isMobile && (
        <video
          className="hidden md:block absolute inset-0 w-full h-full min-w-full min-h-full object-cover select-none pointer-events-none"
          src="/videos/sample.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Layer 2: Grayscale desktop video (masked by cursor) */}
      {!isMobile && (
        <div
          ref={grayscaleRef}
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{
            maskImage: "none",
            WebkitMaskImage: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            transition: "opacity 0.3s ease",
          }}
        >
          <video
            className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover select-none pointer-events-none"
            src="/videos/sample.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              filter: "grayscale(100%) contrast(1.15) brightness(0.85)",
            }}
          />
        </div>
      )}

      {/* Custom reveal cursor circle (Desktop) */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className="hidden md:block absolute top-0 left-0 pointer-events-none select-none"
          style={{
            width: `${DEFAULT_CURSOR_SIZE}px`,
            height: `${DEFAULT_CURSOR_SIZE}px`,
            borderRadius: "50%",
            border: "1.5px solid rgba(255, 255, 255, 0.18)",
            boxShadow:
              "0 0 50px rgba(0, 102, 255, 0.12), inset 0 0 30px rgba(255, 255, 255, 0.04)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            willChange: "transform",
            zIndex: 50,
            animation: "revealCursorBreath 3s ease-in-out infinite",
          }}
        />
      )}

      {/* ------------------------------------------------------------------- */}
      {/* MOBILE MEDIA LAYERS (<md) — Touch scratch-to-reveal               */}
      {/* ------------------------------------------------------------------- */}
      {isMobile && (
        <>
          {/* Layer 1: Full-color illustration (revealed underneath) */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/One_impact _illustration_Mobile.png"
              alt="One Impact Hero Illustration"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
              loading="eager"
            />
          </div>

          {/* Layer 2: Grayscale overlay (scratched away by touch) */}
          <div
            ref={mobileGrayscaleRef}
            className="absolute inset-0 w-full h-full select-none pointer-events-none"
            style={{
              maskImage: "none",
              WebkitMaskImage: "none",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/One_impact _illustration_Mobile.png"
              alt=""
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
              loading="eager"
              style={{
                filter: "grayscale(100%) contrast(1.15) brightness(0.85)",
              }}
            />
          </div>

          {/* Scratch prompt hint */}
          {scratchPercent < 5 && (
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-5 py-2.5 animate-pulse">
                <span className="text-white/90 text-xs font-sans font-medium tracking-wide">
                  ✨ Scratch to reveal
                </span>
              </div>
            </div>
          )}
        </>
      )}

      {/* Breathing animation for desktop cursor */}
      <style jsx>{`
        @keyframes revealCursorBreath {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }
      `}</style>
    </div>
  );
}

export default ColorRevealHero;
