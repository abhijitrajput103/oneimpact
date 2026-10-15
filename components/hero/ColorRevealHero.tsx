"use client";

import React, { useRef, useEffect, useState } from "react";

/**
 * ColorRevealHero
 *
 * Desktop (md+): Interactive cursor hover reveal over video artwork using CSS mask-image
 * Mobile (<md):  High-performance hardware-accelerated Canvas scratch-to-reveal (60fps, touch-friendly, no page lock)
 */

const LERP_FACTOR = 0.1;
const RADIUS_DESKTOP = 220;
const RADIUS_TABLET = 170;
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

/** Mobile Canvas Scratch-to-Reveal */
function MobileScratchView() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasScratched, setHasScratched] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const strokeCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    let isMounted = true;
    const img = new Image();
    img.src = "/images/One_impact _illustration_Mobile.webp";

    const render = () => {
      if (!isMounted || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const imgRatio = (img.naturalWidth || 1) / (img.naturalHeight || 1);
      const canvasRatio = w / h;
      let renderW = w;
      let renderH = h;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderH = w / imgRatio;
        offsetY = (h - renderH) / 2;
      } else {
        renderW = h * imgRatio;
        offsetX = (w - renderW) / 2;
      }

      ctx.save();
      ctx.filter = "grayscale(100%) contrast(1.15) brightness(0.85)";
      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
      ctx.restore();
    };

    if (img.complete && img.naturalWidth > 0) {
      render();
    } else {
      img.onload = render;
    }

    const handleResize = () => {
      if (!isRevealed) render();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, [isRevealed]);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 64;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 32, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    lastPointRef.current = { x, y };
    strokeCountRef.current += 1;

    if (!hasScratched) setHasScratched(true);
    if (strokeCountRef.current > 16 && !isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <>
      {/* Layer 1: Full-color illustration (revealed underneath) */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/One_impact _illustration_Mobile.webp"
          alt="One Impact Hero Illustration"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          draggable={false}
          loading="eager"
        />
      </div>

      {/* Layer 2: Scratchable Grayscale Canvas (Hardware Accelerated, 60fps) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{
          touchAction: "pan-y",
          opacity: isRevealed ? 0 : 1,
          transition: "opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
          pointerEvents: isRevealed ? "none" : "auto",
        }}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) {
            lastPointRef.current = null;
            scratchAt(t.clientX, t.clientY);
          }
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          if (t) {
            scratchAt(t.clientX, t.clientY);
          }
        }}
        onTouchEnd={() => {
          lastPointRef.current = null;
        }}
        onTouchCancel={() => {
          lastPointRef.current = null;
        }}
      />

      {/* Scratch prompt hint */}
      {!hasScratched && !isRevealed && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg border border-white/10 animate-pulse">
            <span className="text-white text-xs font-sans font-medium tracking-wide">
              ✨ Scratch to reveal
            </span>
          </div>
        </div>
      )}
    </>
  );
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

  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const mobile = isTouchDevice() || window.innerWidth < 768;
    setIsMobile(mobile);
    isMobileRef.current = mobile;
  }, []);

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

      const r = radiusRef.current;
      const b = EDGE_BLUR;
      const maskStr = `radial-gradient(circle ${r}px at ${currentX.current}px ${currentY.current}px, transparent ${r - b}px, black ${r}px)`;

      grayscale.style.maskImage = maskStr;
      grayscale.style.webkitMaskImage = maskStr;

      cursor.style.transform = `translate3d(${currentX.current - r}px, ${currentY.current - r}px, 0)`;

      const dx = Math.abs(targetX.current - currentX.current);
      const dy = Math.abs(targetY.current - currentY.current);
      if (isMouseInside.current || dx > 0.1 || dy > 0.1) {
        frameId.current = requestAnimationFrame(tick);
      } else {
        frameId.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX.current = e.clientX - rect.left;
      targetY.current = e.clientY - rect.top;

      if (!frameId.current) {
        frameId.current = requestAnimationFrame(tick);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isMouseInside.current = true;
      const rect = container.getBoundingClientRect();
      targetX.current = e.clientX - rect.left;
      targetY.current = e.clientY - rect.top;
      currentX.current = targetX.current;
      currentY.current = targetY.current;

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
    >
      {/* ------------------------------------------------------------------- */}
      {/* DESKTOP MEDIA LAYERS (md and up)                                   */}
      {/* ------------------------------------------------------------------- */}
      {!isMobile && (
        <>
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
        </>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* MOBILE MEDIA LAYERS (<md) — High-Performance Canvas Scratch         */}
      {/* ------------------------------------------------------------------- */}
      {isMobile && <MobileScratchView />}

      {/* Breathing animation for desktop cursor */}
      <style jsx>{`
        @keyframes revealCursorBreath {
          0%,
          100% {
            box-shadow:
              0 0 50px rgba(0, 102, 255, 0.12),
              inset 0 0 30px rgba(255, 255, 255, 0.04);
          }
          50% {
            box-shadow:
              0 0 75px rgba(0, 102, 255, 0.22),
              inset 0 0 40px rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </div>
  );
}

export default ColorRevealHero;
