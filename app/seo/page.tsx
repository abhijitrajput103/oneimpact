"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
// ── DATA DEFINITIONS ──────────────────────────────────────────────────────────

const CLIENT_LOGOS = [
  { name: "LenDen Club", src: "/LOGO/LEDEN Clube.png" },
  { name: "Axis Trustee", src: "/LOGO/axistrustee.png" },
  { name: "Sweet Bengal", src: "/LOGO/SWEET BENGAL.jpg" },
  { name: "DSCI", src: "/LOGO/dsci.webp" },
  { name: "Bloomberg Quint", src: "/LOGO/bloomberg-quint-vector-logo.png" },
  { name: "DSP Mutual Fund", src: "/LOGO/DSP Mutual fund.png" },
  { name: "MOXIE Beauty", src: "/LOGO/MOXIE Beauty.png" },
  { name: "PayU", src: "/LOGO/PayU.svg.webp" },
  { name: "SMAAASH", src: "/LOGO/SMAAASH.jpg" },
  { name: "Sweet India", src: "/LOGO/SWEDT INDIA.jpg" },
  { name: "LiveLaw", src: "/LOGO/livelaw-logo.png" },
  { name: "SnapDeal", src: "/LOGO/sanpdealbrandlogo_2.avif" },
];

const USP_CARDS = [
  {
    head: "Custom Strategic Roadmap",
    text: "Tailored SEO campaigns built around your commercial intent and revenue goals, never generic checklists.",
    chip: "#FFE9B8",
    icon: (
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    head: "Transparent Reporting",
    text: "Live dashboards and plain-English monthly updates focusing on qualified pipeline growth, not vanity traffic.",
    chip: "#D6E5FF",
    icon: (
      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    head: "Technical SEO Rigor",
    text: "Complete Core Web Vitals optimization, pristine crawl architectures, and rich schema markup implementation.",
    chip: "#E2F0D9",
    icon: (
      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    head: "AI-Optimized SEO (AIO)",
    text: "Future-proof optimization engineered for ChatGPT Search, Google AI Overviews, and Perplexity LLM citations.",
    chip: "#F0E1FF",
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    head: "High-Intent Keyword Focus",
    text: "We target terms with active commercial buyer intent that directly generate enquiries and sales.",
    chip: "#FFE3E0",
    icon: (
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    head: "High-Authority Link Equity",
    text: "Strictly white-hat editorial outreach that builds natural domain authority and protects against penalty shocks.",
    chip: "#FFE9B8",
    icon: (
      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    ),
  },
  {
    head: "Local Map Pack Supremacy",
    text: "Dominate Google 3-Pack local rankings with precision NAP consistency, citation audits, and GBP review engines.",
    chip: "#D6E5FF",
    icon: (
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    head: "E-Commerce Revenue Growth",
    text: "Category siloing, product schema integration, and faceted navigation tuning designed to accelerate Shopify/Woo checkout.",
    chip: "#E2F0D9",
    icon: (
      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    ),
  },
  {
    head: "Competitor Market Moats",
    text: "We reverse-engineer what your top market rivals rank for, extract their backlink profiles, and outposition them.",
    chip: "#F0E1FF",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    head: "Zero Fluff Guarantee",
    text: "No misleading impressions or bot traffic claims. We tie every sprint to keyword positions and business growth.",
    chip: "#FFE3E0",
    icon: (
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    head: "Speed & Core Web Vitals",
    text: "Lightning-fast page load times, sub-second LCP scores, and optimized JavaScript delivery across mobile devices.",
    chip: "#FFE9B8",
    icon: (
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    head: "Dedicated Growth Lead",
    text: "Direct access to senior search strategists who actively understand your brand ethos and industry dynamics.",
    chip: "#D6E5FF",
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
];

const EEAT_CARDS = [
  {
    k: "E",
    t: "Experience",
    a: "Over half a decade scaling search growth across 50+ diverse industries, from venture-backed startups to enterprise conglomerates.",
  },
  {
    k: "E",
    t: "Expertise",
    a: "Technical architectural specialists, data engineers, and content directors certified in search semantics and semantic schema.",
  },
  {
    k: "A",
    t: "Authoritativeness",
    a: "Building organic trust through editorial media placements, verified digital PR, and authoritative backlink graphs.",
  },
  {
    k: "T",
    t: "Trustworthiness",
    a: "100% white-hat algorithmic safety, transparent analytics integrations, and zero risk of manual Google search penalties.",
  },
];

const QUOTES = [
  {
    text: "One Impact transformed our organic search acquisition. We went from page 4 to holding the top 3 spots for our core high-intent queries.",
    role: "Marketing Director, LenDen Club",
  },
  {
    text: "Their technical audit caught indexation leaks that our in-house engineers had overlooked. Organic conversions jumped 180% within 4 months.",
    role: "Head of Growth, Sweet Bengal",
  },
  {
    text: "The local SEO strategy has been a game-changer. We dominate local map packs across all our retail branches in Maharashtra.",
    role: "Founder, Moxie Beauty",
  },
];

const HELPS_CARDS = [
  {
    t: "Unstoppable Organic Traffic",
    a: "Bring thousands of ready-to-buy prospects to your website without paying for every single click.",
    chip: "#FFE9B8",
    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    t: "Lower Customer Acquisition Costs",
    a: "Organic search compounding creates an evergreen pipeline that reduces your reliance on rising paid ad costs.",
    chip: "#D6E5FF",
    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    t: "Cement True Brand Authority",
    a: "Searchers trust top organic results. Dominating position 1 signals unquestionable market leadership.",
    chip: "#E2F0D9",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    t: "Exceptional Mobile User Experience",
    a: "Google ranks fast, clean sites. Our optimizations directly improve navigation, speed, and overall on-site conversion.",
    chip: "#F0E1FF",
    d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    t: "Evergreen Compounding ROI",
    a: "Unlike paid campaigns that turn dark the moment spend stops, SEO assets continue driving leads for years.",
    chip: "#FFE3E0",
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    t: "Unfair Competitive Moats",
    a: "Displace entrenched competitors by winning the keywords your target demographic researches before buying.",
    chip: "#FFE9B8",
    d: "M3 6l3 18h12l3-18H3zm3 4h12",
  },
];

const BUT_WHY_CARDS = [
  { t: "Custom Playbooks Only", a: "No canned templates. Every sprint is custom-designed for your competitive niche.", chip: "#FFBA39" },
  { t: "Direct Senior Strategists", a: "Work with real SEO directors who make decisions, not junior account managers.", chip: "#7BAAFF" },
  { t: "Revenue Over Clicks", a: "We celebrate bottom-line customer acquisitions and demo requests, not vanity impressions.", chip: "#FFBA39" },
  { t: "AI Search Ready", a: "Built for LLM discovery engines so you appear in ChatGPT and Perplexity citations.", chip: "#7BAAFF" },
  { t: "Agile Weekly Sprints", a: "Rapid implementation cycles ensuring technical recommendations actually get shipped.", chip: "#FFBA39" },
  { t: "Strictly White-Hat", a: "100% compliant with Google Webmaster and Quality Rater Guidelines.", chip: "#7BAAFF" },
  { t: "Complete Full-Stack Team", a: "Engineers, copywriters, and data analysts working simultaneously on your site.", chip: "#FFBA39" },
  { t: "Zero Lock-In Contracts", a: "We earn your partnership every single month with verifiable commercial performance.", chip: "#7BAAFF" },
];

const CORE_SERVICES = [
  {
    t: "Technical SEO Audits & Architecture",
    a: "Fixing crawl traps, canonical conflicts, JavaScript hydration bottlenecks, and Core Web Vitals to maximize search engine discovery.",
    dot: "#FFBA39",
  },
  {
    t: "On-Page Optimization & Semantic SEO",
    a: "Restructuring content entities, heading hierarchies, title tags, and topical clusters that satisfy user intent completely.",
    dot: "#7BAAFF",
  },
  {
    t: "Authoritative Link Building & Digital PR",
    a: "Earning genuine editorial backlinks from high-DR industry publications that pass real domain equity and authority.",
    dot: "#34C759",
  },
];

const ADVANCED_SERVICES = [
  {
    t: "AI-Engine Optimization (AIO / GEO)",
    a: "Optimizing your brand for generative AI citations in ChatGPT Search, Google AI Overviews, Perplexity, and Claude search.",
    dot: "#AF52DE",
  },
  {
    t: "E-Commerce Category & Product SEO",
    a: "Schema-driven product catalogs, faceted search tuning, and category siloing that drives qualified commercial cart checkouts.",
    dot: "#FF9500",
  },
  {
    t: "Enterprise Platform Search Strategy",
    a: "Scalable programmatic SEO, international hreflang architectures, and multi-domain crawl management for high-scale sites.",
    dot: "#007AFF",
  },
];

const WHY2_CARDS = [
  { t: "Deep Technical Mastery", a: "We don't just advise; we write clean schema and optimize Next.js/React frontend code." },
  { t: "Intent-First Keyword Mining", a: "Targeting the exact terminology high-value buyers use right before purchasing." },
  { t: "Full-Funnel Content Architecture", a: "Top-of-funnel informational hubs supporting bottom-of-funnel conversion magnets." },
  { t: "Proactive Algorithmic Defense", a: "Continuous monitoring to keep your site thriving through Core & Helpful Content updates." },
  { t: "Holistic Digital Synergies", a: "SEO designed to complement your social, paid media, and brand narrative seamlessly." },
  { t: "Transparent Analytics Dashboards", a: "Real-time Google Search Console & GA4 integrations with custom business KPI filters." },
  { t: "Dedicated Communication Channel", a: "Direct Slack or WhatsApp line with your senior growth squad for immediate turnaround." },
];

const OFFER_TOPICS = [
  {
    id: "tech",
    label: "Technical SEO",
    intro: "The foundation of all search visibility. If bots can't render or parse your pages effectively, great content will never rank.",
    qs: [
      { q: "What does your technical SEO audit cover?", a: "We inspect server response times, HTTP header directives, indexability, XML sitemaps, robots.txt rules, JavaScript rendering, duplicate content canonicalization, and Core Web Vitals (LCP, FID/INP, CLS)." },
      { q: "Do you implement fixes or just give advice?", a: "Unlike agencies that simply email a PDF of problems, our technical team works directly with your developers or implements fixes in your code repository directly." },
      { q: "How do you handle Single Page Applications (Next.js/React)?", a: "We specialize in modern frontend stacks. We audit server-side rendering (SSR), static site generation (SSG), hydration states, and metadata tags to guarantee flawless bot indexing." },
    ],
  },
  {
    id: "onpage",
    label: "On-Page SEO",
    intro: "Transforming every page into an undeniable authority for its target search entity and user search intent.",
    qs: [
      { q: "How do you optimize existing content?", a: "We perform semantic gap analysis against top ranking competitors, integrate missing subtopics, optimize internal link structures, and calibrate header hierarchies without keyword stuffing." },
      { q: "What role does schema markup play?", a: "Rich schema (Article, Product, Organization, FAQPage, BreadcrumbList) helps search engines understand page context immediately, unlocking rich snippets and higher CTRs." },
      { q: "How do you approach keyword cannibalization?", a: "We map out page intent matrices. If two URLs compete for the same query, we either consolidate content via 301 redirects or differentiate their topical focus." },
    ],
  },
  {
    id: "offpage",
    label: "Off-Page & Digital PR",
    intro: "Building genuine editorial authority and brand mentions that Google's algorithms reward with first-page dominance.",
    qs: [
      { q: "How do you acquire backlinks?", a: "Strictly through high-quality editorial outreach, data-driven PR stories, brand mentions, and thought leadership contributions. We never buy link-farm PBN links." },
      { q: "How do you ensure link safety?", a: "Every target domain undergoes strict vetting for organic traffic trends, spam scores, topical relevance, and editorial guidelines to ensure 100% white-hat safety." },
      { q: "Can bad backlinks hurt my site?", a: "Yes. If your site has legacy toxic or algorithmic link flags, we perform a thorough backlink audit and prepare disavow files to restore domain trust." },
    ],
  },
  {
    id: "local",
    label: "Local SEO & Maps",
    intro: "Ensure nearby customers looking for your services discover your business in Google Local 3-Packs and Maps.",
    qs: [
      { q: "What is Google Business Profile (GBP) optimization?", a: "We optimize your business categories, service menus, operational hours, geotagged imagery, Q&A sections, and implement review generation protocols." },
      { q: "Why is NAP consistency so important?", a: "Matching Name, Address, and Phone number across every major directory verifies your physical authenticity to Google's local proximity algorithms." },
      { q: "Can you rank multiple branches or franchise locations?", a: "Yes. We create localized landing pages for each branch with individual schema markup and local citation networks." },
    ],
  },
  {
    id: "aio",
    label: "AI-Optimized SEO (AIO)",
    intro: "The next frontier: getting cited and recommended by generative AI engines like ChatGPT, Google AI Overviews, and Perplexity.",
    qs: [
      { q: "What is AI-Optimized SEO (AIO / GEO)?", a: "It is the science of structuring factual knowledge, author credentials, entity citations, and concise direct answers so LLMs reference your brand as an authority." },
      { q: "Will AI search replace traditional Google search?", a: "They coexist. Users increasingly ask complex comparative questions to LLMs while using Google for direct actions. Our hybrid approach wins both." },
      { q: "How do you measure AI citations?", a: "We monitor prompt outputs across ChatGPT Search, Perplexity, and Google AI Overviews for your industry's core commercial queries." },
    ],
  },
  {
    id: "ecom",
    label: "E-Commerce SEO",
    intro: "Turn search engines into your highest-converting acquisition channel for Shopify, WooCommerce, and custom stores.",
    qs: [
      { q: "How do you optimize category pages?", a: "Category pages drive the highest transaction volumes. We introduce targeted introductory guides, semantic internal links, and structured breadcrumb hierarchies." },
      { q: "What about out-of-stock or discontinued items?", a: "We implement smart URL handling: redirecting discontinued SKUs to relevant parent collections or offering similar recommendations without losing link equity." },
      { q: "How do you handle faceted navigation duplicates?", a: "We configure canonical tags and robots parameters to prevent infinite URL crawl loops from product filters like color, size, and price." },
    ],
  },
];

const LOCAL_ROWS = [
  { n: "1", name: "One Impact Partner Location", meta: "4.9 ★ (180+ Reviews) · Digital Agency · Mumbai", pin: "#FFBA39", bg: "#F5F5F7" },
  { n: "2", name: "Featured Commercial Hub", meta: "5.0 ★ (95+ Reviews) · Creative Studio · BKC", pin: "#7BAAFF", bg: "#FFFFFF" },
  { n: "3", name: "Verified Service Branch", meta: "4.8 ★ (140+ Reviews) · Marketing Headquarters · Andheri", pin: "#34C759", bg: "#FFFFFF" },
];

const FAQ_GENERAL = [
  {
    q: "How long does SEO take to produce measurable results?",
    a: "While technical fixes and indexing corrections can produce gains in as little as 30 to 45 days, substantial organic traffic and revenue growth typically manifest within 3 to 6 months as domain authority compounds.",
  },
  {
    q: "How does One Impact differ from traditional SEO agencies?",
    a: "We don't sell canned monthly packages or hand you off to junior account handlers. We operate as your dedicated growth squad, combining deep technical engineering, semantic content strategy, and revenue attribution.",
  },
  {
    q: "Do you guarantee #1 rankings on Google?",
    a: "No ethical agency can guarantee a specific #1 spot because search algorithms update daily. What we do guarantee is strict adherence to white-hat best practices, transparent work, and consistent organic visibility gains.",
  },
  {
    q: "Can SEO replace our paid advertising spend?",
    a: "SEO and PPC work best together. However, over time, a strong organic search presence drastically lowers your blended customer acquisition cost (CAC), allowing you to reduce ad spend without sacrificing revenue.",
  },
  {
    q: "What is included in the free SEO audit?",
    a: "A real senior strategist analyzes your website's crawlability, Core Web Vitals, keyword rankings, backlink health, and competitor gaps, followed by actionable recommendations delivered directly via WhatsApp or email.",
  },
];

const FAQ_SERVICES = [
  {
    q: "Do you offer SEO for website migrations or redesigns?",
    a: "Yes. Site migrations carry immense risk of traffic loss if 301 redirects and canonicals aren't mapped 1-to-1. We manage pre-launch audits, URL mapping, and post-launch monitoring to safeguard your rankings.",
  },
  {
    q: "Can you help recover from an algorithmic or manual penalty?",
    a: "Absolutely. We perform deep forensic analysis to identify the root cause—whether toxic link profiles, thin content, or technical rendering traps—and execute a systematic recovery roadmap.",
  },
  {
    q: "How do you measure and report ROI to our leadership team?",
    a: "We integrate directly with Google Search Console, Google Analytics 4, and your CRM to track organic impressions, click-through rates, qualified form fills, and actual commercial revenue.",
  },
  {
    q: "What access or resources do you need from our team to start?",
    a: "We typically require access to Google Search Console, GA4, your CMS or code repository (if we are directly implementing fixes), and a 45-minute onboarding discovery call.",
  },
  {
    q: "Do we need to sign a long-term lock-in contract?",
    a: "No. We believe our performance should earn your business every month. Our engagements run on flexible milestone-based agreements with zero long-term handcuffs.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function SeoServicesPage() {
  // Audit Form 1 State
  const [form1, setForm1] = useState({ name: "", phone: "", url: "", need: "Not sure yet" });
  const [err1, setErr1] = useState({ name: false, phone: false, url: false });
  const [touched1, setTouched1] = useState({ name: false, phone: false, url: false });
  const [sent1, setSent1] = useState(false);

  // Audit Form 2 State
  const [form2, setForm2] = useState({ name: "", phone: "", url: "" });
  const [err2, setErr2] = useState({ name: false, phone: false, url: false });
  const [touched2, setTouched2] = useState({ name: false, phone: false, url: false });
  const [sent2, setSent2] = useState(false);

  // Tabs State
  const [svcTab, setSvcTab] = useState<"core" | "adv">("core");
  const [offerTab, setOfferTab] = useState("tech");
  const [faqTab, setFaqTab] = useState<"gen" | "svc">("gen");

  // Carousel State
  const carTrackRef = useRef<HTMLDivElement>(null);
  const [carIdx, setCarIdx] = useState(0);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carTrackRef.current) return;
    const cardWidth = 336; // 320px + 16px gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    carTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleTrackScroll = () => {
    if (!carTrackRef.current) return;
    const scrollLeft = carTrackRef.current.scrollLeft;
    const maxScroll = carTrackRef.current.scrollWidth - carTrackRef.current.clientWidth;
    const ratio = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setCarIdx(Math.round(ratio * (USP_CARDS.length - 1)));
  };

  // Form 1 Handlers
  const validateForm1 = () => {
    const validName = form1.name.trim().length >= 2;
    const cleanPhone = form1.phone.replace(/\D/g, "");
    const validPhone = cleanPhone.length >= 10;
    const validUrl = form1.url.trim().length >= 4;
    setErr1({ name: !validName, phone: !validPhone, url: !validUrl });
    return validName && validPhone && validUrl;
  };

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched1({ name: true, phone: true, url: true });
    if (validateForm1()) {
      setSent1(true);
    }
  };

  // Form 2 Handlers
  const validateForm2 = () => {
    const validName = form2.name.trim().length >= 2;
    const cleanPhone = form2.phone.replace(/\D/g, "");
    const validPhone = cleanPhone.length >= 10;
    const validUrl = form2.url.trim().length >= 4;
    setErr2({ name: !validName, phone: !validPhone, url: !validUrl });
    return validName && validPhone && validUrl;
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched2({ name: true, phone: true, url: true });
    if (validateForm2()) {
      setSent2(true);
    }
  };

  const activeOffer = OFFER_TOPICS.find((t) => t.id === offerTab) || OFFER_TOPICS[0];

  return (
    <div className="bg-white text-black font-sans text-[17px] leading-relaxed antialiased selection:bg-[#FFBA39] selection:text-black min-h-screen">
      {/* ── 1. ORIGINAL ONE IMPACT NAVBAR ─────────────────────────────────── */}
      <Navbar />

      {/* ── 3. HERO SECTION ────────────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-32">
        {/* Ambient Gradient Glows */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-[6%] w-[380px] h-[380px] rounded-full bg-[#FFBA39] opacity-35 blur-[100px] pointer-events-none -z-0"
        />
        <div
          aria-hidden="true"
          className="absolute top-64 right-[24%] w-[320px] h-[320px] rounded-full bg-[#7BAAFF] opacity-30 blur-[110px] pointer-events-none -z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Column: Headlines & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[15px] font-semibold text-[#8E8E93] tracking-wide uppercase">
              SEO Services by One Impact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.08] tracking-tight font-bold text-black">
              Smart, Search‑First SEO That Brings Lasting Results
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-neutral-800 leading-snug">
              Rank Higher. Beat the Competition. Grow Organically with Us.
            </p>
            <p className="text-[17px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-2xl">
              At One Impact, we treat SEO as a mission to fuel your business’s digital success,
              not just another service. We’re committed to delivering clarity and measurable
              growth through focused, strategic SEO tailored to your specific commercial niche.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-100 hover:bg-neutral-200 text-black font-semibold text-[16px] px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all transform active:scale-95"
              >
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="#usps"
                className="text-black font-semibold text-[16px] px-4 py-3.5 inline-flex items-center gap-1.5 hover:translate-x-1 transition-all"
              >
                Why One Impact →
              </a>
            </div>
          </div>

          {/* Right Column: Hero Audit Card Form */}
          <div id="audit" className="lg:col-span-5">
            <div className="bg-neutral-950 text-white rounded-[32px] p-6 sm:p-8 lg:p-9 shadow-2xl border border-white/10 relative overflow-hidden">
              {!sent1 ? (
                <form onSubmit={handleSubmit1} className="flex flex-col gap-4 relative z-10">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-semibold text-[#FFBA39] tracking-wider uppercase">
                      Free for your website
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      Get Your Free SEO Audit
                    </h2>
                    <p className="text-[14.5px] text-neutral-400">
                      A senior growth strategist reviews your website and responds within 24 hours.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[13px] font-medium text-neutral-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="First and last name"
                      value={form1.name}
                      onChange={(e) => setForm1({ ...form1, name: e.target.value })}
                      onBlur={() => setTouched1({ ...touched1, name: true })}
                      className={`h-12 px-4 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 focus:outline-none transition-all ${
                        touched1.name && err1.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-neutral-800 focus:border-[#FFBA39]"
                      }`}
                    />
                    {touched1.name && err1.name && (
                      <span className="text-xs text-red-400">Please enter your name.</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-neutral-300">
                      Phone or WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="98XXX XXXXX"
                      value={form1.phone}
                      onChange={(e) => setForm1({ ...form1, phone: e.target.value })}
                      onBlur={() => setTouched1({ ...touched1, phone: true })}
                      className={`h-12 px-4 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 focus:outline-none transition-all ${
                        touched1.phone && err1.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-neutral-800 focus:border-[#FFBA39]"
                      }`}
                    />
                    {touched1.phone && err1.phone && (
                      <span className="text-xs text-red-400">
                        Enter a valid 10-digit mobile number.
                      </span>
                    )}
                  </div>

                  {/* Website Address Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-neutral-300">
                      Website Address
                    </label>
                    <input
                      type="text"
                      placeholder="yourbrand.com"
                      value={form1.url}
                      onChange={(e) => setForm1({ ...form1, url: e.target.value })}
                      onBlur={() => setTouched1({ ...touched1, url: true })}
                      className={`h-12 px-4 rounded-xl bg-neutral-900 border text-white placeholder-neutral-500 focus:outline-none transition-all ${
                        touched1.url && err1.url
                          ? "border-red-500 focus:border-red-500"
                          : "border-neutral-800 focus:border-[#FFBA39]"
                      }`}
                    />
                    {touched1.url && err1.url && (
                      <span className="text-xs text-red-400">
                        Please enter your website URL.
                      </span>
                    )}
                  </div>

                  {/* Need Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-medium text-neutral-300">
                      What Do You Need? <span className="text-neutral-500">(optional)</span>
                    </label>
                    <select
                      value={form1.need}
                      onChange={(e) => setForm1({ ...form1, need: e.target.value })}
                      className="h-12 px-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#FFBA39] transition-all"
                    >
                      <option value="Not sure yet">Not sure yet</option>
                      <option value="SEO audit and strategy">SEO audit and strategy</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="E-commerce SEO">E-commerce SEO</option>
                      <option value="Enterprise SEO">Enterprise SEO</option>
                      <option value="AI-optimised SEO (AIO)">AI-optimised SEO (AIO)</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 h-14 rounded-full bg-[#FFBA39] hover:bg-[#FFC75E] text-black font-bold text-[16.5px] transition-all transform active:scale-95 shadow-lg"
                  >
                    Get My Free SEO Audit
                  </button>

                  <p className="text-center text-xs text-neutral-500 mt-1">
                    No spam. We reply with real insights directly on WhatsApp or call.
                  </p>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFBA39] flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Audit Requested!</h3>
                  <p className="text-neutral-400 text-sm max-w-xs">
                    Thanks, {form1.name}. Our technical team is reviewing{" "}
                    <span className="text-[#FFBA39]">{form1.url}</span> and will reach out to you on{" "}
                    {form1.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSent1(false);
                      setForm1({ name: "", phone: "", url: "", need: "Not sure yet" });
                    }}
                    className="mt-2 text-xs text-neutral-400 hover:text-white underline"
                  >
                    Request another review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CLIENT LOGOS MARQUEE ────────────────────────────────────────── */}
      <section aria-label="Brands we work with" className="py-12 border-y border-neutral-100 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
          <p className="text-sm font-semibold tracking-wider uppercase text-neutral-500">
            Trusted by Ambitious Brands Across India
          </p>
        </div>
        <div className="overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 w-max animate-marquee items-center">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-9 w-auto max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY ONEIMPACT / USPs CAROUSEL ──────────────────────────────── */}
      <section id="usps" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-xl">
                SEO That Fits Your Business. Not a Template.
              </h2>
              <p className="text-lg text-neutral-600 mt-3 max-w-xl">
                Swipe through what you get with One Impact as your search optimization partner.
              </p>
            </div>
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll previous"
                className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center transition-all shadow-sm active:scale-95"
              >
                ←
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll next"
                className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center transition-all shadow-sm active:scale-95"
              >
                →
              </button>
            </div>
          </div>

          {/* Cards Track */}
          <div
            ref={carTrackRef}
            onScroll={handleTrackScroll}
            className="flex gap-5 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory"
          >
            {USP_CARDS.map((card, i) => (
              <div
                key={i}
                className="w-[300px] sm:w-[340px] flex-shrink-0 bg-white rounded-3xl p-7 flex flex-col justify-between min-h-[300px] shadow-sm border border-black/5 snap-start"
              >
                <div
                  style={{ backgroundColor: card.chip }}
                  className="w-13 h-13 rounded-2xl flex items-center justify-center text-black"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 leading-snug">
                    {card.head}
                  </h3>
                  <p className="text-[15.5px] text-neutral-600 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar indicator */}
          <div className="mt-8 w-48 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-all duration-300"
              style={{
                width: `${((carIdx + 1) / USP_CARDS.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── 6. E-E-A-T FRAMEWORK & CLIENT TESTIMONIALS ──────────────────────── */}
      <section id="proof" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            Having a website or posting on social media won’t cut it anymore.
          </h2>
          <p className="text-xl text-neutral-800 leading-relaxed max-w-3xl">
            Today’s digital success depends on having a precise SEO strategy that makes your brand visible when and where it matters.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl">
            At One Impact, our mission is to create meaningful and lasting change for our clients. As a search engine optimization agency, we focus on custom strategies that grow organic traffic and drive qualified buyer leads.
          </p>
        </div>

        {/* E-E-A-T Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              At One Impact, we follow the E-E-A-T framework
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Experience, Expertise, Authoritativeness, Trustworthiness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EEAT_CARDS.map((e, idx) => (
              <div
                key={idx}
                className="bg-[#F5F5F7] rounded-3xl p-7 flex flex-col gap-3 border border-black/5"
              >
                <span className="font-serif text-6xl sm:text-7xl font-extrabold text-neutral-900 leading-none">
                  {e.k}
                </span>
                <span className="w-8 h-1 bg-[#FFBA39] rounded-full my-1" />
                <h4 className="text-xl font-bold text-neutral-900">{e.t}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{e.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Quotes */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUOTES.map((q, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-3xl p-7 flex flex-col justify-between shadow-sm gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex text-[#FFBA39]">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-[17px] font-medium text-neutral-800 leading-snug">
                  “{q.text}”
                </blockquote>
              </div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {q.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. HOW OPTIMIZING FOR SEO HELPS ────────────────────────────────── */}
      <section id="why" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              How Optimizing for SEO Helps Your Business
            </h2>
            <p className="text-lg text-neutral-600 mt-2">
              Here’s what happens when your brand ranks where users are actively looking:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HELPS_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 flex flex-col gap-4 border border-black/5 shadow-sm"
              >
                <div
                  style={{ backgroundColor: card.chip }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-black"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.d} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {card.t}
                </h3>
                <p className="text-[15.5px] text-neutral-600 leading-relaxed">
                  {card.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. BUT WHY ONE IMPACT? ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-12">
            Why Partner with One Impact?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUT_WHY_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="bg-[#F5F5F7] rounded-3xl p-6 flex flex-col gap-3 border border-black/5"
              >
                <span
                  style={{ backgroundColor: w.chip }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm"
                >
                  ✓
                </span>
                <h3 className="text-lg font-bold text-neutral-900">{w.t}</h3>
                <p className="text-[14.5px] text-neutral-600 leading-relaxed">{w.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. EXPLORE OUR SEO SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
                Explore Our SEO Services
              </h2>
              <p className="text-lg text-neutral-600 mt-2 max-w-xl">
                Comprehensive search capabilities tailored to your specific commercial lifecycle.
              </p>
            </div>

            {/* Segmented Control */}
            <div className="inline-flex bg-neutral-200/80 p-1 rounded-full border border-neutral-300">
              <button
                onClick={() => setSvcTab("core")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  svcTab === "core"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Core Services
              </button>
              <button
                onClick={() => setSvcTab("adv")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  svcTab === "adv"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Advanced & Specialized
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(svcTab === "core" ? CORE_SERVICES : ADVANCED_SERVICES).map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 flex flex-col gap-4 border border-black/5 shadow-md"
              >
                <span
                  style={{ backgroundColor: svc.dot }}
                  className="w-3.5 h-3.5 rounded-full"
                />
                <h3 className="text-xl font-bold text-neutral-900 leading-snug">
                  {svc.t}
                </h3>
                <p className="text-[15.5px] text-neutral-600 leading-relaxed">
                  {svc.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. WHY ONEIMPACT YELLOW BANNER ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFBA39] rounded-[36px] p-8 sm:p-12 lg:p-16 text-black">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Why One Impact?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY2_CARDS.map((w, i) => (
                <div
                  key={i}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-2 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-neutral-900">{w.t}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{w.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. WHAT WE OFFER (ACCORDIONS) ─────────────────────────────────── */}
      <section id="offer" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            What We Offer
          </h2>
          <p className="text-lg text-neutral-600 mt-2 mb-8">
            Pick a topic to see exactly how our specialized team approaches it.
          </p>

          {/* Horizontal Topic Pill Selector */}
          <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-none">
            {OFFER_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setOfferTab(topic.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${
                  offerTab === topic.id
                    ? "bg-black text-white border-black shadow-sm"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>

          {/* Topic Detail Container */}
          <div className="mt-8 bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl font-medium">
              {activeOffer.intro}
            </p>

            <div className="divide-y divide-neutral-200">
              {activeOffer.qs.map((q, idx) => (
                <details key={idx} className="group py-5 first:pt-0 last:pb-0">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-semibold text-neutral-900 select-none">
                    <span>{q.q}</span>
                    <span className="text-xl transition-transform duration-200 group-open:rotate-45 text-neutral-400">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600 leading-relaxed text-[16px] max-w-3xl">
                    {q.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. LOCAL SEO THAT PUTS YOU ON THE MAP ──────────────────────────── */}
      <section id="local" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Local SEO That Puts You on the Map
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Trying to connect with customers in your neighborhood? Our Local SEO services ensure your business appears at the precise moment nearby buyers search. At One Impact, we fine-tune your Google Business Profile, local map citations, and location directories so you capture top spots in the Google Local 3-Pack.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              We manage geo-targeted keyword strategies, review generation workflows, and strict NAP (Name, Address, Phone) consistency across the entire web.
            </p>
            <a
              href="#audit"
              className="mt-2 self-start bg-[#FFBA39] hover:bg-[#FFC75E] text-black font-bold text-[16px] px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95"
            >
              Let’s Make Your Brand the Go-To Name in Town
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-xl">
              {/* Map Illustration Header */}
              <div className="h-48 bg-[#E8F0FF] relative p-6 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#0066FF_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FFBA39] shadow-lg flex items-center justify-center animate-bounce">
                    <span className="text-black text-xl font-bold">📍</span>
                  </div>
                  <span className="mt-2 text-xs font-bold text-neutral-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    Google Local Pack #1
                  </span>
                </div>
              </div>

              {/* Listings Rows */}
              <div className="p-4 flex flex-col gap-2">
                {LOCAL_ROWS.map((row, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: row.bg }}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-neutral-100"
                  >
                    <span
                      style={{ backgroundColor: row.pin }}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                    >
                      {row.n}
                    </span>
                    <div className="min-w-0 flex flex-col">
                      <span className="font-semibold text-sm text-neutral-900 truncate">
                        {row.name}
                      </span>
                      <span className="text-xs text-neutral-500 truncate">{row.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. FREQUENTLY ASKED QUESTIONS ──────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Questions, Answered
            </h2>
            <p className="text-lg text-neutral-600 mt-2">
              Have questions? You can also{" "}
              <a
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black underline"
              >
                message us directly on WhatsApp
              </a>
              .
            </p>
          </div>

          {/* FAQ Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-neutral-200/80 p-1 rounded-full border border-neutral-300">
              <button
                onClick={() => setFaqTab("gen")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  faqTab === "gen"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                General Questions
              </button>
              <button
                onClick={() => setFaqTab("svc")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  faqTab === "svc"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Services & Process
              </button>
            </div>
          </div>

          {/* Accordion List */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 divide-y divide-neutral-200 shadow-sm">
            {(faqTab === "gen" ? FAQ_GENERAL : FAQ_SERVICES).map((f, idx) => (
              <details key={idx} className="group py-5 first:pt-0 last:pb-0">
                <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-semibold text-neutral-900 select-none">
                  <span>{f.q}</span>
                  <span className="text-xl transition-transform duration-200 group-open:rotate-45 text-neutral-400">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-neutral-600 leading-relaxed text-[16px]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. BOTTOM AUDIT CONVERSION SECTION ─────────────────────────────── */}
      <section id="audit2" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F5F7] rounded-[40px] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
            {/* Ambient Background Accent */}
            <div
              aria-hidden="true"
              className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#FFBA39] opacity-35 blur-[100px] pointer-events-none"
            />

            {/* Left Column: Direct Outreach */}
            <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
                Outperform Your Competition.
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed max-w-lg">
                Get a comprehensive free SEO audit and see exactly what’s holding your website back from holding position 1 on Google. Zero obligation.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/918369018104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all inline-flex items-center gap-2"
                >
                  WhatsApp: +91 83690 18104
                </a>
                <a
                  href="mailto:teamhr@oneimpact.co"
                  className="bg-white border border-neutral-300 text-black px-6 py-3.5 rounded-full text-sm font-semibold hover:border-black transition-all"
                >
                  teamhr@oneimpact.co
                </a>
              </div>
            </div>

            {/* Right Column: Bottom Form Card */}
            <div className="lg:col-span-5 relative z-10">
              <div className="bg-black text-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-white/10">
                {!sent2 ? (
                  <form onSubmit={handleSubmit2} className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-white">
                      Request Your Free Audit
                    </h3>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-neutral-300">Your Name</label>
                      <input
                        type="text"
                        placeholder="First and last name"
                        value={form2.name}
                        onChange={(e) => setForm2({ ...form2, name: e.target.value })}
                        onBlur={() => setTouched2({ ...touched2, name: true })}
                        className="h-11 px-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFBA39]"
                      />
                      {touched2.name && err2.name && (
                        <span className="text-xs text-red-400">Name is required.</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-neutral-300">Phone or WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="98XXX XXXXX"
                        value={form2.phone}
                        onChange={(e) => setForm2({ ...form2, phone: e.target.value })}
                        onBlur={() => setTouched2({ ...touched2, phone: true })}
                        className="h-11 px-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFBA39]"
                      />
                      {touched2.phone && err2.phone && (
                        <span className="text-xs text-red-400">10-digit number required.</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-neutral-300">Website URL</label>
                      <input
                        type="text"
                        placeholder="yourbrand.com"
                        value={form2.url}
                        onChange={(e) => setForm2({ ...form2, url: e.target.value })}
                        onBlur={() => setTouched2({ ...touched2, url: true })}
                        className="h-11 px-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFBA39]"
                      />
                      {touched2.url && err2.url && (
                        <span className="text-xs text-red-400">Website address required.</span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="mt-2 h-12 rounded-full bg-[#FFBA39] hover:bg-[#FFC75E] text-black font-bold text-sm transition-all transform active:scale-95"
                    >
                      Get Free Audit Now
                    </button>
                  </form>
                ) : (
                  <div className="py-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#FFBA39] flex items-center justify-center text-black font-bold text-xl">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold text-white">Thank You!</h4>
                    <p className="text-xs text-neutral-400">
                      We’ve received your request for {form2.url} and will get in touch shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 15. FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#F5F5F7] border-t border-neutral-200 text-neutral-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="One Impact" className="h-9 w-auto object-contain self-start" />
            <p className="text-neutral-600 text-sm">
              360-degree digital marketing for that ONE big bang IMPACT.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-black uppercase tracking-wider text-xs">
              Services
            </span>
            <Link href="/seo" className="text-neutral-600 hover:text-black">
              SEO & AI-Optimized Search
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-black">
              Social Media Marketing
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-black">
              Branding & Design
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-black">
              Web Development
            </Link>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-black uppercase tracking-wider text-xs">
              Company
            </span>
            <Link href="/#about-banner" className="text-neutral-600 hover:text-black">
              About Us
            </Link>
            <Link href="/#proof" className="text-neutral-600 hover:text-black">
              Why Us
            </Link>
            <Link href="/#showreel" className="text-neutral-600 hover:text-black">
              Work & Portfolio
            </Link>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-black uppercase tracking-wider text-xs">
              Contact
            </span>
            <span className="text-neutral-600">Mumbai, Maharashtra, India</span>
            <a href="mailto:teamhr@oneimpact.co" className="text-neutral-600 hover:text-black">
              teamhr@oneimpact.co
            </a>
            <a href="tel:+918369018104" className="text-neutral-600 hover:text-black">
              +91 83690 18104
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-neutral-300 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} One Impact. All rights reserved.
        </div>
      </footer>

      {/* ── 16. MOBILE STICKY BAR ───────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-neutral-200 p-3 px-4 flex items-center gap-3">
        <a
          href="https://wa.me/918369018104"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
          className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-black flex-shrink-0"
        >
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
        <a
          href="#audit"
          className="flex-1 bg-[#FFBA39] text-black font-bold text-center py-3 rounded-full text-sm shadow-sm"
        >
          Get Free SEO Audit
        </a>
      </div>
    </div>
  );
}
