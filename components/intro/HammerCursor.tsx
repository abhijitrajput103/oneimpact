"use client";

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "@/gsap";
import Image from "next/image";
import { useCursor } from "@/hooks/useCursor";

interface HammerCursorProps {
  isClicked: boolean;
}

export interface HammerCursorHandle {
  triggerSwing: (callback: () => void) => void;
}

export const HammerCursor = forwardRef<HammerCursorHandle, HammerCursorProps>(
  (_, ref) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const swingRef = useRef<HTMLDivElement>(null);
    const floatRef = useRef<HTMLDivElement>(null);
    const { cursorType } = useCursor();

    // Expose the triggerSwing method to the parent coordinator
    useImperativeHandle(ref, () => ({
      triggerSwing(onImpact: () => void) {
        if (!swingRef.current) {
          onImpact();
          return;
        }

        // Instant high-velocity hammer swing
        const tl = gsap.timeline();
        tl.to(swingRef.current, {
          rotation: -28, // Instant powerful downward strike
          x: -12,
          y: 8,
          duration: 0.04, // 40ms instant snap
          ease: "power4.in",
          onComplete: () => {
            onImpact();
          },
        })
          .to(swingRef.current, {
            rotation: 6, // Instant recoil bounce
            x: 4,
            y: -2,
            duration: 0.08,
            ease: "power2.out",
          })
          .to(swingRef.current, {
            rotation: 0, // Rest to center
            x: 0,
            y: 0,
            duration: 0.16,
            ease: "power2.out",
          });
      },
    }));

    // Mouse tracking & inertia rotation using direct low-latency GSAP quickTo
    useEffect(() => {
      const cursor = cursorRef.current;
      const floatEl = floatRef.current;
      if (!cursor || !floatEl) return;

      // Position center pivot on striking face of hammer
      const startX = typeof window !== "undefined" ? window.innerWidth * 0.72 : -100;
      const startY = typeof window !== "undefined" ? window.innerHeight * 0.45 : -100;
      gsap.set(cursor, { xPercent: -24, yPercent: -23, x: startX, y: startY });

      let hasMoved = false;
      const xTo = gsap.quickTo(cursor, "x", { duration: 0.02, ease: "none" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.02, ease: "none" });

      let lastX = startX;
      let lastTime = Date.now();

      const handleMouseMove = (e: MouseEvent) => {
        const now = Date.now();
        const dt = now - lastTime;
        
        if (!hasMoved) {
          gsap.set(cursor, { x: e.clientX, y: e.clientY });
          hasMoved = true;
        } else {
          xTo(e.clientX);
          yTo(e.clientY);
        }

        // Inertia angle calculation based on horizontal mouse velocity
        if (dt > 0) {
          const speedX = (e.clientX - lastX) / dt;
          const tilt = gsap.utils.clamp(-20, 20, speedX * 25);
          
          gsap.to(floatEl, {
            rotation: tilt,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        }

        lastX = e.clientX;
        lastTime = now;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Run idle float animation on mount
      const floatTween = gsap.to(floatEl, {
        y: "+=6",
        rotation: "+=2",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        floatTween.kill();
      };
    }, []);

    // If mobile/touch device, hide custom hammer entirely
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      return null;
    }

    return (
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none select-none"
        style={{
          width: "120px",
          height: "120px",
          display: cursorType === "hidden" ? "none" : "block",
        }}
      >
        {/* Swing rotation wrapper with pivot at hammer striking face */}
        <div ref={swingRef} className="origin-[29px_27px]">
          {/* Float and inertia wrapper */}
          <div ref={floatEl => { (floatRef as React.MutableRefObject<HTMLDivElement | null>).current = floatEl; }} className="origin-[29px_27px]">
            {/* Custom Sledge/Claw Hammer Graphic coming from right */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hammer-right-v4.webp"
              alt="Hammer"
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    );
  }
);

HammerCursor.displayName = "HammerCursor";
export default HammerCursor;
