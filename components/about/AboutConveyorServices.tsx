"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "@/gsap";
import { useGSAP } from "@gsap/react";

/**
 * AboutConveyorServices — Replicates Sweet Tape's iconic <section class="conveyor">
 *
 * Features:
 * 1. 3 horizontal conveyor tracks representing the 3 major service categories:
 *    - CATEGORY 01: BRAND ARCHITECTURE (01 Branding)
 *    - CATEGORY 02: DIGITAL PLATFORMS & SEARCH (02 Website Dev • 03 SEO Services)
 *    - CATEGORY 03: CONTENT, MEDIA & VIRAL INFLUENCE (04 Content & Film • 05 Influencer PR • 06 UGC • 07 Social Media)
 * 2. Continuous horizontal auto-scrolling at slow speed + scroll-scrubbed acceleration.
 * 3. Infinite seamless loop with duplicated track items.
 * 4. Images are COLORFUL BY DEFAULT and turn BLACK & WHITE ON HOVER.
 */

/* -------------------------------------------------------------------------
   TRACK 01 ITEMS — CATEGORY 01: BRAND ARCHITECTURE & IDENTITY
------------------------------------------------------------------------- */
function Track1Items() {
  return (
    <>
      {/* Pill 1: Photo Stadium */}
      <div className="h-28 sm:h-36 md:h-44 w-44 sm:w-60 md:w-72 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-branding.webp"
          alt="Branding visual system"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          IDENTITY SYSTEM
        </span>
      </div>

      {/* Pill 2: Circular Seal Badge */}
      <div className="h-28 sm:h-36 md:h-44 w-28 sm:w-36 md:w-44 rounded-full border-2 border-[#f9d230] bg-[#101217] flex-shrink-0 flex flex-col items-center justify-center p-3 text-center shadow-lg shadow-[#f9d230]/10">
        <span className="font-mono text-[8px] sm:text-[9px] font-black tracking-widest text-[#f9d230] uppercase">
          ONE IMPACT
        </span>
        <span className="font-sans text-xs sm:text-sm font-black text-white mt-0.5">
          DISCIPLINE
        </span>
        <div className="w-6 h-0.5 bg-[#f9d230] my-1" />
        <span className="font-sans text-[8px] sm:text-[9px] font-bold text-neutral-400">
          01 BRANDING
        </span>
      </div>

      {/* Pill 3: Primary Text Stadium Pill */}
      <div className="h-28 sm:h-36 md:h-44 px-8 sm:px-12 md:px-16 rounded-full border border-[#f9d230]/40 bg-gradient-to-r from-[#121418] via-[#161820] to-[#121418] flex-shrink-0 flex items-center gap-4 sm:gap-6 shadow-2xl">
        <div className="flex flex-col">
          <span className="font-mono text-xs sm:text-sm md:text-base font-black text-[#f9d230]">
            01
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f9d230] mt-1" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-sans font-black text-xl sm:text-3xl md:text-5xl text-white uppercase tracking-tight leading-none whitespace-nowrap">
            BRAND ARCHITECTURE.
          </h2>
          <div className="flex items-center gap-2 mt-1 sm:mt-2">
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
              01 BRANDING
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] text-neutral-400 uppercase tracking-widest hidden sm:inline whitespace-nowrap">
              // POSITIONING • ART DIRECTION • IDENTITY
            </span>
          </div>
        </div>
      </div>

      {/* Pill 4: Photo Stadium Full */}
      <div className="h-28 sm:h-36 md:h-44 w-56 sm:w-72 md:w-88 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-branding.webp"
          alt="Brand guidelines"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Pill 5: Handwritten Note Pill */}
      <div className="h-28 sm:h-36 md:h-44 px-6 sm:px-10 rounded-full border border-white/10 bg-[#0E1014] flex-shrink-0 flex items-center justify-center text-center shadow-lg">
        <p className="font-display italic text-xs sm:text-sm md:text-base text-[#f9d230] font-bold max-w-[220px] sm:max-w-[260px] leading-snug">
          “A brand is not a logo. It is an unfair advantage in the market.”
        </p>
      </div>

      {/* Pill 6: Studio Moodboard Image */}
      <div className="h-28 sm:h-36 md:h-44 w-44 sm:w-60 md:w-72 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 shadow-xl group cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-creative-process.jpg"
          alt="Creative studio"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------
   TRACK 02 ITEMS — CATEGORY 02: DIGITAL PLATFORMS & SEARCH
------------------------------------------------------------------------- */
function Track2Items() {
  return (
    <>
      {/* Pill 1: Photo Stadium Web Dev */}
      <div className="h-28 sm:h-36 md:h-44 w-52 sm:w-68 md:w-84 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-website-development.webp"
          alt="Website Development"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          WEB ARCHITECTURE
        </span>
      </div>

      {/* Pill 2: Sweet Tape Style Doodle Note Pill */}
      <div className="h-28 sm:h-36 md:h-44 px-6 sm:px-10 rounded-full border border-[#f9d230]/30 bg-[#0C0E12] flex-shrink-0 flex items-center justify-center shadow-lg">
        <div className="text-left font-mono text-[10px] sm:text-xs text-[#f9d230] leading-relaxed whitespace-nowrap">
          <div>same code.</div>
          <div>same templates.</div>
          <div className="font-bold underline">same routine. until now.</div>
        </div>
      </div>

      {/* Pill 3: Primary Text Stadium Pill */}
      <div className="h-28 sm:h-36 md:h-44 px-8 sm:px-12 md:px-16 rounded-full border border-[#f9d230]/40 bg-gradient-to-r from-[#121418] via-[#161820] to-[#121418] flex-shrink-0 flex items-center gap-4 sm:gap-6 shadow-2xl">
        <div className="flex flex-col">
          <span className="font-mono text-xs sm:text-sm md:text-base font-black text-[#f9d230]">
            02
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f9d230] mt-1" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-sans font-black text-xl sm:text-3xl md:text-5xl text-white uppercase tracking-tight leading-none whitespace-nowrap">
            DIGITAL PLATFORMS & SEARCH.
          </h2>
          <div className="flex items-center gap-2 mt-1 sm:mt-2">
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
              02 WEBSITE DEV
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
              03 SEO SERVICES
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] text-neutral-400 uppercase tracking-widest hidden sm:inline whitespace-nowrap">
              // NEXT.JS • GSAP • ORGANIC DOMINATION
            </span>
          </div>
        </div>
      </div>

      {/* Pill 4: Circular Metric Badge */}
      <div className="h-28 sm:h-36 md:h-44 w-28 sm:w-36 md:w-44 rounded-full border-2 border-white/20 bg-[#12141A] flex-shrink-0 flex flex-col items-center justify-center p-3 text-center shadow-lg">
        <span className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-white">
          #1
        </span>
        <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#f9d230] uppercase">
          RANKINGS
        </span>
        <span className="font-mono text-[7px] text-neutral-400 mt-1">
          TOP SERP REACH
        </span>
      </div>

      {/* Pill 5: Photo Stadium SEO Analytics */}
      <div className="h-28 sm:h-36 md:h-44 w-52 sm:w-68 md:w-84 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-seo.webp"
          alt="SEO Strategy"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          SEARCH ENGINE ENGINE
        </span>
      </div>

      {/* Pill 6: Inset Grid Analytics */}
      <div className="h-28 sm:h-36 md:h-44 w-44 sm:w-60 md:w-72 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 shadow-xl group cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/seo-grid.webp"
          alt="Data grid"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------
   TRACK 03 ITEMS — CATEGORY 03: CONTENT, MEDIA & VIRAL REACH
------------------------------------------------------------------------- */
function Track3Items() {
  return (
    <>
      {/* Pill 1: Photo Stadium Full Film Camera */}
      <div className="h-28 sm:h-36 md:h-44 w-48 sm:w-64 md:w-76 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-content-creative.webp"
          alt="Content and Film"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          CINEMATIC PRODUCTION
        </span>
      </div>

      {/* Pill 2: Primary Text Stadium Pill */}
      <div className="h-28 sm:h-36 md:h-44 px-8 sm:px-12 md:px-16 rounded-full border border-[#f9d230]/40 bg-gradient-to-r from-[#121418] via-[#161820] to-[#121418] flex-shrink-0 flex items-center gap-4 sm:gap-6 shadow-2xl">
        <div className="flex flex-col">
          <span className="font-mono text-xs sm:text-sm md:text-base font-black text-[#f9d230]">
            03
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#f9d230] mt-1" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-sans font-black text-xl sm:text-3xl md:text-5xl text-white uppercase tracking-tight leading-none whitespace-nowrap">
            CONTENT, MEDIA & VIRAL REACH.
          </h2>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider">
              04 CONTENT & FILM
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider">
              05 INFLUENCER PR
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider">
              06 UGC
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#f9d230]/20 border border-[#f9d230]/30 text-[#f9d230] font-mono text-[8px] sm:text-[9.5px] font-bold uppercase tracking-wider">
              07 SOCIAL MEDIA
            </span>
          </div>
        </div>
      </div>

      {/* Pill 3: Sweet Tape Note Style */}
      <div className="h-28 sm:h-36 md:h-44 px-6 sm:px-10 rounded-full border border-white/10 bg-[#0C0E12] flex-shrink-0 flex items-center justify-center text-center shadow-lg">
        <p className="font-display italic text-xs sm:text-sm md:text-base text-neutral-300 leading-snug max-w-[220px]">
          “Very few stood out. Even fewer felt unforgettable.”
        </p>
      </div>

      {/* Pill 4: Photo Stadium Influencer Marketing */}
      <div className="h-28 sm:h-36 md:h-44 w-52 sm:w-68 md:w-84 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-influencer-marketing.webp"
          alt="Influencer PR"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          INFLUENCER NETWORK
        </span>
      </div>

      {/* Pill 5: Photo Stadium UGC Campaigns */}
      <div className="h-28 sm:h-36 md:h-44 w-44 sm:w-60 md:w-72 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-ugc.webp"
          alt="UGC Campaigns"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          UGC CREATIVE
        </span>
      </div>

      {/* Pill 6: Photo Stadium Social Media */}
      <div className="h-28 sm:h-36 md:h-44 w-48 sm:w-64 md:w-80 rounded-full overflow-hidden border border-white/15 bg-[#12141A] flex-shrink-0 relative group shadow-xl cursor-pointer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/service-v2-social-media.webp"
          alt="Social Media"
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:grayscale group-hover:contrast-125 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-6 font-mono text-[9px] font-bold tracking-widest text-[#f9d230] uppercase">
          SOCIAL MEDIA DOMINATION
        </span>
      </div>
    </>
  );
}

export function AboutConveyorServices() {
  const containerRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const t1 = track1Ref.current;
      const t2 = track2Ref.current;
      const t3 = track3Ref.current;
      if (!container || !t1 || !t2 || !t3) return;

      // 1. Pinned ScrollTrigger for user scroll scrub
      const st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      });

      // 2. Continuous slow auto-scroll ticker combined with scroll scrub
      let autoX1 = 0;
      let autoX2 = 0;
      let autoX3 = 0;

      const baseSpeed = 0.55; // slow, elegant, smooth drift

      const onTick = () => {
        // Scroll offset driven by page scroll position
        const scrollProg = st ? st.progress : 0;
        const scrollDelta1 = scrollProg * -750;
        const scrollDelta2 = scrollProg * 750;
        const scrollDelta3 = scrollProg * -650;

        // Auto-scroll drift increments
        autoX1 -= baseSpeed;
        autoX2 += baseSpeed;
        autoX3 -= baseSpeed;

        // Half width calculation for seamless loop
        const w1 = t1.scrollWidth / 2;
        const w2 = t2.scrollWidth / 2;
        const w3 = t3.scrollWidth / 2;

        if (w1 > 0) {
          const total1 = (autoX1 + scrollDelta1) % w1;
          gsap.set(t1, { x: total1 <= 0 ? total1 : total1 - w1 });
        }

        if (w2 > 0) {
          const total2 = (autoX2 + scrollDelta2) % w2;
          gsap.set(t2, { x: total2 >= 0 ? total2 - w2 : total2 });
        }

        if (w3 > 0) {
          const total3 = (autoX3 + scrollDelta3) % w3;
          gsap.set(t3, { x: total3 <= 0 ? total3 : total3 - w3 });
        }
      };

      gsap.ticker.add(onTick);

      return () => {
        gsap.ticker.remove(onTick);
        st.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center select-none"
      style={{ backgroundColor: "#07080A" }}
    >
      {/* Dark textured paper overlay matching Sweet Tape dark conveyor */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about-paper-texture.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-15"
        style={{ mixBlendMode: "screen" }}
        draggable={false}
      />

      {/* Subtle vignette glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249, 210, 48,0.08) 0%, rgba(7,8,10,0.85) 75%)",
        }}
      />

      {/* Top Indicator Pill */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#f9d230] animate-pulse" />
          <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.22em] text-[#f9d230] uppercase">
            3 CORE DISCIPLINES • 7 MASTER SERVICES
          </span>
        </div>
      </div>

      {/* CONVEYOR TRACKS WRAPPER */}
      <div className="relative z-10 w-full flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center py-6">

        {/* TRACK 01: CATEGORY 01 — BRAND ARCHITECTURE (Glides Left) */}
        <div className="overflow-visible w-full">
          <div
            ref={track1Ref}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 w-max will-change-transform pl-4 sm:pl-8"
          >
            {/* Set 1 */}
            <Track1Items />
            {/* Set 2 (for seamless infinite loop) */}
            <Track1Items />
          </div>
        </div>

        {/* TRACK 02: CATEGORY 02 — DIGITAL PLATFORMS & SEARCH (Glides Right) */}
        <div className="overflow-visible w-full">
          <div
            ref={track2Ref}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 w-max will-change-transform pl-4 sm:pl-8"
          >
            {/* Set 1 */}
            <Track2Items />
            {/* Set 2 (for seamless infinite loop) */}
            <Track2Items />
          </div>
        </div>

        {/* TRACK 03: CATEGORY 03 — CONTENT, MEDIA & VIRAL REACH (Glides Left) */}
        <div className="overflow-visible w-full">
          <div
            ref={track3Ref}
            className="flex items-center gap-3 sm:gap-4 md:gap-6 w-max will-change-transform pl-4 sm:pl-8"
          >
            {/* Set 1 */}
            <Track3Items />
            {/* Set 2 (for seamless infinite loop) */}
            <Track3Items />
          </div>
        </div>

      </div>

      {/* Bottom transition cut — torn zigzag into next section */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30V15L30 5L60 20L90 6L120 18L150 4L180 16L210 10L240 22L270 5L300 15L330 25L360 8L390 20L420 5L450 16L480 10L510 22L540 6L570 18L600 3L630 15L660 24L690 8L720 16L750 5L780 20L810 10L840 22L870 3L900 16L930 10L960 24L990 6L1020 18L1050 5L1080 15L1110 22L1140 8L1170 20L1200 6L1230 16L1260 10L1290 24L1320 5L1350 18L1380 10L1410 20L1440 6V30Z"
            fill="#f9d230"
          />
        </svg>
      </div>
    </section>
  );
}
