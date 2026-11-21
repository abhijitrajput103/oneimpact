import React from "react";
import Link from "next/link";

/**
 * Section 4: SEVEN DISCIPLINES. ONE CREATIVE ENGINE.
 *
 * Implements the 3D fanned discipline cards showcase:
 * - 01: Branding (#ffd60a)
 * - 02: Web Dev (#0a4dff)
 * - 03: SEO (#c8b2f6)
 * - 04: Content & Film (#ff8a1f)
 * - 05: Influencer PR (#8fe3b3)
 * - 06: UGC (#f6a4c6)
 * - 07: Social Media (#a99bf2)
 *
 * 3D isometric fan arrangement with orbital glow, card lift animations,
 * and responsive mobile horizontal scroll-snap.
 */

interface DisciplineCard {
  number: string;
  title: string | React.ReactNode;
  color: string;
  isDark?: boolean;
  scale: number;
  offsetY: number;
  index: number;
  href: string;
  icon: React.ReactNode;
  art: React.ReactNode;
}

const DISCIPLINES: DisciplineCard[] = [
  {
    number: "01",
    title: "Branding",
    color: "#ffd60a",
    scale: 1.12,
    offsetY: -4,
    index: 0,
    href: "/branding-services",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="rgba(255,255,255,.22)" stroke="rgba(255,255,255,.9)" strokeWidth="3">
          <ellipse cx="50" cy="42" rx="34" ry="14" transform="rotate(35 50 42)" />
          <ellipse cx="50" cy="60" rx="30" ry="12" transform="rotate(-30 50 60)" />
        </g>
      </svg>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Web
        <br />
        Dev
      </>
    ),
    color: "#0a4dff",
    isDark: true,
    scale: 1.0,
    offsetY: 6,
    index: 1,
    href: "/web-development",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="14" y="26" width="72" height="46" rx="4" fill="#0b1b66" stroke="#cfd6ee" strokeWidth="3" />
        <path d="M18 62c14-20 28 4 42-14s18-8 24-10v32H18z" fill="#3b82ff" />
        <path d="M6 76h88l-6 8H12z" fill="#aeb6cc" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "SEO",
    color: "#c8b2f6",
    scale: 0.97,
    offsetY: 10,
    index: 2,
    href: "/seo",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20v-5M10 20V9M16 20v-7M21 20V4" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="44" cy="40" r="26" fill="rgba(255,255,255,.35)" stroke="#6a4fc4" strokeWidth="5" />
        <path d="m63 60 22 26" stroke="#4a3a88" strokeWidth="9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: (
      <>
        Content
        <br />
        &amp; Film
      </>
    ),
    color: "#ff8a1f",
    scale: 0.94,
    offsetY: 12,
    index: 3,
    href: "/social-media-marketing",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="10" y="40" width="80" height="44" rx="4" fill="#161616" />
        <path d="M10 40 20 20l80 10-10 14z" fill="#fff" />
        <path d="m26 38 8-16m10 18 8-16m10 18 8-16" stroke="#111" strokeWidth="6" />
        <path d="m42 52 22 12-22 12z" fill="#fff" />
      </svg>
    ),
  },
  {
    number: "05",
    title: (
      <>
        Influencer
        <br />
        PR
      </>
    ),
    color: "#8fe3b3",
    scale: 0.91,
    offsetY: 14,
    index: 4,
    href: "/influencer-marketing",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-4 3-6 6-6s6 2 6 6M16 14c3 0 5 2 5 5" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M18 42 62 22v52L18 58z" fill="#fff" stroke="#ddd" strokeWidth="2" />
        <ellipse cx="66" cy="48" rx="12" ry="26" fill="#ffd60a" />
        <rect x="10" y="40" width="14" height="20" rx="3" fill="#333" />
        <path d="m80 20 6-8m2 24 10-2" stroke="#222" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "UGC",
    color: "#f6a4c6",
    scale: 0.88,
    offsetY: 16,
    index: 5,
    href: "/influencer-marketing",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m10 9 5 3-5 3z" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="26" y="8" width="48" height="84" rx="9" fill="#fff" stroke="#222" strokeWidth="3" />
        <path d="M30 60 46 34l12 18 6-8 8 16z" fill="#8fb0e8" />
        <rect x="48" y="64" width="46" height="22" rx="8" fill="#ee3b3b" />
        <path d="M60 74a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4-7 8-7 8s-7-4-7-8z" fill="#fff" />
        <text x="72" y="80" fontSize="10" fontWeight="800" fill="#fff" fontFamily="var(--font-manrope, 'Manrope', sans-serif)">
          1K
        </text>
      </svg>
    ),
  },
  {
    number: "07",
    title: (
      <>
        Social
        <br />
        Media
      </>
    ),
    color: "#a99bf2",
    scale: 0.85,
    offsetY: 18,
    index: 6,
    href: "/social-media-marketing",
    icon: (
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m21 3-9 18-2-8-8-2z" />
      </svg>
    ),
    art: (
      <svg className="art" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="38" y="6" width="42" height="42" rx="12" fill="#2457ff" />
        <rect x="48" y="16" width="22" height="22" rx="7" fill="none" stroke="#fff" strokeWidth="4" />
        <circle cx="59" cy="27" r="5" fill="none" stroke="#fff" strokeWidth="3.5" />
        <rect x="10" y="40" width="38" height="38" rx="11" fill="#1b3fd6" />
        <path d="m24 52 14 8-14 8z" fill="#fff" />
        <rect x="44" y="58" width="42" height="40" rx="11" fill="#2457ff" />
        <text x="55" y="88" fontSize="26" fontWeight="800" fill="#fff" fontFamily="var(--font-manrope, 'Manrope', sans-serif)">
          in
        </text>
      </svg>
    ),
  },
];

export function AboutDisciplines() {
  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: "#070707" }}>
      <section id="disciplines" className="disciplines-sec" aria-labelledby="disciplines-heading">
        <style>{`
          .disciplines-sec {
            --bg: #070707;
            --fg: #f3f0ea;
            --blue: #2457ff;
            --yellow: #ffd60a;
            position: relative;
            min-height: 100vh;
            display: grid;
            grid-template-columns: minmax(300px, 36%) 1fr;
            align-items: center;
            gap: clamp(20px, 3vw, 40px);
            padding: clamp(50px, 6vw, 90px) clamp(20px, 4vw, 70px);
            overflow: hidden;
            isolation: isolate;
            background: var(--bg);
            color: var(--fg);
            font-family: var(--font-manrope, 'Manrope', system-ui, sans-serif);
          }
          .disciplines-sec::before,
          .disciplines-sec::after {
            content: "";
            position: absolute;
            z-index: -1;
            border-radius: 50%;
            filter: blur(90px);
            pointer-events: none;
          }
          .disciplines-sec::before {
            width: 420px;
            height: 420px;
            left: -140px;
            bottom: -160px;
            background: #1230a8;
            opacity: 0.5;
          }
          .disciplines-sec::after {
            width: 360px;
            height: 360px;
            right: -120px;
            top: -120px;
            background: #1230a8;
            opacity: 0.35;
          }
          .disciplines-sec .eb {
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: clamp(20px, 4vh, 50px);
          }
          .disciplines-sec .eb i {
            width: 150px;
            height: 1px;
            background: #fff;
            opacity: 0.7;
            display: inline-block;
          }
          .disciplines-sec h2 {
            margin: 0;
            font: 900 clamp(36px, 4.8vw, 74px)/1.02 var(--font-playfair, 'Playfair Display', Georgia, serif);
            text-transform: uppercase;
            letter-spacing: -0.02em;
          }
          .disciplines-sec h2 .ln {
            display: block;
            overflow: hidden;
          }
          .disciplines-sec h2 .ln > span {
            display: inline-block;
            transform: translateY(110%);
            animation: disciplinesUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            animation-delay: calc(var(--i) * 0.1s);
          }
          .disciplines-sec h2 em {
            color: var(--blue);
            font-style: italic;
          }
          @keyframes disciplinesUp {
            to { transform: none; }
          }
          .disciplines-sec .sw {
            width: min(340px, 80%);
            height: 30px;
            display: block;
            margin: 14px 0 26px 4%;
          }
          .disciplines-sec .sw path {
            fill: none;
            stroke: var(--yellow);
            stroke-width: 6;
            stroke-linecap: round;
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: disciplinesDr 1s 1s ease-out forwards;
          }
          @keyframes disciplinesDr {
            to { stroke-dashoffset: 0; }
          }
          .disciplines-sec .lead {
            font-size: clamp(14px, 1.3vw, 18px);
            line-height: 1.6;
            max-width: 400px;
            margin: 0;
            color: #e4e1db;
          }
          .disciplines-sec .stage {
            position: relative;
            perspective: 1500px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 560px;
          }
          .disciplines-sec .orbit {
            position: absolute;
            left: 4%;
            top: 4%;
            width: 92%;
            height: 90%;
            z-index: 0;
            overflow: visible;
            pointer-events: none;
          }
          .disciplines-sec .orbit ellipse {
            fill: none;
            stroke: var(--yellow);
            stroke-width: 2.5;
            filter: drop-shadow(0 0 8px rgba(255, 214, 10, 0.7));
            stroke-dasharray: 2400;
            stroke-dashoffset: 2400;
            animation: disciplinesDr 2.4s 0.4s ease-out forwards;
          }
          .disciplines-sec .fan {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            transform-style: preserve-3d;
            transform: rotateY(-14deg) rotateZ(-5deg);
          }
          .disciplines-sec .card {
            --w: clamp(104px, 10.4vw, 168px);
            position: relative;
            flex: none;
            width: var(--w);
            height: calc(var(--w) * 2.55);
            margin-left: calc(var(--w) * -0.16);
            border-radius: 26px;
            padding: calc(var(--w) * 0.14);
            color: #0b0b0b;
            background: var(--c);
            box-shadow: -10px 18px 36px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.25);
            transform: translateY(calc(var(--y) * 1px)) scale(var(--s)) translateZ(0);
            opacity: 0;
            animation: disciplinesIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: calc(0.35s + var(--i) * 0.08s);
            transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, opacity 0.3s ease, filter 0.3s ease;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            text-decoration: none;
            will-change: transform, box-shadow;
          }
          /* Invisible hit-area bridge to eliminate cursor flutter near edges */
          .disciplines-sec .card::before {
            content: "";
            position: absolute;
            inset: -20px -8px;
            z-index: -1;
            pointer-events: auto;
          }
          .disciplines-sec .card:first-child {
            margin-left: 0;
          }
          @keyframes disciplinesIn {
            from {
              opacity: 0;
              transform: translateY(calc(var(--y) * 1px + 50px)) scale(calc(var(--s) * 0.95)) translateZ(0);
            }
            to {
              opacity: 1;
              transform: translateY(calc(var(--y) * 1px)) scale(var(--s)) translateZ(0);
            }
          }
          /* Subtle focus / dim for sibling cards on desktop */
          @media (min-width: 861px) {
            .disciplines-sec .fan:hover .card:not(:hover) {
              opacity: 0.85;
              filter: brightness(0.92);
            }
          }
          /* Smooth, elegant hover elevation (no aggressive spring bounce, no awkward tilt, no blinding neon) */
          .disciplines-sec .card:hover {
            transform: translateY(calc(var(--y) * 1px - 26px)) scale(calc(var(--s) * 1.04)) translateZ(50px) !important;
            z-index: 30 !important;
            box-shadow: -14px 34px 60px rgba(0, 0, 0, 0.65), 0 16px 36px -8px var(--c), inset 0 0 0 1.5px rgba(255, 255, 255, 0.45);
          }
          .disciplines-sec .card.dk {
            color: #fff;
          }
          .disciplines-sec .card .n {
            font-weight: 800;
            font-size: clamp(16px, 1.5vw, 22px);
          }
          .disciplines-sec .card .ic {
            position: absolute;
            right: calc(var(--w) * 0.12);
            top: calc(var(--w) * 0.14);
            width: 22px;
            height: 22px;
            stroke: currentColor;
            fill: none;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .disciplines-sec .card:hover .ic {
            transform: translate(2px, -2px);
          }
          .disciplines-sec .card hr {
            width: 26px;
            border: 0;
            border-top: 2px solid currentColor;
            margin: 10px 0 16px;
            opacity: 0.8;
          }
          .disciplines-sec .card h3 {
            margin: 0;
            font: 900 clamp(18px, 2.1vw, 33px)/1.02 var(--font-playfair, 'Playfair Display', serif);
            letter-spacing: -0.02em;
          }
          .disciplines-sec .card .art {
            margin-top: auto;
            width: 100%;
            height: auto;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: visible;
          }
          .disciplines-sec .card:hover .art {
            transform: translateY(-8px) scale(1.04);
          }
          .disciplines-sec .card::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 26px;
            background: linear-gradient(115deg, rgba(255, 255, 255, 0.35), transparent 45%);
            pointer-events: none;
            opacity: 0.7;
            transition: opacity 0.35s ease;
          }
          .disciplines-sec .card:hover::after {
            opacity: 1;
          }
          .disciplines-sec .glow {
            position: absolute;
            left: 12%;
            right: 4%;
            bottom: 6%;
            height: 90px;
            z-index: 0;
            filter: blur(40px);
            opacity: 0.55;
            background: linear-gradient(90deg, #ffd60a, #2457ff 35%, #b69cf5 60%, #ff8a1f 80%, #a58bf0);
            pointer-events: none;
          }
          @media (max-width: 860px) {
            .disciplines-sec {
              grid-template-columns: 1fr;
              min-height: auto;
              padding: 50px 20px;
            }
            .disciplines-sec .stage {
              min-height: 0;
              perspective: none;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              justify-content: flex-start;
              padding: 20px 0 40px;
            }
            .disciplines-sec .fan {
              transform: none;
              gap: 14px;
            }
            .disciplines-sec .card {
              margin-left: 0;
              --w: 170px;
              scroll-snap-align: center;
              transform: none !important;
              --s: 1;
              --y: 0;
            }
            .disciplines-sec .card:hover {
              transform: translateY(-6px) !important;
              box-shadow: 0 16px 32px rgba(0, 0, 0, 0.45);
            }
            .disciplines-sec .card:hover .art {
              transform: translateY(-4px);
            }
            .disciplines-sec .card::before {
              display: none;
            }
            .disciplines-sec .orbit,
            .disciplines-sec .glow {
              display: none;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .disciplines-sec * {
              animation: none !important;
            }
            .disciplines-sec .card {
              opacity: 1;
            }
            .disciplines-sec h2 .ln > span {
              transform: none;
            }
            .disciplines-sec .sw path,
            .disciplines-sec .orbit ellipse {
              stroke-dashoffset: 0;
            }
          }
        `}</style>

        {/* ── LEFT COLUMN: Text and Philosophy ── */}
        <div>
          <div className="eb">
            Our Process <span>/</span> What drives us <i />
          </div>
          <h2 id="disciplines-heading">
            <span className="ln">
              <span style={{ "--i": 0 } as React.CSSProperties}>Seven</span>
            </span>
            <span className="ln">
              <span style={{ "--i": 1 } as React.CSSProperties}>Disciplines.</span>
            </span>
            <span className="ln">
              <span style={{ "--i": 2 } as React.CSSProperties}>One Creative</span>
            </span>
            <span className="ln">
              <span style={{ "--i": 3 } as React.CSSProperties}>
                <em>Engine.</em>
              </span>
            </span>
          </h2>
          <svg className="sw" viewBox="0 0 340 30" aria-hidden="true">
            <path d="M4 22 C80 8 200 6 336 14" />
          </svg>
          <p className="lead">
            A spectrum of creative expertise, working together to build brands, campaigns and experiences that make an impact.
          </p>
        </div>

        {/* ── RIGHT COLUMN: 3D Isometric Card Fan ── */}
        <div className="stage">
          <svg className="orbit" viewBox="0 0 800 500" preserveAspectRatio="none" aria-hidden="true">
            <ellipse cx="400" cy="250" rx="380" ry="230" transform="rotate(-8 400 250)" />
          </svg>
          <div className="glow" aria-hidden="true" />
          <div className="fan">
            {DISCIPLINES.map((d) => (
              <Link
                key={d.number}
                href={d.href}
                className={`card ${d.isDark ? "dk" : ""}`}
                style={
                  {
                    "--c": d.color,
                    "--i": d.index,
                    "--s": d.scale,
                    "--y": d.offsetY,
                  } as React.CSSProperties
                }
              >
                <span className="n">{d.number}</span>
                {d.icon}
                <hr />
                <h3 style={d.number === "05" ? { fontSize: "clamp(16px, 1.8vw, 28px)" } : undefined}>
                  {d.title}
                </h3>
                {d.art}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDisciplines;
