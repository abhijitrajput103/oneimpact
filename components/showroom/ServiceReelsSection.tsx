"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { SHOWREEL_REELS } from "./ReelsData";

const ReelModal = dynamic(
  () => import("./ReelModal").then((m) => m.ReelModal),
  { ssr: false }
);

interface ServiceReelsSectionProps {
  heading?: string;
  subtitle?: string;
  projectCtaHref?: string;
}

export function ServiceReelsSection({
  heading = "Creator reels in action",
  subtitle = "Explore creator-led stories and brand films right inside the page.",
  projectCtaHref = "/contact",
}: ServiceReelsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Social bar interactive states
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [repostCount, setRepostCount] = useState(0);

  const scrollTrack = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const step = 300;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  // Split heading into white base words + yellow italic action words
  const headingWords = heading.trim().split(" ");
  let mainHeading = heading;
  let highlightHeading = "";

  if (headingWords.length >= 3) {
    const lastTwo = headingWords.slice(-2).join(" ");
    if (
      lastTwo.toLowerCase() === "in action" ||
      lastTwo.toLowerCase() === "in motion" ||
      lastTwo.toLowerCase() === "for brands" ||
      lastTwo.toLowerCase() === "brand search"
    ) {
      mainHeading = headingWords.slice(0, -2).join(" ");
      highlightHeading = lastTwo;
    } else {
      mainHeading = headingWords.slice(0, -2).join(" ");
      highlightHeading = headingWords.slice(-2).join(" ");
    }
  } else if (headingWords.length === 2) {
    mainHeading = headingWords[0];
    highlightHeading = headingWords[1];
  }

  return (
    <section
      id="reels-showcase"
      className="relative w-full overflow-hidden select-none bg-black text-white"
    >
      {/* ── TOP BREAKER.SVG BLUE TORN BORDER (100% FULL-BLEED VIEWPORT WIDTH) ── */}
      <div
        className="w-full min-w-full overflow-hidden leading-none pointer-events-none select-none block -mb-[1px]"
        style={{
          width: "100%",
          minWidth: "100%",
          lineHeight: 0,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 120 1080 120"
          preserveAspectRatio="none"
          className="w-full min-w-full block select-none pointer-events-none"
          style={{
            width: "100%",
            minWidth: "100%",
            height: "clamp(55px, 8vw, 130px)",
            display: "block",
          }}
        >
          <defs>
            <linearGradient
              id="breaker-blue-gradient-inline"
              x1="0"
              y1="120"
              x2="0"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#0053df" stopOpacity="1" />
              <stop offset="15%" stopColor="#003db3" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#002166" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M-1.59,124.52c.72,0,.96-2.2,1.91-2.75.96-.55,1.44,1.92,1.68,3.02.24,1.1,3.11,0,4.31-.55,1.2-.55,2.39.27,3.35.82.96.55,2.15-.28,2.63-1.37.48-1.1,4.07,1.1,4.55,2.2.48,1.1,2.87,1.37,2.87,1.37h4.07c1.44,0,5.98-1.92,7.42-1.37s4.79,1.92,5.98,2.2c1.2.28,5.5-2.2,6.46-2.2s4.07-.55,4.79.82c.72,1.37,1.91,1.1,3.11-.28,1.2-1.37,3.59-.82,4.31-.55.72.28,3.59-1.65,3.59-1.65l2.39-1.65s4.31.28,5.98.83c1.68.55,3.35-2.75,4.07-2.75s1.68,1.65,2.87,1.65,2.63,1.92,2.87,4.4c.24,2.47,1.68.28,3.59-.82,1.91-1.1,2.63,2.75,3.35,3.3.72.55,3.44.88,5.26,1.21,1.82.33,3.07-.44,5.56-1.54,2.49-1.1,2.97,1.76,3.55,1.87.58.11,1.63.11,2.4,0,.77-.11,2.01-.44,3.16.55,1.15.99,1.73,1.21,2.88,1.65,1.15.44,2.59.22,3.64,1.21,1.05.99,4.89,1.65,5.18,2.09.29.44,1.15.11,1.82-.33.67-.44,1.73.11,3.07.66,1.34.55,2.4.44,3.45.33,1.05-.11,2.78-.66,4.31-.88s3.64,1.21,3.64,1.21c0,0,1.53.44,1.92.77.38.33,1.63.66,2.59.77.96.11,2.97-.44,3.93-.44s2.4.22,3.45.33c1.05.11,1.73-1.87,2.49-2.42.77-.55,5.27-.22,5.27-.22,0,0,1.15-.77,1.82-.66.67.11,1.34-.88,2.2-1.21.86-.33,1.73.44,2.88.77,1.15.33,3.74-1.65,4.6-2.09.86-.44,2.49-.11,3.07.77.58.88,2.49,1.98,3.26,1.87.77-.11,2.68.33,3.16,1.87.48,1.54,2.59.88,3.35.11.77-.77,1.53-.77,2.4-.44.86.33,3.93-.33,4.98-.77,1.05-.44,2.78,1.1,3.64,1.87.86.77,2.68-1.54,2.68-1.54,0,0,2.01-.44,3.16-.44s2.11-.66,2.97-.33c.86.33,2.59,1.21,3.45,1.98.86.77,2.49.88,3.45,1.1s2.3-.55,3.45-1.43c1.15-.88,2.97.44,3.93.44s2.3-1.87,2.88-2.42c.58-.55,4.7.22,5.56.22s.58-1.1,1.25-1.98c.67-.88,1.92-.22,3.16.33,1.25.55,2.78,1.21,3.45,1.32.67.11,2.3-1.1,2.97-1.54.67-.44,1.63.77,2.49,1.43.86.66,1.34-1.32,1.92-2.53.58-1.21,3.55-.22,4.6-.77,1.05-.55,1.73,2.09,2.2,2.42.48.33,2.3-1.65,2.68-1.65s.96,1.43,1.53,1.98c.57.55.96-1.1,1.92-2.09.96-.99,2.97.55,4.5.88,1.53.33,1.44-1.65,3.07-2.42,1.63-.77,1.25,1.54,2.11,1.32.86-.22,1.53-1.65,1.92-2.31.38-.66.77.22,1.53.33.77.11,2.49.44,2.97.55.48.11,1.34-.55,1.92-1.32.58-.77,2.88,1.21,3.14,1.21,0,0,0,0,0-.01,0,0,0,.01,0,.01.26,0,2.56-1.98,3.14-1.21.58.77,1.44,1.43,1.92,1.32.48-.11,2.2-.44,2.97-.55.77-.11,1.15-.99,1.53-.33.38.66,1.05,2.09,1.92,2.31.86.22.48-2.09,2.11-1.32,1.63.77,1.53,2.75,3.07,2.42,1.53-.33,3.55-1.87,4.5-.88.96.99,1.34,2.64,1.92,2.09.58-.55,1.15-1.98,1.53-1.98s2.2,1.98,2.68,1.65c.48-.33,1.15-2.97,2.2-2.42,1.05.55,4.03-.44,4.6.77.58,1.21,1.05,3.19,1.92,2.53.86-.66,1.82-1.87,2.49-1.43.67.44,2.3,1.65,2.97,1.54.67-.11,2.2-.77,3.45-1.32,1.25-.55,2.49-1.21,3.16-.33.67.88.38,1.98,1.25,1.98s4.98-.77,5.56-.22c.58.55,1.92,2.42,2.88,2.42s2.78-1.32,3.93-.44c1.15.88,2.49,1.65,3.45,1.43s2.59-.33,3.45-1.1c.86-.77,2.59-1.65,3.45-1.98.86-.33,1.82.33,2.97.33s3.16.44,3.16.44c0,0,1.82,2.31,2.68,1.54.86-.77,2.59-2.31,3.64-1.87,1.05.44,4.12,1.1,4.98.77.86-.33,1.63-.33,2.4.44.77.77,2.88,1.43,3.35-.11.48-1.54,2.4-1.98,3.16-1.87.77.11,2.68-.99,3.26-1.87.58-.88,2.2-1.21,3.07-.77.86.44,3.45,2.42,4.6,2.09,1.15-.33,2.01-1.1,2.88-.77.86.33,1.53,1.32,2.2,1.21.67-.11,1.82.66,1.82.66,0,0,4.5-.33,5.27.22.77.55,1.44,2.53,2.49,2.42,1.05-.11,2.49-.33,3.45-.33s2.97.55,3.93.44c.96-.11,2.2-.44,2.59-.77.38-.33,1.92-.77,1.92-.77,0,0,2.11-1.43,3.64-1.21,1.53.22,3.26.77,4.31.88,1.05.11,2.11.22,3.45-.33,1.34-.55,2.4-1.1,3.07-.66.67.44,1.53.77,1.82.33.29-.44,4.12-1.1,5.18-2.09,1.05-.99,2.49-.77,3.64-1.21,1.15-.44,1.73-.66,2.88-1.65,1.15-.99,2.4-.66,3.16-.55.77.11,1.82.11,2.4,0,.58-.11,1.05-2.97,3.55-1.87,2.49,1.1,3.74,1.87,5.56,1.54,1.82-.33,4.54-.66,5.26-1.21.72-.55,1.44-4.4,3.35-3.3,1.91,1.1,3.35,3.3,3.59.82.24-2.47,1.68-4.4,2.87-4.4s2.15-1.65,2.87-1.65,2.39,3.3,4.07,2.75c1.67-.55,5.98-.83,5.98-.83l2.39,1.65s2.87,1.92,3.59,1.65c.72-.28,3.11-.82,4.31.55,1.2,1.38,2.39,1.65,3.11.28.72-1.37,3.83-.82,4.79-.82s5.27,2.47,6.46,2.2c1.2-.27,4.55-1.65,5.98-2.2,1.44-.55,5.98,1.37,7.42,1.37h4.07s2.39-.27,2.87-1.37c.48-1.1,4.07-3.3,4.55-2.2.48,1.1,1.68,1.92,2.63,1.37.96-.55,2.15-1.37,3.35-.82,1.2.55,4.07,1.65,4.31.55.24-1.1.72-3.57,1.68-3.02.96.55,1.2,2.75,1.91,2.75s1.68,1.1,1.68,1.1v-.02s.96-1.1,1.67-1.1.96-2.2,1.91-2.75c.96-.55,1.44,1.92,1.68,3.02.24,1.1,3.11,0,4.31-.55,1.2-.55,2.39.27,3.35.82.96.55,2.15-.28,2.63-1.37.48-1.1,4.07,1.1,4.55,2.2.48,1.1,2.87,1.37,2.87,1.37h4.07c1.44,0,5.98-1.92,7.42-1.37s4.79,1.92,5.98,2.2c1.2.28,5.5-2.2,6.46-2.2s4.07-.55,4.79.82c.72,1.37,1.91,1.1,3.11-.28,1.2-1.37,3.59-.82,4.31-.55.72.28,3.59-1.65,3.59-1.65l2.39-1.65s4.31.28,5.98.83c1.68.55,3.35-2.75,4.07-2.75s1.68,1.65,2.87,1.65,2.63,1.92,2.87,4.4c.24,2.47,1.68.28,3.59-.82,1.91-1.1,2.63,2.75,3.35,3.3.72.55,3.44.88,5.26,1.21,1.82.33,3.07-.44,5.56-1.54,2.49-1.1,2.97,1.76,3.55,1.87.58.11,1.63.11,2.4,0,.77-.11,2.01-.44,3.16.55,1.15.99,1.73,1.21,2.88,1.65,1.15.44,2.59.22,3.64,1.21,1.05.99,4.89,1.65,5.18,2.09.29.44,1.15.11,1.82-.33s1.73.11,3.07.66c1.34.55,2.4.44,3.45.33,1.05-.11,2.78-.66,4.31-.88,1.53-.22,3.64,1.21,3.64,1.21,0,0,1.53.44,1.92.77.38.33,1.63.66,2.59.77.96.11,2.97-.44,3.93-.44s2.4.22,3.45.33c1.05.11,1.73-1.87,2.49-2.42.77-.55,5.27-.22,5.27-.22,0,0,1.15-.77,1.82-.66.67.11,1.34-.88,2.2-1.21.86-.33,1.72.44,2.88.77,1.15.33,3.74-1.65,4.6-2.09.86-.44,2.49-.11,3.07.77.58.88,2.49,1.98,3.26,1.87.77-.11,2.68.33,3.16,1.87.48,1.54,2.59.88,3.35.11.77-.77,1.53-.77,2.4-.44.86.33,3.93-.33,4.98-.77,1.05-.44,2.78,1.1,3.64,1.87.86.77,2.68-1.54,2.68-1.54,0,0,2.01-.44,3.16-.44s2.11-.66,2.97-.33c.86.33,2.59,1.21,3.45,1.98.86.77,2.49.88,3.45,1.1.96.22,2.3-.55,3.45-1.43,1.15-.88,2.97.44,3.93.44s2.3-1.87,2.88-2.42c.58-.55,4.7.22,5.56.22s.58-1.1,1.25-1.98c.67-.88,1.92-.22,3.16.33,1.25.55,2.78,1.21,3.45,1.32.67.11,2.3-1.1,2.97-1.54.67-.44,1.63.77,2.49,1.43.86.66,1.34-1.32,1.92-2.53.58-1.21,3.55-.22,4.6-.77,1.05-.55,1.73,2.09,2.2,2.42.48.33,2.3-1.65,2.68-1.65s.96,1.43,1.53,1.98c.58.55.96-1.1,1.92-2.09.96-.99,2.97.55,4.5.88,1.53.33,1.44-1.65,3.07-2.42,1.63-.77,1.25,1.54,2.11,1.32.86-.22,1.53-1.65,1.92-2.31.38-.66.77.22,1.53.33.77.11,2.49.44,2.97.55.48.11,1.34-.55,1.92-1.32.58-.77,2.88,1.21,3.14,1.21,0,0,0,0,0-.01,0,0,0,.01,0,.01.26,0,2.56-1.98,3.14-1.21.58.77,1.44,1.43,1.92,1.32.48-.11,2.2-.44,2.97-.55.77-.11,1.15-.99,1.53-.33.38.66,1.05,2.09,1.92,2.31.86.22.48-2.09,2.11-1.32,1.63.77,1.53,2.75,3.07,2.42,1.53-.33,3.55-1.87,4.5-.88.96.99,1.34,2.64,1.92,2.09.58-.55,1.15-1.98,1.53-1.98s2.2,1.98,2.68,1.65c.48-.33,1.15-2.97,2.2-2.42s4.03-.44,4.6.77c.58,1.21,1.05,3.19,1.92,2.53.86-.66,1.82-1.87,2.49-1.43.67.44,2.3,1.65,2.97,1.54.67-.11,2.2-.77,3.45-1.32,1.25-.55,2.49-1.21,3.16-.33.67.88.38,1.98,1.25,1.98s4.98-.77,5.56-.22c.58.55,1.92,2.42,2.88,2.42s2.78-1.32,3.93-.44c1.15.88,2.49,1.65,3.45,1.43.96-.22,2.59-.33,3.45-1.1.86-.77,2.59-1.65,3.45-1.98.86-.33,1.82.33,2.97.33s3.16.44,3.16.44c0,0,1.82,2.31,2.68,1.54.86-.77,2.59-2.31,3.64-1.87,1.05.44,4.12,1.1,4.98.77.86-.33,1.63-.33,2.4.44.77.77,2.88,1.43,3.35-.11.48-1.54,2.4-1.98,3.16-1.87.77.11,2.68-.99,3.26-1.87.58-.88,2.2-1.21,3.07-.77.86.44,3.45,2.42,4.6,2.09,1.15-.33,2.01-1.1,2.88-.77.86.33,1.53,1.32,2.2,1.21.67-.11,1.82.66,1.82.66,0,0,4.5-.33,5.27.22.77.55,1.44,2.53,2.49,2.42,1.05-.11,2.49-.33,3.45-.33s2.97.55,3.93.44c.96-.11,2.2-.44,2.59-.77.38-.33,1.92-.77,1.92-.77,0,0,2.11-1.43,3.64-1.21,1.53.22,3.26.77,4.31.88,1.05.11,2.11.22,3.45-.33,1.34-.55,2.4-1.1,3.07-.66.67.44,1.53.77,1.82.33.29-.44,4.12-1.1,5.18-2.09,1.05-.99,2.49-.77,3.64-1.21,1.15-.44,1.73-.66,2.88-1.65,1.15-.99,2.4-.66,3.16-.55.77.11,1.82.11,2.4,0,.58-.11,1.05-2.97,3.55-1.87,2.49,1.1,3.74,1.87,5.56,1.54,1.82-.33,4.54-.66,5.26-1.21.72-.55,1.44-4.4,3.35-3.3,1.91,1.1,3.35,3.3,3.59.82.24-2.47,1.68-4.4,2.87-4.4s2.15-1.65,2.87-1.65,2.39,3.3,4.07,2.75c1.68-.55,5.98-.83,5.98-.83l2.39,1.65s2.87,1.92,3.59,1.65c.72-.28,3.11-.82,4.31.55,1.2,1.38,2.39,1.65,3.11.28.72-1.37,3.83-.82,4.79-.82s5.27,2.47,6.46,2.2c1.2-.27,4.55-1.65,5.98-2.2,1.44-.55,5.98,1.37,7.42,1.37h4.07s2.39-.27,2.87-1.37c.48-1.1,4.07-3.3,4.55-2.2.48,1.1,1.68,1.92,2.63,1.37.96-.55,2.15-1.37,3.35-.82,1.2.55,4.07,1.65,4.31.55.24-1.1.72-3.57,1.68-3.02.96.55,1.2,2.75,1.91,2.75s1.68,1.1,1.68,1.1V240H-1.59Z"
            fill="url(#breaker-blue-gradient-inline)"
          />
        </svg>
      </div>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-2 sm:pt-4 md:pt-6 pb-12 sm:pb-16 md:pb-20">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 md:mb-12">
          {/* Left Title & Subtitle */}
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.08]">
              {mainHeading}{" "}
              {highlightHeading && (
                <span className="text-[#F9D230] italic font-serif">
                  {highlightHeading}
                </span>
              )}
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-white/70 font-sans font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right Navigation Controls — Pill with 2 yellow circular arrow buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 self-start sm:self-auto shrink-0 shadow-xl">
            <button
              type="button"
              onClick={() => scrollTrack("prev")}
              aria-label="Previous reel"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F9D230] hover:bg-[#ffe156] active:scale-90 text-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollTrack("next")}
              aria-label="Next reel"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F9D230] hover:bg-[#ffe156] active:scale-90 text-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── REELS CAROUSEL STRIP ───────────────────────────────────── */}
        <div
          ref={trackRef}
          className="flex items-stretch gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {SHOWREEL_REELS.map((reel, idx) => (
            <button
              key={reel.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Play ${reel.title} — ${reel.label} reel`}
              className="group relative flex-shrink-0 text-left bg-transparent border-0 p-0 appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9D230] rounded-[28px] transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                width: "clamp(220px, 22vw, 290px)",
                scrollSnapAlign: "start",
              }}
            >
              {/* Smartphone Frame with 9:16 aspect ratio */}
              <div className="relative w-full aspect-[9/16] rounded-[26px] sm:rounded-[28px] overflow-hidden bg-[#07070a] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-[#F9D230]/40 group-hover:shadow-[0_25px_60px_rgba(249,210,48,0.2)]">
                {/* Reel Background Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={reel.thumbnail}
                  alt={reel.thumbnailAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                  draggable={false}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/70 pointer-events-none" />

                {/* Top Badge: "ARCHITECTURE SERIES" Pill */}
                <div className="absolute top-4 inset-x-0 flex justify-center pointer-events-none z-10 px-3">
                  <span className="px-3.5 py-1 rounded-full bg-white/12 backdrop-blur-md border border-white/15 text-[9.5px] sm:text-[10.5px] font-sans font-bold tracking-widest text-white/90 uppercase text-center truncate shadow-sm">
                    {reel.label}
                  </span>
                </div>

                {/* Center Yellow Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#F9D230] flex items-center justify-center shadow-[0_0_28px_rgba(249,210,48,0.65)] transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-black ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Overlay: Category + Title */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 pointer-events-none z-10 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] font-display font-black tracking-widest text-[#F9D230] uppercase block mb-1">
                    {reel.serviceTag || "CREATOR & THOUGHT LEADERSHIP"}
                  </span>
                  <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-tight leading-snug line-clamp-1">
                    {reel.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ── INSTAGRAM-STYLE SOCIAL ACTION BAR ───────────────────────── */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex items-center justify-center gap-7 sm:gap-9">
          {/* 1. Heart (Yellow) */}
          <button
            type="button"
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Like reel"
            className="transition-transform duration-200 hover:scale-125 active:scale-95 cursor-pointer p-1"
          >
            <svg
              className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-200 ${
                isLiked
                  ? "fill-[#F9D230] stroke-[#F9D230]"
                  : "fill-none stroke-[#F9D230]"
              }`}
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {/* 2. Comment / Bubble (Blue) */}
          <button
            type="button"
            onClick={() => {
              if (SHOWREEL_REELS.length > 0) setActiveIndex(0);
            }}
            aria-label="Comment on reels"
            className="transition-transform duration-200 hover:scale-125 active:scale-95 cursor-pointer p-1"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-none stroke-[#5B8DEF]"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
            </svg>
          </button>

          {/* 3. Repost / Arrows Loop (Yellow) */}
          <button
            type="button"
            onClick={() => setRepostCount((c) => c + 1)}
            aria-label="Repost reel"
            className="transition-transform duration-200 hover:scale-125 active:scale-95 cursor-pointer p-1"
          >
            <svg
              className={`w-7 h-7 sm:w-8 sm:h-8 fill-none stroke-[#F9D230] transition-transform duration-300 ${
                repostCount > 0 ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 2l4 4-4 4" />
              <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
              <path d="M7 22l-4-4 4-4" />
              <path d="M21 13v1a4 4 0 0 1-4 4H3" />
            </svg>
          </button>

          {/* 4. Paper Airplane / Share (Blue) */}
          <button
            type="button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "One Impact Reels",
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
            aria-label="Share reel"
            className="transition-transform duration-200 hover:scale-125 active:scale-95 cursor-pointer p-1"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-none stroke-[#5B8DEF]"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>

          {/* 5. Bookmark / Save (Yellow) */}
          <button
            type="button"
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label="Bookmark reel"
            className="transition-transform duration-200 hover:scale-125 active:scale-95 cursor-pointer p-1"
          >
            <svg
              className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-200 ${
                isBookmarked
                  ? "fill-[#F9D230] stroke-[#F9D230]"
                  : "fill-none stroke-[#F9D230]"
              }`}
              viewBox="0 0 24 24"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* In-Website Reel Player Lightbox Modal */}
      <ReelModal
        reels={SHOWREEL_REELS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelectIndex={(idx) => setActiveIndex(idx)}
        projectCtaHref={projectCtaHref}
      />
    </section>
  );
}

export default ServiceReelsSection;
