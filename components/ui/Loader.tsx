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

    // Split words or run simple animations
    const tl = gsap.timeline();

    // Stagger in initial branding text
    tl.fromTo(
      ".loader-word",
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.08,
      }
    );

    const exitTargets = [
      textRef.current,
      percentRef.current,
      ...container.querySelectorAll<HTMLElement>(".loader-word"),
    ].filter((node): node is HTMLElement => node !== null);

    // Counter animation object
    const counterObj = { value: 0 };
    gsap.to(counterObj, {
      value: 100,
      duration: 2.2,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.value));
      },
      onComplete: () => {
        // Exit timeline on counter completion
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });

        exitTl
          .to(exitTargets, {
            y: -40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.in",
            stagger: 0.05,
          })
          .to(
            container,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 1.0,
              ease: "power4.inOut",
            },
            "-=0.2"
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
          <span className="loader-word block text-accent-blue">{"// ONE IMPACT"}</span>
        </div>
        <div className="overflow-hidden">
          <span className="loader-word block text-off-white/40">CREATIVE STUDIO</span>
        </div>
      </div>

      {/* Center banner */}
      <div ref={textRef} className="my-auto overflow-hidden">
        <h1 className="font-display text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-off-white leading-[1.0]">
          <span className="inline-block loader-word">IMPACTING THE DIGITAL ERA</span>
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
