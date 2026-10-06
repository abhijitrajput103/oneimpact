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
        { opacity: 0.3, scale: 0.97 },
        {
          opacity: 0.7,
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
      <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-off-white leading-[0.95] mb-4">
        <div className="overflow-hidden py-1">
          <span className="intro-word inline-block opacity-0">BREAK THE</span>
        </div>
        <div className="overflow-hidden py-1">
          <span className="intro-word inline-block text-accent-blue opacity-0">GLASS.</span>
        </div>
      </h1>
      <p className="intro-prompt font-display text-[9px] md:text-xs font-bold tracking-widest text-off-white/40 uppercase mt-4 opacity-0">
        [ Click anywhere to enter One Impact ]
      </p>
    </div>
  );
}

export default IntroText;
