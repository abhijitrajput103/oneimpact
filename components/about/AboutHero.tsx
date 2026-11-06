"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

/**
 * About Hero — Exact Sweet Tape replication:
 * 1. Crumpled gold paper texture background (#DA9F37)
 * 2. EXACT Sweet Tape parabolic arched/warped headline:
 *    - "ONE" arches along top curve
 *    - "IMPACT" arches boldly across viewport edge-to-edge
 * 3. Subline "ONE SHARED BELIEF" / "ONE SHARED VISION"
 * 4. Newspaper clippings with PHYSICAL newsprint paper background intact:
 *    - Off-white/aged newsprint sheet (#F2EFE8)
 *    - Real torn paper edges
 *    - Semi-transparent scotch tape strips holding them down
 *    - Authentic editorial columns, masthead, and campaign photography
 * 5. Center laptop workstation with scroll-triggered One Impact badge popup
 */

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const logoPopRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const leftPaperRef = useRef<HTMLDivElement>(null);
  const rightPaperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Top label
      tl.fromTo(
        section.querySelector(".hero-top-badge"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.1
      );

      // 2. Letters reveal from bottom inside their clips (Sweet Tape char reveal)
      tl.fromTo(
        section.querySelectorAll(".warped-char"),
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.04,
          ease: "power3.out",
        },
        0.2
      );

      // 3. Subline & handwritten note
      tl.fromTo(
        section.querySelector(".hero-subline"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        0.55
      );

      tl.fromTo(
        section.querySelector(".hero-hand-note"),
        { scale: 0.8, opacity: 0, rotate: -6 },
        { scale: 1, opacity: 1, rotate: 2, duration: 1, ease: "back.out(1.4)" },
        0.7
      );

      // 4. Newspaper cuts entrance from sides
      if (leftPaperRef.current) {
        tl.fromTo(
          leftPaperRef.current,
          { x: -50, y: 30, opacity: 0, rotate: -9 },
          { x: 0, y: 0, opacity: 1, rotate: -4.5, duration: 1.1, ease: "power2.out" },
          0.4
        );
      }

      if (rightPaperRef.current) {
        tl.fromTo(
          rightPaperRef.current,
          { x: 50, y: 30, opacity: 0, rotate: 8 },
          { x: 0, y: 0, opacity: 1, rotate: 3.5, duration: 1.1, ease: "power2.out" },
          0.45
        );
      }

      // 5. Laptop entrance
      if (laptopRef.current) {
        tl.fromTo(
          laptopRef.current,
          { y: 70, opacity: 0, scale: 0.93 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          0.35
        );
      }

      // =========================================================================
      // SCROLL-TRIGGERED JACK-IN-THE-BOX POPUP
      // Brand logo pops UP out of laptop screen into the air on scroll
      // =========================================================================
      if (laptopRef.current && logoPopRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        // The brand logo pops out from screen: rises high, scales up, tilts forward
        scrollTl.fromTo(
          logoPopRef.current,
          {
            y: 40,
            scale: 0.65,
            opacity: 0.5,
            rotateZ: -8,
          },
          {
            y: -230, // shoots high into the air above the laptop screen
            scale: 1.45,
            opacity: 1,
            rotateZ: 4,
            ease: "power2.out",
          },
          0
        );

        // Screen slight tilt and bloom as logo emerges
        if (screenRef.current) {
          scrollTl.fromTo(
            screenRef.current,
            { rotateX: 14, filter: "brightness(0.95)" },
            { rotateX: 0, filter: "brightness(1.2)", ease: "power1.out" },
            0
          );
        }

        // Parallax drift on the side newspaper cuts
        if (leftPaperRef.current) {
          scrollTl.to(leftPaperRef.current, { y: -60, rotate: -6.5, ease: "none" }, 0);
        }
        if (rightPaperRef.current) {
          scrollTl.to(rightPaperRef.current, { y: -80, rotate: 5.5, ease: "none" }, 0);
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[105vh] sm:min-h-[110vh] md:min-h-[115vh] overflow-hidden flex flex-col items-center justify-between pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-10"
      style={{ backgroundColor: "#DA9F37" }}
    >
      {/* 1. Full-bleed crumpled gold paper texture overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/about-paper-texture.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ mixBlendMode: "multiply", opacity: 0.45 }}
        draggable={false}
      />

      {/* Decorative vintage stamp in background */}
      <div
        className="absolute top-16 right-6 sm:right-16 pointer-events-none select-none opacity-25 hidden sm:block"
        style={{ mixBlendMode: "multiply" }}
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 border-4 border-dashed border-[#1A1A1A] rounded-full flex flex-col items-center justify-center p-2 text-center rotate-12">
          <span className="font-sans font-black text-[9px] sm:text-[10px] tracking-widest text-[#1A1A1A] uppercase">EST. 2020</span>
          <span className="font-sans font-bold text-xs text-[#1A1A1A]">ORIGINAL</span>
          <span className="font-sans font-black text-[8px] sm:text-[9px] tracking-wider text-[#1A1A1A] uppercase">ONE IMPACT</span>
        </div>
      </div>

      {/* 2. Top Header Container */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-2 sm:px-6 md:px-8 flex flex-col items-center text-center">
        {/* Top small label / ticker — like Sweet Tape */}
        <div className="hero-top-badge mb-3 sm:mb-5 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#1A1A1A]/30 bg-[#DA9F37]/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#1A1A1A] animate-pulse" />
            <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#1A1A1A] uppercase">
              STICK WITH YOU THROUGH THREE GENERATIONS
            </span>
          </div>
        </div>

        {/* =========================================================================
            SWEET TAPE EXACT PARABOLIC ARCHED/WARPED HEADLINE: "ONE IMPACT"
            Uses mathematical arc-drop and arc-tilt per letter matching sweet-tape.com
           ========================================================================= */}
        <div
          className="warped-title-container relative select-none w-full my-1 sm:my-2 overflow-visible"
          style={{
            transform: "rotate(-2deg)",
            transformOrigin: "center center",
          }}
        >
          <h1
            className="warped-heading font-sans font-black uppercase text-[#0A0A0A] text-center flex flex-col items-center"
            style={{
              fontSize: "clamp(4.8rem, 18vw, 16.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
            aria-label="ONE IMPACT"
          >
            {/* LINE 1: ONE */}
            <span
              className="warped-line flex justify-center items-end"
              style={
                {
                  "--letters": 3,
                  paddingBottom: "0.08em",
                } as React.CSSProperties
              }
            >
              {"ONE".split("").map((char, i) => {
                const u = (2 * i) / (3 - 1) - 1; // -1, 0, 1
                const arcDrop = 1.2; // vw
                const arcTilt = 5.5; // deg
                const dy = -1 * arcDrop * (1 - u * u);
                const rot = arcTilt * u;

                return (
                  <span
                    key={i}
                    className="warped-clip inline-block overflow-hidden"
                    style={{
                      transformOrigin: "50% 100%",
                      transform: `translateY(${dy}vw) rotate(${rot}deg)`,
                      margin: "0 0.01em",
                      padding: "0.1em 0.04em 0",
                    }}
                  >
                    <span className="warped-char block">{char}</span>
                  </span>
                );
              })}
            </span>

            {/* LINE 2: IMPACT */}
            <span
              className="warped-line flex justify-center items-end"
              style={
                {
                  "--letters": 6,
                  paddingTop: "0.02em",
                } as React.CSSProperties
              }
            >
              {"IMPACT".split("").map((char, i) => {
                const u = (2 * i) / (6 - 1) - 1; // -1, -0.6, -0.2, 0.2, 0.6, 1
                const arcDrop = 3.2; // vw
                const arcTilt = 9.5; // deg
                const dy = -1 * arcDrop * (1 - u * u);
                const rot = arcTilt * u;

                return (
                  <span
                    key={i}
                    className="warped-clip inline-block overflow-hidden"
                    style={{
                      transformOrigin: "50% 100%",
                      transform: `translateY(${dy}vw) rotate(${rot}deg)`,
                      margin: "0 -0.01em",
                      padding: "0.15em 0.05em 0",
                    }}
                  >
                    <span className="warped-char block">{char}</span>
                  </span>
                );
              })}
            </span>
          </h1>

          {/* Sweet Tape style small adhesive tape on the top left */}
          <div
            className="absolute -top-3 left-[8%] sm:left-[18%] w-16 sm:w-24 h-6 sm:h-8 pointer-events-none"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(2px)",
              transform: "rotate(-18deg)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Subline — like Sweet Tape's "ONE SHARED BELIEF" */}
        <div className="hero-subline mt-3 sm:mt-4 mb-4 sm:mb-6 max-w-2xl">
          <h2 className="font-sans text-xs sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-[0.25em] text-[#0A0A0A]">
            ONE SHARED BELIEF
          </h2>
        </div>

        {/* Handwritten note with organic doodle angle */}
        <div
          className="hero-hand-note absolute -bottom-6 right-2 sm:right-8 md:right-16 max-w-[200px] sm:max-w-[240px] text-left pointer-events-none hidden md:block z-30"
          style={{ transformOrigin: "top left" }}
        >
          <div className="relative p-2">
            <svg
              className="absolute -top-3 -left-3 w-6 h-6 text-[#1A1A1A] opacity-60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H9M17 7V15" />
            </svg>
            <p className="font-display italic text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-semibold">
              “we’ve believed that even the simplest brands deserve thoughtful design.”
            </p>
            <div className="w-14 h-0.5 bg-[#1A1A1A]/50 mt-1 rounded-full" />
          </div>
        </div>
      </div>

      {/* 3. CENTERPIECE WORKSTATION + NEWSPAPER CUTOUTS WITH PHYSICAL NEWSPRINT PAPER BACKGROUND */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-2 sm:px-4 md:px-8 mt-1 sm:mt-4 mb-2 sm:mb-4 flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px]">

          {/* =========================================================================
              LEFT NEWSPAPER CUT (WITH PHYSICAL NEWSPRINT PAPER BACKGROUND INTACT)
              Aged paper tone (#F2EFE8), torn deckle edges, scotch tape, authentic articles
             ========================================================================= */}
          <div
            ref={leftPaperRef}
            className="absolute left-1 xs:left-2 sm:left-4 md:left-6 lg:left-10 top-2 sm:top-6 z-10 w-[160px] xs:w-[200px] sm:w-[260px] md:w-[300px] lg:w-[330px] pointer-events-none select-none"
            style={{
              transform: "rotate(-4.5deg)",
            }}
          >
            {/* Ragged torn paper clipping with physical newsprint paper background */}
            <div
              className="relative p-3 xs:p-3.5 sm:p-4 md:p-5 text-[#141414]"
              style={{
                backgroundColor: "#F2EFE8",
                backgroundImage:
                  "radial-gradient(#E8E4DB 15%, transparent 16%), radial-gradient(#D8D3C8 15%, transparent 16%)",
                backgroundSize: "16px 16px",
                backgroundPosition: "0 0, 8px 8px",
                clipPath:
                  "polygon(2% 0%, 98% 1%, 100% 97%, 95% 99%, 80% 98%, 65% 100%, 50% 98%, 35% 99%, 15% 97%, 0% 99%, 1% 15%)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.12)",
              }}
            >
              {/* Scotch tape holding the paper */}
              <div
                className="absolute -top-3 left-6 sm:left-10 w-14 sm:w-18 h-5 sm:h-6 pointer-events-none z-20"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(2px)",
                  transform: "rotate(-6deg)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              />

              {/* Newspaper Header */}
              <div className="border-b-2 border-[#1A1A1A] pb-1 mb-1.5 text-center">
                <span className="font-sans font-black text-[8px] xs:text-[9px] sm:text-[10.5px] tracking-[0.2em] uppercase block text-[#111]">
                  ★ THE CHRONICLE OF IMPACT ★
                </span>
                <div className="flex justify-between items-center text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-wider text-[#333] mt-0.5 border-t border-[#1A1A1A]/40 pt-0.5">
                  <span>VOL. IV</span>
                  <span>NEW DELHI • MUMBAI</span>
                  <span>EST. 2020</span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="font-display font-black text-[12px] xs:text-xs sm:text-sm md:text-base leading-tight uppercase tracking-tight text-[#111] mb-1">
                THE AGENCY THAT REFUSED TO BE BORING
              </h3>
              <p className="font-sans text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider text-[#333] mb-1.5 leading-none">
                How One Studio Rewrote Digital Culture
              </p>

              {/* Newspaper halftone image */}
              <div className="relative my-1.5 sm:my-2 overflow-hidden border border-[#222]/30 filter grayscale contrast-125">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-newspaper.jpg"
                  alt=""
                  className="w-full h-16 xs:h-20 sm:h-24 md:h-28 object-cover"
                />
                <span className="font-mono text-[6px] sm:text-[7px] text-[#333] block mt-0.5 text-right px-0.5">
                  FIG 1.0 — CREATIVE CAMPAIGN ARCHIVE
                </span>
              </div>

              {/* Editorial text columns */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[6.5px] xs:text-[7px] sm:text-[8px] font-serif leading-snug text-[#222] text-justify">
                <div>
                  <span className="float-left text-base sm:text-xl font-display font-black leading-none mr-1 text-[#111]">I</span>
                  n an era where every agency looked the same and produced predictable templates, One Impact disrupted the status quo.
                </div>
                <div>
                  Crafting identities that do not just exist, but command the room with unapologetic creative power.
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              CENTER: COMPUTER WORKSTATION (INSTEAD OF CARDBOARD BOX)
              + GSAP SCROLL-TRIGGERED BRAND LOGO POPPING OUT OF THE SCREEN
             ========================================================================= */}
          <div
            ref={laptopRef}
            className="relative z-20 w-full max-w-[310px] xs:max-w-[380px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[700px] flex flex-col items-center select-none"
            style={{ perspective: "1200px" }}
          >
            {/* Contact shadow on gold paper */}
            <div
              className="absolute -bottom-8 w-[85%] h-12 rounded-[100%] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 70%)",
                filter: "blur(8px)",
              }}
            />

            {/* Laptop Screen / Lid (Open Angle with 3D Depth) */}
            <div
              ref={screenRef}
              className="relative w-[92%] sm:w-[90%] rounded-t-xl sm:rounded-t-2xl p-2 sm:p-3 md:p-3.5 transition-transform duration-200 overflow-visible"
              style={{
                backgroundColor: "#161719",
                border: "2px solid #2B2D31",
                borderBottom: "none",
                boxShadow:
                  "0 -15px 35px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.2)",
                transformOrigin: "bottom center",
              }}
            >
              {/* Laptop Camera Notch / Bezel Dot */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0D0E10] border border-[#2B2D31]" />
                <div className="w-1 h-1 rounded-full bg-[#111]" />
              </div>

              {/* Screen Bezel Frame */}
              <div
                className="relative w-full aspect-[16/10] bg-[#0A0B0E] rounded-lg sm:rounded-xl overflow-visible border border-[#22242A] flex flex-col"
                style={{
                  boxShadow: "inset 0 0 25px rgba(0,0,0,0.8)",
                }}
              >
                {/* Screen Top Bar / Window Controls */}
                <div className="relative z-10 w-full h-6 sm:h-7 bg-[#121316] border-b border-[#222] px-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="font-mono text-[8.5px] sm:text-[10px] text-[#888] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DA9F37]" />
                    ONE IMPACT // DIGITAL ENGINE v2.4
                  </div>
                  <div className="font-mono text-[8px] text-[#666] hidden sm:block">
                    LIVE CANVAS
                  </div>
                </div>

                {/* Inner Screen Display Canvas */}
                <div className="relative flex-1 w-full p-2.5 xs:p-3 sm:p-4 md:p-6 flex flex-col justify-between overflow-visible bg-gradient-to-b from-[#0F1015] via-[#0A0B0E] to-[#08090C]">
                  {/* Subtle Grid Lines inside Screen */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-15 rounded-b-lg sm:rounded-b-xl overflow-hidden"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Creative Agency Dashboard Graphic inside screen */}
                  <div className="relative z-0 flex items-center justify-between">
                    <div>
                      <span className="font-sans text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#DA9F37]">
                        Active Campaign
                      </span>
                      <h4 className="font-sans font-black text-[11px] sm:text-sm md:text-base text-white uppercase tracking-tight">
                        UNLIMITED IMPACT
                      </h4>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-[#DA9F37]/20 border border-[#DA9F37]/40 text-[#DA9F37] font-mono text-[8px] sm:text-[9px] font-bold">
                      99.4% ENGAGEMENT
                    </div>
                  </div>

                  {/* Waveform / Visualizer line on screen */}
                  <div className="relative z-0 w-full flex items-center gap-0.5 sm:gap-1 opacity-40 py-1 sm:py-2">
                    {[40, 65, 30, 80, 95, 45, 70, 85, 60, 90, 75, 50, 80, 100, 60, 45, 75, 90, 55, 35, 70, 85, 40].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#DA9F37] to-white rounded-full"
                          style={{ height: `${h * 0.25}px` }}
                        />
                      )
                    )}
                  </div>

                  {/* Bottom metrics bar in screen */}
                  <div className="relative z-0 flex items-center justify-between text-[7px] sm:text-[9px] font-mono text-[#777] border-t border-[#1F2026] pt-1 sm:pt-1.5">
                    <span>STATUS: SCALING CLIENTS</span>
                    <span className="text-[#DA9F37] font-bold">SCROLL TO UNLOCK</span>
                  </div>

                  {/* =========================================================================
                      THE POPUP BRAND LOGO (JACK-IN-THE-BOX EFFECT)
                      Shoots UP out of the laptop screen into the air on scroll!
                     ========================================================================= */}
                  <div
                    ref={logoPopRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex flex-col items-center justify-center"
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    {/* Glowing radial gold aura */}
                    <div
                      className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full pointer-events-none -z-10"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(218,159,55,0.7) 0%, rgba(218,159,55,0.25) 45%, rgba(218,159,55,0) 75%)",
                        filter: "blur(6px)",
                      }}
                    />

                    {/* 3D Physical One Impact Badge */}
                    <div
                      className="relative px-5 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 rounded-2xl flex flex-col items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #1A1B1F 0%, #0C0D10 100%)",
                        border: "2px solid #DA9F37",
                        boxShadow:
                          "0 25px 50px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.3), 0 0 35px rgba(218,159,55,0.5)",
                      }}
                    >
                      {/* Official One Impact Logo Image — inverted to pure bright white for maximum contrast */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/LOGO/oneimpact-logo.webp"
                        alt="One Impact"
                        className="h-6 xs:h-7 sm:h-9 md:h-11 w-auto object-contain drop-shadow-lg"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />

                      {/* Gold Badge Ribbon Text */}
                      <div className="mt-1.5 flex items-center gap-1 sm:gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DA9F37] shadow-[0_0_8px_#DA9F37]" />
                        <span className="font-sans text-[7.5px] sm:text-[9px] md:text-[10px] font-black tracking-[0.28em] text-[#DA9F37] uppercase">
                          UNSTOPPABLE
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DA9F37] shadow-[0_0_8px_#DA9F37]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base / Keyboard Chassis */}
            <div
              className="relative w-full h-8 sm:h-10 md:h-12 rounded-b-xl sm:rounded-b-2xl flex flex-col items-center justify-between p-1"
              style={{
                backgroundColor: "#1D1F23",
                background:
                  "linear-gradient(to bottom, #23252A 0%, #151619 80%, #0D0E10 100%)",
                border: "2px solid #2B2D31",
                boxShadow:
                  "0 12px 28px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.2)",
              }}
            >
              {/* Laptop opening notch */}
              <div
                className="w-14 sm:w-20 md:w-24 h-1.5 sm:h-2 rounded-b-md bg-[#0F1012] border-t border-[#333]"
              />

              {/* Metallic chamfer edge line */}
              <div className="w-[96%] h-[1px] bg-gradient-to-r from-transparent via-[#555]/40 to-transparent" />
            </div>
          </div>

          {/* =========================================================================
              RIGHT NEWSPAPER CUT (WITH PHYSICAL NEWSPRINT PAPER BACKGROUND INTACT)
              Aged paper tone (#F2EFE8), torn deckle edges, scotch tape, authentic articles
             ========================================================================= */}
          <div
            ref={rightPaperRef}
            className="absolute right-1 xs:right-2 sm:right-4 md:right-6 lg:right-10 bottom-2 sm:bottom-6 z-10 w-[160px] xs:w-[200px] sm:w-[260px] md:w-[300px] lg:w-[330px] pointer-events-none select-none"
            style={{
              transform: "rotate(3.5deg)",
            }}
          >
            {/* Ragged torn paper clipping with physical newsprint paper background */}
            <div
              className="relative p-3 xs:p-3.5 sm:p-4 md:p-5 text-[#141414]"
              style={{
                backgroundColor: "#F2EFE8",
                backgroundImage:
                  "radial-gradient(#E8E4DB 15%, transparent 16%), radial-gradient(#D8D3C8 15%, transparent 16%)",
                backgroundSize: "16px 16px",
                backgroundPosition: "0 0, 8px 8px",
                clipPath:
                  "polygon(1% 2%, 99% 0%, 97% 98%, 85% 97%, 70% 99%, 55% 98%, 40% 100%, 25% 97%, 10% 99%, 0% 97%)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.12)",
              }}
            >
              {/* Scotch tape holding the paper */}
              <div
                className="absolute -top-3 right-6 sm:right-10 w-14 sm:w-18 h-5 sm:h-6 pointer-events-none z-20"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(2px)",
                  transform: "rotate(8deg)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              />

              {/* Newspaper Masthead */}
              <div className="border-b-2 border-[#1A1A1A] pb-1 mb-1.5 text-center">
                <span className="font-sans font-black text-[8px] xs:text-[9px] sm:text-[10.5px] tracking-[0.2em] uppercase block text-[#111]">
                  ★ DAILY DISPATCH // DESIGN & CULTURE ★
                </span>
                <div className="flex justify-between items-center text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-wider text-[#333] mt-0.5 border-t border-[#1A1A1A]/40 pt-0.5">
                  <span>MARKET REPORT</span>
                  <span>EST. 2020</span>
                  <span>PAGE B-1</span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="font-display font-black text-[12px] xs:text-xs sm:text-sm md:text-base leading-tight uppercase tracking-tight text-[#111] mb-1">
                BRANDS THAT COMMAND ATTENTION
              </h3>

              {/* Editorial Callout Quote */}
              <div className="my-1.5 border-y border-[#1A1A1A] py-1 text-center bg-[#ECE8E0]/60">
                <p className="font-display italic font-bold text-[10px] sm:text-xs md:text-sm text-[#111] leading-snug">
                  “If it doesn’t stop thumb scrolls, it doesn’t exist.”
                </p>
                <span className="font-mono text-[6px] sm:text-[7px] text-[#444] block mt-0.5 uppercase tracking-wider">
                  — ONE IMPACT CREATIVE MANIFESTO
                </span>
              </div>

              {/* Campaign photo clipping */}
              <div className="relative my-1.5 sm:my-2 overflow-hidden border border-[#222]/30 filter grayscale contrast-125">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-creative-process.jpg"
                  alt=""
                  className="w-full h-14 xs:h-18 sm:h-22 md:h-24 object-cover"
                />
                <span className="font-mono text-[6px] sm:text-[7px] text-[#333] block mt-0.5 text-left px-0.5">
                  STUDIO ARCHIVE // 2020-PRESENT
                </span>
              </div>

              {/* Editorial text */}
              <div className="text-[6.5px] xs:text-[7px] sm:text-[8px] font-serif leading-snug text-[#222] text-justify">
                Strategy is only as good as the reaction it creates. We build visual identities, high-impact reels, and digital experiences that turn casual scrollers into lifelong brand advocates.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Torn zigzag paper edge at bottom — exact Sweet Tape transition to dark section */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40V20L30 10L60 25L90 8L120 22L150 5L180 20L210 12L240 28L270 6L300 18L330 30L360 10L390 24L420 6L450 20L480 14L510 26L540 8L570 22L600 4L630 18L660 28L690 10L720 20L750 6L780 24L810 12L840 26L870 4L900 20L930 14L960 28L990 8L1020 22L1050 6L1080 18L1110 26L1140 10L1170 24L1200 8L1230 20L1260 14L1290 28L1320 6L1350 22L1380 12L1410 24L1440 8V40Z"
            fill="#050505"
          />
        </svg>
      </div>
    </section>
  );
}
