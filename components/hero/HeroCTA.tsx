"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useCursor } from "@/hooks/useCursor";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/gsap";
import { cn } from "@/utils/cn";

interface HeroCTAProps {
  className?: string;
}

export function HeroCTA({ className }: HeroCTAProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const { setCursorType, resetCursor } = useCursor();

  useGSAP(() => {
    // Entrance scaling animation
    gsap.fromTo(
      ".hero-cta-btn-wrapper",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.6)",
        delay: 1.1,
      }
    );
  });

  const handleMouseEnter = () => {
    setCursorType("hover");
    // Expand and intensify glow backing
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.6,
        scale: 1.4,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    resetCursor();
    // Soften glow backing
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.15,
        scale: 1.0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      className={cn("hero-cta-btn-wrapper relative opacity-0 mt-4 sm:mt-6 md:mt-8 group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic glow backing */}
      <div
        ref={glowRef}
        className="absolute inset-0 bg-accent-blue/20 blur-2xl rounded-full scale-100 opacity-20 pointer-events-none -z-10"
      />
      <Button variant="primary" arrow={true} magnetic={true}>
        EXPLORE IMPACT
      </Button>
    </div>
  );
}

export default HeroCTA;
