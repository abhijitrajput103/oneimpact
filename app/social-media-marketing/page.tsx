"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";

const NOTICES = [
  "Get a social media audit for your brand. Fill the form and our team will get back to you.",
  "AI-driven insights for smarter social media campaigns.",
  "Instagram, Facebook, LinkedIn, YouTube, X and Pinterest, planned for how each platform works.",
  "Meaningful metrics over vanity numbers. No shortcuts, no fluff.",
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
  { head: "Platform-first", text: "Strategies built for how each platform actually works", d: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5", chip: "#FFE7B8" },
  { head: "Scroll-stopping", text: "Content that stops the scroll and gets your brand seen", d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", chip: "#D6E5FF" },
  { head: "Real metrics", text: "Meaningful metrics over vanity numbers", d: "M4 20V10M10 20V4M16 20v-7M22 20H2", chip: "#FFE7B8" },
  { head: "Trend-ready", text: "Timely trend integration that keeps your brand agile", d: "M13 3L5 14h6l-1 7 8-11h-6z", chip: "#D6E5FF" },
  { head: "Clear reports", text: "Simple, detailed reports on what's working", d: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6", chip: "#FFE7B8" },
  { head: "Made for you", text: "A plan built from scratch for your audience and voice", d: "M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4", chip: "#D6E5FF" },
  { head: "Community", text: "Real conversations that build a loyal community", d: "M4 5h16v11H9l-5 4z", chip: "#FFE7B8" },
  { head: "Organic + paid", text: "The right balance of organic content and paid campaigns", d: "M3 10v4h4l6 4V6L7 10H3zM17 8a5 5 0 0 1 0 8", chip: "#D6E5FF" },
  { head: "Long-term", text: "Long-term partnerships, not one-off campaigns", d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z", chip: "#FFE7B8" },
];

const QUOTES = [
  { text: "They explained the plan for each platform in plain language, and the monthly reports made sense to everyone on our team.", role: "Marketing Head, fashion brand" },
  { text: "Our content finally sounds like us, and the comments and messages we get are from people who actually want to buy.", role: "Founder, café" },
  { text: "Clear process, honest updates and a team that replies fast. Social media no longer feels like guesswork.", role: "Director, interior design studio" },
];

const HELPS_CARDS = [
  { t: "Content strategies in your brand's voice", a: "Social media marketing companies curate content strategies that speak your brand's voice and goals, so your content connects with the right audience.", d: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4", chip: "#FFBA39" },
  { t: "Consistency and engagement on your socials", a: "Consistent engagement activity keeps your brand relevant to its audience.", d: "M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5", chip: "#7BAAFF" },
  { t: "Performance tracking via paid tools", a: "With specific data, insights and learnings, you make smarter decisions by seeing what's working and what needs more improvement.", d: "M4 20V10M10 20V4M16 20v-7M22 20H2", chip: "#FFBA39" },
  { t: "Managed online communities", a: "Gone are the days when posting about your business was enough. Social media fosters real interactions, and an open line of communication builds trust and loyalty.", d: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6", chip: "#7BAAFF" },
  { t: "Paid campaigns, set up and managed", a: "By targeting the right audience at the right time, social media marketing companies improve ROI efficiently, with continuous optimization to keep improving results.", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", chip: "#FFBA39" },
  { t: "A creative approach", a: "With multiple ideas and expert visualizers, social media agencies bring creative consistency across visual and written content that reinforces brand identity.", d: "M12 3a9 9 0 1 0 0 18c1 0 1.6-.8 1.3-1.7-.5-1.3.4-2.3 1.7-2.3H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10zM8 12h.01M10 7.5h.01M15 7.5h.01", chip: "#7BAAFF" },
];

const BUT_WHY_CARDS = [
  { t: "Brands of every size", a: "We work with startups, small businesses and established brands.", chip: "#FFBA39" },
  { t: "Platform-specific expertise", a: "From the Instagram algorithm to LinkedIn's thought-provoking content, we understand which platform works best for your business.", chip: "#7BAAFF" },
  { t: "Real-time industry insights", a: "We stay ahead of trends and algorithm changes, so your brand keeps up with them.", chip: "#FFBA39" },
  { t: "Data-driven campaigns", a: "Every post, reel and story is backed by analytics, so decisions are informed by data, not impulse.", chip: "#7BAAFF" },
  { t: "Creativity that converts", a: "We blend marketing strategy with storytelling to stop the doom-scroll and make your target group see your brand.", chip: "#FFBA39" },
  { t: "Transparent reporting", a: "Detailed, simplified reports show what's working, and we shape your strategy around them.", chip: "#7BAAFF" },
  { t: "Cross-industry experience", a: "Our team comes from diverse industries and brings fresh perspectives to every brand we work with.", chip: "#FFBA39" },
  { t: "Relationship-first approach", a: "Your brand isn't just another account for us, it's a story we're excited to tell.", chip: "#7BAAFF" },
];

const SVC_GROUPS = [
  {
    label: "Organic social media",
    items: [
      { t: "Social media strategy development", a: "We help you build a clear roadmap, catering to your goals, audience and industry. A well-researched strategy sets the foundation for consistent and impactful brand communication.", dot: "#FFBA39" },
      { t: "Community management services", a: "Building a community that's loyal to your brand is the need of the hour for businesses. We engage with your audience and hear back from them, which builds trust and long-term relationships.", dot: "#7BAAFF" },
      { t: "Content creation services", a: "Content covers everything from graphics to captions, tailored to each platform. Our content is designed to reflect your brand voice while driving engagement.", dot: "#FFBA39" },
      { t: "Social media audits", a: "With regular audits of your social presence, we assess your current content and performance metrics. These audits help us understand the gaps and opportunities for growth.", dot: "#7BAAFF" },
      { t: "Influencer marketing services", a: "Influencer marketing is one of the proven ways to connect with your audience and get conversions. We connect your business with creators who can promote your brand, enabling authentic outreach and boosting visibility.", dot: "#FFBA39" },
      { t: "Reputation management services", a: "Spotted a hate comment or a complaint about your business? We've got your back. We closely monitor mentions, reviews and public sentiment to stay on top of customer satisfaction and keep your brand image positive.", dot: "#7BAAFF" },
    ],
  },
  {
    label: "Platform-based",
    items: [
      { t: "Facebook and Instagram marketing", a: "With content strategy, paid ad campaigns and audience targeting, we get the right balance between paid and organic social media marketing, helping your business reach and engage its target customers.", dot: "#FFBA39" },
      { t: "LinkedIn marketing services", a: "LinkedIn is the place to connect with business leaders and the right talent, and it positions your brand as a thought leader. Our curated LinkedIn strategy focuses on professional storytelling and B2B engagement.", dot: "#7BAAFF" },
      { t: "YouTube marketing services", a: "YouTube is one of the biggest platforms for video content. We handle content creation, scripting, YouTube SEO and channel growth strategies that support long-form storytelling and higher engagement.", dot: "#FFBA39" },
      { t: "X (Twitter) management services", a: "On X, we handle timely updates, trend participation and audience interactions. It's ideal for quick brand communication and builds a strong community connection.", dot: "#7BAAFF" },
      { t: "Pinterest marketing services", a: "Pinterest is all about aesthetic images. Our Pinterest marketing centres on visual discovery and product promotion, with scroll-stopping pins that inspire action.", dot: "#FFBA39" },
    ],
  },
];

const WHY2_POINTS = [
  { t: "Content people want to engage with", a: "We turn your brand's voice into content people want to engage with." },
  { t: "Creative instinct, platform insight", a: "Our team blends creative instinct with platform-specific insights." },
  { t: "Meaningful metrics", a: "We prioritize meaningful metrics over vanity numbers." },
  { t: "Agile with trends", a: "Your brand stays agile with timely trend integration." },
];

const OFFER_TOPICS: { label: string; intro?: string; qs: { q: string; a: string }[] }[] = [
  {
    label: "Why social media matters",
    intro: "Businesses today need a strong digital presence to crunch those numbers, increase sales and build a strong online community for their brand. Beyond this, robust social media marketing builds relationships and drives visibility. These questions show how social media marketing makes a real difference.",
    qs: [
      { q: "How can social media marketing improve brand visibility for a business?", a: "Social media marketing is all about boosting brand visibility by connecting businesses with their target audiences. Through consistent brand posts, engagement buckets and strategic messaging, your business can grab attention and stay top of mind with your target group. Social networking platforms offer reach and allow brands to appear in front of millions of potential customers. The more people see your business online, the more familiar they become with it, which builds credibility." },
      { q: "Why is engaging content important for social media marketing success?", a: "Creating engaging content that sparks conversation and audience participation is at the heart of successful social media marketing. Content that adds value, educates or entertains performs well, persuading users to interact with your brand. When the audience engages with your post by liking, sharing or commenting, it boosts the overall organic reach of your social handles.\nThe internet is now almost everywhere, and with a cluttered feed where everyone is posting something, attention spans are getting shorter. A well-planned content strategy can help your business cut through the noise and build lasting relationships with your community." },
      { q: "How do targeted ads on social media drive more business growth?", a: "Social media marketing and paid ads give advertisers advanced targeting options, so businesses can show ads specifically to potential customers. Unlike traditional media, online paid campaigns give advertisers an upper hand: they can see the numbers, tweak campaigns as per the data, and see real results through KPIs like reach, impressions and conversions.\nThis ensures the ads are delivered to the audience most likely to convert. Online ads also help bring down overall marketing cost, as you control the budget and move spend to what performs, optimizing your marketing budget." },
      { q: "What role does social media consultation play in a successful strategy?", a: "Social media consultants play a pivotal role in making or breaking your online marketing strategy. They help identify what's working, what's not, and how to align your online presence with your broader business goals. At OneImpact, social media consultation goes beyond surface-level suggestions. We look at your current positioning, brand message and industry trends to give you a robust plan that works.\nWe pinpoint the exact problem and give you a plan of action that can take your business to new heights online.\nWhether you're just getting started with social media marketing or have been in the game for a long time, a professional third point of view always brings clarity and direction." },
      { q: "How can social media listening benefit my business?", a: "Social media marketing is not just about running ads or posting. It is a space where you can build a community of loyal consumers, and to do that, you need to listen to what your consumers have to say. Social media listening tools help you monitor the conversation around your business and industry. This gives your business an idea of how your target audience perceives your brand and how you can cater to their needs.\nAlso known as online reputation management, this helps you respond thoughtfully, building trust and credibility by tweaking strategies as and when needed." },
      { q: "Why is consistency in posting important for social media success?", a: "As the saying goes, consistency is the key to success. By posting regularly, you show up in front of your audience, keep them engaged and regularly remind them about your business, which keeps your brand relevant.\nIt also tells the platform's algorithm that you're consistent, which boosts your organic visibility." },
      { q: "How can influencer partnerships benefit my social media marketing efforts?", a: "Influencer collaboration is all about partnering with the right creators who can promote your brand, boosting visibility and credibility. With their engaging content, loyal followers and storytelling, you can capture your target market by delivering your brand message in a more authentic and relatable way." },
      { q: "What impact do visuals have on social media marketing?", a: "Images and graphics are what get noticed first on social media. Visually driven platforms like Instagram and Pinterest push images and videos in their algorithms, making visual storytelling a powerful tool for engagement.\nContent with aesthetic appeal conveys brand personality, evokes emotions and drives users to take action.\nThink of yourself as a consumer: you'll click on a post only if it catches your attention. A clean, easy-to-understand design helps your brand stand out from the clutter and adds value for its viewers." },
      { q: "How can social media analytics help optimize performance?", a: "Unlike traditional media, social media marketing gives real-time data and KPIs, helping businesses understand what's working and what's not. Metrics like reach, cost per result, engagement and follower growth help you refine your approach.\nMany tools show your top-performing content and the best times to post, making all your marketing efforts more impactful." },
      { q: "Why is community management important for business growth on social media?", a: "A loyal community supporting your business acts like an unpaid spokesperson. Brands are not just supposed to reply to their community members' comments or DMs. It's about building a strong relationship with them, which keeps them happy and satisfied.\nBrands can achieve this by adding value with their content, acknowledging and solving customer grievances, having meaningful interactions, and fostering a sense of care and loyalty." },
      { q: "How does social media marketing help businesses generate leads?", a: "Online marketing channels like Meta Business Suite and Google Ads play a crucial role in generating leads online. With advanced targeting options, these platforms let advertisers show ads only to their target group, who can turn into paying customers. These ads redirect users to landing pages or lead forms that build data for businesses, which can be used efficiently for remarketing." },
      { q: "How does social media marketing improve customer retention?", a: "Retaining an existing customer costs less than getting a new one. With social media, you can retain customers with exclusive discounts, value-adding content and personalized communication. Many social media marketing tools let businesses run remarketing ads, which remind your target audience about your business and boost conversions." },
      { q: "What is the role of hashtags in social media marketing?", a: "Hashtags categorize your content, making it discoverable to a wider audience. They're mostly used on platforms like Instagram and X (formerly Twitter), where users often search using hashtags. Adding relevant and trending hashtags to your posts enhances visibility and engagement. As part of your social media marketing plan, a well-curated hashtag strategy can help elevate your reach organically." },
      { q: "How do social media platforms influence customer decision-making?", a: "Your social media handles are your biggest salesperson. People tend to check a brand's social handles before making a purchase. With reviews, recommendations and a dash of influencer marketing, your brand's social media heavily influences your target audience's purchase decision. Potential customers carefully check out other people's experiences with your brand and make up their minds accordingly.\nWith regular hygiene checks and an active presence, your social media can shape a positive perception in your target audience's mind." },
      { q: "Why is a customized social media strategy essential for growth?", a: "Businesses are unique, and a one-size-fits-all approach won't get you the results you want. What works for one industry may not work for your business, and that's okay. That's why businesses need a customized strategy that caters to their requirements. It ensures your marketing communication resonates with your target group, matches your brand's tone and delivers results. At OneImpact, we believe a customized approach is key to long-term growth and impact." },
    ],
  },
  {
    label: "Brand recognition",
    qs: [
      { q: "Why is having a consistent brand voice important on social media?", a: "A consistent brand voice builds credibility and connects your target audience with your business on a deeper level. It keeps your messaging consistent across platforms, increases recognition and fosters trust. With a well-researched plan and A/B testing, your business can create a unique brand tone that reflects your values and caters to your audience, converting them into paying customers." },
      { q: "Why is video content effective in social media marketing?", a: "Video content grabs more attention than a static post and is easy for viewers to consume. In this fast-paced world, where attention spans are already low, it's more convenient to watch bite-sized content than to read a long-form article.\nPlatforms like Instagram and YouTube heavily promote video content, which boosts engagement." },
      { q: "Why should businesses prioritize social media customer support?", a: "There are three main reasons to prioritize social media customer support:\n• Faster response times\n• Public visibility\n• Customer convenience\nUsing social media for customer support builds customer satisfaction and trust, and shows that the brand is accessible and responsive. Prompt action on social media can stop complaints from escalating publicly. Simply put, it's an easy way to maintain a good reputation and keep customers happy." },
    ],
  },
  {
    label: "Strategy & consultation",
    qs: [
      { q: "What does social media consultation involve?", a: "In a social media consultation call, you can expect an evaluation of your brand's current social media presence, engagement rate and overall social media performance. It helps you focus on clear goals and suggests the ideal platforms for your digital marketing efforts. Consultants guide you on content planning, brand tone and best practices curated for your brand. Professional guidance ensures your social media marketing efforts are aligned with your business objectives." },
      { q: "How can competitor analysis improve your social media strategy?", a: "Monitoring your competitors helps you stay ahead of the curve. A well-structured competitor analysis helps businesses identify and use trends, understand target audience preferences, and spot mistakes that can be corrected. It also refines your marketing approach by leading to more impactful content, which grows your brand's social presence." },
      { q: "What is the role of high-engagement content in social media marketing?", a: "High-engagement content adds value for users, encouraging them to like, comment, share and save it. Social media algorithms count all of these as engagement, which amplifies your social handles and reaches more people. Highly engaging content also boosts brand loyalty and keeps your target audience involved with your handles. Formats like reels, carousels and infographics tend to drive high engagement." },
      { q: "How do targeted social media campaigns work?", a: "Targeted campaigns show your ads to people who are interested in products or services like yours, and convert them into paying customers. They're based on factors like age, location, interests and behavior, which ensures your ads reach the right people and improves conversions.\nThese ads can be tweaked at any time during the campaign to optimize the ad budget and get the most out of it." },
      { q: "What is a customized social media strategy?", a: "A customized social media strategy is an online marketing plan designed around your brand's goals. It outlines what type of content to create, which platforms to focus on, and how often to post to achieve measurable results. A tailored strategy ensures consistency and purpose behind every post, helping brands cut through the noise and connect with their audience more effectively." },
      { q: "How can social media consultation help improve my brand's online presence?", a: "Social media consultation provides expert guidance on brand positioning, improving engagement and refining content strategies across platforms. Consultants assess current efforts, identify gaps and recommend data-backed improvements to boost visibility and performance. For businesses investing in social media marketing, this can lead to stronger branding, better content alignment and more meaningful audience interactions." },
      { q: "Why is social media consultation important for small businesses?", a: "For small businesses, resources are often limited, so it's critical to get the most out of every effort. Social media consultation offers a cost-effective way to gain expert insights without trial-and-error spending. It helps small brands build a solid social media marketing foundation, make smarter platform choices and craft messages that resonate with their audience, driving growth while keeping efforts efficient and strategic." },
    ],
  },
  {
    label: "Content creation",
    qs: [
      { q: "What is the importance of quality content in social media marketing?", a: "Content that adds value for your viewers boosts your brand's value and overall growth. It builds trust and resonates with your target group, turning them into loyal followers. It also increases the likelihood of engagement, sharing and return visits." },
      { q: "How does visual content enhance social media marketing?", a: "Visuals grab a viewer's attention, making your message more appealing. They turn complex ideas into simple designs or scripts that are easy to understand. Visuals perform exceptionally well on platforms that prioritize graphic content, such as Instagram. In social media marketing, compelling visuals significantly improve engagement and reach." },
      { q: "How can you optimize your social media posts for better reach?", a: "Post optimization includes basic hygiene checks like using relevant hashtags, choosing the right posting times and writing compelling captions. Beyond this, always post content tailored to each platform. What works on Instagram might not work on Facebook, because the audiences and their interests differ. Keeping a check on the metrics and refining strategies as needed makes your handle more discoverable and impactful." },
    ],
  },
  {
    label: "Ads and campaigns",
    qs: [
      { q: "How do paid social media ads help grow your business?", a: "Paid ads on social media aim to reach a larger, more focused audience to increase visibility and boost ROI. These ads target users who are actively looking for a business like yours, generating leads that can turn into paying customers." },
      { q: "What is remarketing in social media advertising?", a: "With remarketing ads, businesses target users who have interacted with the brand but haven't converted yet. Remarketing increases conversions by reminding users about the business. It is one of the proven ways to re-engage potential customers." },
      { q: "How do social media ad analytics improve performance?", a: "Analytics tools give advertisers in-depth insights into ad performance and key performance indicators like click-through rates, engagement levels and conversion metrics. Advertisers and marketers use these metrics to see what's working and tweak their strategies accordingly." },
    ],
  },
  {
    label: "Community management",
    qs: [
      { q: "How does community management impact brand loyalty?", a: "Community management drives direct, meaningful interactions between a brand and its audience, building trust and a sense of belonging. Responding to comments promptly, addressing customer concerns and encouraging conversations within the community builds credibility with users and your target group. It also fosters emotional connections, turning casual followers into loyal advocates. Effective community management improves customer satisfaction and strengthens long-term brand loyalty through consistent, authentic communication." },
      { q: "What is the role of social listening in community management?", a: "Social listening plays a pivotal role in community management by helping brands monitor conversations, trends and audience sentiment across platforms. It lets you understand what your audience cares about, address concerns in real time and adapt your messaging accordingly. By actively listening, brands build stronger relationships, foster trust and respond more effectively, making social listening an essential part of proactive community engagement." },
      { q: "How can you foster authentic engagement on social media?", a: "Foster authentic engagement by creating relatable, value-driven content that resonates with your audience's interests and needs. Businesses and marketers can spark conversations by asking questions, responding to comments and sharing user-generated content. Consistency in tone and transparency build trust over time, which brings engagement." },
    ],
  },
  {
    label: "Analytics and reporting",
    qs: [
      { q: "How do social media analytics guide strategy adjustments?", a: "Analytics tools like Meta Business Suite, Google Analytics 4, Semrush, Ubersuggest and Rival IQ dive deep into audience behavior, content performance and engagement trends. Regularly analyzing and optimizing KPIs like reach, clicks, shares and comments helps advertisers identify what resonates most with their audience and refine their marketing strategies. In short, analytics tools play a crucial role in making data-driven decisions." },
      { q: "What is the role of conversion tracking in social media marketing?", a: "Conversion tracking measures the direct impact of social media marketing campaigns by linking user actions, like sign-ups, purchases or downloads, to specific posts or ads. This shows marketers which channels and creatives are driving meaningful results, rather than just vanity metrics. With this information, businesses can allocate their budget more effectively and prioritise high-performing strategies, so every move is focused on measurable objectives." },
      { q: "How do custom reports help refine social media strategies?", a: "Custom reports give a clear view of performance by focusing on the metrics that matter most to a specific campaign or objective. They help identify patterns over time, compare platform performance and highlight areas for improvement. With actionable insights at hand, marketers can make informed decisions, test new tactics and optimise strategies continuously. At OneImpact, custom reporting ensures every social media marketing effort remains purposeful and performance-driven." },
    ],
  },
  {
    label: "Influencer marketing",
    qs: [
      { q: "How can influencer partnerships boost social media reach?", a: "Influencers have a large, loyal audience that actively engages with them, and brands can use this to boost brand awareness. When influencers share branded content, it reaches users organically, increasing the likelihood of interaction and sharing. This extended visibility helps brands connect with new audiences in a more authentic way and can significantly amplify reach and campaign performance." },
      { q: "What is the role of micro-influencers in social media marketing?", a: "Businesses can now connect with micro-influencers to reach a new audience base and boost engagement. Micro-influencers showcase products to a highly targeted audience, often with better interaction rates and more authentic conversations.\nCollaborating with micro-influencers builds trust and loyalty in focused audience segments, leading to meaningful engagement and long-term customer relationships." },
    ],
  },
  {
    label: "Trends and innovation",
    qs: [
      { q: "How can staying on top of social media trends benefit my business?", a: "Keeping up with social media trends keeps your brand relevant and in tune with current audience preferences. Trends often reflect shifts in content formats, user behaviour and platform features, and these insights can shape more engaging campaigns. Leveraging timely trends can boost visibility and help you connect with users more authentically, keeping your strategy agile and audience-focused." },
      { q: "What role do new social media platforms play in marketing strategies?", a: "New social media platforms offer fresh opportunities to reach untapped or younger audiences and experiment with different content formats. Adding them to your social media marketing mix can diversify your reach and reduce reliance on a single channel. Each platform brings its own features, allowing brands to tailor messages more effectively. At OneImpact, we evaluate platform potential based on audience fit and business goals." },
      { q: "How do social media algorithm changes impact your strategy?", a: "Algorithm changes can significantly influence how your content is distributed and who sees it. These shifts often prioritise certain content types or user behaviours, requiring brands to adjust posting strategies, content formats or engagement tactics. Staying informed about algorithm updates helps maintain visibility and consistent performance, and adapting quickly ensures your content keeps reaching the right audience." },
      { q: "What are the latest trends in social media marketing?", a: "One of the most notable trends in social media marketing is the rise of short-form video, with YouTube Shorts and Instagram Reels leading the way. Brands are focusing on authenticity, using behind-the-scenes content and real-time updates to build stronger connections. There's also a growing emphasis on community engagement, where interaction takes priority over promotion. Interactive content like polls, quizzes and live Q&A sessions is helping brands boost engagement and visibility." },
      { q: "How can businesses leverage AI in social media marketing?", a: "AI can help businesses streamline their social media marketing by automating tasks like content scheduling, social listening and customer service. AI tools can also analyse audience behaviour to suggest the best times to post and recommend content types likely to perform well. AI-powered chatbots give quick responses to common queries, improving user experience. At OneImpact, we integrate AI-driven insights into our strategies for smarter, more effective campaigns." },
      { q: "What is social commerce, and how can it benefit my business?", a: "Social commerce is the buying and selling of products directly on social media platforms, without redirecting users to an external website. It simplifies the shopping journey, making it easier for users to discover and buy products within the same app. For businesses, this means a shorter sales funnel and more opportunities for impulse purchases, turning engagement into direct revenue by meeting customers where they already are." },
    ],
  },
  {
    label: "Curation and scheduling",
    qs: [
      { q: "How does content curation enhance engagement?", a: "Content curation means selecting and sharing valuable third-party content that resonates with your audience, adding variety and credibility to your feed. It positions your brand as a trusted source of information, not just self-promotional content. It encourages more interaction by sparking conversations and offering fresh perspectives, and complements your original posts to keep your audience engaged." },
      { q: "What is the importance of content scheduling in social media marketing?", a: "Content scheduling ensures your posts go out at the times your audience is most active, which can significantly improve visibility and engagement. It allows better consistency and planning, reducing last-minute rushes and content gaps. A clear schedule maintains your brand voice, supports campaign goals and keeps messaging aligned across platforms. With the right tools, scheduling also makes performance tracking and future adjustments easier." },
      { q: "How can you repurpose content for social media?", a: "Repurposing means adapting existing material, like blog posts, videos or webinars, into new formats for different platforms. For example, a blog can become a series of bite-sized Instagram posts or a LinkedIn carousel. This increases content lifespan, boosts efficiency, and ensures your message reaches different audience segments without constantly creating new material." },
    ],
  },
  {
    label: "Campaign management",
    qs: [
      { q: "What is a social media campaign, and why is it important?", a: "A social media campaign is a marketing activity on one or more platforms aimed at specific business goals. Whether it's raising awareness, generating leads or increasing engagement, a well-structured campaign is a vital step to achieving results. It goes beyond day-to-day posting and uses targeted content, paid promotions and audience engagement strategies. Campaigns help brands focus their efforts, track progress and reach defined objectives." },
      { q: "How does a comprehensive social media campaign increase brand recognition?", a: "A well-executed campaign delivers consistent messaging across multiple channels, helping audiences associate your brand with a specific message, product or value. Through creative visuals, strategic content and timely engagement, your brand becomes more visible and memorable. Repeated exposure is key to building trust and recognition over time." },
      { q: "What metrics are essential in tracking the success of a social media campaign?", a: "Metrics like reach, engagement rate, click-through rate, conversions and follower growth are crucial for evaluating campaign performance. They show how well your content resonates and whether your goals are being met. Consistent tracking reveals what's working and what needs adjusting, and data-driven reporting supports better decisions for future campaigns." },
    ],
  },
  {
    label: "Reputation and awareness",
    qs: [
      { q: "How does social media reputation management impact my business?", a: "A strong online reputation builds trust with existing and potential customers. Through social media marketing, reputation management helps businesses address feedback, engage with their audience and respond to issues in real time. How your brand is perceived online directly influences buying decisions, customer loyalty and long-term credibility. At OneImpact, we use monitoring tools to help businesses stay ahead of the conversations that matter." },
      { q: "What strategies help increase brand awareness on social media?", a: "Consistent content, clear messaging and community engagement are key to building brand awareness through social media marketing. Running targeted ad campaigns, collaborating with influencers and actively participating in industry conversations can significantly extend your brand's reach. Visual storytelling, including video and graphics, enhances recognition and recall, and data-driven content planning ensures your message reaches the right audience at the right time." },
      { q: "How does user-generated content (UGC) benefit brand awareness?", a: "User-generated content shows real customers interacting with your product or service, building trust and authenticity. When users share their own experiences, it amplifies your brand's visibility without extra promotional effort. UGC often performs better than branded content because it feels relatable and organic. Encouraging and resharing UGC strengthens your online presence and deepens audience engagement." },
    ],
  },
  {
    label: "Crisis management",
    qs: [
      { q: "How can social media marketing help manage a crisis?", a: "Social media marketing lets brands respond to crises in real time, offering transparency and reassurance when it matters most. By addressing concerns quickly and professionally on platforms where audiences are already active, brands can control the narrative and reduce misinformation. Timely posts, consistent messaging and listening tools help manage public sentiment and build trust, even in uncertain moments." },
      { q: "What role does proactive communication play in social media crisis management?", a: "Proactive communication sets the tone before assumptions or misinformation take hold. With social media marketing, brands can issue timely updates, acknowledge issues and show accountability in a public yet human way. Clear, proactive messaging demonstrates responsibility, keeps your audience informed and can significantly shape how a brand is perceived during and after a crisis." },
      { q: "How can you turn a social media crisis into an opportunity?", a: "Handled well, a crisis can be a chance to reinforce brand values and build deeper connections with your audience. Engaging thoughtfully, responding respectfully and showing genuine care can enhance your brand's credibility. Recovery posts, follow-ups and community engagement can leave a lasting positive impression, turning a setback into long-term brand loyalty." },
    ],
  },
  {
    label: "Long-term growth",
    qs: [
      { q: "What is the importance of a long-term social media marketing strategy?", a: "A long-term strategy keeps your brand consistently visible and engaging with your audience over time. Instead of focusing on short-term spikes, it builds sustainable growth, engagement and loyalty. A good social media marketing partner helps you design a long-term strategy built for lasting results." },
      { q: "How does social media marketing align with overall business objectives?", a: "Social media marketing should align with your broader business objectives, whether that's driving sales, increasing brand awareness or fostering customer loyalty. A good social media marketing agency ensures every effort contributes to your company's overall vision, integrating social media goals into the larger marketing strategy." },
      { q: "Why is community growth essential for long-term success?", a: "Building and nurturing a dedicated community is key to long-term success. A committed community not only supports your brand but also advocates for it. Good social media marketing services focus on cultivating relationships, creating valuable experiences and growing an engaged community around your brand." },
      { q: "What does long-term social media management entail?", a: "Long-term social media management involves more than posting regularly. It includes building a consistent brand voice, maintaining engagement with your audience, adapting to platform changes and aligning content with evolving business goals. Over time, it also requires strategic planning, community growth and data-driven adjustments. At OneImpact, we focus on a sustainable, adaptable approach to long-term social media marketing." },
      { q: "How can you scale your social media marketing efforts as your business grows?", a: "Scaling your social media marketing means expanding your content strategy, exploring new platforms and increasing ad spend where it makes sense. It also means using analytics to understand what works and replicating successful tactics across campaigns and channels. Team collaboration, automation tools and performance tracking become essential to manage growth efficiently, so your brand keeps connecting with its audience as demands increase." },
      { q: "Why is ongoing optimization critical for social media success?", a: "Ongoing optimization keeps your social media marketing strategy effective in a fast-changing digital landscape. Regularly analysing performance data shows what content resonates, which posting times work best and where improvements can be made. With consistent optimisation, brands are more likely to see long-term value and sustainable audience growth." },
    ],
  },
  {
    label: "Performance review",
    qs: [
      { q: "How do you evaluate the success of a social media campaign?", a: "Evaluating a campaign means tracking key performance indicators such as engagement rate, reach, impressions, conversions and follower growth. These metrics give a clear picture of how well the content resonated with the target audience. At OneImpact, we use structured reporting to compare campaign outcomes against predefined objectives." },
      { q: "What is the importance of A/B testing in social media marketing?", a: "A/B testing lets brands test different content elements, like headlines, images or calls to action, and see what performs better. Comparing variations shows marketers what the audience prefers so they can refine content accordingly. It's a data-backed way to optimise post performance and ad effectiveness." },
      { q: "How do you use data-driven insights to enhance future campaigns?", a: "Data-driven insights show what worked and what didn't in previous campaigns. By analysing user behaviour, content performance and timing, we refine strategies for upcoming efforts. On social media, this means delivering more relevant, engaging content that matches audience expectations." },
    ],
  },
  {
    label: "Social media by industry",
    qs: [
      { q: "How does social media marketing differ for various industries?", a: "Social media marketing varies with the nature of the business and audience expectations. A fashion brand might focus on highly visual content and influencer collaborations, while a B2B tech company may use thought leadership and LinkedIn campaigns to engage decision-makers. Each industry needs its own messaging, platform choices and content formats, and understanding these differences leads to more relevant, impactful campaigns." },
      { q: "Why is social media marketing crucial for e-commerce businesses?", a: "For e-commerce, social media marketing plays a vital role in driving traffic, increasing product visibility and encouraging direct purchases. Platforms like Instagram and Facebook offer features like shoppable posts and retargeting ads that shorten the path from discovery to checkout. They also give you a space to showcase customer reviews, product demos and engaging content that influences buying decisions." },
      { q: "How can social media marketing help service-based businesses grow?", a: "Service-based businesses benefit from social media marketing by building credibility, demonstrating expertise and nurturing client relationships. Educational content, testimonials and behind-the-scenes insights showcase the value they offer. Engaging with clients online fosters trust and keeps the brand top of mind, and over time this consistent presence can lead to more referrals and better client retention." },
    ],
  },
  {
    label: "Customer journey",
    qs: [
      { q: "How can social media influence the customer journey?", a: "Social media plays a key role at every stage of the customer journey. Through targeted content, timely interactions and consistent messaging, brands can guide potential customers smoothly through each phase. Platforms like Instagram, Facebook and LinkedIn let brands stay visible, answer questions and reinforce value at the right moments, nurturing trust and building stronger connections over time." },
      { q: "What is the role of social proof in the customer journey?", a: "Social proof, such as reviews, testimonials and user-generated content, is a powerful influence at the decision-making stage. When potential customers see others sharing positive experiences, it builds credibility and reduces hesitation. Showcasing authentic feedback from real users reinforces trust, encourages new users to move forward, and strengthens a brand's reputation for transparency and customer satisfaction." },
      { q: "How can social media be used to enhance customer loyalty?", a: "Beyond conversions, social media marketing plays an important role in maintaining customer relationships. Engaging customers with thoughtful content, responding to their queries and rewarding loyalty with exclusive offers or features encourages repeat interactions. Active social channels foster community and keep your brand top of mind. At OneImpact, we help brands use social insights and engagement strategies to retain customers and turn them into long-term advocates." },
    ],
  },
  {
    label: "Influencer and affiliate",
    qs: [
      { q: "How does influencer marketing enhance brand trust?", a: "Influencer marketing builds brand trust by drawing on the credibility and authenticity of people who already have the attention and loyalty of their audience. When an influencer endorses a product, their followers are more likely to see it as trustworthy and relevant. This peer-to-peer style of recommendation feels more organic than traditional advertising and is especially effective at improving brand perception and loyalty." },
      { q: "What are the benefits of affiliate marketing on social media?", a: "Affiliate marketing on social platforms offers brands a cost-effective way to reach targeted audiences and drive conversions. Affiliates promote your products or services in exchange for a commission, a performance-based model that encourages genuine promotion. As part of a broader social media marketing strategy, it can boost visibility and generate steady, trackable sales, and it scales easily across multiple creators and platforms." },
      { q: "How do you measure the success of influencer and affiliate marketing?", a: "Success is measured through key performance indicators such as engagement rate, reach, conversions, click-through rate and return on investment (ROI). Tracking tools and campaign-specific links monitor performance in real time. At OneImpact, we analyse this data to optimise future efforts and ensure each campaign aligns with your overall social media marketing goals, with regular reporting for transparency and continuous improvement." },
    ],
  },
  {
    label: "Channel integration",
    qs: [
      { q: "Why is integrating social media with other marketing channels important?", a: "Integrating social media marketing with other channels ensures consistent messaging and a unified brand voice across every customer touchpoint. It lets brands reach their audience in multiple spaces, like email, websites and paid ads, while reinforcing key messages. This boosts brand recall, nurtures leads more effectively through the marketing funnel, and makes campaign performance easier to track and analyse." },
      { q: "How can social media be used to complement other marketing efforts?", a: "Social media marketing supports other marketing activities by amplifying content, promoting offers and engaging directly with audiences. For example, it can drive traffic to blog posts, support email campaigns or build buzz around product launches. It also offers real-time feedback and insights that can refine broader marketing strategies, adding value across the entire digital ecosystem." },
      { q: "What are cross-channel campaigns, and how do they work?", a: "Cross-channel campaigns use multiple platforms, like social media, email and paid ads, to deliver a unified message. Users receive consistent content across channels, which improves engagement and the chances of conversion. On social media, this might mean aligning ad messaging with organic posts and email content. By tracking user behaviour across platforms, brands can optimise their messaging and timing for better results." },
    ],
  },
];

const FAQ_GROUPS = [
  {
    label: "Business obstacles",
    qs: [
      { q: "Why isn't our brand getting enough visibility on social media?", a: "Lack of visibility on social platforms often comes down to inconsistent posting, unclear brand messaging or not targeting the right audience. Without a well-thought-out social media marketing strategy, your content can easily get lost in the noise. Algorithms also prioritize content that sparks engagement, so low interaction rates can limit reach. Reviewing your current approach and refining your content strategy can make a noticeable difference." },
      { q: "How can we increase our brand awareness on social media?", a: "Start by developing a consistent brand voice and posting schedule. Data-driven social media marketing tactics like targeted ads, influencer collaborations and platform-specific content help extend your reach. Engaging visuals and interactive content, like polls or reels, can also improve shareability. At OneImpact, we tailor strategies to your brand's goals and audience preferences." },
      { q: "Why are we not engaging with our target audience on social media?", a: "Low engagement often signals a disconnect between your content and your audience's interests. It may also mean you're not using the right platforms or content formats. Effective social media marketing involves active community management, listening to audience feedback and creating content that adds value. A strong understanding of your audience's needs and behaviors is key to increasing engagement." },
      { q: "How can we stand out from competitors on social media?", a: "Differentiation comes from a unique brand voice, creative storytelling and understanding what makes your audience tick. Leveraging trends without losing authenticity and investing in high-quality content both matter. Position your brand as a thought leader in your niche, and highlight your values and personality to set yourself apart." },
      { q: "Why is our social media not driving enough traffic to our website?", a: "If your social content lacks strong CTAs or optimized links, it may not be directing users effectively. Inconsistent branding and misaligned messaging can also break the user journey. A focused social media marketing plan gives each post a clear objective and encourages clicks. Optimizing landing pages and link placements is just as crucial as the content itself." },
      { q: "How can we improve our social media strategy to generate more leads?", a: "Start by identifying your target audience and tailoring content that speaks directly to their needs and interests. Use clear calls to action and lead magnets, and optimize the landing pages linked from your posts. Regularly analyze performance metrics to refine your approach. A focused, data-driven social media marketing plan can significantly boost lead generation." },
      { q: "How can we increase engagement and reduce bounce rates from social media?", a: "Engagement improves when content is interactive, visually appealing and adds value. To reduce bounce rates, make sure destination pages are mobile-friendly, fast-loading and aligned with your content's message. Consistency in tone and branding also helps retain attention. A well-executed social media marketing strategy keeps users engaged longer." },
      { q: "Why aren't our social media ads delivering good results?", a: "Poor targeting, irrelevant messaging or weak creatives are common reasons for underperforming ads. Revisit your audience settings, test multiple ad formats and use A/B testing to see what resonates. Make sure your offers are compelling and your visuals grab attention. Effective paid campaigns require regular optimization and testing." },
      { q: "How can we convert our social media followers into paying customers?", a: "Nurture followers by offering value through content, engaging in two-way conversations and showcasing real customer testimonials or success stories. Use retargeting ads and limited-time offers to create urgency, and direct followers to well-designed landing pages. Strategic social media marketing bridges the gap between engagement and sales." },
      { q: "Why are our social media marketing efforts not showing a strong ROI?", a: "It could be due to unclear goals, a lack of tracking, or a focus on vanity metrics over meaningful KPIs. Review your strategy so it aligns with business objectives, and use analytics to measure real outcomes. ROI improves when you focus on quality over quantity." },
      { q: "How can we improve our online community engagement?", a: "Create content that resonates with your audience's interests and values. Encourage two-way communication through polls, Q&As and user-generated content. Consistent interactions and timely responses also play a key role. A strategic approach to social media ensures you're not just broadcasting messages but building meaningful relationships." },
      { q: "Why is our social media content not driving enough traffic to our online store?", a: "Your content might be engaging but lack basics like a strong call to action or clear links to product pages. Align your social media marketing efforts with your sales funnel, guiding users from discovery to purchase. Analyzing performance metrics helps identify where users drop off. At OneImpact, we often see that refining targeting and content intent makes a big difference." },
      { q: "How can we increase conversions from our social media campaigns?", a: "Focus on optimizing landing pages and ensuring a seamless transition from ad to checkout. Personalized messaging and limited-time offers can also drive urgency. A data-backed social media marketing strategy that's continuously tested and tweaked improves conversion rates over time. Track each stage of the user journey to spot conversion gaps." },
      { q: "Why is our social media strategy not reaching its full potential?", a: "Your strategy might lack clarity in goals, audience targeting or content variety. Regular audits and competitor analysis can uncover missed opportunities. An adaptive social media marketing approach that evolves with trends and platform updates is key, and small adjustments in timing, format or messaging can bring big improvements." },
      { q: "Why aren't our social media posts generating enough organic reach?", a: "Declining organic reach is common because platform algorithms keep changing. To counter this, focus on high-quality, shareable content and engage consistently with followers. Use platform-specific features like Reels or Stories to improve visibility. Following social media marketing best practices can naturally boost organic performance over time." },
      { q: "How can we improve the performance of our social media campaigns for better results?", a: "Start by clearly defining your campaign goals and aligning them with your audience's interests. Regularly analyze metrics to identify what's working and what needs adjustment. Consistent branding, engaging content and platform-specific strategies also contribute to better outcomes." },
      { q: "Why aren't our social media efforts building long-term customer loyalty?", a: "Long-term loyalty requires more than posting regularly; it's about building genuine relationships. If your content lacks value or doesn't resonate emotionally, followers may not stay engaged. Focus on two-way communication, community building and rewarding loyal followers. A social media marketing approach that prioritizes customer experience can help improve retention." },
      { q: "How can we better utilize social media platforms to reach a larger audience?", a: "Use each platform's strengths. What works on Instagram might not work on LinkedIn or X (formerly Twitter). Work with platform algorithms by posting consistently, using trending formats and engaging with your audience. Paid promotions and collaborations can also extend your reach. A well-structured social media marketing plan ensures content gets seen by the right people." },
      { q: "Why aren't our influencer marketing campaigns driving results?", a: "Influencer success depends on relevance, authenticity and alignment with your brand. If you choose influencers on numbers alone, you might miss out on real engagement. Collaborate with influencers who share your values and connect with your target audience. Clear expectations and creative freedom also play a major role." },
      { q: "How can we enhance our social media presence with creative campaigns?", a: "Think beyond product promotion. Content formats like storytelling, challenges and user-generated content can drive interest. Creative visuals, interactive formats like polls or reels, and real-time engagement make a difference. Keep experimenting to see what resonates best. A fresh take on social media marketing helps brands stand out in a crowded space." },
    ],
  },
  {
    label: "Why OneImpact",
    qs: [
      { q: "How does OneImpact tailor social media strategies to maximize ROI?", a: "We start by understanding your business goals, target audience and industry landscape. Based on this, our team crafts data-driven, goal-oriented social media marketing strategies. Each campaign is continuously monitored and refined to improve performance and returns on investment." },
      { q: "How will OneImpact enhance my brand's online presence and customer interaction?", a: "Through consistent branding, engaging content and active community management, we help create a strong digital footprint. Our social media marketing approach focuses on building authentic connections and encouraging two-way communication to boost engagement. This fosters trust and loyalty among your audience." },
      { q: "How does OneImpact balance social media optimization and user experience to drive conversions?", a: "We blend visually appealing content with strategic placements and clear calls to action across platforms. Our team optimizes each post for relevance, timing and performance, creating a seamless, value-driven user experience that supports your business objectives." },
      { q: "What measurable results can I expect from OneImpact's conversion-focused social media marketing?", a: "We work towards higher engagement rates, more website traffic and more lead conversions. We provide clear performance reports that track KPIs tied directly to your goals." },
      { q: "How does OneImpact attract high-converting social media traffic?", a: "By using audience insights, trends and targeted content strategies, we attract users who are most likely to engage and convert. Our social media marketing campaigns focus on quality over quantity, so your brand reaches the right people at the right time." },
      { q: "How does OneImpact help my brand rank for the most relevant, high-converting social keywords?", a: "We conduct in-depth keyword research tailored to your niche, focusing on intent-driven and trending search terms. By integrating these keywords into your content and campaigns, we help boost visibility across platforms. Continuous monitoring lets us adapt to changing trends and stay relevant." },
      { q: "Why should I trust OneImpact to increase my brand's social media traffic and sales?", a: "We use data-backed strategies and real-time analytics to understand what drives engagement and conversions. Our team focuses on consistent growth without shortcuts or fluff. We believe in transparency, performance tracking and meaningful outcomes." },
      { q: "What sets OneImpact's social media marketing services apart?", a: "Our social media marketing approach is audience-first and results-oriented. We combine creativity with analytics to craft content that resonates and drives action. Every campaign is customized, so your brand voice stays authentic while meeting your goals." },
      { q: "How can OneImpact improve my brand's local social media presence?", a: "We optimize your profiles for local visibility and run geo-targeted social media marketing campaigns. Engaging with local trends, communities and events creates stronger connections with your nearby audience, which builds trust and drives local engagement." },
      { q: "What strategies does OneImpact use to convert social media traffic into paying customers?", a: "We blend compelling storytelling with strategic CTAs, landing pages and retargeting. Our social media marketing funnel is designed to guide users from discovery to decision, and we test and tweak campaigns regularly to maximize conversions." },
    ],
  },
];

export default function SmmLandingPage() {

  // State for What We Do / Why OneImpact highlight tabs
  const [whyTab, setWhyTab] = useState(0);

  // State for Service tabs (Organic vs Platform)
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
      className="smm-landing-root"
      style={{
        background: "#FFFFFF",
        color: "#000000",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI Variable Text', 'Segoe UI', system-ui, sans-serif",
        fontSize: "17px",
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style jsx global>{`
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
        .smm-landing-root a:not(header a):not(.bg-black) {
          color: #000000;
          transition: color 150ms ease;
        }
        .smm-landing-root a:not(header a):not(.bg-black):hover {
          color: #3a3a3c;
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
          background-color: #ffc75e !important;
        }
        .smm-landing-root :focus-visible {
          outline: 3px solid #7baaff;
          outline-offset: 3px;
        }
        .smm-landing-root .fd::placeholder {
          color: #8e8e93;
        }
        .smm-landing-root .fd:focus {
          outline: none;
          border-color: #ffba39 !important;
          box-shadow: 0 0 0 4px rgba(255, 186, 57, 0.3);
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
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(32px, 5vw, 80px);
          align-items: center;
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
          gap: 16px;
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
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI Variable Display",
            "Segoe UI", system-ui, sans-serif;
        }
      `}</style>

      {/* ── NAVBAR */}
      <Navbar />

      {/* ── HERO SECTION */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "#FFFFFF" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "40px", right: "6%", width: "380px", height: "380px", borderRadius: "50%", background: "#FFBA39", opacity: 0.55, filter: "blur(70px)" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "260px", right: "24%", width: "320px", height: "320px", borderRadius: "50%", background: "#7BAAFF", opacity: 0.55, filter: "blur(80px)" }} />

        <div className="hero-grid" style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "clamp(92px, 10vw, 120px) clamp(16px, 3vw, 32px) clamp(44px, 5.5vw, 68px)" }}>
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <span style={{ fontSize: "17px", fontWeight: 600, color: "#6E6E73", letterSpacing: "-0.01em" }}>
              Social media services by OneImpact
            </span>

            <h1 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)", lineHeight: 1.05, letterSpacing: "-0.04em", fontWeight: 700, maxWidth: "18ch" }}>
              Social Media Marketing That Stops the Scroll
            </h1>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", paddingTop: "4px" }}>
              <a className="press" href="https://wa.me/918369018104" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none", fontWeight: 600, fontSize: "17px", padding: "13px 22px", borderRadius: "999px", minHeight: "50px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.06)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /></svg>
                Chat on WhatsApp
              </a>
              <a href="#usps" style={{ color: "#000000", fontWeight: 600, fontSize: "17px", textDecoration: "none", padding: "13px 4px", minHeight: "50px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                Why OneImpact
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>

          {/* Hero Form Card */}
          <div id="audit" className="form-card" style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(30px) saturate(160%)", WebkitBackdropFilter: "blur(30px) saturate(160%)", borderRadius: "32px", padding: "clamp(24px, 3.2vw, 36px)", color: "#FFFFFF", boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 50px 100px -40px rgba(0,0,0,0.55), 0 20px 40px -24px rgba(0,0,0,0.35)" }}>
            {!sent1 ? (
              <form onSubmit={handleSubmit1} style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#FFBA39", letterSpacing: 0 }}>For your brand</span>
                  <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(1.6rem, 2.4vw, 2rem)", lineHeight: 1.12, letterSpacing: "-0.035em", fontWeight: 700 }}>Get your social media audit</h2>
                  <p style={{ fontSize: "15.5px", color: "#C7C7CC", letterSpacing: 0, margin: 0 }}>A real person from our team reviews your social media and gets back to you.</p>
                </div>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-name" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>Your name</label>
                  <input id="hero-name" className="fd" type="text" placeholder="First and last name" value={name1} onChange={(e) => setName1(e.target.value)} onBlur={() => setTouched1((t) => ({ ...t, name: true }))} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 16px", borderRadius: "14px", border: `1.5px solid ${showName1Err ? "#FF9F95" : "#3A3A3C"}`, background: "#1C1C1E", color: "#FFFFFF", width: "100%" }} />
                  {showName1Err && <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>Enter your name so we know who to reply to</span>}
                </div>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>Phone or WhatsApp number</label>
                  <input id="hero-phone" className="fd" type="tel" inputMode="tel" placeholder="98XXX XXXXX" value={phone1} onChange={(e) => setPhone1(e.target.value)} onBlur={() => setTouched1((t) => ({ ...t, phone: true }))} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 16px", borderRadius: "14px", border: `1.5px solid ${showPhone1Err ? "#FF9F95" : "#3A3A3C"}`, background: "#1C1C1E", color: "#FFFFFF", width: "100%" }} />
                  {showPhone1Err && <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>Enter a 10-digit mobile number</span>}
                </div>

                {/* Website or Instagram handle */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>Website or Instagram handle</label>
                  <input id="hero-handle" className="fd" type="text" placeholder="@yourbrand" value={handle1} onChange={(e) => setHandle1(e.target.value)} onBlur={() => setTouched1((t) => ({ ...t, handle: true }))} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 16px", borderRadius: "14px", border: `1.5px solid ${showHandle1Err ? "#FF9F95" : "#3A3A3C"}`, background: "#1C1C1E", color: "#FFFFFF", width: "100%" }} />
                  {showHandle1Err && <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>Enter your website or Instagram handle</span>}
                </div>

                {/* Need dropdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="hero-need" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>What do you need? <span style={{ color: "#8E8E93" }}>(optional)</span></label>
                  <select id="hero-need" className="fd" value={need1} onChange={(e) => setNeed1(e.target.value)} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 14px", borderRadius: "14px", border: "1.5px solid #3A3A3C", background: "#1C1C1E", color: "#FFFFFF", width: "100%" }}>
                    <option value="Not sure yet">Not sure yet</option>
                    <option value="Social media strategy">Social media strategy</option>
                    <option value="Content creation">Content creation</option>
                    <option value="Community management">Community management</option>
                    <option value="Influencer marketing">Influencer marketing</option>
                    <option value="Facebook and Instagram marketing">Facebook and Instagram marketing</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <button type="submit" className="press y btn-sheen" style={{ font: "inherit", fontSize: "17px", fontWeight: 650, letterSpacing: "-0.01em", color: "#000000", background: "#FFBA39", border: 0, borderRadius: "999px", minHeight: "54px", cursor: "pointer", marginTop: "4px" }}>
                  Get my social media audit
                </button>

                <span style={{ fontSize: "13px", color: "#8E8E93", textAlign: "center", letterSpacing: 0 }}>
                  No spam, no sales scripts. We'll reply on WhatsApp or call.
                </span>
              </form>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", padding: "12px 0", position: "relative", zIndex: 1 }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#FFBA39", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </span>
                <h3 role="status" className="smm-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>Audit requested</h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>Thanks, {name1}. We'll review {handle1} and get in touch on {phone1}.</p>
                <button type="button" className="press" onClick={() => { setSent1(false); setName1(""); setPhone1(""); setHandle1(""); setTouched1({}); }} style={{ font: "inherit", fontSize: "15px", fontWeight: 600, color: "#FFFFFF", background: "rgba(255,255,255,0.12)", border: 0, borderRadius: "999px", minHeight: "44px", padding: "8px 18px", cursor: "pointer" }}>
                  Request another audit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BRANDS WE WORK WITH MARQUEE */}
      <section aria-label="Brands we work with" style={{ padding: "clamp(32px, 4vw, 44px) 0 clamp(36px, 4.5vw, 48px)", backgroundColor: "#FAFAFC", borderTop: "1px solid #E5E5EA", borderBottom: "1px solid #E5E5EA", position: "relative", zIndex: 10 }}>
        <p style={{ margin: "0 0 clamp(20px, 2.5vw, 28px)", fontSize: "14.5px", fontWeight: 500, color: "#6E6E73", textAlign: "center", letterSpacing: "-0.01em" }}>Brands we work with</p>
        <div className="marqwrap" style={{ overflow: "hidden", width: "100%", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="marq" style={{ display: "flex", gap: "clamp(56px, 6vw, 96px)", width: "max-content", alignItems: "center" }}>
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "0 8px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.name} style={{ display: "block", height: "clamp(46px, 5.2vw, 68px)", width: "auto", maxWidth: "clamp(160px, 18vw, 240px)", objectFit: "contain", transition: "transform 0.3s ease" }} className="transition-transform duration-300 hover:scale-110" draggable={false} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF SECTION: TRUST & CREDIBILITY */}
      <section id="proof" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(40px, 5vw, 56px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
          <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700 }}>
            Trust and credibility matter when choosing the right partner for your brand's online presence.
          </h2>
          <p style={{ fontSize: "20px", lineHeight: 1.45, color: "#3A3A3C", margin: 0 }}>
            At OneImpact, they guide everything we do, so your brand is not just seen, but remembered and respected online.
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.5, color: "#6E6E73", margin: 0 }}>
            We're not just into engagements and gathering likes and shares; we're focused on helping you create meaningful connections with your target audience. Our team stays ahead of social trends, algorithm shifts and tools to harness social media's full potential.
          </p>
        </div>
      </section>

      {/* ── CLIENT REVIEWS */}
      <section id="reviews" style={{ backgroundColor: "#FFFFFF", padding: "0 clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px" }}>
            {QUOTES.map((q, idx) => (
              <figure key={idx} style={{ margin: 0, background: "#FFFFFF", border: "1px solid #E5E5EA", borderRadius: "24px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between", boxShadow: "0 2px 14px rgba(0, 0, 0, 0.03)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ display: "inline-flex", gap: "3px", color: "#FFBA39" }} aria-label="Rated 5 out of 5">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
                    ))}
                  </span>
                  <blockquote style={{ margin: 0, fontSize: "18px", lineHeight: 1.45, fontWeight: 600, letterSpacing: "-0.02em", color: "#1D1D1F" }}>
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                </div>
                <figcaption style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/LOGO/oneimpact-logo.webp" alt="Client logo" style={{ display: "block", height: "20px", width: "auto", maxWidth: "65px", objectFit: "contain", opacity: 0.7 }} />
                  <span style={{ fontSize: "14.5px", color: "#6E6E73", lineHeight: 1.3, letterSpacing: 0 }}>{q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS: HOW SOCIAL MEDIA MARKETING COMPANIES CAN HELP */}
      <section id="why" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(32px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700 }}>How social media marketing companies can help</h2>
          <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73" }}>Here's what a social media marketing partner does for your brand:</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "14px" }}>
          {HELPS_CARDS.map((b, i) => (
            <div key={i} style={{ background: "#F5F5F7", borderRadius: "22px", padding: "24px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "12px", background: b.chip, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={b.d} /></svg>
                </span>
                <h3 className="smm-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25 }}>{b.t}</h3>
              </div>
              <p style={{ margin: 0, color: "#3A3A3C", fontSize: "15px", lineHeight: 1.5 }}>{b.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUT WHY ONEIMPACT? / WHAT WE DO SECTION */}
      <section id="why-oneimpact" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(32px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)", borderTop: "1px solid #EBEBED" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "32px" }}>
          <div>
            <h2 className="smm-heading" style={{ margin: "0 0 10px", fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700 }}>
              {whyTab === 0 ? "But why OneImpact?" : "Why OneImpact?"}
            </h2>
            <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "52ch" }}>
              {whyTab === 0
                ? "Here's what makes us the right social media marketing partner for your brand."
                : "Content people want to engage with, creative instinct with platform insights, and meaningful metrics."}
            </p>
          </div>

          {/* Tab Switcher */}
          <div role="tablist" aria-label="Why OneImpact tabs" style={{ position: "relative", display: "inline-grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", background: "#F2F2F5", border: "1px solid #E5E5EA", borderRadius: "999px", padding: "4px", boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.06)", width: "min(460px, 100%)" }}>
            <span aria-hidden="true" className="btn-sheen" style={{ position: "absolute", top: "4px", bottom: "4px", left: "4px", width: "calc((100% - 8px) / 2)", transform: `translateX(${whyTab * 100}%)`, transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)", background: "#FFBA39", borderRadius: "999px", boxShadow: "0 3px 12px rgba(255, 186, 57, 0.45)" }} />
            {["But why OneImpact?", "Why OneImpact?"].map((label, i) => (
              <button key={i} type="button" role="tab" aria-selected={whyTab === i} onClick={() => setWhyTab(i)} style={{ position: "relative", zIndex: 1, font: "inherit", fontSize: "14.5px", fontWeight: whyTab === i ? 700 : 500, color: whyTab === i ? "#000000" : "#555558", background: "transparent", border: 0, borderRadius: "999px", minHeight: "42px", padding: "8px 18px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "color 200ms ease", whiteSpace: "nowrap", letterSpacing: "-0.015em" }}>
                <span>{label}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, padding: "1px 7px", borderRadius: "999px", background: whyTab === i ? "rgba(0, 0, 0, 0.12)" : "rgba(0, 0, 0, 0.05)", color: whyTab === i ? "#000000" : "#8E8E93", transition: "all 200ms ease" }}>
                  {i === 0 ? BUT_WHY_CARDS.length : WHY2_POINTS.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab 0: But why OneImpact? (all 8 cards visible by default) */}
        {whyTab === 0 && (
          <div className="smm-why-grid">
            {BUT_WHY_CARDS.map((w, idx) => (
              <div key={idx} className="smm-why-card" style={{ background: "#F5F5F7", borderRadius: "22px", padding: "24px 22px", display: "flex", flexDirection: "column", gap: "10px", border: "1px solid rgba(0, 0, 0, 0.03)", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)", transition: "transform 200ms ease, box-shadow 200ms ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span className="why-icon" style={{ width: "36px", height: "36px", borderRadius: "50%", background: w.chip === "#FFBA39" ? "linear-gradient(135deg, #FFBA39 0%, #FFA800 100%)" : "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", boxShadow: w.chip === "#FFBA39" ? "0 3px 8px rgba(255, 186, 57, 0.35)" : "0 3px 8px rgba(0, 102, 255, 0.35)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={w.chip === "#FFBA39" ? "#1D1D1F" : "#FFFFFF"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  <h3 className="smm-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#1D1D1F" }}>{w.t}</h3>
                </div>
                <p style={{ margin: 0, color: "#6E6E73", fontSize: "14.5px", lineHeight: 1.5 }}>{w.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 1: Why OneImpact? (highlight cards) */}
        {whyTab === 1 && (
          <div className="smm-why-grid">
            {WHY2_POINTS.map((w, idx) => (
              <div key={idx} className="smm-why-card" style={{ background: "#F5F5F7", borderRadius: "22px", padding: "24px 22px", display: "flex", flexDirection: "column", gap: "10px", border: "1px solid rgba(0, 0, 0, 0.03)", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)", transition: "transform 200ms ease, box-shadow 200ms ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span className="why-icon" style={{ width: "36px", height: "36px", borderRadius: "50%", background: idx % 2 === 0 ? "linear-gradient(135deg, #FFBA39 0%, #FFA800 100%)" : "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", boxShadow: idx % 2 === 0 ? "0 3px 8px rgba(255, 186, 57, 0.35)" : "0 3px 8px rgba(0, 102, 255, 0.35)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={idx % 2 === 0 ? "#1D1D1F" : "#FFFFFF"} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  <h3 className="smm-heading" style={{ margin: 0, fontSize: "18.5px", letterSpacing: "-0.025em", fontWeight: 700, lineHeight: 1.25, color: "#1D1D1F" }}>{w.t}</h3>
                </div>
                <p style={{ margin: 0, color: "#6E6E73", fontSize: "14.5px", lineHeight: 1.5 }}>{w.a}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── EXPLORE OUR SOCIAL MEDIA SERVICES */}
      <section id="services" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(20px, 2.5vw, 28px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "12px" }}>
          <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700, maxWidth: "14ch" }}>Explore our social media services</h2>

          <div role="tablist" aria-label="Service groups" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", background: "#F2F2F5", border: "1px solid #E5E5EA", borderRadius: "999px", padding: "4px", boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.05)", width: "min(420px, 100%)" }}>
            <span aria-hidden="true" className="btn-sheen" style={{ position: "absolute", top: "4px", bottom: "4px", left: "4px", width: "calc((100% - 8px) / 2)", transform: `translateX(${svcIdx * 100}%)`, transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)", background: "#FFBA39", borderRadius: "999px", boxShadow: "0 3px 12px rgba(255, 186, 57, 0.45)" }} />
            {SVC_GROUPS.map((grp, i) => (
              <button key={i} type="button" role="tab" className="press" aria-selected={svcIdx === i} onClick={() => setSvcIdx(i)} style={{ position: "relative", zIndex: 1, font: "inherit", fontSize: "15px", fontWeight: svcIdx === i ? 650 : 500, color: svcIdx === i ? "#000000" : "#555558", background: "transparent", border: 0, borderRadius: "999px", minHeight: "44px", padding: "9px 18px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", letterSpacing: "-0.015em", transition: "color 200ms ease" }}>
                {grp.label}
              </button>
            ))}
          </div>
        </div>

        <p style={{ margin: "0 0 28px", fontSize: "19px", color: "#6E6E73", maxWidth: "56ch" }}>
          At OneImpact, our social media marketing offerings fall into two broad categories: organic services and platform-based services.
        </p>

        <div className="smm-services-grid">
          {activeServices.items.map((s, i) => (
            <div key={i} className="smm-service-card" style={{ background: "#FFFFFF", border: "1px solid #E5E5EA", borderRadius: "22px", padding: "24px 22px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 16px 36px -28px rgba(0,0,0,0.25)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "50%", background: s.dot, flex: "none" }} />
                <h3 className="smm-heading" style={{ margin: 0, fontSize: "19.5px", letterSpacing: "-0.025em", fontWeight: 700 }}>{s.t}</h3>
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
      <section id="offer" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)" }}>
        <h2 className="smm-heading" style={{ margin: "0 0 12px", fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700 }}>What we offer</h2>
        <p style={{ margin: "0 0 24px", fontSize: "19px", color: "#6E6E73" }}>Pick a topic to see exactly how we approach it.</p>

        {/* Topic Pills */}
        <div className="scrollrow" role="tablist" aria-label="Offer topics">
          {OFFER_TOPICS.map((t, i) => (
            <button key={i} type="button" role="tab" className="press" aria-selected={offerIdx === i} onClick={() => { setOfferIdx(i); setOfferExpanded(false); }} style={{ font: "inherit", fontSize: "15px", fontWeight: offerIdx === i ? 600 : 500, color: "#000000", background: offerIdx === i ? "linear-gradient(180deg, #FFC759 0%, #FFBA39 50%, #FFA800 100%)" : "#FFFFFF", border: `1.5px solid ${offerIdx === i ? "#000000" : "#D2D2D7"}`, boxShadow: offerIdx === i ? "0 4px 14px rgba(255, 186, 57, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)" : "0 1px 2px rgba(0, 0, 0, 0.03)", borderRadius: "999px", minHeight: "44px", padding: "8px 18px", cursor: "pointer", transition: "all 180ms cubic-bezier(0.16, 1, 0.3, 1)" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Accordion Panel */}
        <div role="tabpanel" style={{ marginTop: "20px", background: "#F5F5F7", borderRadius: "28px", padding: "clamp(20px, 4vw, 44px)" }}>
          {activeOffer.intro && (
            <p className="prewrap" style={{ margin: "0 0 20px", fontSize: "17.5px", color: "#3A3A3C", maxWidth: "75ch" }}>{activeOffer.intro}</p>
          )}
          <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #D2D2D7" }}>
            {visibleOfferQs.map((f, qIdx) => (
              <details key={qIdx} style={{ borderTop: "1px solid #D2D2D7" }}>
                <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "18px 0", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", minHeight: "44px" }}>
                  {f.q}
                  <svg className="chev" style={{ flex: "none" }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p className="prewrap" style={{ margin: "0 0 18px", color: "#3A3A3C", maxWidth: "75ch" }}>{f.a}</p>
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
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700, maxWidth: "16ch" }}>Social media marketing that fits your business. Not a template.</h2>
              <p style={{ margin: 0, fontSize: "19px", color: "#6E6E73", maxWidth: "50ch" }}>Swipe through what you get with OneImpact as your social media marketing agency.</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button type="button" className="press" aria-label="Previous" onClick={() => scrollCarousel("prev")} disabled={carIdx === 0} style={{ width: "44px", height: "44px", borderRadius: "50%", border: 0, background: "rgba(0,0,0,0.08)", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button type="button" className="press" aria-label="Next" onClick={() => scrollCarousel("next")} disabled={carIdx >= USP_CARDS.length - 1} style={{ width: "44px", height: "44px", borderRadius: "50%", border: 0, background: "rgba(0,0,0,0.08)", color: "#000000", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>

          <div ref={trackRef} className="car-view" onScroll={handleTrackScroll} aria-roledescription="carousel">
            <div className="car-track">
              {USP_CARDS.map((u, i) => (
                <div key={i} className="car-card" style={{ background: "#FFFFFF", borderRadius: "28px", padding: "28px 26px", display: "flex", gap: "16px", alignItems: "flex-start", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
                  <span style={{ width: "52px", height: "52px", borderRadius: "16px", background: u.chip, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={u.d} /></svg>
                  </span>
                  <div>
                    <h3 className="smm-heading" style={{ margin: 0, fontSize: "28px", letterSpacing: "-0.04em", fontWeight: 700, lineHeight: 1.1 }}>{u.head}</h3>
                    <p style={{ fontSize: "17px", color: "#3A3A3C", marginTop: "8px" }}>{u.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: "24px", height: "4px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", maxWidth: "240px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.round(((carIdx + 1) / USP_CARDS.length) * 100)}%`, background: "#000000", borderRadius: "999px", transition: "width 400ms cubic-bezier(0.32, 0.72, 0, 1)" }} />
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT: SOCIAL MEDIA MARKETING IN MUMBAI */}
      <section id="mumbai" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(36px, 4.5vw, 56px) clamp(16px, 3vw, 32px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "clamp(32px, 6vw, 88px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700, maxWidth: "13ch" }}>Social Media Marketing in Mumbai</h2>
            <p style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>Mumbai is not only India's financial and entertainment hub, it's a city beaming with opportunities. With its superfast lifestyle, mixed crowd and lucrative industries, Mumbai is &ldquo;THE&rdquo; place for businesses aiming to create an impact, and a social media game that appeals to your target group is no longer optional.</p>
            <p style={{ fontSize: "18px", color: "#3A3A3C", margin: 0 }}>Showing up consistently on Instagram, Facebook, LinkedIn and X can set your business apart. At OneImpact, every business we partner with gets a plan built from scratch and tailored to its audience, goals and brand voice, with solutions that bundle creativity and performance marketing, backed by data.</p>
            <p style={{ color: "#000000", fontWeight: 600, fontSize: "18px", margin: 0 }}>We don't just provide a service, we partner with you like a team.</p>
            <a className="press y btn-sheen" href="#audit" style={{ alignSelf: "flex-start", fontWeight: 650, fontSize: "17px", padding: "14px 24px", minHeight: "52px", background: "#FFBA39", color: "#000000", textDecoration: "none", border: 0, borderRadius: "999px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Let's build something that leaves a lasting impression
            </a>
          </div>

          {/* Visual: Phone mockup */}
          <figure style={{ margin: 0, borderRadius: "32px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 40px 80px -40px rgba(0,0,0,0.35)" }} aria-label="Illustration of a social media feed">
            <div style={{ position: "relative", height: "230px", background: "#E8F0FF", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "50%", top: "22px", bottom: "-30px", width: "132px", marginLeft: "-66px", borderRadius: "26px", background: "#000000", padding: "8px" }}>
                <div style={{ height: "100%", borderRadius: "19px", background: "#FFFFFF", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FFBA39" }} />
                    <span style={{ height: "6px", width: "46px", borderRadius: "4px", background: "#E5E5EA" }} />
                  </div>
                  <div style={{ height: "98px", borderRadius: "10px", background: "#D6E5FF", position: "relative" }}>
                    <span style={{ position: "absolute", right: "12px", top: "12px", width: "22px", height: "22px", borderRadius: "50%", background: "#FFBA39" }} />
                  </div>
                  <div style={{ display: "flex", gap: "6px", color: "#000000" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z" /></svg>
                  </div>
                  <span style={{ height: "6px", width: "80%", borderRadius: "4px", background: "#E5E5EA" }} />
                </div>
              </div>
            </div>
            <div style={{ padding: "10px 14px 14px", display: "flex", flexDirection: "column" }}>
              {[
                { title: "Your Brand", meta: "New reel. Posted 2h ago" },
                { title: "Another Account", meta: "Posted yesterday" },
                { title: "Nearby Competitor", meta: "Sponsored" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 10px", borderRadius: "16px", ...(i === 0 ? { background: "#FFF4DE" } : {}) }}>
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", fontSize: "13px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", background: i === 0 ? "#FFBA39" : "#E5E5EA" }}>{i + 1}</span>
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
      <section id="faq" style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(24px, 3vw, 36px) clamp(16px, 3vw, 32px) clamp(36px, 4.5vw, 52px)" }}>
        <h2 className="smm-heading" style={{ margin: "0 0 12px", fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.045em", fontWeight: 700 }}>Questions, answered</h2>
        <p style={{ margin: "0 0 24px", fontSize: "19px", color: "#6E6E73" }}>
          Anything else? <a href="https://wa.me/918369018104" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>Message us on WhatsApp</a>.
        </p>

        {/* FAQ tab switcher */}
        <div style={{ marginBottom: "24px" }}>
          <div role="tablist" aria-label="FAQ groups" style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${FAQ_GROUPS.length}, minmax(0, 1fr))`, background: "#F2F2F5", border: "1px solid #E5E5EA", borderRadius: "999px", padding: "4px", boxShadow: "inset 0 1.5px 3px rgba(0, 0, 0, 0.05)", width: "min(360px, 100%)" }}>
            <span aria-hidden="true" className="btn-sheen" style={{ position: "absolute", top: "4px", bottom: "4px", left: "4px", width: `calc((100% - 8px) / ${FAQ_GROUPS.length})`, transform: `translateX(${faqIdx * 100}%)`, transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)", background: "#FFBA39", borderRadius: "999px", boxShadow: "0 3px 12px rgba(255, 186, 57, 0.45)" }} />
            {FAQ_GROUPS.map((g, i) => (
              <button key={i} type="button" role="tab" className="press" aria-selected={faqIdx === i} onClick={() => { setFaqIdx(i); setFaqExpanded(false); }} style={{ position: "relative", zIndex: 1, font: "inherit", fontSize: "15px", fontWeight: faqIdx === i ? 650 : 500, color: faqIdx === i ? "#000000" : "#555558", background: "transparent", border: 0, borderRadius: "999px", minHeight: "44px", padding: "9px 18px", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap", letterSpacing: "-0.015em", transition: "color 200ms ease" }}>
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #E5E5EA" }}>
          {visibleFaqs.map((f, qIdx) => (
            <details key={qIdx} style={{ borderTop: "1px solid #E5E5EA" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "18px 0", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", minHeight: "44px" }}>
                {f.q}
                <svg className="chev" style={{ flex: "none" }} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
              </summary>
              <p className="prewrap" style={{ margin: "0 0 20px", color: "#3A3A3C", maxWidth: "75ch" }}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* Load More button */}
        {activeFaqGroup.qs.length > 5 && (
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button type="button" className="press y btn-sheen" onClick={() => setFaqExpanded(!faqExpanded)} style={{ font: "inherit", fontSize: "14.5px", fontWeight: 650, color: "#000000", background: "linear-gradient(180deg, #FFC759 0%, #FFBA39 50%, #FFA800 100%)", border: "1.5px solid #000000", borderRadius: "999px", minHeight: "42px", padding: "8px 22px", cursor: "pointer", boxShadow: "0 4px 14px rgba(255, 186, 57, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -1px 2px rgba(0, 0, 0, 0.12)" }}>
              {faqExpanded ? "Show fewer" : `Load more (${activeFaqGroup.qs.length - 5} more)`}
            </button>
          </div>
        )}
      </section>

      {/* ── FINAL CTA + SECOND FORM */}
      <section id="audit2" style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px) clamp(44px, 6vw, 76px)" }}>
        <div style={{ position: "relative", overflow: "hidden", background: "#F5F5F7", borderRadius: "40px", padding: "clamp(28px, 5vw, 72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "clamp(28px, 5vw, 64px)", alignItems: "center" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "-80px", bottom: "-120px", width: "360px", height: "360px", borderRadius: "50%", background: "#FFBA39", opacity: 0.5, filter: "blur(80px)" }} />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 className="smm-heading" style={{ margin: 0, fontSize: "clamp(2.4rem, 5vw, 4.2rem)", lineHeight: 1.02, letterSpacing: "-0.05em", fontWeight: 700, maxWidth: "12ch" }}>Stop the scroll.</h2>
            <p style={{ fontSize: "19px", color: "#3A3A3C", maxWidth: "44ch", margin: 0 }}>Get a social media audit and see what's holding your brand back. No obligation.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a className="press" href="https://wa.me/918369018104" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "46px", padding: "10px 18px", borderRadius: "999px", background: "#000000", color: "#FFFFFF", textDecoration: "none", fontWeight: 600, fontSize: "15.5px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /></svg>
                +91 83690 18104
              </a>
              <a className="press" href="mailto:teamhr@oneimpact.co" style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", padding: "10px 18px", borderRadius: "999px", background: "rgba(0,0,0,0.07)", color: "#000000", textDecoration: "none", fontWeight: 600, fontSize: "15.5px" }}>
                teamhr@oneimpact.co
              </a>
            </div>
          </div>

          {/* Bottom form */}
          <div className="form-card" style={{ background: "#000000", borderRadius: "30px", padding: "clamp(24px, 3.2vw, 36px)", color: "#FFFFFF", boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 40px 80px -40px rgba(0,0,0,0.5)" }}>
            {!sent2 ? (
              <form onSubmit={handleSubmit2} style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative", zIndex: 1 }}>
                <h3 className="smm-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.035em", fontWeight: 700 }}>Get your social media audit</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-name" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>Your name</label>
                  <input id="btm-name" className="fd" type="text" placeholder="First and last name" value={name2} onChange={(e) => setName2(e.target.value)} onBlur={() => setTouched2((t) => ({ ...t, name: true }))} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 16px", borderRadius: "14px", border: `1.5px solid ${showName2Err ? "#FF9F95" : "#3A3A3C"}`, background: "#1C1C1E", color: "#FFFFFF", width: "100%" }} />
                  {showName2Err && <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>Enter your name so we know who to reply to</span>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-phone" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>Phone or WhatsApp number</label>
                  <input id="btm-phone" className="fd" type="tel" inputMode="tel" placeholder="98XXX XXXXX" value={phone2} onChange={(e) => setPhone2(e.target.value)} onBlur={() => setTouched2((t) => ({ ...t, phone: true }))} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 16px", borderRadius: "14px", border: `1.5px solid ${showPhone2Err ? "#FF9F95" : "#3A3A3C"}`, background: "#1C1C1E", color: "#FFFFFF", width: "100%" }} />
                  {showPhone2Err && <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>Enter a 10-digit mobile number</span>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="btm-handle" style={{ fontWeight: 500, fontSize: "14px", color: "#EBEBF0", letterSpacing: 0 }}>Website or Instagram handle</label>
                  <input id="btm-handle" className="fd" type="text" placeholder="@yourbrand" value={handle2} onChange={(e) => setHandle2(e.target.value)} onBlur={() => setTouched2((t) => ({ ...t, handle: true }))} style={{ font: "inherit", fontSize: "17px", height: "50px", padding: "0 16px", borderRadius: "14px", border: `1.5px solid ${showHandle2Err ? "#FF9F95" : "#3A3A3C"}`, background: "#1C1C1E", color: "#FFFFFF", width: "100%" }} />
                  {showHandle2Err && <span role="alert" style={{ fontSize: "14px", color: "#FF9F95" }}>Enter your website or Instagram handle</span>}
                </div>

                <button type="submit" className="press y btn-sheen" style={{ font: "inherit", fontSize: "17px", fontWeight: 650, letterSpacing: "-0.01em", color: "#000000", background: "#FFBA39", border: 0, borderRadius: "999px", minHeight: "54px", cursor: "pointer", marginTop: "4px" }}>
                  Get my social media audit
                </button>
              </form>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", padding: "12px 0", position: "relative", zIndex: 1 }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#FFBA39", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </span>
                <h3 role="status" className="smm-heading" style={{ margin: 0, fontSize: "26px", letterSpacing: "-0.03em", fontWeight: 700 }}>Audit requested</h3>
                <p style={{ margin: 0, color: "#C7C7CC" }}>Thanks, {name2}. We'll review {handle2} and get in touch on {phone2}.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER */}
      <footer style={{ background: "#F5F5F7", color: "#000000", fontSize: "13.5px", letterSpacing: 0 }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "40px clamp(16px, 3vw, 32px) 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/LOGO/oneimpact-logo.webp" alt="One Impact" style={{ display: "block", width: "105px", height: "auto", marginBottom: "3px" }} />
            <span style={{ color: "#6E6E73" }}>360-degree digital marketing for that ONE big bang IMPACT.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Services</span>
            <a href="/seo" style={{ color: "#6E6E73", textDecoration: "none" }}>SEO and AIO</a>
            <a href="/social-media-marketing" style={{ color: "#6E6E73", textDecoration: "none" }}>Social media</a>
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>Branding and design</a>
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>Website development</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Company</span>
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>About us</a>
            <a href="#proof" style={{ color: "#6E6E73", textDecoration: "none" }}>Why us</a>
            <a href="#" style={{ color: "#6E6E73", textDecoration: "none" }}>Blog</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <span style={{ fontWeight: 600 }}>Contact</span>
            <span style={{ color: "#6E6E73" }}>Mumbai, Maharashtra</span>
            <a href="mailto:teamhr@oneimpact.co" style={{ color: "#6E6E73", textDecoration: "none" }}>teamhr@oneimpact.co</a>
            <a href="tel:+918369018104" style={{ color: "#6E6E73", textDecoration: "none" }}>+91 83690 18104</a>
          </div>
        </div>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
          <div style={{ borderTop: "1px solid #D2D2D7", color: "#6E6E73", paddingTop: "16px", paddingBottom: "24px" }}>© 2026 One Impact. All rights reserved.</div>
        </div>
      </footer>

      {/* ── MOBILE STICKY BAR */}
      <div className="mbar" style={{ position: "sticky", bottom: 0, zIndex: 60, padding: "10px 16px calc(10px + env(safe-area-inset-bottom))", background: "rgba(255,255,255,0.78)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)" }}>
        <a className="press" href="https://wa.me/918369018104" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" style={{ flex: "none", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(0,0,0,0.07)", color: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /></svg>
        </a>
        <a className="press btn-sheen" href="#audit" style={{ flex: 1, background: "#FFBA39", color: "#000000", textDecoration: "none", fontWeight: 650, fontSize: "16.5px", borderRadius: "999px", minHeight: "52px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          Get my social media audit
        </a>
      </div>
    </div>
  );
}
