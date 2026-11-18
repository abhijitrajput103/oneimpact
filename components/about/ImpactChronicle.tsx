"use client";

import React from "react";
import Image from "next/image";

/**
 * Section 3: THE IMPACT CHRONICLE | ONE IMPACT
 *
 * Exact replication of the studio pinboard / polaroid timeline design:
 *
 * Left:
 * - Stacked headline: THE / IMPACT / CHRONICLE
 * - Yellow brush underline stroke
 * - Copy: "Our story isn't just a timeline. It's a trail of ideas, risks, experiments and impact."
 *
 * Right Polaroid Cards (All 4 Visible):
 * - 2020: The first idea. (Lamp photo, off-white polaroid)
 * - 2021: First clients & creative experiments. (Team photo, off-white polaroid)
 * - 2023: New disciplines. Bigger ideas. (Creative review photo, off-white polaroid)
 * - TODAY: A full-service creative agency. (ONE IMPACT building photo, YELLOW polaroid)
 *
 * Transitions:
 * - Signature organic wave border at the top and bottom with #FFFFFF stroke
 */

interface ChronicleItem {
  year: string;
  subtext: string;
  image: string;
  alt: string;
  isYellow?: boolean;
  rotation: string;
}

const CHRONICLE_ITEMS: ChronicleItem[] = [
  {
    year: "2020",
    subtext: "The first idea.",
    image: "/images/about-lamp-2020.webp",
    alt: "2020 - The first idea",
    rotation: "-rotate-[2deg]",
  },
  {
    year: "2021",
    subtext: "First clients & creative experiments.",
    image: "/images/about-hero-team.jpg",
    alt: "2021 - First clients & creative experiments",
    rotation: "rotate-[2deg]",
  },
  {
    year: "2023",
    subtext: "New disciplines. Bigger ideas.",
    image: "/images/about-creative-process.jpg",
    alt: "2023 - New disciplines. Bigger ideas",
    rotation: "-rotate-[1.5deg]",
  },
  {
    year: "TODAY",
    subtext: "A full-service creative agency.",
    image: "/images/about-today-building.webp",
    alt: "TODAY - A full-service creative agency",
    isYellow: true,
    rotation: "rotate-[2.5deg]",
  },
];

export function ImpactChronicle() {
  return (
    <section
      id="chronicle"
      aria-labelledby="chronicle-heading"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#070707",
        color: "#FAF9F6",
      }}
    >
      {/* ── Subtle Dark Grunge / Wall Noise Texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grungeNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grungeNoise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* ── Ambient Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.015) 0%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-[clamp(20px,4vw,70px)] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        {/* ── Main Layout: Left Typography + Right Polaroid Strip (All 4 Visible) ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 xl:gap-14">
          {/* ── LEFT: The Impact Chronicle Branding & Text ── */}
          <div className="w-full lg:w-[26%] xl:w-[24%] 2xl:w-[22%] shrink-0">
            {/* 3-Line Big Stacked Headline */}
            <h2
              id="chronicle-heading"
              className="font-display font-black text-white uppercase tracking-tight leading-[0.92]"
              style={{
                fontSize: "clamp(2.2rem, 2.9vw, 3.8rem)",
              }}
            >
              <span className="block whitespace-nowrap">THE</span>
              <span className="block whitespace-nowrap">IMPACT</span>
              <span className="block whitespace-nowrap">CHRONICLE</span>
            </h2>

            {/* Stylized Yellow Brush Underline */}
            <div className="my-3 sm:my-3.5" aria-hidden="true">
              <svg
                viewBox="0 0 240 16"
                className="w-40 sm:w-48 lg:w-44 xl:w-48 h-auto block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 11 C45 5, 120 4, 236 7 M12 13 C70 9, 160 8, 225 12"
                  stroke="#F5DF38"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Supporting Copy */}
            <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-white/80 font-normal mt-3.5 max-w-xs sm:max-w-sm">
              Our story isn&apos;t just a timeline.
              <br />
              It&apos;s a trail of ideas, risks,
              <br />
              experiments and impact.
            </p>
          </div>

          {/* ── RIGHT: Physical Polaroid Cards (All 4 Visible) ── */}
          <div className="w-full lg:w-[74%] xl:w-[76%] 2xl:w-[78%]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 py-4">
              {CHRONICLE_ITEMS.map((item) => {
                const isYellow = item.isYellow;
                return (
                  <article
                    key={item.year}
                    className={`relative w-full rounded-[4px] p-2.5 sm:p-3 pb-5 sm:pb-6 transition-all duration-300 ease-out hover:scale-[1.05] hover:z-20 hover:rotate-0 cursor-default ${
                      item.rotation
                    } ${
                      isYellow
                        ? "bg-[#F5DF38] text-[#111111] shadow-[0_16px_36px_rgba(245,223,56,0.28),0_6px_16px_rgba(0,0,0,0.5)]"
                        : "bg-[#F7F4EB] text-[#111111] shadow-[0_16px_36px_rgba(0,0,0,0.55),0_4px_12px_rgba(0,0,0,0.35)]"
                    }`}
                  >
                    {/* Polaroid Photo Frame */}
                    <div className="relative w-full aspect-[4/3] rounded-[2px] overflow-hidden bg-black/60 shadow-inner">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover grayscale contrast-125 brightness-95 transition-transform duration-500 hover:scale-105"
                      />
                      {/* Subtle Polaroid gloss glare */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/15 pointer-events-none" />
                    </div>

                    {/* Polaroid Bottom Chin: Year + Underline + Subtext */}
                    <div className="pt-3.5 sm:pt-4 px-0.5 flex flex-col items-start">
                      {/* Year */}
                      <span className="font-display font-black text-xl sm:text-2xl xl:text-3xl tracking-tight text-[#0A0A0A] leading-none">
                        {item.year}
                      </span>

                      {/* Small accent bar */}
                      <div
                        className={`w-6 sm:w-7 h-[2.5px] rounded-full my-1.5 sm:my-2 ${
                          isYellow ? "bg-[#0A0A0A]" : "bg-[#F5DF38]"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Caption text */}
                      <p className="font-sans text-[11px] sm:text-xs xl:text-[13px] font-bold leading-snug text-[#1A1A1A]">
                        {item.subtext}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactChronicle;
