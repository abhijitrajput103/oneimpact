import React from "react";
import Link from "next/link";

export function AboutValuesCTA() {
  return (
    <section className="about-values-cta-sec relative w-full bg-[#070707] py-20 sm:py-28 md:py-36 overflow-hidden">
      {/* Authentic Top-Right Torn Blue Paper Corner with Frayed White Edge — Vector SVG */}
      <div className="absolute right-0 top-0 pointer-events-none select-none z-10 w-[240px] sm:w-[360px] md:w-[480px] lg:w-[560px]">
        <svg
          viewBox="0 0 460 220"
          className="w-full h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue Torn Paper Polygon */}
          <path
            d="M460,0 L90,0 C110,12 120,24 140,28 C158,32 172,50 190,56 C210,64 225,82 245,92 C265,102 280,122 300,132 C322,142 340,165 365,178 C390,192 420,205 460,220 Z"
            fill="#1b3dff"
          />
          {/* White Frayed Torn Fiber Edge */}
          <path
            d="M90,0 C110,12 120,24 140,28 C158,32 172,50 190,56 C210,64 225,82 245,92 C265,102 280,122 300,132 C322,142 340,165 365,178 C390,192 420,205 460,220"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Organic deckled tear details */}
          <polyline
            points="92,2 108,10 122,22 138,26 155,30 170,48 188,54 206,62 222,80 242,90 262,100 278,120 298,130 320,140 338,162 362,176 388,190 418,202 458,218"
            stroke="#f5f2eb"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Authentic Bottom-Left Torn Blue Paper with Yellow Accent & Frayed White Edge — Vector SVG */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none z-10 w-[240px] sm:w-[360px] md:w-[500px] lg:w-[580px]">
        <svg
          viewBox="0 0 460 220"
          className="w-full h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Yellow Accent Underlay */}
          <path
            d="M0,130 C40,136 80,165 130,185 C175,202 230,212 280,220 L0,220 Z"
            fill="#ffd60a"
          />
          {/* Blue Paper Overlay */}
          <path
            d="M0,80 C35,92 65,115 105,135 C145,155 185,182 230,200 C260,212 295,218 330,220 L0,220 Z"
            fill="#1b3dff"
          />
          {/* White Frayed Torn Fiber Edge */}
          <path
            d="M0,80 C35,92 65,115 105,135 C145,155 185,182 230,200 C260,212 295,218 330,220"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Organic deckled tear details */}
          <polyline
            points="2,82 18,88 34,94 52,106 68,118 86,126 104,136 124,146 144,156 164,168 184,182 208,192 228,200 258,212 294,218 328,220"
            stroke="#f5f2eb"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content layout with balanced spacing */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-start gap-10 lg:gap-20 xl:gap-28">
        {/* Left Column: Eyebrow + Signature Headline */}
        <div className="w-full lg:w-auto lg:max-w-[680px] flex-shrink-0">
          {/* Eyebrow with horizontal accent line */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-white/90">
              ONE IMPACT <span className="text-white/40 mx-1">/</span> LET&apos;S TALK
            </span>
            <div className="w-16 sm:w-28 h-[1px] bg-white/70" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2 className="font-display italic font-black text-white text-[clamp(2.4rem,4.8vw,4.8rem)] leading-[1.03] tracking-[-0.025em] m-0">
            <span className="block">Now Let&apos;s Make</span>
            <span className="block mt-1 sm:mt-2">
              <span>Some </span>
              {/* Highlighted "Impact." with brush tape, rays & underline */}
              <span className="relative inline-block text-[#0a0a0a] px-3 sm:px-4 py-0.5 ml-1 select-none">
                {/* Yellow Brush Swatch Background */}
                <span
                  className="absolute inset-0 bg-[#ffd60a] -z-10 rounded-sm"
                  style={{
                    clipPath:
                      "polygon(0% 18%, 2.5% 4%, 4% 35%, 2% 65%, 0.8% 95%, 3% 100%, 97% 98%, 99.5% 75%, 97.5% 45%, 100% 15%, 98.2% 0%, 50% 2.5%, 15% 1%, 0% 12%)",
                    transform: "rotate(-1deg) scale(1.04)",
                  }}
                  aria-hidden="true"
                />

                {/* Three radiant yellow doodle rays above the "I" */}
                <svg
                  className="absolute -top-6 sm:-top-8 -left-1 sm:left-0 w-8 sm:w-10 h-6 sm:h-8 pointer-events-none"
                  viewBox="0 0 36 28"
                  fill="none"
                  aria-hidden="true"
                >
                  <line x1="8" y1="24" x2="3" y2="4" stroke="#ffd60a" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="18" y1="24" x2="18" y2="2" stroke="#ffd60a" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="28" y1="24" x2="33" y2="4" stroke="#ffd60a" strokeWidth="3.5" strokeLinecap="round" />
                </svg>

                {/* Text: Impact. */}
                Impact.

                {/* Yellow swoosh underline */}
                <svg
                  className="absolute -bottom-3 sm:-bottom-5 left-0 w-[110%] h-3 sm:h-5 pointer-events-none overflow-visible"
                  viewBox="0 0 320 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10 C60 14, 150 15, 290 6 C310 4.5, 318 3.5, 320 2"
                    stroke="#ffd60a"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* Center: Tilted Yellow Divider (Desktop) */}
        <div
          className="hidden lg:block w-[3px] h-28 bg-[#ffd60a] rounded-full flex-shrink-0 opacity-90 mx-2 lg:mx-4 xl:mx-6"
          style={{ transform: "rotate(16deg)" }}
          aria-hidden="true"
        />

        {/* Right Column: Question Copy & Action Button */}
        <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start justify-between sm:justify-start gap-6 lg:gap-8 lg:max-w-[340px] flex-shrink-0">
          <p className="font-sans text-white text-lg sm:text-xl lg:text-2xl font-medium leading-[1.35] m-0 max-w-[300px]">
            Ready to turn your
            <br />
            ideas into measurable
            <br />
            growth?
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-sans text-base sm:text-lg font-extrabold text-black bg-[#ffd60a] hover:bg-[#ffe033] transition-all duration-300 shadow-[0_8px_28px_rgba(255,214,10,0.35)] hover:shadow-[0_12px_36px_rgba(255,214,10,0.48)] hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutValuesCTA;
