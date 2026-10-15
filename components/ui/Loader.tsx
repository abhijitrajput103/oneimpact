"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if already loaded in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("oneimpact-loaded") === "true") {
      if (onComplete) onComplete();
      return;
    }

    // Split words or run simple animations
    const tl = gsap.timeline();

    // Stagger in initial branding text
    tl.fromTo(
      ".loader-word",
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.05,
      }
    );

    const exitTargets = [
      textRef.current,
      percentRef.current,
      ...container.querySelectorAll<HTMLElement>(".loader-word"),
    ].filter((node): node is HTMLElement => node !== null);

    // Fast counter animation (0.9s instead of 2.2s for blazing-fast initial load)
    const counterObj = { value: 0 };
    gsap.to(counterObj, {
      value: 100,
      duration: 0.9,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.value));
      },
      onComplete: () => {
        sessionStorage.setItem("oneimpact-loaded", "true");
        // Quick exit timeline
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });

        exitTl
          .to(exitTargets, {
            y: -30,
            opacity: 0,
            duration: 0.35,
            ease: "power3.in",
            stagger: 0.03,
          })
          .to(
            container,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 0.5,
              ease: "power4.inOut",
            },
            "-=0.1"
          );
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-99999 flex flex-col justify-between p-4 sm:p-8 md:p-16 select-none"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start font-display text-[8px] sm:text-[9px] md:text-xs font-bold tracking-widest uppercase">
        <div className="overflow-hidden">
          <span className="loader-word block text-[#DA9F37]">{"// ONE IMPACT"}</span>
        </div>
        <div className="overflow-hidden">
          <span className="loader-word block text-off-white/40">CREATIVE STUDIO</span>
        </div>
      </div>

      {/* Center banner */}
      <div ref={textRef} className="my-auto overflow-hidden py-4 sm:py-6 md:py-8">
        <h1 className="font-display text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-off-white leading-[1.25]">
          <span className="inline-block loader-word pb-3 sm:pb-6">Impacting The Digital Era</span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-end">
        <div className="overflow-hidden font-display text-[8px] sm:text-[9px] md:text-xs font-bold tracking-widest uppercase">
          <span className="loader-word block text-off-white/40">INITIALIZING MODULES...</span>
        </div>
        <div
          ref={percentRef}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tighter text-off-white leading-none"
        >
          {progress.toString().padStart(3, "0")}%
        </div>
      </div>
    </div>
  );
}

export default Loader;
