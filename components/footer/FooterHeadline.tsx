"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

export function FooterHeadline() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headlineRef.current) return;

      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "reveal-ease",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: headlineRef }
  );

  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <h2
        ref={headlineRef}
        className="font-display text-[clamp(2rem,7vw,7rem)] font-black text-off-white leading-[0.95] tracking-tighter opacity-0"
      >
        Let&apos;s talk.
      </h2>
    </div>
  );
}

export default FooterHeadline;
