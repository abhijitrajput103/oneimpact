"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import { splitTextIntoSpans } from "@/utils/gsapHelpers";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = containerRef.current?.querySelectorAll(".title-word");
      if (!words || words.length === 0) return;

      // Animate display words sliding up out of overflow masks
      gsap.fromTo(
        words,
        { y: "110%" },
        {
          y: "0%",
          duration: 1.2,
          ease: "reveal-ease", // defined globally in gsap setup
          stagger: 0.04,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Fade up subtitle
      const sub = containerRef.current?.querySelector(".title-subtitle");
      if (sub) {
        gsap.fromTo(
          sub,
          { opacity: 0, y: 15 },
          {
            opacity: 0.8,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const words = splitTextIntoSpans(title, "words");

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col gap-3 my-8 select-none",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
      {...props}
    >
      {subtitle && (
        <div className="overflow-hidden">
          <span className="title-subtitle text-accent-blue font-display text-[10px] md:text-xs font-extrabold tracking-widest uppercase block translate-y-0 opacity-0">
            {"// "}{subtitle}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-off-white flex flex-wrap gap-x-[0.25em] py-1">
        {words.map((word, idx) => (
          <span key={idx} className="relative inline-block overflow-hidden py-1">
            <span className="title-word inline-block translate-y-[110%]">{word}</span>
          </span>
        ))}
      </h2>
    </div>
  );
}

export default SectionTitle;
