"use client";

import React, { useRef, useState } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import { SHOWREEL_REELS } from "./ReelsData";
import { ReelModal } from "./ReelModal";

interface ShowreelProps {
  className?: string;
}

/* ─── Component ───────────────────────────────────────────────── */

export function Showreel({ className }: ShowreelProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Animate showreel title characters
      gsap.fromTo(
        section.querySelectorAll(".showreel-char"),
        { y: 60, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate subtitle
      gsap.fromTo(
        section.querySelector(".showreel-description"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate scattered polaroid photo cards
      gsap.fromTo(
        section.querySelectorAll(".showreel-card"),
        { y: 80, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector(".showreel-card"),
            start: "top 92%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const ourText = "Our";
  const workText = "Work";

  return (
    <section
      ref={sectionRef}
      id="showreel"
      className={cn(
        "relative w-full bg-black select-none z-10",
        className
      )}
    >
      {/* Content container */}
      <div className="relative z-[5] px-4 sm:px-8 md:px-12 lg:px-20 pt-8 sm:pt-10 md:pt-14 lg:pt-16 pb-12 sm:pb-16 md:pb-20">
        {/* Title: "Our Work" */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none overflow-hidden py-2">
            {ourText.split("").map((char, i) => (
              <span
                key={`our-${i}`}
                className="showreel-char inline-block text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
              >
                {char}
              </span>
            ))}
            <span className="showreel-char inline-block text-white">&nbsp;</span>
            {workText.split("").map((char, i) => (
              <span
                key={`work-${i}`}
                className="showreel-char inline-block text-[#f9d230] drop-shadow-[0_2px_16px_rgba(249,210,48,0.4)]"
              >
                {char}
              </span>
            ))}
          </h2>

          {/* Decorative line under title */}
          <div className="mx-auto mt-4 w-20 sm:w-24 h-[2.5px] bg-gradient-to-r from-transparent via-[#f9d230] to-transparent shadow-[0_0_10px_#f9d230]" />
        </div>

        {/* Description paragraph */}
        <p className="showreel-description text-center max-w-2xl lg:max-w-3xl mx-auto text-white text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium mb-10 sm:mb-16 md:mb-24 drop-shadow-sm">
          Every frame we craft tells a story of vision, passion, and relentless attention to detail.
          From intimate brand moments to grand experiential campaigns, our work captures the
          creative pulse that drives everything we do — bold aesthetics, cinematic storytelling,
          and designs that leave a lasting impression.
        </p>

        {/* Photo cards carousel container with left & right navigation buttons */}
        <div className="relative w-full z-30 -mb-16 sm:-mb-24 md:-mb-32 lg:-mb-44 xl:-mb-48">
          {/* Left Arrow Button (Mobile/Tablet only) */}
          <button
            type="button"
            onClick={handleScrollLeft}
            className="absolute left-1 sm:left-4 z-40 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 backdrop-blur-md hover:bg-[#f9d230] text-white hover:text-black border border-white/20 flex md:hidden items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 active:scale-90 shadow-2xl"
            aria-label="Previous photo"
          >
            ←
          </button>

          {/* Right Arrow Button (Mobile/Tablet only) */}
          <button
            type="button"
            onClick={handleScrollRight}
            className="absolute right-1 sm:right-4 z-40 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 backdrop-blur-md hover:bg-[#f9d230] text-white hover:text-black border border-white/20 flex md:hidden items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 active:scale-90 shadow-2xl"
            aria-label="Next photo"
          >
            →
          </button>

          {/* Reel cards carousel — all 5 cards open in-website ReelModal (no external redirects) */}
          <div
            ref={carouselRef}
            className="flex justify-start md:justify-center items-end gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible scrollbar-none pb-4 md:pb-0 px-10 sm:px-16 md:px-0"
          >
            {SHOWREEL_REELS.map((reel, idx) => (
              <button
                key={reel.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Play ${reel.title} — ${reel.label} reel`}
                className="showreel-card group relative flex-shrink-0 text-left bg-transparent border-0 p-0 appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f9d230] rounded-[6px]"
                style={{
                  transform: `rotate(${reel.rotation}deg) translateY(${reel.offsetY}px)`,
                  opacity: 0,
                }}
              >
                {/* Inner wrapper for hover lift */}
                <div className="transition-transform duration-500 ease-out group-hover:-translate-y-10">
                  {/* Polaroid Photo Frame with crisp white border and deep shadow */}
                  <div
                    className={cn(
                      "relative bg-white p-1.5 sm:p-2 md:p-2.5 rounded-[4px] transition-all duration-500 ease-out",
                      "w-[140px] h-[230px] sm:w-[170px] sm:h-[280px] md:w-[205px] md:h-[340px] lg:w-[235px] lg:h-[390px] xl:w-[250px] xl:h-[420px]",
                      "shadow-[0_20px_45px_rgba(0,0,0,0.85)] group-hover:shadow-[0_30px_60px_rgba(249,210,48,0.35)] group-hover:scale-[1.02]"
                    )}
                  >
                    {/* Inner container for image and overlays */}
                    <div className="relative w-full h-full overflow-hidden rounded-[2px] bg-black">
                      {/* Thumbnail image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={reel.thumbnail}
                        alt={`${reel.title} — ${reel.label}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-105 contrast-105"
                        loading="lazy"
                        draggable={false}
                      />

                      {/* Clean subtle bottom gradient so text is readable without darkening the image */}
                      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                      {/* Center play button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 pointer-events-none">
                        <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 rounded-full bg-white/35 backdrop-blur-md border border-white/80 flex items-center justify-center transition-all duration-300 group-hover:bg-[#f9d230] group-hover:border-[#f9d230] group-hover:scale-110 shadow-2xl">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-black ml-0.5 filter drop-shadow transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom label + reel icon */}
                      <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 md:p-3.5 z-10">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <svg
                            className="w-3.5 h-3.5 text-[#f9d230] flex-shrink-0 filter drop-shadow"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 4.5v7l6-3.5-6-3.5z" />
                          </svg>
                          <span className="text-[9px] sm:text-[10px] md:text-[11px] text-white font-sans font-bold tracking-wider uppercase filter drop-shadow truncate">
                            {reel.label}
                          </span>
                        </div>
                      </div>

                      {/* Top-right play badge */}
                      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10">
                        <svg
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white filter drop-shadow"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Subtle glow on hover */}
                  <div className="absolute -inset-2 bg-[#f9d230]/[0.08] blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* In-Website Reel Player Lightbox Modal */}
      <ReelModal
        reels={SHOWREEL_REELS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelectIndex={(idx) => setActiveIndex(idx)}
        projectCtaHref="/#contact"
      />
    </section>
  );
}

export default Showreel;
