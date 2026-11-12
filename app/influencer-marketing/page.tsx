"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";
import { ServiceReelsSection } from "@/components/showroom/ServiceReelsSection";

const NOTICES = [
  "Free influencer marketing consultation. Fill the form and our team will get back to you.",
  "Turn influence into IMPACT with creators your audience already trusts.",
  "Power your brand story through credible, content-first influencer partnerships.",
  "Creators that connect. Campaigns that convert.",
  "WhatsApp us on +91 83690 18104 for a quick reply.",
];

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

const USP_CARDS = [
  {
    head: "Vetted creators",
    text: "We find and vet creators who fit your brand, niche and audience",
    d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6",
    chip: "#FFE7B8",
  },
  {
    head: "Creative content",
    text: "Creative content strategies built for each platform",
    d: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
    chip: "#D6E5FF",
  },
  {
    head: "End-to-end",
    text: "End-to-end campaign management, from brief to report",
    d: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    chip: "#FFE7B8",
  },
  {
    head: "Data-led",
    text: "Data-driven influencer selection, not just follower counts",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#D6E5FF",
  },
  {
    head: "Platform-first",
    text: "Tailored strategies for Instagram, YouTube, LinkedIn and more",
    d: "M7 3h10v18H7zM11 18h2",
    chip: "#FFE7B8",
  },
  {
    head: "Transparent",
    text: "Transparent reporting and ROI tracking",
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    chip: "#D6E5FF",
  },
  {
    head: "Long-term",
    text: "Personalized approach with long-term impact",
    d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
    chip: "#FFE7B8",
  },
  {
    head: "Fits your budget",
    text: "Cost-effective campaigns with a creator mix that fits your budget",
    d: "M6 4h12M6 9h12M9 4c3.3 0 5.5 1.9 5.5 5S12.3 14 9 14H7l8 7",
    chip: "#D6E5FF",
  },
  {
    head: "Scalable",
    text: "Scalable campaigns for brands of all sizes",
    d: "M3 17l6-6 4 4 8-8",
    chip: "#FFE7B8",
  },
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

const BUT_WHY_CARDS = [
  {
    t: "Full-service management",
    a: "From finding creators and outreach to briefs, negotiations and deliverables, we manage the entire process end-to-end.",
    chip: "#f9d230",
  },
  {
    t: "Content that clicks",
    a: "We help influencers produce content that stops thumbs and starts conversations, while staying brand-aligned.",
    chip: "#4066c6",
  },
  {
    t: "Budget-friendly campaigns",
    a: "We plan campaigns that fit your financial goals without compromising on reach, creativity or impact.",
    chip: "#f9d230",
  },
  {
    t: "Streamlined execution",
    a: "We streamline every stage, from influencer onboarding to campaign rollout, without losing focus on quality.",
    chip: "#4066c6",
  },
  {
    t: "Campaigns across categories",
    a: "We run campaigns across lifestyle, fashion, tech, FMCG and more, in formats like product reviews, giveaways and reels.",
    chip: "#f9d230",
  },
  {
    t: "Performance-first reporting",
    a: "Our reports go beyond vanity metrics, with clear insights into engagement, impressions, click-throughs and ROI.",
    chip: "#4066c6",
  },
  {
    t: "Data-driven strategy",
    a: "Every campaign begins with audience research and platform analysis, and is optimized throughout the campaign cycle.",
    chip: "#f9d230",
  },
  {
    t: "Long-term relationships",
    a: "We build ongoing creator relationships rather than one-off posts, which leads to more authentic collaborations.",
    chip: "#4066c6",
  },
];

const WHY_HIGHLIGHT_CARDS = [
  {
    t: "Tailored influencer strategies",
    a: "Every strategy defines the right platforms, content approach, influencer tiers and timelines for your goals.",
  },
  {
    t: "Data-driven creator selection",
    a: "We evaluate relevance, audience demographics, content style and engagement quality, not just follower count.",
  },
  {
    t: "Comprehensive influencer management",
    a: "We identify, onboard and coordinate creators and manage every deliverable, so you can stay focused on your brand.",
  },
  {
    t: "Multi-platform management",
    a: "Consistent brand messaging across Instagram, YouTube, LinkedIn, Facebook and X, tailored to each platform.",
  },
  {
    t: "Transparent campaign reporting",
    a: "Platform-wise reports on reach, engagement, click-throughs and conversions, tracked against your campaign objectives.",
  },
  {
    t: "Scales with your brand",
    a: "Whether you’re a startup or an established brand, our campaigns scale to fit where you are and where you’re going.",
  },
];

const SVC_GROUPS = [
  {
    label: "Core services",
    items: [
      {
        t: "Influencer strategy and planning",
        a: "We begin by understanding your brand objectives, audience profile and campaign goals. Based on this, we develop a tailored influencer strategy that defines the right platforms, content approach, influencer tiers and campaign timelines.",
        dot: "#f9d230",
      },
      {
        t: "Influencer outreach and collaboration",
        a: "Our team identifies influencers who best match your brand’s voice, values and target audience. We handle the communication, pitch the campaign idea and coordinate collaborations that feel organic and resonate with the influencer’s community.",
        dot: "#4066c6",
      },
      {
        t: "Performance analytics and reporting",
        a: "Every campaign is monitored through a detailed analytics framework. We track reach, engagement, impressions and content performance to deliver clear insights that help evaluate campaign success.",
        dot: "#f9d230",
      },
      {
        t: "Contract and compliance management",
        a: "We draft influencer agreements that define deliverables, timelines, content usage rights and disclosure norms. This ensures transparency, legal clarity and alignment between everyone involved.",
        dot: "#4066c6",
      },
      {
        t: "Campaign creative direction",
        a: "We support influencers with creative direction that keeps content consistent while leaving room for their unique style. From visual aesthetics to messaging tone, our inputs keep content brand-aligned and relevant.",
        dot: "#f9d230",
      },
      {
        t: "Long-term relationship building",
        a: "We focus on ongoing relationships rather than one-time campaigns. Engaging with influencers consistently builds trust and loyalty, leading to more authentic collaborations and long-term brand advocacy.",
        dot: "#4066c6",
      },
    ],
  },
  {
    label: "By platform",
    items: [
      {
        t: "Instagram influencer marketing",
        a: "We collaborate with niche-relevant Instagram creators in lifestyle, fashion, food, tech and more. From identification and outreach to content planning and analytics, we focus on authentic Reels, Stories and static posts.",
        dot: "#f9d230",
      },
      {
        t: "YouTube influencer marketing",
        a: "Our YouTube campaigns create long-form content that educates, entertains and drives meaningful brand conversations, from unboxings and reviews to tutorials and integrated content that reaches the right viewers.",
        dot: "#4066c6",
      },
      {
        t: "LinkedIn influencer campaigns",
        a: "We help B2B brands partner with industry experts, thought leaders and niche creators on LinkedIn. Posts, articles and live sessions build credibility and drive high-value engagement from decision-makers.",
        dot: "#f9d230",
      },
      {
        t: "Facebook influencer promotions",
        a: "We work with creators who have engaged audiences in interest groups and regional communities. Video content, live sessions and collaborative posts spark meaningful interactions in your brand’s voice.",
        dot: "#4066c6",
      },
      {
        t: "X (Twitter) campaign management",
        a: "We run sharp, real-time campaigns with voices that influence public opinion on X. From trending hashtag campaigns to branded threads and opinion-led posts, we help your brand stay part of the conversation.",
        dot: "#f9d230",
      },
      {
        t: "Multi-platform management",
        a: "We plan, execute and monitor campaigns across Instagram, YouTube, LinkedIn, Facebook and X, keeping your messaging consistent while tailoring content to each platform’s audience and format.",
        dot: "#4066c6",
      },
    ],
  },
];

const OFFER_TOPICS: { label: string; intro?: string; qs: { q: string; a: string }[] }[] = [
  {
    label: "Strategy and planning",
    qs: [
      {
        q: "What is influencer marketing strategy development?",
        a: "Influencer marketing strategy development is the process of outlining a structured plan to achieve your brand’s goals through influencer collaborations. It involves identifying your target audience, defining campaign objectives, choosing the right platforms, and mapping out content formats and timelines. A good strategy also considers key metrics to measure performance and optimize future campaigns. At OneImpact, we build influencer strategies that align with your brand voice and marketing goals, so campaigns feel authentic while reaching the right audience at the right time.",
      },
      {
        q: "How do we tailor an influencer strategy for your brand?",
        a: "Tailoring an influencer strategy starts with understanding your brand’s identity, audience and business objectives. We assess what kind of content your target customers engage with, which platforms they use and which influencer profiles they trust. Based on this, we define clear campaign goals and choose influencers who naturally align with your brand values. Content formats, posting schedules and engagement tactics are customized to reflect your brand tone. Every strategy is data-backed and designed to support long-term visibility and growth.",
      },
      {
        q: "How do we identify the right influencers?",
        a: "Identifying the right influencers goes beyond follower count. We evaluate relevance, audience demographics, content style and engagement quality to ensure alignment with your brand. Our team checks authenticity, audience trust and previous brand collaborations, and analyzes metrics like average reach, engagement rates and consistency in content delivery. We use a mix of tools and human expertise to find influencers who can genuinely represent your brand and connect with your audience.",
      },
    ],
  },
  {
    label: "Creator outreach",
    qs: [
      {
        q: "What is influencer outreach?",
        a: "Influencer outreach is the process of connecting with potential influencers for collaboration opportunities. It involves sending personalized communication that highlights the campaign objective, brand values and the proposed scope of work. The goal is to build mutual interest and establish trust from the start. Our team keeps outreach respectful, professional and aligned with the influencer’s content style, because strong first impressions set the tone for successful influencer relationships.",
      },
      {
        q: "How do we manage influencer relationships?",
        a: "Managing influencer relationships requires ongoing communication, transparency and professionalism. From briefing and content approvals to deadline coordination and performance tracking, we handle every step to ensure smooth collaboration. We address queries promptly and give creative freedom while making sure brand guidelines are met. Post-campaign, we focus on feedback, reporting and nurturing long-term connections, because relationship management directly affects campaign quality and consistency.",
      },
      {
        q: "Why are long-term partnerships important?",
        a: "Long-term partnerships build credibility, consistency and deeper engagement between the influencer’s audience and your brand. When an influencer talks about a brand multiple times, it feels more authentic and trusted by their followers. Ongoing collaborations also allow room for creative storytelling and broader campaign planning. Brands benefit from stronger recall, and influencers feel more invested in delivering value. At OneImpact, we encourage long-term partnerships that grow with your business goals and audience expectations.",
      },
    ],
  },
  {
    label: "Campaign execution",
    qs: [
      {
        q: "How do we execute influencer campaigns?",
        a: "We start by understanding your brand goals, target audience and campaign objectives. Based on this, we shortlist influencers whose audience and content align with your brand’s identity. We then move into campaign planning, where we define deliverables, timelines and creative direction in collaboration with the influencers. Every campaign is structured for smooth coordination, timely execution and consistent messaging. Once live, we actively monitor performance and make sure all content meets the agreed standards.",
      },
      {
        q: "How do we manage content quality?",
        a: "Content quality is maintained through clear communication, detailed briefs and close collaboration with selected influencers. We make sure all content aligns with the brand’s tone, visual identity and platform-specific best practices. Before any post goes live, it is reviewed against campaign objectives and engagement expectations. Our team also guides influencers on what formats and messaging work best for their audience. We prioritize authenticity without compromising brand guidelines, and quality checks continue throughout the campaign.",
      },
      {
        q: "Why is creativity key in influencer content?",
        a: "Creativity allows influencer content to feel organic, engaging and relevant to the audience. Influencers understand their followers and know how to present a brand message in a relatable way. Creative content captures attention more effectively and encourages interaction, making campaigns more impactful. We encourage influencers to personalize the message while staying true to the brand. This balance between creativity and strategy helps content stand out in crowded feeds and improves shareability, visibility and reach.",
      },
    ],
  },
  {
    label: "Analytics and reporting",
    qs: [
      {
        q: "How do we measure campaign success?",
        a: "Campaign success is measured through a combination of quantitative and qualitative metrics. We track reach, impressions, engagement rate, click-through rate and conversions. We also assess the quality of audience interactions, sentiment in comments and alignment with brand goals. Post-campaign reports include platform-specific insights, a summary of performance against KPIs and influencer-specific data that shows each creator’s contribution. These metrics show what worked well and where improvements can be made.",
      },
      {
        q: "What insights do we provide?",
        a: "OneImpact provides detailed campaign reports with performance data across all influencer collaborations. We share insights on audience demographics, engagement metrics, the content formats that performed best and overall reach. The report also highlights which influencers delivered the highest value and why. We use data visualization to make the results easy to understand and act on, so the report becomes a tool to guide future campaigns, not just a summary.",
      },
      {
        q: "How do we optimize campaigns?",
        a: "Optimization begins at campaign setup, with platform-specific strategies and audience targeting. During the campaign, we track performance and make adjustments to improve engagement and reach. This could mean tweaking posting schedules, suggesting content changes or shifting focus to top-performing creators. We also collect feedback from both the brand and the influencers. Post-campaign analysis shows what resonated most with the audience, and those learnings are applied to future campaigns.",
      },
    ],
  },
  {
    label: "Influencer management",
    qs: [
      {
        q: "What is influencer management?",
        a: "Influencer management involves identifying, onboarding, coordinating and maintaining relationships with influencers who align with a brand’s goals and values. It includes overseeing campaign deliverables, making sure content follows brand guidelines and managing timelines. The process also covers contract negotiations, compliance and performance tracking. At OneImpact, we handle influencer management strategically to keep communication between the brand and the influencer seamless, which keeps messaging consistent and builds long-term collaborations.",
      },
      {
        q: "How do we manage influencers across different platforms?",
        a: "Managing influencers across platforms needs a tailored approach for each channel’s content format, audience behavior and engagement style. Our team first segments influencers by platform relevance and campaign objectives. We then develop platform-specific strategies while keeping the brand message consistent. Detailed briefs, ongoing communication and platform-based performance tracking keep the workflow streamlined, so each influencer delivers quality content that performs well on their platform.",
      },
      {
        q: "Why choose a full-service influencer management agency?",
        a: "A full-service influencer management agency handles every part of the campaign, from strategy and influencer selection to content approval and performance analysis. This reduces the brand’s operational load and keeps the campaign running smoothly. Agencies bring industry knowledge, influencer networks and established processes that make campaigns more efficient. A full-service partner like OneImpact helps brands scale their influencer efforts while maintaining quality and consistency, and integrates them with other digital marketing activities.",
      },
    ],
  },
  {
    label: "Multi-platform",
    qs: [
      {
        q: "How do we manage campaigns across multiple platforms?",
        a: "Multi-platform campaign management starts with a unified strategy that adapts to each platform’s content style and audience expectations. We align campaign goals with the strengths of each channel, such as visuals for Instagram or long-form videos for YouTube. Timelines, content formats and influencer deliverables are customized accordingly. Our team tracks each platform’s performance separately and compiles the insights for an overall campaign evaluation, so every moving part comes together without compromising the brand narrative.",
      },
      {
        q: "Why is multi-platform influencer marketing effective?",
        a: "Multi-platform influencer marketing lets brands reach diverse audiences through a variety of content formats and engagement styles. Each platform serves a different purpose: Instagram for discovery, YouTube for deep engagement, LinkedIn for credibility and X for real-time interaction. When managed well, campaigns across multiple platforms increase overall visibility and improve message retention. This approach also lets brands test different types of content and optimize based on performance.",
      },
    ],
  },
  {
    label: "Our process",
    qs: [
      {
        q: "Step 1: Research and strategy development",
        a: "We begin by understanding your brand’s goals, target audience and industry landscape. Based on this, we craft a custom influencer marketing strategy tailored to your needs, with clear goals for measurable success.",
      },
      {
        q: "Step 2: Influencer selection and outreach",
        a: "Finding the right influencers is critical. We identify influencers who match your brand’s ethos and have an engaged audience, then handle the outreach process, from initial contact to finalizing partnerships.",
      },
      {
        q: "Step 3: Content creation and approval",
        a: "We work closely with influencers to develop content that aligns with your brand’s message and is engaging, authentic and optimized for each platform. We handle the approval process so every post is on-brand and meets your expectations.",
      },
      {
        q: "Step 4: Campaign launch and execution",
        a: "Once the content is approved, we launch your campaign across the selected platforms and make sure everything runs to plan. We monitor the campaign continuously and adjust as needed.",
      },
      {
        q: "Step 5: Performance tracking and reporting",
        a: "We provide detailed reports on campaign performance, including reach, engagement, conversions and ROI. This data-driven approach means every campaign informs the next.",
      },
    ],
  },
  {
    label: "Brand visibility",
    qs: [
      {
        q: "How does influencer marketing boost brand visibility?",
        a: "Influencer marketing puts your products or services in front of highly engaged and loyal audiences. Influencers have built trust within their communities, which makes their recommendations more impactful than traditional ads. By collaborating with influencers who align with your brand, you can introduce your offerings to new demographics organically. The visual and interactive nature of influencer content also increases shares, saves and reach. Over time, this consistent exposure improves brand recall and strengthens your online presence.",
      },
      {
        q: "Why is niche targeting crucial in influencer campaigns?",
        a: "Niche targeting makes sure your campaign reaches a specific, relevant audience rather than a broad, generalized one. Influencers who cater to a defined interest or community often have more engaged and loyal followers, so your message lands with people already interested in the category. Content that speaks directly to a group that finds it valuable tends to convert better, avoids wasted impressions and creates authentic brand associations. At OneImpact, niche relevance is a key factor in selecting partnerships.",
      },
      {
        q: "How do platforms like Instagram, YouTube and LinkedIn play a role?",
        a: "Each platform offers unique strengths. Instagram supports visual storytelling through Reels, Stories and static posts, which suits lifestyle, fashion and product-led campaigns. YouTube allows in-depth content like reviews, tutorials and vlogs that build stronger narratives and help with search-based discovery. LinkedIn suits B2B influencer marketing through professional insights, thought leadership and industry-led conversations. We plan platform-specific strategies so the content fits both the medium and the message.",
      },
      {
        q: "What’s the value of consistent influencer collaborations?",
        a: "Consistent collaborations build long-term trust and familiarity between the brand and the audience. When an influencer features a brand repeatedly over time, it reinforces credibility and signals genuine affinity. It also opens up deeper storytelling and lets influencers become true advocates rather than one-time promoters. Content quality often improves as the influencer aligns more closely with the brand’s vision. At OneImpact, we encourage long-term partnerships to maximize both engagement and impact.",
      },
      {
        q: "How does content from influencers impact discovery?",
        a: "Influencer content is naturally engaging and usually made for the platform it’s shared on, which increases its chances of appearing in feeds, explore pages and search results. It introduces your brand to new audiences who may not have found it through traditional channels. Relatable content sparks curiosity and interaction, leading to organic reach and word-of-mouth. Influencer content can also have a longer shelf life, especially on YouTube and Pinterest. We craft influencer content strategically to support ongoing discovery.",
      },
      {
        q: "Can influencer marketing help new or growing brands stand out?",
        a: "Yes. Influencer marketing is especially valuable for emerging brands looking to build awareness quickly and authentically. The right influencers give new brands access to ready-made communities that trust the influencer’s voice, which can speed up brand recognition and build credibility early. For growing brands, influencers can create buzz around launches or key campaigns and help them stand out in a crowded market. We help new brands identify influencers who can amplify their presence effectively.",
      },
    ],
  },
  {
    label: "Engagement and results",
    qs: [
      {
        q: "What makes influencer marketing more trustworthy than traditional ads?",
        a: "Influencer marketing feels more personal and relatable because it comes from people audiences already follow and trust. Unlike traditional ads, which are often seen as brand-centric, influencer content is woven into daily life and feels like a genuine recommendation. Influencers share products or services they use or believe in, which makes their endorsement more authentic. At OneImpact, we partner with influencers whose values and content style align naturally with your brand, so that trust builds organically.",
      },
      {
        q: "How does influencer content improve engagement?",
        a: "Influencer content typically sparks higher engagement because it’s made in a voice and format the creator’s audience already responds to. This familiarity encourages people to like, comment and share more than they would with branded content. Influencers also understand their followers’ preferences and tailor the message accordingly, so it feels relevant rather than intrusive. We work closely with creators to produce content that feels native to their platform and community.",
      },
      {
        q: "What’s the ROI of influencer marketing compared to paid ads?",
        a: "Influencer marketing can deliver a strong return on investment because it drives both awareness and conversion through trusted recommendations. While paid ads rely on direct targeting and budget, influencer content draws on community trust and long-term brand association. The value can also extend beyond immediate results, as content often keeps earning engagement and reach after it’s posted. OneImpact tracks detailed metrics, from reach to engagement and conversions, so you can see the real impact and invest more strategically.",
      },
      {
        q: "How do we measure success in influencer campaigns?",
        a: "Success is measured through a combination of quantitative and qualitative metrics. Key indicators include reach, impressions, engagement rate, website traffic and conversions generated through affiliate links or unique codes. We also analyze content quality, audience sentiment and brand mentions to understand the campaign’s broader impact. Our detailed reports help you assess performance accurately and refine future strategies.",
      },
      {
        q: "How does influencer marketing support conversion goals?",
        a: "Influencer marketing guides potential customers through their decision with relatable, real-life use cases. When influencers show how a product fits into their lifestyle, it creates familiarity and desire among their followers, and audiences are more likely to act on recommendations from someone they admire. We structure campaigns with strong calls to action, trackable links and limited-time offers that encourage people to take the next step.",
      },
      {
        q: "Why is creative strategy critical in influencer marketing?",
        a: "Creative strategy makes sure the content fits both the brand’s message and the influencer’s voice. Without a clear strategy, campaigns can feel disjointed or inauthentic, which hurts engagement and trust. A well-thought-out creative plan guides influencers on how to position the brand while leaving room for their own expression. We collaborate with creators to build content that tells a compelling story, fits platform trends and meets campaign objectives.",
      },
    ],
  },
];

const FAQ_GROUPS = [
  {
    label: "Business obstacles",
    qs: [
      {
        q: "Why isn’t our influencer campaign bringing in the expected results?",
        a: "An influencer campaign can underperform for several reasons. It often comes down to mismatched influencer selection, unclear campaign goals or a lack of platform-specific strategy. If the content doesn’t resonate with the audience or lacks authenticity, engagement can drop significantly. At OneImpact, we align brand objectives with the right creators, content and metrics to help avoid these issues.",
      },
      {
        q: "How can we increase brand awareness using influencers?",
        a: "Collaborate with influencers who already have strong audience trust and high engagement. Consistent formats like unboxings, tutorials or lifestyle integrations make the brand more memorable. Using multiple platforms and repurposing influencer content across channels also extends reach. The key is storytelling and relevance, not just promotion.",
      },
      {
        q: "Why is our influencer marketing not reaching our target audience?",
        a: "Your campaign may be missing the right audience because of poor influencer-audience alignment or a lack of targeting strategy. Influencers should be selected based on their follower demographics and content niche. If audience insights are overlooked, even well-crafted content can miss the mark. We use data-backed tools to match brands with influencers whose audience fits the campaign objectives.",
      },
      {
        q: "How can we stand out from competitors in influencer marketing?",
        a: "Standing out takes a clear brand voice, creative campaign ideas and genuine influencer relationships. Instead of generic brand placements, focus on unique content formats, interactive storytelling and long-term collaborations. Letting influencers personalize content while staying true to your brand values creates more authentic engagement. Consistency and innovation help you stay visible in a crowded space.",
      },
      {
        q: "Why isn’t our influencer marketing driving enough engagement?",
        a: "Low engagement often comes from overly promotional content or too little creative freedom for influencers. Audiences respond better to relatable, story-driven content than to hard-sell posts. It also helps to post at the right times and use native features like polls, Reels or Q&As. Engaging with the influencer’s community through comments and replies can further boost interaction.",
      },
      {
        q: "How can we optimize our influencer strategy to reach more customers?",
        a: "Start by analyzing past campaign data to understand what worked and what didn’t. Collaborate with influencers across different tiers and platforms to diversify reach. Use cross-promotion, hashtags and user-generated content to expand visibility. We help brands refine their messaging, target better and scale campaigns to reach more customers.",
      },
      {
        q: "How can we improve our influencer campaigns to convert followers into customers?",
        a: "Make sure influencers include clear CTAs, product links and incentives like discount codes. Content should highlight product benefits through real-life use cases or testimonials. Campaigns that offer value and match customer needs tend to convert better. Pairing this with retargeting helps move followers down the funnel.",
      },
      {
        q: "How can we get influencers to better align with our brand?",
        a: "Start with a detailed brief that sets out your brand’s voice, values and goals while leaving room for influencer creativity. Strong communication and long-term relationships encourage better alignment. It’s also important to partner with influencers who already resonate with your niche. When influencers believe in your brand, their content becomes more authentic and impactful.",
      },
      {
        q: "How can we improve influencer-driven content to reduce bounce rates and increase engagement?",
        a: "Content that lacks relevance or clarity often leads to higher bounce rates. Make sure influencer content communicates the message clearly and opens with a hook that holds attention. Use visual storytelling, platform-native features and links that lead to optimized landing pages. Engaging captions and strong storytelling keep people interested and reduce drop-offs.",
      },
      {
        q: "Why are our influencer campaigns not delivering a strong return on investment (ROI)?",
        a: "ROI issues often arise when goals are vague or not linked to measurable outcomes like traffic, leads or sales. Campaigns can also fall short if influencers aren’t chosen for audience fit, or if the content lacks clarity and direction. Monitoring KPIs throughout the campaign is essential for timely adjustments. OneImpact keeps every influencer partnership ROI-focused, with clear tracking and optimization at every stage.",
      },
    ],
  },
  {
    label: "Why OneImpact",
    qs: [
      {
        q: "How does our influencer marketing agency maximize ROI for your brand?",
        a: "We focus on data-backed strategies and platform-specific content so every campaign delivers measurable value. By aligning your brand with the right influencers and clearly defined goals, we help create authentic content that drives real engagement. We continuously monitor performance and optimize based on analytics to improve outcomes, to maximize the return on every investment you make in influencer marketing.",
      },
      {
        q: "How will we increase your brand’s online visibility and engagement?",
        a: "We collaborate with influencers who have strong, active communities across Instagram, YouTube, LinkedIn, Facebook and X (Twitter). Each campaign is tailored to the platform and audience so content is engaging and discoverable. From creative storytelling to interactive formats like Reels, Stories and Lives, we build both reach and engagement, leading to consistent brand exposure and deeper audience connections.",
      },
      {
        q: "How do we optimize influencer campaigns for higher conversions?",
        a: "We begin by defining campaign goals and selecting influencers whose audience matches your target market. Content strategies are built around audience behavior, platform trends and conversion triggers such as product demos, limited-time offers and strong calls to action. Throughout the campaign, we use analytics to assess performance and adjust, which drives more qualified traffic and better conversion rates.",
      },
      {
        q: "What measurable results can you expect from working with us?",
        a: "You can expect detailed insights into reach, engagement, click-through rates, conversions and audience demographics. Platform-wise performance reports show how your campaigns are resonating with your audience. Over time, our approach helps you build brand awareness, increase website traffic and generate leads or sales. Every result is tracked and evaluated against your campaign objectives for complete transparency.",
      },
      {
        q: "How can we help you find the right influencers for your brand?",
        a: "We use a combination of research tools and industry expertise to identify influencers who align with your brand values, audience and campaign goals. Our selection process checks authenticity, engagement quality, content style and audience demographics. We also look at past brand collaborations to ensure compatibility, so every partnership feels natural and drives better results.",
      },
      {
        q: "Why should you trust us to grow your brand’s influencer campaigns?",
        a: "OneImpact brings platform knowledge, hands-on experience and a strategic approach to every campaign. We prioritize authentic connections over paid visibility, helping your brand grow organically. Our transparent processes and focus on long-term value mean you get consistent support, detailed insights and influencer partnerships that fit your brand’s identity.",
      },
      {
        q: "How do we manage influencers across multiple platforms?",
        a: "We customize strategies to each platform’s content format, audience behavior and performance metrics. From influencer onboarding and content scheduling to approval workflows and reporting, every step is centrally managed. This keeps messaging consistent and execution seamless across Instagram, YouTube, LinkedIn, Facebook and X (Twitter), with your brand voice unified and your reach maximized.",
      },
    ],
  },
];

export default function InfluencerMarketingPage() {
  // State for What We Do / Why One Impact highlight tabs
  const [whyTab, setWhyTab] = useState(0);

  // State for Service tabs (Core services vs By platform)
  const [svcIdx, setSvcIdx] = useState(0);

  // State for Offer tabs
  const [offerIdx, setOfferIdx] = useState(0);
  const [offerExpanded, setOfferExpanded] = useState(false);

  // State for FAQ tabs
  const [faqIdx, setFaqIdx] = useState(0);
  const [faqExpanded, setFaqExpanded] = useState(false);

  // Carousel track state
  const [carIdx, setCarIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Form 1 (Hero)
  const [name1, setName1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [handle1, setHandle1] = useState("");
  const [need1, setNeed1] = useState("Not sure yet");
  const [touched1, setTouched1] = useState<{ name?: boolean; phone?: boolean; handle?: boolean }>({});
  const [sent1, setSent1] = useState(false);

  // Form 2 (Bottom)
  const [name2, setName2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [handle2, setHandle2] = useState("");
  const [touched2, setTouched2] = useState<{ name?: boolean; phone?: boolean; handle?: boolean }>({});
  const [sent2, setSent2] = useState(false);

  // Form validations
  const isHandleValid = (val: string) => val.trim().length > 0;
  const isPhoneValid = (val: string) => val.replace(/\D/g, "").length >= 10;
  const isNameValid = (val: string) => val.trim().length > 0;

  const showName1Err = touched1.name && !isNameValid(name1);
  const showPhone1Err = touched1.phone && !isPhoneValid(phone1);
  const showHandle1Err = touched1.handle && !isHandleValid(handle1);

  const showName2Err = touched2.name && !isNameValid(name2);
  const showPhone2Err = touched2.phone && !isPhoneValid(phone2);
  const showHandle2Err = touched2.handle && !isHandleValid(handle2);

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched1({ name: true, phone: true, handle: true });
    if (isNameValid(name1) && isPhoneValid(phone1) && isHandleValid(handle1)) {
      setSent1(true);
    }
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched2({ name: true, phone: true, handle: true });
    if (isNameValid(name2) && isPhoneValid(phone2) && isHandleValid(handle2)) {
      setSent2(true);
    }
  };

  // Carousel scroll helpers
  const scrollCarousel = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardWidth = 336;
    const newIdx =
      dir === "next"
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
  const visibleOfferQs = offerExpanded ? activeOffer.qs : activeOffer.qs.slice(0, 5);
  const activeFaqGroup = FAQ_GROUPS[faqIdx];
  const visibleFaqs = faqExpanded ? activeFaqGroup.qs : activeFaqGroup.qs.slice(0, 5);
  const activeServices = SVC_GROUPS[svcIdx];

  // Ensure normal system cursor
  useEffect(() => {
    document.body.classList.remove("custom-cursor-active");
    return () => {
      document.body.classList.add("custom-cursor-active");
    };
  }, []);

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
      <style jsx global>{`
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
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
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

          {/* Hero Form Card */}
          <div
            id="audit"
            style={{
              background: "#000000",
              border: "1px solid #6B8CE5",
              borderRadius: "28px",
              padding: "clamp(26px, 3.2vw, 36px)",
              color: "#FFFFFF",
            }}
          >
            {!sent1 ? (
              <form
                onSubmit={handleSubmit1}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 400, color: "rgba(255,255,255,0.78)", letterSpacing: 0 }}>
                    Free for your brand
                  </span>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(1.65rem, 2.5vw, 2.05rem)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.02em",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Get your free influencer consultation
                  </h2>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", letterSpacing: 0, margin: 0 }}>
                    A real person from our team looks at your brand and gets back to you.
                  </p>
                </div>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <label htmlFor="hero-name" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                    Your name
                  </label>
                  <input
                    id="hero-name"
                    className="fd"
                    type="text"
                    placeholder="First and last name"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, name: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "15.5px",
                      height: "44px",
                      padding: "0 14px",
                      borderRadius: "10px",
                      border: `1px solid ${showName1Err ? "#FF9F95" : "rgba(255,255,255,0.08)"}`,
                      background: "#121620",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showName1Err && (
                    <span role="alert" style={{ fontSize: "13px", color: "#FF9F95" }}>
                      Enter your name so we know who to reply to
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <label htmlFor="hero-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                    Phone or WhatsApp number
                  </label>
                  <input
                    id="hero-phone"
                    className="fd"
                    type="tel"
                    inputMode="tel"
                    placeholder="98XXX XXXXX"
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, phone: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "15.5px",
                      height: "44px",
                      padding: "0 14px",
                      borderRadius: "10px",
                      border: `1px solid ${showPhone1Err ? "#FF9F95" : "rgba(255,255,255,0.08)"}`,
                      background: "#121620",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showPhone1Err && (
                    <span role="alert" style={{ fontSize: "13px", color: "#FF9F95" }}>
                      Enter a 10-digit mobile number
                    </span>
                  )}
                </div>

                {/* Website or Instagram handle */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <label htmlFor="hero-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                    Website or Instagram handle
                  </label>
                  <input
                    id="hero-handle"
                    className="fd"
                    type="text"
                    placeholder="@yourbrand"
                    value={handle1}
                    onChange={(e) => setHandle1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, handle: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "15.5px",
                      height: "44px",
                      padding: "0 14px",
                      borderRadius: "10px",
                      border: `1px solid ${showHandle1Err ? "#FF9F95" : "rgba(255,255,255,0.08)"}`,
                      background: "#121620",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showHandle1Err && (
                    <span role="alert" style={{ fontSize: "13px", color: "#FF9F95" }}>
                      Enter your website or Instagram handle
                    </span>
                  )}
                </div>

                {/* Need dropdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <label htmlFor="hero-need" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                    What do you need? <span style={{ color: "#f9d230", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <select
                    id="hero-need"
                    className="fd"
                    value={need1}
                    onChange={(e) => setNeed1(e.target.value)}
                    style={{
                      font: "inherit",
                      fontSize: "15.5px",
                      height: "44px",
                      padding: "0 12px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "#121620",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  >
                    <option value="Not sure yet">Not sure yet</option>
                    <option value="Influencer strategy and planning">Influencer strategy and planning</option>
                    <option value="Instagram influencer marketing">Instagram influencer marketing</option>
                    <option value="YouTube influencer marketing">YouTube influencer marketing</option>
                    <option value="LinkedIn influencer campaigns">LinkedIn influencer campaigns</option>
                    <option value="Multi-platform campaign">Multi-platform campaign</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="press btn-sheen"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#FFFFFF",
                    background: "#6B8CE5",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "56px",
                    padding: "0 36px",
                    alignSelf: "center",
                    cursor: "pointer",
                    marginTop: "8px",
                  }}
                >
                  Book my free consultation
                </button>

                <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.6)", textAlign: "center", letterSpacing: 0, marginTop: "4px" }}>
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
                    background: "#f9d230",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 role="status" className="inf-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>
                  Request received
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name1}. We’ll look at {handle1} and get in touch on {phone1}.
                </p>
                <button
                  type="button"
                  className="press"
                  onClick={() => {
                    setSent1(false);
                    setName1("");
                    setPhone1("");
                    setHandle1("");
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
                  Send another request
                </button>
              </div>
            )}
          </div>
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
              src="/images/inflluencer-marketing-follower-section.png"
              alt="Influencer collaboration and creator trust illustration"
              draggable={false}
              style={{
                width: "100%",
                maxWidth: "520px",
                height: "auto",
                display: "block",
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
          height: "56px",
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
            d="M23 28.2 L26 29 L29 29.2 L32 28.7 L35 30.3 L38 30.5 L41 30.2 L44 30.2 L47 31 L50 30.3 L53 29.8 L56 30.5 L59 29.7 L62 28.5 L65 27.8 L68 27.8 L71 27 L74 29.5 L77 30.3 L80 32.3 L83 32.7 L86 31.8 L89 33 L92 33.8 L95 35 L98 36.3 L101 36.7 L104 37.3 L107 36.5 L110 37.5 L113 38.5 L116 38.5 L119 37.3 L122 36.5 L125 35.8 L128 35.5 L131 34.7 L134 36 L137 37.5 L140 37.5 L143 36.8 L146 37.5 L149 36.5 L152 36.7 L155 38.3 L158 37.8 L161 37.5 L164 36.2 L167 35.5 L170 35.5 L173 35.7 L176 35.3 L179 34 L182 34.8 L185 34.7 L188 34.5 L191 33.7 L194 32.7 L197 32.7 L200 32.7 L203 32.8 L206 33.5 L209 34.2 L212 34.5 L215 35 L218 34.5 L221 34.7 L224 35.7 L227 35.7 L230 35.3 L233 36.3 L236 37.2 L239 37.7 L242 38.5 L245 37.2 L248 36.5 L251 37.3 L254 37 L257 37.5 L260 37.7 L263 36.3 L266 34.8 L269 35.3 L272 35.5 L275 36.5 L278 36.8 L281 38.5 L284 38.5 L287 37.8 L290 36.7 L293 37.3 L296 36.8 L299 36.5 L302 35.3 L305 34.2 L308 33.2 L311 32 L314 32.5 L317 32.5 L320 31.2 L323 30.5 L326 27.3 L329 27.2 L332 27.8 L335 28.2 L338 29.7 L341 30.2 L344 30 L347 30.2 L350 31.2 L353 30.5 L356 29.8 L359 30.5 L362 30.5 L365 28.8 L368 29.2 L371 28.8 L374 28.2 L377 29.2 L380 28.5 L383 29 L386 29 L389 28.7 L392 30.5 L395 30.5 L398 29.8 L401 30.5 L404 31.2 L407 30.2 L410 30 L413 30.3 L416 29.7 L419 28.3 L422 27.8 L425 27.3 L428 27.3 L431 30.3 L434 31 L437 32.5 L440 32.5 L443 32.2 L446 33 L449 34.2 L452 35.3 L455 36.5 L458 36.7 L461 37.3 L464 36.7 L467 37.8 L470 38.5 L473 38.5 L476 36.8 L479 36.5 L482 35.5 L485 35.2 L488 34.8 L491 36.3 L494 37.7 L497 37.5 L500 36.8 L503 37.5 L506 36.5 L509 37 L512 38.5 L515 37.7 L518 37.2 L521 36.2 L524 35.5 L527 35.7 L530 35.5 L533 34.7 L536 34.3 L539 35.2 L542 34.5 L545 34.2 L548 33.3 L551 32.8 L554 32.7 L557 32.7 L560 32.7 L563 33.5 L566 34.3 L569 34.7 L572 35 L575 34.2 L578 34.8 L581 35.7 L584 35.7 L587 35.5 L590 36.3 L593 37.3 L596 37.8 L599 38.2 L602 36.8 L605 36.5 L608 37.7 L611 36.8 L614 37.5 L617 37.5 L620 36 L623 34.7 L626 35.3 L629 35.7 L632 36.5 L635 37.2 L638 38.5 L641 38.5 L644 37.7 L647 36.7 L650 37.3 L653 36.7 L656 36.3 L659 35 L662 34 L665 33 L668 32 L671 32.5 L674 32.5 L677 30.5 L680 29.8 L683 27 L686 27.7 L689 27.8 L692 28.7 L695 29.7 L698 30.5 L701 29.7 L704 30.3 L707 31 L710 30.2 L713 30.2 L716 30.5 L719 30.3 L722 28.7 L725 28.8 L728 29 L731 28.2 L734 29 L734 50 L23 50 Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2"
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
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(48px, 6vw, 72px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
        }}
      >
        {/* Pillars Head & Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "center" }}>
          <h3
            className="inf-heading"
            style={{
              margin: 0,
              fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
              letterSpacing: "-0.035em",
              fontWeight: 700,
            }}
          >
            At OneImpact, every collaboration follows four principles
          </h3>
          <p style={{ margin: "0 0 28px", color: "#6E6E73", fontSize: "17px" }}>
            Authenticity, Research, Platform fit, Transparency
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
                background: "#F5F5F7",
                borderRadius: "28px",
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "88px",
                  lineHeight: 0.9,
                  fontWeight: 700,
                  letterSpacing: "-0.06em",
                  color: "#000000",
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
                className="inf-heading"
                style={{
                  margin: "6px 0 0",
                  fontSize: "21px",
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                }}
              >
                {p.title}
              </h4>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px", lineHeight: 1.5 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLIENT REVIEWS */}
      <section
        id="reviews"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "0 clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "16px",
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
                  boxShadow: "0 2px 14px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ display: "inline-flex", gap: "3px", color: "#f9d230" }} aria-label="Rated 5 out of 5">
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
                      color: "#1D1D1F",
                    }}
                  >
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                </div>
                <figcaption style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/LOGO/oneimpact-logo.webp"
                    alt="Client logo"
                    style={{ display: "block", height: "20px", width: "auto", maxWidth: "65px", objectFit: "contain", opacity: 1 }}
                  />
                  <span style={{ fontSize: "14.5px", color: "#6E6E73", lineHeight: 1.3, letterSpacing: 0 }}>
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
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(32px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          <h2
            className="inf-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            How influencer marketing helps
          </h2>
          <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73" }}>
            Influencer marketing has become a powerful way for brands to connect with their audience authentically. Here’s how it can benefit your business:
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "14px",
          }}
        >
          {HELPS_CARDS.map((b, i) => (
            <div
              key={i}
              style={{
                background: "#F5F5F7",
                borderRadius: "22px",
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
                    background: b.chip,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={b.d} />
                  </svg>
                </span>
                <h3 className="inf-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25 }}>
                  {b.t}
                </h3>
              </div>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "15px", lineHeight: 1.5 }}>{b.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUT WHY ONEIMPACT? / WHY ONEIMPACT? TABS */}
      <section
        id="why-oneimpact"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(32px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)",
          borderTop: "1px solid #EBEBED",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div>
            <h2
              className="inf-heading"
              style={{
                margin: "0 0 10px",
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
              }}
            >
              {whyTab === 0 ? "But why OneImpact?" : "Why OneImpact?"}
            </h2>
            <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "52ch" }}>
              {whyTab === 0
                ? "Here's what makes us the right influencer marketing agency for your brand."
                : "Tailored strategies, data-driven creator selection and transparent campaign reporting."}
            </p>
          </div>

          {/* Tab Switcher */}
          <div
            role="tablist"
            aria-label="Why OneImpact tabs"
            style={{
              position: "relative",
              display: "inline-grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              background: "#F2F2F5",
              border: "1px solid #E5E5EA",
              borderRadius: "999px",
              padding: "4px",
              boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.06)",
              width: "min(460px, 100%)",
            }}
          >
            <span
              aria-hidden="true"
              className="btn-sheen"
              style={{
                position: "absolute",
                top: "4px",
                bottom: "4px",
                left: "4px",
                width: "calc((100% - 8px) / 2)",
                transform: `translateX(${whyTab * 100}%)`,
                transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)",
                background: "#f9d230",
                borderRadius: "999px",
                boxShadow: "0 3px 12px rgba(249, 210, 48, 0.45)",
              }}
            />
            {["But why OneImpact?", "Why OneImpact?"].map((label, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={whyTab === i}
                onClick={() => setWhyTab(i)}
                style={{
                  position: "relative",
                  zIndex: 1,
                  font: "inherit",
                  fontSize: "14.5px",
                  fontWeight: whyTab === i ? 700 : 500,
                  color: whyTab === i ? "#000000" : "#555558",
                  background: "transparent",
                  border: 0,
                  borderRadius: "999px",
                  minHeight: "42px",
                  padding: "8px 18px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "color 200ms ease",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.015em",
                }}
              >
                <span>{label}</span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "1px 7px",
                    borderRadius: "999px",
                    background: whyTab === i ? "rgba(0, 0, 0, 0.12)" : "rgba(0, 0, 0, 0.05)",
                    color: whyTab === i ? "#000000" : "#8E8E93",
                    transition: "all 200ms ease",
                  }}
                >
                  {i === 0 ? BUT_WHY_CARDS.length : WHY_HIGHLIGHT_CARDS.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab 0: But why OneImpact? */}
        {whyTab === 0 && (
          <div className="inf-why-grid">
            {BUT_WHY_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="inf-why-card"
                style={{
                  background: "#F5F5F7",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    className="why-icon"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background:
                        w.chip === "#f9d230"
                          ? "linear-gradient(135deg, #f9d230 0%, #e5bd19 100%)"
                          : "linear-gradient(135deg, #4066c6 0%, #3152a5 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      boxShadow:
                        w.chip === "#f9d230"
                          ? "0 3px 8px rgba(249, 210, 48, 0.35)"
                          : "0 3px 8px rgba(64, 102, 198, 0.35)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={w.chip === "#f9d230" ? "#1D1D1F" : "#FFFFFF"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h3 className="inf-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#1D1D1F" }}>
                    {w.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "#6E6E73", fontSize: "14.5px", lineHeight: 1.5 }}>{w.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 1: Why OneImpact? */}
        {whyTab === 1 && (
          <div className="inf-why-grid">
            {WHY_HIGHLIGHT_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="inf-why-card"
                style={{
                  background: "#F5F5F7",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    className="why-icon"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background:
                        idx % 2 === 0
                          ? "linear-gradient(135deg, #f9d230 0%, #e5bd19 100%)"
                          : "linear-gradient(135deg, #4066c6 0%, #3152a5 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      boxShadow:
                        idx % 2 === 0
                          ? "0 3px 8px rgba(249, 210, 48, 0.35)"
                          : "0 3px 8px rgba(64, 102, 198, 0.35)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={idx % 2 === 0 ? "#1D1D1F" : "#FFFFFF"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h3 className="inf-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#1D1D1F" }}>
                    {w.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "#6E6E73", fontSize: "14.5px", lineHeight: 1.5 }}>{w.a}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── EXPLORE OUR INFLUENCER MARKETING SERVICES */}
      <section
        id="services"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)",
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
            className="inf-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              maxWidth: "14ch",
            }}
          >
            Explore our influencer marketing services
          </h2>

          <div
            role="tablist"
            aria-label="Service groups"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              background: "#F2F2F5",
              border: "1px solid #E5E5EA",
              borderRadius: "999px",
              padding: "4px",
              boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.05)",
              width: "min(420px, 100%)",
            }}
          >
            <span
              aria-hidden="true"
              className="btn-sheen"
              style={{
                position: "absolute",
                top: "4px",
                bottom: "4px",
                left: "4px",
                width: "calc((100% - 8px) / 2)",
                transform: `translateX(${svcIdx * 100}%)`,
                transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)",
                background: "#f9d230",
                borderRadius: "999px",
                boxShadow: "0 3px 12px rgba(249, 210, 48, 0.45)",
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
                  fontWeight: svcIdx === i ? 650 : 500,
                  color: svcIdx === i ? "#000000" : "#555558",
                  background: "transparent",
                  border: 0,
                  borderRadius: "999px",
                  minHeight: "44px",
                  padding: "9px 18px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.015em",
                  transition: "color 200ms ease",
                }}
              >
                {grp.label}
              </button>
            ))}
          </div>
        </div>

        <p style={{ margin: "0 0 28px", fontSize: "19px", color: "#6E6E73", maxWidth: "56ch" }}>
          Influencer solutions that are based on insights, tailored for each platform and built to drive measurable results.
        </p>

        <div className="inf-services-grid">
          {activeServices.items.map((s, i) => (
            <div
              key={i}
              className="inf-service-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E5EA",
                borderRadius: "22px",
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 16px 36px -28px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "50%", background: s.dot, flex: "none" }} />
                <h3 className="inf-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700 }}>
                  {s.t}
                </h3>
              </div>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "15px", lineHeight: 1.5 }}>{s.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Separator */}
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
        <div style={{ height: "1px", background: "rgba(0, 0, 0, 0.08)" }} />
      </div>

      {/* ── WHAT WE OFFER (ACCORDIONS) */}
      <section
        id="offer"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)",
        }}
      >
        <h2
          className="inf-heading"
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
        <p style={{ margin: "0 0 24px", fontSize: "19px", color: "#6E6E73" }}>
          Pick a topic to see exactly how we approach it.
        </p>

        {/* Topic Pills */}
        <div className="scrollrow" role="tablist" aria-label="Offer topics">
          {OFFER_TOPICS.map((t, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className="press"
              aria-selected={offerIdx === i}
              onClick={() => {
                setOfferIdx(i);
                setOfferExpanded(false);
              }}
              style={{
                font: "inherit",
                fontSize: "15px",
                fontWeight: offerIdx === i ? 600 : 500,
                color: "#000000",
                background:
                  offerIdx === i
                    ? "linear-gradient(180deg, #fae066 0%, #f9d230 50%, #e5bd19 100%)"
                    : "#FFFFFF",
                border: `1.5px solid ${offerIdx === i ? "#000000" : "#D2D2D7"}`,
                boxShadow:
                  offerIdx === i
                    ? "0 4px 14px rgba(249, 210, 48, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)"
                    : "0 1px 2px rgba(0, 0, 0, 0.03)",
                borderRadius: "999px",
                minHeight: "44px",
                padding: "8px 18px",
                cursor: "pointer",
                transition: "all 180ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Accordion Panel */}
        <div
          role="tabpanel"
          style={{
            marginTop: "20px",
            background: "#F5F5F7",
            borderRadius: "28px",
            padding: "clamp(20px, 4vw, 44px)",
          }}
        >
          {activeOffer.intro && (
            <p className="prewrap" style={{ margin: "0 0 20px", fontSize: "17.5px", color: "#3A3A3C", maxWidth: "75ch" }}>
              {activeOffer.intro}
            </p>
          )}
          <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #D2D2D7" }}>
            {visibleOfferQs.map((f, qIdx) => (
              <details key={qIdx} style={{ borderTop: "1px solid #D2D2D7" }}>
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
                  <svg className="chev" style={{ flex: "none" }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="prewrap" style={{ margin: "0 0 18px", color: "#3A3A3C", maxWidth: "75ch" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          {activeOffer.qs.length > 5 && (
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <button
                type="button"
                className="press y btn-sheen"
                onClick={() => setOfferExpanded(!offerExpanded)}
                style={{
                  font: "inherit",
                  fontSize: "14.5px",
                  fontWeight: 650,
                  color: "#000000",
                  background: "linear-gradient(180deg, #fae066 0%, #f9d230 50%, #e5bd19 100%)",
                  border: "1.5px solid #000000",
                  borderRadius: "999px",
                  minHeight: "42px",
                  padding: "8px 22px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(249, 210, 48, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)",
                }}
              >
                {offerExpanded ? "Show fewer questions" : `Load more (${activeOffer.qs.length - 5} more questions)`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── USP CAROUSEL */}
      <section id="usps" style={{ background: "#F5F5F7", padding: "clamp(36px, 4.5vw, 56px) 0" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2
                className="inf-heading"
                style={{
                  margin: 0,
                  fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                  maxWidth: "16ch",
                }}
              >
                Influencer marketing that fits your brand. Not a template.
              </h2>
              <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "50ch" }}>
                Swipe through what you get with OneImpact as your influencer marketing agency.
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div ref={trackRef} className="car-view" onScroll={handleTrackScroll} aria-roledescription="carousel">
            <div className="car-track">
              {USP_CARDS.map((u, i) => (
                <div
                  key={i}
                  className="car-card"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "28px",
                    padding: "28px 26px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
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
                      flex: "none",
                    }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={u.d} />
                    </svg>
                  </span>
                  <div>
                    <h3 className="inf-heading" style={{ margin: 0, fontSize: "28px", letterSpacing: "-0.04em", fontWeight: 700, lineHeight: 1.1 }}>
                      {u.head}
                    </h3>
                    <p style={{ fontSize: "17px", color: "#3A3A3C", marginTop: "8px" }}>{u.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: "24px", height: "4px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", maxWidth: "240px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${Math.round(((carIdx + 1) / USP_CARDS.length) * 100)}%`,
                background: "#000000",
                borderRadius: "999px",
                transition: "width 400ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT: INFLUENCER MARKETING MADE FOR MUMBAI */}
      <section
        id="mumbai"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(36px, 4.5vw, 56px) clamp(16px, 3vw, 32px)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2
              className="inf-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              Influencer Marketing Made for Mumbai
            </h2>
            <p style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>
              In a city like Mumbai, where culture, commerce and creativity collide, influencers shape conversations and drive consumer choices. Mumbai’s creator landscape is incredibly diverse, and we tailor campaigns that reflect this diversity, whether you’re targeting a niche Gen Z audience or a broader urban demographic.
            </p>
            <p style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>
              Our team manages the entire process, from influencer discovery and outreach to content planning, approvals and performance reporting. We share detailed metrics on reach, engagement, audience quality and ROI, and we build long-term brand-influencer partnerships that grow with your business.
            </p>
            <p style={{ color: "#000000", fontWeight: 600, fontSize: "18px", margin: 0 }}>
              Looking to make an impact in Mumbai’s competitive digital space? Turn local influence into lasting brand value.
            </p>
            <a
              className="press y btn-sheen"
              href="#audit"
              style={{
                alignSelf: "flex-start",
                fontWeight: 650,
                fontSize: "17px",
                padding: "14px 24px",
                minHeight: "52px",
                background: "#f9d230",
                color: "#000000",
                textDecoration: "none",
                border: 0,
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Partner with OneImpact
            </a>
          </div>

          {/* Visual: Phone mockup */}
          <figure
            style={{
              margin: 0,
              borderRadius: "32px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 40px 80px -40px rgba(0,0,0,0.35)",
            }}
            aria-label="Illustration of an influencer post on a phone"
          >
            <div style={{ position: "relative", height: "230px", background: "#E8F0FF", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "22px",
                  bottom: "-30px",
                  width: "132px",
                  marginLeft: "-66px",
                  borderRadius: "26px",
                  background: "#000000",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "19px",
                    background: "#FFFFFF",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#f9d230" }} />
                    <span style={{ height: "6px", width: "46px", borderRadius: "4px", background: "#E5E5EA" }} />
                  </div>
                  <div style={{ height: "98px", borderRadius: "10px", background: "#D6E5FF", position: "relative" }}>
                    <span
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "12px",
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "#f9d230",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "6px", color: "#000000" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5h16v11H9l-5 4z" />
                    </svg>
                  </div>
                  <span style={{ height: "6px", width: "80%", borderRadius: "4px", background: "#E5E5EA" }} />
                </div>
              </div>
            </div>
            <div style={{ padding: "10px 14px 14px", display: "flex", flexDirection: "column" }}>
              {[
                { title: "Your Brand Collab", meta: "Reel with a local creator. Posted 2h ago." },
                { title: "Creator Shortlist", meta: "Fashion and lifestyle, Mumbai" },
                { title: "Content Approval", meta: "Draft ready for review" },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 10px",
                    borderRadius: "16px",
                    ...(i === 0 ? { background: "#FFF4DE" } : {}),
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      fontSize: "13px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: i === 0 ? "#f9d230" : "#E5E5EA",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span style={{ fontWeight: 650, fontSize: "16px" }}>{r.title}</span>
                    <span style={{ fontSize: "13.5px", color: "#6E6E73", letterSpacing: 0 }}>{r.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Creator reels in action"
        subtitle="Explore creator-led stories and brand films right inside the page."
      />

      {/* ── FAQs */}
      <section
        id="faq"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)",
        }}
      >
        <h2
          className="inf-heading"
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
        <p style={{ margin: "0 0 24px", fontSize: "19px", color: "#6E6E73" }}>
          Anything else?{" "}
          <a href="https://wa.me/918369018104" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
            Message us on WhatsApp
          </a>
          .
        </p>

        {/* FAQ tab switcher */}
        <div style={{ marginBottom: "24px" }}>
          <div
            role="tablist"
            aria-label="FAQ groups"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: `repeat(${FAQ_GROUPS.length}, minmax(0, 1fr))`,
              background: "#F2F2F5",
              border: "1px solid #E5E5EA",
              borderRadius: "999px",
              padding: "4px",
              boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.05)",
              width: "min(360px, 100%)",
            }}
          >
            <span
              aria-hidden="true"
              className="btn-sheen"
              style={{
                position: "absolute",
                top: "4px",
                bottom: "4px",
                left: "4px",
                width: `calc((100% - 8px) / ${FAQ_GROUPS.length})`,
                transform: `translateX(${faqIdx * 100}%)`,
                transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)",
                background: "#f9d230",
                borderRadius: "999px",
                boxShadow: "0 3px 12px rgba(249, 210, 48, 0.45)",
              }}
            />
            {FAQ_GROUPS.map((g, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                className="press"
                aria-selected={faqIdx === i}
                onClick={() => {
                  setFaqIdx(i);
                  setFaqExpanded(false);
                }}
                style={{
                  position: "relative",
                  zIndex: 1,
                  font: "inherit",
                  fontSize: "15px",
                  fontWeight: faqIdx === i ? 650 : 500,
                  color: faqIdx === i ? "#000000" : "#555558",
                  background: "transparent",
                  border: 0,
                  borderRadius: "999px",
                  minHeight: "44px",
                  padding: "9px 18px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.015em",
                  transition: "color 200ms ease",
                }}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #E5E5EA" }}>
          {visibleFaqs.map((f, qIdx) => (
            <details key={qIdx} style={{ borderTop: "1px solid #E5E5EA" }}>
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
                <svg className="chev" style={{ flex: "none" }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="prewrap" style={{ margin: "0 0 20px", color: "#3A3A3C", maxWidth: "75ch" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* Load More button */}
        {activeFaqGroup.qs.length > 5 && (
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              type="button"
              className="press y btn-sheen"
              onClick={() => setFaqExpanded(!faqExpanded)}
              style={{
                font: "inherit",
                fontSize: "14.5px",
                fontWeight: 650,
                color: "#000000",
                background: "linear-gradient(180deg, #fae066 0%, #f9d230 50%, #e5bd19 100%)",
                border: "1.5px solid #000000",
                borderRadius: "999px",
                minHeight: "42px",
                padding: "8px 22px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(249, 210, 48, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)",
              }}
            >
              {faqExpanded ? "Show fewer" : `Load more (${activeFaqGroup.qs.length - 5} more)`}
            </button>
          </div>
        )}
      </section>

      {/* ── FINAL CTA + SECOND FORM */}
      <section
        id="audit2"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(16px, 3vw, 32px) clamp(44px, 6vw, 76px)",
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
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-80px",
              bottom: "-120px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "#f9d230",
              opacity: 0.5,
              filter: "blur(80px)",
            }}
          />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2
              className="inf-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              Creators that connect.
            </h2>
            <p style={{ fontSize: "19px", color: "#3A3A3C", maxWidth: "44ch", margin: 0 }}>
              Book a free influencer marketing consultation and see which creators fit your brand. No obligation.
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

          {/* Bottom form */}
          <div
            className="form-card"
            style={{
              background: "#000000",
              borderRadius: "30px",
              padding: "clamp(24px, 3.2vw, 36px)",
              color: "#FFFFFF",
              boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 40px 80px -40px rgba(0,0,0,0.5)",
            }}
          >
            {!sent2 ? (
              <form
                onSubmit={handleSubmit2}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <h3 className="inf-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.035em", fontWeight: 700 }}>
                  Get your free influencer consultation
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-name" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Your name
                  </label>
                  <input
                    id="btm-name"
                    className="fd"
                    type="text"
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
                  <label htmlFor="btm-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Phone or WhatsApp number
                  </label>
                  <input
                    id="btm-phone"
                    className="fd"
                    type="tel"
                    inputMode="tel"
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
                  <label htmlFor="btm-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Website or Instagram handle
                  </label>
                  <input
                    id="btm-handle"
                    className="fd"
                    type="text"
                    placeholder="@yourbrand"
                    value={handle2}
                    onChange={(e) => setHandle2(e.target.value)}
                    onBlur={() => setTouched2((t) => ({ ...t, handle: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showHandle2Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showHandle2Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter your website or Instagram handle
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
                    letterSpacing: "-0.01em",
                    color: "#000000",
                    background: "#f9d230",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "54px",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Book my free consultation
                </button>
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
                    background: "#f9d230",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 role="status" className="inf-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>
                  Request received
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name2}. We’ll look at {handle2} and get in touch on {phone2}.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER */}
      <footer style={{ background: "#F5F5F7", color: "#000000", fontSize: "13.5px", letterSpacing: 0 }}>
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "40px clamp(16px, 3vw, 32px) 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGO/oneimpact-logo.webp"
              alt="One Impact"
              style={{ display: "block", width: "105px", height: "auto", marginBottom: "3px" }}
            />
            <span style={{ color: "#6E6E73" }}>360-degree digital marketing for that ONE big bang IMPACT.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Services</span>
            <a href="/seo" style={{ color: "#6E6E73", textDecoration: "none" }}>
              SEO and AIO
            </a>
            <a href="/social-media-marketing" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Social media
            </a>
            <a href="/influencer-marketing" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Influencer marketing
            </a>
            <a href="/branding-services" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Branding and design
            </a>
            <a href="/web-development" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Website development
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Company</span>
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>
              About us
            </a>
            <a href="#proof" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Why us
            </a>
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Blog
            </a>
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
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
          <div style={{ borderTop: "1px solid #D2D2D7", color: "#6E6E73", paddingTop: "16px", paddingBottom: "24px" }}>
            © 2026 One Impact. All rights reserved.
          </div>
        </div>
      </footer>

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
