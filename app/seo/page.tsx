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
    head: "Data-led",
    text: "Strategy backed by intelligent data analysis.",
    chip: "#FFE9B8",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    head: "Sales-first",
    text: "Designed to directly improve your sales performance.",
    chip: "#D6E5FF",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    head: "Made to fit",
    text: "Tailor-made SEO solutions for every business type.",
    chip: "#E2F0D9",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    ),
  },
  {
    head: "AI-enhanced",
    text: "AI-enhanced SEO for smarter, more efficient execution.",
    chip: "#F0E1FF",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    head: "Creative & Analytical",
    text: "Blending creativity with data for impactful results.",
    chip: "#FFE3E0",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
];

const EEAT_CARDS = [
  {
    k: "E",
    t: "Experience",
    a: "Our team has worked hands-on with brands across industries, successfully navigating SEO challenges and delivering results. From traffic surges to strategic keyword wins, we know what it takes to rank, and stay there.",
  },
  {
    k: "E",
    t: "Expertise",
    a: "We bring together professionals from diverse sectors, each bringing unique insights to the table. No generic blueprints, just carefully crafted SEO plans built around your market, your goals, and your audience.",
  },
  {
    k: "A",
    t: "Authoritativeness",
    a: "Our strategies help you earn credibility in your industry. By consistently publishing quality content and building the right links, we position your brand as a trusted voice in your space.",
  },
  {
    k: "T",
    t: "Trustworthiness",
    a: "Transparency is non-negotiable. We set expectations early, deliver honest reports, and always keep you in the loop. Our work is measurable, ethical, and designed for long-term success.",
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
    chip: "#FFE9B8",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    t: "Traffic that converts",
    a: "Unlike paid ads that reach broad audiences, SEO brings in users with intent: people already looking for what you offer.",
    chip: "#D6E5FF",
    d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    t: "Higher rankings without paying for ads",
    a: "Top organic rankings build trust and click-throughs. People trust what ranks naturally over what’s paid.",
    chip: "#E2F0D9",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    t: "Cost-efficient, long-term strategy",
    a: "No bidding wars or ad spend needed. Your optimized content keeps working for you over time.",
    chip: "#F0E1FF",
    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    t: "An edge over competitors",
    a: "While others rely solely on ads, your SEO presence makes sure you’re visible in the long run.",
    chip: "#FFE3E0",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    t: "Smarter decisions from real data",
    a: "SEO tools give insight into user behavior and performance, helping you adjust campaigns intelligently.",
    chip: "#FFE9B8",
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const BUT_WHY_CARDS = [
  { t: "Proven industry experience", a: "We’ve successfully managed SEO for multinational and regional brands alike.", chip: "#FFBA39" },
  { t: "AI-driven precision", a: "Our SEO solutions are enhanced with AI to streamline workflows and improve targeting.", chip: "#7BAAFF" },
  { t: "Hyperlocal strategies", a: "We specialize in local SEO for businesses targeting specific regions or cities.", chip: "#FFBA39" },
  { t: "Frequent SEO audits", a: "Regular performance checks to ensure strategies are still aligned with results.", chip: "#7BAAFF" },
  { t: "Authority-boosting backlink building", a: "We earn backlinks from high DA and PA domains that improve rankings and credibility.", chip: "#FFBA39" },
  { t: "Complete website optimization", a: "From technical fixes to content structure and UX, we optimize every corner of your site.", chip: "#7BAAFF" },
  { t: "Trend-responsive SEO", a: "We track algorithm updates and audience behavior shifts to adjust quickly.", chip: "#FFBA39" },
  { t: "User-centric design focus", a: "We make your site easier to navigate and convert by improving the overall experience.", chip: "#7BAAFF" },
];

const EXPLORE_SERVICES = [
  {
    t: "SEO services",
    a: "Our SEO services are built to elevate your visibility, generate qualified traffic, and convert leads. Every strategy we develop includes precise on-page SEO, keyword mapping, and content optimization, tailored to meet your business goals.",
    dot: "#FFBA39",
  },
  {
    t: "CRO services (Conversion Rate Optimization)",
    a: "Make the most of your existing traffic. With CRO, we optimize user journeys to lower bounce rates and increase conversion. It means less spend on new users, and more action from your current visitors.",
    dot: "#7BAAFF",
  },
  {
    t: "ASO services (App Store Optimization)",
    a: "Want your app to show up when someone searches for related tools on the Play Store or App Store? Our ASO services include keyword optimization, localization, content updates, and more to increase installs.",
    dot: "#34C759",
  },
  {
    t: "SEO audit services",
    a: "Our in-depth SEO audit uncovers the issues holding your website back. We review backlinks, content, load speeds, technical setup, and more to build a plan that elevates your SEO.",
    dot: "#AF52DE",
  },
  {
    t: "Enterprise SEO services",
    a: "Have a large website or multiple locations? We create strategies tailored to large-scale businesses, including internal linking, crawl optimization, global content management, and collaboration across teams.",
    dot: "#FF9500",
  },
  {
    t: "Penalty recovery services",
    a: "If Google hit your site with a penalty, we find the cause, clean it up, and future-proof your website with compliant white-hat strategies that align with algorithm guidelines.",
    dot: "#007AFF",
  },
];

const WHY_ONEIMPACT_POINTS = [
  { t: "SEO strategies tailored to you", a: "We don’t do cookie-cutter. Every SEO campaign we craft is built around your specific business goals, industry needs, and target audience." },
  { t: "Up-to-the-minute algorithm know-how", a: "Our experts stay current with every Google algorithm shift, so your SEO strategy is always optimized for what search engines want right now." },
  { t: "Cross-industry experience", a: "From startups to global brands, our team brings a wide range of insights to every campaign, helping us tackle SEO from multiple perspectives." },
  { t: "Analytics-driven execution", a: "We base every decision on real-time data, not guesswork. That means higher efficiency, smarter strategy, and measurable outcomes." },
  { t: "Success with competitive keywords", a: "We help businesses rank for some of the toughest keywords in their niche, and we’ll do the same for you." },
  { t: "Scalable for growth", a: "Whether you’re local or global, our solutions are built to grow alongside your business, with long-term success in mind." },
  { t: "Ethical, long-term SEO", a: "No gimmicks. We use white-hat strategies that build sustainable authority and long-term trust with both users and search engines." },
];

const OFFER_TOPICS = [
  {
    id: "audit",
    label: "Audit and strategy",
    intro: "A complete 360-degree diagnostic of your search health to build an actionable, revenue-focused roadmap.",
    qs: [
      {
        q: "What is a technical SEO audit?",
        intro: "A technical audit examines the behind-the-scenes setup of your site to identify any issues that might block search engines or affect user experience. We look at:",
        bullets: [
          "Crawl errors and indexing status",
          "Site load speed and performance",
          "Mobile usability and responsiveness",
          "HTTPS setup and security layers",
          "URL structures and navigation paths",
          "Duplicate content cleanups",
          "Meta and HTML tag accuracy",
          "Redirect chains and broken links",
          "Analytics and tracking health",
          "Compliance with Core Web Vitals",
        ],
      },
      {
        q: "What does an on-page SEO audit cover?",
        intro: "This audit evaluates how well each individual page is optimized for both search engines and visitors. It includes:",
        bullets: [
          "Title tags and meta descriptions",
          "Heading tag hierarchy and structure",
          "Internal and outbound linking patterns",
          "Content depth, clarity, and keyword placement",
          "Technical checks like page load speed, schema markup, mobile optimization, canonical tags, and image SEO",
        ],
      },
      {
        q: "What is an off-page SEO audit?",
        intro: "Off-page audits help measure your brand’s authority across the web. We examine:",
        bullets: [
          "Strength and quality of your backlink profile",
          "Your domain and page authority scores",
          "Outreach, guest post, and link-building effectiveness",
          "Online presence and community engagement",
          "Any penalties or spammy link risks",
        ],
      },
      {
        q: "How does competitor analysis help with SEO?",
        intro: "It provides a benchmark for your own strategy. With competitive insights, we:",
        bullets: [
          "Pinpoint which keywords are bringing your rivals traffic",
          "Find content opportunities they’ve missed",
          "Analyze their backlink and content tactics",
          "Build smarter strategies that help you overtake them",
        ],
      },
      {
        q: "How are high-intent keywords discovered?",
        intro: "We categorize search terms based on user intent: whether they’re ready to buy (transactional), researching (informational), or looking for a brand (navigational). Using advanced tools like SEMrush and Ahrefs, we:",
        bullets: [
          "Identify valuable keywords with high conversion potential",
          "Align them with what your customers are looking for",
          "Analyze which terms are bringing in traffic for top competitors",
        ],
      },
    ],
  },
  {
    id: "tech",
    label: "Technical SEO",
    intro: "The engine of search indexing. We engineer pristine architectures, schema, and sub-second performance.",
    qs: [
      {
        q: "Why is Technical SEO foundational?",
        a: "If search crawlers cannot render, crawl, or index your pages efficiently, even high-quality content will never achieve page-one rankings. Technical SEO resolves structural bottlenecks at the code level.",
      },
      {
        q: "How do you optimize Core Web Vitals?",
        a: "We systematically optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) through code splitting, caching strategies, and asset compression.",
      },
      {
        q: "Do you support modern Single Page Applications (Next.js/React)?",
        a: "Yes, our technical team works natively with modern JavaScript frameworks, optimizing Server-Side Rendering (SSR), Static Generation (SSG), and hydration to ensure seamless bot rendering.",
      },
    ],
  },
  {
    id: "content",
    label: "Content marketing",
    intro: "Intent-led editorial assets engineered to attract, educate, and convert high-value buyers.",
    qs: [
      {
        q: "How do you plan topic clusters?",
        a: "We map comprehensive topical authorities around your core commercial offering, linking pillar pages to contextual supporting articles that signal domain expertise to search engines.",
      },
      {
        q: "How do you align content with buyer intent?",
        a: "We craft distinct content types for top-of-funnel discovery, mid-funnel comparison, and bottom-of-funnel decision-making, ensuring every visitor has a natural next step toward conversion.",
      },
    ],
  },
  {
    id: "link",
    label: "Link building",
    intro: "Strictly white-hat editorial outreach that builds genuine domain authority and trust.",
    qs: [
      {
        q: "How do you earn backlinks?",
        a: "Through data-driven digital PR, original research stories, thought leadership placements, and targeted outreach to respected industry publications. We never buy link-farm links.",
      },
      {
        q: "How do you protect our site from link penalties?",
        a: "Every prospective domain undergoes strict evaluation for organic traffic validity, spam score, and topical relevance to protect your backlink profile from algorithmic flags.",
      },
    ],
  },
  {
    id: "local",
    label: "Local SEO",
    intro: "Capture high-intent nearby customers searching in Google Maps and the Local 3-Pack.",
    qs: [
      {
        q: "What is Google Business Profile (GBP) optimization?",
        a: "We optimize your business categories, service menus, operational hours, geotagged imagery, Q&A sections, and implement review generation protocols.",
      },
      {
        q: "Why is NAP consistency so important?",
        a: "Matching Name, Address, and Phone number across every major directory verifies your physical authenticity to Google's local proximity algorithms.",
      },
    ],
  },
  {
    id: "ecom",
    label: "E-commerce SEO",
    intro: "Drive high-volume qualified buyer traffic into your collection and product checkout flows.",
    qs: [
      {
        q: "How do you optimize category pages?",
        a: "Category pages drive the highest transaction volumes. We introduce targeted introductory guides, semantic internal links, and structured breadcrumb hierarchies.",
      },
      {
        q: "How do you handle faceted navigation duplicates?",
        a: "We configure canonical tags and robots parameters to prevent infinite URL crawl loops from product filters like color, size, and price.",
      },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise SEO",
    intro: "Scalable search operations designed for complex architectures and multi-market platforms.",
    qs: [
      {
        q: "How do you manage large-scale websites?",
        a: "We create strategies tailored to large-scale businesses, including automated internal linking rules, crawl budget optimization, global content management, and cross-team development workflows.",
      },
    ],
  },
  {
    id: "aio",
    label: "Voice and AI search",
    intro: "Prepare your brand for citation and discovery across ChatGPT, Perplexity, and AI Overviews.",
    qs: [
      {
        q: "What is AI-Engine Optimization (AIO / GEO)?",
        a: "It is the science of structuring factual knowledge, author credentials, entity citations, and concise direct answers so LLMs reference your brand as an authority.",
      },
    ],
  },
  {
    id: "video",
    label: "Video SEO",
    intro: "Optimize your video assets for rich YouTube search and Google Video carousel visibility.",
    qs: [
      {
        q: "How does Video SEO benefit organic search?",
        a: "With VideoObject schema, strategic timestamp chapters, and optimized transcripts, your video content captures prime visual real estate directly on the SERPs.",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile SEO and ASO",
    intro: "Maximize mobile web performance and climb Play Store and App Store rankings.",
    qs: [
      {
        q: "What is App Store Optimization (ASO)?",
        a: "Our ASO services include title and subtitle keyword optimization, localized app descriptions, icon/screenshot conversion testing, and ratings management to increase organic installs.",
      },
    ],
  },
];

const LOCAL_ROWS = [
  { n: "1", name: "Your Business", meta: "Open now. Top-rated in your area.", pin: "#FFBA39", bg: "#F5F5F7" },
  { n: "2", name: "Nearby Competitor", meta: "Closes soon", pin: "#7BAAFF", bg: "#FFFFFF" },
  { n: "3", name: "Another Listing", meta: "2.4 km away", pin: "#34C759", bg: "#FFFFFF" },
];

const FAQ_ALL = [
  {
    q: "Why aren’t we getting enough sales from online channels?",
    a: "If your site attracts the wrong kind of traffic or doesn’t clearly show value, your sales can suffer. Weak CTAs or missing conversion strategies are often to blame. Start by examining user behavior, improving targeting, and experimenting with your messaging and landing pages.",
    cat: "obstacles",
  },
  {
    q: "How can we increase our online brand awareness and visibility?",
    a: "Create and share content your audience finds useful: blogs, videos, and infographics. Spread it through social media and collaborate with influencers. Earning backlinks from trusted sites also boosts your brand’s reach and credibility.",
    cat: "obstacles",
  },
  {
    q: "Why is our website not reaching our target audience or appearing in relevant searches?",
    a: "You might not be targeting the right keywords, or your content may lack depth or relevance. Technical SEO issues like slow site speed or crawl errors can also block visibility. A detailed SEO audit and strong, focused content can help get you on the radar.",
    cat: "obstacles",
  },
  {
    q: "How can we differentiate ourselves from competitors in search results?",
    a: "Use unique selling points (USPs) in your page titles and meta descriptions. Focus on specific, long-tail keywords and add schema markup, like review ratings, to visually stand out in search listings.",
    cat: "obstacles",
  },
  {
    q: "Why is our online store not generating enough traffic?",
    a: "If you’re not getting organic search visibility or investing in promotion, traffic will be low. Combine SEO, pay-per-click ads, and product-centered content to bring qualified visitors to your site.",
    cat: "obstacles",
  },
  {
    q: "How can we improve our website’s SEO to drive more relevant traffic?",
    a: "Start with smart keyword research. Refine your titles and headings, write authoritative content, speed up your site, make sure it’s mobile-friendly, and build high-quality backlinks for credibility.",
    cat: "obstacles",
  },
  {
    q: "How can we ensure we rank higher for local searches and reach local customers?",
    a: "Claim and fully optimize your Google Business Profile. Keep your name, address, and phone number consistent everywhere. Gather genuine local reviews and publish content focused on your specific city or neighborhood.",
    cat: "obstacles",
  },
  {
    q: "Why aren’t our marketing efforts converting into actual customers?",
    a: "If your message doesn’t align with user intent or your landing pages don’t guide users clearly, conversions drop. Check that your calls-to-action are compelling and that your site supports an easy, logical buying journey.",
    cat: "why",
  },
  {
    q: "How can we improve the user experience to reduce bounce rates and increase engagement?",
    a: "Make sure your site loads quickly, works great on mobile, and is easy to navigate. Use eye-catching visuals and strong CTAs. Tools like heat maps and usability tests can help identify where users get stuck.",
    cat: "why",
  },
  {
    q: "Why is our online advertising not delivering a strong ROI?",
    a: "Broad or poorly targeted ads, weak creatives, and missing conversion tracking can all limit ROI. Improve audience segmentation, A/B test your ads, make sure analytics are set up properly, and invest more in high-performing campaigns.",
    cat: "why",
  },
  {
    q: "How can we improve customer acquisition through our website and drive more conversions?",
    a: "Make your value clear, simplify your forms, include testimonials and trust elements, and use offers like free trials or discounts. Retarget users who showed interest but didn’t convert the first time.",
    cat: "why",
  },
  {
    q: "Why is our e-commerce site not performing well despite strong products?",
    a: "Great products need more than a listing. You need persuasive copy, quality visuals, intuitive navigation, visible trust signals, and a seamless checkout to turn visitors into customers.",
    cat: "why",
  },
  {
    q: "Why is our website not converting traffic into repeat customers?",
    a: "Without follow-up tactics like email sequences, loyalty programs, and personalized suggestions, customers may not return. Re-engage them with exclusive offers and tailored experiences after purchase.",
    cat: "why",
  },
  {
    q: "Why isn’t our website ranking on search engines for important keywords?",
    a: "Your content might be too shallow, your on-page SEO may be lacking, or you may need more backlinks. Analyze your top competitors, find the gaps, and enhance your content and authority.",
    cat: "why",
  },
  {
    q: "Why are our blog posts not getting enough traffic, and how can we optimize them to rank better?",
    a: "You may be targeting the wrong keywords or not using internal and external links effectively. Choose better topics with keyword tools, refine your meta titles and descriptions, structure posts with clear headings, and promote your content through outreach.",
    cat: "why",
  },
];

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
  const [offerTab, setOfferTab] = useState("audit");
  const [faqTab, setFaqTab] = useState<"all" | "obstacles" | "why">("all");

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
  const displayedFaqs = faqTab === "all" ? FAQ_ALL : FAQ_ALL.filter((f) => f.cat === faqTab);

  return (
    <div className="bg-white text-black font-sans text-[17px] leading-relaxed antialiased selection:bg-[#FFBA39] selection:text-black min-h-screen">
      {/* ── 1. ORIGINAL ONE IMPACT NAVBAR ─────────────────────────────────── */}
      <Navbar />

      {/* ── 2. HERO SECTION ────────────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden bg-white pt-24 pb-4 md:pt-32 md:pb-6">
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
              SEO services by OneImpact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.08] tracking-tight font-bold text-black">
              Smart, Search‑First SEO That Brings Lasting Results
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-neutral-800 leading-snug">
              Rank Higher. Beat the Competition. Grow Organically with Us.
            </p>
            <p className="text-[17px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-2xl">
              At OneImpact, we treat SEO as a mission to fuel your business’s digital success, not just another service. We’re committed to delivering clarity and measurable growth through focused, strategic SEO tailored to your needs.
            </p>
            <p className="text-[16px] sm:text-[17px] text-neutral-600 leading-relaxed max-w-2xl font-medium">
              Outperform your competition with OneImpact’s reliable and results-driven SEO services.
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
                Why OneImpact →
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
                      Get your free SEO audit
                    </h2>
                    <p className="text-[14.5px] text-neutral-400">
                      A real person from our team reviews your website and gets back to you.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[13px] font-medium text-neutral-300">
                      Your name
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
                      Phone or WhatsApp number
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
                      Website address
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
                      What do you need? <span className="text-neutral-500">(optional)</span>
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
                    Get my free SEO audit
                  </button>

                  <p className="text-center text-xs text-neutral-500 mt-1">
                    No spam, no sales scripts. We’ll reply on WhatsApp or call.
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

      {/* ── 3. CLIENT LOGOS MARQUEE ────────────────────────────────────────── */}
      <section aria-label="Brands we work with" className="pt-4 pb-8 md:pt-6 md:pb-10 border-y border-neutral-100 bg-neutral-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-neutral-500">
            Brands we work with
          </p>
        </div>
        <div className="overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="brands-marquee-track flex gap-12 sm:gap-16 items-center">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer flex-shrink-0 px-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[155px] object-contain mix-blend-multiply transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes brandsMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .brands-marquee-track {
            width: max-content;
            animation: brandsMarquee 32s linear infinite;
          }
          .brands-marquee-track:hover {
            animation-play-state: paused !important;
          }
        `}</style>
      </section>

      {/* ── 4. WHY ONEIMPACT / USPs CAROUSEL ──────────────────────────────── */}
      <section id="usps" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-xl">
                SEO that fits your business. Not a template.
              </h2>
              <p className="text-lg text-neutral-600 mt-3 max-w-xl">
                Swipe through what you get with OneImpact as your SEO services provider.
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

      {/* ── 5. E-E-A-T FRAMEWORK & CLIENT TESTIMONIALS ──────────────────────── */}
      <section id="proof" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            Having a website or posting on social media won’t cut it anymore.
          </h2>
          <p className="text-xl text-neutral-800 leading-relaxed max-w-3xl font-medium">
            Today’s digital success depends on having a precise SEO strategy that makes your brand visible when and where it matters.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            At OneImpact, our mission is to create meaningful and lasting change for our clients. As a search engine optimization agency, we focus on building custom strategies that grow organic traffic, improve search visibility, and bring in qualified leads using intent-based keyword targeting.
          </p>
        </div>

        {/* E-E-A-T Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              At OneImpact, we follow the E-E-A-T framework
            </h3>
            <p className="text-sm text-neutral-500 mt-1 font-medium">
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
              className="bg-white border border-neutral-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex gap-1 text-[#FFBA39] text-sm">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-[15.5px] font-semibold text-neutral-900 leading-snug">
                  “{q.text}”
                </blockquote>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/LOGO/oneimpact-logo.png"
                  alt="One Impact"
                  className="h-4 sm:h-4.5 w-auto object-contain flex-shrink-0"
                />
                <span className="text-xs text-neutral-500 font-medium">
                  {q.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. HOW OPTIMIZING FOR SEO HELPS ────────────────────────────────── */}
      <section id="why" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              How optimizing for SEO helps
            </h2>
            <p className="text-lg text-neutral-600 mt-2">
              Here’s what happens when you optimize for SEO:
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

      {/* ── 7. BUT WHY ONEIMPACT? ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-12">
            But why OneImpact?
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

      {/* ── 8. EXPLORE OUR SEO SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Explore our SEO services
            </h2>
            <p className="text-lg text-neutral-600 mt-2 max-w-2xl">
              Curious about what else we bring to the table? Here’s a deeper look at our SEO offerings.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPLORE_SERVICES.map((svc, i) => (
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

      {/* ── 9. WHY ONEIMPACT YELLOW BANNER ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFBA39] rounded-[36px] p-8 sm:p-12 lg:p-16 text-black">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Why OneImpact?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_ONEIMPACT_POINTS.map((w, i) => (
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

      {/* ── 10. WHAT WE OFFER (ACCORDIONS) ─────────────────────────────────── */}
      <section id="offer" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            What we offer
          </h2>
          <p className="text-lg text-neutral-600 mt-2 mb-8">
            Pick a topic to see exactly how we approach it.
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
                <details key={idx} open={idx === 0} className="group py-5 first:pt-0 last:pb-0">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-bold text-neutral-900 select-none">
                    <span>{q.q}</span>
                    <span className="text-xl transition-transform duration-200 group-open:rotate-45 text-neutral-400">
                      +
                    </span>
                  </summary>
                  <div className="mt-3 text-neutral-700 leading-relaxed text-[15.5px] max-w-3xl">
                    {"intro" in q && q.intro && (
                      <p className="mb-2 text-neutral-700">{q.intro}</p>
                    )}
                    {"bullets" in q && Array.isArray(q.bullets) && (
                      <ul className="space-y-1.5 pl-0 my-2">
                        {q.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-neutral-600">
                            <span className="text-neutral-800 select-none font-bold">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {"a" in q && q.a && (
                      <p>{q.a}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. LOCAL SEO THAT PUTS YOU ON THE MAP ──────────────────────────── */}
      <section id="local" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Local SEO That Puts You on the Map
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Trying to connect with local customers? Our Local SEO services are built to make sure your business appears in the right place at the right time. At OneImpact, we fine-tune your digital footprint, optimizing your Google Business Profile, local map listings, directories, and citations, so your brand shows up exactly where nearby customers are looking.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              We handle everything from geo-specific keyword strategies and managing reviews to ensuring NAP (Name, Address, Phone) consistency across the web. Whether you operate from one location or several, our tailored approach helps you attract attention locally and earn trust in your neighborhood.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed font-medium">
              No shortcuts, just strategic moves that help local customers discover your business when it matters most.
            </p>
            <a
              href="#audit"
              className="mt-2 self-start bg-[#FFBA39] hover:bg-[#FFC75E] text-black font-bold text-[16px] px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95"
            >
              Let’s make your brand the go-to name in town
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

      {/* ── 12. FREQUENTLY ASKED QUESTIONS ──────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
              Questions, answered
            </h2>
            <p className="text-lg text-neutral-600 mt-2">
              Anything else?{" "}
              <a
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black underline"
              >
                Message us on WhatsApp
              </a>
              .
            </p>
          </div>

          {/* FAQ Filter Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-neutral-200/80 p-1 rounded-full border border-neutral-300">
              <button
                onClick={() => setFaqTab("all")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  faqTab === "all"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                All Questions ({FAQ_ALL.length})
              </button>
              <button
                onClick={() => setFaqTab("obstacles")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  faqTab === "obstacles"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Business Obstacles
              </button>
              <button
                onClick={() => setFaqTab("why")}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  faqTab === "why"
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Why OneImpact
              </button>
            </div>
          </div>

          {/* Accordion List */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 divide-y divide-neutral-200 shadow-sm">
            {displayedFaqs.map((f, idx) => (
              <details key={idx} className="group py-5 first:pt-0 last:pb-0">
                <summary className="flex justify-between items-center cursor-pointer list-none text-lg font-semibold text-neutral-900 select-none">
                  <span className="pr-4">{f.q}</span>
                  <span className="text-xl transition-transform duration-200 group-open:rotate-45 text-neutral-400 flex-shrink-0">
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

      {/* ── 13. BOTTOM AUDIT CONVERSION SECTION ─────────────────────────────── */}
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
                Outperform your competition.
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed max-w-lg">
                Get a free SEO audit and see exactly what’s holding your website back. No obligation.
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
                      Get your free SEO audit
                    </h3>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-neutral-300">Your name</label>
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
                      <label className="text-xs font-medium text-neutral-300">Phone or WhatsApp number</label>
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
                      <label className="text-xs font-medium text-neutral-300">Website address</label>
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
                      Get my free SEO audit
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

      {/* ── 14. FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#F5F5F7] border-t border-neutral-200 text-neutral-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/LOGO/oneimpact-logo.png" alt="One Impact" className="h-8 w-auto object-contain self-start" />
            <p className="text-neutral-600 text-sm max-w-xs">
              360-degree digital marketing for that ONE big bang IMPACT.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-black uppercase tracking-wider text-xs">
              Services
            </span>
            <Link href="/seo" className="text-neutral-600 hover:text-black">
              SEO and AIO
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-black">
              Social media
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-black">
              Branding and design
            </Link>
            <Link href="/#services" className="text-neutral-600 hover:text-black">
              Website development
            </Link>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-black uppercase tracking-wider text-xs">
              Company
            </span>
            <Link href="/#about-banner" className="text-neutral-600 hover:text-black">
              About us
            </Link>
            <Link href="/#proof" className="text-neutral-600 hover:text-black">
              Why us
            </Link>
            <Link href="/#showreel" className="text-neutral-600 hover:text-black">
              Blog
            </Link>
            <Link href="/#contact" className="text-neutral-600 hover:text-black">
              Contact
            </Link>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-black uppercase tracking-wider text-xs">
              Location & Contact
            </span>
            <span className="text-neutral-600">Mumbai, Maharashtra</span>
            <a href="mailto:teamhr@oneimpact.co" className="text-neutral-600 hover:text-black">
              teamhr@oneimpact.co
            </a>
            <a href="tel:+918369018104" className="text-neutral-600 hover:text-black">
              +91 83690 18104
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-neutral-300 text-center text-xs text-neutral-500">
          © 2026 One Impact. All rights reserved.
        </div>
      </footer>

      {/* ── 15. MOBILE STICKY BAR ───────────────────────────────────────────── */}
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
          Get my free SEO audit
        </a>
      </div>
    </div>
  );
}
