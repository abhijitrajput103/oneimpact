import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
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

const PILLARS = [
  {
    letter: "A",
    title: "Authenticity that converts",
    text: "We collaborate with influencers who genuinely resonate with your brand’s voice and values. Their followers trust their recommendations because they come across as personal, not promotional. It’s about using influence to build credibility, not just visibility.",
  },
  {
    letter: "R",
    title: "Research-led collaborations",
    text: "Every partnership is guided by research and data analysis. We evaluate audience demographics, past campaign performance, content quality and niche relevance before any collaboration, so your brand works with creators who have influence in the right circles.",
  },
  {
    letter: "P",
    title: "Platform-specific strategies",
    text: "One size doesn’t fit all. We build influencer strategies around what works on each channel, like Instagram Reels, YouTube Shorts, LinkedIn thought leadership or Pinterest boards, to suit each platform’s format, tone and user behavior.",
  },
  {
    letter: "T",
    title: "Transparent metrics",
    text: "We believe in showing, not just telling. You receive detailed campaign reports on reach, engagement, conversions and ROI. No fluff, just actionable data that helps refine your influencer strategy.",
  },
];

const QUOTES = [
  {
    text: "They found creators who actually fit our brand, and the content felt like it came from real fans, not ads.",
    role: "Marketing Head, skincare brand",
  },
  {
    text: "Briefs, approvals and reports were all handled for us. We always knew what was live and how it was doing.",
    role: "Founder, D2C food brand",
  },
  {
    text: "Clear reporting on every creator made it easy to decide who to work with again.",
    role: "Brand Manager, consumer electronics company",
  },
];

function renderHelpIcon(index: number) {
  switch (index) {
    case 0:
      // Build trust: Handshake
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L13 12" />
          <path d="m13 12 1.4-1.4a1 1 0 0 0 0-1.4L11.8 6.6a1 1 0 0 0-1.4 0L6.1 11a1 1 0 0 0 0 1.4l4.3 4.3a1 1 0 0 0 1.4 0L13 15.5" />
          <path d="m18 11 3-3" />
          <path d="m3 14 3-3" />
        </svg>
      );
    case 1:
      // Expand reach: Plant seedling / sprout
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 20h10" />
          <path d="M12 20v-8" />
          <path d="M12 12a5 5 0 0 1 5-5h1v1a5 5 0 0 1-5 5h-1z" />
          <path d="M12 14a5 5 0 0 0-5-5H6v1a5 5 0 0 0 5 5h1z" />
        </svg>
      );
    case 2:
      // Boost conversions: Arrow up-right
      return (/*  */
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      );
    case 3:
      // Sustainable growth: Target with dart/arrow
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="m19 5-4.5 4.5" />
        </svg>
      );
    case 4:
      // Cost-effective marketing: Rupee symbol
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3h12" />
          <path d="M6 8h12" />
          <path d="M6 13l8.5 8" />
          <path d="M6 13h3a4 4 0 0 0 0-8" />
        </svg>
      );
    case 5:
      // Measurable results: Bar chart
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 20V4" />
          <path d="M12 20V10" />
          <path d="M6 20v-5" />
        </svg>
      );
    default:
      return null;
  }
}

const HELPS_CARDS = [
  {
    t: "Build trust",
    a: "When influencers recommend a product or service, their audience sees it as a trusted suggestion, not a sales pitch. That trust transfers to your brand.",
    d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    chip: "#f9d230",
  },
  {
    t: "Expand reach",
    a: "Partnering with influencers gives your brand direct access to their established audience, across demographics, interests and platforms that fit your brand, without starting from scratch.",
    d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6",
    chip: "#4066c6",
  },
  {
    t: "Boost conversions",
    a: "When followers see someone they admire using your product, they are more likely to try it themselves. This organic promotion often lifts engagement and purchase intent.",
    d: "M3 17l6-6 4 4 8-8M15 7h6v6",
    chip: "#f9d230",
  },
  {
    t: "Sustainable growth",
    a: "Consistent collaborations build a loyal community and keep your business top-of-mind, contributing to long-term customer growth and retention.",
    d: "M3 17l6-6 4 4 8-8",
    chip: "#4066c6",
  },
  {
    t: "Cost-effective marketing",
    a: "From micro to macro influencers, you can choose partnerships that fit your budget. The right mix of creators drives impact without overspending, even for smaller businesses.",
    d: "M6 4h12M6 9h12M9 4c3.3 0 5.5 1.9 5.5 5S12.3 14 9 14H7l8 7",
    chip: "#f9d230",
  },
  {
    t: "Measurable results",
    a: "Track engagement rate, reach, clicks and conversions to understand what works, optimise future strategies and make decisions based on real results.",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#4066c6",
  },
];

export default function InfluencerMarketingPage() {
  return (
    <div
      className="inf-landing-root"
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
        body:has(.inf-landing-root),
        body:has(.inf-landing-root) *,
        .inf-landing-root,
        .inf-landing-root * {
          cursor: auto !important;
          box-sizing: border-box;
        }
        body:has(.inf-landing-root) a,
        body:has(.inf-landing-root) button,
        body:has(.inf-landing-root) select,
        body:has(.inf-landing-root) summary,
        body:has(.inf-landing-root) [role="button"],
        body:has(.inf-landing-root) [role="tab"],
        .inf-landing-root a,
        .inf-landing-root button,
        .inf-landing-root select,
        .inf-landing-root summary,
        .inf-landing-root [role="button"],
        .inf-landing-root [role="tab"] {
          cursor: pointer !important;
        }
        body:has(.inf-landing-root) input,
        body:has(.inf-landing-root) textarea,
        .inf-landing-root input,
        .inf-landing-root textarea {
          cursor: text !important;
        }
        .inf-landing-root a:not(header a):not(.bg-black) {
          color: #000000;
          transition: color 150ms ease;
        }
        .inf-landing-root a:not(header a):not(.bg-black):hover {
          color: #3a3a3c;
        }
        .inf-landing-root .press {
          transition: transform 100ms ease-out, background-color 150ms ease, box-shadow 150ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .inf-landing-root .press:active {
          transform: scale(0.97);
        }
        .inf-landing-root .press:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .inf-landing-root .press:disabled:active {
          transform: none;
        }
        .inf-landing-root .y:hover {
          background-color: #fae066 !important;
        }
        .inf-landing-root :focus-visible {
          outline: 3px solid #4066c6;
          outline-offset: 3px;
        }
        .inf-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .inf-landing-root .fd:focus {
          outline: none;
          border-color: #f9d230 !important;
          box-shadow: 0 0 0 4px rgba(249, 210, 48, 0.3);
        }
        .inf-landing-root .prewrap {
          white-space: pre-line;
        }
        .inf-landing-root details summary {
          list-style: none;
          cursor: pointer;
        }
        .inf-landing-root details summary::-webkit-details-marker {
          display: none;
        }
        .inf-landing-root .chev {
          transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .inf-landing-root details[open] .chev {
          transform: rotate(45deg);
        }
        .inf-landing-root .navlinks {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .inf-landing-root .mbar {
          display: none;
          gap: 10px;
        }
        .inf-landing-root .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .inf-landing-root .note-paper-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          padding: 96px 12% 76px;
        }
        .inf-landing-root .note-paper-img {
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
          .inf-landing-root .note-paper-card {
            padding: 88px 10% 68px;
            margin-top: 52px !important;
          }
          .inf-landing-root .note-paper-img {
            width: auto;
            height: 146%;
            min-width: 138%;
          }
        }
        .inf-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: thin;
        }
        .inf-landing-root .scrollrow button {
          flex: none;
          white-space: nowrap;
        }
        .inf-landing-root .car-view {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
        }
        .inf-landing-root .car-view::-webkit-scrollbar {
          display: none;
        }
        .inf-landing-root .car-track {
          display: flex;
          gap: 16px;
        }
        .inf-landing-root .car-card {
          flex: none;
          width: min(320px, 78vw);
          scroll-snap-align: start;
        }
        @keyframes inf-marq {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .inf-landing-root .marq {
          animation: inf-marq 44s linear infinite;
        }
        .inf-landing-root .marq2 {
          animation: inf-marq 38s linear infinite;
        }
        .inf-landing-root .marqwrap:hover .marq,
        .inf-landing-root .marqwrap:hover .marq2 {
          animation-play-state: paused;
        }
        @keyframes inf-sheen {
          0% {
            transform: translateX(-300%) skewX(-16deg);
          }
          50%,
          100% {
            transform: translateX(900%) skewX(-16deg);
          }
        }
        .inf-landing-root .form-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .inf-landing-root .form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 22%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.16), transparent);
          animation: inf-sheen 6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }
        .inf-landing-root .btn-sheen {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .inf-landing-root .btn-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 28%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: inf-sheen 3.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
        }
        @media (max-width: 980px) {
          .inf-landing-root .hero-grid,
          .inf-landing-root .inf-intro-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 48px !important;
          }
          .inf-landing-root .note-paper-card {
            margin-top: 48px !important;
          }
        }
        .inf-landing-root .inf-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }
        @media (max-width: 900px) {
          .inf-landing-root .navlinks {
            display: none !important;
          }
        }
        @media (max-width: 720px) {
          .inf-landing-root .mbar {
            display: flex !important;
          }
          .inf-landing-root .navcall {
            display: none !important;
          }
        }
        .inf-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: 14px;
        }
        .inf-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 14px;
        }
        @media (max-width: 768px) {
          .inf-landing-root .inf-services-grid,
          .inf-landing-root .inf-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          .inf-landing-root .inf-service-card,
          .inf-landing-root .inf-why-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .inf-landing-root .inf-service-card h3,
          .inf-landing-root .inf-why-card h3 {
            font-size: 15.5px !important;
            line-height: 1.25 !important;
          }
          .inf-landing-root .inf-service-card p,
          .inf-landing-root .inf-why-card p {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
          .inf-landing-root .inf-why-card .why-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .inf-landing-root .inf-why-card .why-icon svg {
            width: 13px !important;
            height: 13px !important;
          }
        }
        @media (max-width: 440px) {
          .inf-landing-root .inf-services-grid,
          .inf-landing-root .inf-why-grid {
            gap: 8px !important;
          }
          .inf-landing-root .inf-service-card,
          .inf-landing-root .inf-why-card {
            padding: 14px 11px !important;
            border-radius: 16px !important;
          }
          .inf-landing-root .inf-service-card h3,
          .inf-landing-root .inf-why-card h3 {
            font-size: 14px !important;
            line-height: 1.2 !important;
          }
          .inf-landing-root .inf-service-card p,
          .inf-landing-root .inf-why-card p {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
        }
        .inf-heading {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI Variable Display",
            "Segoe UI", system-ui, sans-serif;
        }
      `}</style>

      {/* ── NAVBAR */}
      <Navbar />

      {/* ── HERO SECTION */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#000000", color: "#FFFFFF" }}>
        <div
          className="hero-grid"
          style={{
            position: "relative",
            maxWidth: "1360px",
            margin: "0 auto",
            padding:
              "clamp(100px, 10vw, 128px) clamp(16px, 3vw, 32px) clamp(56px, 7vw, 88px)",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.72)",
                  letterSpacing: "-0.01em",
                }}
              >
                Influencer marketing services by OneImpact
              </span>
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "min(280px, 70%)",
                  height: "1.5px",
                  background: "linear-gradient(90deg, #6B8CE5 0%, rgba(107, 140, 229, 0) 100%)",
                }}
              />
            </div>

            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.5rem, 4.8vw, 4.3rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                maxWidth: "16ch",
                color: "#FFFFFF",
              }}
            >
              Influencer Marketing Agency in Mumbai for{" "}
              <span style={{ color: "#f9d230" }}>Impactful Collaborations</span>
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                lineHeight: 1.35,
                fontWeight: 700,
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
              }}
            >
              Creators that connect. Campaigns that convert.
            </p>

            <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.55, color: "rgba(255,255,255,0.74)", maxWidth: "52ch" }}>
              From creator discovery to campaign execution, we handle every step thoughtfully, connecting brands and influencers in a seamless, strategic and genuinely effective way.
            </p>

            <p style={{ margin: 0, fontSize: "16.5px", lineHeight: 1.55, color: "rgba(255,255,255,0.74)", maxWidth: "52ch" }}>
              We help brands connect with relevant influencers to create purposeful collaborations, so every campaign aligns with your goals and audience, and delivers measurable value.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                paddingTop: "8px",
              }}
            >
              <a
                className="press"
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "16px",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#6B8CE5",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1.9"
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
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontSize: "16px",
                  textDecoration: "none",
                  padding: "12px 4px",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Why OneImpact
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

          {/* Right Column: Hero Form Card on Note_paper.png (Diary) */}
          <HeroForm />
        </div>
      </section>

      {/* ── BRANDS WE WORK WITH MARQUEE */}
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
            margin: "0 0 clamp(20px, 2.5vw, 28px)",
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
          <div className="marq" style={{ display: "flex", gap: "clamp(56px, 6vw, 96px)", width: "max-content", alignItems: "center" }}>
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

      {/* ── REALITY STATEMENT SECTION */}
      <section
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(64px, 8vw, 108px) clamp(16px, 3vw, 32px) clamp(48px, 6vw, 72px)",
          position: "relative",
        }}
      >
        <div
          className="inf-intro-grid"
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
          }}
        >
          {/* Left Column: Copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", textAlign: "left" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#f9d230",
                maxWidth: "18ch",
              }}
            >
              Follower counts alone won’t move your audience anymore.
            </h2>

            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: "min(280px, 70%)",
                height: "1.5px",
                background: "linear-gradient(90deg, #6B8CE5 0%, rgba(107, 140, 229, 0) 100%)",
              }}
            />

            <p
              style={{
                margin: "4px 0 2px",
                fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                lineHeight: 1.4,
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              People act on recommendations from creators they already trust.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "rgba(255, 255, 255, 0.74)",
                maxWidth: "54ch",
              }}
            >
              At OneImpact, we help brands unlock that trust through influencer marketing that feels real, relevant and results-driven.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16.5px",
                lineHeight: 1.55,
                color: "rgba(255, 255, 255, 0.74)",
                maxWidth: "54ch",
              }}
            >
              We go beyond follower counts and vanity metrics, and focus on creators whose content, tone and audience truly align with your brand values.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src="/media/influencer-marketing-sticker-collage-dd17265d8a24.webp"
              srcSet="/media/influencer-marketing-sticker-collage-dd17265d8a24.webp 640w, /media/influencer-marketing-sticker-collage-10240cc61544.webp 1200w"
              sizes="(max-width: 768px) 95vw, 50vw"
              width={1200}
              height={800}
              alt="Creator filming with a ring light beside social posts and engagement icons"
              draggable={false}
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── ORGANIC WAVE BORDER ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "48px",
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
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ── PROOF SECTION: PRINCIPLES (A-R-P-T) */}
      <section
        id="proof"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 32px) clamp(16px, 2.5vw, 32px)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "left", marginBottom: "clamp(36px, 4.5vw, 52px)" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.4rem, 4.6vw, 3.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#f9d230",
                maxWidth: "20ch",
              }}
            >
              At OneImpact, every collaboration follows four principles
            </h2>
            <p
              style={{
                margin: "14px 0 0",
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.72)",
                letterSpacing: "-0.01em",
              }}
            >
              Authenticity, Research, Platform fit, Transparency
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "20px",
            }}
          >
            {PILLARS.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: "#000000",
                  border: "1px solid #4066c6",
                  borderRadius: "22px",
                  padding: "26px 22px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {/* Header row: Title + blue accent bar on left, white box on right */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "22px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                        fontWeight: 700,
                        color: "#f9d230",
                        maxWidth: "14ch",
                      }}
                    >
                      {p.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "20px",
                        height: "2.5px",
                        borderRadius: "999px",
                        backgroundColor: "#4066c6",
                      }}
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000000",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI Variable Display", "Segoe UI", system-ui, sans-serif',
                      fontSize: "28px",
                      fontWeight: 800,
                      lineHeight: 1,
                      flexShrink: 0,
                      userSelect: "none",
                    }}
                  >
                    {p.letter}
                  </div>
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "rgba(255, 255, 255, 0.78)",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT REVIEWS */}
      <section
        id="reviews"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(8px, 1.5vw, 20px) clamp(16px, 3vw, 32px) clamp(48px, 6vw, 72px)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {/* Team collaboration illustration */}
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto clamp(24px, 3vw, 36px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src="/media/four-principles-of-influencer-marketing-528ff6d8c2af.webp"
              srcSet="/media/four-principles-of-influencer-marketing-528ff6d8c2af.webp 640w, /media/four-principles-of-influencer-marketing-d712d451d74f.webp 1200w"
              sizes="(max-width: 768px) 95vw, 50vw"
              width={1200}
              height={600}
              alt="Campaign planners reviewing audience and social engagement charts"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: "24px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Review cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "18px",
              maxWidth: "1080px",
              margin: "0 auto",
            }}
          >
            {QUOTES.map((q, idx) => (
              <figure
                key={idx}
                style={{
                  margin: 0,
                  background: "#000000",
                  border: "1.5px solid rgba(255, 255, 255, 0.38)",
                  borderRadius: "14px",
                  padding: "22px 20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "18px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "inline-flex", gap: "3px", color: "#f9d230" }} aria-label="Rated 5 out of 5">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />
                      </svg>
                    ))}
                  </span>
                  <blockquote
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: 1.55,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                </div>
                <figcaption style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "auto" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    src="/LOGO/oneimpact-logo.webp"
                    alt="One Impact"
                    style={{
                      display: "block",
                      height: "18px",
                      width: "auto",
                      maxWidth: "58px",
                      objectFit: "contain",
                      filter: "invert(50%) sepia(85%) saturate(800%) hue-rotate(190deg) brightness(105%) contrast(95%)",
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.68)", lineHeight: 1.35, letterSpacing: 0 }}>
                    {q.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>



      {/* ── BENEFITS: HOW INFLUENCER MARKETING HELPS */}
      <section
        id="why"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px) clamp(12px, 2vw, 24px)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "clamp(32px, 4vw, 44px)" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#f9d230",
              }}
            >
              How influencer marketing helps
            </h2>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: 1.5,
                maxWidth: "85ch",
              }}
            >
              Influencer marketing has become a powerful way for brands to connect with their audience authentically. Here’s how it can benefit your business:
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "18px",
            }}
          >
            {HELPS_CARDS.map((b, i) => (
              <div
                key={i}
                style={{
                  background: "#000000",
                  border: "1.5px solid rgba(255, 255, 255, 0.28)",
                  borderRadius: "20px",
                  padding: "24px 22px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "18px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "17.5px",
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em",
                        fontWeight: 700,
                        color: "#f9d230",
                      }}
                    >
                      {b.t}
                    </h3>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "22px",
                        height: "2.5px",
                        borderRadius: "999px",
                        backgroundColor: "#4066c6",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      backgroundColor: "#2F6FE4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    {renderHelpIcon(i)}
                  </div>
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255, 255, 255, 0.78)",
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {b.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── BUT WHY ONEIMPACT? / WHY ONEIMPACT? TABS */}
      <ApproachTabs />



      {/* ── EXPLORE OUR INFLUENCER MARKETING SERVICES */}
      <ServiceTabs />

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

      {/* ── WHAT WE OFFER (ACCORDIONS) */}
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

      {/* ── USP CAROUSEL */}
      <WorkCarousel />

      {/* ── SPOTLIGHT: INFLUENCER MARKETING MADE FOR MUMBAI */}
      <section
        id="mumbai"
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
              Influencer Marketing
              <br />
              Made for Mumbai
            </h2>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              In a city like Mumbai, where culture, commerce and creativity collide, influencers shape conversations and drive consumer choices. Mumbai’s creator landscape is incredibly diverse, and we tailor campaigns that reflect this diversity, whether you’re targeting a niche Gen Z audience or a broader urban demographic.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              Our team manages the entire process, from influencer discovery and outreach to content planning, approvals and performance reporting. We share detailed metrics on reach, engagement, audience quality and ROI, and we build long-term brand-influencer partnerships that grow with your business.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "#FFFFFF", fontWeight: 500, margin: 0 }}>
              Looking to make an impact in Mumbai’s competitive digital space? Turn local influence into lasting brand value.
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
                Partner with OneImpact
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
                  1
                </span>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ color: "#FFFFFF", fontWeight: 650, fontSize: "15px" }}>
                    Your Brand Collab
                  </span>
                  <span style={{ color: "#A1A1A6", fontSize: "12.5px" }}>
                    Reel with a local creator. Posted 2h ago.
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
                  2
                </span>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.72)", fontWeight: 550, fontSize: "15px" }}>
                    Creator Shortlist
                  </span>
                  <span style={{ color: "#6E6E73", fontSize: "12.5px" }}>
                    Fashion and lifestyle, Mumbai
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
                  3
                </span>
                <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.45)", fontWeight: 550, fontSize: "15px" }}>
                    Content Approval
                  </span>
                  <span style={{ color: "#48484A", fontSize: "12.5px" }}>
                    Draft ready for review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Creator reels in action"
        subtitle="Explore creator-led stories and brand films right inside the page."
      />

      {/* ── FAQs */}
      <FaqSection />

      {/* ── FINAL CTA + SECOND FORM */}
      <InquirySection />

      {/* ── FOOTER */}
      <Footer />

      {/* ── MOBILE STICKY BAR */}
      <div
        className="mbar"
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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          Book my free consultation
        </a>
      </div>
    </div>
  );
}
