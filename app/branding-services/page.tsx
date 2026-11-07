"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";

const NOTICES = [
  "Free branding consultation. Fill the form and our team will get back to you.",
  "Brand messaging that stays consistent across your website, social media and AI search.",
  "Brand strategy, identity, naming, packaging and guidelines under one roof.",
  "Research-led branding. No templates, no guesswork.",
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
    head: "Distinct",
    text: "Distinct, bold identity",
    d: "M12 3a9 9 0 1 0 0 18c1 0 1.6-.8 1.3-1.7-.5-1.3.4-2.3 1.7-2.3H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10zM8 12h.01M10 7.5h.01M15 7.5h.01",
    chip: "#FFE7B8",
  },
  {
    head: "End-to-end",
    text: "End-to-end branding",
    d: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    chip: "#D6E5FF",
  },
  {
    head: "Positioned",
    text: "Strategic brand positioning",
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    chip: "#FFE7B8",
  },
  {
    head: "Emotive",
    text: "Emotionally driven messaging",
    d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
    chip: "#D6E5FF",
  },
  {
    head: "Strategy-led",
    text: "Strategy-led branding solutions",
    d: "M12 3a6 6 0 0 0-3 11.2V17h6v-2.8A6 6 0 0 0 12 3zM9 21h6",
    chip: "#FFE7B8",
  },
  {
    head: "Consistent",
    text: "Consistent cross-platform identity",
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9",
    chip: "#D6E5FF",
  },
  {
    head: "Customer-first",
    text: "Customer-first brand approach",
    d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6",
    chip: "#FFE7B8",
  },
  {
    head: "Data-backed",
    text: "Data-backed creative direction",
    d: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    chip: "#D6E5FF",
  },
  {
    head: "Storytelling",
    text: "Impactful storytelling for engagement",
    d: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
    chip: "#FFE7B8",
  },
  {
    head: "Growth-led",
    text: "Messaging that drives growth",
    d: "M3 17l6-6 4 4 8-8M15 7h6v6",
    chip: "#D6E5FF",
  },
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
    chip: "#FFBA39",
  },
  {
    t: "Stronger first impressions",
    a: "Consistent visuals and messaging build trust from the first interaction. People are more likely to engage with brands they recognize.",
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    chip: "#7BAAFF",
  },
  {
    t: "Customer loyalty",
    a: "When your brand reflects your values, people connect emotionally. That connection keeps them coming back.",
    d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
    chip: "#FFBA39",
  },
  {
    t: "Better marketing results",
    a: "With clear messaging, your campaigns become more focused. This makes every marketing effort go further.",
    d: "M3 10v4h4l6 4V6L7 10H3zM17 8a5 5 0 0 1 0 8",
    chip: "#7BAAFF",
  },
  {
    t: "Higher perceived value",
    a: "A well-presented brand feels premium. Customers are often willing to pay more for a brand they trust.",
    d: "M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.5 13.5L7 21l5-3 5 3-1.5-7.5",
    chip: "#FFBA39",
  },
  {
    t: "Improved internal alignment",
    a: "A defined brand gives your team direction. Everyone on your team knows how to represent your business.",
    d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6",
    chip: "#7BAAFF",
  },
];

const BUT_WHY_CARDS = [
  {
    t: "Brand strategy first",
    a: "We help you define what your brand stands for, who it’s for, and how it should appear in the world.",
    chip: "#FFBA39",
  },
  {
    t: "Brand identity creation",
    a: "We create a look and feel that reflects your brand’s personality and values, including colors, fonts, and tone of voice.",
    chip: "#7BAAFF",
  },
  {
    t: "Research-driven strategy",
    a: "We rely on research to understand your industry, audience, and competitors, so decisions come from insight, not guesswork.",
    chip: "#FFBA39",
  },
  {
    t: "Experience and expertise",
    a: "We work with brands across different verticals and stages of growth, and adapt to what each one needs.",
    chip: "#7BAAFF",
  },
  {
    t: "Audience connection",
    a: "We help you define your audience and create messages that feel personal and relatable.",
    chip: "#FFBA39",
  },
  {
    t: "Strategic brand positioning",
    a: "We identify what makes your brand different and valuable, so you stand out while staying relevant.",
    chip: "#7BAAFF",
  },
  {
    t: "Brand equity and growth",
    a: "We help your brand build recognition and trust over time: a long-term asset, not a short-term fix.",
    chip: "#FFBA39",
  },
  {
    t: "End-to-end support",
    a: "We guide your brand from idea to execution, whether you’re starting fresh or rebranding.",
    chip: "#7BAAFF",
  },
];

const WHY_HIGHLIGHT_CARDS = [
  {
    t: "We start with clarity",
    a: "Understanding your business, goals, and values is our first step. We listen closely and ask the right questions.",
  },
  {
    t: "Insight-led process",
    a: "We study your market, your competitors, and your audience to find real opportunities. Every decision is backed by insight, not guesswork.",
  },
  {
    t: "Positioning with purpose",
    a: "We help define your place in the market. Clear positioning makes it easier for customers to understand what you offer and why it matters.",
  },
  {
    t: "Consistency across channels",
    a: "We develop messaging and visuals that work across platforms. This consistency builds trust over time.",
  },
  {
    t: "Future-focused strategy",
    a: "We create flexible frameworks that support growth and adapt to change. It’s built to last, not just launch.",
  },
  {
    t: "A collaborative approach",
    a: "We see brand building as a partnership. You’re involved in key steps, with room for input and feedback.",
  },
  {
    t: "Customized solutions",
    a: "No two brands are the same. We tailor our strategies to fit your unique goals, audience, and market needs.",
  },
  {
    t: "Results-driven approach",
    a: "We focus on outcomes that matter, such as recognition, consistency, and audience connection. Every branding decision is made with your business goals in mind.",
  },
];

const SVC_GROUPS = [
  {
    label: "Core branding services",
    items: [
      {
        t: "Brand identity development",
        a: "We help create the visual and verbal elements that define your brand, like your logo, color palette, typography, and tone of voice. This ensures your brand looks and feels the same across all platforms, building recognition and trust over time.",
        dot: "#FFBA39",
      },
      {
        t: "Brand positioning",
        a: "This involves identifying what makes your brand unique and where it fits in the market. We define how you want customers to perceive your brand, helping you stand out from competitors with a clear and focused message.",
        dot: "#7BAAFF",
      },
      {
        t: "Brand messaging and storytelling",
        a: "We craft messaging that reflects your brand’s values and voice. This includes taglines, mission statements, and brand stories that connect with your audience on an emotional level and create a lasting impression.",
        dot: "#FFBA39",
      },
      {
        t: "Brand audits and research",
        a: "We assess your current brand performance through research and analysis. This helps identify gaps, strengths, and opportunities, allowing us to refine your brand strategy based on data and customer insights.",
        dot: "#7BAAFF",
      },
      {
        t: "Brand consistency and guidelines",
        a: "We create brand guidelines that define how your brand should look, sound, and feel across all platforms. This includes logo usage, color schemes, tone of voice, and visual elements, ensuring your brand remains consistent everywhere.",
        dot: "#FFBA39",
      },
      {
        t: "Brand naming",
        a: "We develop distinctive, memorable, and meaningful names for brands, products, and services. The right name conveys your values, tone, and positioning, and is built to last.",
        dot: "#7BAAFF",
      },
    ],
  },
  {
    label: "Platform branding",
    items: [
      {
        t: "E-commerce brand strategy",
        a: "We help online businesses build a unique brand presence that connects with their target audience. From product messaging to website tone and visuals, we align every element with your business goals to boost trust and conversions.",
        dot: "#FFBA39",
      },
      {
        t: "Local brand strategy",
        a: "This focuses on building your brand’s identity within a specific geographic area. We tailor your messaging, visuals, and positioning to connect with local audiences and make your brand more relatable to the community.",
        dot: "#7BAAFF",
      },
      {
        t: "Digital brand strategy",
        a: "We develop a clear brand identity for your digital presence across websites, social media, ads, and more. This includes defining your brand voice, visual style, and messaging to ensure consistency and impact online.",
        dot: "#FFBA39",
      },
    ],
  },
];

const OFFER_TOPICS: { label: string; intro?: string; qs: { q: string; a: string }[] }[] = [
  {
    label: "Brand proposition",
    qs: [
      {
        q: "What is a brand proposition?",
        a: "A brand proposition is the main promise a brand makes to its customers. It explains what the brand is all about, what it offers, and what makes it different from its competitors. It shows how the brand can help people and why they should choose it. A strong brand proposition gives people a clear reason to trust and connect with the brand, and it’s what drives all your marketing efforts.\n\nAt OneImpact, we work with brands to create simple and clear brand propositions that truly reflect who they are. We make sure this message stays the same everywhere your brand appears.",
      },
    ],
  },
  {
    label: "Brand positioning",
    qs: [
      {
        q: "What is brand positioning?",
        a: "Brand positioning is the strategy of placing your brand in consumers’ minds in a way that distinguishes it from competitors. It defines how you want your audience to perceive your brand relative to others in the market. Effective brand positioning focuses on the unique traits, values, or benefits that set your brand apart. It influences customer perception and helps shape all your communication.\n\nOneImpact works closely with brands to identify their competitive edge and position them strategically in the market. We make sure the positioning is reflected clearly at every touchpoint.",
      },
    ],
  },
  {
    label: "Brand architecture",
    qs: [
      {
        q: "What is brand architecture?",
        a: "Brand architecture is a way to organize all the parts of your brand, like your parent brand, sub-brands, products, or services, so everything makes sense and works well together. It helps people inside and outside your business understand how everything is connected. When your brand is well organized, it’s easier to build trust, stay consistent, and plan your marketing activities.\n\nAt OneImpact, we help brands set up a clear and simple structure for all their offerings. This makes it easier to share the right message across all marketing channels.",
      },
    ],
  },
  {
    label: "Brand naming",
    qs: [
      {
        q: "What is brand naming?",
        a: "Brand naming is the process of creating a distinctive, memorable, and meaningful name for a brand, product, or service. It plays a critical role in brand identity, influencing customer recognition, emotional connection, and overall brand recall. The right name can convey the brand’s values, tone, and market positioning, while the wrong one can limit growth or confuse the audience. It’s a foundational step that impacts everything from packaging to marketing.\n\nOneImpact collaborates with businesses to develop names that reflect their brand personality and are built to last. We make sure chosen names work well across your digital channels.",
      },
    ],
  },
  {
    label: "Tonality and messaging",
    qs: [
      {
        q: "What is brand tonality?",
        a: "Brand tonality refers to the way a brand communicates with its target audience. It sets the mood or personality of the brand, whether that’s friendly, professional, fun, or serious. With a clear tonality and messaging in place, all communication feels consistent across platforms.",
      },
      {
        q: "What is brand messaging?",
        a: "Brand messaging refers to the core narrative that defines what a brand stands for, i.e., its values, promise, tone, and the way it communicates with its audience. It shapes how customers perceive the brand and forms the foundation for all communication, from ad copy to website content and customer interactions. Strong brand messaging ensures consistency across all platforms, helping brands build trust and recognition.\n\nAt OneImpact, we help brands define a clear and compelling brand voice that aligns with their values and audience. Our messaging strategy is integrated into every touchpoint, including social media marketing, to ensure brand consistency and connection.",
      },
    ],
  },
  {
    label: "Brand identity design",
    qs: [
      {
        q: "What is brand identity design?",
        a: "Brand identity design is the visual and conceptual representation of a brand. This includes logos, color schemes, typography, and other design elements that create a cohesive and memorable look. It’s how a brand presents itself to the world and differentiates itself from competitors. A strong brand identity builds emotional connections with consumers and fosters recognition over time. It ensures that every visual and design cue reflects the brand’s personality and essence.\n\nOneImpact creates strong and memorable brand identities that connect with your audience. From designing your logo to ensuring your brand looks consistent and professional across all platforms, we help your brand stand out and stay recognizable.",
      },
    ],
  },
  {
    label: "Visual brand language",
    qs: [
      {
        q: "What is visual brand language?",
        a: "Visual brand language is the consistent use of design elements like shapes, colors, typography, and imagery that create a recognizable aesthetic. It communicates the brand’s values and tone without the need for words. This visual consistency helps create trust and recognition in the consumer’s mind. It goes beyond logos to include how your brand is visually represented across digital and physical spaces.\n\nOur team at OneImpact builds a cohesive visual brand language that is adaptable across print, web, and especially social media marketing channels, ensuring your brand looks aligned and professional wherever it appears.",
      },
    ],
  },
  {
    label: "Packaging design",
    qs: [
      {
        q: "What is packaging design?",
        a: "Packaging design involves creating the exterior of a product, including its box, wrapper, or container. Packaging is not just about aesthetics: it’s a crucial brand touchpoint that influences buying decisions and enhances user experience. Great packaging captures attention, communicates value, and reinforces brand identity. In many cases, packaging becomes the first interaction a customer has with your product.\n\nOneImpact delivers packaging designs that are both functional and visually appealing. We align packaging with your branding strategy and wider brand visuals to create a consistent brand narrative.",
      },
    ],
  },
  {
    label: "Communication design",
    qs: [
      {
        q: "What is communication design?",
        a: "Communication design is the practice of strategically conveying messages through visual media. It combines graphic design, storytelling, and technology to influence how audiences interpret information. This can include everything from brochures and advertisements to digital campaigns and UI design. The goal is to make communication both effective and visually engaging.\n\nAt OneImpact, we create targeted communication designs that speak to your audience clearly and creatively. From print media to digital and social media marketing, our designs are crafted to inspire action and build connections.",
      },
    ],
  },
  {
    label: "Logo design",
    qs: [
      {
        q: "What is logo design?",
        a: "Logo design is the process of creating a unique visual symbol that represents a brand’s identity. It’s often the first element a customer notices and plays a crucial role in making a memorable impression. A well-designed logo reflects a brand’s values, tone, and positioning in the market. Your brand’s logo needs to be versatile, timeless, and easily recognizable across different platforms.\n\nAt OneImpact, we craft impactful logos that resonate with your target audience and align with your overall branding.",
      },
      {
        q: "What is brand management?",
        a: "Brand management involves maintaining, improving, and upholding a brand so that it consistently delivers a positive image and builds customer loyalty. It covers everything from visual identity and messaging to customer perception and experience. Effective brand management ensures that all brand communications stay consistent and reflect the brand’s core values.\n\nOneImpact provides end-to-end brand management support to help businesses maintain consistency, credibility, and engagement across all touchpoints, including digital and offline media.",
      },
    ],
  },
  {
    label: "Strategy consulting",
    qs: [
      {
        q: "What is brand strategy consulting?",
        a: "Brand strategy consulting is the process of evaluating and guiding the direction of a brand to make sure it aligns with business objectives and market needs. It includes identifying your brand’s mission, voice, target audience, and market positioning. A strong brand strategy helps establish a clear identity and fosters long-term brand equity.\n\nOur consultants at OneImpact offer guidance to help businesses refine their messaging and carry it consistently across every marketing channel.",
      },
    ],
  },
  {
    label: "Research and insights",
    qs: [
      {
        q: "What is brand research?",
        a: "Brand research involves analyzing the market, audience behavior, competitor brands, and consumer trends to gather insights that influence brand strategy. It helps in understanding how a brand is perceived and what changes are needed to strengthen its position. This research is critical for making informed branding decisions that resonate with the intended audience.\n\nOneImpact uses data-driven research methods to uncover brand insights that inform both creative direction and targeted marketing campaigns.",
      },
      {
        q: "How do consumer insights impact brand strategy?",
        a: "Consumer insights reveal what drives your audience’s decisions, preferences, and emotions. These insights are essential for tailoring a brand’s messaging, tone, and visuals to meet real customer needs. When integrated into brand strategy, they improve engagement, loyalty, and overall customer experience.\n\nAt OneImpact, we use consumer insights to shape personalized branding strategies that drive meaningful connections.",
      },
    ],
  },
  {
    label: "Reputation management",
    qs: [
      {
        q: "What is brand reputation management?",
        a: "Brand reputation management is the process of monitoring and influencing how a brand is perceived online and offline. It includes handling customer reviews, feedback, crisis communication, and public relations. A positive reputation can significantly boost trust, while negative sentiment can harm credibility.\n\nOneImpact helps brands manage their reputation proactively through regular monitoring, responsive strategies, and well-aligned social media efforts.",
      },
    ],
  },
  {
    label: "Digital branding",
    qs: [
      {
        q: "What is digital branding?",
        a: "Digital branding is the practice of creating and promoting a brand presence across digital platforms. It includes your website, social media marketing, email campaigns, and digital ads. A strong digital brand ensures consistency in tone, messaging, and visuals across all channels.\n\nOur team at OneImpact makes sure your digital branding stays impactful, engaging, and consistent, especially across your social media marketing channels.",
      },
    ],
  },
  {
    label: "Ongoing optimisation",
    qs: [
      {
        q: "What is ongoing brand strategy optimization?",
        a: "Ongoing brand strategy optimization is the process of refining brand tactics based on market feedback, performance data, and evolving customer preferences. It keeps the brand relevant, competitive, and aligned with changing trends. This process often involves revisiting messaging, visuals, and platform strategies, including social media marketing.\n\nOneImpact supports brands with regular audits and updates, ensuring long-term brand growth through adaptive and strategic plans.",
      },
    ],
  },
];

const FAQ_GROUPS = [
  {
    label: "Brand identity",
    qs: [
      {
        q: "How does brand strategy improve a business’s identity?",
        a: "A well-defined branding strategy lays the foundation for how your business is perceived. It helps clarify your mission, values, and personality, making it easier for customers to connect with you. By establishing a consistent voice and visual identity, branding ensures your business stands out and becomes more recognizable in the market. This strengthens your overall identity and builds trust over time.",
      },
      {
        q: "What role does market research play in brand positioning?",
        a: "Market research provides valuable insights into your target audience, competitors, and industry trends. It allows you to position your brand effectively by identifying what makes your business unique and relevant. It helps make sure your messaging resonates with the right people and highlights the strengths that set you apart. In short, market research lays the groundwork for a strategic and focused brand presence.",
      },
      {
        q: "How does storytelling strengthen your brand’s position?",
        a: "Storytelling brings your branding to life by creating emotional connections with your audience. When you share the “why” behind your business, its journey, values, and impact, it becomes easier for people to relate to and remember your brand. Stories humanize your brand, making it more approachable and engaging. This emotional bond can increase customer loyalty and make your brand more memorable.",
      },
      {
        q: "Why is consistency important in branding?",
        a: "Consistency in branding ensures that every customer interaction, online or offline, feels familiar and aligned with your identity. It builds trust, reinforces recognition, and helps your brand stay top-of-mind. When your visuals, messaging, and tone remain uniform across platforms, customers know what to expect and are more likely to engage. Inconsistent branding, on the other hand, can confuse and alienate your audience.",
      },
      {
        q: "How can a strong brand strategy help you grow?",
        a: "A strong branding strategy gives your business direction and clarity. It helps you communicate your value, attract the right audience, and build long-term relationships. With a focused brand approach, you can create a lasting impression, increase customer loyalty, and open up new expansion opportunities. At OneImpact, we design branding strategies that support your growth every step of the way.",
      },
    ],
  },
  {
    label: "Customer loyalty",
    qs: [
      {
        q: "How does brand strategy impact customer loyalty?",
        a: "A clear and consistent brand strategy builds trust by delivering a familiar experience every time a customer interacts with your business. When customers feel connected to your brand’s values and messaging, they’re more likely to return and recommend you to others. Over time, this trust turns into loyalty, driving long-term relationships and repeat business.",
      },
      {
        q: "What role does customer feedback play in refining your brand strategy?",
        a: "Customer feedback offers valuable insights into how your brand is perceived and where improvements are needed. Listening to what your audience says helps you align your messaging, tone, and overall brand direction with their expectations. This ongoing feedback loop keeps your strategy relevant and ensures your brand evolves in a way that resonates with your audience.",
      },
      {
        q: "Why is having a strong online presence important for your brand?",
        a: "A strong online presence increases visibility, builds credibility, and allows your brand to connect with audiences across multiple platforms. In today’s digital-first world, most customers interact with a brand online before making a decision. OneImpact helps businesses build a consistent digital brand identity that supports growth and improves engagement.",
      },
      {
        q: "How does a customer-focused brand strategy enhance conversions?",
        a: "When your brand messaging speaks directly to customer needs, it becomes easier to gain their attention and trust. A customer-focused strategy ensures your products, services, and content communicate value. This relevance encourages users to take action.",
      },
      {
        q: "What is the impact of brand consistency across all touchpoints?",
        a: "Brand consistency ensures your audience experiences the same tone, visuals, and messaging across every channel, be it your website, social media, or ads. This creates a cohesive identity that’s easy to recognize and trust. Over time, consistency strengthens brand recall and reinforces credibility, making your business more memorable and reliable.",
      },
    ],
  },
  {
    label: "Brand challenges",
    qs: [
      {
        q: "Why isn’t our brand gaining recognition in a competitive market?",
        a: "In a saturated market, visibility depends on more than just being present. It’s about standing out from the clutter. If your branding lacks a clear identity or consistent messaging, your audience may overlook it. Recognition often fails when there’s no emotional connection or strong value proposition. An undefined brand voice or visuals that don’t resonate can dilute your presence.",
      },
      {
        q: "How can we strengthen our brand’s market presence?",
        a: "Strengthening your market presence starts with refining your branding so it’s aligned with your audience’s expectations. This includes consistent visual elements, messaging, tone, and a well-defined brand personality. Channels like social media and content marketing can amplify your brand voice. Regular performance analysis also helps fine-tune the strategy for better reach.",
      },
      {
        q: "Why isn’t our brand attracting the right audience?",
        a: "If your branding doesn’t reflect who your product or service is for, you might attract a mismatch of customers. Misalignment between your brand message and audience needs can lead to low engagement or conversions. Understanding your ideal customer persona is key. Tailored messaging and visuals that speak directly to their aspirations can improve targeting.",
      },
      {
        q: "How can we differentiate our brand from competitors?",
        a: "Standing out in a competitive space means clearly defining your unique value proposition and weaving it into every touchpoint of your branding. Differentiation must be consistent and authentic, from visuals and voice to the customer experience. Competitive analysis also helps identify gaps or opportunities. Unique storytelling can further set your brand apart.",
      },
      {
        q: "Why isn’t our brand’s story connecting with customers?",
        a: "If your brand story is too generic, unclear, or lacks emotional depth, it may not resonate with your target group. Authentic storytelling is a crucial part of branding that connects you to your audience on a human level. Stories should reflect your brand’s mission, values, and customer impact. Emotionally driven content often drives higher engagement and recall.",
      },
      {
        q: "How can we make sure our brand strategy is driving results?",
        a: "You can measure results through KPIs like brand awareness, engagement, customer retention, and conversion rates. A good branding strategy is backed by data and adapts based on performance. It should evolve with market trends and consumer behavior. Regular audits and feedback loops are essential to keep it effective.",
      },
      {
        q: "Why isn’t our branding resulting in strong customer loyalty?",
        a: "Inconsistent or disconnected branding can lead to weak customer trust and loyalty. Loyalty is built through reliable experiences, consistent messaging, and a strong emotional connection. When customers relate to your brand values, they’re more likely to return. Active engagement and post-purchase care also contribute to long-term loyalty.",
      },
      {
        q: "How can we improve our brand’s equity and long-term value?",
        a: "Brand equity is built over time through positive experiences, a strong identity, and customer trust. Consistency in branding, backed by high-quality offerings and clear communication, adds to this value. Strategic positioning and customer advocacy also contribute to long-term brand strength. Investing in customer relationships and feedback can sustain growth.",
      },
      {
        q: "How do we enhance our brand’s positioning in the market?",
        a: "Effective positioning involves highlighting what makes your brand unique and valuable. It’s about aligning your branding with your audience’s needs and market trends. Clarity in communication and a strong presence across touchpoints help improve perception. Thought leadership and brand storytelling can also reinforce your position.",
      },
      {
        q: "Why isn’t our brand creating the emotional connection we want with consumers?",
        a: "Emotional connection comes from authenticity, relatability, and consistency in branding. If your brand feels impersonal or disconnected, consumers may not engage on a deeper level. Relatable stories, human-centered visuals, and meaningful interactions help. Emotional branding isn’t just about selling, it’s about building trust.",
      },
      {
        q: "Why choose OneImpact for your brand strategy needs?",
        a: "At OneImpact, we approach branding as more than just visuals: it’s about creating lasting impressions. Our strategies are rooted in research, creativity, and customer understanding. We help brands find their voice, build presence, and foster loyalty in competitive markets. With a focus on clarity and consistency, we craft branding that delivers real results.",
      },
    ],
  },
];

export default function BrandingServicesPage() {
  // State for What We Do / Why One Impact highlight tabs
  const [whyTab, setWhyTab] = useState(0);

  // State for Service tabs (Core branding services vs Platform branding)
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
      <style jsx global>{`
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
          background-color: #ffc75e !important;
        }
        .branding-landing-root :focus-visible {
          outline: 3px solid #7baaff;
          outline-offset: 3px;
        }
        .branding-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .branding-landing-root .fd:focus {
          outline: none;
          border-color: #ffba39 !important;
          box-shadow: 0 0 0 4px rgba(255, 186, 57, 0.3);
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
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
        }
        .branding-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: thin;
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
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#FFFFFF" }}>
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
            padding:
              "clamp(92px, 10vw, 120px) clamp(16px, 3vw, 32px) clamp(44px, 5.5vw, 68px)",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#6E6E73",
                letterSpacing: "-0.01em",
              }}
            >
              Branding services by OneImpact
            </span>

            <h1
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 700,
                maxWidth: "16ch",
              }}
            >
              Ready to stand out? Start today with OneImpact.
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "clamp(1.2rem, 1.9vw, 1.55rem)",
                lineHeight: 1.3,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              Strategic branding that tells your story, builds loyalty, and promotes long-term growth.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#3A3A3C", maxWidth: "50ch" }}>
              Branding goes beyond just a logo or a name. It’s about shaping how people see and remember your business. At OneImpact, our branding services focus on building a strong foundation that defines who you are, what you stand for, and how you communicate.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#3A3A3C", maxWidth: "50ch" }}>
              Choosing us for your branding service means building a brand with clarity, purpose, and consistency. We combine research, strategy, and design, and whether you’re starting from scratch or refreshing your brand, we guide you through every step.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
                paddingTop: "4px",
              }}
            >
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

          {/* Hero Form Card */}
          <div
            id="audit"
            className="form-card"
            style={{
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(30px) saturate(160%)",
              WebkitBackdropFilter: "blur(30px) saturate(160%)",
              borderRadius: "32px",
              padding: "clamp(24px, 3.2vw, 36px)",
              color: "#FFFFFF",
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
                    Free for your brand
                  </span>
                  <h2
                    className="branding-heading"
                    style={{
                      margin: 0,
                      fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.035em",
                      fontWeight: 700,
                    }}
                  >
                    Get your free branding consultation
                  </h2>
                  <p style={{ fontSize: "15.5px", color: "#C7C7CC", letterSpacing: 0, margin: 0 }}>
                    A real person from our team looks at your brand and gets back to you.
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

                {/* Brand name or website */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Brand name or website
                  </label>
                  <input
                    id="hero-handle"
                    className="fd"
                    type="text"
                    placeholder="Your brand or yourbrand.com"
                    value={handle1}
                    onChange={(e) => setHandle1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, handle: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "17px",
                      height: "50px",
                      padding: "0 16px",
                      borderRadius: "14px",
                      border: `1.5px solid ${showHandle1Err ? "#FF9F95" : "#3A3A3C"}`,
                      background: "#1C1C1E",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showHandle1Err && (
                    <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>
                      Enter your brand name or website
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
                    <option value="Brand strategy and positioning">Brand strategy and positioning</option>
                    <option value="Brand identity and logo">Brand identity and logo</option>
                    <option value="Brand naming">Brand naming</option>
                    <option value="Messaging and storytelling">Messaging and storytelling</option>
                    <option value="Packaging design">Packaging design</option>
                    <option value="Something else">Something else</option>
                  </select>
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
                    background: "#FFBA39",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "54px",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Get my free brand consultation
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
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 role="status" className="branding-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>
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
          padding: "clamp(32px, 4vw, 44px) 0 clamp(36px, 4.5vw, 48px)",
          backgroundColor: "#FAFAFC",
          borderTop: "1px solid #E5E5EA",
          borderBottom: "1px solid #E5E5EA",
          position: "relative",
          zIndex: 10,
        }}
      >
        <p
          style={{
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
          maxWidth: "1360px",
          margin: "0 auto",
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
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            A strong branding strategy lays the foundation for how your audience sees, remembers, and connects with your business.
          </h2>
          <p style={{ fontSize: "21px", lineHeight: 1.45, color: "#3A3A3C", margin: 0 }}>
            It shapes everything from trust and loyalty to how well your social media marketing performs.
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.5, color: "#6E6E73", margin: 0 }}>
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
            }}
          >
            At OneImpact, we follow a four-step branding process
          </h3>
          <p style={{ margin: "0 0 28px", color: "#6E6E73", fontSize: "17px" }}>
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
                  background: "#FFBA39",
                }}
                aria-hidden="true"
              />
              <h4
                className="branding-heading"
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
                    style={{ display: "block", height: "20px", width: "auto", maxWidth: "65px", objectFit: "contain", opacity: 0.7 }}
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

      {/* ── BENEFITS: HOW BRAND STRATEGY DRIVES MORE REVENUE */}
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
            className="branding-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            How brand strategy drives more revenue
          </h2>
          <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73" }}>
            Why does your business need branding? Here’s what a clear brand strategy does for you:
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
                <h3 className="branding-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25 }}>
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
              className="branding-heading"
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
                ? "Here's what makes us the right branding services provider for your business."
                : "Brand strategy first, insight-led process, positioning with purpose and consistency."}
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
                background: "#FFBA39",
                borderRadius: "999px",
                boxShadow: "0 3px 12px rgba(255, 186, 57, 0.45)",
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
          <div className="branding-why-grid">
            {BUT_WHY_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="branding-why-card"
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
                        w.chip === "#FFBA39"
                          ? "linear-gradient(135deg, #FFBA39 0%, #FFA800 100%)"
                          : "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      boxShadow:
                        w.chip === "#FFBA39"
                          ? "0 3px 8px rgba(255, 186, 57, 0.35)"
                          : "0 3px 8px rgba(0, 102, 255, 0.35)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={w.chip === "#FFBA39" ? "#1D1D1F" : "#FFFFFF"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h3 className="branding-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#1D1D1F" }}>
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
          <div className="branding-why-grid">
            {WHY_HIGHLIGHT_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="branding-why-card"
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
                          ? "linear-gradient(135deg, #FFBA39 0%, #FFA800 100%)"
                          : "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      boxShadow:
                        idx % 2 === 0
                          ? "0 3px 8px rgba(255, 186, 57, 0.35)"
                          : "0 3px 8px rgba(0, 102, 255, 0.35)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={idx % 2 === 0 ? "#1D1D1F" : "#FFFFFF"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h3 className="branding-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#1D1D1F" }}>
                    {w.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "#6E6E73", fontSize: "14.5px", lineHeight: 1.5 }}>{w.a}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── EXPLORE OUR BRANDING SERVICES */}
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
            className="branding-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              maxWidth: "14ch",
            }}
          >
            Explore our branding services
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
                background: "#FFBA39",
                borderRadius: "999px",
                boxShadow: "0 3px 12px rgba(255, 186, 57, 0.45)",
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
          Curious about what else we bring to the table? Here’s a deeper look at our branding offerings.
        </p>

        <div className="branding-services-grid">
          {activeServices.items.map((s, i) => (
            <div
              key={i}
              className="branding-service-card"
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
                <h3 className="branding-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700 }}>
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
          className="branding-heading"
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
                    ? "linear-gradient(180deg, #FFC759 0%, #FFBA39 50%, #FFA800 100%)"
                    : "#FFFFFF",
                border: `1.5px solid ${offerIdx === i ? "#000000" : "#D2D2D7"}`,
                boxShadow:
                  offerIdx === i
                    ? "0 4px 14px rgba(255, 186, 57, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)"
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
                  background: "linear-gradient(180deg, #FFC759 0%, #FFBA39 50%, #FFA800 100%)",
                  border: "1.5px solid #000000",
                  borderRadius: "999px",
                  minHeight: "42px",
                  padding: "8px 22px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(255, 186, 57, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)",
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
                className="branding-heading"
                style={{
                  margin: 0,
                  fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                  maxWidth: "16ch",
                }}
              >
                Branding that fits your business. Not a template.
              </h2>
              <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "50ch" }}>
                Swipe through what you get with OneImpact as your branding services provider.
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
                    <h3 className="branding-heading" style={{ margin: 0, fontSize: "28px", letterSpacing: "-0.04em", fontWeight: 700, lineHeight: 1.1 }}>
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

      {/* ── SPOTLIGHT: BRANDING FOR MUMBAI BUSINESSES */}
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
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              Branding for Mumbai businesses
            </h2>
            <p style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>
              Mumbai, the financial hub of the country, offers businesses plenty of opportunities to grow with a blend of innovation and traditional values. With people coming from every part of the country, your business needs to stand out from the clutter and earn its place in your customers’ minds.
            </p>
            <p style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>
              At OneImpact, we help you stay on top by creating a unique brand identity that resonates with your target audience. With experience across industries and a deep understanding of brand growth, we make sure your brand looks good and works effectively in the real world.
            </p>
            <p style={{ color: "#000000", fontWeight: 600, fontSize: "18px", margin: 0 }}>
              Our approach is simple, practical, and focused on long-term impact.
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
                background: "#FFBA39",
                color: "#000000",
                textDecoration: "none",
                border: 0,
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Let’s build a brand Mumbai remembers
            </a>
          </div>

          {/* Visual: Map mockup */}
          <figure
            style={{
              margin: 0,
              borderRadius: "32px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 40px 80px -40px rgba(0,0,0,0.35)",
            }}
            aria-label="Illustration of a local brand search in Mumbai"
          >
            <div
              style={{
                position: "relative",
                height: "230px",
                background: "#E8F0FF",
                backgroundImage:
                  "linear-gradient(115deg,transparent 46%,#FFFFFF 46%,#FFFFFF 50%,transparent 50%),linear-gradient(25deg,transparent 58%,#FFFFFF 58%,#FFFFFF 61%,transparent 61%),linear-gradient(0deg,transparent 30%,#D6E5FF 30%,#D6E5FF 44%,transparent 44%)",
                overflow: "hidden",
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
            <div style={{ padding: "10px 14px 14px", display: "flex", flexDirection: "column" }}>
              {[
                { title: "Your Brand", meta: "Open now. Easy to recognise." },
                { title: "Nearby Competitor", meta: "Closes soon" },
                { title: "Another Listing", meta: "1.8 km away" },
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
                      background: i === 0 ? "#FFBA39" : "#E5E5EA",
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
          className="branding-heading"
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
              width: "min(440px, 100%)",
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
                background: "#FFBA39",
                borderRadius: "999px",
                boxShadow: "0 3px 12px rgba(255, 186, 57, 0.45)",
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
                  fontSize: "14.5px",
                  fontWeight: faqIdx === i ? 650 : 500,
                  color: faqIdx === i ? "#000000" : "#555558",
                  background: "transparent",
                  border: 0,
                  borderRadius: "999px",
                  minHeight: "44px",
                  padding: "9px 14px",
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
                background: "linear-gradient(180deg, #FFC759 0%, #FFBA39 50%, #FFA800 100%)",
                border: "1.5px solid #000000",
                borderRadius: "999px",
                minHeight: "42px",
                padding: "8px 22px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(255, 186, 57, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)",
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
              background: "#FFBA39",
              opacity: 0.5,
              filter: "blur(80px)",
            }}
          />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              Build a lasting brand.
            </h2>
            <p style={{ fontSize: "19px", color: "#3A3A3C", maxWidth: "44ch", margin: 0 }}>
              Get a free branding consultation and see where your brand can grow. No obligation.
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
                <h3 className="branding-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.035em", fontWeight: 700 }}>
                  Get your free branding consultation
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
                    Brand name or website
                  </label>
                  <input
                    id="btm-handle"
                    className="fd"
                    type="text"
                    placeholder="Your brand or yourbrand.com"
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
                      Enter your brand name or website
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
                    background: "#FFBA39",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "54px",
                    cursor: "pointer",
                    marginTop: "4px",
                  }}
                >
                  Get my free brand consultation
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
                    background: "#FFBA39",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 role="status" className="branding-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>
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
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>
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
          Get my free brand consultation
        </a>
      </div>
    </div>
  );
}
