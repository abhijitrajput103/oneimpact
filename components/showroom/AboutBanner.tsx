"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

// Client/partner logos — image-based from /LOGO/ folder
const CLIENT_LOGOS = [
  { name: "LenDen Club", src: "/LOGO/transparent/LEDEN Clube.png" },
  { name: "Axis Trustee", src: "/LOGO/transparent/axistrustee.png" },
  { name: "Sweet Bengal", src: "/LOGO/transparent/SWEET BENGAL.png" },
  { name: "DSCI", src: "/LOGO/transparent/dsci.png" },
  { name: "Bloomberg Quint", src: "/LOGO/transparent/bloomberg-quint-vector-logo.png" },
  { name: "DSP Mutual Fund", src: "/LOGO/transparent/DSP Mutual fund.png" },
  { name: "MOXIE Beauty", src: "/LOGO/transparent/MOXIE Beauty.png" },
  { name: "PayU", src: "/LOGO/transparent/PayU.svg.png" },
  { name: "SMAAASH", src: "/LOGO/transparent/SMAAASH.png" },
  { name: "Sweet India", src: "/LOGO/transparent/SWEDT INDIA.png" },
  { name: "LiveLaw", src: "/LOGO/transparent/livelaw-logo.png" },
  { name: "SnapDeal", src: "/LOGO/transparent/sanpdealbrandlogo_2.png" },
  { name: "Jharkhand", src: "/LOGO/transparent/800px-Jharkhand_emblem.png" },
  { name: "IL", src: "/LOGO/transparent/logo-il.png" },
  { name: "Winston", src: "/LOGO/transparent/winston-faridabad-ma84f9666c.png" },
];



interface AboutBannerProps {
  className?: string;
}

export function AboutBanner({ className }: AboutBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Animate the heading text
      const headingWords = section.querySelectorAll(".about-word");
      if (headingWords.length > 0) {
        gsap.fromTo(
          headingWords,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.0,
            stagger: 0.04,
            ease: "reveal-ease",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate the CTA button
      const cta = section.querySelector(".about-cta");
      if (cta) {
        gsap.fromTo(
          cta,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate logo items
      const logos = section.querySelectorAll(".client-logo");
      if (logos.length > 0) {
        gsap.fromTo(
          logos,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.querySelector(".logo-strip"),
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  // Split text into word spans for animation
  const headingText =
    "We started One Impact in 2020 Bhidu! apan abhi bhi market mein macha rahe hai..";
  const words = headingText.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about-banner"
      className={cn("relative w-full select-none z-20", className)}
    >
      {/* ═══════════════════════════════════════════ */}
      {/* BLUE BANNER AREA                           */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative z-10 w-full pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
        {/* Background paper cut SVG - Full Width & Height */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-us-blue-paper-cut.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none scale-x-105"
          draggable={false}
        />

        {/* Banner content */}
        <div className="relative z-[5] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
            {/* Heading */}
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-normal tracking-tight leading-[1.2] text-white flex flex-wrap gap-x-[0.25em]">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="relative inline-block overflow-hidden py-1"
                  >
                    <span
                      className="about-word inline-block"
                      style={{ opacity: 0 }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h2>
            </div>

            {/* ABOUT US CTA — widened horizontally */}
            <div className="flex-shrink-0 about-cta" style={{ opacity: 0 }}>
              <a
                href="#about"
                className="inline-flex items-center justify-center w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] py-4 sm:py-4.5 rounded-full font-display text-sm sm:text-base md:text-lg font-black tracking-[0.18em] uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-95 text-center"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#1A1A2E",
                  boxShadow: "0 6px 30px rgba(255, 215, 0, 0.45)",
                }}
              >
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* CLIENT LOGOS STRIP — Auto-scrolling Marquee */}
      {/* ═══════════════════════════════════════════ */}
      <div
        className="logo-strip relative z-0 pt-12 sm:pt-16 md:pt-18 pb-10 sm:pb-14 md:pb-16 -mt-6 sm:-mt-8 md:-mt-10"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <style>{`
          @keyframes logoMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .logo-marquee-track {
            animation: logoMarquee 42s linear infinite;
          }
          .logo-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="overflow-hidden">
          <div className="logo-marquee-track flex items-center gap-16 sm:gap-20 md:gap-24 lg:gap-28 w-max">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="client-logo flex-shrink-0 flex items-center justify-center px-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 sm:h-16 md:h-20 lg:h-22 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] object-contain hover:scale-110 transition-transform duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;
