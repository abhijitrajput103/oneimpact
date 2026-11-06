"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

/**
 * Scrolling problem blocks — matches SweetTape's "ROWS OF PRODUCTS" /
 * "ENDLESS CHOICES THAT SOMEHOW ALL BLUR TOGETHER" / "SAME PLAIN PACKAGING".
 *
 * Gold paper texture background with massive dark text.
 * Each block takes up nearly full viewport height.
 */

const SCROLL_BLOCKS = [
  { headline: "ROWS OF AGENCIES." },
  {
    headline: "ENDLESS PROMISES THAT SOMEHOW ALL BLUR TOGETHER.",
    subline: "Very few stood out.\nEven fewer delivered.",
  },
  {
    headline: "SAME PLAIN STRATEGIES.",
    subline: "Very few stood out.\nEven fewer delivered.",
  },
];

export function AboutScrollingText() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      el.querySelectorAll(".scroll-block").forEach((block) => {
        gsap.fromTo(
          block.querySelector(".scroll-headline"),
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 78%", once: true },
          }
        );

        const sub = block.querySelector(".scroll-subline");
        if (sub) {
          gsap.fromTo(
            sub,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              delay: 0.35,
              scrollTrigger: { trigger: block, start: "top 78%", once: true },
            }
          );
        }
      });

      // Divider lines
      el.querySelectorAll(".divider-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: { trigger: line, start: "top 90%", once: true },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#DA9F37" }}
    >
      {/* Paper texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about-paper-texture.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ mixBlendMode: "multiply", opacity: 0.4 }}
        draggable={false}
      />

      {/* Torn edge top */}
      <div className="relative z-10 w-full" style={{ marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform: "rotate(180deg)" }}>
          <path
            d="M0 40V20L30 10L60 25L90 8L120 22L150 5L180 20L210 12L240 28L270 6L300 18L330 30L360 10L390 24L420 6L450 20L480 14L510 26L540 8L570 22L600 4L630 18L660 28L690 10L720 20L750 6L780 24L810 12L840 26L870 4L900 20L930 14L960 28L990 8L1020 22L1050 6L1080 18L1110 26L1140 10L1170 24L1200 8L1230 20L1260 14L1290 28L1320 6L1350 22L1380 12L1410 24L1440 8V40Z"
            fill="#050505"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 sm:py-28 md:py-36 space-y-28 sm:space-y-36 md:space-y-44">
        {SCROLL_BLOCKS.map((block, i) => (
          <div key={i} className="scroll-block">
            <h2
              className="scroll-headline font-display font-black uppercase leading-[1.0] tracking-tight"
              style={{
                color: "#1A1A1A",
                fontSize: "clamp(2.2rem, 8vw, 6rem)",
                opacity: 0,
              }}
            >
              {block.headline}
            </h2>
            {block.subline && (
              <p
                className="scroll-subline font-sans text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 leading-relaxed whitespace-pre-line font-light"
                style={{ color: "rgba(26, 26, 26, 0.55)", opacity: 0 }}
              >
                {block.subline}
              </p>
            )}
          </div>
        ))}

        {/* "MADE FOR A REASON" divider */}
        <div className="flex items-center gap-5 sm:gap-8">
          <div
            className="divider-line flex-1 h-[2px] origin-left"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.3)", transform: "scaleX(0)" }}
          />
          <span
            className="font-display text-sm sm:text-base font-black tracking-[0.25em] uppercase"
            style={{ color: "#1A1A1A" }}
          >
            Made For A Reason
          </span>
          <div
            className="divider-line flex-1 h-[2px] origin-right"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.3)", transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* Torn edge bottom */}
      <div className="relative z-10 w-full" style={{ marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path
            d="M0 40V20L30 10L60 25L90 8L120 22L150 5L180 20L210 12L240 28L270 6L300 18L330 30L360 10L390 24L420 6L450 20L480 14L510 26L540 8L570 22L600 4L630 18L660 28L690 10L720 20L750 6L780 24L810 12L840 26L870 4L900 20L930 14L960 28L990 8L1020 22L1050 6L1080 18L1110 26L1140 10L1170 24L1200 8L1230 20L1260 14L1290 28L1320 6L1350 22L1380 12L1410 24L1440 8V40Z"
            fill="#050505"
          />
        </svg>
      </div>
    </section>
  );
}
