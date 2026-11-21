import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { LiveDashboardPreview } from "@/components/seo/LiveDashboardPreview";
import { ServiceReelsSection } from "@/components/showroom/ServiceReelsSection";
import { HeroForm, ApproachTabs, ServiceTabs, OfferSection, WorkCarousel, FaqSection, InquirySection } from "./interactive-sections";

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

const EEAT_CARDS = [
  {
    k: "E",
    t: "Experience",
    a: "Our team has worked hands-on with brands across industries, successfully navigating SEO challenges and delivering results. From traffic surges to strategic keyword wins, we know what it takes to rank, and stay there.",
    icon: "/media/seo-page-19-db9fd161b135.webp",
  },
  {
    k: "E",
    t: "Expertise",
    a: "We bring together professionals from diverse sectors, each bringing unique insights to the table. No generic blueprints, just carefully crafted SEO plans built around your market, your goals, and your audience.",
    icon: "/media/seo-page-expertise-ec51f7ec5c1a.webp",
  },
  {
    k: "A",
    t: "Authoritativeness",
    a: "Our strategies help you earn credibility in your industry. By consistently publishing quality content and building the right links, we position your brand as a trusted voice in your space.",
    icon: "/media/seo-page-authoritativeness-988829fc3449.webp",
  },
  {
    k: "T",
    t: "Trustworthiness",
    a: "Transparency is non-negotiable. We set expectations early, deliver honest reports, and always keep you in the loop. Our work is measurable, ethical, and designed for long-term success.",
    icon: "/media/seo-page-trustworthiness-52db6db45746.webp",
  },
];

const QUOTES = [
  {
    text: "They explained every change in plain language, and the monthly reports actually made sense to our whole team.",
    role: "Marketing Head, home décor brand",
  },
  {
    text: "Our pages finally match what customers search for, and the enquiries we receive are a much better fit.",
    role: "Founder, healthcare clinic",
  },
  {
    text: "Clear process, honest updates and a team that picks up the phone. SEO no longer feels like a black box.",
    role: "Director, manufacturing company",
  },
];

const HELPS_CARDS = [
  {
    t: "Better visibility where it counts",
    a: "We help you rank for keywords your audience is actively searching. That means you show up just when they need your product or service.",
    d: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4",
    chip: "#f9d230",
    icon: "/media/icon-better-visibility-325ea03b8c97.webp",
  },
  {
    t: "Traffic that converts",
    a: "Unlike paid ads that reach broad audiences, SEO brings in users with intent: people already looking for what you offer.",
    d: "M3 17l6-6 4 4 8-8M15 7h6v6",
    chip: "#4066c6",
    icon: "/media/icon-traffic-that-converts-f0a8170d6952.webp",
  },
  {
    t: "Higher rankings without paying for ads",
    a: "Top organic rankings build trust and click-throughs. People trust what ranks naturally over what’s paid.",
    d: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z",
    chip: "#f9d230",
    icon: "/media/icon-higher-rankings-ec305e801a7c.webp",
  },
  {
    t: "Cost-efficient, long-term strategy",
    a: "No bidding wars or ad spend needed. Your optimized content keeps working for you over time.",
    d: "M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3",
    chip: "#4066c6",
    icon: "/media/icon-cost-efficient-2aaac34c829f.webp",
  },
  {
    t: "An edge over competitors",
    a: "While others rely solely on ads, your SEO presence makes sure you’re visible in the long run.",
    d: "M5 21V9l7-6 7 6v12M9 21v-6h6v6",
    chip: "#f9d230",
    icon: "/media/icon-an-edge-over-competitors-8caa84ce0d8d.webp",
  },
  {
    t: "Smarter decisions from real data",
    a: "SEO tools give insight into user behavior and performance, helping you adjust campaigns intelligently.",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#4066c6",
    icon: "/media/icon-smarter-decisions-from-real-data-8c0f03fc6be5.webp",
  },
];

const MAP_ROWS = [
  {
    n: "1",
    name: "Your Business Name",
    meta: "4.9 ★ (120+) · SEO & Digital Marketing · Open now",
    pin: "#f9d230",
    bg: "#FFF9E6",
  },
  {
    n: "2",
    name: "Competitor Agency A",
    meta: "4.2 ★ (45) · Advertising agency",
    pin: "#E5E5EA",
    bg: "#FFFFFF",
  },
  {
    n: "3",
    name: "Competitor Agency B",
    meta: "3.9 ★ (18) · Marketing consultant",
    pin: "#E5E5EA",
    bg: "#FFFFFF",
  },
];

export default function SeoLandingPage() {
  return (
    <div
      className="seo-landing-root"
      style={{
        background: "#FFFFFF",
        color: "#000000",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI Variable Text', 'Segoe UI', system-ui, sans-serif",
        fontSize: "17px",
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style>{`
        body:has(.seo-landing-root),
        body:has(.seo-landing-root) *,
        .seo-landing-root,
        .seo-landing-root * {
          cursor: auto !important;
          box-sizing: border-box;
        }
        body:has(.seo-landing-root) a,
        body:has(.seo-landing-root) button,
        body:has(.seo-landing-root) select,
        body:has(.seo-landing-root) summary,
        body:has(.seo-landing-root) [role="button"],
        body:has(.seo-landing-root) [role="tab"],
        .seo-landing-root a,
        .seo-landing-root button,
        .seo-landing-root select,
        .seo-landing-root summary,
        .seo-landing-root [role="button"],
        .seo-landing-root [role="tab"] {
          cursor: pointer !important;
        }
        body:has(.seo-landing-root) input,
        body:has(.seo-landing-root) textarea,
        .seo-landing-root input,
        .seo-landing-root textarea {
          cursor: text !important;
        }
        .seo-landing-root a:not(header a):not(.bg-black) {
          color: #000000;
          transition: color 150ms ease;
        }
        .seo-landing-root a:not(header a):not(.bg-black):hover {
          color: #3a3a3c;
        }
        .seo-landing-root .press {
          transition: transform 100ms ease-out, background-color 150ms ease, box-shadow 150ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .seo-landing-root .press:active {
          transform: scale(0.97);
        }
        .seo-landing-root .press:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .seo-landing-root .press:disabled:active {
          transform: none;
        }
        .seo-landing-root .y:hover {
          background-color: #fae066 !important;
        }
        .seo-landing-root :focus-visible {
          outline: 3px solid #4066c6;
          outline-offset: 3px;
        }
        .seo-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .seo-landing-root .fd:focus {
          outline: none;
          border-color: #f9d230 !important;
          box-shadow: 0 0 0 4px rgba(249, 210, 48, 0.3);
        }
        .seo-landing-root .prewrap {
          white-space: pre-line;
        }
        .seo-landing-root details summary {
          list-style: none;
          cursor: pointer;
        }
        .seo-landing-root details summary::-webkit-details-marker {
          display: none;
        }
        .seo-landing-root .chev {
          transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .seo-landing-root details[open] .chev {
          transform: rotate(45deg);
        }
        .seo-landing-root .navlinks {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .seo-landing-root .mbar {
          display: none;
          gap: 10px;
        }
        .seo-landing-root .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(24px, 4vw, 56px);
          align-items: center;
        }
        .seo-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: thin;
        }
        .seo-landing-root .scrollrow button {
          flex: none;
          white-space: nowrap;
        }
        .seo-landing-root .car-view {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
        }
        .seo-landing-root .car-view::-webkit-scrollbar {
          display: none;
        }
        .seo-landing-root .car-track {
          display: flex;
          gap: 16px;
        }
        .seo-landing-root .car-card {
          flex: none;
          width: min(320px, 78vw);
          scroll-snap-align: start;
        }
        @keyframes marq {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .seo-landing-root .marq {
          animation: marq 44s linear infinite;
        }
        .seo-landing-root .marq2 {
          animation: marq 38s linear infinite;
        }
        .seo-landing-root .marqwrap:hover .marq,
        .seo-landing-root .marqwrap:hover .marq2 {
          animation-play-state: paused;
        }
        @keyframes sheen {
          0% {
            transform: translateX(-300%) skewX(-16deg);
          }
          50%,
          100% {
            transform: translateX(900%) skewX(-16deg);
          }
        }
        .seo-landing-root .form-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .seo-landing-root .form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 22%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.16), transparent);
          animation: sheen 6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }
        .seo-landing-root .btn-sheen {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .seo-landing-root .btn-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 28%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: sheen 3.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
        }
        @media (max-width: 980px) {
          .seo-landing-root .hero-grid,
          .seo-landing-root .reality-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 48px !important;
          }
          .seo-landing-root .note-paper-card {
            margin-top: 48px !important;
          }
        }
        .seo-landing-root .reality-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .seo-landing-root .note-paper-card {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          padding: 96px 12% 76px;
        }
        .seo-landing-root .note-paper-img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -52%);
          width: 138%;
          height: auto;
          max-width: none;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        @media (max-width: 640px) {
          .seo-landing-root .note-paper-card {
            padding: 88px 10% 68px;
            margin-top: 52px !important;
          }
          .seo-landing-root .note-paper-img {
            width: auto;
            height: 146%;
            min-width: 138%;
          }
        }
        @media (max-width: 900px) {
          .seo-landing-root .navlinks {
            display: none !important;
          }
        }
        @media (max-width: 720px) {
          .seo-landing-root .mbar {
            display: flex !important;
          }
          .seo-landing-root .navcall {
            display: none !important;
          }
        }
        .seo-heading {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI Variable Display",
            "Segoe UI", system-ui, sans-serif;
        }
      `}</style>

      {/* ── NAVBAR  */}
      <Navbar />

      {/* ── HERO SECTION ──────────── */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#000000", color: "#FFFFFF" }}>
        <div
          className="hero-grid"
          style={{
            position: "relative",
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "clamp(100px, 10vw, 128px) clamp(16px, 3vw, 32px) clamp(56px, 7vw, 96px)",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.6rem, 5.2vw, 4.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontWeight: 700,
                maxWidth: "15ch",
                color: "#FFFFFF",
              }}
            >
              Your <span style={{ color: "#4066c6" }}>Next</span>{" "}
              <br />
              Customer is{" "}
              <span style={{ color: "#f9d230" }}>searching for you!</span>
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                lineHeight: 1.35,
                fontWeight: 600,
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                maxWidth: "34ch",
              }}
            >
              Rank Higher. Beat the Competition.
              <br />
              Grow Organically with Us.
            </p>

            <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.5, color: "rgba(255,255,255,0.72)", maxWidth: "46ch" }}>
              We will make sure they find you
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", paddingTop: "6px" }}>
              <a
                className="press"
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.16)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 5h16v11H9l-5 4z" />
                </svg>
                Chat on WhatsApp
              </a>

              <a
                href="#usps"
                style={{
                  color: "#f9d230",
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                  padding: "12px 4px",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Why One Impact
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Audit Form on Note_paper.png */}
          <HeroForm />
        </div>
      </section>

      {/* ── BRANDS WE WORK WITH MARQUEE ───────────────────────────────────────── */}
      <section
        aria-label="Brands we work with"
        style={{
          padding: "clamp(64px, 7.5vw, 92px) 0 clamp(64px, 7.5vw, 92px)",
          backgroundColor: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        {/* Top black torn-paper border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "clamp(18px, 2.6vw, 42px)",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="/images/first-banner-black-paper-cut.svg"
            alt=""
            draggable={false}
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translate(-50%, -64.2%)",
              width: "152%",
              maxWidth: "none",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>

        {/* Bottom black torn-paper border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "clamp(18px, 2.6vw, 42px)",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="/images/first-banner-black-paper-cut.svg"
            alt=""
            draggable={false}
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translate(-50%, -78.4%)",
              width: "152%",
              maxWidth: "none",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REALITY STATEMENT SECTION ────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 32px)",
          position: "relative",
        }}
      >
        <div
          className="reality-grid"
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
          }}
        >
          {/* Left Column: Illustration */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src="/images/illustration.webp"
              alt="Marketer examining a mobile screen through a magnifying glass"
              draggable={false}
              style={{
                width: "100%",
                maxWidth: "720px",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* Right Column: Copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#FFFFFF",
                maxWidth: "18ch",
              }}
            >
              Having a <span style={{ color: "#4066c6" }}>website</span> or{" "}
              <span style={{ color: "#f9d230" }}>posting</span> on{" "}
              <span style={{ color: "#f9d230" }}>social media</span> won’t cut it anymore.
            </h2>

            <p
              style={{
                margin: "6px 0 4px",
                fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                lineHeight: 1.35,
                fontWeight: 600,
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
              }}
            >
              How will people find it if it is not SEO optimised?
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.72)",
                maxWidth: "56ch",
              }}
            >
              Today’s digital success depends on having a precise SEO strategy that makes your brand visible when and where it matters.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.72)",
                maxWidth: "56ch",
              }}
            >
              At One Impact, our mission is to create meaningful and lasting change for our clients. As a search engine optimization agency, we focus on building custom strategies that grow organic traffic, improve search visibility, and bring in qualified leads using intent-based keyword targeting.
            </p>
          </div>
        </div>
      </section>

      {/* ── ORGANIC WAVE DIVIDER ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "64px",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: 0,
          margin: 0,
        }}
      >
        <svg
          viewBox="23 18 711 30"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          <path
            d="M23 28.2 L26 29 L29 29.2 L32 28.7 L35 30.3 L38 30.5 L41 30.2 L44 30.2 L47 31 L50 30.3 L53 29.8 L56 30.5 L59 29.7 L62 28.5 L65 27.8 L68 27.8 L71 27 L74 29.5 L77 30.3 L80 32.3 L83 32.7 L86 31.8 L89 33 L92 33.8 L95 35 L98 36.3 L101 36.7 L104 37.3 L107 36.5 L110 37.5 L113 38.5 L116 38.5 L119 37.3 L122 36.5 L125 35.8 L128 35.5 L131 34.7 L134 36 L137 37.5 L140 37.5 L143 36.8 L146 37.5 L149 36.5 L152 36.7 L155 38.3 L158 37.8 L161 37.5 L164 36.2 L167 35.5 L170 35.5 L173 35.7 L176 35.3 L179 34 L182 34.8 L185 34.7 L188 34.5 L191 33.7 L194 32.7 L197 32.7 L200 32.7 L203 32.8 L206 33.5 L209 34.2 L212 34.5 L215 35 L218 34.5 L221 34.7 L224 35.7 L227 35.7 L230 35.3 L233 36.3 L236 37.2 L239 37.7 L242 38.5 L245 37.2 L248 36.5 L251 37.3 L254 37 L257 37.5 L260 37.7 L263 36.3 L266 34.8 L269 35.3 L272 35.5 L275 36.5 L278 36.8 L281 38.5 L284 38.5 L287 37.8 L290 36.7 L293 37.3 L296 36.8 L299 36.5 L302 35.3 L305 34.2 L308 33.2 L311 32 L314 32.5 L317 32.5 L320 31.2 L323 30.5 L326 27.3 L329 27.2 L332 27.8 L335 28.2 L338 29.7 L341 30.2 L344 30 L347 30.2 L350 31.2 L353 30.5 L356 29.8 L359 30.5 L362 30.5 L365 28.8 L368 29.2 L371 28.8 L374 28.2 L377 29.2 L380 28.5 L383 29 L386 29 L389 28.7 L392 30.5 L395 30.5 L398 29.8 L401 30.5 L404 31.2 L407 30.2 L410 30 L413 30.3 L416 29.7 L419 28.3 L422 27.8 L425 27.3 L428 27.3 L431 30.3 L434 31 L437 32.5 L440 32.5 L443 32.2 L446 33 L449 34.2 L452 35.3 L455 36.5 L458 36.7 L461 37.3 L464 36.7 L467 37.8 L470 38.5 L473 38.5 L476 36.8 L479 36.5 L482 35.5 L485 35.2 L488 34.8 L491 36.3 L494 37.7 L497 37.5 L500 36.8 L503 37.5 L506 36.5 L509 37 L512 38.5 L515 37.7 L518 37.2 L521 36.2 L524 35.5 L527 35.7 L530 35.5 L533 34.7 L536 34.3 L539 35.2 L542 34.5 L545 34.2 L548 33.3 L551 32.8 L554 32.7 L557 32.7 L560 32.7 L563 33.5 L566 34.3 L569 34.7 L572 35 L575 34.2 L578 34.8 L581 35.7 L584 35.7 L587 35.5 L590 36.3 L593 37.3 L596 37.8 L599 38.2 L602 36.8 L605 36.5 L608 37.7 L611 36.8 L614 37.5 L617 37.5 L620 36 L623 34.7 L626 35.3 L629 35.7 L632 36.5 L635 37.2 L638 38.5 L641 38.5 L644 37.7 L647 36.7 L650 37.3 L653 36.7 L656 36.3 L659 35 L662 34 L665 33 L668 32 L671 32.5 L674 32.5 L677 30.5 L680 29.8 L683 27 L686 27.7 L689 27.8 L692 28.7 L695 29.7 L698 30.5 L701 29.7 L704 30.3 L707 31 L710 30.2 L713 30.2 L716 30.5 L719 30.3 L722 28.7 L725 28.8 L728 29 L731 28.2 L734 29"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ── LIVE ANALYTICS & CLIENT DASHBOARD PREVIEW ─────────────────────── */}
      <LiveDashboardPreview />

      {/* ── CLIENT REVIEWS ───────────────────────────────────────────────── */}
      <section
        id="reviews"
        style={{
          backgroundColor: "#000000",
          padding: "clamp(16px, 2.5vw, 28px) clamp(16px, 3vw, 32px) clamp(64px, 8vw, 96px)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "20px",
            }}
          >
            {QUOTES.map((q, idx) => (
              <figure
                key={idx}
                style={{
                  margin: 0,
                  background: "#000000",
                  border: "1px solid rgba(249, 210, 48, 0.65)",
                  borderRadius: "16px",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ display: "inline-flex", gap: "4px", color: "#4066c6" }} aria-label="Rated 5 out of 5">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />
                      </svg>
                    ))}
                  </span>
                  <blockquote
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.5,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      color: "rgba(255, 255, 255, 0.84)",
                    }}
                  >
                    “{q.text}”
                  </blockquote>
                </div>
                <figcaption style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    src="/LOGO/oneimpact-logo.webp"
                    alt="One Impact"
                    style={{
                      display: "block",
                      height: "20px",
                      width: "auto",
                      maxWidth: "65px",
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                      opacity: 0.85,
                    }}
                  />
                  <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.56)", lineHeight: 1.3, letterSpacing: 0 }}>
                    {q.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3.6: PROOF / E-E-A-T FRAMEWORK ────────────────────────── */}
      <section
        id="proof"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 32px)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          {/* E-E-A-T Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(36px, 4.5vw, 52px)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.1rem, 4vw, 3.3rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              At <span style={{ color: "#4066c6" }}>One Impact,</span>
              <br />
              we follow the <span style={{ color: "#f9d230" }}>E-E-A-T</span> framework
            </h2>
          </div>

          {/* E-E-A-T Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
              gap: "18px",
            }}
          >
            {EEAT_CARDS.map((e, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  color: "#111111",
                  borderRadius: "20px",
                  padding: "24px 22px 28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon + Vertical Divider + Title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {e.icon ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        loading="lazy"
                        src={e.icon}
                        alt={e.t}
                        style={{
                          width: "44px",
                          height: "44px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    ) : (
                      idx === 0 && (
                        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 40h32" />
                          <path d="M12 40v-8h6v8" />
                          <path d="M22 40V26h6v14" />
                          <path d="M32 40V18h6v22" />
                          <circle cx="15" cy="12" r="3" />
                          <path d="M11 22l4-6 4 4 5-5" />
                          <path d="M12 29l26-19" />
                          <path d="M32 10h6v6" />
                        </svg>
                      )
                    )}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      width: "1px",
                      height: "42px",
                      backgroundColor: "#D2D2D7",
                      flexShrink: 0,
                    }}
                  />

                  <h4
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.05rem, 1.35vw, 1.3rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    <span style={{ color: "#4066c6", fontSize: "1.2em" }}>{e.t.charAt(0)}</span>
                    {e.t.slice(1)}
                  </h4>
                </div>

                {/* Horizontal Divider */}
                <div
                  aria-hidden="true"
                  style={{
                    height: "1px",
                    backgroundColor: "#D2D2D7",
                    margin: "16px 0",
                  }}
                />

                <p
                  style={{
                    margin: 0,
                    color: "#3A3A3C",
                    fontSize: "14.5px",
                    lineHeight: 1.55,
                  }}
                >
                  {e.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: WHAT WE DO & HOW WE CUSTOMISE FOR YOU ────────────────── */}
      <ApproachTabs />

      {/* ── SECTION 8: EXPLORE OUR SEO SERVICES ────────────────────────────── */}
      <ServiceTabs />

      {/* Section Separator */}
      {/* ── Breaker Divider ── */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mb-1 bg-[#000000]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          src="/images/Breaker.svg"
          alt=""
          className="w-full h-auto block select-none pointer-events-none"
        />
      </div>

      {/* ── SECTION 10: WHAT WE OFFER (ACCORDIONS) ─────────────────────────── */}
      <OfferSection />

      {/* ── Breaker Divider ── */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mb-1 bg-[#000000]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading="lazy"
          src="/images/Breaker.svg"
          alt=""
          className="w-full h-auto block select-none pointer-events-none"
        />
      </div>

      {/* ── SECTION 4: WHY ONEIMPACT / USPs CAROUSEL ────────────────────────── */}
      <WorkCarousel />



      {/* ── SECTION 6: HOW OPTIMIZING FOR SEO HELPS ────────────────────────── */}
      <section
        id="why"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
            <h2
              className="seo-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              How optimizing for SEO <span style={{ color: "#f9d230" }}>helps</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)" }}>
              Here’s what happens when you optimize for SEO:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "16px",
            }}
          >
            {HELPS_CARDS.map((h, i) => (
              <div
                key={i}
                style={{
                  background: "#08080a",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "20px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(37, 99, 235, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      color: "#60a5fa",
                      overflow: "hidden",
                    }}
                  >
                    {h.icon ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        loading="lazy"
                        src={h.icon}
                        alt={h.t}
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    ) : (
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={h.d} />
                      </svg>
                    )}
                  </span>
                  <h3
                    className="seo-heading"
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      letterSpacing: "-0.025em",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      color: "#FFFFFF",
                    }}
                  >
                    {h.t}
                  </h3>
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255, 255, 255, 0.72)",
                    fontSize: "14.5px",
                    lineHeight: 1.55,
                  }}
                >
                  {h.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>







      {/* ── SECTION 11: LOCAL SEO THAT PUTS YOU ON THE MAP ─────────────────── */}
      <section
        id="local"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(48px, 6vw, 96px) clamp(16px, 3vw, 32px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "clamp(36px, 6vw, 84px)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Copy & CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "620px" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                fontWeight: 700,
                color: "#ffd60a",
              }}
            >
              Local SEO
              <br />
              That Puts You on the Map
            </h2>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              Trying to connect with local customers? Our Local SEO services are built to make sure your business
              appears in the right place at the right time. At One Impact, we fine-tune your digital footprint,
              optimizing your Google Business Profile, local map listings, directories, and citations, so your brand
              shows up exactly where nearby customers are looking.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              We handle everything from geo-specific keyword strategies and managing reviews to ensuring NAP (Name,
              Address, Phone) consistency across the web. Whether you operate from one location or several, our
              tailored approach helps you attract attention locally and earn trust in your neighborhood.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "#FFFFFF", fontWeight: 500, margin: 0 }}>
              No shortcuts, just strategic moves that help local customers discover your business when it matters most.
            </p>

            <div style={{ paddingTop: "8px" }}>
              <a
                href="#audit"
                className="group inline-flex items-center justify-center font-sans font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "#5b8def",
                  padding: "14px 34px",
                  borderRadius: "999px",
                  fontSize: "16.5px",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(91, 141, 239, 0.35)",
                }}
              >
                Let’s make your brand the go-to name in town
              </a>
            </div>
          </div>

          {/* Right Column: Dark Rounded Card with Collage & Process Pills */}
          <div
            style={{
              background: "#08080a",
              border: "1.5px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "32px",
              padding: "clamp(20px, 3.5vw, 36px)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 24px 60px -20px rgba(0, 0, 0, 0.9)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Collage Artwork */}
            <div style={{ position: "relative", width: "100%", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src="/media/mumbai-influencer-collage-9dff9b265237.webp"
                srcSet="/media/mumbai-influencer-collage-9dff9b265237.webp 640w, /media/mumbai-influencer-collage-a91d989521c9.webp 1200w"
                sizes="(max-width: 768px) 95vw, 50vw"
                width={1200}
                height={800}
                alt="Collage of a creator filming beside the Gateway of India, a Mumbai taxi and a local train"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "360px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* 3 Step Pill Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
              {/* Step 1: Active */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 18px",
                  borderRadius: "18px",
                  background: "#2a2a2e",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#ffd60a",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {MAP_ROWS[0].n}
                </span>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ color: "#FFFFFF", fontWeight: 650, fontSize: "15px" }}>
                    {MAP_ROWS[0].name}
                  </span>
                  <span style={{ color: "#A1A1A6", fontSize: "12.5px" }}>
                    {MAP_ROWS[0].meta}
                  </span>
                </div>
              </div>

              {/* Step 2: Next */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 18px",
                  borderRadius: "18px",
                  background: "#1c1c1f",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#403710",
                    color: "#ffd60a",
                    fontWeight: 700,
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {MAP_ROWS[1].n}
                </span>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.72)", fontWeight: 550, fontSize: "15px" }}>
                    {MAP_ROWS[1].name}
                  </span>
                  <span style={{ color: "#6E6E73", fontSize: "12.5px" }}>
                    {MAP_ROWS[1].meta}
                  </span>
                </div>
              </div>

              {/* Step 3: Pending */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 18px",
                  borderRadius: "18px",
                  background: "#141416",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#242426",
                    color: "rgba(255, 255, 255, 0.35)",
                    fontWeight: 700,
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {MAP_ROWS[2].n}
                </span>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.45)", fontWeight: 550, fontSize: "15px" }}>
                    {MAP_ROWS[2].name}
                  </span>
                  <span style={{ color: "#48484A", fontSize: "12.5px" }}>
                    {MAP_ROWS[2].meta}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Stories that build brand search"
        subtitle="Click any reel to watch our creative work without leaving the website."
      />

      {/* ── SECTION 12: QUESTIONS, ANSWERED (FAQS) ─────────────────────────── */}
      <FaqSection />

      {/* ── SECTION 13: BOTTOM AUDIT CONVERSION SECTION ─────────────────────── */}
      <InquirySection />

      {/*  FOOTER  */}
      <Footer />

      {/* ── MOBILE STICKY BAR ───────────────────────────────────────────────── */}
      <div
        className="mbar glass"
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 60,
          padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        <a
          className="press"
          href="https://wa.me/918369018104"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
          style={{
            flex: "none",
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.07)",
            color: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 5h16v11H9l-5 4z" />
          </svg>
        </a>
        <a
          className="press btn-sheen"
          href="#audit"
          style={{
            flex: 1,
            background: "#f9d230",
            color: "#000000",
            textDecoration: "none",
            fontWeight: 650,
            fontSize: "16.5px",
            borderRadius: "999px",
            minHeight: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Get my SEO audit
        </a>
      </div>
    </div>
  );
}
