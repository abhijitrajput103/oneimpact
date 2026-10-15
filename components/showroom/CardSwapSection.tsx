"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import CardSwap, { Card, CardSwapRef } from "./CardSwap";

/* ─── Showcase project data for the swapping cards ─── */
const PROJECTS = [
  {
    title: "Brand Strategy & Visual Design",
    category: "BRANDING",
    description: "Crafting bespoke brand narratives, identity systems, and high-impact visual design that command attention.",
    gradient: "from-amber-950/70 via-black/40 to-transparent",
    image: "/images/service-branding.webp",
  },
  {
    title: "Interactive Web & Digital Engineering",
    category: "WEBSITE DEV",
    description: "High-performance digital architectures, bespoke UI/UX, and immersive interactive web experiences.",
    gradient: "from-zinc-950/80 via-black/40 to-transparent",
    image: "/images/service-website-development.webp",
  },
  {
    title: "Organic Search & Traffic Growth",
    category: "SEO SERVICES",
    description: "Technical SEO audits, domain authority building, and data-backed strategies for scalable organic ranking dominance.",
    gradient: "from-amber-950/70 via-black/40 to-transparent",
    image: "/images/service-seo.webp",
  },
  {
    title: "Commercial Studio & Art Direction",
    category: "CONTENT & FILM",
    description: "Cinematic commercial photography, high-end studio film production, and viral visual asset creation.",
    gradient: "from-stone-950/80 via-black/40 to-transparent",
    image: "/images/service-content-creative.webp",
  },
  {
    title: "Creator Partnerships & Strategic PR",
    category: "INFLUENCER PR",
    description: "Curating high-converting creator alliances that amplify brand authority, reach, and organic engagement.",
    gradient: "from-rose-950/70 via-black/40 to-transparent",
    image: "/images/service-influencer-marketing.webp",
  },
  {
    title: "Creator-Led Social Campaigns",
    category: "UGC CAMPAIGNS",
    description: "Relatable, authentic creator-led video content engineered for paid social performance and viral conversions.",
    gradient: "from-zinc-950/80 via-black/40 to-transparent",
    image: "/images/service-ugc.webp",
  },
  {
    title: "Performance & Social Media Marketing",
    category: "SOCIAL MEDIA",
    description: "Data-driven social media growth, viral content strategy, and multi-channel campaign management for market leadership.",
    gradient: "from-purple-950/70 via-black/40 to-transparent",
    image: "/images/service-social-media.webp",
  },
];

interface CardSwapSectionProps {
  className?: string;
}

export function CardSwapSection({ className }: CardSwapSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardSwapRef = useRef<CardSwapRef>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Animate heading
      const words = section.querySelectorAll(".swap-heading-word");
      if (words.length > 0) {
        gsap.fromTo(
          words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.0,
            stagger: 0.04,
            ease: "reveal-ease",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate description
      const desc = section.querySelector(".swap-description");
      if (desc) {
        gsap.fromTo(
          desc,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate the card container
      const cardContainer = section.querySelector(".card-swap-wrapper");
      if (cardContainer) {
        gsap.fromTo(
          cardContainer,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const headingText = "Our Work Speaks Louder";
  const words = headingText.split(" ");

  return (
    <section
      ref={sectionRef}
      id="card-swap"
      className={cn(
        "relative w-full bg-black overflow-hidden select-none",
        className
      )}
    >
      {/* Background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-[1] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-14">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Left — Text content */}
          <div className="w-full lg:w-[42%] xl:w-[38%] shrink-0 z-10 lg:pr-4">
            {/* Subtitle */}
            <span className="text-accent-yellow font-display text-[10px] md:text-xs font-extrabold tracking-widest uppercase block mb-2 sm:mb-4">
              {"// "}OUR SERVICES & EXPERTISE
            </span>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-off-white flex flex-wrap gap-x-[0.25em] mb-3 sm:mb-6">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="relative inline-block overflow-hidden py-1"
                >
                  <span
                    className="swap-heading-word inline-block"
                    style={{ opacity: 0 }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>

            {/* Description */}
            <p
              className="swap-description text-off-white/50 text-xs sm:text-base leading-relaxed font-sans max-w-md"
              style={{ opacity: 0 }}
            >
              Every project is a canvas where strategy meets artistry. 
              We don&apos;t just design — we engineer experiences that 
              resonate, convert, and leave lasting impressions.
            </p>

            {/* Decorative accent line */}
            <div className="mt-3 sm:mt-6 md:mt-8 w-16 h-[2px] bg-gradient-to-r from-accent-yellow via-accent-yellow/50 to-transparent" />
          </div>

          {/* Right — Card Swap */}
          <div className="card-swap-wrapper w-full lg:w-[58%] xl:w-[62%] relative flex flex-col items-center lg:items-end overflow-visible" style={{ opacity: 0 }}>
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[560px]">
              <CardSwap
                ref={cardSwapRef}
                width={560}
                height={315}
                cardDistance={26}
                verticalDistance={36}
                delay={4500}
                pauseOnHover={true}
                skewAmount={4}
                easing="smooth"
              >
                {PROJECTS.map((project, i) => (
                  <Card key={i}>
                    {/* Card interior */}
                    <div className="relative w-full h-full overflow-hidden rounded-2xl group/card cursor-pointer bg-zinc-950 shadow-2xl">
                      {/* Background image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                        loading="lazy"
                        draggable={false}
                      />

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none z-10" />

                      {/* Service Name Pill at Top Right (Uncovered across all stacked cards!) */}
                      <div className="absolute top-2 sm:top-2.5 right-2 sm:right-3.5 z-30 flex items-center pointer-events-none">
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/25 shadow-lg whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow shadow-[0_0_8px_#DA9F37]" />
                          <span className="text-[8.5px] sm:text-[10px] font-display font-extrabold tracking-wider text-off-white uppercase">
                            <span className="text-accent-yellow mr-1">0{i + 1}</span>
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Card Title & Narrative */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-20 flex flex-col justify-end">
                        <span className="text-[7.5px] sm:text-[9.5px] font-display font-black tracking-widest text-accent-yellow uppercase block mb-0.5">
                          FEATURED SERVICE // {project.category}
                        </span>
                        <h3 className="text-xs sm:text-base md:text-lg font-display font-bold text-white tracking-tight leading-tight line-clamp-1 drop-shadow">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSwapSection;
