"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/utils/cn";

/**
 * ColorRevealHero — Interactive cursor/touch-driven color reveal over grayscale artwork.
 *
 * Desktop: Cursor hover reveal using CSS mask-image
 * Mobile:  Interactive Scratch-Off Canvas!
 *          Initially 100% grayscale with a floating "SCRATCH TO REVEAL COLOR" badge.
 *          Dragging/touching scratches off grayscale to reveal vibrant color beneath.
 */

// Lerp factor for desktop cursor movement
const LERP_FACTOR = 0.1;

// Cursor reveal radius per breakpoint
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
  const mobileCanvasRef = useRef<HTMLCanvasElement>(null);

  // State for mobile scratch text prompt visibility
  const [hasScratched, setHasScratched] = useState(false);
  const hasScratchedRef = useRef(false);

  // Desktop mouse position refs
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isMouseInside = useRef(false);
  const frameId = useRef<number | null>(null);
  const radiusRef = useRef(RADIUS_DESKTOP);
  const isMobileRef = useRef(false);

  // Mobile scratch touch position ref
  const lastTouchPos = useRef<{ x: number; y: number } | null>(null);

  // ---------------------------------------------------------------------------
  // Desktop Cursor Reveal Logic
  // ---------------------------------------------------------------------------
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
        cursor.style.opacity = "1";
      }

      frameId.current = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      updateRadius();
      if (isMobileRef.current) {
        grayscale.style.maskImage = "none";
        grayscale.style.webkitMaskImage = "none";
        grayscale.style.opacity = "0";
        cursor.style.opacity = "0";
      } else {
        grayscale.style.opacity = "1";
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileRef.current) return;
      const rect = container.getBoundingClientRect();
      targetX.current = e.clientX - rect.left;
      targetY.current = e.clientY - rect.top;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (isMobileRef.current) return;
      isMouseInside.current = true;
      const rect = container.getBoundingClientRect();
      const entryX = e.clientX - rect.left;
      const entryY = e.clientY - rect.top;
      currentX.current = entryX;
      currentY.current = entryY;
      targetX.current = entryX;
      targetY.current = entryY;

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

    if (isMobileRef.current) {
      grayscale.style.opacity = "0";
      cursor.style.opacity = "0";
    }

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

  // ---------------------------------------------------------------------------
  // Mobile Interactive Scratch-Off Canvas Logic
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const canvas = mobileCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isDrawing = false;
    const img = new Image();
    img.src = "/images/Background Mobile.png";

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      // Draw initial Background Mobile image onto canvas
      if (img.complete && img.naturalWidth !== 0) {
        drawCover(rect.width, rect.height);
      } else {
        img.onload = () => drawCover(rect.width, rect.height);
      }
    };

    const drawCover = (width: number, height: number) => {
      ctx.save();
      ctx.filter = "grayscale(100%) contrast(115%) brightness(85%)";
      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
    };

    setupCanvas();

    const getPos = (e: TouchEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if ("touches" in e && e.touches.length > 0) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
      if ("clientX" in e) {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
      return null;
    };

    const scratch = (pos: { x: number; y: number }) => {
      if (!hasScratchedRef.current) {
        hasScratchedRef.current = true;
        setHasScratched(true);
      }

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "#000000";
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 180; // Large scratch brush stroke diameter for effortless reveal
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      if (lastTouchPos.current) {
        ctx.moveTo(lastTouchPos.current.x, lastTouchPos.current.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      } else {
        ctx.arc(pos.x, pos.y, 90, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      lastTouchPos.current = pos;
    };

    const handleStart = (e: TouchEvent | MouseEvent) => {
      isDrawing = true;
      const pos = getPos(e);
      if (pos) {
        lastTouchPos.current = null;
        scratch(pos);
      }
    };

    const handleMove = (e: TouchEvent | MouseEvent) => {
      if (!isDrawing) return;
      const pos = getPos(e);
      if (pos) {
        scratch(pos);
      }
    };

    const handleEnd = () => {
      isDrawing = false;
      lastTouchPos.current = null;
    };

    // Touch events
    canvas.addEventListener("touchstart", handleStart, { passive: true });
    canvas.addEventListener("touchmove", handleMove, { passive: true });
    canvas.addEventListener("touchend", handleEnd, { passive: true });

    // Mouse fallback for mobile testing in devtools
    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("resize", setupCanvas);

    return () => {
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden ${className ?? ""}`}
      style={{ cursor: "none" }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* DESKTOP MEDIA LAYERS                                               */}
      {/* ------------------------------------------------------------------- */}
      {/* Layer 1: Colorful desktop artwork (always visible underneath) */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full min-w-full min-h-full object-cover select-none pointer-events-none"
        src="/videos/sample.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layer 2: Grayscale desktop artwork (masked by cursor) */}
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
      {/* MOBILE INTERACTIVE SCRATCH MEDIA LAYERS                            */}
      {/* ------------------------------------------------------------------- */}
      {/* Mobile Layer 1: Vibrant Color Image (Underneath) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/One_impact _illustration_Mobile.png"
        alt="OneImpact Hero Illustration"
        className="block md:hidden absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
        draggable={false}
      />

      {/* Mobile Layer 2: Interactive Scratch Canvas (Grayscale on Top) */}
      <canvas
        ref={mobileCanvasRef}
        className="block md:hidden absolute inset-0 w-full h-full touch-none z-10 select-none cursor-pointer"
      />

      {/* Mobile Scratch Prompt Helper Badge */}
      <div
        className={cn(
          "block md:hidden absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-700",
          hasScratched ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
        )}
      >
        <div className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white font-display text-[11px] sm:text-xs font-bold tracking-widest uppercase flex items-center gap-2.5 shadow-2xl animate-bounce">
          <span className="text-base animate-pulse">👆</span>
          <span>SCRATCH TO REVEAL COLOR</span>
        </div>
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
