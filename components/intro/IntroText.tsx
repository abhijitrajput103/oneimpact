"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

interface IntroTextProps {
  isClicked: boolean;
  className?: string;
}

export function IntroText({ isClicked, className }: IntroTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isClicked) {
        // Fade away immediately when clicked
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -40,
          scale: 0.95,
          duration: 0.45,
          ease: "power3.in",
          overwrite: "auto",
        });
        return;
      }

      const words = containerRef.current?.querySelectorAll(".intro-word");
      if (!words) return;

      // Stagger entrance animation
      const tl = gsap.timeline();
      tl.fromTo(
        words,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: "power4.out",
        }
      );

      // Slow breathing pulsation animation on subtitle
      gsap.fromTo(
        ".intro-prompt",
        { opacity: 0.5, scale: 0.97 },
        {
          opacity: 1,
          scale: 1.03,
          duration: 2.0,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        }
      );
    },
    { dependencies: [isClicked], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center text-center z-30 select-none pointer-events-none px-6",
        className
      )}
    >
      <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[1.02] mb-4">
        <div className="overflow-hidden py-1">
          <span className="intro-word inline-block opacity-0 text-white">Break The</span>
        </div>
        <div className="overflow-hidden py-1">
          <span className="intro-word inline-block text-[#f9d230] opacity-0">Glass</span>
        </div>
      </h1>
      <p className="intro-prompt font-display text-[10px] md:text-sm font-bold tracking-[0.25em] text-white uppercase mt-6 opacity-0 drop-shadow-[0_0_12px_rgba(249,210,48,0.4)]">
        [ Click anywhere to enter One Impact ]
      </p>
    </div>
  );
}

export default IntroText;
