"use client";

import React, { useEffect, useRef, useState } from "react";

export interface SpotlightStep {
  stepNumber: string | number;
  title: string;
  subtitle: string;
}

export interface MumbaiSpotlightSectionProps {
  id?: string;
  headingLines: string[];
  highlightText: string;
  paragraphs: string[];
  closingHighlight?: string;
  closingText?: string;
  ctaText: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  steps: SpotlightStep[];
}

export function MumbaiSpotlightSection({
  id = "spotlight",
  headingLines,
  highlightText,
  paragraphs,
  closingHighlight,
  closingText,
  ctaText,
  ctaHref = "#audit",
  imageSrc,
  imageAlt,
  steps,
}: MumbaiSpotlightSectionProps) {
  const [cur, setCur] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isArtPopped, setIsArtPopped] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver reveal
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsInView(true), 0);
      return () => clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleStepHover = (k: number) => {
    if (k !== cur) {
      setCur(k);
      setIsArtPopped(true);
      setTimeout(() => setIsArtPopped(false), 500);
    }
  };

  const handleArtClick = () => {
    setIsArtPopped(true);
    setTimeout(() => setIsArtPopped(false), 500);
  };

  // Subtle 3D perspective tilt
  const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg)`;
    card.style.setProperty("--px", x.toFixed(2));
    card.style.setProperty("--py", y.toFixed(2));
  };

  const handleCardPointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`msp-sec ${isInView ? "in" : ""}`}
    >
      <style>{`
        .msp-sec {
          --bg: #050505;
          --yellow: #F9D230;
          --blue: #4066C6;
          --fg: #f3f1ea;
          --card: #08080a;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: var(--bg);
          color: var(--fg);
          font-family: var(--font-body, Manrope, system-ui, sans-serif);
          padding: clamp(60px, 8vw, 120px) clamp(18px, 6vw, 100px);
          box-sizing: border-box;
        }
        .msp-sec *, .msp-sec *::before, .msp-sec *::after {
          box-sizing: inherit;
        }
        .msp-sec::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(520px circle at 70% 40%, rgba(249, 210, 48, 0.08), transparent 60%);
        }
        .msp-grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.12;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence baseFrequency='.78' numOctaves='3'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .8 0'/></filter><rect width='220' height='220' filter='url(%23n)'/></svg>");
        }
        .msp-tr {
          position: absolute;
          right: 0;
          top: 0;
          width: clamp(150px, 18vw, 300px);
          z-index: -1;
          pointer-events: none;
        }
        .msp-bl {
          position: absolute;
          left: 0;
          bottom: 0;
          width: clamp(120px, 14vw, 240px);
          z-index: -1;
          pointer-events: none;
        }
        .msp-w {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          gap: clamp(28px, 5vw, 80px);
          align-items: center;
        }
        .msp-rv {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: calc(var(--i, 0) * 0.1s);
        }
        .msp-sec.in .msp-rv {
          opacity: 1;
          transform: none;
        }
        .msp-h2 {
          margin: 0 0 30px;
          font: italic 900 clamp(42px, 5.6vw, 80px)/1 var(--font-display, 'Playfair Display', Georgia, serif);
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        .msp-h2 span {
          display: block;
        }
        .msp-hl {
          position: relative;
          display: inline-block;
          max-width: 100%;
          z-index: 0;
          color: #0a0a0a !important;
          padding: 0 0.2em;
          margin-left: -0.08em;
        }
        .msp-hl::before {
          content: "";
          position: absolute;
          inset: 0.07em 0 0.01em;
          background: var(--yellow);
          z-index: -1;
          clip-path: polygon(0 20%, 3% 2%, 2% 40%, 5% 0, 100% 8%, 98% 34%, 100% 60%, 97% 82%, 100% 100%, 50% 94%, 8% 100%, 2% 84%, 0 60%);
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 0.8s 0.5s cubic-bezier(0.7, 0, 0.2, 1);
        }
        .msp-sec.in .msp-hl::before {
          transform: none;
        }
        .msp-sw {
          display: block;
          width: min(300px, 70%);
          height: 20px;
          margin: -14px 0 28px 2%;
          overflow: visible;
        }
        .msp-sw path {
          fill: none;
          stroke: var(--blue);
          stroke-width: 7;
          stroke-linecap: round;
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
        }
        .msp-sec.in .msp-sw path {
          animation: msp-dr 1s 1s ease-out forwards;
        }
        @keyframes msp-dr {
          to {
            stroke-dashoffset: 0;
          }
        }
        .msp-txt p {
          margin: 0 0 22px;
          font-size: clamp(15.5px, 1.28vw, 18px);
          line-height: 1.75;
          color: #e6e3dc;
          max-width: 640px;
        }
        .msp-txt p.k {
          font-weight: 700;
          color: #ffffff;
        }
        .msp-txt p mark, .msp-txt p.k span {
          background: none;
          color: inherit;
          text-decoration: none;
        }
        .msp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          background: var(--yellow);
          color: #0a0a0a;
          font: 800 17px Manrope, sans-serif;
          min-height: 52px;
          padding: 0 28px;
          border: 0;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1), box-shadow 0.3s;
        }
        .msp-btn:hover, .msp-btn:focus-visible {
          transform: translateY(-4px) rotate(-1deg);
          box-shadow: 5px 7px 0 var(--blue);
          outline: 0;
        }
        .msp-btn i {
          font-style: normal;
          transition: transform 0.3s;
        }
        .msp-btn:hover i {
          transform: translate(4px, -4px);
        }
        .msp-card {
          position: relative;
          background: var(--card);
          border: 1px solid #2a2a2a;
          border-radius: 34px;
          padding: clamp(22px, 3vw, 40px);
          transition: transform 0.25s ease-out;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }
        .msp-card .tape {
          position: absolute;
          left: 8%;
          top: -16px;
          width: 28%;
          height: 34px;
          background: var(--yellow);
          transform: rotate(-4deg);
          z-index: 3;
          clip-path: polygon(0 10%, 100% 0, 98% 100%, 2% 90%);
        }
        .msp-card .peek {
          position: absolute;
          right: -26px;
          bottom: -24px;
          width: 46%;
          height: 90px;
          background: var(--blue);
          z-index: -1;
          clip-path: polygon(0 30%, 10% 8%, 24% 24%, 40% 0, 58% 20%, 76% 4%, 100% 22%, 100% 100%, 0 100%);
        }
        .msp-art {
          position: relative;
          margin: 0 auto 26px;
          width: min(100%, 430px);
          aspect-ratio: 390 / 305;
          cursor: pointer;
        }
        .msp-art img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: translate(calc(var(--px, 0) * 10px), calc(var(--py, 0) * 8px));
          transition: transform 0.25s ease-out;
        }
        .msp-art.pop img {
          animation: msp-pop 0.5s cubic-bezier(0.3, 1.7, 0.4, 1);
        }
        @keyframes msp-pop {
          0% { transform: scale(0.95) rotate(-1.5deg); }
          60% { transform: scale(1.04) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .msp-rays {
          position: absolute;
          right: 2%;
          top: 2%;
          width: 14%;
          fill: none;
          stroke: var(--yellow);
          stroke-width: 5;
          stroke-linecap: round;
          opacity: 0;
          transform: scale(0.4);
          transition: 0.35s cubic-bezier(0.3, 1.7, 0.4, 1);
          pointer-events: none;
        }
        .msp-art.pop .msp-rays {
          opacity: 1;
          transform: none;
        }
        .msp-steps {
          display: grid;
          gap: 12px;
          position: relative;
        }
        .msp-step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          text-align: left;
          background: #151517;
          color: #ffffff;
          border: 1.5px solid #28282c;
          border-radius: 20px;
          padding: 16px 20px;
          min-height: 68px;
          cursor: pointer;
          font-family: inherit;
          overflow: hidden;
          transition: transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.22s, border-color 0.22s, box-shadow 0.22s, opacity 0.22s;
          opacity: 0.65;
          user-select: none;
        }
        .msp-step:hover, .msp-step:focus-visible, .msp-step.on {
          opacity: 1;
          background: #23231c;
          border-color: var(--yellow);
          box-shadow: 4px 5px 0 var(--yellow);
          transform: translateX(4px);
          outline: 0;
        }
        .msp-step .n {
          flex: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 14px;
          background: #27272a;
          color: #a1a1aa;
          transition: all 0.22s;
        }
        .msp-step:hover .n, .msp-step:focus-visible .n, .msp-step.on .n {
          background: var(--yellow);
          color: #000000;
          transform: rotate(-6deg) scale(1.08);
        }
        .msp-step b {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
        }
        .msp-step small {
          display: block;
          margin-top: 2px;
          font-size: 13px;
          color: #a8a8ad;
        }
        @media (min-width: 1600px) {
          .msp-w { max-width: 1440px; }
          .msp-h2 { font-size: 92px; }
          .msp-txt p { font-size: 19px; }
          .msp-art { width: min(100%, 480px); }
        }
        @media (max-width: 1100px) {
          .msp-h2 { font-size: clamp(40px, 6vw, 60px); }
          .msp-card { padding: 24px; }
          .msp-step { padding: 14px 16px; gap: 12px; }
        }
        @media (max-width: 900px) {
          .msp-w { grid-template-columns: minmax(0, 1fr); }
          .msp-txt p { max-width: none; }
          .msp-h2 { font-size: clamp(42px, 9vw, 72px); }
          .msp-sw { margin-bottom: 24px; }
          .msp-card {
            border-radius: 28px;
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            padding: clamp(20px, 4vw, 32px);
          }
          .msp-btn { width: 100%; justify-content: center; }
          .msp-step:hover { transform: none; }
          .msp-card .peek { right: -10px; }
          .msp-art { width: min(100%, 400px); }
        }
        @media (max-width: 600px) {
          .msp-sec { padding: 52px 18px 64px; }
          .msp-h2 { font-size: clamp(32px, 10.6vw, 56px); margin-bottom: 24px; }
          .msp-sw { margin: -8px 0 20px 0; }
          .msp-txt p { font-size: 15.5px; line-height: 1.7; margin-bottom: 18px; }
          .msp-card { border-radius: 24px; padding: 20px 16px 22px; }
          .msp-card .tape { height: 28px; top: -13px; }
          .msp-art { margin-bottom: 20px; }
          .msp-step { min-height: 64px; border-radius: 16px; padding: 12px 14px; gap: 12px; }
          .msp-step .n { width: 30px; height: 30px; font-size: 13px; }
          .msp-step b { font-size: 15px; }
          .msp-step small { font-size: 12.5px; }
          .msp-tr { width: 120px; }
          .msp-bl { width: 96px; }
          .msp-rays { width: 16%; }
        }
        @media (max-width: 380px) {
          .msp-card { padding: 18px 12px 20px; }
          .msp-step b { font-size: 14.5px; }
          .msp-step small { font-size: 12px; }
          .msp-btn { font-size: 16px; padding: 0 20px; }
        }
        @media (max-height: 520px) and (orientation: landscape) {
          .msp-sec { padding-top: 40px; padding-bottom: 40px; }
        }
        @media (hover: none) {
          .msp-step:hover, .msp-step:focus-visible { transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
          .msp-rv { opacity: 1; transform: none; }
          .msp-hl::before { transform: none; }
          .msp-sw path { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="msp-grain" />

      {/* Decorative top-right graphic */}
      <svg className="msp-tr" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
        <polygon fill="#4066C6" points="130,0 400,0 400,110 360,90 330,70 290,56 250,30 200,20 150,12" />
        <polyline fill="none" stroke="#f5f2ea" strokeWidth="5" points="128,0 150,12 200,20 250,32 290,58 330,72 360,92 400,112" />
        <polygon fill="#F9D230" points="90,0 190,0 172,9 128,5" />
      </svg>

      {/* Decorative bottom-left graphic */}
      <svg className="msp-bl" viewBox="0 0 360 140" preserveAspectRatio="none" aria-hidden="true">
        <polygon fill="#4066C6" points="0,0 30,28 70,60 120,80 170,100 200,140 0,140" />
        <polyline fill="none" stroke="#f5f2ea" strokeWidth="5" points="0,0 30,28 70,62 120,82 175,104 210,140" />
        <polygon fill="#F9D230" points="120,100 180,112 218,140 150,140" />
      </svg>

      <div className="msp-w">
        {/* Left Column: Copy & CTA */}
        <div className="msp-txt">
          <h2 className="msp-h2 msp-rv">
            {headingLines.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
            <span className="msp-hl">{highlightText}</span>
          </h2>

          <svg className="msp-sw msp-rv" style={{ "--i": 1 } as React.CSSProperties} viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
            <path d="M4 12C70 4 200 4 296 10" />
          </svg>

          {paragraphs.map((p, idx) => (
            <p key={idx} className="msp-rv" style={{ "--i": idx + 1 } as React.CSSProperties}>
              {p}
            </p>
          ))}

          {(closingHighlight || closingText) && (
            <p className="k msp-rv" style={{ "--i": paragraphs.length + 1 } as React.CSSProperties}>
              {closingHighlight && <span>{closingHighlight}</span>}
              {closingText}
            </p>
          )}

          <a
            className="msp-btn msp-rv"
            style={{ "--i": paragraphs.length + 2 } as React.CSSProperties}
            href={ctaHref}
          >
            {ctaText} <i>↗</i>
          </a>
        </div>

        {/* Right Column: Card with Tape, Peek, Art, and Steps */}
        <div
          ref={cardRef}
          className="msp-card msp-rv"
          style={{ "--i": 2 } as React.CSSProperties}
          onPointerLeave={handleCardPointerLeave}
          onPointerMove={handleCardPointerMove}
        >
          <span className="tape" aria-hidden="true" />
          <span className="peek" aria-hidden="true" />

          {/* Artwork container */}
          <div
            className={`msp-art ${isArtPopped ? "pop" : ""}`}
            onClick={handleArtClick}
            role="button"
            tabIndex={0}
            aria-label="Interactive illustration"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsArtPopped(true);
                setTimeout(() => setIsArtPopped(false), 500);
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src={imageSrc}
              width={1536}
              height={1024}
              alt={imageAlt}
            />
            <svg className="msp-rays" viewBox="0 0 60 60" aria-hidden="true">
              <path d="M8 52 22 28M26 56 40 34M34 22 52 16" />
            </svg>
          </div>

          {/* Interactive Steps (hover-activated, 0 JS overhead) */}
          <div className="msp-steps">
            {steps.map((step, k) => {
              const isOn = k === cur;
              return (
                <div
                  key={k}
                  className={`msp-step ${isOn ? "on" : ""}`}
                  onMouseEnter={() => handleStepHover(k)}
                  onClick={() => handleStepHover(k)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isOn}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleStepHover(k);
                    }
                  }}
                >
                  <span className="n">{step.stepNumber}</span>
                  <span>
                    <b>{step.title}</b>
                    <small>{step.subtitle}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
