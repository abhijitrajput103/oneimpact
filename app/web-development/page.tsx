import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ServiceReelsSection } from "@/components/showroom/ServiceReelsSection";
import { MumbaiSpotlightSection } from "@/components/common/MumbaiSpotlightSection";
import { HeroForm, WorkCarousel, ServiceTabs, OfferSection, FaqSection, InquirySection } from "./interactive-sections";
import { Eye, Smile, TrendingUp, Rocket, Boxes, BarChart3, Sparkles } from "lucide-react";

const HELPS_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  "Create a strong first impression": Eye,
  "Improve user experience": Smile,
  "Drive more conversions": TrendingUp,
  "Boost SEO performance": Rocket,
  "Ensure scalability": Boxes,
  "Enable data-driven decisions": BarChart3,
};

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
    letter: "P",
    title: "Plan",
    text: "We start by understanding your business model, your users and your long-term goals, then shape a solution that aligns with that vision.",
  },
  {
    letter: "D",
    title: "Design",
    text: "Research, wireframing and prototyping align every design choice with your brand and audience, so the site guides users naturally.",
  },
  {
    letter: "B",
    title: "Build",
    text: "Clean code, fast load times, mobile responsiveness and SEO best practices go in from the start, and every build is tested across devices and browsers.",
  },
  {
    letter: "S",
    title: "Support",
    text: "Launch is just the beginning. Regular updates, security patches, performance monitoring and bug fixes keep your site reliable.",
  },
];

const QUOTES = [
  {
    text: "They asked the right questions before writing a single line of code, and the site finally feels like our brand.",
    role: "Founder, interior design studio",
  },
  {
    text: "Updating products and offers is simple now. We don’t need to call a developer for every small change.",
    role: "Marketing Manager, retail brand",
  },
  {
    text: "The new site is quick on phones and the enquiry form is easy to find. Support after launch has been smooth.",
    role: "Director, education institute",
  },
];

const HELPS_CARDS = [
  {
    title: "Create a strong first impression",
    text: "A professionally developed website reflects your brand’s credibility and grabs attention instantly. Custom design keeps your branding consistent on every page, building trust from the very first click.",
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    chip: "#FFE7B8",
  },
  {
    title: "Improve user experience",
    text: "Smooth navigation, fast loading speed and mobile responsiveness keep visitors on your site longer. This directly lifts engagement and lowers bounce rates.",
    d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6",
    chip: "#D6E5FF",
  },
  {
    title: "Drive more conversions",
    text: "Strategic design and clear calls to action guide users toward a decision, whether it’s a purchase, a sign-up or an enquiry.",
    d: "M3 17l6-6 4 4 8-8M15 7h6v6",
    chip: "#FFE7B8",
  },
  {
    title: "Boost SEO performance",
    text: "Well-structured websites are easier for search engines to crawl and rank. Better visibility means more organic traffic.",
    d: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4",
    chip: "#D6E5FF",
  },
  {
    title: "Ensure scalability",
    text: "As your business grows, your website should grow with it. Scalable development makes future updates and new features seamless.",
    d: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    chip: "#FFE7B8",
  },
  {
    title: "Enable data-driven decisions",
    text: "Integrated analytics give you clear insights into user behavior, helping you make smarter business moves.",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#D6E5FF",
  },
];

const WHY_HIGHLIGHT_CARDS = [
  {
    t: "Custom-built for your brand",
    a: "We don’t do one-size-fits-all. OneImpact builds websites that reflect your brand’s voice, goals and audience needs.",
  },
  {
    t: "Conversion-driven design",
    a: "Our websites don’t just look good. They perform. Every element is designed to guide visitors toward action.",
  },
  {
    t: "Optimized for speed and performance",
    a: "A slow site can cost you customers. We build fast, responsive websites that deliver seamless experiences across all devices.",
  },
  {
    t: "SEO-ready structure",
    a: "We lay strong technical foundations for search visibility, so your website is built to rank better from day one.",
  },
  {
    t: "End-to-end support",
    a: "From wireframes to launch, we’ve got your back, with smooth delivery, updates and ongoing support after launch.",
  },
  {
    t: "A partner for long-term success",
    a: "Web development goes beyond design. We build performance-driven websites that support your long-term business goals.",
  },
  {
    t: "A clear, collaborative process",
    a: "From the first brainstorming session to post-launch support, we keep things clear, collaborative and results-focused.",
  },
  {
    t: "Technology with a purpose",
    a: "We use the latest tech not for the sake of trends, but to future-proof your digital presence. Every line of code has a purpose.",
  },
];

const SPOTLIGHT = {
  id: "local",
  title: "Websites Built for Conversions",
  paragraphs: [
    "A great website isn't just about aesthetics—it's your high-converting digital storefront. We build lightning-fast, mobile-first websites designed to turn visitors into paying customers.",
    "With clean architecture, fast-loading pages, and technical SEO at the core, your site stays easy to find and seamless to browse.",
  ],
  closing: "With OneImpact by your side, you get a website that is fast, functional, discoverable, and built to scale.",
  cta: "Let’s build your high-converting website",
  visual: {
    label: "High-performance web development deliverables",
    rows: [
      { title: "High-Performance Website", meta: "Sub-second load times, mobile-first design & conversion UX" },
      { title: "Search-First Architecture", meta: "Structured schema, fast indexing & technical SEO foundation" },
      { title: "Modern Scalable Tech Stack", meta: "Next.js architecture, CMS integration & continuous support" },
    ],
  },
};

export default function WebDevelopmentPage() {
  return (
    <div
      className="webdev-landing-root"
      style={{
        background: "#000000",
        color: "#FFFFFF",
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
        body:has(.webdev-landing-root),
        body:has(.webdev-landing-root) *,
        .webdev-landing-root,
        .webdev-landing-root * {
          cursor: auto !important;
          box-sizing: border-box;
        }
        body:has(.webdev-landing-root) a,
        body:has(.webdev-landing-root) button,
        body:has(.webdev-landing-root) select,
        body:has(.webdev-landing-root) summary,
        body:has(.webdev-landing-root) [role="button"],
        body:has(.webdev-landing-root) [role="tab"],
        .webdev-landing-root a,
        .webdev-landing-root button,
        .webdev-landing-root select,
        .webdev-landing-root summary,
        .webdev-landing-root [role="button"],
        .webdev-landing-root [role="tab"] {
          cursor: pointer !important;
        }
        body:has(.webdev-landing-root) input,
        body:has(.webdev-landing-root) textarea,
        .webdev-landing-root input,
        .webdev-landing-root textarea {
          cursor: text !important;
        }
        .webdev-landing-root a:not(header a):not(.bg-black) {
          color: #000000;
          transition: color 150ms ease;
        }
        .webdev-landing-root a:not(header a):not(.bg-black):hover {
          color: #3a3a3c;
        }
        .webdev-landing-root .press {
          transition: transform 100ms ease-out, background-color 150ms ease, box-shadow 150ms ease;
          -webkit-tap-highlight-color: transparent;
        }
        .webdev-landing-root .press:active {
          transform: scale(0.97);
        }
        .webdev-landing-root .press:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .webdev-landing-root .press:disabled:active {
          transform: none;
        }
        .webdev-landing-root .y:hover {
          background-color: #fae066 !important;
        }
        .webdev-landing-root :focus-visible {
          outline: 3px solid #4066c6;
          outline-offset: 3px;
        }
        .webdev-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .webdev-landing-root .fd:focus {
          outline: none;
          border-color: #f9d230 !important;
          box-shadow: 0 0 0 4px rgba(249, 210, 48, 0.3);
        }
        .webdev-landing-root .prewrap {
          white-space: pre-line;
        }
        .webdev-landing-root .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .webdev-landing-root .note-paper-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          padding: 96px 12% 76px;
        }
        .webdev-landing-root .note-paper-img {
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
          .webdev-landing-root .note-paper-card {
            padding: 88px 10% 68px;
            margin-top: 52px !important;
          }
          .webdev-landing-root .note-paper-img {
            width: auto;
            height: 146%;
            min-width: 138%;
          }
        }
        .webdev-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .webdev-landing-root .scrollrow::-webkit-scrollbar {
          display: none;
        }
        .webdev-landing-root .scrollrow button {
          flex: none;
          white-space: nowrap;
        }
        .webdev-landing-root .car-view {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
        }
        .webdev-landing-root .car-view::-webkit-scrollbar {
          display: none;
        }
        .webdev-landing-root .car-track {
          display: flex;
          gap: 16px;
        }
        .webdev-landing-root .car-card {
          flex: none;
          width: min(320px, 78vw);
          scroll-snap-align: start;
        }
        @keyframes webdev-marq {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .webdev-landing-root .marq {
          animation: webdev-marq 44s linear infinite;
        }
        .webdev-landing-root .marq2 {
          animation: webdev-marq 38s linear infinite;
        }
        .webdev-landing-root .marqwrap:hover .marq,
        .webdev-landing-root .marqwrap:hover .marq2 {
          animation-play-state: paused;
        }
        @keyframes webdev-sheen {
          0% {
            transform: translateX(-300%) skewX(-16deg);
          }
          50%,
          100% {
            transform: translateX(900%) skewX(-16deg);
          }
        }
        .webdev-landing-root .form-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .webdev-landing-root .form-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 22%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.16), transparent);
          animation: webdev-sheen 6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
          z-index: 0;
        }
        .webdev-landing-root .btn-sheen {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .webdev-landing-root .btn-sheen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 28%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: webdev-sheen 3.6s cubic-bezier(0.45, 0, 0.2, 1) infinite;
          pointer-events: none;
        }
        @media (max-width: 980px) {
          .webdev-landing-root .hero-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 48px !important;
          }
          .webdev-landing-root .note-paper-card {
            margin-top: 48px !important;
          }
        }
        @media (max-width: 900px) {
          .webdev-landing-root .navlinks {
            display: none !important;
          }
        }
        @media (max-width: 720px) {
          .webdev-landing-root .mbar {
            display: flex !important;
          }
          .webdev-landing-root .navcall {
            display: none !important;
          }
        }
        .webdev-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
          gap: 14px;
        }
        .webdev-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
          gap: 12px;
        }
        @media (max-width: 768px) {
          .webdev-landing-root .webdev-services-grid,
          .webdev-landing-root .webdev-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          .webdev-landing-root .webdev-service-card,
          .webdev-landing-root .webdev-why-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .webdev-landing-root .webdev-service-card h3,
          .webdev-landing-root .webdev-why-card h3 {
            font-size: 15.5px !important;
            line-height: 1.25 !important;
          }
          .webdev-landing-root .webdev-service-card p,
          .webdev-landing-root .webdev-why-card p {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
        }
        @media (max-width: 440px) {
          .webdev-landing-root .webdev-services-grid,
          .webdev-landing-root .webdev-why-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 8px !important;
          }
          .webdev-landing-root .webdev-service-card,
          .webdev-landing-root .webdev-why-card {
            padding: 14px 11px !important;
            border-radius: 16px !important;
          }
        }
        .webdev-heading {
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
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37, 99, 235, 0.18) 0%, rgba(249, 210, 48, 0.1) 45%, transparent 75%)",
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
                Web development services by OneImpact
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
              className="webdev-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 700,
                maxWidth: "15ch",
                color: "#FFFFFF",
              }}
            >
              Websites That Look Sharp, Load Fast and{" "}
              <span style={{ color: "#f9d230" }}>Convert.</span>
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
              Web development that tells your story, drives engagement, and scales your business.
            </p>

            <p style={{ margin: 0, fontSize: "17.5px", lineHeight: 1.55, color: "rgba(255, 255, 255, 0.72)", maxWidth: "50ch" }}>
              A website is more than just code. It’s the digital home of your brand, where trust is built and decisions are made. At OneImpact, we create websites with clean architecture, high speed, and intuitive user experiences.
            </p>

            <p style={{ margin: 0, fontSize: "17.5px", lineHeight: 1.55, color: "rgba(255, 255, 255, 0.72)", maxWidth: "50ch" }}>
              Choosing us for your web development means partnering with a team focused on clarity, performance, and long-term scalability. We guide you from wireframing to launch and beyond.
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

      {/* ── USP CAROUSEL */}
      <WorkCarousel />

      {/* ── FOUR-STEP PROCESS (#proof) */}
      <section
        id="proof"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px) clamp(32px, 4vw, 48px)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto", textAlign: "center" }}>
          <h2
            className="webdev-heading"
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              color: "#f9d230",
            }}
          >
            Trust and credibility matter when choosing the right partner for your brand&apos;s online presence.
          </h2>
          <h3
            className="webdev-heading"
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            At OneImpact, we follow a four-step <span style={{ color: "#f9d230" }}>development process</span>
          </h3>
          <p style={{ margin: "0 0 28px", color: "rgba(255, 255, 255, 0.65)", fontSize: "17px" }}>
            Plan, Design, Build, Support
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
                className="webdev-heading"
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

      {/* ── BENEFITS: HOW WEB DEVELOPMENT BOOSTS YOUR BUSINESS */}
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
              className="webdev-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              How web development boosts your <span style={{ color: "#f9d230" }}>business</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)" }}>
              Here&apos;s what a well-built website does for your business:
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
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {(() => {
                    const HelpsIcon = HELPS_ICONS[b.title] || Sparkles;
                    const isYellow = b.chip === "#FFE7B8" || b.chip === "#f9d230";
                    const iconColor = isYellow ? "#ffd60a" : "#60a5fa";
                    const glowColor = isYellow ? "rgba(255, 214, 10, 0.22)" : "rgba(96, 165, 250, 0.22)";
                    const badgeBg = isYellow ? "rgba(255, 214, 10, 0.08)" : "rgba(96, 165, 250, 0.08)";
                    const badgeBorder = isYellow ? "rgba(255, 214, 10, 0.22)" : "rgba(96, 165, 250, 0.22)";
                    return (
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: badgeBg,
                          border: `1.5px solid ${badgeBorder}`,
                          boxShadow: `0 4px 16px ${glowColor}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: "none",
                          color: iconColor,
                        }}
                      >
                        <HelpsIcon size={24} strokeWidth={2.2} />
                      </div>
                    );
                  })()}
                  <h3 className="webdev-heading" style={{ margin: 0, fontSize: "19px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#FFFFFF" }}>
                    {b.title}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT: WHY ONEIMPACT? */}
      <section
        id="why-oneimpact"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
            <h2
              className="webdev-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              Why <span style={{ color: "#f9d230" }}>OneImpact?</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)" }}>
              A partner built for technical execution and tangible business outcomes.
            </p>
          </div>

          <div
            className="webdev-why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
              gap: "16px",
            }}
          >
            {WHY_HIGHLIGHT_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="webdev-why-card"
                style={{
                  background: "#08080a",
                  borderRadius: "20px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(249, 210, 48, 0.15)",
                      border: "1px solid rgba(249, 210, 48, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      color: "#f9d230",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h3
                    className="webdev-heading"
                    style={{
                      margin: 0,
                      fontSize: "18.5px",
                      letterSpacing: "-0.025em",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      color: "#FFFFFF",
                    }}
                  >
                    {w.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{w.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE OUR WEB DEVELOPMENT SERVICES */}
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

      {/* ── WHAT WE OFFER: TOPIC PILLS & ACCORDIONS */}
      <OfferSection />

      {/* ── SPOTLIGHT: WEBSITES BUILT FOR CONVERSIONS */}
      <MumbaiSpotlightSection
        id="web-spotlight"
        headingLines={["Websites Built for"]}
        highlightText="Conversions"
        paragraphs={SPOTLIGHT.paragraphs}
        closingHighlight=""
        closingText="With OneImpact by your side, you get a website that is fast, functional, discoverable, and built to scale."
        ctaText={SPOTLIGHT.cta}
        ctaHref="#audit"
        imageSrc="/images/oneimpact_web_development.webp"
        imageAlt="Websites built for conversions"
        steps={SPOTLIGHT.visual.rows.map((r, i) => ({
          stepNumber: (i + 1).toString(),
          title: r.title,
          subtitle: r.meta,
        }))}
      />

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Our work in motion"
        subtitle="Explore our client reels directly within the page — no external redirects."
      />

      {/* ── FAQs */}
      <FaqSection />

      {/* ── FINAL CTA & SECOND FORM */}
      <InquirySection />

      {/* ── FOOTER */}
      <Footer />

      {/* ── MOBILE STICKY BOTTOM BAR */}
      <div
        className="mbar"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "16px",
          right: "16px",
          zIndex: 40,
          display: "none",
          alignItems: "center",
          gap: "10px",
          padding: "8px",
          borderRadius: "999px",
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <a
          href="https://wa.me/918369018104"
          target="_blank"
          rel="noopener noreferrer"
          className="press"
          style={{
            flex: "none",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#25D366",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
          aria-label="Chat on WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16v11H9l-5 4z" />
          </svg>
        </a>
        <a
          href="#audit"
          className="press y btn-sheen"
          style={{
            flex: 1,
            background: "#f9d230",
            color: "#000000",
            fontWeight: 650,
            fontSize: "15px",
            minHeight: "44px",
            borderRadius: "999px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          Free consultation
        </a>
      </div>
    </div>
  );
}
