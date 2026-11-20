"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface ServiceCardData {
  title: string;
  titleLines: string[];
  description: string;
  href: string;
  image: string;
  aspectClass: string;
  txStyle: React.CSSProperties;
  h3Class?: string;
  pClass?: string;
  lmClass?: string;
}

const CARDS_ROW_1: ServiceCardData[] = [
  {
    title: "SEO Services",
    titleLines: ["SEO", "Services"],
    description: "Boost visibility, rank higher, and attract the right audience.",
    href: "/seo",
    image: "/images/home-services/seo-service.png",
    aspectClass: "aspect-[800/890]",
    txStyle: { left: "9%", top: "7.5%", right: "8%" },
  },
  {
    title: "Social Media Marketing Services",
    titleLines: ["Social Media", "Marketing Services"],
    description: "Build a strong brand presence, engage communities, and drive growth.",
    href: "/social-media-marketing",
    image: "/images/home-services/smm-service.png",
    aspectClass: "aspect-[800/890]",
    txStyle: { left: "8.5%", top: "7.0%", right: "8%" },
  },
  {
    title: "Influencer Marketing Services",
    titleLines: ["Influencer", "Marketing Services"],
    description: "Partner with the right voices to create authentic reach and real impact.",
    href: "/influencer-marketing",
    image: "/images/home-services/influencer-service.png",
    aspectClass: "aspect-[800/890]",
    txStyle: { left: "8.0%", top: "7.0%", right: "8%" },
  },
];

const CARDS_ROW_2: ServiceCardData[] = [
  {
    title: "Branding Services",
    titleLines: ["Branding", "Services"],
    description: "Build a distinct, memorable brand with strategy, design and storytelling.",
    href: "/branding-services",
    image: "/images/home-services/branding-service.png",
    aspectClass: "aspect-[800/430]",
    txStyle: { left: "7.5%", top: "8.5%", maxWidth: "50%" },
    h3Class: "fsc-h3-wide",
    pClass: "fsc-p-wide",
    lmClass: "fsc-lm-wide",
  },
  {
    title: "Web Development Services",
    titleLines: ["Web Development", "Services"],
    description: "Create high-performance, brand-aligned websites and digital experiences that deliver.",
    href: "/web-development",
    image: "/images/home-services/web-dev-service.png",
    aspectClass: "aspect-[800/430]",
    txStyle: { left: "6.5%", top: "8.5%", maxWidth: "50%" },
    h3Class: "fsc-h3-wide",
    pClass: "fsc-p-wide",
    lmClass: "fsc-lm-wide",
  },
];

export function FullServiceCreativeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const sec = sectionRef.current;
    const btn = btnRef.current;
    if (!sec) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLAnchorElement[];
    const cols = ["#ffd60a", "#1d3fe0", "#f4f1ea", "#ffd60a"];

    function spark(x: number, y: number, isBurst: boolean) {
      if (typeof window === "undefined") return;
      const e = document.createElement("i");
      e.className = "fsc-spk";
      e.style.left = `${x}px`;
      e.style.top = `${y}px`;
      e.style.setProperty("--k", cols[(Math.random() * 4) | 0]);

      if (isBurst) {
        const a = Math.random() * 6.28;
        const d = 60 + Math.random() * 110;
        e.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        e.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        const size = 8 + Math.random() * 10;
        e.style.width = `${size}px`;
        e.style.height = `${size}px`;
      } else {
        e.style.setProperty("--dx", `${Math.random() * 40 - 20}px`);
      }

      document.body.appendChild(e);
      setTimeout(() => {
        e.remove();
      }, 850);
    }

    let last = 0;
    const handlePointerMove = (e: PointerEvent) => {
      const r = sec.getBoundingClientRect();
      sec.style.setProperty("--mx", `${e.clientX - r.left}px`);
      sec.style.setProperty("--my", `${e.clientY - r.top}px`);

      const now = Date.now();
      if (now - last > 60) {
        last = now;
        spark(e.clientX, e.clientY, false);
      }
    };

    sec.addEventListener("pointermove", handlePointerMove);

    const cardCleanups: (() => void)[] = [];

    cards.forEach((c) => {
      const onEnter = () => {
        c.classList.add("on");
        sec.classList.add("hov");
      };

      const onLeave = () => {
        c.classList.remove("on");
        sec.classList.remove("hov");
        c.style.setProperty("--rx", "0deg");
        c.style.setProperty("--ry", "0deg");
      };

      const onCardMove = (e: PointerEvent) => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        c.style.setProperty("--ry", `${(x * 12).toFixed(1)}deg`);
        c.style.setProperty("--rx", `${(-y * 10).toFixed(1)}deg`);
      };

      const onClick = () => {
        const r = c.getBoundingClientRect();
        for (let i = 0; i < 18; i++) {
          spark(r.left + r.width / 2, r.top + r.height / 2, true);
        }
      };

      c.addEventListener("pointerenter", onEnter);
      c.addEventListener("pointerleave", onLeave);
      c.addEventListener("focus", onEnter);
      c.addEventListener("blur", onLeave);
      c.addEventListener("pointermove", onCardMove);
      c.addEventListener("click", onClick);

      cardCleanups.push(() => {
        c.removeEventListener("pointerenter", onEnter);
        c.removeEventListener("pointerleave", onLeave);
        c.removeEventListener("focus", onEnter);
        c.removeEventListener("blur", onLeave);
        c.removeEventListener("pointermove", onCardMove);
        c.removeEventListener("click", onClick);
      });
    });

    let btnMoveCleanup: (() => void) | undefined;
    if (btn) {
      const handleBtnPointerMove = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--bx", `${((e.clientX - r.left) / r.width - 0.5) * 10}px`);
        btn.style.setProperty("--by", `${((e.clientY - r.top) / r.height - 0.5) * 8}px`);
      };

      const handleBtnClick = () => {
        const r = btn.getBoundingClientRect();
        for (let i = 0; i < 24; i++) {
          spark(r.left + r.width / 2, r.top + r.height / 2, true);
        }
      };

      btn.addEventListener("pointermove", handleBtnPointerMove);
      btn.addEventListener("click", handleBtnClick);

      btnMoveCleanup = () => {
        btn.removeEventListener("pointermove", handleBtnPointerMove);
        btn.removeEventListener("click", handleBtnClick);
      };
    }

    return () => {
      sec.removeEventListener("pointermove", handlePointerMove);
      cardCleanups.forEach((cleanup) => cleanup());
      if (btnMoveCleanup) btnMoveCleanup();
    };
  }, []);

  let cardIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="fsc-root relative w-full overflow-hidden bg-[#040405] text-[#f4f1ea] py-16 sm:py-20 md:py-24"
    >
      {/* Background Radial Glow */}
      <div className="fsc-spot" />

      {/* Top Right Corner Blue Geometric Polygon */}
      <div className="absolute top-0 right-0 w-[260px] sm:w-[420px] lg:w-[560px] h-[110px] sm:h-[160px] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 600 180" preserveAspectRatio="none">
          <polygon fill="#1d3fe0" points="300,0 600,0 600,180 500,140 400,80 320,40" />
          <polyline fill="none" stroke="#f4f1ea" strokeWidth="5" points="298,0 320,42 400,82 500,142 600,180" />
        </svg>
      </div>

      {/* Bottom Left Corner Blue Geometric Polygon */}
      <div className="absolute bottom-0 left-0 w-[260px] sm:w-[420px] lg:w-[560px] h-[130px] sm:h-[180px] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
          <polygon fill="#1d3fe0" points="0,70 60,90 160,130 300,170 420,195 480,200 0,200" />
          <polyline fill="none" stroke="#f4f1ea" strokeWidth="5" points="0,68 60,90 160,132 300,172 420,197 480,200" />
        </svg>
      </div>

      {/* Grain Overlay */}
      <div className="fsc-grain" />

      {/* MAIN FULL-WIDTH CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* ======================================================== */}
        {/* 1. TOP HEADER SECTION */}
        {/* ======================================================== */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow */}
          <div className="fsc-eb mb-4 sm:mb-5">// OUR SERVICES &amp; EXPERTISE</div>

          {/* Headline */}
          <h2 className="fsc-h1 font-display italic font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] tracking-tight">
            <span>
              <b style={{ "--i": 0 } as React.CSSProperties}>Full-Service</b>
            </span>{" "}
            <span>
              <b style={{ "--i": 1 } as React.CSSProperties}>Creative</b>
            </span>
            <br />
            <span>
              <b style={{ "--i": 2 } as React.CSSProperties}>for Real</b>
            </span>{" "}
            <span className="fsc-hl inline-block">
              <b style={{ "--i": 3 } as React.CSSProperties}>Impact.</b>
            </span>
          </h2>

          {/* Yellow Ray SVG Doodle Accent */}
          <svg
            className="hidden sm:block absolute -top-2 right-2 md:right-8 w-14 h-14 md:w-16 md:h-16 pointer-events-none"
            viewBox="0 0 60 60"
          >
            <g stroke="#ffd60a" strokeWidth="5" strokeLinecap="round" fill="none">
              <path d="M8 52 22 28M26 56 40 34M34 22 52 16" />
            </g>
          </svg>

          {/* Yellow Swirl Accent */}
          <svg
            className="hidden md:block absolute -bottom-6 left-4 md:left-12 w-28 h-8 pointer-events-none"
            viewBox="0 0 200 40"
          >
            <path
              d="M10 25C60 15 140 12 190 25"
              stroke="#ffd60a"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Subtitle Description */}
          <p className="fsc-p-top mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#ecebe6] max-w-2xl font-sans leading-relaxed">
            A connected set of capabilities to build brands, create demand, and drive measurable growth.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 2. SERVICES SECTION (BOTTOM / MIDDLE) */}
        {/* ======================================================== */}
        <div className="w-full flex flex-col gap-6 lg:gap-8">
          {/* ROW 1: 3 CARDS (SEO, SMM, INFLUENCER) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CARDS_ROW_1.map((card) => {
              const idx = cardIndex++;
              return (
                <Link
                  key={card.title}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`fsc-card group relative block w-full ${card.aspectClass} cursor-pointer`}
                  href={card.href}
                  aria-label={card.title}
                  style={
                    {
                      "--n": idx,
                      "--d": 8 + idx * 2,
                    } as React.CSSProperties
                  }
                >
                  <div className="fsc-tilt w-full h-full relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full block"
                    />

                    {/* Yellow Spark Ray icon on hover */}
                    <svg className="fsc-ray" viewBox="0 0 60 60">
                      <path d="M8 52 22 28M26 56 40 34M34 22 52 16" />
                    </svg>

                    {/* Text overlay on white paper area */}
                    <div className="fsc-tx" style={card.txStyle}>
                      <h3 className={card.h3Class || "fsc-h3-std"}>
                        {card.titleLines.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                        <svg viewBox="0 0 100 8" preserveAspectRatio="none">
                          <path d="M2 5C25 1 70 2 98 4" />
                        </svg>
                      </h3>
                      <p className={card.pClass || "fsc-p-std"}>{card.description}</p>
                      <span className={`fsc-lm ${card.lmClass || "fsc-lm-std"}`}>
                        Learn More <i>↗</i>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ROW 2: 2 WIDE CARDS (BRANDING, WEB DEV) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CARDS_ROW_2.map((card) => {
              const idx = cardIndex++;
              return (
                <Link
                  key={card.title}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`fsc-card group relative block w-full ${card.aspectClass} cursor-pointer`}
                  href={card.href}
                  aria-label={card.title}
                  style={
                    {
                      "--n": idx,
                      "--d": 12,
                    } as React.CSSProperties
                  }
                >
                  <div className="fsc-tilt w-full h-full relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full block"
                    />

                    {/* Yellow Spark Ray icon on hover */}
                    <svg className="fsc-ray" viewBox="0 0 60 60">
                      <path d="M8 52 22 28M26 56 40 34M34 22 52 16" />
                    </svg>

                    {/* Text overlay on left side of white paper area */}
                    <div className="fsc-tx" style={card.txStyle}>
                      <h3 className={card.h3Class || "fsc-h3-wide"}>
                        {card.titleLines.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                        <svg viewBox="0 0 100 8" preserveAspectRatio="none">
                          <path d="M2 5C25 1 70 2 98 4" />
                        </svg>
                      </h3>
                      <p className={card.pClass || "fsc-p-wide"}>{card.description}</p>
                      <span className={`fsc-lm ${card.lmClass || "fsc-lm-wide"}`}>
                        Learn More <i>↗</i>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. AT BOTTOM: CTA OF ALL SERVICES */}
        {/* ======================================================== */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <Link
            ref={btnRef}
            className="fsc-btn"
            id="btn"
            href="/seo"
          >
            Explore All Services <i>↗</i>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .fsc-root {
          --fsc-bg: #040405;
          --fsc-fg: #f4f1ea;
          --fsc-blue: #1d3fe0;
          --fsc-yellow: #ffd60a;
        }

        .fsc-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.08;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='.8' numOctaves='2'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }

        .fsc-spot {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(45vw circle at var(--mx, 50%) var(--my, 20%), rgba(255, 214, 10, 0.07), transparent 65%);
        }

        .fsc-eb {
          color: #ffd60a;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: var(--font-sans), Manrope, sans-serif;
        }

        .fsc-h1 {
          color: #f4f1ea;
          font-family: var(--font-display), "Playfair Display", serif;
        }

        .fsc-h1 span:not(.fsc-hl) {
          display: inline-block;
          overflow: hidden;
          padding: 0.04em 0.1em 0.16em 0;
        }

        .fsc-h1 span > b {
          display: inline-block;
          font-weight: 900;
          transform: translateY(110%);
          animation: fsc-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes fsc-up {
          to {
            transform: none;
          }
        }

        /* Completely visible Impact. badge */
        .fsc-h1 .fsc-hl {
          overflow: visible !important;
          position: relative;
          z-index: 1;
          color: #0a0a0a;
          padding: 0.02em 0.32em 0.14em 0.22em;
          margin-left: 0.1em;
          vertical-align: baseline;
        }

        .fsc-h1 .fsc-hl b {
          position: relative;
          z-index: 2;
          color: #0a0a0a;
        }

        .fsc-h1 .fsc-hl::before {
          content: "";
          position: absolute;
          inset: -0.06em -0.22em -0.16em -0.18em;
          background: #ffd60a;
          z-index: -1;
          transform: rotate(-1.5deg) scaleX(0);
          transform-origin: left;
          border-radius: 4px;
          animation: fsc-wipe 0.7s 0.8s cubic-bezier(0.7, 0, 0.2, 1) forwards;
          clip-path: polygon(0 10%, 2% 0%, 100% 4%, 98% 30%, 100% 65%, 97% 85%, 100% 100%, 50% 98%, 3% 100%, 0 75%);
        }

        @keyframes fsc-wipe {
          to {
            transform: rotate(-1.5deg) scaleX(1);
          }
        }

        /* Responsive Card Container Queries */
        .fsc-card {
          container-type: inline-size;
          opacity: 0;
          animation: fsc-cin 0.8s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
          animation-delay: calc(0.2s + var(--n) * 0.1s);
          outline: 0;
          text-decoration: none;
          color: inherit;
        }

        @keyframes fsc-cin {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fsc-tilt {
          transition: transform 0.25s ease-out, filter 0.35s, opacity 0.35s;
          transform-style: preserve-3d;
        }

        .fsc-tilt > img {
          filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.6));
        }

        .fsc-card.on {
          z-index: 10;
        }

        .fsc-card.on .fsc-tilt {
          transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(1.03);
        }

        .fsc-root.hov .fsc-card:not(.on) .fsc-tilt {
          opacity: 0.65;
          filter: saturate(0.75);
        }

        .fsc-tx {
          position: absolute;
          color: #111;
          pointer-events: none;
        }

        /* Headline for Standard (Row 1) Cards */
        .fsc-tx h3.fsc-h3-std {
          margin: 0;
          font: italic 900 clamp(1.25rem, 7cqw, 2.05rem) / 0.92 var(--font-display), "Playfair Display", serif;
          letter-spacing: -0.03em;
          position: relative;
          padding-bottom: 0.55rem;
        }

        /* Headline for Wide (Row 2) Cards */
        .fsc-tx h3.fsc-h3-wide {
          margin: 0;
          font: italic 900 clamp(1.3rem, 5.2cqw, 2.3rem) / 0.92 var(--font-display), "Playfair Display", serif;
          letter-spacing: -0.03em;
          position: relative;
          padding-bottom: 0.55rem;
        }

        .fsc-tx h3 span {
          display: block;
        }

        .fsc-tx h3 svg {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0.6rem;
          overflow: visible;
        }

        .fsc-tx h3 svg path {
          fill: none;
          stroke: #ffd60a;
          stroke-width: 6;
          stroke-linecap: round;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: fsc-dr 0.9s ease-out forwards;
          animation-delay: calc(0.8s + var(--n) * 0.12s);
        }

        .fsc-card.on h3 svg path {
          animation: fsc-dr2 0.6s ease-out;
        }

        @keyframes fsc-dr {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fsc-dr2 {
          from {
            stroke-dashoffset: 500;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .fsc-tx p.fsc-p-std {
          margin: clamp(0.4rem, 2.8cqw, 0.9rem) 0 0;
          font: 500 clamp(0.78rem, 3.6cqw, 1.05rem) / 1.3 var(--font-sans), Manrope, sans-serif;
          max-width: 92%;
          color: #1a1a1a;
        }

        .fsc-tx p.fsc-p-wide {
          margin: clamp(0.4rem, 2.2cqw, 0.9rem) 0 0;
          font: 500 clamp(0.78rem, 2.7cqw, 1.05rem) / 1.32 var(--font-sans), Manrope, sans-serif;
          max-width: 96%;
          color: #1a1a1a;
        }

        .fsc-tx .fsc-lm {
          display: inline-block;
          font-family: var(--font-sans), Manrope, sans-serif;
          font-weight: 800;
          color: #1d3fe0;
          position: relative;
          padding-bottom: 0.15rem;
        }

        .fsc-tx .fsc-lm-std {
          margin-top: clamp(0.45rem, 3cqw, 1rem);
          font-size: clamp(0.8rem, 3.5cqw, 1.02rem);
        }

        .fsc-tx .fsc-lm-wide {
          margin-top: clamp(0.45rem, 2.4cqw, 1rem);
          font-size: clamp(0.8rem, 2.6cqw, 1.02rem);
        }

        .fsc-tx .fsc-lm::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: currentColor;
          transition: height 0.3s, background 0.3s;
        }

        .fsc-card.on .fsc-lm::after {
          height: 8px;
          background: #ffd60a;
          z-index: -1;
          bottom: -2px;
        }

        .fsc-lm i {
          display: inline-block;
          font-style: normal;
          transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1);
        }

        .fsc-card.on .fsc-lm i {
          transform: translate(0.25rem, -0.25rem);
        }

        .fsc-ray {
          position: absolute;
          right: 4%;
          top: 4%;
          width: 8%;
          max-width: 48px;
          z-index: 3;
          fill: none;
          stroke: #ffd60a;
          stroke-width: 5;
          stroke-linecap: round;
          opacity: 0;
          transform: scale(0.4) rotate(-20deg);
          transition: 0.35s cubic-bezier(0.3, 1.7, 0.4, 1);
          pointer-events: none;
        }

        .fsc-card.on .fsc-ray {
          opacity: 1;
          transform: none;
        }

        /* CTA Button */
        .fsc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #ffd60a;
          color: #0a0a0a;
          font-family: var(--font-sans), Manrope, sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          padding: 1rem 2.25rem;
          border-radius: 0.75rem;
          box-shadow: 0 0.5rem 0 rgba(255, 214, 10, 0);
          transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1), box-shadow 0.3s;
          text-decoration: none;
        }

        .fsc-btn:hover {
          transform: translate(var(--bx, 0), var(--by, 0)) translateY(-0.25rem) rotate(-1.5deg) scale(1.05);
          box-shadow: 0.5rem 0.65rem 0 #1d3fe0;
        }

        .fsc-btn i {
          font-style: normal;
          transition: transform 0.3s;
        }

        .fsc-btn:hover i {
          transform: translate(0.25rem, -0.25rem);
        }

        /* Sparkle Particle FX */
        .fsc-spk {
          position: fixed;
          z-index: 99999;
          width: 9px;
          height: 9px;
          pointer-events: none;
          background: var(--k, #ffd60a);
          clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%);
          animation: fsc-spk 0.8s forwards;
        }

        @keyframes fsc-spk {
          to {
            transform: translate(var(--dx, 0px), var(--dy, 24px)) rotate(180deg) scale(0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fsc-root * {
            animation: none !important;
          }
          .fsc-card {
            opacity: 1;
            transform: none;
          }
          .fsc-h1 span > b {
            transform: none;
          }
          .fsc-h1 .fsc-hl::before {
            transform: rotate(-1deg);
          }
          .fsc-tx h3 svg path {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
export default FullServiceCreativeSection;
