"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

// Client/partner logos — exactly matching the SEO page
const CLIENT_LOGOS = [
  { name: "LiveLaw", src: "/LOGO/transparent/livelaw-logo.webp" },
  { name: "SnapDeal", src: "/LOGO/transparent/sanpdealbrandlogo_2.webp" },
  { name: "LenDen Club", src: "/LOGO/transparent/LEDEN Clube.webp" },
  { name: "Axis Trustee", src: "/LOGO/transparent/axistrustee.webp" },
  { name: "Sweet Bengal", src: "/LOGO/transparent/SWEET BENGAL.webp" },
  { name: "DSCI", src: "/LOGO/transparent/dsci.webp" },
  { name: "Bloomberg Quint", src: "/LOGO/transparent/bloomberg-quint-vector-logo.webp" },
  { name: "DSP Mutual Fund", src: "/LOGO/transparent/DSP Mutual fund.webp" },
  { name: "MOXIE Beauty", src: "/LOGO/transparent/MOXIE Beauty.webp" },
  { name: "PayU", src: "/LOGO/transparent/PayU.svg.webp" },
  { name: "SMAAASH", src: "/LOGO/transparent/SMAAASH.webp" },
  { name: "Sweet India", src: "/LOGO/transparent/SWEDT INDIA.webp" },
  { name: "Jharkhand", src: "/LOGO/transparent/800px-Jharkhand_emblem.webp" },
  { name: "IL", src: "/LOGO/transparent/logo-il.webp" },
  { name: "Winston", src: "/LOGO/transparent/winston-faridabad-ma84f9666c.webp" },
];



interface AboutBannerProps {
  className?: string;
}

export function AboutBanner({ className }: AboutBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMarqueeInView, setIsMarqueeInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsMarqueeInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMarqueeInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
              start: "top 85%",
              once: true,
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
              start: "top 85%",
              once: true,
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
              <Link
                href="/about"
                className="inline-flex items-center justify-center w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] py-4 sm:py-4.5 rounded-full font-display text-sm sm:text-base md:text-lg font-black tracking-[0.18em] uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-95 text-center"
                style={{
                  backgroundColor: "#f9d230",
                  color: "#1A1A2E",
                  boxShadow: "0 6px 30px rgba(255, 215, 0, 0.45)",
                }}
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* BRANDS WE WORK WITH MARQUEE (FROM SEO PAGE) */}
      {/* ═══════════════════════════════════════════ */}
      <div
        className="relative z-0 pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-14 md:pb-16 -mt-6 sm:-mt-8 md:-mt-10"
        style={{
          backgroundColor: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            position: "relative",
            zIndex: 1,
            margin: "0 0 clamp(22px, 3vw, 32px)",
            fontSize: "14.5px",
            fontWeight: 500,
            color: "#6E6E73",
            textAlign: "center",
            letterSpacing: "-0.01em",
          }}
        >
          Brands we work with
        </p>

        <div
          className="marqwrap"
          style={{
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            width: "100%",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div
            className="marq"
            style={{
              display: "flex",
              gap: "clamp(56px, 6vw, 96px)",
              width: "max-content",
              alignItems: "center",
              animationPlayState: isMarqueeInView ? "running" : "paused",
            }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  padding: "0 8px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{
                    display: "block",
                    height: "clamp(46px, 5.2vw, 68px)",
                    width: "auto",
                    maxWidth: "clamp(160px, 18vw, 240px)",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  className="transition-transform duration-300 hover:scale-110"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marq {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .marq {
            animation: marq 44s linear infinite;
          }
          .marqwrap:hover .marq {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </section>
  );
}

export default AboutBanner;
