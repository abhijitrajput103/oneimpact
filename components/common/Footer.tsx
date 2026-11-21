import Link from "next/link";
import { FooterEffects } from "./FooterEffects";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <FooterEffects>
        {/* Background Grain Texture */}
        <div className="grain" aria-hidden="true" />

        {/* Top-Right Torn Paper Corner SVG */}
        <svg
          className="corner c-tr"
          viewBox="0 0 400 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon
            fill="#4066C6"
            points="130,0 400,0 400,110 360,90 330,70 290,56 250,30 200,20 150,12"
          />
          <polyline
            fill="none"
            stroke="#f5f2ea"
            strokeWidth="5"
            points="128,0 150,12 200,20 250,32 290,58 330,72 360,92 400,112"
          />
          <polygon fill="#F9D230" points="90,0 190,0 172,9 128,5" />
        </svg>

        {/* Bottom-Left Torn Paper Corner SVG */}
        <svg
          className="corner c-bl"
          viewBox="0 0 360 140"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon
            fill="#4066C6"
            points="0,0 30,28 70,60 120,80 170,100 200,140 0,140"
          />
          <polyline
            fill="none"
            stroke="#f5f2ea"
            strokeWidth="5"
            points="0,0 30,28 70,62 120,82 175,104 210,140"
          />
          <polygon fill="#F9D230" points="120,100 180,112 218,140 150,140" />
        </svg>

        {/* Main 6-Column Content Grid */}
        <div className="main">
          {/* Brand Column */}
          <div className="brand rv" style={{ "--i": 0 } as React.CSSProperties}>
            <Link className="logo" href="/" aria-label="One Impact">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/wordmark-white-8229a9710d60.webp"
                width={307}
                height={100}
                loading="lazy"
                alt="One Impact"
                className="logo-img"
              />
              <svg viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true">
                <path strokeWidth="5" d="M4 12C50 4 130 4 196 7" />
              </svg>
            </Link>
            <p className="tag">
              A creative and growth studio turning ideas into measurable impact.
            </p>
            <div className="soc">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ fill: "currentColor", stroke: "none" }}
                  aria-hidden="true"
                >
                  <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Slanted Divider Stroke */}
          <svg
            className="slant rv"
            style={{ "--i": 1 } as React.CSSProperties}
            viewBox="0 0 70 310"
            aria-hidden="true"
          >
            <path d="M64 6 8 304" />
          </svg>

          {/* Navigate Column */}
          <div className="col rv col-nav" style={{ "--i": 2 } as React.CSSProperties}>
            <h4>Navigate</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/#showreel">Our Work</Link>
              </li>
              <li>
                <Link href="/#about-banner">Our Clients</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* What We Do Column */}
          <div className="col rv col-what" style={{ "--i": 3 } as React.CSSProperties}>
            <h4>What We Do</h4>
            <ul>
              <li>
                <Link href="/seo">SEO</Link>
              </li>
              <li>
                <Link href="/social-media-marketing">Social Media Marketing</Link>
              </li>
              <li>
                <Link href="/influencer-marketing">Influencer Marketing</Link>
              </li>
              <li>
                <Link href="/branding-services">Branding</Link>
              </li>
              <li>
                <Link href="/web-development">Web Development</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col rv col-company" style={{ "--i": 4 } as React.CSSProperties}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about#founders">Our Founders</Link>
              </li>
              <li>
                <Link href="/about">The Team</Link>
              </li>
              <li>
                <Link href="/contact">
                  Careers <i>↗</i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sticky Note CTA Column with Curved Arrow */}
          <div className="cta rv" style={{ "--i": 5 } as React.CSSProperties}>
            <svg className="arrow" viewBox="0 0 240 80" aria-hidden="true">
              <path d="M4 50C50 82 112 82 122 46c5-22-26-22-22 0 6 32 90 26 128-26" />
              <path d="M204 22l26-2-10 28" />
            </svg>
            <svg className="sp" viewBox="0 0 60 60" aria-hidden="true">
              <path d="M6 34 34 18M30 8l8 22M4 48l24-6" />
            </svg>
            <Link
              data-footer-note
              className="note"
              id="note"
              href="/contact"
              aria-label="Let's Create An Impact Together — Contact One Impact"
            >
              <span className="tape" aria-hidden="true" />
              <h3>
                <span>Let’s</span>
                <span>Create An</span>
                <span className="hl">Impact</span>
                <span>Together.</span>
              </h3>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom rv" style={{ "--i": 6 } as React.CSSProperties}>
          <span>© {currentYear} One Impact. All rights reserved.</span>
          <nav>
            <Link href="/#">Privacy Policy</Link>
            <span>/</span>
            <Link href="/#">Terms of Use</Link>
          </nav>
        </div>
      </FooterEffects>

      {/* Scoped Styles for Footer */}
      <style>{`
        :root {
          --bg: #050505;
          --yellow: #F9D230;
          --blue: #4066C6;
          --fg: #f3f1ea;
          --paper: #ece9e2;
        }

        .ft {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: clamp(70px, 9vw, 120px) clamp(20px, 6vw, 100px) 36px;
          background: var(--bg);
          color: var(--fg);
          font-family: var(--font-sans), Manrope, system-ui, sans-serif;
        }

        .ft::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(
              520px circle at var(--mx, 70%) var(--my, 30%),
              rgba(249, 210, 48, 0.1),
              transparent 60%
            ),
            radial-gradient(
              90% 60% at 20% 0%,
              rgba(255, 255, 255, 0.04),
              transparent
            );
        }

        .grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.14;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence baseFrequency='.75' numOctaves='3'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .8 0'/></filter><rect width='220' height='220' filter='url(%23n)'/></svg>");
        }

        .corner {
          position: absolute;
          z-index: 0;
          pointer-events: none;
        }

        .c-tr {
          right: 0;
          top: 0;
          width: clamp(180px, 19vw, 330px);
        }

        .c-bl {
          left: 0;
          bottom: 0;
          width: clamp(150px, 16vw, 280px);
        }

        .main {
          position: relative;
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.35fr 0.12fr 1fr 1.25fr 1fr 1.4fr;
          align-items: start;
        }

        .rv {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: calc(var(--i, 0) * 0.1s);
        }

        .in .rv {
          opacity: 1;
          transform: none;
        }

        .logo {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          padding-bottom: 14px;
          text-decoration: none;
          cursor: pointer;
        }

        .logo-img {
          height: clamp(34px, 3.8vw, 50px);
          width: auto;
          max-width: min(100%, 260px);
          object-fit: contain;
          display: block;
          filter: brightness(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
          transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1);
        }

        .logo:hover .logo-img {
          transform: scale(1.03);
        }

        .logo svg {
          position: absolute;
          left: 0;
          bottom: 0;
          width: min(100%, 200px);
          height: 14px;
          overflow: visible;
        }

        .logo svg path,
        .slant path,
        .arrow path {
          fill: none;
          stroke: var(--yellow);
          stroke-linecap: round;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
        }

        .in .logo svg path,
        .in .slant path,
        .in .arrow path {
          animation: dr 1.1s 0.5s ease-out forwards;
        }

        .logo:hover svg path {
          animation: dr2 0.8s ease-out;
        }

        @keyframes dr {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes dr2 {
          from {
            stroke-dashoffset: 500;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .tag {
          margin: 22px 0 32px;
          font-size: clamp(16px, 1.35vw, 20px);
          line-height: 1.5;
          max-width: 340px;
          color: #eceae3 !important;
          opacity: 0.92;
        }

        .soc {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .soc a {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border: 1.5px solid rgba(255, 255, 255, 0.28) !important;
          border-radius: 12px;
          background: #0b0b0b !important;
          color: #ffffff !important;
          font: 800 22px var(--font-sans), Manrope, sans-serif;
          transition: transform 0.35s cubic-bezier(0.3, 1.7, 0.4, 1),
            background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s;
          cursor: pointer;
          text-decoration: none;
        }

        .soc svg {
          width: 26px;
          height: 26px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .soc a:hover,
        .soc a:focus-visible {
          background: var(--yellow) !important;
          color: #000000 !important;
          border-color: var(--yellow) !important;
          transform: translateY(-6px) rotate(-6deg);
          box-shadow: 4px 6px 0 var(--blue);
          outline: 0;
        }

        .slant {
          width: 70px;
          height: 310px;
          margin: 0 auto;
        }

        .slant path {
          stroke-width: 4;
        }

        .col h4 {
          display: inline-block;
          position: relative;
          z-index: 0;
          margin: 0 0 26px;
          font: 800 clamp(18px, 1.6vw, 24px) var(--font-sans), Manrope, sans-serif;
          color: #0a0a0a !important;
          padding: 0.28em 0.7em;
          transition: transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1);
        }

        .col h4::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--yellow);
          z-index: -1;
          clip-path: polygon(
            0 30%,
            4% 6%,
            3% 0,
            100% 8%,
            96% 30%,
            100% 56%,
            97% 100%,
            4% 94%,
            2% 70%
          );
        }

        .col:hover h4 {
          transform: rotate(-3deg) scale(1.05);
        }

        .col ul {
          list-style: none;
          margin: 0;
          padding: 0 0 0 0.7em;
        }

        .col li {
          margin: 0 0 16px;
        }

        .col li a {
          position: relative;
          display: inline-block;
          font-size: clamp(16px, 1.45vw, 22px);
          font-weight: 500;
          padding: 2px 0;
          color: #ffffff !important;
          text-decoration: none;
          opacity: 0.95;
          transition: color 0.2s, opacity 0.2s, transform 0.3s cubic-bezier(0.3, 1.7, 0.4, 1);
        }

        .col li a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 4px;
          border-radius: 4px;
          background: var(--yellow);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.7, 0, 0.2, 1);
        }

        .col li a:hover,
        .col li a:focus-visible {
          color: var(--yellow) !important;
          opacity: 1;
          transform: translateX(8px);
          outline: 0;
        }

        .col li a:hover::after,
        .col li a:focus-visible::after {
          transform: scaleX(1);
        }

        .col li a i {
          display: inline-block;
          font-style: normal;
          margin-left: 0.3em;
          color: var(--yellow) !important;
          transition: transform 0.3s;
        }

        .col li a:hover i {
          transform: translate(3px, -3px);
        }

        .cta {
          position: relative;
          justify-self: end;
          width: min(100%, 300px);
        }

        .note {
          display: block;
          position: relative;
          background: var(--paper);
          color: #111;
          padding: 34px 26px 38px 30px;
          transform: rotate(4deg);
          transform-style: preserve-3d;
          clip-path: polygon(
            1% 6%,
            6% 2%,
            30% 5%,
            60% 1%,
            100% 0,
            98% 30%,
            100% 60%,
            98% 98%,
            70% 94%,
            40% 100%,
            14% 96%,
            2% 100%,
            0 60%,
            2% 30%
          );
          filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.6));
          transition: transform 0.2s ease-out, background 0.3s;
          outline: 0;
          text-decoration: none;
          cursor: pointer;
        }

        .note::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              70% 50% at 30% 10%,
              rgba(255, 255, 255, 0.7),
              transparent
            ),
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.02) 0 2px,
              transparent 2px 4px
            );
        }

        .note h3 {
          position: relative;
          margin: 0;
          font-family: var(--font-display), "Playfair Display", serif;
          font-style: italic;
          font-weight: 900;
          font-size: clamp(32px, 3.3vw, 48px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: #111;
        }

        .note h3 span {
          display: block;
          white-space: nowrap;
        }

        .note .hl {
          position: relative;
          z-index: 0;
          display: inline-block;
          margin: 2px 0 2px -10px;
          padding: 0 10px;
        }

        .note .hl::before {
          content: "";
          position: absolute;
          inset: 4px 0 0;
          background: var(--yellow);
          z-index: -1;
          clip-path: polygon(
            0 20%,
            3% 0,
            100% 10%,
            98% 58%,
            100% 100%,
            3% 92%,
            0 60%
          );
          transition: inset 0.3s;
        }

        .note:hover .hl::before {
          inset: 0;
        }

        .tape {
          position: absolute;
          left: 30%;
          top: -22px;
          width: 46%;
          height: 40px;
          background: var(--yellow);
          z-index: 3;
          transform: rotate(-3deg);
          opacity: 0.96;
          clip-path: polygon(0 8%, 100% 0, 98% 100%, 2% 90%);
        }

        .cta .sp {
          position: absolute;
          left: -44px;
          top: -30px;
          width: 56px;
          fill: none;
          stroke: var(--yellow);
          stroke-width: 4;
          stroke-linecap: round;
        }

        .arrow {
          position: absolute;
          left: -210px;
          bottom: 12px;
          width: 200px;
          height: 70px;
          overflow: visible;
        }

        .arrow path {
          stroke-width: 4;
        }

        .bottom {
          position: relative;
          max-width: 1500px;
          margin: clamp(40px, 6vw, 76px) auto 0;
          padding-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.18) !important;
          display: flex;
          justify-content: space-between;
          gap: 12px 24px;
          flex-wrap: wrap;
          font-size: clamp(14px, 1.2vw, 18px);
          color: #ffffff !important;
          opacity: 0.9;
        }

        .bottom nav a {
          position: relative;
          padding: 2px 0;
          color: #ffffff !important;
          text-decoration: none;
          opacity: 0.92;
          transition: color 0.2s, opacity 0.2s;
        }

        .bottom nav a:hover {
          color: var(--yellow) !important;
          opacity: 1;
        }

        .bottom nav span {
          margin: 0 14px;
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .spk {
          position: fixed;
          z-index: 9999;
          width: 9px;
          height: 9px;
          pointer-events: none;
          background: var(--k);
          clip-path: polygon(
            50% 0,
            62% 38%,
            100% 50%,
            62% 62%,
            50% 100%,
            38% 62%,
            0 50%,
            38% 38%
          );
          animation: spkAnim 0.8s forwards;
        }

        @keyframes spkAnim {
          to {
            transform: translate(var(--dx, 0px), var(--dy, 24px)) rotate(180deg)
              scale(0);
            opacity: 0;
          }
        }

        @media (max-width: 1000px) {
          .main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 44px 24px;
          }
          .brand {
            grid-column: 1 / -1;
          }
          .slant,
          .arrow,
          .cta .sp {
            display: none;
          }
          .col-nav {
            grid-column: 1;
            grid-row: 2;
          }
          .col-what {
            grid-column: 2;
            grid-row: 2;
          }
          .col-company {
            grid-column: 1;
            grid-row: 3;
          }
          .cta {
            grid-column: 2;
            grid-row: 3;
            justify-self: start;
            margin-top: 0;
            width: 100%;
            max-width: 250px;
          }
        }

        @media (max-width: 640px) {
          .main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 36px 14px;
          }
          .col ul {
            padding-left: 0.1em;
          }
          .col h4 {
            margin-bottom: 16px;
            font-size: clamp(15px, 4.2vw, 19px);
            padding: 0.2em 0.5em;
          }
          .col li {
            margin-bottom: 12px;
          }
          .col li a {
            font-size: clamp(13px, 3.4vw, 15px);
            line-height: 1.35;
          }
          .cta {
            grid-column: 2;
            grid-row: 3;
            justify-self: center;
            width: 100%;
            max-width: 175px;
          }
          .note {
            padding: 22px 14px 26px 16px;
            transform: rotate(3deg);
          }
          .note h3 {
            font-size: clamp(17px, 4.6vw, 22px);
            line-height: 1.05;
          }
          .note .hl {
            margin: 1px 0 1px -6px;
            padding: 0 6px;
          }
          .tape {
            top: -15px;
            height: 28px;
          }
        }

        @media (max-width: 380px) {
          .main {
            gap: 30px 10px;
          }
          .cta {
            max-width: 150px;
          }
          .note {
            padding: 18px 10px 22px 12px;
          }
          .note h3 {
            font-size: 15.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rv {
            opacity: 1 !important;
            transform: none !important;
          }
          .logo svg path,
          .slant path,
          .arrow path {
            stroke-dashoffset: 0 !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
