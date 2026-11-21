"use client";

import React, { useRef, useState } from "react";

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

const BUT_WHY_CARDS = [
  {
    t: "Brand strategy first",
    a: "We help you define what your brand stands for, who it’s for, and how it should appear in the world.",
    chip: "#f9d230",
  },
  {
    t: "Brand identity creation",
    a: "We create a look and feel that reflects your brand’s personality and values, including colors, fonts, and tone of voice.",
    chip: "#4066c6",
  },
  {
    t: "Research-driven strategy",
    a: "We rely on research to understand your industry, audience, and competitors, so decisions come from insight, not guesswork.",
    chip: "#f9d230",
  },
  {
    t: "Experience and expertise",
    a: "We work with brands across different verticals and stages of growth, and adapt to what each one needs.",
    chip: "#4066c6",
  },
  {
    t: "Audience connection",
    a: "We help you define your audience and create messages that feel personal and relatable.",
    chip: "#f9d230",
  },
  {
    t: "Strategic brand positioning",
    a: "We identify what makes your brand different and valuable, so you stand out while staying relevant.",
    chip: "#4066c6",
  },
  {
    t: "Brand equity and growth",
    a: "We help your brand build recognition and trust over time: a long-term asset, not a short-term fix.",
    chip: "#f9d230",
  },
  {
    t: "End-to-end support",
    a: "We guide your brand from idea to execution, whether you’re starting fresh or rebranding.",
    chip: "#4066c6",
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
        dot: "#f9d230",
      },
      {
        t: "Brand positioning",
        a: "This involves identifying what makes your brand unique and where it fits in the market. We define how you want customers to perceive your brand, helping you stand out from competitors with a clear and focused message.",
        dot: "#4066c6",
      },
      {
        t: "Brand messaging and storytelling",
        a: "We craft messaging that reflects your brand’s values and voice. This includes taglines, mission statements, and brand stories that connect with your audience on an emotional level and create a lasting impression.",
        dot: "#f9d230",
      },
      {
        t: "Brand audits and research",
        a: "We assess your current brand performance through research and analysis. This helps identify gaps, strengths, and opportunities, allowing us to refine your brand strategy based on data and customer insights.",
        dot: "#4066c6",
      },
      {
        t: "Brand consistency and guidelines",
        a: "We create brand guidelines that define how your brand should look, sound, and feel across all platforms. This includes logo usage, color schemes, tone of voice, and visual elements, ensuring your brand remains consistent everywhere.",
        dot: "#f9d230",
      },
      {
        t: "Brand naming",
        a: "We develop distinctive, memorable, and meaningful names for brands, products, and services. The right name conveys your values, tone, and positioning, and is built to last.",
        dot: "#4066c6",
      },
    ],
  },
  {
    label: "Platform branding",
    items: [
      {
        t: "E-commerce brand strategy",
        a: "We help online businesses build a unique brand presence that connects with their target audience. From product messaging to website tone and visuals, we align every element with your business goals to boost trust and conversions.",
        dot: "#f9d230",
      },
      {
        t: "Local brand strategy",
        a: "This focuses on building your brand’s identity within a specific geographic area. We tailor your messaging, visuals, and positioning to connect with local audiences and make your brand more relatable to the community.",
        dot: "#4066c6",
      },
      {
        t: "Digital brand strategy",
        a: "We develop a clear brand identity for your digital presence across websites, social media, ads, and more. This includes defining your brand voice, visual style, and messaging to ensure consistency and impact online.",
        dot: "#f9d230",
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

export function HeroForm() {
  const [name1, setName1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [handle1, setHandle1] = useState("");
  const [need1, setNeed1] = useState("Not sure yet");
  const [touched1, setTouched1] = useState<{ name?: boolean; phone?: boolean; handle?: boolean }>({});
  const [sent1, setSent1] = useState(false);
  const isHandleValid = (val: string) => val.trim().length > 0;
  const isPhoneValid = (val: string) => val.replace(/\D/g, "").length >= 10;
  const isNameValid = (val: string) => val.trim().length > 0;
  const showName1Err = touched1.name && !isNameValid(name1);
  const showPhone1Err = touched1.phone && !isPhoneValid(phone1);
  const showHandle1Err = touched1.handle && !isHandleValid(handle1);
  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched1({ name: true, phone: true, handle: true });
    if (isNameValid(name1) && isPhoneValid(phone1) && isHandleValid(handle1)) {
      setSent1(true);
    }
  };

  return (
    <div
      id="audit"
      className="note-paper-card"
      style={{ color: "#111111" }}
    >
      {/* Note paper background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/note-paper-6847e129ebad.webp"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="note-paper-img"
      />

      {!sent1 ? (
        <form
          onSubmit={handleSubmit1}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h2
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
                fontWeight: 700,
                color: "#111111",
              }}
            >
              Get your free brand consultation
            </h2>
            <p style={{ margin: 0, fontSize: "14px", color: "#555558", letterSpacing: 0 }}>
              A real person from our team looks at your brand and gets back to you.
            </p>
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label htmlFor="top-name" style={{ fontWeight: 600, fontSize: "13px", color: "#1D1D1F", letterSpacing: 0 }}>
              Your name
            </label>
            <input
              id="top-name"
              className="fd"
              type="text"
              autoComplete="name"
              placeholder="First and last name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              onBlur={() => setTouched1((t) => ({ ...t, name: true }))}
              style={{
                font: "inherit",
                fontSize: "15px",
                height: "44px",
                padding: "0 14px",
                borderRadius: "12px",
                border: `1.5px solid ${showName1Err ? "#DC2626" : "#D2D2D7"}`,
                background: "#FFFFFF",
                color: "#111111",
                width: "100%",
              }}
            />
            {showName1Err && (
              <span role="alert" style={{ fontSize: "12.5px", color: "#DC2626" }}>
                Enter your name so we know who to reply to
              </span>
            )}
          </div>

          {/* Phone */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label htmlFor="top-phone" style={{ fontWeight: 600, fontSize: "13px", color: "#1D1D1F", letterSpacing: 0 }}>
              Phone or WhatsApp number
            </label>
            <input
              id="top-phone"
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
                fontSize: "15px",
                height: "44px",
                padding: "0 14px",
                borderRadius: "12px",
                border: `1.5px solid ${showPhone1Err ? "#DC2626" : "#D2D2D7"}`,
                background: "#FFFFFF",
                color: "#111111",
                width: "100%",
              }}
            />
            {showPhone1Err && (
              <span role="alert" style={{ fontSize: "12.5px", color: "#DC2626" }}>
                Enter a 10-digit mobile number
              </span>
            )}
          </div>

          {/* Website or Instagram handle */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label htmlFor="top-handle" style={{ fontWeight: 600, fontSize: "13px", color: "#1D1D1F", letterSpacing: 0 }}>
              Website or Instagram handle
            </label>
            <input
              id="top-handle"
              className="fd"
              type="text"
              placeholder="@yourbrand"
              value={handle1}
              onChange={(e) => setHandle1(e.target.value)}
              onBlur={() => setTouched1((t) => ({ ...t, handle: true }))}
              style={{
                font: "inherit",
                fontSize: "15px",
                height: "44px",
                padding: "0 14px",
                borderRadius: "12px",
                border: `1.5px solid ${showHandle1Err ? "#DC2626" : "#D2D2D7"}`,
                background: "#FFFFFF",
                color: "#111111",
                width: "100%",
              }}
            />
            {showHandle1Err && (
              <span role="alert" style={{ fontSize: "12.5px", color: "#DC2626" }}>
                Enter your handle or website
              </span>
            )}
          </div>

          {/* What do you need? */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label htmlFor="top-need" style={{ fontWeight: 600, fontSize: "13px", color: "#1D1D1F", letterSpacing: 0 }}>
              What do you need? <span style={{ fontWeight: 400, color: "#666" }}>(optional)</span>
            </label>
            <select
              id="top-need"
              value={need1}
              onChange={(e) => setNeed1(e.target.value)}
              style={{
                font: "inherit",
                fontSize: "14.5px",
                height: "44px",
                padding: "0 12px",
                borderRadius: "12px",
                border: "1.5px solid #D2D2D7",
                background: "#FFFFFF",
                color: "#111111",
                width: "100%",
              }}
            >
              <option value="Not sure yet">Not sure yet</option>
              <option value="Brand identity design">Brand identity design</option>
              <option value="Brand strategy & positioning">Brand strategy & positioning</option>
              <option value="Packaging & communication design">Packaging & communication design</option>
              <option value="Rebranding">Rebranding</option>
            </select>
          </div>

          <button
            type="submit"
            className="press y btn-sheen"
            style={{
              font: "inherit",
              fontSize: "16.5px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#000000",
              background: "#f9d230",
              border: 0,
              borderRadius: "999px",
              minHeight: "52px",
              cursor: "pointer",
              marginTop: "6px",
              boxShadow: "0 4px 14px rgba(249, 210, 48, 0.45)",
            }}
          >
            Book my free consultation
          </button>
          <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6E6E73", textAlign: "center" }}>
            No spam, no sales scripts. We&apos;ll reply on WhatsApp or call.
          </p>
        </form>
      ) : (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            alignItems: "flex-start",
            padding: "16px 0",
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
          <h3 className="branding-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700, color: "#111111" }}>
            Request received
          </h3>
          <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px", lineHeight: 1.5 }}>
            Thanks, {name1}. We&apos;ll review {handle1} and get in touch on {phone1}.
          </p>
        </div>
      )}
    </div>
  );
}

export function ApproachTabs() {
  const [whyTab, setWhyTab] = useState(0);

  return (
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
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              <span style={{ color: "#FFFFFF" }}>{whyTab === 0 ? "But why " : "Why "}</span>
              <span style={{ color: "#f9d230" }}>OneImpact?</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)", maxWidth: "52ch" }}>
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
              background: "#1C1C1E",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "999px",
              padding: "4px",
              boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.35)",
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
                  color: whyTab === i ? "#000000" : "rgba(255, 255, 255, 0.75)",
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
                    background: whyTab === i ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.12)",
                    color: whyTab === i ? "#000000" : "rgba(255, 255, 255, 0.75)",
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
                  background: "#08080a",
                  borderRadius: "20px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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
                  <h3 className="branding-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#FFFFFF" }}>
                    {w.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{w.a}</p>
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
                  background: "#08080a",
                  borderRadius: "20px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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
                      background: "rgba(37, 99, 235, 0.18)",
                      border: "1px solid rgba(37, 99, 235, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      color: "#60a5fa",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h3 className="branding-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#FFFFFF" }}>
                    {w.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{w.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceTabs() {
  const [svcIdx, setSvcIdx] = useState(0);
  const activeServices = SVC_GROUPS[svcIdx];

  return (
    <section
      id="services"
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
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
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              maxWidth: "14ch",
              color: "#FFFFFF",
            }}
          >
            Explore our <span style={{ color: "#f9d230" }}>branding services</span>
          </h2>

          <div
            role="tablist"
            aria-label="Service groups"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              background: "#1C1C1E",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "999px",
              padding: "4px",
              boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.35)",
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
                  color: svcIdx === i ? "#000000" : "rgba(255, 255, 255, 0.75)",
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

        <p style={{ margin: "0 0 28px", fontSize: "18px", color: "rgba(255, 255, 255, 0.72)", maxWidth: "56ch" }}>
          Curious about what else we bring to the table? Here’s a deeper look at our branding offerings.
        </p>

        <div className="branding-services-grid">
          {activeServices.items.map((s, i) => (
            <div
              key={i}
              className="branding-service-card"
              style={{
                background: "#08080a",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "20px",
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 16px 36px -28px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f9d230", flex: "none" }} />
                <h3 className="branding-heading" style={{ margin: 0, fontSize: "19px", letterSpacing: "-0.025em", fontWeight: 700, color: "#FFFFFF" }}>
                  {s.t}
                </h3>
              </div>
              <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{s.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferSection() {
  const [offerIdx, setOfferIdx] = useState(0);
  const [offerExpanded, setOfferExpanded] = useState(false);
  const [openOfferQ, setOpenOfferQ] = useState<number | null>(null);
  const activeOffer = OFFER_TOPICS[offerIdx];
  const visibleOfferQs = offerExpanded ? activeOffer.qs : activeOffer.qs.slice(0, 5);

  return (
    <section
      id="offer"
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "clamp(24px, 3vw, 44px) clamp(16px, 3vw, 32px) 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2
            className="branding-heading"
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            What we <span style={{ color: "#f9d230" }}>offer</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            Pick a topic to see exactly how we approach it.
          </p>
        </div>

        {/* Topic Pills */}
        <div
          className="scrollrow"
          role="tablist"
          aria-label="Offer topics"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "10px",
            justifyContent: "flex-start",
            scrollbarWidth: "none",
          }}
        >
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
                setOpenOfferQ(null);
              }}
              style={{
                font: "inherit",
                fontSize: "14.5px",
                fontWeight: offerIdx === i ? 650 : 500,
                color: offerIdx === i ? "#000000" : "rgba(255, 255, 255, 0.8)",
                background: offerIdx === i ? "#f9d230" : "#1C1C1E",
                border: offerIdx === i ? "1px solid #f9d230" : "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: offerIdx === i ? "0 4px 14px rgba(249, 210, 48, 0.35)" : "none",
                borderRadius: "999px",
                minHeight: "42px",
                padding: "8px 20px",
                cursor: "pointer",
                transition: "all 180ms cubic-bezier(0.16, 1, 0.3, 1)",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Blue line accent under tabs */}
        <div
          aria-hidden="true"
          style={{
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, #2563eb 0%, rgba(37, 99, 235, 0) 100%)",
            margin: "6px auto 28px",
          }}
        />

        {/* Frosted Dark Box with Gold Dividers */}
        <div
          role="tabpanel"
          style={{
            background: "rgba(10, 10, 12, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "28px",
            padding: "clamp(24px, 4vw, 44px)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {activeOffer.intro && (
            <p className="prewrap" style={{ margin: "0 0 24px", fontSize: "17.5px", color: "rgba(255, 255, 255, 0.8)", maxWidth: "75ch", lineHeight: 1.6 }}>
              {activeOffer.intro}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column" }}>
            {visibleOfferQs.map((f, qIdx) => {
              const isOpen = openOfferQ === qIdx;
              return (
                <div
                  key={qIdx}
                  style={{
                    borderBottom: "1px solid rgba(249, 210, 48, 0.55)",
                    padding: "20px 0",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenOfferQ(isOpen ? null : qIdx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left",
                      color: "#FFFFFF",
                      font: "inherit",
                      fontSize: "17.5px",
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "none",
                        fontSize: "24px",
                        lineHeight: 1,
                        fontWeight: 400,
                        color: "#f9d230",
                        width: "24px",
                        textAlign: "center",
                        userSelect: "none",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      className="prewrap"
                      style={{
                        margin: "14px 0 4px",
                        color: "rgba(255, 255, 255, 0.72)",
                        fontSize: "15.5px",
                        lineHeight: 1.65,
                        maxWidth: "80ch",
                      }}
                    >
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {activeOffer.qs.length > 5 && (
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <button
                type="button"
                className="press y btn-sheen"
                onClick={() => setOfferExpanded(!offerExpanded)}
                style={{
                  font: "inherit",
                  fontSize: "14.5px",
                  fontWeight: 650,
                  color: "#000000",
                  background: "#f9d230",
                  border: "1px solid #f9d230",
                  borderRadius: "999px",
                  minHeight: "42px",
                  padding: "8px 24px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(249, 210, 48, 0.35)",
                }}
              >
                {offerExpanded ? "Show fewer questions" : `Load more (${activeOffer.qs.length - 5} more questions)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function WorkCarousel() {
  const [carIdx, setCarIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
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

  return (
    <section id="usps" style={{ background: "#000000", color: "#FFFFFF", padding: "clamp(36px, 4.5vw, 56px) 0" }}>
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
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                maxWidth: "16ch",
              }}
            >
              <span>Branding that </span>
              <span style={{ color: "#f9d230" }}>fits your business. Not a template.</span>
            </h2>
            <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)", maxWidth: "50ch" }}>
              Swipe through what you get with OneImpact as your branding services provider.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
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
                background: "#ffd60a",
                color: "#000000",
                cursor: carIdx === 0 ? "default" : "pointer",
                opacity: carIdx === 0 ? 0.35 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(255, 214, 10, 0.3)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                background: "#ffd60a",
                color: "#000000",
                cursor: carIdx >= USP_CARDS.length - 1 ? "default" : "pointer",
                opacity: carIdx >= USP_CARDS.length - 1 ? 0.35 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(255, 214, 10, 0.3)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  background: "#08080a",
                  border: "1.5px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "24px",
                  padding: "26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span
                      style={{
                        color: "#f9d230",
                        fontSize: "15px",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {u.head}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "28px",
                        height: "2.5px",
                        borderRadius: "999px",
                        background: "#2563eb",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.35)",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={u.d} />
                    </svg>
                  </span>
                </div>
                <p
                  style={{
                    margin: "16px 0 0",
                    color: "rgba(255, 255, 255, 0.78)",
                    fontSize: "14.5px",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {u.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "24px",
          }}
        >
          {[...Array(5)].map((_, dotI) => (
            <span
              key={dotI}
              style={{
                width: dotI === Math.min(4, Math.floor((carIdx / Math.max(1, USP_CARDS.length - 1)) * 5)) ? "24px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: dotI === Math.min(4, Math.floor((carIdx / Math.max(1, USP_CARDS.length - 1)) * 5)) ? "#ffd60a" : "rgba(255, 255, 255, 0.2)",
                transition: "all 240ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [faqIdx, setFaqIdx] = useState(0);
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [openFaqQ, setOpenFaqQ] = useState<number | null>(null);
  const activeFaqGroup = FAQ_GROUPS[faqIdx];
  const visibleFaqs = faqExpanded ? activeFaqGroup.qs : activeFaqGroup.qs.slice(0, 5);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px) clamp(44px, 5.5vw, 68px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2
            className="branding-heading"
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Questions, <span style={{ color: "#f9d230" }}>answered</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(15px, 1.3vw, 18px)",
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            Anything else?{" "}
            <a
              href="https://wa.me/918369018104"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#f9d230",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Message us on WhatsApp
            </a>
            .
          </p>
        </div>

        {/* FAQ tab switcher */}
        <div
          className="scrollrow"
          role="tablist"
          aria-label="FAQ groups"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "10px",
            justifyContent: "flex-start",
            scrollbarWidth: "none",
          }}
        >
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
                setOpenFaqQ(null);
              }}
              style={{
                font: "inherit",
                fontSize: "14.5px",
                fontWeight: faqIdx === i ? 650 : 500,
                color: faqIdx === i ? "#000000" : "rgba(255, 255, 255, 0.8)",
                background: faqIdx === i ? "#f9d230" : "#1C1C1E",
                border: faqIdx === i ? "1px solid #f9d230" : "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: faqIdx === i ? "0 4px 14px rgba(249, 210, 48, 0.35)" : "none",
                borderRadius: "999px",
                minHeight: "42px",
                padding: "8px 20px",
                cursor: "pointer",
                transition: "all 180ms cubic-bezier(0.16, 1, 0.3, 1)",
                whiteSpace: "nowrap",
              }}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Blue line accent under tabs */}
        <div
          aria-hidden="true"
          style={{
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, #2563eb 0%, rgba(37, 99, 235, 0) 100%)",
            margin: "6px auto 28px",
          }}
        />

        {/* Frosted Dark Box with Gold Dividers */}
        <div
          role="tabpanel"
          style={{
            background: "rgba(10, 10, 12, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "28px",
            padding: "clamp(24px, 4vw, 44px)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {visibleFaqs.map((f, qIdx) => {
              const isOpen = openFaqQ === qIdx;
              return (
                <div
                  key={qIdx}
                  style={{
                    borderBottom: "1px solid rgba(249, 210, 48, 0.55)",
                    padding: "20px 0",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqQ(isOpen ? null : qIdx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left",
                      color: "#FFFFFF",
                      font: "inherit",
                      fontSize: "17.5px",
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        flex: "none",
                        fontSize: "24px",
                        lineHeight: 1,
                        fontWeight: 400,
                        color: "#f9d230",
                        width: "24px",
                        textAlign: "center",
                        userSelect: "none",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      className="prewrap"
                      style={{
                        margin: "14px 0 4px",
                        color: "rgba(255, 255, 255, 0.72)",
                        fontSize: "15.5px",
                        lineHeight: 1.65,
                        maxWidth: "80ch",
                      }}
                    >
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {activeFaqGroup.qs.length > 5 && (
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <button
                type="button"
                className="press y btn-sheen"
                onClick={() => setFaqExpanded(!faqExpanded)}
                style={{
                  font: "inherit",
                  fontSize: "14.5px",
                  fontWeight: 650,
                  color: "#000000",
                  background: "#f9d230",
                  border: "1px solid #f9d230",
                  borderRadius: "999px",
                  minHeight: "42px",
                  padding: "8px 24px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(249, 210, 48, 0.35)",
                }}
              >
                {faqExpanded ? "Show fewer questions" : `Load more (${activeFaqGroup.qs.length - 5} more questions)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function InquirySection() {
  const [name2, setName2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [handle2, setHandle2] = useState("");
  const [touched2, setTouched2] = useState<{ name?: boolean; phone?: boolean; handle?: boolean }>({});
  const [sent2, setSent2] = useState(false);
  const isHandleValid = (val: string) => val.trim().length > 0;
  const isPhoneValid = (val: string) => val.replace(/\D/g, "").length >= 10;
  const isNameValid = (val: string) => val.trim().length > 0;
  const showName2Err = touched2.name && !isNameValid(name2);
  const showPhone2Err = touched2.phone && !isPhoneValid(phone2);
  const showHandle2Err = touched2.handle && !isHandleValid(handle2);
  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched2({ name: true, phone: true, handle: true });
    if (isNameValid(name2) && isPhoneValid(phone2) && isHandleValid(handle2)) {
      setSent2(true);
    }
  };

  return (
    <section
      id="audit2"
      style={{
        width: "100%",
        backgroundColor: "#000000",
        padding: "clamp(48px, 6vw, 84px) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(16px, 3vw, 32px)",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#000000",
            border: "1.5px solid #2563EB",
            borderRadius: "36px",
            padding: "clamp(28px, 4.5vw, 64px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(28px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2
              className="branding-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 4.8vw, 4.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              Build a lasting{" "}
              <span
                style={{
                  color: "#f9d230",
                  fontStyle: "italic",
                  fontFamily: "var(--font-serif), Georgia, serif",
                }}
              >
                brand.
              </span>
            </h2>
            <p
              style={{
                fontSize: "17.5px",
                color: "rgba(255, 255, 255, 0.72)",
                maxWidth: "44ch",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              Get a free branding consultation and see where your brand can grow. No obligation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <a
                className="press"
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "46px",
                  padding: "6px 20px 6px 7px",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#f9d230",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000000",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                +91 83690 18104
              </a>
              <a
                className="press"
                href="mailto:teamhr@oneimpact.co"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "46px",
                  padding: "6px 20px 6px 7px",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#f9d230",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000000",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                teamhr@oneimpact.co
              </a>
            </div>
          </div>

          {/* Bottom form */}
          <div
            className="form-card"
            style={{
              background: "#0c0e14",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "28px",
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
                <h3 className="branding-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.035em", fontWeight: 700, color: "#FFFFFF" }}>
                  Get your free branding consultation
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-name" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
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
                      fontSize: "16px",
                      height: "48px",
                      padding: "0 16px",
                      borderRadius: "12px",
                      border: `1.5px solid ${showName2Err ? "#FF9F95" : "rgba(255, 255, 255, 0.12)"}`,
                      background: "#161922",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showName2Err && (
                    <span role="alert" style={{ fontSize: "13px", color: "#FF9F95" }}>
                      Enter your name so we know who to reply to
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
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
                      fontSize: "16px",
                      height: "48px",
                      padding: "0 16px",
                      borderRadius: "12px",
                      border: `1.5px solid ${showPhone2Err ? "#FF9F95" : "rgba(255, 255, 255, 0.12)"}`,
                      background: "#161922",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showPhone2Err && (
                    <span role="alert" style={{ fontSize: "13px", color: "#FF9F95" }}>
                      Enter a 10-digit mobile number
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
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
                      fontSize: "16px",
                      height: "48px",
                      padding: "0 16px",
                      borderRadius: "12px",
                      border: `1.5px solid ${showHandle2Err ? "#FF9F95" : "rgba(255, 255, 255, 0.12)"}`,
                      background: "#161922",
                      color: "#FFFFFF",
                      width: "100%",
                    }}
                  />
                  {showHandle2Err && (
                    <span role="alert" style={{ fontSize: "13px", color: "#FF9F95" }}>
                      Enter your website or Instagram handle
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="press y btn-sheen"
                  style={{
                    font: "inherit",
                    fontSize: "16.5px",
                    fontWeight: 650,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                    background: "#f9d230",
                    border: 0,
                    borderRadius: "999px",
                    minHeight: "52px",
                    cursor: "pointer",
                    marginTop: "6px",
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
                <h3 role="status" className="branding-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700, color: "#FFFFFF" }}>
                  Request received
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name2}. We’ll look at {handle2} and get in touch on {phone2}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
