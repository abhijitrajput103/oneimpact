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
        if (!swingRef.current) return;

        // Perform the swing timeline
        const tl = gsap.timeline();
        tl.to(swingRef.current, {
          rotation: -45, // Wind-up backswing
          x: -10,
          y: -10,
          duration: 0.15,
          ease: "power2.out",
        })
          .to(swingRef.current, {
            rotation: 25, // Powerful downswing
            x: 5,
            y: 5,
            duration: 0.1,
            ease: "power3.in",
            onComplete: () => {
              // Impact point - execute crack canvas trigger
              onImpact();
            },
          })
          .to(swingRef.current, {
            rotation: -10, // Rebound bounce
            duration: 0.15,
            ease: "power2.out",
          })
          .to(swingRef.current, {
            rotation: 0, // Rest to center
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
      },
    }));

    // Mouse tracking & inertia rotation using GSAP quickTo
    useEffect(() => {
      const cursor = cursorRef.current;
      const floatEl = floatRef.current;
      if (!cursor || !floatEl) return;

      // Position center pivot
      gsap.set(cursor, { xPercent: -15, yPercent: -15, x: -100, y: -100 });

      const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

      let lastX = 0;
      let lastTime = Date.now();

      const handleMouseMove = (e: MouseEvent) => {
        const now = Date.now();
        const dt = now - lastTime;
        
        xTo(e.clientX);
        yTo(e.clientY);

        // Inertia angle calculation based on horizontal mouse velocity
        if (dt > 0) {
          const speedX = (e.clientX - lastX) / dt;
          const tilt = gsap.utils.clamp(-25, 25, speedX * 35);
          
          gsap.to(floatEl, {
            rotation: tilt,
            duration: 0.4,
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
        {/* Swing rotation wrapper */}
        <div ref={swingRef} className="origin-[15px_15px]">
          {/* Float and inertia wrapper */}
          <div ref={floatRef} className="origin-[15px_15px]">
            {/* Custom Sledge/Claw Hammer SVG Graphic */}
            <Image src="/images/hammer-oneimpact.png" alt="Hammer" width={120} height={120} />
          </div>
        </div>
      </div>
    );
  }
);

HammerCursor.displayName = "HammerCursor";
export default HammerCursor;
