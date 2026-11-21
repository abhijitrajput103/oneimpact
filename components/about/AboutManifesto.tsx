import React from "react";
import Image from "next/image";

/**
 * Section 2: THE MANIFESTO | ONE IMPACT
 *
 * Exact replication of the 95-100vh unified editorial composition:
 * - Fits within 95vh-100vh on desktop without vertical scrolling
 * - Top folio: "02 / OUR PHILOSOPHY" | "A DIFFERENT WAY OF THINKING — ONE IMPACT®"
 * - Left stage:
 *    - Crown doodle floating above headline
 *    - Stacked editorial headline: "WE BELIEVE GOOD DESIGN SHOULD MAKE YOU"
 *    - "FEEL SOMETHING." on jagged yellow tape badge with electric blue italic text and underline swoosh
 *    - Yellow hand-drawn arrow doodle pointing down-left
 *    - Compact lower row with rotating yellow stamp badge ("IDEAS IN MOTION • EST. 2020 • ONE IMPACT"),
 *      "[ FIG. 02 — CREATIVE DOCTRINE ]" label, and the manifesto statement paragraph
 * - Right stage:
 *    - Full creative studio collage (monitor with ONE IMPACT®, DSLR camera, digital tablet with chalk stroke, eye polaroid, and film strips)
 *      from "/images/OurPhilosophy-image.webp"
 * - Bottom folio: "02 / 05 — MANIFESTO" | "ONE IMPACT® CREATIVE STUDIO"
 */

export function AboutManifesto() {
  return (
    <section id="manifesto" className="manifesto-sec" aria-labelledby="manifesto-heading">
      <style>{`
        .manifesto-sec {
          --bg: #070707;
          --fg: #ece9e4;
          --blue: #1236e6;
          --blue2: #2a55ff;
          --yellow: #fbd62b;
          --dim: #9a9a9a;
          position: relative;
          margin-top: -2px;
          background-color: var(--bg);
          background-image: url("/images/our-philoshpy-bg.webp");
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          color: var(--fg);
          font-family: var(--font-manrope, 'Manrope', system-ui, sans-serif);
          overflow: hidden;
          isolation: isolate;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(18px, 2.2vw, 28px) clamp(20px, 4vw, 70px) clamp(16px, 1.8vw, 22px);
        }
        @media (min-width: 1024px) {
          .manifesto-sec {
            height: clamp(660px, 96vh, 920px);
            max-height: 100vh;
          }
        }
        .manifesto-sec .grain {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          opacity: 0.1;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }
        .manifesto-sec .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          position: relative;
          z-index: 10;
        }
        .manifesto-sec .top .n {
          background: var(--yellow);
          color: #000;
          padding: 2px 7px;
          border-radius: 4px;
          margin-right: 12px;
          font-weight: 900;
        }
        .manifesto-sec .top .r {
          color: var(--dim);
        }
        .manifesto-sec .top .r b {
          color: #fff;
          margin-left: 14px;
        }
        .manifesto-sec .stage {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 0;
        }
        @media (min-width: 1024px) {
          .manifesto-sec .stage {
            display: grid;
            grid-template-columns: minmax(320px, 39%) 1fr;
            align-items: center;
            gap: clamp(8px, 1.5vw, 20px);
            padding: 0;
          }
        }
        .manifesto-sec h2 {
          position: relative;
          z-index: 3;
          margin: 0;
          font: 900 clamp(30px, 4.1vw, 64px)/0.98 var(--font-playfair, 'Playfair Display', Georgia, serif);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
        }
        .manifesto-sec .ln {
          display: block;
          overflow: hidden;
          padding: 0 0.1em 0.02em 0;
        }
        .manifesto-sec .ln > span {
          display: inline-block;
          transform: translateY(115%) rotate(3deg);
          animation: manifestoUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--i) * 0.1s);
        }
        @keyframes manifestoUp {
          to { transform: none; }
        }
        .manifesto-sec .ln.hl {
          overflow: visible;
          position: relative;
          margin-top: 0.1em;
          padding: 0.05em 0.45em 0.08em 0.1em;
          width: max-content;
        }
        .manifesto-sec .ln.hl::before {
          content: "";
          position: absolute;
          inset: 0 0 0 -0.35em;
          background: var(--yellow);
          z-index: -1;
          transform: rotate(-1.2deg) scaleX(0);
          transform-origin: left;
          animation: manifestoWipe 0.7s 0.6s cubic-bezier(0.7, 0, 0.2, 1) forwards;
          clip-path: polygon(
            0 16%, 4% 4%, 3% 28%, 9% 0, 100% 5%,
            98% 24%, 100% 46%, 97% 68%, 99% 100%,
            40% 95%, 12% 100%, 4% 88%, 0 70%, 2% 48%
          );
        }
        @keyframes manifestoWipe {
          to { transform: rotate(-1.2deg) scaleX(1); }
        }
        .manifesto-sec .ln.hl > span {
          color: var(--blue);
          font-style: italic;
          transform: none;
          animation: none;
          position: relative;
          text-shadow: none;
        }
        .manifesto-sec .swoosh {
          position: absolute;
          z-index: 3;
          left: 4%;
          top: calc(100% - 2px);
          width: 58%;
          height: 38px;
          overflow: visible;
          pointer-events: none;
        }
        .manifesto-sec .draw {
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: manifestoDr 1.2s 1.2s ease-out forwards;
        }
        @keyframes manifestoDr {
          to { stroke-dashoffset: 0; }
        }
        .manifesto-sec .crown {
          position: absolute;
          z-index: 3;
          left: 46%;
          top: -24px;
          width: 52px;
          transform: rotate(8deg);
          animation: manifestoWob 3.5s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes manifestoWob {
          50% { transform: rotate(-4deg) translateY(-3px); }
        }
        .manifesto-sec .arrow-doodle {
          position: absolute;
          left: 65%;
          bottom: -22px;
          width: 48px;
          height: 32px;
          pointer-events: none;
        }
        .manifesto-sec .stamp-wrap {
          display: flex;
          align-items: center;
          gap: clamp(14px, 2.5vw, 24px);
          margin-top: clamp(22px, 3vh, 34px);
        }
        .manifesto-sec .stamp {
          position: relative;
          width: clamp(92px, 9vw, 110px);
          height: clamp(92px, 9vw, 110px);
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--yellow);
          border: 4px solid #000;
          box-shadow: 0 0 0 2px var(--yellow), 0 8px 24px rgba(251, 214, 43, 0.28);
          transform: rotate(-6deg);
          transition: transform 0.4s;
          cursor: pointer;
        }
        .manifesto-sec .stamp:hover {
          transform: rotate(10deg) scale(1.06);
        }
        .manifesto-sec .stamp svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          animation: manifestoSp 18s linear infinite;
        }
        .manifesto-sec .stamp .center-txt {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 0.08em;
          line-height: 1.1;
        }
        @keyframes manifestoSp {
          to { transform: rotate(360deg); }
        }
        .manifesto-sec .fig-label {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--dim);
          margin-top: 6px;
        }
        .manifesto-sec .manifesto-copy {
          font-size: clamp(12px, 1.05vw, 14px);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 500;
          max-width: 320px;
        }
        .manifesto-sec .art-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        @media (min-width: 1024px) {
          .manifesto-sec .art-wrap {
            min-height: 0;
            height: clamp(440px, 76vh, 760px);
            margin-left: -24px;
          }
        }
        .manifesto-sec .bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          position: relative;
          z-index: 10;
        }
        .manifesto-sec .bottom-bar span:first-child {
          color: var(--dim);
        }
        .manifesto-sec .bottom-bar span:last-child {
          color: #fff;
        }
        @media (prefers-reduced-motion: reduce) {
          .manifesto-sec * {
            animation: none !important;
          }
          .manifesto-sec .ln > span {
            transform: none;
          }
          .manifesto-sec .ln.hl::before {
            transform: rotate(-1.2deg);
          }
          .manifesto-sec .draw {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* Background Film Grain Overlay */}
      <div className="grain" aria-hidden="true" />

      {/* ── TOP FOLIO BAR ── */}
      <div className="top">
        <div>
          <span className="n">02</span>
          <span>02 / Our Philosophy</span>
        </div>
        <div className="r">
          A different way of thinking<b>One Impact®</b>
        </div>
      </div>

      {/* ── MAIN STAGE (FITS IN VIEWPORT) ── */}
      <div className="stage">
        {/* LEFT COLUMN: Headline + Underline Swoosh + Arrow + Stamp & Copy */}
        <div className="relative">
          {/* Hand-drawn Crown SVG */}
          <svg
            className="crown"
            viewBox="0 0 70 60"
            fill="none"
            stroke="#ece9e4"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 44 L10 12 L26 30 L36 6 L46 30 L62 12 L58 44" />
            <path d="M14 54 H52" />
          </svg>

          {/* 5-Line Editorial Headline */}
          <h2 id="manifesto-heading">
            <span className="ln">
              <span style={{ "--i": 0 } as React.CSSProperties}>We believe</span>
            </span>
            <span className="ln">
              <span style={{ "--i": 1 } as React.CSSProperties}>Good design</span>
            </span>
            <span className="ln">
              <span style={{ "--i": 2 } as React.CSSProperties}>Should</span>
            </span>
            <span className="ln">
              <span style={{ "--i": 3 } as React.CSSProperties}>Make you</span>
            </span>
            <span className="ln hl">
              <span>Feel something.</span>
            </span>

            {/* Underline Swoosh SVG */}
            <svg className="swoosh" viewBox="0 0 500 50" aria-hidden="true">
              <path
                className="draw"
                stroke="#1236e6"
                strokeWidth={7}
                d="M0 36 C120 18 300 14 480 26"
              />
              <path
                className="draw"
                stroke="#fff"
                strokeWidth={2.5}
                d="M20 20 C140 8 300 6 440 14"
                style={{ animationDelay: "1.5s" }}
              />
            </svg>
          </h2>

          {/* Yellow Hand-Drawn Arrow pointing down-left toward the copy */}
          <div className="arrow-doodle" aria-hidden="true">
            <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M38 4 C32 14, 22 22, 6 26 M6 26 L16 22 M6 26 L12 16"
                stroke="#fbd62b"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Lower Row: Rotating Stamp Badge + FIG Annotation + Paragraph Copy */}
          <div className="stamp-wrap">
            {/* Stamp Column */}
            <div className="flex flex-col items-center">
              <div className="stamp" aria-label="Ideas in Motion - Est. 2020 - One Impact">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <path
                    id="stampCirclePath"
                    fill="none"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                  <text fontSize="9.2" fontWeight="900" letterSpacing="2.6" fill="#000">
                    <textPath href="#stampCirclePath">IDEAS IN MOTION • ONE IMPACT • </textPath>
                  </text>
                </svg>
                <div className="center-txt">
                  <span className="text-[10px] leading-tight font-black">★</span>
                  <span>EST. 2020</span>
                </div>
              </div>
              <div className="fig-label">[ FIG. 02 — CREATIVE DOCTRINE ]</div>
            </div>

            {/* Supporting Copy */}
            <p className="manifesto-copy">
              We don&apos;t believe in doing digital for the sake of being digital. We believe in
              creating meaningful experiences, building memorable brands, and making ideas impossible
              to ignore.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Full Collage (Monitor + Camera + Tablet + Eye + Film) */}
        <div className="art-wrap" aria-hidden="true">
          <Image
            src="/images/OurPhilosophy-image.webp"
            alt="One Impact Creative Tools and Studio Collage"
            width={1536}
            height={1024}

            className="w-full h-full object-contain object-center lg:object-left filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.7)] scale-100 lg:scale-[1.08] origin-left transition-transform duration-500"
          />
        </div>
      </div>

      {/* ── BOTTOM FOLIO BAR ── */}
      <div className="bottom-bar">
        <span>02 / 05 — MANIFESTO</span>
        <span>ONE IMPACT® CREATIVE STUDIO</span>
      </div>
    </section>
  );
}

export default AboutManifesto;
