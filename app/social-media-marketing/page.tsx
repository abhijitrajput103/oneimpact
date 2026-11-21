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

const QUOTES = [
  { text: "They explained the plan for each platform in plain language, and the monthly reports made sense to everyone on our team.", role: "Marketing Head, fashion brand" },
  { text: "Our content finally sounds like us, and the comments and messages we get are from people who actually want to buy.", role: "Founder, café" },
  { text: "Clear process, honest updates and a team that replies fast. Social media no longer feels like guesswork.", role: "Director, interior design studio" },
];

const HELPS_CARDS = [
  { t: "Content strategies in your brand's voice", a: "Social media marketing companies curate content strategies that speak your brand's voice and goals, so your content connects with the right audience.", d: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4", chip: "#f9d230" },
  { t: "Consistency and engagement on your socials", a: "Consistent engagement activity keeps your brand relevant to its audience.", d: "M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5", chip: "#4066c6" },
  { t: "Performance tracking via paid tools", a: "With specific data, insights and learnings, you make smarter decisions by seeing what's working and what needs more improvement.", d: "M4 20V10M10 20V4M16 20v-7M22 20H2", chip: "#f9d230" },
  { t: "Managed online communities", a: "Gone are the days when posting about your business was enough. Social media fosters real interactions, and an open line of communication builds trust and loyalty.", d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6", chip: "#4066c6" },
  { t: "Paid campaigns, set up and managed", a: "By targeting the right audience at the right time, social media marketing companies improve ROI efficiently, with continuous optimization to keep improving results.", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", chip: "#f9d230" },
  { t: "A creative approach", a: "With multiple ideas and expert visualizers, social media agencies bring creative consistency across visual and written content that reinforces brand identity.", d: "M12 3a9 9 0 1 0 0 18c1 0 1.6-.8 1.3-1.7-.5-1.3.4-2.3 1.7-2.3H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10zM8 12h.01M10 7.5h.01M15 7.5h.01", chip: "#4066c6" },
];

export default function SmmLandingPage() {
  return (
    <div
      className="smm-landing-root"
      style={{
        background: "#000000",
        color: "#FFFFFF",
        fontFamily: "var(--font-manrope, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)",
        fontSize: "17px",
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style>{`
        body:has(.smm-landing-root),
        body:has(.smm-landing-root) *,
        .smm-landing-root,
        .smm-landing-root * {
          cursor: auto !important;
          box-sizing: border-box;
        }
        body:has(.smm-landing-root) a,
        body:has(.smm-landing-root) button,
        body:has(.smm-landing-root) select,
        body:has(.smm-landing-root) summary,
        body:has(.smm-landing-root) [role="button"],
        body:has(.smm-landing-root) [role="tab"],
        .smm-landing-root a,
        .smm-landing-root button,
        .smm-landing-root select,
        .smm-landing-root summary,
        .smm-landing-root [role="button"],
        .smm-landing-root [role="tab"] {
          cursor: pointer !important;
        }
        body:has(.smm-landing-root) input,
        body:has(.smm-landing-root) textarea,
        .smm-landing-root input,
        .smm-landing-root textarea {
          cursor: text !important;
        }
        .smm-landing-root a:not(header a):not(footer a):not(.bg-black) {
          color: #FFFFFF;
          transition: color 150ms ease;
        }
        .smm-landing-root a:not(header a):not(footer a):not(.bg-black):hover {
          color: #f9d230;
        }
        .smm-landing-root .press {
          transition: transform 100ms ease-out, background-color 150ms ease, box-shadow 150ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .smm-landing-root .press:active {
          transform: scale(0.97);
        }
        .smm-landing-root .press:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .smm-landing-root .press:disabled:active {
          transform: none;
        }
        .smm-landing-root .y:hover {
          background-color: #fae066 !important;
        }
        .smm-landing-root :focus-visible {
          outline: 3px solid #2563eb;
          outline-offset: 3px;
        }
        .smm-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .smm-landing-root .fd:focus {
          outline: none;
          border-color: #f9d230 !important;
          box-shadow: 0 0 0 4px rgba(249, 210, 48, 0.3);
        }
        .smm-landing-root .prewrap {
          white-space: pre-line;
        }
        .smm-landing-root details summary {
          list-style: none;
          cursor: pointer;
        }
        .smm-landing-root details summary::-webkit-details-marker {
          display: none;
        }
        .smm-landing-root .chev {
          transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .smm-landing-root details[open] .chev {
          transform: rotate(45deg);
        }
        .smm-landing-root .navlinks {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .smm-landing-root .mbar {
          display: none;
          gap: 10px;
        }
        .smm-landing-root .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .smm-landing-root .note-paper-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          padding: 96px 12% 76px;
        }
        .smm-landing-root .note-paper-img {
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
          .smm-landing-root .note-paper-card {
            padding: 88px 10% 68px;
          }
          .smm-landing-root .note-paper-img {
            width: auto;
            height: 146%;
            min-width: 138%;
          }
        }
        .smm-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: thin;
        }
        .smm-landing-root .scrollrow button {
          flex: none;
          white-space: nowrap;
        }
        .smm-landing-root .car-view {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
        }
        .smm-landing-root .car-view::-webkit-scrollbar {
          display: none;
        }
        .smm-landing-root .car-track {
          display: flex;
          gap: 18px;
        }
        .smm-landing-root .car-card {
          flex: none;
          width: min(320px, 78vw);
          scroll-snap-align: start;
        }
        @keyframes smm-marq {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .smm-landing-root .marq {
          animation: smm-marq 44s linear infinite;
        }
        .smm-landing-root .marq2 {
          animation: smm-marq 38s linear infinite;
        }
        .smm-landing-root .marqwrap:hover .marq,
        .smm-landing-root .marqwrap:hover .marq2 {
          animation-play-state: paused;
        }
        @keyframes smm-sheen {
          0% { transform: translateX(-300%) skewX(-16deg); }
          50%, 100% { transform: translateX(900%) skewX(-16deg); }
        }
        .smm-landing-root .form-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .smm-landing-root .form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 22%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.16), transparent);
          animation: smm-sheen 6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }
        .smm-landing-root .btn-sheen {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .smm-landing-root .btn-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 28%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: smm-sheen 3.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
        }
        @media (max-width: 980px) {
          .smm-landing-root .hero-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .smm-landing-root .navlinks {
            display: none !important;
          }
        }
        @media (max-width: 720px) {
          .smm-landing-root .mbar {
            display: flex !important;
          }
          .smm-landing-root .navcall {
            display: none !important;
          }
        }
        .smm-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: 14px;
        }
        .smm-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
          gap: 14px;
        }
        @media (max-width: 768px) {
          .smm-landing-root .smm-services-grid,
          .smm-landing-root .smm-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          .smm-landing-root .smm-service-card,
          .smm-landing-root .smm-why-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .smm-landing-root .smm-service-card h3,
          .smm-landing-root .smm-why-card h3 {
            font-size: 15.5px !important;
            line-height: 1.25 !important;
          }
          .smm-landing-root .smm-service-card p,
          .smm-landing-root .smm-why-card p {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
          .smm-landing-root .smm-why-card .why-icon {
            width: 28px !important;
            height: 28px !important;
          }
          .smm-landing-root .smm-why-card .why-icon svg {
            width: 13px !important;
            height: 13px !important;
          }
        }
        @media (max-width: 440px) {
          .smm-landing-root .smm-services-grid,
          .smm-landing-root .smm-why-grid {
            gap: 8px !important;
          }
          .smm-landing-root .smm-service-card,
          .smm-landing-root .smm-why-card {
            padding: 14px 11px !important;
            border-radius: 16px !important;
          }
          .smm-landing-root .smm-service-card h3,
          .smm-landing-root .smm-why-card h3 {
            font-size: 14px !important;
            line-height: 1.2 !important;
          }
          .smm-landing-root .smm-service-card p,
          .smm-landing-root .smm-why-card p {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
        }
        .smm-heading {
          font-family: var(--font-display), Georgia, serif;
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
            padding: "clamp(100px, 10vw, 128px) clamp(16px, 3vw, 32px) clamp(56px, 7vw, 88px)",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "inline-flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "15px", fontWeight: 500, color: "rgba(255, 255, 255, 0.72)", letterSpacing: "-0.01em" }}>
                Social media services by OneImpact
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
              className="smm-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                fontWeight: 700,
                maxWidth: "18ch",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>Social Media Marketing That </span>
              <span style={{ color: "#f9d230" }}>Stops the Scroll</span>
            </h1>

            <p style={{ margin: 0, fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.78)", maxWidth: "48ch" }}>
              We help brands build meaningful connections with their audience, turning casual scrollers into engaged followers and loyal customers.
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

      {/* ── PROOF SECTION: TRUST & CREDIBILITY */}
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
            className="smm-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              color: "#f9d230",
            }}
          >
            Trust and credibility matter when choosing the right partner for your brand&apos;s online presence.
          </h2>
          <p style={{ fontSize: "20px", lineHeight: 1.5, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
            At One Impact, they guide everything we do, so your brand is not just seen, but remembered and respected online.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.65)", margin: 0 }}>
            We&apos;re not just into engagements and gathering likes and shares; we&apos;re focused on helping you create meaningful connections with your target audience. Our team stays ahead of social trends, algorithm shifts and tools to harness social media&apos;s full potential.
          </p>
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

      {/* ── BENEFITS: HOW SOCIAL MEDIA MARKETING COMPANIES CAN HELP */}
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
              className="smm-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "#FFFFFF" }}>How social media marketing companies </span>
              <span style={{ color: "#f9d230" }}>can help</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)" }}>
              Here&apos;s what a social media marketing partner does for your brand:
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "16px" }}>
            {HELPS_CARDS.map((b, i) => (
              <div
                key={i}
                style={{
                  background: "#08080a",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "#2563eb",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      boxShadow: "0 3px 10px rgba(37, 99, 235, 0.35)",
                    }}
                  >
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={b.d} />
                    </svg>
                  </span>
                  <h3
                    className="smm-heading"
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      letterSpacing: "-0.025em",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      color: "#FFFFFF",
                    }}
                  >
                    {b.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.7)", fontSize: "14.5px", lineHeight: 1.55 }}>
                  {b.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUT WHY ONE IMPACT? / WHAT WE DO SECTION */}
      <ApproachTabs />

      {/* ── EXPLORE OUR SOCIAL MEDIA SERVICES */}
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

      {/* ── SPOTLIGHT: SOCIAL MEDIA MARKETING IN MUMBAI */}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "620px" }}>
            <h2
              className="smm-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                fontWeight: 700,
                color: "#ffd60a",
              }}
            >
              Social Media Marketing
              <br />
              in Mumbai
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              Mumbai is not only India&apos;s financial and entertainment hub, it&apos;s a city beaming with opportunities. With its superfast lifestyle, mixed crowd and lucrative industries, Mumbai is &ldquo;THE&rdquo; place for businesses aiming to create an impact, and a social media game that appeals to your target group is no longer optional.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, color: "rgba(255, 255, 255, 0.78)", margin: 0 }}>
              Showing up consistently on Instagram, Facebook, LinkedIn and X can set your business apart. At One Impact, every business we partner with gets a plan built from scratch and tailored to its audience, goals and brand voice, with solutions that bundle creativity and performance marketing, backed by data.
            </p>
            <p style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "clamp(15px, 1.25vw, 17px)", lineHeight: 1.65, margin: 0 }}>
              We don&apos;t just provide a service, we partner with you like a team.
            </p>
            <div style={{ paddingTop: "8px" }}>
              <a
                className="press y btn-sheen"
                href="#audit"
                style={{
                  alignSelf: "flex-start",
                  fontWeight: 650,
                  fontSize: "16.5px",
                  padding: "14px 28px",
                  minHeight: "52px",
                  background: "#f9d230",
                  color: "#000000",
                  textDecoration: "none",
                  border: 0,
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(249, 210, 48, 0.35)",
                }}
              >
                Let&apos;s build something that leaves a lasting impression
              </a>
            </div>
          </div>

          {/* Right Column: Dark Styled Feed Mockup Card */}
          <figure
            style={{
              margin: 0,
              borderRadius: "32px",
              overflow: "hidden",
              background: "#08080a",
              border: "1.5px solid rgba(255, 255, 255, 0.16)",
              boxShadow: "0 24px 60px -20px rgba(0, 0, 0, 0.9)",
            }}
            aria-label="Illustration of a social media feed"
          >
            <div style={{ position: "relative", height: "230px", background: "#0e182e", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", left: "50%", top: "22px", bottom: "-30px", width: "132px", marginLeft: "-66px", borderRadius: "26px", background: "#000000", padding: "8px", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div style={{ height: "100%", borderRadius: "19px", background: "#141416", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#f9d230" }} />
                    <span style={{ height: "6px", width: "46px", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
                  </div>
                  <div style={{ height: "98px", borderRadius: "10px", background: "#1c2b54", position: "relative" }}>
                    <span style={{ position: "absolute", right: "12px", top: "12px", width: "22px", height: "22px", borderRadius: "50%", background: "#f9d230" }} />
                  </div>
                  <div style={{ display: "flex", gap: "6px", color: "#FFFFFF" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z" /></svg>
                  </div>
                  <span style={{ height: "6px", width: "80%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
                </div>
              </div>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { title: "Your Brand", meta: "New reel. Posted 2h ago" },
                { title: "Another Account", meta: "Posted yesterday" },
                { title: "Nearby Competitor", meta: "Sponsored" },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 18px",
                    borderRadius: "18px",
                    background: i === 0 ? "#241f0a" : i === 1 ? "#1c1c1f" : "#141416",
                    border: i === 0 ? "1px solid rgba(255, 214, 10, 0.3)" : "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      fontSize: "14px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: i === 0 ? "#ffd60a" : i === 1 ? "#403710" : "#242426",
                      color: i === 0 ? "#000000" : i === 1 ? "#ffd60a" : "rgba(255, 255, 255, 0.35)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span style={{ fontWeight: 650, fontSize: "15px", color: i === 0 ? "#FFFFFF" : "rgba(255, 255, 255, 0.72)" }}>
                      {r.title}
                    </span>
                    <span style={{ fontSize: "12.5px", color: "#8E8E93", letterSpacing: 0 }}>
                      {r.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Reels we crafted for brands"
        subtitle="Click any reel to watch it right here inside the website — no external redirects."
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
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
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
          Get my social media audit
        </a>
      </div>
    </div>
  );
}
