"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

interface HeroTitleProps {
  className?: string;
}

export function HeroTitle({ className }: HeroTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lines = containerRef.current?.querySelectorAll(".title-line-inner");
      if (!lines || lines.length === 0) return;

      // Animate heading lines sliding up out of overflow frames
      gsap.fromTo(
        lines,
        { y: "115%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.5,
          stagger: 0.15,
          ease: "reveal-ease", // preset custom ease in gsap index
          delay: 0.35,
        }
      );

      // Animate subtitle paragraph
      const sub = containerRef.current?.querySelector(".hero-subtitle");
      if (sub) {
        gsap.fromTo(
          sub,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 0.6,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.8,
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center text-center select-none max-w-4xl px-4",
        className
      )}
    >
      {/* <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-[7.2rem] font-black tracking-tighter text-off-white leading-[0.88] uppercase flex flex-col gap-1">
        <div className="overflow-hidden py-2">
          <span className="title-line-inner inline-block translate-y-[115%] opacity-0">
            ONE IMPACT
          </span>
        </div>
        <div className="overflow-hidden py-2">
          <span className="title-line-inner inline-block text-accent-blue translate-y-[115%] opacity-0">
            EXPERIENCES
          </span>
        </div>
      </h1>
      
      <p className="hero-subtitle font-sans text-[8px] sm:text-[10px] md:text-xs tracking-[0.2em] text-off-white/60 font-semibold uppercase mt-4 sm:mt-6 md:mt-8 opacity-0 max-w-md leading-relaxed">
        Crafting award-winning interactive interfaces and high-performance digital narratives.
      </p> */}
    </div>
  );
}

export default HeroTitle;
