"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import { ColorRevealHero } from "./ColorRevealHero";
import { HeroTitle } from "./HeroTitle";
import { ScrollIndicator } from "./ScrollIndicator";
import { IconBubblePop } from "./IconBubblePop";
import { WaveDivider } from "@/components/common/WaveDivider";


interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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
        "relative w-full min-h-[100dvh] max-sm:min-h-[max(100dvh,177.78vw)] md:min-h-[max(100dvh,56.25vw)] overflow-hidden flex flex-col justify-center items-center z-10 select-none pb-12 sm:pb-16 md:pb-20",
        className
      )}
    >
      {/* Interactive color reveal artwork background */}
      <ColorRevealHero />

      {/* Clickable icon bubble pop — childhood bubble game */}
      <IconBubblePop />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-black/40" />

      {/* Main core typography block */}
      <HeroTitle className="hero-title-section relative z-20" />

      {/* Looping indicator */}
      <ScrollIndicator className="hero-scroll-indicator" />

      {/* Bottom Organic Wave / Zig Zag Divider */}
      <WaveDivider
        fillBelow="#000000"
        strokeColor="#FFFFFF"
        strokeWidth={12}
        containerStyle={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 30,
        }}
      />
    </section>
  );
}

export default Hero;
