"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";
import { ServiceReelsSection } from "@/components/showroom/ServiceReelsSection";

const NOTICES = [
  "Free website consultation. Fill the form and our team will get back to you.",
  "Every site is built SEO-ready: clean code, fast pages and structured content.",
  "Custom websites, e-commerce stores and web apps, built around your goals.",
  "No one-size-fits-all templates. Every website is built for your brand.",
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
    return () => {
      document.body.classList.add("custom-cursor-active");
    };
  }, []);

  return (
    <div
      className="webdev-landing-root"
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
        .webdev-landing-root details summary {
          list-style: none;
          cursor: pointer;
        }
        .webdev-landing-root details summary::-webkit-details-marker {
          display: none;
        }
        .webdev-landing-root .chev {
          transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1);
        }
        .webdev-landing-root details[open] .chev {
          transform: rotate(45deg);
        }
        .webdev-landing-root .navlinks {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        .webdev-landing-root .mbar {
          display: none;
          gap: 10px;
        }
        .webdev-landing-root .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
        }
        .webdev-landing-root .scrollrow {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 2px 2px 8px;
          scrollbar-width: thin;
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
            background: "#f9d230",
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
            background: "#4066c6",
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
              Web development services by OneImpact
            </span>

            <h1
              className="webdev-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              Websites That Look Sharp, Load Fast and Convert
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
              Custom, SEO-ready web development for growing brands.
            </p>

            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#3A3A3C", maxWidth: "50ch" }}>
              At OneImpact, we donâ€™t just build websites. We craft digital experiences that help your brand grow, bringing together strategy, design and development in web development services tailored to your business goals.
            </p>
            <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.5, color: "#3A3A3C", maxWidth: "50ch" }}>
              Your website should do more than exist. It should perform, impress and grow with you. Thatâ€™s what we deliver.
            </p>

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
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#f9d230", letterSpacing: 0 }}>
                    Free for your brand
                  </span>
                  <h2
                    className="webdev-heading"
                    style={{
                      margin: 0,
                      fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.035em",
                      fontWeight: 700,
                    }}
                  >
                    Get your free website consultation
                  </h2>
                  <p style={{ fontSize: "15.5px", color: "#C7C7CC", letterSpacing: 0, margin: 0 }}>
                    A real person from our team looks at what you need and gets back to you.
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

                {/* Website or Business Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    Current website or business name
                  </label>
                  <input
                    id="hero-handle"
                    className="fd"
                    type="text"
                    placeholder="yourbrand.com or Your Brand"
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
                      Enter your website or business name
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
                  Get my free website consultation
                </button>

                <span style={{ fontSize: "13px", color: "#8E8E93", textAlign: "center", letterSpacing: 0 }}>
                  No spam, no sales scripts. Weâ€™ll reply on WhatsApp or call.
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
                <h3 role="status" className="webdev-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>
                  Request received
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name1}. Weâ€™ll look at {handle1} and get in touch on {phone1}.
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

      {/* â”€â”€ CLIENTS / BRANDS WE WORK WITH MARQUEE */}
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
          Trusted by growing brands across India
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

      {/* â”€â”€ USP CAROUSEL */}
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
                className="webdev-heading"
                style={{
                  margin: 0,
                  fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                  maxWidth: "16ch",
                }}
              >
                Web development that fits your business. Not a template.
              </h2>
              <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "50ch" }}>
                Swipe through what you get with OneImpact as your web development provider.
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
                    <h3 className="webdev-heading" style={{ margin: 0, fontSize: "28px", letterSpacing: "-0.04em", fontWeight: 700, lineHeight: 1.1 }}>
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

      {/* â”€â”€ PROOF SECTION: 4 STAGES (PLAN, DESIGN, BUILD, SUPPORT) & INTRO */}
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
            className="webdev-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            Building a website isn't just about code and design.
          </h2>
          <p style={{ fontSize: "21px", lineHeight: 1.45, color: "#3A3A3C", margin: 0 }}>
            It's about creating a digital experience that mirrors your brand and moves your business forward.
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.5, color: "#6E6E73", margin: 0 }}>
            At OneImpact, we don't offer one-size-fits-all solutions. We listen, ask the right questions and dive deep into what makes your business tick, so we can build websites that feel right, work flawlessly and scale effortlessly.
          </p>
        </div>

        {/* Pillars Head & Grid */}
        <div style={{ marginTop: "clamp(48px, 6vw, 72px)", display: "flex", flexDirection: "column", gap: "8px", textAlign: "center" }}>
          <h3
            className="webdev-heading"
            style={{
              margin: 0,
              fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
              letterSpacing: "-0.035em",
              fontWeight: 700,
            }}
          >
            At OneImpact, every website goes through four stages
          </h3>
          <p style={{ margin: "0 0 28px", color: "#6E6E73", fontSize: "17px" }}>
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
                className="webdev-heading"
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

      {/* â”€â”€ CLIENT REVIEWS */}
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

      {/* â”€â”€ BENEFITS: HOW WEB DEVELOPMENT BOOSTS YOUR BUSINESS */}
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
            className="webdev-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            How web development boosts your business
          </h2>
          <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73" }}>
            Here's what a well-built website does for your business:
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
                <h3 className="webdev-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25 }}>
                  {b.title}
                </h3>
              </div>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "15px", lineHeight: 1.5 }}>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ HIGHLIGHT: WHY ONEIMPACT? (YELLOW CONTAINER) */}
      <section
        id="why-oneimpact"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(32px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)",
        }}
      >
        <div
          style={{
            background: "#f9d230",
            borderRadius: "36px",
            padding: "clamp(28px, 5vw, 64px)",
          }}
        >
          <h2
            className="webdev-heading"
            style={{
              margin: "0 0 36px",
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            Why OneImpact?
          </h2>

          <div
            className="webdev-why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
              gap: "12px",
            }}
          >
            {WHY_HIGHLIGHT_CARDS.map((w, idx) => (
              <div
                key={idx}
                className="webdev-why-card"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "22px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3
                  className="webdev-heading"
                  style={{
                    margin: 0,
                    fontSize: "18.5px",
                    letterSpacing: "-0.025em",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: "#000000",
                  }}
                >
                  {w.t}
                </h3>
                <p style={{ margin: 0, color: "#3A3A3C", fontSize: "15.5px", lineHeight: 1.5 }}>{w.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ SERVICES SECTION WITH SEGMENTED CONTROL */}
      <section
        id="services"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(40px, 5vw, 64px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
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
            className="webdev-heading"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              maxWidth: "14ch",
            }}
          >
            Explore our web development services
          </h2>

          {/* Segmented Control */}
          <div
            role="tablist"
            aria-label="Web development service groups"
            style={{
              position: "relative",
              display: "inline-grid",
              gridTemplateColumns: `repeat(${SVC_GROUPS.length}, minmax(0, 1fr))`,
              background: "#F2F2F5",
              border: "1px solid #E5E5EA",
              borderRadius: "999px",
              padding: "4px",
              boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.06)",
              width: "min(400px, 100%)",
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
                aria-selected={svcIdx === i}
                onClick={() => setSvcIdx(i)}
                style={{
                  position: "relative",
                  zIndex: 1,
                  font: "inherit",
                  fontSize: "14.5px",
                  fontWeight: svcIdx === i ? 700 : 500,
                  color: svcIdx === i ? "#000000" : "#555558",
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
                    background: svcIdx === i ? "rgba(0, 0, 0, 0.12)" : "rgba(0, 0, 0, 0.05)",
                    color: svcIdx === i ? "#000000" : "#8E8E93",
                    transition: "all 200ms ease",
                  }}
                >
                  {g.items.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p style={{ margin: "0 0 32px", fontSize: "19px", color: "#6E6E73", maxWidth: "56ch" }}>
          Curious about what else we bring to the table? Here's a deeper look at our web development offerings.
        </p>

        {/* Services Cards Grid */}
        <div className="webdev-services-grid">
          {activeServices.items.map((s, idx) => (
            <div
              key={idx}
              className="webdev-service-card"
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
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: s.dot,
                  }}
                  aria-hidden="true"
                />
                <h3
                  className="webdev-heading"
                  style={{
                    margin: 0,
                    fontSize: "21px",
                    letterSpacing: "-0.03em",
                    fontWeight: 700,
                  }}
                >
                  {s.t}
                </h3>
              </div>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "16px", lineHeight: 1.5 }}>{s.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ WHAT WE OFFER: TOPIC PILLS & ACCORDIONS */}
      <section
        id="offer"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(36px, 4.5vw, 56px) clamp(16px, 3vw, 32px) clamp(24px, 3vw, 36px)",
        }}
      >
        <h2
          className="webdev-heading"
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

        {/* Scrollable pill buttons */}
        <div className="scrollrow" role="tablist" aria-label="What we offer topics">
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
              }}
              style={{
                font: "inherit",
                fontSize: "15px",
                fontWeight: offerIdx === i ? 600 : 500,
                color: offerIdx === i ? "#000000" : "#3A3A3C",
                background: offerIdx === i ? "#f9d230" : "#FFFFFF",
                border: offerIdx === i ? "1.5px solid #f9d230" : "1.5px solid #D2D2D7",
                borderRadius: "999px",
                minHeight: "44px",
                padding: "8px 18px",
                cursor: "pointer",
              }}
            >
              {o.label}
            </button>
          ))}
        </div>

        {/* Active topic panel */}
        <div
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
            {visibleOfferQs.map((qa, i) => (
              <details
                key={i}
                style={{
                  borderTop: "1px solid #D2D2D7",
                }}
              >
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
                  <span>{qa.q}</span>
                  <svg className="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="prewrap" style={{ margin: "0 0 18px", color: "#3A3A3C", maxWidth: "75ch", fontSize: "16px", lineHeight: 1.55 }}>
                  {qa.a}
                </p>
              </details>
            ))}
          </div>

          {activeOffer.qs.length > 5 && (
            <div style={{ marginTop: "20px" }}>
              <button
                type="button"
                className="press"
                onClick={() => setOfferExpanded(!offerExpanded)}
                style={{
                  font: "inherit",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#000000",
                  background: "#FFFFFF",
                  border: "1.5px solid #D2D2D7",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  minHeight: "40px",
                  cursor: "pointer",
                }}
              >
                {offerExpanded ? "Show fewer" : `Show all ${activeOffer.qs.length} questions`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* â”€â”€ SPOTLIGHT: WEBSITES BUILT FOR MUMBAI'S LOCAL SEARCH */}
      <section
        id="local"
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
              className="webdev-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                maxWidth: "14ch",
              }}
            >
              {SPOTLIGHT.title}
            </h2>
            {SPOTLIGHT.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>
                {p}
              </p>
            ))}
            <p style={{ color: "#000000", fontWeight: 600, fontSize: "18px", margin: 0 }}>
              {SPOTLIGHT.closing}
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
              {SPOTLIGHT.cta}
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
            aria-label={SPOTLIGHT.visual.label}
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
                  background: "#f9d230",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                }}
              />
            </div>
            <div style={{ padding: "10px 14px 14px", display: "flex", flexDirection: "column" }}>
              {SPOTLIGHT.visual.rows.map((r, i) => (
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
        heading="Our work in motion"
        subtitle="Explore our client reels directly within the page — no external redirects."
      />

      {/* â”€â”€ FAQs */}
      <section
        id="faq"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)",
        }}
      >
        <h2
          className="webdev-heading"
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

        {/* FAQ list */}
        <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #E5E5EA" }}>
          {visibleFaqs.map((qa, i) => (
            <details
              key={i}
              style={{
                borderTop: "1px solid #E5E5EA",
              }}
            >
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
                <span>{qa.q}</span>
                <svg className="chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="prewrap" style={{ margin: "0 0 20px", color: "#3A3A3C", maxWidth: "75ch", fontSize: "16px", lineHeight: 1.55 }}>
                {qa.a}
              </p>
            </details>
          ))}
        </div>

        {activeFaqGroup.qs.length > 5 && (
          <div style={{ marginTop: "24px" }}>
            <button
              type="button"
              className="press"
              onClick={() => setFaqExpanded(!faqExpanded)}
              style={{
                font: "inherit",
                fontSize: "15px",
                fontWeight: 600,
                color: "#000000",
                background: "#F5F5F7",
                border: "1.5px solid #E5E5EA",
                borderRadius: "999px",
                padding: "10px 22px",
                minHeight: "44px",
                cursor: "pointer",
              }}
            >
              {faqExpanded ? "Show fewer questions" : `Show all ${activeFaqGroup.qs.length} questions`}
            </button>
          </div>
        )}
      </section>

      {/* â”€â”€ FINAL CTA & SECOND FORM */}
      <section
        id="audit2"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "clamp(36px, 4.5vw, 56px) clamp(16px, 3vw, 32px) clamp(72px, 10vw, 120px)",
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

          {/* Left info */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2
              className="webdev-heading"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
              }}
            >
              Websites that perform.
            </h2>
            <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "44ch" }}>
              Get a free website consultation and a clear view of what your site needs next. No obligation.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", paddingTop: "8px" }}>
              <a
                className="press"
                href="https://wa.me/918369018104"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FFFFFF",
                  background: "#000000",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5h16v11H9l-5 4z" />
                </svg>
                +91 83690 18104
              </a>
              <a
                className="press"
                href="mailto:connect@oneimpact.in"
                style={{
                  color: "#000000",
                  background: "rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  minHeight: "48px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                connect@oneimpact.in
              </a>
            </div>
          </div>

          {/* Right Form Card */}
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
                <h3
                  className="webdev-heading"
                  style={{
                    margin: 0,
                    fontSize: "26px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.035em",
                    fontWeight: 700,
                  }}
                >
                  Get your free website consultation
                </h3>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="final-name" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
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

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="final-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
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

                {/* Website or Business Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="final-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
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
                      Enter your website or business name
                    </span>
                  )}
                </div>

                {/* Need dropdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="final-need" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>
                    What do you need? <span style={{ color: "#8E8E93" }}>(optional)</span>
                  </label>
                  <select
                    id="final-need"
                    className="fd"
                    value={need2}
                    onChange={(e) => setNeed2(e.target.value)}
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
                  Get my free website consultation
                </button>

                <span style={{ fontSize: "13px", color: "#8E8E93", textAlign: "center", letterSpacing: 0 }}>
                  No spam, no sales scripts. Weâ€™ll reply on WhatsApp or call.
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
                <h3 role="status" className="webdev-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>
                  Request received
                </h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>
                  Thanks, {name2}. Weâ€™ll look at {handle2} and get in touch on {phone2}.
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
      </section>

      {/* â”€â”€ FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #E5E5EA",
          padding: "clamp(48px, 6vw, 72px) 0 32px",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 clamp(16px, 3vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "40px",
          }}
        >
          {/* Logo & Tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGO/oneimpact-logo.webp"
              alt="One Impact"
              style={{ display: "block", width: "105px", height: "auto" }}
            />
            <span style={{ fontSize: "14px", color: "#6E6E73", lineHeight: 1.4 }}>
              Integrated marketing and growth partner for ambitious brands.
            </span>
          </div>

          {/* Services Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14.5px" }}>
            <span style={{ fontWeight: 650, color: "#000000", marginBottom: "4px" }}>Services</span>
            <a href="/seo" style={{ color: "#6E6E73", textDecoration: "none" }}>
              SEO services
            </a>
            <a href="/social-media-marketing" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Social media marketing
            </a>
            <a href="/influencer-marketing" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Influencer marketing
            </a>
            <a href="/branding-services" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Branding services
            </a>
            <a href="/web-development" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Website development
            </a>
          </div>

          {/* Company Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14.5px" }}>
            <span style={{ fontWeight: 650, color: "#000000", marginBottom: "4px" }}>Company</span>
            <a href="/about" style={{ color: "#6E6E73", textDecoration: "none" }}>
              About OneImpact
            </a>
            <a href="/#showreel" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Our work
            </a>
            <a href="/#team" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Team
            </a>
            <a href="/#contact" style={{ color: "#6E6E73", textDecoration: "none" }}>
              Contact
            </a>
          </div>

          {/* Contact Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14.5px" }}>
            <span style={{ fontWeight: 650, color: "#000000", marginBottom: "4px" }}>Contact</span>
            <span style={{ color: "#6E6E73" }}>Mumbai, Maharashtra</span>
            <a href="https://wa.me/918369018104" target="_blank" rel="noopener noreferrer" style={{ color: "#6E6E73", textDecoration: "none" }}>
              +91 83690 18104
            </a>
            <a href="mailto:connect@oneimpact.in" style={{ color: "#6E6E73", textDecoration: "none" }}>
              connect@oneimpact.in
            </a>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1360px",
            margin: "40px auto 0",
            padding: "24px clamp(16px, 3vw, 32px) 0",
            borderTop: "1px solid #E5E5EA",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
            color: "#8E8E93",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span>Â© 2026 OneImpact. All rights reserved.</span>
          <span>Mumbai Â· Bengaluru Â· Delhi NCR</span>
        </div>
      </footer>

      {/* â”€â”€ MOBILE STICKY BOTTOM BAR */}
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
