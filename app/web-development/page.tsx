"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ServiceReelsSection } from "@/components/showroom/ServiceReelsSection";

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
    head: "Custom-built",
    text: "Websites that reflect your brand’s voice, goals and audience",
    d: "M4 4h16v16H4zM4 9h16M9 9v11",
    chip: "#FFE7B8",
  },
  {
    head: "Conversion-driven",
    text: "Every element designed to guide visitors toward action",
    d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    chip: "#D6E5FF",
  },
  {
    head: "Built for speed",
    text: "Fast, responsive websites that work smoothly on any device",
    d: "M13 3L5 14h6l-1 7 8-11h-6z",
    chip: "#FFE7B8",
  },
  {
    head: "SEO-ready",
    text: "Strong technical foundations for search visibility from day one",
    d: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM20 20l-4-4",
    chip: "#D6E5FF",
  },
  {
    head: "Mobile-first",
    text: "Layouts that adapt to every screen, from desktop to smartphone",
    d: "M7 3h10v18H7zM11 18h2",
    chip: "#FFE7B8",
  },
  {
    head: "Easy to manage",
    text: "Update text, images and pages without technical knowledge",
    d: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
    chip: "#D6E5FF",
  },
  {
    head: "Secure",
    text: "Clean code, SSL, secure hosting and regular updates",
    d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    chip: "#FFE7B8",
  },
  {
    head: "Scalable",
    text: "A site that grows with your business, without a full rebuild",
    d: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
    chip: "#D6E5FF",
  },
  {
    head: "Connected",
    text: "CRM, email, payment and analytics tools integrated securely",
    d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    chip: "#FFE7B8",
  },
  {
    head: "End-to-end support",
    text: "From wireframes to launch, plus ongoing post-launch support",
    d: "M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5",
    chip: "#D6E5FF",
  },
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

const SVC_GROUPS = [
  {
    label: "Development",
    items: [
      {
        t: "Custom web development",
        a: "Every brand is unique, and so should be its digital presence. Whether it’s a sleek corporate site or a feature-rich portal, we use clean code, robust frameworks and a user-centric approach so your website stands out in both form and function.",
        dot: "#f9d230",
      },
      {
        t: "E-commerce web development",
        a: "From product display to secure checkout, we build e-commerce websites optimized for conversions. Whether you need a simple online store or a multi-vendor marketplace, we deliver seamless integrations, mobile responsiveness and user-friendly interfaces.",
        dot: "#4066c6",
      },
      {
        t: "Responsive web design",
        a: "Today’s users switch between devices constantly, and your website should keep up. We make sure your site looks and functions well across all screen sizes, from desktops to smartphones.",
        dot: "#f9d230",
      },
      {
        t: "Web application development",
        a: "Need more than a website? We design and develop web applications, from customer portals to booking systems and dashboards, built for speed, scalability and security.",
        dot: "#4066c6",
      },
      {
        t: "SEO-friendly web development",
        a: "A great website is useless if it can’t be found online. We build with clean code, fast load times, mobile optimization and search best practices, working closely with our SEO team so your site is built for visibility from day one.",
        dot: "#f9d230",
      },
      {
        t: "Website maintenance and support",
        a: "Your website shouldn’t be built and forgotten. Routine backups, bug fixes, security updates and performance enhancements keep your site secure, up to date and evolving with your business.",
        dot: "#4066c6",
      },
    ],
  },
  {
    label: "Platforms and CMS",
    items: [
      {
        t: "CMS development",
        a: "Managing your content shouldn’t be a hassle. We build intuitive, flexible content management systems on WordPress, Drupal, Webflow or a custom build, so you can update your site without technical expertise.",
        dot: "#f9d230",
      },
      {
        t: "Shopify development",
        a: "End-to-end Shopify services, from store setup and theme customization to app integration. We build fast, mobile-friendly, conversion-ready stores that are easy to manage.",
        dot: "#4066c6",
      },
      {
        t: "Wix development",
        a: "Clean design, responsive layouts and simple content management on Wix. A good fit for startups, creatives and small businesses that want a site that’s easy to run.",
        dot: "#f9d230",
      },
      {
        t: "Webflow development",
        a: "Webflow combines visual design with the control of custom code. Our Webflow services cover custom design, interactions, CMS setup and ongoing support.",
        dot: "#4066c6",
      },
      {
        t: "Magento development",
        a: "Scalable, secure online stores for businesses that need custom functionality, from custom module development to third-party integrations and complex product catalogs.",
        dot: "#f9d230",
      },
      {
        t: "WordPress, WooCommerce and Laravel",
        a: "Whether you need a WordPress website, a WooCommerce store or a Laravel-powered web application, we build to take full advantage of your chosen platform’s features, flexibility and performance.",
        dot: "#4066c6",
      },
    ],
  },
];

const OFFER_TOPICS: { label: string; intro?: string; qs: { q: string; a: string }[] }[] = [
  {
    label: "Design and development",
    qs: [
      {
        q: "What does website design and development include?",
        a: "A well-designed website does more than catch the eye. It guides users, communicates value and supports business goals. We focus on intuitive layouts, responsive designs and smooth navigation to deliver a great user experience across all devices.",
      },
      {
        q: "How do we balance looks and performance?",
        a: "We prioritise both aesthetics and performance, so your site doesn’t just look good but also loads quickly and works reliably. From the first wireframes to the final launch, each stage is handled with care for consistency and quality. We pay attention to how users interact with your site, so the journey feels natural and purposeful.",
      },
    ],
  },
  {
    label: "Custom websites",
    qs: [
      {
        q: "Who is custom website development for?",
        a: "Off-the-shelf templates don’t always meet the demands of growing businesses. Custom development is ideal if you need tailored features, unique integrations or specific user flows that go beyond standard frameworks.",
      },
      {
        q: "How do we build a custom website?",
        a: "We start by understanding your business model, your users and your long-term goals, then develop a solution that aligns with that vision. Our team works closely with you so the final product feels like a natural extension of your brand.\nWith clean code and a scalable backend, custom websites offer more control, better performance and a smoother experience for users and admins alike. They also give you more flexibility for future updates as your business evolves.",
      },
    ],
  },
  {
    label: "CMS development",
    qs: [
      {
        q: "Why does the right CMS matter?",
        a: "Managing content shouldn’t require a technical background. We build and customise content management systems that let you easily update your website’s text, images and media, so keeping your site fresh and relevant becomes simple and stress-free.",
      },
      {
        q: "Which CMS platforms do we work with?",
        a: "Our solutions range from custom CMS builds to platforms like WordPress and Webflow, depending on your needs and workflow. Each CMS is designed around your content strategy, so everything from blogs to product pages can be managed efficiently. We also provide training and ongoing support so your team feels confident making updates.",
      },
    ],
  },
  {
    label: "Platform development",
    qs: [
      {
        q: "Shopify development",
        a: "Shopify is a powerful platform for businesses that want a reliable e-commerce store. Our end-to-end Shopify services include store setup, theme customization and app integration. From product listings to payment gateways, everything is designed for a smooth shopping experience, with room for future growth.",
      },
      {
        q: "Wix development",
        a: "Wix is a user-friendly platform for visually impressive websites without compromising on functionality. Ideal for startups, creatives and small businesses, it offers flexibility and ease of use. We help you make the most of its drag-and-drop tools, custom code options and built-in SEO features.",
      },
      {
        q: "Webflow development",
        a: "Webflow combines visual design with the control of custom code, a great choice for businesses that want design freedom without compromising performance. Our services cover custom design, interactions, CMS setup and ongoing support, with easy integration with marketing tools and analytics platforms.",
      },
      {
        q: "Magento development",
        a: "Magento is a robust e-commerce platform for businesses that need custom functionality and advanced features. From custom module development to third-party integrations, we help you build a store that handles complex product catalogs and large transaction volumes, and we take care of optimization and updates to keep it performing.",
      },
    ],
  },
  {
    label: "UI/UX design",
    qs: [
      {
        q: "How do we approach UI/UX design?",
        a: "A great website starts with an intuitive user experience and a thoughtful interface. We approach UI/UX with a user-first mindset, so every interaction feels seamless and purposeful. From layout structure to visual hierarchy, we design experiences that guide users naturally through your site.",
      },
      {
        q: "What does the process include?",
        a: "Our process includes research, wireframing and prototyping to align design choices with your brand and audience. By blending functionality with aesthetics, we create websites that not only look good but also work well.",
      },
    ],
  },
  {
    label: "E-commerce websites",
    qs: [
      {
        q: "What goes into a good e-commerce website?",
        a: "Creating an e-commerce website is about more than listing products. It’s about a smooth, secure and trustworthy shopping experience. We set up a platform that handles everything from product display to secure payments, with clear navigation, fast load times and mobile compatibility.",
      },
      {
        q: "How do we make the store easy to run?",
        a: "We make sure your backend is easy to manage, so updates and inventory control stay hassle-free. With real-time analytics, user-friendly checkout flows and scalable infrastructure, your store is built to grow.",
      },
    ],
  },
  {
    label: "Web applications",
    qs: [
      {
        q: "What is a web application?",
        a: "Web applications offer powerful functionality directly through the browser, without downloads or installations. We design and develop web apps that are scalable, responsive and tailored to your business processes.",
      },
      {
        q: "What kinds of web apps do we build?",
        a: "From internal dashboards to customer-facing platforms, our solutions are built with a focus on speed, usability and data security. We work with modern frameworks that allow flexible feature development as your needs evolve, and each application is tested thoroughly across devices.",
      },
    ],
  },
  {
    label: "Website redesign",
    qs: [
      {
        q: "When does a website redesign make sense?",
        a: "A redesign can refresh your brand, improve performance and align your digital presence with new business goals. It isn’t just about a new look. It’s about creating a better experience that supports your content and conversions.",
      },
      {
        q: "How do we run a redesign?",
        a: "We begin by assessing what’s working and what’s not, then reimagine the structure, design and functionality based on current trends and user behavior. We keep the transition smooth and preserve your existing data, SEO and functionality wherever needed, so the site feels new but stays familiar to your users.",
      },
    ],
  },
  {
    label: "SEO-friendly websites",
    qs: [
      {
        q: "What makes a website SEO-friendly?",
        a: "A website is only as effective as it is discoverable. We integrate SEO best practices from the development stage:\n• Clean code and fast load speeds\n• Mobile compatibility\n• Structured content and clear site architecture\n• Intuitive navigation and internal linking\n• Metadata, alt tags and schema markup",
      },
      {
        q: "How does this help your rankings?",
        a: "This approach helps search engines better understand and rank your pages, increasing your visibility from the start. With OneImpact, your website is built not just for users, but for search engines too.",
      },
    ],
  },
  {
    label: "Website maintenance",
    qs: [
      {
        q: "Why does a website need ongoing maintenance?",
        a: "Launching a website is just the beginning. Ongoing maintenance keeps your site functional, secure and aligned with evolving business needs.",
      },
      {
        q: "What does maintenance cover?",
        a: "We handle regular updates, security patches, performance monitoring and bug fixes so your users always have a smooth experience. We also keep an eye on usability trends and tech advancements to suggest timely improvements, so your website stays a reliable extension of your brand long after it goes live.",
      },
    ],
  },
  {
    label: "Integrations",
    qs: [
      {
        q: "Which tools can we connect to your website?",
        a: "Modern websites often need to connect with third-party tools to run smoothly. We integrate systems that support your business operations, from CRM platforms and email marketing tools to payment gateways and analytics services.",
      },
      {
        q: "How do we keep integrations reliable?",
        a: "Each integration is set up to be secure, stable and aligned with your user journey. With proper API configuration and testing, integrations work quietly in the background. We also guide you on choosing tools that meet your current and future needs.",
      },
    ],
  },
  {
    label: "Mobile-responsive sites",
    qs: [
      {
        q: "Why is mobile responsiveness essential?",
        a: "With more users browsing on mobile devices than ever before, mobile responsiveness is no longer optional. A site that adapts to every screen keeps visitors engaged and supports better search engine rankings.",
      },
      {
        q: "How do we build mobile-responsive websites?",
        a: "We design websites that adapt to different screen sizes while keeping usability and design consistent. Every element, from images to text and navigation, is optimized for smaller screens. We test across devices and browsers so your website feels natural on a phone, tablet or desktop.",
      },
    ],
  },
  {
    label: "Social proof",
    intro: "Social proof is part of how we design trust. At OneImpact, every website we build is not just functional but believable and grounded in real results.",
    qs: [
      {
        q: "Build trust where it matters",
        a: "First impressions count. We embed trust signals directly into your website’s structure, so visitors feel confident from the moment they land.",
      },
      {
        q: "Real stories, real impact",
        a: "From client testimonials and user reviews to case studies and media mentions, we bring in authentic content that speaks louder than sales pitches.",
      },
      {
        q: "Designed for credibility",
        a: "We place social proof strategically across your website, not just on one page. This shows your brand’s credibility at every step of the user journey.",
      },
      {
        q: "Visual validation",
        a: "Partner logos, user-generated content, awards and ratings show that others trust you, a subtle yet powerful way to influence new customers.",
      },
      {
        q: "Live proof, seamlessly integrated",
        a: "Want to show real-time purchases or sign-ups? We can integrate dynamic proof tools that add credibility without disrupting the user experience.",
      },
    ],
  },
];

const SPOTLIGHT = {
  id: "local",
  title: "Websites Built for Mumbai’s Local Search",
  paragraphs: [
    "In a bustling city like Mumbai, being visible online can make all the difference. A well-developed website isn’t just about aesthetics. It’s your gateway to local customers actively searching for services like yours. That’s why we build websites with local relevance at their core: clean architecture, fast-loading pages, mobile-first designs and SEO-friendly structures that boost your presence in local search results.",
    "Whether you run a café in Bandra, a salon in Andheri or a law firm in Fort, your website should speak to the community you’re part of and be easily found by them. We optimise your site for local SEO, so your business appears where it matters: in front of people nearby, ready to engage.",
  ],
  closing: "With OneImpact by your side, you’ll have a website that’s functional, beautifully built, discoverable and rooted in your local market.",
  cta: "Let’s make your website easy to find locally",
  visual: {
    label: "Illustration of a local search result with a business website listed first",
    rows: [
      { title: "Your Business", meta: "Open now. Website and directions." },
      { title: "Nearby Competitor", meta: "Closes soon" },
      { title: "Another Listing", meta: "2.4 km away" },
    ],
  },
};

const FAQ_GROUPS: { label: string; qs: { q: string; a: string }[] }[] = [
  {
    label: "Common problems",
    qs: [
      {
        q: "Why isn’t our website driving enough sales?",
        a: "Your website may lack clear calls to action, an intuitive layout, a streamlined user journey or a clear sales funnel. Slow load times, broken links and poor mobile optimization can also affect buying decisions, and a cluttered interface or unclear messaging might confuse visitors. Improving usability and aligning the site with user intent can help turn visits into sales.",
      },
      {
        q: "How can we boost our brand’s visibility and reach on the web?",
        a: "Optimizing your website for search engines, improving content structure and enhancing mobile responsiveness can increase visibility. A fast, secure site with clear messaging encourages users to explore and share. Adding SEO-friendly metadata and structured data also helps search engines understand your pages. Consistent updates and performance monitoring keep your site competitive.",
      },
      {
        q: "Why is our site not attracting the right audience?",
        a: "If your website lacks targeted content or doesn’t align with user intent, it may attract irrelevant traffic. A poor keyword strategy and weak SEO can make your site visible to the wrong users. The overall design and messaging should reflect your ideal audience’s needs. A focused user experience helps attract and retain the right visitors.",
      },
      {
        q: "How can we stand out from competitors in search results?",
        a: "A well-structured, mobile-friendly website with fast load times and optimized content can improve rankings. Schema markup, keyword-rich headings and original visuals enhance visibility. Quality backlinks and clear site architecture also play a key role. Making your content helpful and user-centric gives search engines a reason to rank you higher.",
      },
      {
        q: "Why isn’t our e-commerce website driving traffic?",
        a: "A lack of on-page SEO, slow-loading pages or a poor mobile experience can limit visibility. Inconsistent product descriptions and missing metadata can also affect how search engines index your pages. A technical audit can reveal issues affecting performance. Keeping your platform updated and search-optimized helps draw in more visitors.",
      },
      {
        q: "How can we improve our website’s conversion rate?",
        a: "A simplified checkout process, clear CTAs and user-friendly navigation guide users toward action. A responsive, fast site creates a smoother experience. Trust signals like reviews, SSL security and visible support options build confidence. Testing layouts and tracking user behavior help refine the flow for better conversions.",
      },
      {
        q: "How can we enhance our site’s local search presence?",
        a: "Use location-specific keywords, add a Google Maps widget and keep your NAP (name, address, phone) details consistent across your site and listings. Optimizing for mobile and creating location-based landing pages increase relevance. Local schema markup makes your site easier for search engines to understand. Positive reviews and local backlinks further boost visibility.",
      },
      {
        q: "Why aren’t our online marketing efforts converting into customers?",
        a: "If users land on a slow or confusing website, they may leave before engaging. Your site needs to match your campaign’s message and offer a clear next step. Inconsistent branding or a poor user interface can also affect trust. OneImpact makes sure your website supports your marketing goals with the right structure and experience.",
      },
      {
        q: "How can we improve user engagement and reduce bounce rates?",
        a: "Engaging visuals, easy navigation and fast-loading pages encourage users to explore more. Clear content structure with scannable text and interactive elements helps hold attention. Mobile responsiveness keeps visitors on your site longer, whatever the device. Regular updates and fresh content give users a reason to return.",
      },
    ],
  },
  {
    label: "Building with us",
    qs: [
      {
        q: "How can custom web development benefit your business?",
        a: "Custom web development aligns your website with your brand goals and customer needs. It gives you the flexibility to build features that support your business model and stand out in a crowded market. With tailored design and functionality, your website becomes more efficient at turning visitors into customers.",
      },
      {
        q: "How do we tailor our web design strategy for your business?",
        a: "We begin by understanding your industry, audience and goals before building a strategy. Each design decision is based on insights specific to your brand and user behavior, so your website not only looks great but also supports your business objectives.",
      },
      {
        q: "Why is choosing the right web development company important?",
        a: "The right web development company brings technical expertise, strategic thinking and a clear understanding of your business. They don’t just build a website. They create a digital experience that drives results. At OneImpact, we combine design, development and strategy to deliver solutions that support long-term growth.",
      },
      {
        q: "What makes our approach to web design different?",
        a: "We build websites that are visually appealing, user-centric and conversion-focused. Our designs are tailored to reflect each brand’s identity while keeping functionality seamless. We combine design thinking with technical expertise, and it’s this blend of creativity and strategy that sets us apart.",
      },
      {
        q: "What are the benefits of mobile-first web development?",
        a: "Mobile-first development makes sure your site is optimized for smartphones and tablets, which account for most web traffic today. It improves accessibility, user experience and performance on smaller screens, and helps with SEO rankings and load times.",
      },
      {
        q: "How can SEO integration improve website performance?",
        a: "Integrating SEO from the start means your website is built to be found. Clean code, fast loading speeds and structured content all contribute to better visibility. When your website ranks higher, it attracts more qualified traffic and engagement.",
      },
      {
        q: "Why is fast website speed essential for user experience?",
        a: "Website speed directly affects how users interact with your site. A fast-loading website keeps visitors engaged, reduces bounce rates and improves satisfaction. Speed is also a ranking factor for search engines, so it matters for both user experience and discoverability.",
      },
      {
        q: "How do we optimize websites for conversions?",
        a: "We analyse user behavior, place CTAs effectively and streamline navigation to reduce drop-offs. Every element is designed to guide users toward action, whether that’s signing up, buying or getting in touch. From page speed to layout, each factor plays a role, and we keep testing and tweaking to improve performance.",
      },
      {
        q: "What is the role of CTAs (calls to action) in web design?",
        a: "CTAs guide visitors toward the actions you want them to take, like signing up or making a purchase. Their placement, design and wording are all carefully considered to encourage clicks. We make sure CTAs are clear, compelling and part of the design, because effective CTAs can make a real difference to engagement and conversion.",
      },
      {
        q: "Why is content optimization crucial for engagement?",
        a: "Optimized content makes it easier for users to find what they’re looking for, which improves engagement. It also helps search engines understand your website, increasing your chances of ranking higher. We keep content clear, relevant and well structured, with engaging visuals, strong headlines and SEO-friendly text.",
      },
      {
        q: "How do interactive elements enhance website engagement?",
        a: "Interactive elements like sliders, quizzes or hover effects create a more engaging experience. They invite users to explore rather than just scroll, and help convey information in more digestible, visual ways. Used thoughtfully, they can increase time on site and reduce bounce rates.",
      },
      {
        q: "How can a well-organized website architecture improve usability?",
        a: "A clean, logical site structure helps users find what they need quickly. It also lets search engines crawl and index your pages more efficiently. We organize content into intuitive categories and streamline navigation to reduce friction.",
      },
      {
        q: "Why is a user-friendly interface important for business success?",
        a: "A user-friendly interface makes it easier for visitors to navigate your site, find information and take action. This improves satisfaction and increases the chances of conversion. A simple, intuitive design also builds trust and reflects well on your brand.",
      },
      {
        q: "How do we incorporate e-commerce functionality into websites?",
        a: "We build e-commerce features that are intuitive and scalable, making it easy to manage products, payments and inventory. From secure payment gateways to smooth checkout, every detail is covered. We also integrate essential tools like cart recovery and analytics for better sales tracking.",
      },
      {
        q: "How do integrations with social media platforms enhance your website?",
        a: "Social media integrations increase engagement and drive traffic between platforms. Features like social sharing buttons, embedded feeds and login options improve interactivity and support brand visibility.",
      },
      {
        q: "How does custom web development help build brand loyalty?",
        a: "Custom development gives you control over how your brand is presented and how users interact with it. Personalized features and consistent design create a strong brand identity. When users enjoy their experience, they’re more likely to return.",
      },
      {
        q: "How do we help your website compete in crowded markets?",
        a: "We combine strong technical foundations with market-relevant design choices. We study competitors, follow best practices and focus on creating unique value through functionality and content. Our websites are built to rank well and convert, giving your brand a competitive edge online.",
      },
      {
        q: "What can you expect from our web development services?",
        a: "A visually compelling, high-performing website built to drive engagement. We focus on functionality, speed, SEO and mobile responsiveness, with the goal of a digital platform that supports measurable business outcomes.",
      },
      {
        q: "Why trust us as your web development partner?",
        a: "We bring technical expertise and industry understanding to every project. OneImpact builds websites that are scalable, secure and tailored to your business goals, and our process is transparent and collaborative from start to finish. We’re not just building a website. We’re helping build your digital future.",
      },
    ],
  },
  {
    label: "Support and care",
    qs: [
      {
        q: "Why is ongoing maintenance important for your website?",
        a: "Ongoing maintenance keeps your website secure, up to date and fully functional. It helps prevent downtime, patch vulnerabilities and keep the user experience smooth. Regular updates also keep your site compatible with the latest browsers and devices. At OneImpact, we see maintenance as a proactive approach to long-term website performance.",
      },
      {
        q: "How do we ensure the reliability of your website?",
        a: "We run routine checks, security updates and performance monitoring so your website runs smoothly. From fixing bugs to updating plugins and scripts, our team keeps your site stable and dependable. We also set up alerts for issues, so they’re addressed before they affect users.",
      },
      {
        q: "How do we ensure your website is secure?",
        a: "Website security starts with clean, well-written code and includes best practices like SSL certificates, secure hosting and regular updates. We put strong security measures in place to protect your data and keep your site safe from threats. Ongoing monitoring also helps detect and prevent issues early.",
      },
      {
        q: "How can we help you scale your website?",
        a: "As your business grows, your website needs to handle more traffic, features and content without losing speed. We build scalable architectures and integrate backend systems that allow smooth expansion, and support upgrades and new features with minimal disruption.",
      },
      {
        q: "How does scalability affect your website’s long-term success?",
        a: "Scalability means your website can grow with your business without a complete rebuild. It allows easy updates, new features and higher traffic, keeping your site future-ready and cost-effective over time.",
      },
      {
        q: "How do we provide continuous SEO support?",
        a: "We build SEO best practices into the website’s structure, code and content layout. After launch, we monitor technical SEO, fix crawl issues and improve site speed, all of which affect rankings. Our development team works closely with SEO specialists so your website stays optimized, visible and competitive.",
      },
      {
        q: "How can web analytics improve your website’s performance?",
        a: "Web analytics show user behavior, traffic sources and engagement patterns. By analysing this data, we identify areas to improve and make informed decisions to enhance user experience. It also tracks the effect of new features or design changes, so we can fine-tune your site for better results.",
      },
      {
        q: "How do we ensure fast loading times?",
        a: "We optimize your website’s code, compress images and use caching to reduce load times. Efficient backend architecture and content delivery networks (CDNs) boost speed further. Regular performance audits help us find and fix bottlenecks quickly.",
      },
      {
        q: "Why is content management easy with our web development services?",
        a: "We use intuitive content management systems that let you update text, images and layouts without technical knowledge. Custom backend panels can also be built to match your content workflow. Our training and documentation make it easy to manage your site yourself, so control of your website stays in your hands.",
      },
      {
        q: "How does a strong backend contribute to website performance?",
        a: "A robust backend keeps the site running efficiently behind the scenes. It manages data securely, processes requests quickly and supports advanced functionality. Our team writes clean, scalable code that can handle high volumes of traffic and data.",
      },
      {
        q: "How can we help with a website redesign?",
        a: "We start by analysing your current website’s performance and identifying areas to improve. Then we work with you to redefine the structure, visual design and user flow. Whether it’s modernizing the look or upgrading the backend, the redesign is aligned with your goals, for a refreshed website that meets current standards.",
      },
    ],
  },
];

export default function WebDevelopmentPage() {
  // State for Service tabs (Development vs Platforms and CMS)
  const [svcIdx, setSvcIdx] = useState(0);

  // State for Offer tabs
  const [offerIdx, setOfferIdx] = useState(0);
  const [offerExpanded, setOfferExpanded] = useState(false);
  const [openOfferQ, setOpenOfferQ] = useState<number | null>(null);

  // State for FAQ tabs
  const [faqIdx, setFaqIdx] = useState(0);
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [openFaqQ, setOpenFaqQ] = useState<number | null>(null);

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
  const [need2, setNeed2] = useState("Not sure yet");
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
    document.body.style.cursor = "auto";
  }, []);

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
      <style jsx global>{`
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
          <div
            id="audit"
            className="note-paper-card"
            style={{ color: "#111111" }}
          >
            {/* Note paper background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Note_paper.webp"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="note-paper-img"
            />

            {!sent1 ? (
              <form
                onSubmit={handleSubmit1}
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#6E6E73", textTransform: "uppercase" }}>
                    Free for your brand
                  </span>
                  <h3
                    className="webdev-heading"
                    style={{
                      margin: 0,
                      fontSize: "22px",
                      lineHeight: 1.15,
                      letterSpacing: "-0.03em",
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    Get your free website consultation
                  </h3>
                  <span style={{ fontSize: "12.5px", color: "#555558" }}>
                    A real person from our team reviews your website and gets back to you.
                  </span>
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
                    placeholder="First and last name"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, name: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "14.5px",
                      height: "44px",
                      padding: "0 12px",
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
                    placeholder="98XXX XXXXX"
                    value={phone1}
                    onChange={(e) => setPhone1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, phone: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "14.5px",
                      height: "44px",
                      padding: "0 12px",
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

                {/* Website or Business Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <label htmlFor="top-handle" style={{ fontWeight: 600, fontSize: "13px", color: "#1D1D1F", letterSpacing: 0 }}>
                    Current website or business name
                  </label>
                  <input
                    id="top-handle"
                    className="fd"
                    type="text"
                    placeholder="yourbrand.com or Your Brand"
                    value={handle1}
                    onChange={(e) => setHandle1(e.target.value)}
                    onBlur={() => setTouched1((t) => ({ ...t, handle: true }))}
                    style={{
                      font: "inherit",
                      fontSize: "14.5px",
                      height: "44px",
                      padding: "0 12px",
                      borderRadius: "12px",
                      border: `1.5px solid ${showHandle1Err ? "#DC2626" : "#D2D2D7"}`,
                      background: "#FFFFFF",
                      color: "#111111",
                      width: "100%",
                    }}
                  />
                  {showHandle1Err && (
                    <span role="alert" style={{ fontSize: "12.5px", color: "#DC2626" }}>
                      Enter your website or business name
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
                    <option value="New website">New website</option>
                    <option value="Website redesign">Website redesign</option>
                    <option value="E-commerce store">E-commerce store</option>
                    <option value="Web application">Web application</option>
                    <option value="Maintenance and support">Maintenance and support</option>
                    <option value="Something else">Something else</option>
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
                  Get my free website consultation
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
                <h3 className="webdev-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700, color: "#111111" }}>
                  Request received
                </h3>
                <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px", lineHeight: 1.5 }}>
                  Thanks, {name1}. We&apos;ll look at {handle1} and get in touch on {phone1}.
                </p>
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

      {/* ── USP CAROUSEL */}
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
                Built for performance, designed to <span style={{ color: "#f9d230" }}>scale.</span>
              </h2>
              <p style={{ margin: 0, fontSize: "18px", color: "rgba(255, 255, 255, 0.72)" }}>
                Key principles behind our web development process:
              </p>
            </div>

            {/* Arrows */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                type="button"
                className="press"
                onClick={() => scrollCarousel("prev")}
                disabled={carIdx === 0}
                aria-label="Previous slide"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="press"
                onClick={() => scrollCarousel("next")}
                disabled={carIdx === USP_CARDS.length - 1}
                aria-label="Next slide"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="car-view" ref={trackRef} onScroll={handleTrackScroll}>
            <div className="car-track">
              {USP_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="car-card"
                  style={{
                    background: "#08080a",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "24px",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "230px",
                  }}
                >
                  <span
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      background: "rgba(249, 210, 48, 0.15)",
                      border: "1px solid rgba(249, 210, 48, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f9d230",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={card.d} />
                    </svg>
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
                    <h3
                      className="webdev-heading"
                      style={{
                        margin: 0,
                        fontSize: "21px",
                        letterSpacing: "-0.025em",
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      {card.head}
                    </h3>
                    <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "15px", lineHeight: 1.5 }}>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              className="webdev-heading"
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
              Explore our <span style={{ color: "#f9d230" }}>web development services</span>
            </h2>

            {/* Segmented Control */}
            <div
              role="tablist"
              aria-label="Web development service groups"
              style={{
                position: "relative",
                display: "inline-grid",
                gridTemplateColumns: `repeat(${SVC_GROUPS.length}, minmax(0, 1fr))`,
                background: "#1C1C1E",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "999px",
                padding: "4px",
                width: "min(400px, 100%)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "4px",
                  bottom: "4px",
                  left: "4px",
                  width: `calc((100% - 8px) / ${SVC_GROUPS.length})`,
                  transform: `translateX(${svcIdx * 100}%)`,
                  transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)",
                  background: "#f9d230",
                  borderRadius: "999px",
                  boxShadow: "0 3px 12px rgba(249, 210, 48, 0.45)",
                }}
              />
              {SVC_GROUPS.map((g, i) => (
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
                    fontSize: "14.5px",
                    fontWeight: svcIdx === i ? 700 : 500,
                    color: svcIdx === i ? "#000000" : "rgba(255, 255, 255, 0.75)",
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
                  <span>{g.label}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "1px 7px",
                      borderRadius: "999px",
                      background: svcIdx === i ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.12)",
                      color: svcIdx === i ? "#000000" : "rgba(255, 255, 255, 0.75)",
                      transition: "all 200ms ease",
                    }}
                  >
                    {g.items.length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <p style={{ margin: "0 0 28px", fontSize: "18px", color: "rgba(255, 255, 255, 0.72)", maxWidth: "56ch" }}>
            Curious about what else we bring to the table? Here&apos;s a deeper look at our web development offerings.
          </p>

          {/* Services Cards Grid */}
          <div className="webdev-services-grid">
            {activeServices.items.map((s, idx) => (
              <div
                key={idx}
                className="webdev-service-card"
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
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: s.dot,
                      flex: "none",
                    }}
                    aria-hidden="true"
                  />
                  <h3
                    className="webdev-heading"
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      letterSpacing: "-0.025em",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {s.t}
                  </h3>
                </div>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.72)", fontSize: "14.5px", lineHeight: 1.55 }}>{s.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Breaker Divider ── */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mb-1 bg-[#000000]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Breaker.svg"
          alt=""
          className="w-full h-auto block select-none pointer-events-none"
        />
      </div>

      {/* ── WHAT WE OFFER: TOPIC PILLS & ACCORDIONS */}
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
              className="webdev-heading"
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

          {/* Scrollable pill buttons */}
          <div
            className="scrollrow"
            role="tablist"
            aria-label="What we offer topics"
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
            {OFFER_TOPICS.map((o, i) => (
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
                {o.label}
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
              border: "1px solid rgba(255, 255, 255, 0.12)",
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
              <div style={{ marginTop: "28px", textAlign: "center" }}>
                <button
                  type="button"
                  className="press y btn-sheen"
                  onClick={() => setOfferExpanded(!offerExpanded)}
                  style={{
                    font: "inherit",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                    background: "#f9d230",
                    border: 0,
                    borderRadius: "999px",
                    padding: "10px 24px",
                    minHeight: "44px",
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

      {/* ── SPOTLIGHT: WEBSITES BUILT FOR MUMBAI'S LOCAL SEARCH */}
      <section
        id="local"
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "clamp(36px, 4.5vw, 60px) clamp(16px, 3vw, 32px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(32px, 6vw, 88px)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2
              className="webdev-heading"
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
              Websites Built for <span style={{ color: "#f9d230" }}>Mumbai’s</span> Local Search
            </h2>
            {SPOTLIGHT.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: "17.5px", color: "rgba(255, 255, 255, 0.72)", margin: 0, lineHeight: 1.6 }}>
                {p}
              </p>
            ))}
            <p style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "18px", margin: 0 }}>
              {SPOTLIGHT.closing}
            </p>
            <a
              className="press y btn-sheen"
              href="#audit"
              style={{
                alignSelf: "flex-start",
                fontWeight: 700,
                fontSize: "16px",
                padding: "13px 26px",
                minHeight: "50px",
                background: "#f9d230",
                color: "#000000",
                textDecoration: "none",
                border: 0,
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(249, 210, 48, 0.4)",
              }}
            >
              {SPOTLIGHT.cta}
            </a>
          </div>

          {/* Visual: Map mockup in Dark Mode */}
          <figure
            style={{
              margin: 0,
              borderRadius: "28px",
              overflow: "hidden",
              background: "#08080a",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)",
            }}
            aria-label={SPOTLIGHT.visual.label}
          >
            <div
              style={{
                position: "relative",
                height: "230px",
                background: "#0F172A",
                backgroundImage:
                  "linear-gradient(115deg,transparent 46%,rgba(255,255,255,0.06) 46%,rgba(255,255,255,0.06) 50%,transparent 50%),linear-gradient(25deg,transparent 58%,rgba(255,255,255,0.06) 58%,rgba(255,255,255,0.06) 61%,transparent 61%),linear-gradient(0deg,transparent 30%,rgba(37,99,235,0.15) 30%,rgba(37,99,235,0.15) 44%,transparent 44%)",
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
                  background: "#475569",
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
                  background: "#475569",
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
                  background: "#f9d230",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.5)",
                }}
              />
            </div>
            <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {SPOTLIGHT.visual.rows.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 14px",
                    borderRadius: "16px",
                    background: i === 0 ? "rgba(249, 210, 48, 0.12)" : "rgba(255, 255, 255, 0.04)",
                    border: i === 0 ? "1px solid rgba(249, 210, 48, 0.35)" : "1px solid rgba(255, 255, 255, 0.06)",
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
                      background: i === 0 ? "#f9d230" : "rgba(255, 255, 255, 0.12)",
                      color: i === 0 ? "#000000" : "#FFFFFF",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span style={{ fontWeight: 650, fontSize: "15.5px", color: "#FFFFFF" }}>{r.title}</span>
                    <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.65)", letterSpacing: 0 }}>{r.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* ── REELS SHOWCASE (IN-WEBSITE) */}
      <ServiceReelsSection
        heading="Our work in motion"
        subtitle="Explore our client reels directly within the page — no external redirects."
      />

      {/* ── FAQs */}
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
              className="webdev-heading"
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
              border: "1px solid rgba(255, 255, 255, 0.12)",
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
              <div style={{ marginTop: "28px", textAlign: "center" }}>
                <button
                  type="button"
                  className="press y btn-sheen"
                  onClick={() => setFaqExpanded(!faqExpanded)}
                  style={{
                    font: "inherit",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#000000",
                    background: "#f9d230",
                    border: 0,
                    borderRadius: "999px",
                    padding: "10px 24px",
                    minHeight: "44px",
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

      {/* ── FINAL CTA & SECOND FORM */}
      <section
        id="audit2"
        style={{
          width: "100%",
          backgroundColor: "#000000",
          padding: "clamp(48px, 6vw, 84px) 0",
        }}
      >
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
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
            {/* Left info */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2
                className="webdev-heading"
                style={{
                  margin: 0,
                  fontSize: "clamp(2.4rem, 4.8vw, 4.4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Websites that{" "}
                <span
                  style={{
                    color: "#f9d230",
                    fontStyle: "italic",
                    fontFamily: "var(--font-serif), Georgia, serif",
                  }}
                >
                  perform.
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
                Get a free website consultation and a clear view of what your site needs next. No obligation.
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
                  href="mailto:connect@oneimpact.in"
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
                  connect@oneimpact.in
                </a>
              </div>
            </div>

            {/* Right Form Card */}
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
                  <h3
                    className="webdev-heading"
                    style={{
                      margin: 0,
                      fontSize: "26px",
                      lineHeight: 1.15,
                      letterSpacing: "-0.035em",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Get your free website consultation
                  </h3>

                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="final-name" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                      Your name
                    </label>
                    <input
                      id="final-name"
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

                  {/* Phone */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="final-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                      Phone or WhatsApp number
                    </label>
                    <input
                      id="final-phone"
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

                  {/* Website or Business Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="final-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                      Current website or business name
                    </label>
                    <input
                      id="final-handle"
                      className="fd"
                      type="text"
                      placeholder="yourbrand.com or Your Brand"
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
                        Enter your website or business name
                      </span>
                    )}
                  </div>

                  {/* Need dropdown */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor="final-need" style={{ fontWeight: 500, fontSize: "14px", color: "#f9d230", letterSpacing: 0 }}>
                      What do you need? <span style={{ color: "#8E8E93" }}>(optional)</span>
                    </label>
                    <select
                      id="final-need"
                      className="fd"
                      value={need2}
                      onChange={(e) => setNeed2(e.target.value)}
                      style={{
                        font: "inherit",
                        fontSize: "16px",
                        height: "48px",
                        padding: "0 14px",
                        borderRadius: "12px",
                        border: "1.5px solid rgba(255, 255, 255, 0.12)",
                        background: "#161922",
                        color: "#FFFFFF",
                        width: "100%",
                      }}
                    >
                      <option value="Not sure yet">Not sure yet</option>
                      <option value="New website">New website</option>
                      <option value="Website redesign">Website redesign</option>
                      <option value="E-commerce store">E-commerce store</option>
                      <option value="Web application">Web application</option>
                      <option value="Maintenance and support">Maintenance and support</option>
                      <option value="Something else">Something else</option>
                    </select>
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
                    Get my free website consultation
                  </button>

                  <span style={{ fontSize: "13px", color: "#8E8E93", textAlign: "center", letterSpacing: 0 }}>
                    No spam, no sales scripts. We&apos;ll reply on WhatsApp or call.
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
                  <h3 role="status" className="webdev-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700, color: "#FFFFFF" }}>
                    Request received
                  </h3>
                  <p style={{ margin: 0, color: "#C7C7CC" }}>
                    Thanks, {name2}. We&apos;ll look at {handle2} and get in touch on {phone2}.
                  </p>
                  <button
                    type="button"
                    className="press"
                    onClick={() => {
                      setSent2(false);
                      setName2("");
                      setPhone2("");
                      setHandle2("");
                      setTouched2({});
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
        </div>
      </section>

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
