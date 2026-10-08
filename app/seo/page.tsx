"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ── DATA DEFINITIONS MATCHING EXACT REFERENCE DESIGN ─────────────────────────

const NOTICES = [
  "Free SEO audit for your website. Fill the form and our team will get back to you.",
  "Now optimising for AI search: ChatGPT, Gemini and Perplexity.",
  "Local SEO for your city, from Google Business Profile to citations.",
  "White-hat SEO only. No shortcuts, no gimmicks.",
  "WhatsApp us on +91 83690 18104 for a quick reply.",
];

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
    text: "Strategy backed by intelligent data analysis",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#FFE7B8",
  },
  {
    head: "Sales-first",
    text: "Designed to directly improve your sales performance",
    d: "M3 17l6-6 4 4 8-8M15 7h6v6",
    chip: "#D6E5FF",
  },
  {
    head: "Made to fit",
    text: "Tailor-made SEO solutions for every business type",
    d: "M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4",
    chip: "#FFE7B8",
  },
  {
    head: "AI-enhanced",
    text: "AI-enhanced SEO for smarter, more efficient execution",
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
    chip: "#D6E5FF",
  },
  {
    head: "Creative + data",
    text: "Blending creative insight with real data for strong results",
    d: "M12 3a6 6 0 0 0-3 11.2V17h6v-2.8A6 6 0 0 0 12 3zM9 21h6",
    chip: "#FFE7B8",
  },
  {
    head: "Dependable",
    text: "Trusted by brands as a dependable SEO services provider",
    d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    chip: "#D6E5FF",
  },
  {
    head: "Clear process",
    text: "Clear, efficient execution process from start to finish",
    d: "M5 12.5l4.5 4.5L19 7.5",
    chip: "#FFE7B8",
  },
  {
    head: "Simple",
    text: "A streamlined approach that simplifies digital marketing",
    d: "M4 12h16M12 4v16",
    chip: "#D6E5FF",
  },
  {
    head: "Long-term",
    text: "Consistent, long-term organic growth",
    d: "M3 17l6-6 4 4 8-8",
    chip: "#FFE7B8",
  },
  {
    head: "ROI-focused",
    text: "ROI-focused methods that deliver real business impact",
    d: "M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3",
    chip: "#D6E5FF",
  },
  {
    head: "Built for India",
    text: "An SEO services provider with deep India market know-how",
    d: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z",
    chip: "#FFE7B8",
  },
  {
    head: "Goal-led",
    text: "Targeted strategies built around your business objectives",
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    chip: "#D6E5FF",
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
    d: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4",
    chip: "#FFBA39",
  },
  {
    t: "Traffic that converts",
    a: "Unlike paid ads that reach broad audiences, SEO brings in users with intent: people already looking for what you offer.",
    d: "M3 17l6-6 4 4 8-8M15 7h6v6",
    chip: "#7BAAFF",
  },
  {
    t: "Higher rankings without paying for ads",
    a: "Top organic rankings build trust and click-throughs. People trust what ranks naturally over what’s paid.",
    d: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z",
    chip: "#FFBA39",
  },
  {
    t: "Cost-efficient, long-term strategy",
    a: "No bidding wars or ad spend needed. Your optimized content keeps working for you over time.",
    d: "M12 3v18M17 7.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3",
    chip: "#7BAAFF",
  },
  {
    t: "An edge over competitors",
    a: "While others rely solely on ads, your SEO presence makes sure you’re visible in the long run.",
    d: "M5 21V9l7-6 7 6v12M9 21v-6h6v6",
    chip: "#FFBA39",
  },
  {
    t: "Smarter decisions from real data",
    a: "SEO tools give insight into user behavior and performance, helping you adjust campaigns intelligently.",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#7BAAFF",
  },
];

const BUT_WHY_CARDS = [
  {
    t: "Proven industry experience",
    a: "We’ve successfully managed SEO for multinational and regional brands alike.",
    chip: "#FFBA39",
  },
  {
    t: "AI-driven precision",
    a: "Our SEO solutions are enhanced with AI to streamline workflows and improve targeting.",
    chip: "#7BAAFF",
  },
  {
    t: "Hyperlocal strategies",
    a: "We specialize in local SEO for businesses targeting specific regions or cities.",
    chip: "#FFBA39",
  },
  {
    t: "Frequent SEO audits",
    a: "Regular performance checks to ensure strategies are still aligned with results.",
    chip: "#7BAAFF",
  },
  {
    t: "Authority-boosting backlink building",
    a: "We earn backlinks from high DA and PA domains that improve rankings and credibility.",
    chip: "#FFBA39",
  },
  {
    t: "Complete website optimization",
    a: "From technical fixes to content structure and UX, we optimize every corner of your site.",
    chip: "#7BAAFF",
  },
  {
    t: "Trend-responsive SEO",
    a: "We track algorithm updates and audience behavior shifts to adjust quickly.",
    chip: "#FFBA39",
  },
  {
    t: "User-centric design focus",
    a: "We make your site easier to navigate and convert by improving the overall experience.",
    chip: "#7BAAFF",
  },
];

const SVC_GROUPS = [
  {
    label: "Organic SEO services",
    items: [
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
        dot: "#FFBA39",
      },
      {
        t: "SEO audit services",
        a: "Our in-depth SEO audit uncovers the issues holding your website back. We review backlinks, content, load speeds, technical setup, and more to build a plan that elevates your SEO.",
        dot: "#7BAAFF",
      },
      {
        t: "Enterprise SEO services",
        a: "Have a large website or multiple locations? We create strategies tailored to large-scale businesses, including internal linking, crawl optimization, global content management, and collaboration across teams.",
        dot: "#FFBA39",
      },
      {
        t: "Penalty recovery services",
        a: "If Google hit your site with a penalty, we find the cause, clean it up, and future-proof your website with compliant white-hat strategies that align with algorithm guidelines.",
        dot: "#7BAAFF",
      },
    ],
  },
  {
    label: "Platform-based SEO",
    items: [
      {
        t: "E-commerce SEO",
        a: "Get more visibility and sales from your eCommerce store with targeted optimization. We enhance your technical SEO, structure your site for shoppers, and build content that converts.",
        dot: "#FFBA39",
      },
      {
        t: "Local SEO",
        a: "Want to get discovered in your area? Our local SEO solutions help you appear in map results, “near me” searches, and local directories, perfect for businesses with a physical presence.",
        dot: "#7BAAFF",
      },
      {
        t: "Amazon SEO",
        a: "We optimize your Amazon listings using relevant keywords, compelling descriptions, and performance-focused enhancements that boost your product rankings and sales.",
        dot: "#FFBA39",
      },
      {
        t: "YouTube SEO",
        a: "Struggling to grow your YouTube presence? Our SEO strategies help your videos get found with optimized titles, tags, descriptions, watch-time improvements, and thumbnails that drive clicks.",
        dot: "#7BAAFF",
      },
      {
        t: "WordPress SEO",
        a: "We optimize WordPress websites with better structure, schema, content enhancements, and site speed improvements to help you rank and retain traffic.",
        dot: "#FFBA39",
      },
      {
        t: "Shopify SEO",
        a: "From product titles to meta tags and site architecture, our Shopify SEO experts ensure your store is optimized to attract and convert organic traffic.",
        dot: "#7BAAFF",
      },
    ],
  },
];

const WHY2_POINTS = [
  {
    t: "SEO strategies tailored to you",
    a: "We don’t do cookie-cutter. Every SEO campaign we craft is built around your specific business goals, industry needs, and target audience.",
  },
  {
    t: "Up-to-the-minute algorithm know-how",
    a: "Our experts stay current with every Google algorithm shift, so your SEO strategy is always optimized for what search engines want right now.",
  },
  {
    t: "Cross-industry experience",
    a: "From startups to global brands, our team brings a wide range of insights to every campaign, helping us tackle SEO from multiple perspectives.",
  },
  {
    t: "Analytics-driven execution",
    a: "We base every decision on real-time data, not guesswork. That means higher efficiency, smarter strategy, and measurable outcomes.",
  },
  {
    t: "Success with competitive keywords",
    a: "We help businesses rank for some of the toughest keywords in their niche, and we’ll do the same for you.",
  },
  {
    t: "Scalable for growth",
    a: "Whether you’re local or global, our solutions are built to grow alongside your business, with long-term success in mind.",
  },
  {
    t: "Ethical, long-term SEO",
    a: "No gimmicks. We use white-hat strategies that build sustainable authority and long-term trust with both users and search engines.",
  },
];

const L = (arr: string[]) => "• " + arr.join("\n• ");

const OFFER_TOPICS = [
  {
    label: "Audit and strategy",
    qs: [
      {
        q: "What is a technical SEO audit?",
        a: "A technical audit examines the behind-the-scenes setup of your site to identify any issues that might block search engines or affect user experience. We look at:\n" + L([
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
        ]),
      },
      {
        q: "What does an on-page SEO audit cover?",
        a: "This audit evaluates how well each individual page is optimized for both search engines and visitors. It includes:\n" + L([
          "Title tags and meta descriptions",
          "Heading tag hierarchy and structure",
          "Internal and outbound linking patterns",
          "Content depth, clarity, and keyword placement",
          "Technical checks like page load speed, schema markup, mobile optimization, canonical tags, and image SEO",
        ]),
      },
      {
        q: "What is an off-page SEO audit?",
        a: "Off-page audits help measure your brand’s authority across the web. We examine:\n" + L([
          "Strength and quality of your backlink profile",
          "Your domain and page authority scores",
          "Outreach, guest post, and link-building effectiveness",
          "Online presence and community engagement",
          "Any penalties or spammy link risks",
        ]),
      },
      {
        q: "How does competitor analysis help with SEO?",
        a: "It provides a benchmark for your own strategy. With competitive insights, we:\n" + L([
          "Pinpoint which keywords are bringing your rivals traffic",
          "Find content opportunities they’ve missed",
          "Analyze their backlink and content tactics",
          "Build smarter strategies that help you overtake them",
        ]),
      },
      {
        q: "How are high-intent keywords discovered?",
        a: "We categorize search terms based on user intent: whether they’re ready to buy (transactional), researching (informational), or looking for a brand (navigational). Using advanced tools like SEMrush and Ahrefs, we:\n" + L([
          "Identify valuable keywords with high conversion potential",
          "Align them with what your customers are looking for",
          "Analyze which terms are bringing in traffic for top competitors",
        ]),
      },
    ],
  },
  {
    label: "Technical SEO",
    qs: [
      {
        q: "How can website speed be improved for SEO?",
        a: "Improving page load times starts with identifying bottlenecks. We optimize and compress images, reduce server response times, and minify CSS and JavaScript files. Enabling browser caching and using a content delivery network (CDN) ensures assets load quickly from the closest server to your visitor. Together, these changes make pages feel instant.",
      },
      {
        q: "What is mobile SEO optimization?",
        a: "Mobile optimization is all about delivering a smooth experience on smartphones and tablets. We use responsive design to adapt layouts to different screens, streamline page elements to reduce load times, and ensure navigation and buttons are finger-friendly. Eliminating intrusive pop-ups and testing across devices guarantees that mobile visitors stay engaged.",
      },
      {
        q: "How do you improve crawlability and indexability?",
        a: "Search engines need clear pathways to find and record your content. We tidy up your site’s structure by fixing broken links, removing or consolidating duplicate pages, and organizing navigation into logical categories. A clean, up-to-date XML sitemap and a properly configured robots.txt file guide crawlers to every important page.",
      },
      {
        q: "What are canonical tags, and how do they fix duplicate content?",
        a: "When similar content appears under multiple URLs, like with tracking parameters, search engines can’t know which version to rank. A canonical tag points to your preferred URL, telling search engines to treat that page as the source. This prevents dilution of ranking signals and keeps your SEO focused on one authoritative address.",
      },
      {
        q: "How does HTTPS impact SEO?",
        a: "Switching to HTTPS locks down the data exchanged between your site and its visitors. Beyond protecting passwords and payment details, it’s a confirmed ranking signal: Google gives a slight boost to secure sites. We handle SSL certificate installation, update internal links, and resolve any mixed-content issues so the entire site benefits from improved security and trust.",
      },
      {
        q: "How do you manage 404 errors and redirects?",
        a: "Dead links frustrate users and waste search engine attention. We routinely scan for 404 errors and set up 301 redirects to guide visitors, and link equity, to the most relevant pages. For unavoidable 404s, we craft helpful error pages that suggest alternative content and keep users on your site.",
      },
    ],
  },
  {
    label: "Content marketing",
    qs: [
      {
        q: "What is an SEO content strategy?",
        a: "Every successful SEO campaign starts with the right plan. We analyze what your audience is searching for, then outline a series of cornerstone (pillar) pages and supporting cluster articles that guide users through their journey, building authority and driving conversions.",
      },
      {
        q: "How do you optimize blog posts for SEO?",
        a: "A well-optimized blog post combines useful information with strategic SEO. We weave target keywords naturally into titles, headers, and body text, add relevant internal links, write compelling meta tags, and include descriptive alt text for images, ensuring your content ranks and resonates.",
      },
      {
        q: "What are pillar content and topic clusters in SEO?",
        a: "Our method builds a central, in-depth pillar page on a key topic, then links out to related, narrower subtopics. This cluster structure improves site navigation, reinforces your expertise on key themes, and signals search engines that you’re a subject-matter leader.",
      },
      {
        q: "How do you identify content gaps for SEO?",
        a: "By comparing your existing content with competitors and audience search behavior, we pinpoint topics you haven’t covered. We then create targeted content to fill those gaps, capturing new search traffic and preventing your audience from turning to other sources.",
      },
      {
        q: "How can you optimize evergreen content?",
        a: "Evergreen pages drive consistent traffic over time, but they can grow stale. We routinely revisit high-performing articles to refresh statistics, examples, and keywords, giving your content a fresh boost in visibility and relevance.",
      },
      {
        q: "What is multilingual SEO, and why is it important?",
        a: "Reaching international audiences requires more than translation. We optimize each language version with local keyword research, correct hreflang tags, and culturally sensitive copy, helping you rank well in multiple regions.",
      },
    ],
  },
  {
    label: "Link building",
    intro:
      "Getting other websites to link to yours isn’t just good for SEO, it’s essential. But not all links are created equal. At OneImpact, we stay away from shortcuts. Instead, we take the white-hat route. That means we focus on real, relevant links that actually make sense, through solid content, smart outreach, and meaningful relationships.",
    qs: [
      {
        q: "Our off-page SEO approach",
        a: "Our off-page SEO approach is simple: we create stuff people want to link to and then help them find it. Take guest blogging, for example. When you contribute something valuable to another site in your field, not only do you reach a new audience, but you also build credibility. And a link back to your site helps search engines see your brand as trustworthy.",
      },
      {
        q: "Broken link building",
        a: "Broken links happen all the time. Webpages get deleted, moved, or changed, and those old, dead links don’t help anyone. We track down those broken links on relevant sites and offer a helpful piece of content from your site as a replacement. You’re doing the site owner a favor by cleaning up their content, and in return, you gain a quality backlink. It’s practical, smart, and a win on both sides.",
      },
      {
        q: "The skyscraper technique",
        a: "It sounds fancy, but the idea is straightforward. We look for content that’s doing really well in your space, the stuff that’s getting lots of links, and then we build something even better: more insights, more value, better design. Once it’s ready, we reach out to the folks linking to the original version and suggest they check out your upgraded version instead.",
      },
      {
        q: "Brand mentions and citations",
        a: "Not every link has to be clickable. Brand mentions and citations, just the name of your business showing up in the right places, also play a part. Even without a link, those mentions tell Google your business is being talked about. That helps with authority and especially with local SEO. Think of it as digital word of mouth.",
      },
      {
        q: "Digital PR and outreach",
        a: "Digital PR and outreach help you get in front of the right eyes. Whether it’s a niche blog, a media site, or a respected industry outlet, getting featured in the right spots can give your SEO a serious boost. These mentions often come with backlinks, but more importantly, they show search engines (and people) that you’re someone worth paying attention to.",
      },
    ],
  },
  {
    label: "Local SEO",
    qs: [
      {
        q: "Google Business Profile",
        a: "Your Google Business Profile is the first stop. If it’s not properly set up, you’re probably missing out on people searching nearby. We make sure the basics are tight: your name, location, phone, and site link. We also upload clear photos, pick the right categories, and keep it fresh with updates and offers. Replying to reviews and writing a keyword-friendly description? We handle those too.",
      },
      {
        q: "NAP consistency",
        a: "NAP is just Name, Address, Phone, and if those details don’t match across the internet, Google’s trust in your business drops. We comb through all your listings and fix any mismatch. It’s like reputation management, but for search engines.",
      },
      {
        q: "Citations",
        a: "Citations are spots around the web where your business gets mentioned: local blogs, directories, review sites. The more your business shows up, the more legit you look to search engines. Even if there’s no link, the mention counts.",
      },
      {
        q: "Reviews",
        a: "Positive, recent reviews show that real people trust you, and search engines love that. We help you encourage happy customers to leave feedback and make sure you’re responding, not with templates, but like a human.",
      },
      {
        q: "Local keywords",
        a: "Not just any keywords, but the local ones. If someone’s looking for a “marketing agency in Mumbai,” you want to be what shows up, not buried under global results. We work these search terms into your content naturally, across your site and listings, without sounding robotic.",
      },
    ],
  },
  {
    label: "E-commerce SEO",
    qs: [
      {
        q: "How do you optimize product pages for SEO?",
        a: "When we work on product pages, we think like the customer. What would they type into Google? What would make them click? We start with titles and descriptions that are actually helpful, not keyword dumps. Every product gets its own voice and answers real questions people might have. Photos are optimized too, with the right tags behind the scenes. We add reviews, FAQs, and related products to keep people exploring the site longer.",
      },
      {
        q: "How do you improve category page SEO?",
        a: "A bunch of product thumbnails alone won’t cut it. We add a bit of content that explains what the category is about, just enough to give search engines something to work with. Metadata and clean URLs are a must, and we make sure these pages are linked to smartly from other parts of the site, giving the page more weight in Google’s eyes.",
      },
      {
        q: "How do you optimize Amazon and Shopify listings for SEO?",
        a: "Each platform has its own rules. On Amazon, we craft titles that hit the right keywords but still read like something a real person would want to read. Bullet points are sharp and to the point, and descriptions focus on benefits, not just features. We use strong images, and A+ content where available. On Shopify, we clean up page layouts, weave keywords naturally into the content, and make the whole experience easy to navigate. Blogs help too, and we keep speed and mobile-friendliness tight.",
      },
      {
        q: "What is product schema markup, and how does it help SEO?",
        a: "Ever seen search results that show price, ratings, or whether something’s in stock? That’s schema at work. It’s a snippet of code we add to the product page that tells search engines what the page is about and the key details. It makes your result stand out on Google, which usually means more clicks.",
      },
      {
        q: "How do you fix duplicate content in e-commerce SEO?",
        a: "Duplicate content is common in online stores, especially when filters or manufacturer descriptions are involved. We mark the main version of each product page with a canonical tag so Google knows which one to rank. Where possible, we rewrite the content to give it originality. For pages that don’t need to be indexed, we add a noindex tag, so your site avoids confusion and penalties.",
      },
    ],
  },
  {
    label: "Enterprise SEO",
    qs: [
      {
        q: "What are scalable SEO strategies for large websites?",
        a: "Scalable SEO for large websites means creating sustainable systems that maintain performance as the site expands. This starts with a well-planned site architecture, allowing search engines to navigate content efficiently. Metadata is handled using templates to maintain consistency, while automated internal linking keeps user experience and SEO signals strong. The process also includes regular technical audits and strategic keyword mapping across page types, helping maintain visibility across thousands of URLs.",
      },
      {
        q: "How do you manage SEO for multiple business locations?",
        a: "When a business has more than one store or office, we don’t reuse the same content everywhere. Each location gets its own page, written with the words people there actually search for. We make sure your name, phone number, and address are exactly the same wherever they’re listed, manage a Google Business Profile for each location, and build links from nearby sites to help every location get found in its area.",
      },
      {
        q: "How does automation and AI help with SEO?",
        a: "Some parts of SEO are repetitive, like going through site errors or tracking keywords. AI tools handle that quickly: they scan your site and flag slow pages or trending keywords, which saves us a lot of effort. But we don’t let the tool run wild. We step in, use judgment, and tweak things based on what actually makes sense. Tools help, but people still drive the strategy.",
      },
      {
        q: "What is log file analysis in enterprise SEO?",
        a: "When Google’s bot visits your site, it leaves information in a log file. We look at it to see which pages it checked, how often it came by, and whether it hit any issues. It’s like reading behind-the-scenes notes. That helps us spot whether your important pages are being seen or ignored, and we adjust so the pages that matter most get crawled more often.",
      },
    ],
  },
  {
    label: "Voice and AI search",
    qs: [
      {
        q: "How do you optimize for conversational keywords in voice search?",
        a: "People don’t search the way they talk. They ask “What’s the best SEO service in Mumbai?” instead of typing “SEO service Mumbai.” So we think like that: longer, more natural sentences, and what a person would actually say. We answer those questions in a simple way, clear, short, and direct.",
      },
      {
        q: "What is featured snippet optimization for voice search?",
        a: "Snippets are the boxes that pop up at the top of Google, and voice assistants love grabbing information from them. We make it easy for Google to pick your answer: clear answers, bullet points, no fluff. A quick, simple answer that gets straight to the point.",
      },
      {
        q: "How do you optimize for voice assistants like Google Assistant, Siri, and Alexa?",
        a: "We create content that’s clear, conversational, and answers specific questions quickly. By using structured data (schema markup) and focusing on local SEO, we help your content become more accessible to these assistants.",
      },
    ],
  },
  {
    label: "Video SEO",
    qs: [
      {
        q: "How do you optimize YouTube video titles, descriptions, and tags?",
        a: "It starts with thinking like a viewer. We look at what someone might actually type in the search bar and shape the title around that. Descriptions stay natural, not overstuffed with keywords, just a quick summary with useful terms. Tags are about variations: different ways people might look for the same thing, so the video has a better shot at showing up.",
      },
      {
        q: "Why are transcripts and captions important for video SEO?",
        a: "Videos can’t really talk to Google, but text can. Adding captions or transcripts gives Google the words it needs to understand what the video is about, which helps with rankings. It also helps people, like someone who’s on mute or prefers reading along.",
      },
      {
        q: "How does embedding and schema markup improve video visibility?",
        a: "A video floating on its own doesn’t do much. Placed on a page that fits the topic, people stick around longer and engage with it, which tells Google it’s worth something. Schema is the behind-the-scenes information, like what the video shows and how long it is. It helps search engines understand the content and can lead to rich snippets in search.",
      },
      {
        q: "How do you design thumbnails to improve click-through rates?",
        a: "A good thumbnail makes you stop scrolling. We use clean images, bold colors where they fit, and a title that hints at what’s inside without overhyping it. It’s not just about views. It’s about making sure the right people click, because they actually care about what the video covers.",
      },
    ],
  },
  {
    label: "Mobile SEO and ASO",
    qs: [
      {
        q: "How do you test and fix mobile performance for SEO?",
        a: "We use tools like Google’s Mobile-Friendly Test and PageSpeed Insights to see how your site holds up on phones. They show us what’s off, maybe the page loads slowly, buttons are hard to tap, or the layout breaks. Then we fix the issues one by one: shrinking heavy images, removing extra code, tweaking the server for better speed, or making the design adapt smoothly across screen sizes. Your site should feel smooth and easy to use on any phone.",
      },
      {
        q: "What are Accelerated Mobile Pages (AMP), and why are they important?",
        a: "AMP is a way to make your pages very fast on mobile. Google is behind it, and the goal is speed. AMP cuts out the bulky stuff so your page loads in a flash. For mobile users, that means less waiting and more scrolling. For you, it means lower bounce rates and better odds of ranking higher in mobile search results.",
      },
      {
        q: "How can App Store Optimization (ASO) improve app rankings?",
        a: "Getting your app to show up in the App Store or Google Play takes more than uploading it. ASO fine-tunes your app’s name, description, keywords, visuals, and even user reviews. When people search for something similar, your app has a better shot at showing up. More visibility means more downloads, and when the app delivers a good experience, users tend to stick around.",
      },
    ],
  },
  {
    label: "International SEO",
    qs: [
      {
        q: "How do you implement hreflang tags for multilingual sites?",
        a: "Imagine running a restaurant in several countries with menus in different languages. How do you make sure customers are handed the right menu? That’s the role of hreflang tags. They’re small markers we add to your pages that tell search engines, “This version is for people in Spain, and this one is for those in Argentina.” Without them, search engines might show someone the wrong page. With hreflang, visitors get the right content in their language, wherever they are.",
      },
      {
        q: "What is geo-targeting, and why is it essential for local SEO?",
        a: "You’re in your city, looking for a coffee shop, and you don’t want results for cafes in another country. Geo-targeting ensures that when someone searches locally, they see options nearby. For businesses, it means only people in your area find you. We make that happen by keeping your Google Business Profile accurate and consistent and using local terms that make sense to people in your area.",
      },
      {
        q: "How do you choose between ccTLDs, subdomains, and subdirectories for SEO?",
        a: "Choosing how to organize your website is like deciding how to arrange your bookshelves. Here’s how we approach it:\n• ccTLDs (like .de or .fr) are best if you want to go all-in on specific countries, but you’ll handle SEO for each site separately, which is more work.\n• Subdomains (like fr.yoursite.com) help when you need to separate regions or languages, but search engines treat them as different websites, so they need their own SEO efforts.\n• Subdirectories (like yoursite.com/fr/) are often the easiest to manage. Everything sits under one domain, so you boost the SEO of your whole site, which is more efficient in the long run.",
      },
    ],
  },
  {
    label: "Analytics and reporting",
    qs: [
      {
        q: "How do you set up Google Analytics and GA4 to track website traffic?",
        a: "To set up GA4, we start by adding a unique tracking code to your website. From there, we define key events, such as page visits and conversions, and set up specific goals to monitor how visitors use your site. This gives us a clear view of user activity and helps shape your digital strategy.",
      },
      {
        q: "What is Google Search Console used for in SEO?",
        a: "Google Search Console is a vital tool for understanding how your website performs on Google. It shows us which search terms bring people to your site, alerts us to any crawling or indexing issues, and gives insight into how your pages are displayed in search results.",
      },
      {
        q: "How do you track keyword rankings and performance?",
        a: "We keep a close eye on how your keywords perform using reliable SEO tracking tools. They show us where your keywords rank, how often they’re clicked, and which pages they drive traffic to. With this information, we refine your SEO strategy to focus on the terms that deliver the best results.",
      },
      {
        q: "How can conversion rate optimization (CRO) improve landing pages?",
        a: "CRO increases the chances of visitors taking action, like making a purchase or filling out a form, by making landing pages more effective. This involves testing different headlines, layouts, and calls to action to remove friction and make the user journey smoother and more compelling.",
      },
      {
        q: "How do A/B testing and heatmaps help improve user experience?",
        a: "A/B testing lets us test two versions of a page to see which performs better. Heatmaps show exactly where users click, scroll, or lose interest. These tools help us make data-driven changes that improve usability and keep visitors engaged.",
      },
    ],
  },
  {
    label: "Competitor analysis",
    qs: [
      {
        q: "How do you identify your competitors in SEO?",
        a: "We pinpoint your SEO competitors by identifying websites that rank for the same search terms and attract a similar audience. With the help of advanced tools, we uncover both direct competitors and others who compete for search visibility, even if they’re not in the same niche.",
      },
      {
        q: "How can you find high-traffic keywords used by competitors?",
        a: "By analyzing competitor websites through specialized tools, we identify which keywords bring them the most traffic. This gives us valuable insights and helps uncover fresh keyword opportunities to strengthen your content strategy.",
      },
      {
        q: "What is backlink analysis in SEO?",
        a: "Backlink analysis involves reviewing the number and quality of external sites linking to yours. We examine your backlink profile, remove any toxic links that could harm your rankings, and look for ways to gain authoritative and relevant links to boost SEO performance.",
      },
      {
        q: "How do you analyze competitor content strategy?",
        a: "We study the types of content your competitors publish, how frequently they update it, and which pages perform best. This analysis helps us identify what’s missing in your content approach and where you can outshine the competition.",
      },
      {
        q: "How can you study competitor technical SEO and site architecture?",
        a: "We assess how your competitors organize their sites, from URL structure and mobile optimization to page load speeds and overall user experience. Understanding these factors helps us identify technical strengths you can adopt to improve your own rankings.",
      },
      {
        q: "How does social media affect SEO performance?",
        a: "While social media signals aren’t a direct ranking factor, they play an important role in generating website traffic, expanding brand reach, and increasing the likelihood of earning quality backlinks, all of which support your SEO success.",
      },
      {
        q: "How do you track SEO performance against competitors?",
        a: "We monitor and compare key SEO metrics like keyword rankings, traffic patterns, backlink growth, and content effectiveness. These comparisons help us track your progress and refine your strategy to maintain a competitive edge.",
      },
    ],
  },
  {
    label: "Keyword strategy",
    qs: [
      {
        q: "How do you find high-intent keywords for SEO?",
        a: "We focus on what people search for when they’re ready to take action, whether that’s making a purchase, scheduling a service, or getting in touch. We look for modifiers like “buy,” “best,” “near me,” or “services,” and validate them using tools such as Google Keyword Planner, along with insights from competitor analysis. This ensures we target terms with strong potential to drive conversions.",
      },
      {
        q: "What are long-tail keywords, and why are they important?",
        a: "Long-tail keywords are more detailed and specific phrases: think “affordable vegan cafes in Bandra” instead of simply “vegan cafes.” They tend to attract users who are further along in the buying process, face less competition, and usually convert better because their intent aligns closely with the content they find.",
      },
      {
        q: "What is LSI keyword integration in SEO?",
        a: "LSI (Latent Semantic Indexing) keywords are words and phrases that are contextually connected to your primary keyword. If your main keyword is “digital marketing,” relevant terms might include “online ads,” “SEO strategy,” or “social media campaigns.” We weave these into your content naturally to improve clarity for search engines and enrich the context.",
      },
      {
        q: "How do you find untapped keyword opportunities?",
        a: "We identify hidden keyword gems by studying competitor gaps, mining data from Google Search Console, and exploring online spaces like forums, Reddit, or industry-specific communities where your target audience spends time. This surfaces valuable search terms that are often overlooked by others.",
      },
      {
        q: "How do you optimize keywords based on search intent?",
        a: "We align keywords with what users intend to do: researching, comparing, or ready to act. Informational terms are placed in blog articles, while transactional phrases are reserved for product or service pages. This boosts both your search visibility and audience engagement.",
      },
      {
        q: "How can you target seasonal and trend-based keywords?",
        a: "Using tools like Google Trends and calendars tied to your industry, we spot when interest in certain keywords spikes. We then produce timely, relevant content, such as holiday guides, trend-focused blogs, or seasonal promotions, to capitalize on that demand and drive timely traffic.",
      },
      {
        q: "How do you optimize for question-based keywords in SEO?",
        a: "We go after question-style keywords like “how to improve SEO” by crafting content that offers direct, helpful answers. This includes FAQ sections, educational blog posts, and formats designed to land in featured snippets or Google’s “People Also Ask” results. It also enhances your visibility in voice search results.",
      },
    ],
  },
  {
    label: "Internal linking",
    qs: [
      {
        q: "What is strategic internal linking, and why is it important?",
        a: "Strategic internal linking connects different but related pages within your website using hyperlinks. It helps search engines understand how your site is structured, distributes page authority across your content, and improves user navigation. It guides users toward relevant information, which can improve your key pages’ rankings and lower your bounce rate.",
      },
      {
        q: "How does the topic cluster strategy help with internal linking?",
        a: "A topic cluster centers on a primary page (the pillar content), supported by multiple related sub-pages (cluster content), all linked to one another. This improves the user’s journey through your content and signals to search engines that your pages are interconnected and relevant, boosting the SEO performance of the entire cluster.",
      },
      {
        q: "How do you fix broken internal links on a website?",
        a: "Broken internal links hurt both search rankings and user experience. To resolve them:\n• Use SEO tools like Google Search Console or Screaming Frog to locate the broken links.\n• If the original page has simply moved, update the URL to the correct location.\n• If the page no longer exists, create a redirect to a similar or relevant page.\n• If there’s no valid alternative, remove the link entirely.",
      },
      {
        q: "What are orphan pages, and how do you optimize them?",
        a: "Orphan pages exist on your website but aren’t linked to from any other page. Since they’re not part of your internal linking structure, search engines may overlook them. We run an SEO audit to find them, then connect them to relevant content with internal links, making them accessible to users and visible to search engines.",
      },
      {
        q: "How can breadcrumb optimization improve SEO?",
        a: "Breadcrumbs give users a visual trail of where they are on your website, making navigation easier. When optimized, they give search engines a clearer picture of your site’s hierarchy. This improves crawlability and can lead to rich snippets in search results, which often boosts click-through rates.",
      },
      {
        q: "How do you automate internal linking for large websites?",
        a: "On large websites, managing internal links manually becomes impractical. Automation can streamline the process through:\n• SEO plugins or CMS features that automatically suggest or add links based on target keywords.\n• Custom-built tools or scripts that detect linking opportunities across your content.",
      },
    ],
  },
  {
    label: "Schema markup",
    qs: [
      {
        q: "How do you optimize content for featured snippets?",
        a: "We focus on the way users ask questions and tailor the content to provide direct, useful answers. This involves clear headers, simple and to-the-point language, and bulleted lists where appropriate. Google tends to feature responses that are easy to understand and well-organized. We also make sure the content is not only relevant but backed by authority.",
      },
      {
        q: "What is schema markup, and how does it help SEO?",
        a: "Schema markup is structured data added to your website’s code. It helps search engines better grasp what your content is about. With schema, you can make your search listings stand out with rich elements like review stars, FAQs, and event information, features that catch users’ eyes and can drive more clicks.",
      },
      {
        q: "How do you implement JSON-LD for structured data?",
        a: "JSON-LD is Google’s preferred method for adding structured data. We create customized code based on the content you’re offering, whether it’s a blog post, product listing, or FAQ page, and add it within a script tag on the page, usually in the header or body. This makes the data easy for search engines to process and display properly.",
      },
      {
        q: "How do you test schema markup for correct implementation?",
        a: "We use tools like Google’s Rich Results Test and the Schema Markup Validator. They check whether your structured data qualifies for enhanced search features and point out any issues or errors that need to be fixed.",
      },
    ],
  },
  {
    label: "AI-optimized SEO (AIO)",
    qs: [
      {
        q: "How can AI help in content creation for SEO?",
        a: "Artificial intelligence plays a key role in crafting effective SEO content by studying current search trends, evaluating competitor strategies, and understanding user behavior. It provides suggestions and ideas that match what users are actively looking for, helping us produce highly relevant and visible content.",
      },
      {
        q: "How does AI predict SEO ranking trends?",
        a: "By processing extensive datasets, AI identifies emerging patterns in keyword usage, shifts in search habits, and algorithm changes. These insights allow us to anticipate which types of content and tactics are likely to gain traction in upcoming search engine updates.",
      },
      {
        q: "How do AI tools automate meta tag and description generation?",
        a: "AI helps generate precise, keyword-focused meta titles and descriptions by analyzing the content of each page. It pinpoints the most relevant terms and phrases, making the process quicker and ensuring each meta tag supports better visibility and aligns with search intent.",
      },
      {
        q: "How can AI chatbots improve user engagement on a website?",
        a: "AI-driven chatbots enhance user experience by offering real-time assistance, answering common questions, and guiding visitors through the site at any hour. This continuous support keeps users engaged, encourages longer visits, and contributes positively to the site’s SEO performance.",
      },
      {
        q: "How do you optimize for voice search using AI?",
        a: "We use AI tools to discover the kinds of questions people ask their voice assistants and identify natural, conversational phrases. Using this information, we develop content that mimics everyday speech and provides clear, direct answers that suit voice-based queries.",
      },
      {
        q: "How does AI improve SEO reporting and insights?",
        a: "AI simplifies the interpretation of complex SEO data by highlighting which areas are performing well and which need attention. It tracks keyword movement, monitors user behavior, and evaluates content effectiveness, allowing us to refine strategies with real-time, data-backed decisions.",
      },
    ],
  },
];

const MAP_ROWS = [
  {
    n: "1",
    name: "Your Business Name",
    meta: "4.9 ★ (120+) · SEO & Digital Marketing · Open now",
    pin: "#FFBA39",
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

const FAQ_GROUPS = [
  {
    label: "Business obstacles",
    qs: [
      {
        q: "Why aren’t we getting enough sales from online channels?",
        a: "If your site attracts the wrong kind of traffic or doesn’t clearly show value, your sales can suffer. Weak CTAs or missing conversion strategies are often to blame. Start by examining user behavior, improving targeting, and experimenting with your messaging and landing pages.",
      },
      {
        q: "How can we increase our online brand awareness and visibility?",
        a: "Create and share content your audience finds useful: blogs, videos, and infographics. Spread it through social media and collaborate with influencers. Earning backlinks from trusted sites also boosts your brand’s reach and credibility.",
      },
      {
        q: "Why is our website not reaching our target audience or appearing in relevant searches?",
        a: "You might not be targeting the right keywords, or your content may lack depth or relevance. Technical SEO issues like slow site speed or crawl errors can also block visibility. A detailed SEO audit and strong, focused content can help get you on the radar.",
      },
      {
        q: "How can we differentiate ourselves from competitors in search results?",
        a: "Use unique selling points (USPs) in your page titles and meta descriptions. Focus on specific, long-tail keywords and add schema markup, like review ratings, to visually stand out in search listings.",
      },
      {
        q: "Why is our online store not generating enough traffic?",
        a: "If you’re not getting organic search visibility or investing in promotion, traffic will be low. Combine SEO, pay-per-click ads, and product-centered content to bring qualified visitors to your site.",
      },
      {
        q: "How can we improve our website’s SEO to drive more relevant traffic?",
        a: "Start with smart keyword research. Refine your titles and headings, write authoritative content, speed up your site, make sure it’s mobile-friendly, and build high-quality backlinks for credibility.",
      },
      {
        q: "How can we ensure we rank higher for local searches and reach local customers?",
        a: "Claim and fully optimize your Google Business Profile. Keep your name, address, and phone number consistent everywhere. Gather genuine local reviews and publish content focused on your specific city or neighborhood.",
      },
      {
        q: "Why aren’t our marketing efforts converting into actual customers?",
        a: "If your message doesn’t align with user intent or your landing pages don’t guide users clearly, conversions drop. Check that your calls-to-action are compelling and that your site supports an easy, logical buying journey.",
      },
      {
        q: "How can we improve the user experience to reduce bounce rates and increase engagement?",
        a: "Make sure your site loads quickly, works great on mobile, and is easy to navigate. Use eye-catching visuals and strong CTAs. Tools like heat maps and usability tests can help identify where users get stuck.",
      },
      {
        q: "Why is our online advertising not delivering a strong ROI?",
        a: "Broad or poorly targeted ads, weak creatives, and missing conversion tracking can all limit ROI. Improve audience segmentation, A/B test your ads, make sure analytics are set up properly, and invest more in high-performing campaigns.",
      },
      {
        q: "How can we improve customer acquisition through our website and drive more conversions?",
        a: "Make your value clear, simplify your forms, include testimonials and trust elements, and use offers like free trials or discounts. Retarget users who showed interest but didn’t convert the first time.",
      },
      {
        q: "Why is our e-commerce site not performing well despite strong products?",
        a: "Great products need more than a listing. You need persuasive copy, quality visuals, intuitive navigation, visible trust signals, and a seamless checkout to turn visitors into customers.",
      },
      {
        q: "Why is our website not converting traffic into repeat customers?",
        a: "Without follow-up tactics like email sequences, loyalty programs, and personalized suggestions, customers may not return. Re-engage them with exclusive offers and tailored experiences after purchase.",
      },
      {
        q: "Why isn’t our website ranking on search engines for important keywords?",
        a: "Your content might be too shallow, your on-page SEO may be lacking, or you may need more backlinks. Analyze your top competitors, find the gaps, and enhance your content and authority.",
      },
      {
        q: "Why are our blog posts not getting enough traffic, and how can we optimize them to rank better?",
        a: "You may be targeting the wrong keywords or not using internal and external links effectively. Choose better topics with keyword tools, refine your meta titles and descriptions, structure posts with clear headings, and promote your content through outreach.",
      },
    ],
  },
  {
    label: "Why OneImpact",
    qs: [
      {
        q: "How does OneImpact tailor SEO strategies for maximum ROI?",
        a: "We begin with a deep dive into your market, audience, and competitors. From there, we build a custom SEO plan that targets the keywords, content themes, and technical improvements most likely to deliver tangible, profitable results for your business.",
      },
      {
        q: "How will OneImpact improve my online visibility and customer engagement?",
        a: "We fine-tune your site’s structure, produce strategic, audience-focused content, and apply proven on-page and off-page SEO techniques. This helps your brand appear in the right searches and keeps users interested and engaged once they land on your site.",
      },
      {
        q: "How does OneImpact optimize websites for search engines and users to maximize conversions?",
        a: "We strike the right balance between technical performance and user experience. From fast-loading pages and mobile responsiveness to persuasive messaging and calls-to-action, our work enhances both your visibility in search engines and your site’s ability to convert visitors.",
      },
      {
        q: "What measurable results can I expect with OneImpact’s CRO-focused SEO?",
        a: "You’ll see clear, trackable progress, like more organic traffic, reduced bounce rates, longer site visits, and higher conversion rates. We deliver detailed reports so you can see how our work translates into leads, sales, and growth.",
      },
      {
        q: "How can OneImpact optimize my site to attract high-converting traffic?",
        a: "We pinpoint keywords that signal buying intent, create landing pages tailored to your ideal customer profiles, and enhance your technical SEO so your highest-value pages perform best. The result is a steady flow of users who are ready to take action.",
      },
      {
        q: "How does OneImpact ensure that my site ranks for the most relevant, high-converting keywords?",
        a: "Through in-depth keyword research, we focus on search terms that blend strong volume, low competition, and clear user intent. We continually optimize and update content so your site maintains strong positions for keywords that matter most to your bottom line.",
      },
      {
        q: "Why should I trust OneImpact to increase website traffic and sales?",
        a: "We help brands across industries grow their visibility and revenue through results-driven SEO. Our work is backed by data, built on strategy, and guided by experience, giving you the confidence that every move we make is grounded in real performance goals.",
      },
      {
        q: "What makes OneImpact’s approach to SEO different from other agencies?",
        a: "Unlike cookie-cutter SEO solutions, our approach combines deep technical know-how with conversion expertise. We don’t just chase rankings. We focus on outcomes that actually move the needle for your business.",
      },
      {
        q: "Why is OneImpact the right choice for improving my brand’s local SEO performance?",
        a: "Our team specializes in optimizing for local visibility. From fine-tuning your Google Business Profile to building city-specific content and cleaning up citations, we help your business show up when local customers search for services you offer.",
      },
      {
        q: "What strategies does OneImpact use to convert organic traffic into paying customers?",
        a: "We craft persuasive on-page content, design smooth user journeys, run A/B tests for continuous improvement, and create strong internal links that guide users where you want them to go, turning interest into action and visitors into loyal customers.",
      },
    ],
  },
];

export default function SeoLandingPage() {
  // State for Service tabs (Organic vs Platform)
  const [svcIdx, setSvcIdx] = useState(0);

  // State for Offer tabs (17 categories)
  const [offerIdx, setOfferIdx] = useState(0);

  // State for FAQ tabs (Obstacles vs Why)
  const [faqIdx, setFaqIdx] = useState(0);

  // Carousel track state
  const [carIdx, setCarIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Form 1 (Hero)
  const [name1, setName1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [url1, setUrl1] = useState("");
  const [need1, setNeed1] = useState("Not sure yet");
  const [touched1, setTouched1] = useState<{ name?: boolean; phone?: boolean; url?: boolean }>({});
  const [sent1, setSent1] = useState(false);

  // Form 2 (Bottom)
  const [name2, setName2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [url2, setUrl2] = useState("");
  const [touched2, setTouched2] = useState<{ name?: boolean; phone?: boolean; url?: boolean }>({});
  const [sent2, setSent2] = useState(false);

  // Form 1 validations
  const isUrlValid = (val: string) => /[a-z0-9-]+\.[a-z]{2,}/i.test(val.trim());
  const isPhoneValid = (val: string) => val.replace(/\D/g, "").length >= 10;
  const isNameValid = (val: string) => val.trim().length > 0;

  const showName1Err = touched1.name && !isNameValid(name1);
  const showPhone1Err = touched1.phone && !isPhoneValid(phone1);
  const showUrl1Err = touched1.url && !isUrlValid(url1);

  const showName2Err = touched2.name && !isNameValid(name2);
  const showPhone2Err = touched2.phone && !isPhoneValid(phone2);
  const showUrl2Err = touched2.url && !isUrlValid(url2);

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched1({ name: true, phone: true, url: true });
    if (isNameValid(name1) && isPhoneValid(phone1) && isUrlValid(url1)) {
      setSent1(true);
    }
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched2({ name: true, phone: true, url: true });
    if (isNameValid(name2) && isPhoneValid(phone2) && isUrlValid(url2)) {
      setSent2(true);
    }
  };

  // Carousel scroll helpers
  const scrollCarousel = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardWidth = 336; // 320px + 16px gap
    const newIdx = dir === "next" 
      ? Math.min(USP_CARDS.length - 1, carIdx + 1)
      : Math.max(0, carIdx - 1);
    setCarIdx(newIdx);
    trackRef.current.scrollTo({
      left: newIdx * cardWidth,
      behavior: "smooth",
    });
  };

  const handleTrackScroll = () => {
    if (!trackRef.current) return;
    const cardWidth = 336;
    const idx = Math.round(trackRef.current.scrollLeft / cardWidth);
    setCarIdx(Math.min(USP_CARDS.length - 1, Math.max(0, idx)));
  };

  const activeOffer = OFFER_TOPICS[offerIdx];
  const activeFaqGroup = FAQ_GROUPS[faqIdx];
  const activeServices = SVC_GROUPS[svcIdx];

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
      <style jsx global>{`
        .seo-landing-root * {
          box-sizing: border-box;
        }
        .seo-landing-root a {
          color: #000000;
          transition: color 150ms ease;
        }
        .seo-landing-root a:hover {
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
          background-color: #ffc75e !important;
        }
        .seo-landing-root :focus-visible {
          outline: 3px solid #7baaff;
          outline-offset: 3px;
        }
        .seo-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .seo-landing-root .fd:focus {
          outline: none;
          border-color: #ffba39 !important;
          box-shadow: 0 0 0 4px rgba(255, 186, 57, 0.3);
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
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(32px, 5vw, 80px);
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
          .seo-landing-root .hero-grid {
            grid-template-columns: minmax(0, 1fr) !important;
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

      {/* ── TOP ANNOUNCEMENTS MARQUEE ────────────────────────────────────────── */}
      <div
        aria-label="Announcements"
        style={{
          background: "#000000",
          color: "#FFFFFF",
          height: "38px",
          display: "flex",
          alignItems: "center",
          fontSize: "13.5px",
          fontWeight: 500,
          letterSpacing: 0,
        }}
      >
        <div className="marqwrap" style={{ overflow: "hidden", width: "100%" }}>
          <div className="marq2" style={{ display: "flex", width: "max-content", alignItems: "center" }}>
            {[...NOTICES, ...NOTICES].map((notice, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "0 30px",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#FFBA39",
                  }}
                />
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY GLASS HEADER / NAVBAR ──────────────────────────────────────── */}
      <header
        className="glass"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        <nav
          aria-label="Main"
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 clamp(16px, 3vw, 32px)",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Link href="/" aria-label="One Impact home" style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGO/oneimpact-logo.png"
              alt="One Impact"
              style={{ display: "block", height: "30px", width: "auto" }}
            />
          </Link>

          <div className="navlinks" style={{ fontSize: "14px", letterSpacing: 0 }}>
            <a href="#why" style={{ color: "#3A3A3C", textDecoration: "none" }}>
              Why SEO
            </a>
            <a href="#services" style={{ color: "#3A3A3C", textDecoration: "none" }}>
              Services
            </a>
            <a href="#offer" style={{ color: "#3A3A3C", textDecoration: "none" }}>
              What we offer
            </a>
            <a href="#local" style={{ color: "#3A3A3C", textDecoration: "none" }}>
              Local SEO
            </a>
            <a href="#faq" style={{ color: "#3A3A3C", textDecoration: "none" }}>
              FAQs
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              className="navcall"
              href="https://wa.me/918369018104"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "14px", color: "#3A3A3C", textDecoration: "none", letterSpacing: 0 }}
            >
              WhatsApp us
            </a>
            <a
              className="press y"
              href="#audit"
              style={{
                background: "#FFBA39",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: 0,
                padding: "8px 16px",
                borderRadius: "999px",
                minHeight: "36px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Free SEO audit
            </a>
          </div>
        </nav>
        <div
          aria-hidden="true"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent)",
          }}
        />
      </header>

      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#FFFFFF" }}>
        {/* Glow ambient blurs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "40px",
            right: "6%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "#FFBA39",
            opacity: 0.55,
            filter: "blur(70px)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "260px",
            right: "24%",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "#7BAAFF",
            opacity: 0.55,
            filter: "blur(80px)",
          }}
        />

        <div
          className="hero-grid"
          style={{
            position: "relative",
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "clamp(40px, 7vw, 96px) clamp(16px, 3vw, 32px) clamp(56px, 8vw, 112px)",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <span style={{ fontSize: "17px", fontWeight: 600, color: "#6E6E73", letterSpacing: "-0.01em" }}>
              SEO services by OneImpact
            </span>

            <h1
              className="seo-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.8rem, 5.8vw, 5rem)",
                lineHeight: 1.03,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              Smart, Search‑First SEO That Brings Lasting Results
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(1.2rem, 1.9vw, 1.55rem)",
                lineHeight: 1.3,
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Rank Higher. Beat the Competition. Grow Organically with Us.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#3A3A3C", maxWidth: "50ch" }}>
              At OneImpact, we treat SEO as a mission to fuel your business’s digital success, not just another
              service. We’re committed to delivering clarity and measurable growth through focused, strategic SEO
              tailored to your needs.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#3A3A3C", maxWidth: "50ch" }}>
              Outperform your competition with OneImpact’s reliable and results-driven SEO services.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", paddingTop: "4px" }}>
              <a
                className="press"
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "17px",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  minHeight: "50px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(0,0,0,0.06)",
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
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: "17px",
                  textDecoration: "none",
                  padding: "13px 4px",
                  minHeight: "50px",
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

          {/* Right Column: Hero Audit Card Form */}
          <div
            id="audit"
            className="form-card"
            style={{
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(30px) saturate(160%)",
              WebkitBackdropFilter: "blur(30px) saturate(160%)",
              color: "#FFFFFF",
              borderRadius: "32px",
              padding: "clamp(24px, 3.2vw, 36px)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.12) inset, 0 50px 100px -40px rgba(0,0,0,0.55), 0 20px 40px -24px rgba(0,0,0,0.35)",
            }}
          >
            {!sent1 ? (
              <form
                onSubmit={handleSubmit1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#FFBA39", letterSpacing: 0 }}>
                    Free for your website
                  </span>
                  <h2
                    className="seo-heading"
                    style={{
                      margin: 0,
                      fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.035em",
                      fontWeight: 700,
                    }}
                  >
                    Get your free SEO audit
                  </h2>
                  <p style={{ margin: 0, fontSize: "15.5px", color: "#C7C7CC", letterSpacing: 0 }}>
                    A real person from our team reviews your website and gets back to you.
                  </p>
                </div>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-name" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Your name
                  </label>
                  <input
                    id="hero-name"
                    className="fd"
                    type="text"
                    autoComplete="name"
                    placeholder="First and last name"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, name: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showName1Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showName1Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter your name so we know who to reply to
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Phone or WhatsApp number
                  </label>
                  <input
                    id="hero-phone"
                    className="fd"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="98XXX XXXXX"
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, phone: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showPhone1Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showPhone1Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter a 10-digit mobile number
                    </span>
                  )}
                </div>

                {/* Website address */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-url" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Website address
                  </label>
                  <input
                    id="hero-url"
                    className="fd"
                    type="text"
                    placeholder="yourbrand.com"
                    value={url1}
                    onChange={(e) => setUrl1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, url: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showUrl1Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showUrl1Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter your website address, like yourbrand.com
                    </span>
                  )}
                </div>

                {/* Need dropdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-need" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    What do you need? <span style={{ color: "#8E8E93" }}>(optional)</span>
                  </label>
                  <select
                    id="hero-need"
                    className="fd"
                    value={need1}
                    onChange={(e) => setNeed1(e.target.value)}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 14px",
                      borderRadius: "14px",
                      border: "1.5px solid #3A3A3C",
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
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

                {/* Submit button */}
                <button
                  type="submit"
                  className="press y btn-sheen"
                  style={{
                    font: "inherit",
                    fontSize: "17px",
                    fontWeight: 650,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                    background: "#FFBA39",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "54px",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Get my free SEO audit
                </button>

                <span style={{ fontSize: "13px", color: "#8E8E93", textAlign: "center", letterSpacing: 0 }}>
                  No spam, no sales scripts. We’ll reply on WhatsApp or call.
                </span>
              </form>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "12px 0",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#FFBA39",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3
                  role="status"
                  className="seo-heading"
                  style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}
                >
                  Audit requested
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name1}. We’ll review {url1} and get in touch on {phone1}.
                </p>
                <button
                  type="button"
                  className="press"
                  onClick={() => {
                    setSent1(false);
                    setName1("");
                    setPhone1("");
                    setUrl1("");
                    setTouched1({});
                  }}
                  style={{
                    font: "inherit",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    background: "rgba(255,255,255,0.12)",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "44px",
                    padding: "8px 18px",
                    cursor: "pointer",
                  }}
                >
                  Request another audit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BRANDS WE WORK WITH MARQUEE ───────────────────────────────────────── */}
      <section aria-label="Brands we work with" style={{ padding: "0 0 clamp(56px, 7vw, 88px)" }}>
        <p style={{ margin: "0 0 22px", fontSize: "14px", color: "#6E6E73", textAlign: "center", letterSpacing: 0 }}>
          Brands we work with
        </p>
        <div
          className="marqwrap"
          style={{
            overflow: "hidden",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)",
          }}
        >
          <div
            className="marq"
            style={{ display: "flex", gap: "72px", width: "max-content", alignItems: "center" }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{
                    display: "block",
                    height: "38px",
                    width: "auto",
                    maxWidth: "140px",
                    objectFit: "contain",
                    opacity: 0.65,
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHY ONEIMPACT / USPs CAROUSEL ────────────────────────── */}
      <section id="usps" style={{ background: "#F5F5F7", padding: "clamp(72px, 10vw, 128px) 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2
                className="seo-heading"
                style={{
                  margin: 0,
                  fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                  maxWidth: "16ch",
                }}
              >
                SEO that fits your business. Not a template.
              </h2>
              <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "50ch" }}>
                Swipe through what you get with OneImpact as your SEO services provider.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                type="button"
                className="press"
                aria-label="Previous"
                onClick={() => scrollCarousel("prev")}
                disabled={carIdx === 0}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: 0,
                  background: "rgba(0,0,0,0.08)",
                  color: "#000000",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                className="press"
                aria-label="Next"
                onClick={() => scrollCarousel("next")}
                disabled={carIdx >= USP_CARDS.length - 1}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: 0,
                  background: "rgba(0,0,0,0.08)",
                  color: "#000000",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
          <div
            className="car-view"
            ref={trackRef}
            onScroll={handleTrackScroll}
            aria-roledescription="carousel"
            aria-label="Top reasons to choose OneImpact"
          >
            <div className="car-track">
              {USP_CARDS.map((u, i) => (
                <div
                  key={i}
                  className="car-card"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "28px",
                    padding: "30px 28px",
                    minHeight: "290px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "28px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  }}
                >
                  <span
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                      background: u.chip,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={u.d} />
                    </svg>
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3
                      className="seo-heading"
                      style={{
                        margin: 0,
                        fontSize: "28px",
                        letterSpacing: "-0.04em",
                        fontWeight: 700,
                        lineHeight: 1.1,
                      }}
                    >
                      {u.head}
                    </h3>
                    <p style={{ margin: 0, fontSize: "17px", color: "#3A3A3C" }}>{u.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div
            aria-hidden="true"
            style={{
              marginTop: "28px",
              height: "4px",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.08)",
              maxWidth: "240px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((carIdx + 1) / USP_CARDS.length) * 100}%`,
                background: "#000000",
                borderRadius: "999px",
                transition: "width 400ms cubic-bezier(0.32,0.72,0,1)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROOF / E-E-A-T FRAMEWORK & CLIENT TESTIMONIALS ────────── */}
      <section
        id="proof"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            alignItems: "center",
          }}
        >
          <h2
            className="seo-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            Having a website or posting on social media won’t cut it anymore.
          </h2>
          <p style={{ margin: 0, fontSize: "21px", lineHeight: 1.45, color: "#3A3A3C" }}>
            Today’s digital success depends on having a precise SEO strategy that makes your brand visible when and
            where it matters.
          </p>
          <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#6E6E73" }}>
            At OneImpact, our mission is to create meaningful and lasting change for our clients. As a search engine
            optimization agency, we focus on building custom strategies that grow organic traffic, improve search
            visibility, and bring in qualified leads using intent-based keyword targeting.
          </p>
        </div>

        {/* E-E-A-T Header */}
        <div
          style={{
            marginTop: "clamp(56px, 7vw, 88px)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            textAlign: "center",
          }}
        >
          <h3
            className="seo-heading"
            style={{ margin: 0, fontSize: "clamp(1.5rem, 2.4vw, 2rem)", letterSpacing: "-0.035em", fontWeight: 700 }}
          >
            At OneImpact, we follow the E-E-A-T framework
          </h3>
          <p style={{ margin: "0 0 28px", color: "#6E6E73" }}>
            Experience, Expertise, Authoritativeness, Trustworthiness
          </p>
        </div>

        {/* E-E-A-T Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "16px",
            maxWidth: "1040px",
            margin: "0 auto",
          }}
        >
          {EEAT_CARDS.map((e, idx) => (
            <div
              key={idx}
              style={{
                background: "#F5F5F7",
                borderRadius: "28px",
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                aria-hidden="true"
                className="seo-heading"
                style={{
                  fontSize: "88px",
                  lineHeight: 0.9,
                  fontWeight: 700,
                  letterSpacing: "-0.06em",
                  color: "#000000",
                }}
              >
                {e.k}
              </span>
              <span
                aria-hidden="true"
                style={{ width: "32px", height: "4px", borderRadius: "999px", background: "#FFBA39" }}
              />
              <h4
                className="seo-heading"
                style={{ margin: "6px 0 0", fontSize: "21px", letterSpacing: "-0.025em", fontWeight: 700 }}
              >
                {e.t}
              </h4>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px" }}>{e.a}</p>
            </div>
          ))}
        </div>

        {/* Client Quotes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {QUOTES.map((q, idx) => (
            <figure
              key={idx}
              style={{
                margin: 0,
                background: "#FFFFFF",
                border: "1px solid #E5E5EA",
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ display: "inline-flex", gap: "3px", color: "#FFBA39" }} aria-label="Rated 5 out of 5">
                  {[...Array(5)].map((_, sIdx) => (
                    <svg key={sIdx} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />
                    </svg>
                  ))}
                </span>
                <blockquote
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    lineHeight: 1.45,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  “{q.text}”
                </blockquote>
              </div>
              <figcaption style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/LOGO/oneimpact-logo.png"
                  alt="Client logo"
                  style={{ display: "block", height: "20px", width: "auto", opacity: 0.7 }}
                />
                <span style={{ fontSize: "14.5px", color: "#6E6E73", lineHeight: 1.3, letterSpacing: 0 }}>
                  {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: HOW OPTIMIZING FOR SEO HELPS ────────────────────────── */}
      <section
        id="why"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
          <h2
            className="seo-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            How optimizing for SEO helps
          </h2>
          <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73" }}>
            Here’s what happens when you optimize for SEO:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "16px",
          }}
        >
          {HELPS_CARDS.map((h, i) => (
            <div
              key={i}
              style={{
                background: "#F5F5F7",
                borderRadius: "28px",
                padding: "30px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: h.chip,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={h.d} />
                </svg>
              </span>
              <h3
                className="seo-heading"
                style={{
                  margin: "4px 0 0",
                  fontSize: "22px",
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {h.t}
              </h3>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16.5px" }}>{h.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: BUT WHY ONEIMPACT? ─────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <h2
          className="seo-heading"
          style={{
            margin: "0 0 40px",
            fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          But why OneImpact?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "14px",
          }}
        >
          {BUT_WHY_CARDS.map((w, idx) => (
            <div
              key={idx}
              style={{
                background: "#F5F5F7",
                borderRadius: "24px",
                padding: "26px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: w.chip,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h3
                className="seo-heading"
                style={{
                  margin: "4px 0 0",
                  fontSize: "19px",
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                {w.t}
              </h3>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px" }}>{w.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: EXPLORE OUR SEO SERVICES ────────────────────────────── */}
      <section
        id="services"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "12px",
          }}
        >
          <h2
            className="seo-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              maxWidth: "14ch",
            }}
          >
            Explore our SEO services
          </h2>

          {/* Segmented Switcher for Services */}
          <div
            role="tablist"
            aria-label="Service groups"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              background: "#E8E8ED",
              borderRadius: "999px",
              padding: "3px",
              width: "min(400px, 100%)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "3px",
                bottom: "3px",
                left: "3px",
                width: "calc((100% - 6px) / 2)",
                transform: `translateX(${svcIdx * 100}%)`,
                transition: "transform 420ms cubic-bezier(0.32,0.72,0,1)",
                background: "#FFFFFF",
                borderRadius: "999px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.04)",
              }}
            />
            {SVC_GROUPS.map((grp, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                className="press"
                aria-selected={svcIdx === i}
                onClick={() => setSvcIdx(i)}
                style={{
                  position: "relative",
                  zIndex: 1,
                  font: "inherit",
                  fontSize: "15px",
                  fontWeight: svcIdx === i ? 600 : 500,
                  color: "#000000",
                  background: "transparent",
                  border: 0,
                  borderRadius: "999px",
                  minHeight: "42px",
                  padding: "8px 14px",
                  cursor: "pointer",
                }}
              >
                {grp.label}
              </button>
            ))}
          </div>
        </div>

        <p style={{ margin: "0 0 32px", fontSize: "19px", color: "#6E6E73", maxWidth: "56ch" }}>
          Curious about what else we bring to the table? Here’s a deeper look at our SEO offerings.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "14px",
          }}
        >
          {activeServices.items.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5EA",
                borderRadius: "24px",
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                boxShadow: "0 20px 40px -32px rgba(0,0,0,0.3)",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: s.dot }}
              />
              <h3
                className="seo-heading"
                style={{ margin: 0, fontSize: "21px", letterSpacing: "-0.03em", fontWeight: 700 }}
              >
                {s.t}
              </h3>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px" }}>{s.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 9: WHY ONEIMPACT YELLOW BANNER ─────────────────────────── */}
      <section
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <div style={{ background: "#FFBA39", borderRadius: "36px", padding: "clamp(28px, 5vw, 64px)" }}>
          <h2
            className="seo-heading"
            style={{
              margin: "0 0 36px",
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            Why OneImpact?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
              gap: "12px",
            }}
          >
            {WHY2_POINTS.map((w, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h3
                  className="seo-heading"
                  style={{
                    margin: 0,
                    fontSize: "18.5px",
                    letterSpacing: "-0.025em",
                    fontWeight: 700,
                    lineHeight: 1.25,
                  }}
                >
                  {w.t}
                </h3>
                <p style={{ margin: 0, color: "#3A3A3C", fontSize: "15.5px" }}>{w.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: WHAT WE OFFER (ACCORDIONS) ─────────────────────────── */}
      <section
        id="offer"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <h2
          className="seo-heading"
          style={{
            margin: "0 0 12px",
            fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          What we offer
        </h2>
        <p style={{ margin: "0 0 28px", fontSize: "19px", color: "#6E6E73" }}>
          Pick a topic to see exactly how we approach it.
        </p>

        {/* Horizontal Topic Pill Row */}
        <div className="scrollrow" role="tablist" aria-label="Offer topics">
          {OFFER_TOPICS.map((t, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className="press"
              aria-selected={offerIdx === i}
              onClick={() => setOfferIdx(i)}
              style={{
                font: "inherit",
                fontSize: "15px",
                fontWeight: offerIdx === i ? 600 : 500,
                color: "#000000",
                background: offerIdx === i ? "#FFBA39" : "#FFFFFF",
                border: `1.5px solid ${offerIdx === i ? "#000000" : "#D2D2D7"}`,
                borderRadius: "999px",
                minHeight: "44px",
                padding: "8px 18px",
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Offer Accordions Tabpanel */}
        <div
          role="tabpanel"
          style={{
            marginTop: "20px",
            background: "#F5F5F7",
            borderRadius: "28px",
            padding: "clamp(20px, 4vw, 44px)",
          }}
        >
          {"intro" in activeOffer && activeOffer.intro && (
            <p className="prewrap" style={{ margin: "0 0 20px", fontSize: "17.5px", color: "#3A3A3C", maxWidth: "75ch" }}>
              {activeOffer.intro}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #D2D2D7" }}>
            {activeOffer.qs.map((f, qIdx) => (
              <details key={qIdx} open={qIdx === 0} style={{ borderTop: "1px solid #D2D2D7" }}>
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 0",
                    fontSize: "18px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    minHeight: "44px",
                  }}
                >
                  {f.q}
                  <svg
                    className="chev"
                    style={{ flex: "none" }}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="prewrap" style={{ margin: "0 0 18px", color: "#3A3A3C", maxWidth: "75ch" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: LOCAL SEO THAT PUTS YOU ON THE MAP ─────────────────── */}
      <section
        id="local"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(32px, 6vw, 88px)",
            alignItems: "center",
          }}
        >
          {/* Left Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2
              className="seo-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                maxWidth: "13ch",
              }}
            >
              Local SEO That Puts You on the Map
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "#3A3A3C" }}>
              Trying to connect with local customers? Our Local SEO services are built to make sure your business
              appears in the right place at the right time. At OneImpact, we fine-tune your digital footprint,
              optimizing your Google Business Profile, local map listings, directories, and citations, so your brand
              shows up exactly where nearby customers are looking.
            </p>
            <p style={{ margin: 0, fontSize: "18px", color: "#3A3A3C" }}>
              We handle everything from geo-specific keyword strategies and managing reviews to ensuring NAP (Name,
              Address, Phone) consistency across the web. Whether you operate from one location or several, our
              tailored approach helps you attract attention locally and earn trust in your neighborhood.
            </p>
            <p style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
              No shortcuts, just strategic moves that help local customers discover your business when it matters most.
            </p>
            <a
              className="press y btn-sheen"
              href="#audit"
              style={{
                alignSelf: "flex-start",
                background: "#FFBA39",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 650,
                fontSize: "17px",
                padding: "14px 24px",
                borderRadius: "999px",
                minHeight: "52px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Let’s make your brand the go-to name in town
            </a>
          </div>

          {/* Right Map Visual Figure */}
          <figure
            aria-label="Illustration of a local map search"
            style={{
              margin: 0,
              borderRadius: "32px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 40px 80px -40px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "230px",
                background: "#E8F0FF",
                backgroundImage:
                  "linear-gradient(115deg, transparent 46%, #FFFFFF 46%, #FFFFFF 50%, transparent 50%), linear-gradient(25deg, transparent 58%, #FFFFFF 58%, #FFFFFF 61%, transparent 61%), linear-gradient(0deg, transparent 30%, #D6E5FF 30%, #D6E5FF 44%, transparent 44%)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "22%",
                  top: "34%",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                  background: "#AEAEB2",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "70%",
                  top: "60%",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                  background: "#AEAEB2",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "47%",
                  top: "30%",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                  background: "#FFBA39",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                }}
              />
            </div>
            <div style={{ padding: "10px 14px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              {MAP_ROWS.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 10px",
                    borderRadius: "16px",
                    background: m.bg,
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: m.pin,
                      fontSize: "13px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {m.n}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span style={{ fontWeight: 650, fontSize: "16px" }}>{m.name}</span>
                    <span style={{ fontSize: "13.5px", color: "#6E6E73", letterSpacing: 0 }}>{m.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* ── SECTION 12: QUESTIONS, ANSWERED (FAQS) ─────────────────────────── */}
      <section
        id="faq"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) 0",
        }}
      >
        <h2
          className="seo-heading"
          style={{
            margin: "0 0 12px",
            fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          Questions, answered
        </h2>
        <p style={{ margin: "0 0 28px", fontSize: "19px", color: "#6E6E73" }}>
          Anything else?{" "}
          <a
            href="https://wa.me/918369018104"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, textDecoration: "underline" }}
          >
            Message us on WhatsApp
          </a>
          .
        </p>

        {/* FAQ Category Segmented Switcher */}
        <div
          role="tablist"
          aria-label="FAQ groups"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            background: "#E8E8ED",
            borderRadius: "999px",
            padding: "3px",
            width: "min(360px, 100%)",
            marginBottom: "24px",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "3px",
              bottom: "3px",
              left: "3px",
              width: "calc((100% - 6px) / 2)",
              transform: `translateX(${faqIdx * 100}%)`,
              transition: "transform 420ms cubic-bezier(0.32,0.72,0,1)",
              background: "#FFFFFF",
              borderRadius: "999px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.04)",
            }}
          />
          {FAQ_GROUPS.map((grp, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className="press"
              aria-selected={faqIdx === i}
              onClick={() => setFaqIdx(i)}
              style={{
                position: "relative",
                zIndex: 1,
                font: "inherit",
                fontSize: "15px",
                fontWeight: faqIdx === i ? 600 : 500,
                color: "#000000",
                background: "transparent",
                border: 0,
                borderRadius: "999px",
                minHeight: "42px",
                padding: "8px 14px",
                cursor: "pointer",
              }}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #E5E5EA" }}>
          {activeFaqGroup.qs.map((f, idx) => (
            <details key={idx} style={{ borderTop: "1px solid #E5E5EA" }}>
              <summary
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 0",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  minHeight: "44px",
                }}
              >
                {f.q}
                <svg
                  className="chev"
                  style={{ flex: "none" }}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="prewrap" style={{ margin: "0 0 20px", color: "#3A3A3C", maxWidth: "75ch" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── SECTION 13: BOTTOM AUDIT CONVERSION SECTION ─────────────────────── */}
      <section
        id="audit2"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(72px, 10vw, 128px) clamp(16px, 3vw, 32px) clamp(72px, 10vw, 120px)",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#F5F5F7",
            borderRadius: "40px",
            padding: "clamp(28px, 5vw, 72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(28px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-80px",
              bottom: "-120px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "#FFBA39",
              opacity: 0.5,
              filter: "blur(80px)",
            }}
          />

          {/* Left Column */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2
              className="seo-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                fontWeight: 700,
                maxWidth: "12ch",
              }}
            >
              Outperform your competition.
            </h2>
            <p style={{ margin: 0, fontSize: "19px", color: "#3A3A3C", maxWidth: "44ch" }}>
              Get a free SEO audit and see exactly what’s holding your website back. No obligation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a
                className="press"
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "46px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#000000",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15.5px",
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
                +91 83690 18104
              </a>
              <a
                className="press"
                href="mailto:teamhr@oneimpact.co"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "46px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(0,0,0,0.07)",
                  color: "#000000",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15.5px",
                }}
              >
                teamhr@oneimpact.co
              </a>
            </div>
          </div>

          {/* Right Column: Bottom Form Card */}
          <div
            className="form-card"
            style={{
              position: "relative",
              background: "#000000",
              color: "#FFFFFF",
              borderRadius: "30px",
              padding: "clamp(24px, 3.2vw, 36px)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 40px 80px -40px rgba(0,0,0,0.5)",
            }}
          >
            {!sent2 ? (
              <form
                onSubmit={handleSubmit2}
                style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative", zIndex: 1 }}
              >
                <h3
                  className="seo-heading"
                  style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.035em", fontWeight: 700 }}
                >
                  Get your free SEO audit
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="bottom-name" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0" }}>
                    Your name
                  </label>
                  <input
                    id="bottom-name"
                    className="fd"
                    type="text"
                    autoComplete="name"
                    placeholder="First and last name"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    onBlur={() => setTouched2((t) => ({ ...t, name: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showName2Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showName2Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter your name so we know who to reply to
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="bottom-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0" }}>
                    Phone or WhatsApp number
                  </label>
                  <input
                    id="bottom-phone"
                    className="fd"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="98XXX XXXXX"
                    value={phone2}
                    onChange={(e) => setPhone2(e.target.value)}
                    onBlur={() => setTouched2((t) => ({ ...t, phone: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showPhone2Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showPhone2Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter a 10-digit mobile number
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="bottom-url" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0" }}>
                    Website address
                  </label>
                  <input
                    id="bottom-url"
                    className="fd"
                    type="text"
                    placeholder="yourbrand.com"
                    value={url2}
                    onChange={(e) => setUrl2(e.target.value)}
                    onBlur={() => setTouched2((t) => ({ ...t, url: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showUrl2Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showUrl2Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter your website address, like yourbrand.com
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="press y btn-sheen"
                  style={{
                    font: "inherit",
                    fontSize: "17px",
                    fontWeight: 650,
                    color: "#000000",
                    background: "#FFBA39",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "54px",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Get my free SEO audit
                </button>
              </form>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "10px 0",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#FFBA39",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3
                  role="status"
                  className="seo-heading"
                  style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}
                >
                  Audit requested
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name2}. We’ll review {url2} and get in touch on {phone2}.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer style={{ background: "#F5F5F7", color: "#000000", fontSize: "13.5px", letterSpacing: 0 }}>
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "44px clamp(16px, 3vw, 32px) 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGO/oneimpact-logo.png"
              alt="One Impact"
              style={{ display: "block", height: "30px", width: "auto" }}
            />
            <span style={{ color: "#6E6E73" }}>360-degree digital marketing for that ONE big bang IMPACT.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Services</span>
            <Link href="/seo" style={{ color: "#6E6E73", textDecoration: "none" }}>
              SEO and AIO
            </Link>
            <Link href="/#services" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Social media
            </Link>
            <Link href="/#services" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Branding and design
            </Link>
            <Link href="/#services" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Website development
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Company</span>
            <Link href="/#about-banner" style={{ color: "#6E6E73", textDecoration: "none" }}>
              About us
            </Link>
            <Link href="/#proof" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Why us
            </Link>
            <Link href="/#showreel" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Blog
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Contact</span>
            <span style={{ color: "#6E6E73" }}>Mumbai, Maharashtra</span>
            <a href="mailto:teamhr@oneimpact.co" style={{ color: "#6E6E73", textDecoration: "none" }}>
              teamhr@oneimpact.co
            </a>
            <a href="tel:+918369018104" style={{ color: "#6E6E73", textDecoration: "none" }}>
              +91 83690 18104
            </a>
          </div>
        </div>
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "16px clamp(16px, 3vw, 32px) 28px",
            borderTop: "1px solid #D2D2D7",
            color: "#6E6E73",
          }}
        >
          © 2026 One Impact. All rights reserved.
        </div>
      </footer>

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
            background: "#FFBA39",
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
          Get my free SEO audit
        </a>
      </div>
    </div>
  );
}
