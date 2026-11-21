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
    letter: "1",
    title: "Brand Audit",
    text: "Understanding your business, goals, and values is our first step. We assess your current brand through research and analysis to find gaps, strengths, and opportunities.",
  },
  {
    letter: "2",
    title: "Custom Strategy Development",
    text: "We study your market, your competitors, and your audience, then shape a strategy that reflects who you are. Every decision is backed by insight, not guesswork.",
  },
  {
    letter: "3",
    title: "Execution and Optimization",
    text: "We bring the strategy to life across your messaging and visuals, then keep refining it based on market feedback, performance data, and changing customer preferences.",
  },
  {
    letter: "4",
    title: "Transparent Reporting",
    text: "You’re involved in key steps, with room for input and feedback. We keep you informed at every stage, so the result is a strategy you can stand behind with confidence.",
  },
];

const QUOTES = [
  {
    text: "They asked the right questions first, and our new identity finally feels like us. Our whole team knows how to use it.",
    role: "Founder, organic food brand",
  },
  {
    text: "The brand guidelines made everything easier. Our website, packaging and social posts now look and sound like one brand.",
    role: "Marketing Manager, D2C skincare brand",
  },
  {
    text: "Clear process, honest feedback and a team that listens. Naming our new product line felt simple instead of stressful.",
    role: "Co-founder, café chain",
  },
];

const HELPS_CARDS = [
  {
    t: "Clear positioning",
    a: "A strong brand strategy defines your place in the market. It helps customers understand what makes you different.",
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    chip: "#f9d230",
  },
  {
    t: "Stronger first impressions",
    a: "Consistent visuals and messaging build trust from the first interaction. People are more likely to engage with brands they recognize.",
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    chip: "#4066c6",
  },
  {
    t: "Customer loyalty",
    a: "When your brand reflects your values, people connect emotionally. That connection keeps them coming back.",
    d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
    chip: "#f9d230",
  },
  {
    t: "Better marketing results",
    a: "With clear messaging, your campaigns become more focused. This makes every marketing effort go further.",
    d: "M3 10v4h4l6 4V6L7 10H3zM17 8a5 5 0 0 1 0 8",
    chip: "#4066c6",
  },
  {
    t: "Higher perceived value",
    a: "A well-presented brand feels premium. Customers are often willing to pay more for a brand they trust.",
    d: "M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.5 13.5L7 21l5-3 5 3-1.5-7.5",
    chip: "#f9d230",
  },
  {
    t: "Improved internal alignment",
    a: "A defined brand gives your team direction. Everyone on your team knows how to represent your business.",
    d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6",
    chip: "#4066c6",
  },
];

export default function BrandingServicesPage() {
  return (
    <div
      className="branding-landing-root"
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
        body:has(.branding-landing-root),
        body:has(.branding-landing-root) *,
        .branding-landing-root,
        .branding-landing-root * {
          cursor: auto !important;
          box-sizing: border-box;
        }
        body:has(.branding-landing-root) a,
        body:has(.branding-landing-root) button,
        body:has(.branding-landing-root) select,
        body:has(.branding-landing-root) summary,
        body:has(.branding-landing-root) [role="button"],
        body:has(.branding-landing-root) [role="tab"],
        .branding-landing-root a,
        .branding-landing-root button,
        .branding-landing-root select,
        .branding-landing-root summary,
        .branding-landing-root [role="button"],
        .branding-landing-root [role="tab"] {
          cursor: pointer !important;
        }
        body:has(.branding-landing-root) input,
        body:has(.branding-landing-root) textarea,
        .branding-landing-root input,
        .branding-landing-root textarea {
          cursor: text !important;
        }
        .branding-landing-root a:not(header a):not(.bg-black) {
          color: #000000;
          transition: color 150ms ease;
        }
        .branding-landing-root a:not(header a):not(.bg-black):hover {
          color: #3a3a3c;
        }
        .branding-landing-root .press {
          transition: transform 100ms ease-out, background-color 150ms ease, box-shadow 150ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .branding-landing-root .press:active {
          transform: scale(0.97);
        }
        .branding-landing-root .press:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .branding-landing-root .press:disabled:active {
          transform: none;
        }
        .branding-landing-root .y:hover {
          background-color: #fae066 !important;
        }
        .branding-landing-root :focus-visible {
          outline: 3px solid #4066c6;
          outline-offset: 3px;
        }
        .branding-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .branding-landing-root .fd:focus {
          outline: none;
          border-color: #f9d230 !important;
          box-shadow: 0 0 0 4px rgba(249, 210, 48, 0.3);
        }
        .branding-landing-root .prewrap {
          white-space: pre-line;
        }
        .branding-landing-root details summary {
          list-style: none;
          cursor: pointer;
        }
        .branding-landing-root details summary::-webkit-details-marker {
          display: none;
        }
        .branding-landing-root .chev {
          transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .branding-landing-root details[open] .chev {
          transform: rotate(45deg);
        }
        .branding-landing-root .navlinks {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .branding-landing-root .mbar {
          display: none;
          gap: 10px;
        }
        .branding-landing-root .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .branding-landing-root .note-paper-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          padding: 96px 12% 76px;
        }
        .branding-landing-root .note-paper-img {
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
          .branding-landing-root .note-paper-card {
            padding: 88px 10% 68px;
          }
          .branding-landing-root .note-paper-img {
            width: auto;
            height: 146%;
            min-width: 138%;
          }
        }
        .branding-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .branding-landing-root .scrollrow::-webkit-scrollbar {
          display: none;
        }
        .branding-landing-root .scrollrow button {
          flex: none;
          white-space: nowrap;
        }
        .branding-landing-root .car-view {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
        }
        .branding-landing-root .car-view::-webkit-scrollbar {
          display: none;
        }
        .branding-landing-root .car-track {
          display: flex;
          gap: 16px;
        }
        .branding-landing-root .car-card {
          flex: none;
          width: min(320px, 78vw);
          scroll-snap-align: start;
        }
        @keyframes branding-marq {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .branding-landing-root .marq {
          animation: branding-marq 44s linear infinite;
        }
        .branding-landing-root .marq2 {
          animation: branding-marq 38s linear infinite;
        }
        .branding-landing-root .marqwrap:hover .marq,
        .branding-landing-root .marqwrap:hover .marq2 {
          animation-play-state: paused;
        }
        @keyframes branding-sheen {
          0% {
            transform: translateX(-300%) skewX(-16deg);
          }
          50%,
          100% {
            transform: translateX(900%) skewX(-16deg);
          }
        }
        .branding-landing-root .form-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .branding-landing-root .form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 22%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.16), transparent);
          animation: branding-sheen 6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }
        .branding-landing-root .btn-sheen {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .branding-landing-root .btn-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 28%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: branding-sheen 3.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
        }
        @media (max-width: 980px) {
          .branding-landing-root .hero-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .branding-landing-root .navlinks {
            display: none !important;
          }
        }
        @media (max-width: 720px) {
          .branding-landing-root .mbar {
            display: flex !important;
          }
          .branding-landing-root .navcall {
            display: none !important;
          }
        }
        .branding-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: 14px;
        }
        .branding-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 14px;
        }
        @media (max-width: 768px) {
          .branding-landing-root .branding-services-grid,
          .branding-landing-root .branding-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          .branding-landing-root .branding-service-card,
          .branding-landing-root .branding-why-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .branding-landing-root .branding-service-card h3,
          .branding-landing-root .branding-why-card h3 {
            font-size: 15.5px !important;
            line-height: 1.25 !important;
          }
          .branding-landing-root .branding-service-card p,
          .branding-landing-root .branding-why-card p {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
          .branding-landing-root .branding-why-card .why-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .branding-landing-root .branding-why-card .why-icon svg {
            width: 13px !important;
            height: 13px !important;
          }
        }
        @media (max-width: 440px) {
          .branding-landing-root .branding-services-grid,
          .branding-landing-root .branding-why-grid {
            gap: 8px !important;
          }
          .branding-landing-root .branding-service-card,
          .branding-landing-root .branding-why-card {
            padding: 14px 11px !important;
            border-radius: 16px !important;
          }
          .branding-landing-root .branding-service-card h3,
          .branding-landing-root .branding-why-card h3 {
            font-size: 14px !important;
            line-height: 1.2 !important;
          }
          .branding-landing-root .branding-service-card p,
          .branding-landing-root .branding-why-card p {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
        }
        .branding-heading {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI Variable Display",
            "Segoe UI", system-ui, sans-serif;
        }
      `}</style>

      {/* ── NAVBAR */}
      <Navbar />

      {/* ── HERO SECTION */}
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#000000",
          color: "#FFFFFF",
          paddingTop: "clamp(40px, 6vw, 64px)",
        }}
      >
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1200px, 100%)",
            height: "480px",
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37, 99, 235, 0.18) 0%, rgba(249, 210, 48, 0.1) 45%, transparent 75%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          className="hero-grid"
          style={{
            position: "relative",
            maxWidth: "1360px",
            margin: "0 auto",
            padding:
              "clamp(72px, 8vw, 96px) clamp(16px, 3vw, 32px) clamp(44px, 5.5vw, 68px)",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.65)",
                  letterSpacing: "-0.01em",
                }}
              >
                Branding services by OneImpact
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
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 700,
                maxWidth: "16ch",
                color: "#FFFFFF",
              }}
            >
              Ready to stand out? Start today with{" "}
              <span style={{ color: "#f9d230" }}>OneImpact.</span>
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(1.2rem, 1.9vw, 1.55rem)",
                lineHeight: 1.3,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Strategic branding that tells your story, builds loyalty, and promotes long-term growth.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "rgba(255, 255, 255, 0.72)", maxWidth: "50ch" }}>
              Branding goes beyond just a logo or a name. It’s about shaping how people see and remember your business. At OneImpact, our branding services focus on building a strong foundation that defines who you are, what you stand for, and how you communicate.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "rgba(255, 255, 255, 0.72)", maxWidth: "50ch" }}>
              Choosing us for your branding service means building a brand with clarity, purpose, and consistency. We combine research, strategy, and design, and whether you’re starting from scratch or refreshing your brand, we guide you through every step.
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

          {/* Hero Form Card on Note_paper.png (Diary) */}
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

      {/* ── PROOF SECTION: 4-STEP BRANDING PROCESS & INTRO */}
      <section
        id="proof"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(48px, 6vw, 72px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
        }}
      >
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <h2
            className="branding-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              color: "#f9d230",
            }}
          >
            A strong branding strategy lays the foundation for how your audience sees, remembers, and connects with your business.
          </h2>
          <p style={{ fontSize: "20px", lineHeight: 1.5, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
            It shapes everything from trust and loyalty to how well your social media marketing performs.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.65)", margin: 0 }}>
            At OneImpact, we focus on building brands that are not just visually appealing but also strategically aligned with market trends and consumer behavior. Our approach is rooted in research, creativity, and consistency, ensuring your brand stands out across platforms. With ongoing support and data-driven insights, we help you adapt and grow with confidence.
          </p>
        </div>

        {/* Pillars Head & Grid */}
        <div style={{ marginTop: "clamp(48px, 6vw, 72px)", display: "flex", flexDirection: "column", gap: "8px", textAlign: "center" }}>
          <h3
            className="branding-heading"
            style={{
              margin: 0,
              fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
              letterSpacing: "-0.035em",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            At OneImpact, we follow a four-step branding process
          </h3>
          <p style={{ margin: "0 0 28px", color: "rgba(255, 255, 255, 0.65)", fontSize: "17px" }}>
            Brand Audit, Custom Strategy Development, Execution and Optimization, Transparent Reporting
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "16px",
            maxWidth: "1040px",
            margin: "0 auto",
          }}
        >
          {PILLARS.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: "#08080a",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "24px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "76px",
                  lineHeight: 0.9,
                  fontWeight: 700,
                  letterSpacing: "-0.06em",
                  color: "rgba(255, 255, 255, 0.78)",
                }}
                aria-hidden="true"
              >
                {p.letter}
              </span>
              <span
                style={{
                  width: "32px",
                  height: "4px",
                  borderRadius: "999px",
                  background: "#f9d230",
                }}
                aria-hidden="true"
              />
              <h4
                className="branding-heading"
                style={{
                  margin: "6px 0 0",
                  fontSize: "20px",
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {p.title}
              </h4>
              <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "15px", lineHeight: 1.55 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENT REVIEWS */}
      <section
        id="reviews"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(12px, 2vw, 24px) clamp(16px, 3vw, 32px) clamp(44px, 5.5vw, 68px)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
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
                    alt="OneImpact logo"
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

      {/* ── BENEFITS: HOW BRAND STRATEGY DRIVES MORE REVENUE */}
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
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              How brand strategy drives more <span style={{ color: "#f9d230" }}>revenue</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)" }}>
              Why does your business need branding? Here’s what a clear brand strategy does for you:
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "16px",
            }}
          >
            {HELPS_CARDS.map((b, i) => (
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
                    }}
                  >
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={b.d} />
                    </svg>
                  </span>
                  <h3 className="branding-heading" style={{ margin: 0, fontSize: "19px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#FFFFFF" }}>
                    {b.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{b.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUT WHY ONEIMPACT? / WHY ONEIMPACT? TABS */}
      <ApproachTabs />

      {/* ── EXPLORE OUR BRANDING SERVICES */}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#ffd60a",
              }}
            >
              Branding for
              <br />
              Mumbai businesses
            </h2>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              Mumbai, the financial hub of the country, offers businesses plenty of opportunities to grow with a blend of innovation and traditional values. With people coming from every part of the country, your business needs to stand out from the clutter and earn its place in your customers’ minds.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              At OneImpact, we help you stay on top by creating a unique brand identity that resonates with your target audience. With experience across industries and a deep understanding of brand growth, we make sure your brand looks good and works effectively in the real world.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "#FFFFFF", fontWeight: 500, margin: 0 }}>
              Our approach is simple, practical, and focused on long-term impact.
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
                Let’s build a brand Mumbai remembers
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
                alt="Mumbai Branding Collage"
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
                    Your Brand
                  </span>
                  <span style={{ color: "#A1A1A6", fontSize: "12.5px" }}>
                    Open now. Easy to recognise.
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
                    Nearby Competitor
                  </span>
                  <span style={{ color: "#6E6E73", fontSize: "12.5px" }}>
                    Closes soon
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
                    Another Listing
                  </span>
                  <span style={{ color: "#48484A", fontSize: "12.5px" }}>
                    1.8 km away
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Brand storytelling in motion"
        subtitle="See how our visual identities and brand films come alive on screen."
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
          Get my free brand consultation
        </a>
      </div>
    </div>
  );
}
