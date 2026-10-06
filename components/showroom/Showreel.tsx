"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

// Showreel Instagram reels — clean card-style links
const SHOWREEL_REELS = [
  {
    id: 1,
    reelId: "DZFZYEasxaC",
    url: "https://www.instagram.com/reel/DZFZYEasxaC/",
    label: "Interior Design",
    gradient: "from-rose-500/80 via-pink-600/60 to-purple-700/80",
    rotation: -8,
    offsetY: 20,
  },
  {
    id: 2,
    reelId: "C5a7zP5LDvg",
    url: "https://www.instagram.com/reel/C5a7zP5LDvg/",
    label: "Architecture",
    gradient: "from-amber-500/80 via-orange-600/60 to-red-700/80",
    rotation: 4,
    offsetY: -10,
  },
  {
    id: 3,
    reelId: "DSRk3L1kS23",
    url: "https://www.instagram.com/reel/DSRk3L1kS23/",
    label: "Brand Film",
    gradient: "from-cyan-500/80 via-blue-600/60 to-indigo-700/80",
    rotation: -3,
    offsetY: 15,
  },
  {
    id: 4,
    reelId: "DGCm30TqayX",
    url: "https://www.instagram.com/reel/DGCm30TqayX/",
    label: "Campaign",
    gradient: "from-emerald-500/80 via-teal-600/60 to-cyan-700/80",
    rotation: 6,
    offsetY: -15,
  },
  {
    id: 5,
    reelId: "DPa2vfZk71z",
    url: "https://www.instagram.com/reel/DPa2vfZk71z/",
    label: "Social Media",
    gradient: "from-violet-500/80 via-purple-600/60 to-fuchsia-700/80",
    rotation: -5,
    offsetY: 10,
  },
];

interface ShowreelProps {
  className?: string;
}


/* ─── Component ───────────────────────────────────────────────── */

export function Showreel({ className }: ShowreelProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate subtitle
      gsap.fromTo(
        section.querySelector(".showreel-description"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 0.6,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
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
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const showText = "Show";
  const reelText = "reel";

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
        {/* Title: "Showreel" */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none overflow-hidden py-2">
            {showText.split("").map((char, i) => (
              <span
                key={`show-${i}`}
                className="showreel-char inline-block text-off-white"
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
            {reelText.split("").map((char, i) => (
              <span
                key={`reel-${i}`}
                className="showreel-char inline-block text-accent-yellow"
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </h2>

          {/* Decorative line under title */}
          <div className="mx-auto mt-4 w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-accent-yellow/60 to-transparent" />
        </div>

        {/* Description paragraph */}
        <p
          className="showreel-description text-center max-w-2xl lg:max-w-3xl mx-auto text-off-white/60 text-xs sm:text-sm md:text-base leading-relaxed font-sans mb-10 sm:mb-16 md:mb-24"
          style={{ opacity: 0 }}
        >
          Every frame we craft tells a story of vision, passion, and relentless attention to detail.
          From intimate brand moments to grand experiential campaigns, our showreel captures the
          creative pulse that drives everything we do — bold aesthetics, cinematic storytelling,
          and designs that leave a lasting impression.
        </p>

        {/* Photo cards carousel container with left & right navigation buttons */}
        <div className="relative w-full z-30 -mb-16 sm:-mb-24 md:-mb-32 lg:-mb-40">
          {/* Left Arrow Button (Mobile/Tablet only) */}
          <button
            type="button"
            onClick={handleScrollLeft}
            className="absolute left-1 sm:left-4 z-40 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 backdrop-blur-md hover:bg-[#FFD700] text-white hover:text-black border border-white/20 flex md:hidden items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 active:scale-90 shadow-2xl"
            aria-label="Previous photo"
          >
            ←
          </button>

          {/* Right Arrow Button (Mobile/Tablet only) */}
          <button
            type="button"
            onClick={handleScrollRight}
            className="absolute right-1 sm:right-4 z-40 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 backdrop-blur-md hover:bg-[#FFD700] text-white hover:text-black border border-white/20 flex md:hidden items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 active:scale-90 shadow-2xl"
            aria-label="Next photo"
          >
            →
          </button>

          {/* Reel cards carousel — all 5 cards visible & scrollable */}
          <div
            ref={carouselRef}
            className="flex justify-start md:justify-center items-end gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible scrollbar-none pb-4 md:pb-0 px-10 sm:px-16 md:px-0"
          >
          {SHOWREEL_REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="showreel-card group relative flex-shrink-0 no-underline"
              style={{
                transform: `rotate(${reel.rotation}deg) translateY(${reel.offsetY}px)`,
                opacity: 0,
              }}
            >
              {/* Inner wrapper for hover lift */}
              <div className="transition-transform duration-500 ease-out group-hover:-translate-y-10">
                {/* Card */}
                <div className={cn(
                  "relative overflow-hidden rounded-2xl w-[130px] h-[170px] sm:w-[170px] sm:h-[220px] md:w-[200px] md:h-[260px] lg:w-[240px] lg:h-[310px]",
                  "shadow-2xl transition-shadow duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(255,215,0,0.2)]"
                )}>
                  {/* Gradient background */}
                  <div className={cn("absolute inset-0 bg-gradient-to-br", reel.gradient)} />

                  {/* Subtle noise texture overlay */}
                  <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

                  {/* Center play button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom label + Instagram icon */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {/* Instagram icon */}
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] text-white/80 font-sans font-medium tracking-wide uppercase">
                        {reel.label}
                      </span>
                    </div>
                  </div>

                  {/* Top-right reel icon */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </div>
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute -inset-2 bg-accent-yellow/[0.03] blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

export default Showreel;
