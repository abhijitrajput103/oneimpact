"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import { splitTextIntoSpans } from "@/utils/gsapHelpers";

interface RevealTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  delay?: number;
}

export function RevealText({ text, delay = 0, className, ...props }: RevealTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const words = textRef.current?.querySelectorAll(".reveal-word");
      if (!words || words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.1, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.015,
          delay,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: textRef }
  );

  const words = splitTextIntoSpans(text, "words");

  return (
    <p
      ref={textRef}
      className={cn(
        "font-sans text-base md:text-lg lg:text-xl text-off-white/80 leading-relaxed flex flex-wrap gap-x-[0.25em]",
        className
      )}
      {...props}
    >
      {words.map((word, idx) => (
        <span key={idx} className="reveal-word inline-block opacity-10">
          {word}
        </span>
      ))}
    </p>
  );
}

export default RevealText;
