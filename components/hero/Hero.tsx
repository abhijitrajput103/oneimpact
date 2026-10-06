"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import { ColorRevealHero } from "./ColorRevealHero";
import { HeroTitle } from "./HeroTitle";
import { HeroCTA } from "./HeroCTA";
import { ScrollIndicator } from "./ScrollIndicator";


interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in on mount (800ms)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Exit animations as the hero section scrolls out of view
      const exitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      exitTimeline
        .to(".hero-title-section", {
          y: -120,
          opacity: 0,
          ease: "none",
        })
        .to(
          ".hero-cta-section",
          {
            scale: 0.92,
            opacity: 0,
            ease: "none",
          },
          "<"
        )
        .to(
          ".hero-scroll-indicator",
          {
            y: 30,
            opacity: 0,
            ease: "none",
          },
          "<"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className={cn(
        "relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center z-10 select-none pb-12 sm:pb-16 md:pb-20",
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      {/* Interactive color reveal artwork background */}
      <ColorRevealHero />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-black/40" />

      {/* Main core typography block */}
      <HeroTitle className="hero-title-section relative z-20" />

      {/* Magnetic glowing CTA */}
      <HeroCTA className="hero-cta-section relative z-20" />

      {/* Looping indicator */}
      <ScrollIndicator className="hero-scroll-indicator" />
    </section>
  );
}

export default Hero;
