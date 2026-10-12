"use client";

import React, { useRef, useEffect } from "react";

/**
 * ColorRevealHero
 *
 * Desktop (md+): Interactive cursor hover reveal over video artwork using CSS mask-image
 * Mobile (<md):  Vibrant full-color illustration background with zero scroll interference,
 *                allowing smooth, standard touch scrolling and navigation.
 */

const LERP_FACTOR = 0.1;
const RADIUS_DESKTOP = 220;
const RADIUS_TABLET = 170;
const EDGE_BLUR = 2;
const DEFAULT_CURSOR_SIZE = RADIUS_DESKTOP * 2;

interface ColorRevealHeroProps {
  className?: string;
}

export function ColorRevealHero({ className }: ColorRevealHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const grayscaleRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Desktop mouse position refs
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isMouseInside = useRef(false);
  const frameId = useRef<number | null>(null);
  const radiusRef = useRef(RADIUS_DESKTOP);
  const isMobileRef = useRef(false);

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none md:pointer-events-auto ${className ?? ""}`}
    >
      {/* ------------------------------------------------------------------- */}
      {/* DESKTOP MEDIA LAYERS (md and up)                                   */}
      {/* ------------------------------------------------------------------- */}
      {/* Layer 1: Colorful desktop video (always visible underneath) */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full min-w-full min-h-full object-cover select-none pointer-events-none"
        src="/videos/sample.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layer 2: Grayscale desktop video (masked by cursor) */}
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

      {/* Custom reveal cursor circle (Desktop) */}
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

      {/* ------------------------------------------------------------------- */}
      {/* MOBILE MEDIA LAYER (<md)                                            */}
      {/* ------------------------------------------------------------------- */}
      {/* Clean, vibrant, full-color mobile illustration with zero scroll interference */}
      <div className="block md:hidden absolute inset-0 w-full h-full select-none pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/One_impact _illustration_Mobile.png"
          alt="One Impact Hero Illustration"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          draggable={false}
          priority-target="true"
        />
      </div>

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
