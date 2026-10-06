"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

// Client/partner logos — image-based from /LOGO/ folder
const CLIENT_LOGOS = [
  { name: "LenDen Club", src: "/LOGO/LEDEN Clube.png" },
  { name: "Axis Trustee", src: "/LOGO/axistrustee.png" },
  { name: "Sweet Bengal", src: "/LOGO/SWEET BENGAL.jpg" },
  { name: "DSCI", src: "/LOGO/dsci.webp" },
  { name: "Bloomberg Quint", src: "/LOGO/bloomberg-quint-vector-logo.png" },
  { name: "DSP Mutual Fund", src: "/LOGO/DSP Mutual fund.png" },
  { name: "MOXIE Beauty", src: "/LOGO/MOXIE Beauty.png" },
  { name: "PayU", src: "/LOGO/PayU.svg.webp" },
  { name: "SMAAASH", src: "/LOGO/SMAAASH.jpg" },
  { name: "Sweet India", src: "/LOGO/SWEDT INDIA.jpg" },
  { name: "LiveLaw", src: "/LOGO/livelaw-logo.png" },
  { name: "SnapDeal", src: "/LOGO/sanpdealbrandlogo_2.avif" },
  { name: "Jharkhand", src: "/LOGO/800px-Jharkhand_emblem.png" },
  { name: "IL", src: "/LOGO/logo-il.jpg" },
  { name: "Winston", src: "/LOGO/winston-faridabad-ma84f9666c.jpg" },
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
    "We started One Impact in 2020,& Bhidu! apan abhi bhi market mein macha rahe hai..";
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
      <div className="relative z-10 w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        {/* Background paper cut SVG - Full Width & Height */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-us-blue-paper-cut.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none scale-x-105"
          draggable={false}
        />

        {/* Banner content */}
        <div className="relative z-[5] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-8">
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

            {/* ABOUT US CTA */}
            <div className="flex-shrink-0 about-cta" style={{ opacity: 0 }}>
              <a
                href="#about"
                className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-display text-sm sm:text-base font-extrabold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#1A1A2E",
                  boxShadow: "0 4px 25px rgba(255, 215, 0, 0.4)",
                }}
              >
                ABOUT US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* CLIENT LOGOS STRIP                         */}
      {/* ═══════════════════════════════════════════ */}
      <div
        className="logo-strip relative z-0 py-10 sm:py-12 md:py-14 -mt-8 sm:-mt-12 md:-mt-16"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-14 lg:gap-16">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="client-logo flex items-center justify-center transition-opacity duration-300 hover:opacity-100 opacity-70"
                style={{ opacity: 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
