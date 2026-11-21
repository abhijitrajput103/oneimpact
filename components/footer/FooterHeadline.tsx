"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

interface FooterHeadlineProps {
  title?: string;
  subtitle?: string;
}

export function FooterHeadline({
  title = "Let's play.",
  subtitle = "Throw things around! We come here and do it virtually when we are stressed too🤭",
}: FooterHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!headlineRef.current) return;

      const elements = [headlineRef.current, subtitleRef.current].filter(Boolean);

      gsap.fromTo(
        elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "reveal-ease",
          scrollTrigger: {
            trigger: containerRef.current || headlineRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="mt-8 md:mt-12 lg:mt-16">
      <h2
        ref={headlineRef}
        className="font-display text-[clamp(2rem,7vw,7rem)] font-black text-off-white leading-[0.95] tracking-tighter opacity-0"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/75 font-sans font-medium max-w-4xl lg:max-w-5xl leading-relaxed opacity-0"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default FooterHeadline;
