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
    image: "/images/Service page_branding.png",
  },
  {
    title: "Interactive Web & Digital Engineering",
    category: "WEBSITE DEVELOPMENT",
    description: "High-performance digital architectures, bespoke UI/UX, and immersive interactive web experiences.",
    gradient: "from-zinc-950/80 via-black/40 to-transparent",
    image: "/images/Service page_website development.png",
  },
  {
    title: "Organic Search & Traffic Growth",
    category: "SEO SERVICES",
    description: "Technical SEO audits, domain authority building, and data-backed strategies for scalable organic ranking dominance.",
    gradient: "from-amber-950/70 via-black/40 to-transparent",
    image: "/images/Service page_SEO.png",
  },
  {
    title: "Commercial Studio & Art Direction",
    category: "CONTENT & CREATIVE",
    description: "Cinematic commercial photography, high-end studio film production, and viral visual asset creation.",
    gradient: "from-stone-950/80 via-black/40 to-transparent",
    image: "/images/Service page_content & creative.png",
  },
  {
    title: "Creator Partnerships & PR",
    category: "INFLUENCER MARKETING",
    description: "Curating high-converting creator alliances that amplify brand authority, reach, and organic engagement.",
    gradient: "from-rose-950/70 via-black/40 to-transparent",
    image: "/images/Service page_Influencer marketing.png",
  },
  {
    title: "Creator-Led Social Campaigns",
    category: "USER GENERATED CONTENT",
    description: "Relatable, authentic creator-led video content engineered for paid social performance and viral conversions.",
    gradient: "from-zinc-950/80 via-black/40 to-transparent",
    image: "/images/Service page_UGC.png",
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
              start: "top 80%",
              toggleActions: "play none none none",
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
              start: "top 75%",
              toggleActions: "play none none none",
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
              start: "top 65%",
              toggleActions: "play none none none",
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

      <div className="relative z-[1] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 md:pb-32 lg:pb-36">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          {/* Left — Text content */}
          <div className="w-full lg:w-[42%] xl:w-[38%] shrink-0 z-10 lg:pr-4">
            {/* Subtitle */}
            <span className="text-accent-yellow font-display text-[10px] md:text-xs font-extrabold tracking-widest uppercase block mb-4">
              {"// "}OUR SERVICES & EXPERTISE
            </span>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-off-white flex flex-wrap gap-x-[0.25em] mb-6">
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
              className="swap-description text-off-white/50 text-sm sm:text-base leading-relaxed font-sans max-w-md"
              style={{ opacity: 0 }}
            >
              Every project is a canvas where strategy meets artistry. 
              We don&apos;t just design — we engineer experiences that 
              resonate, convert, and leave lasting impressions.
            </p>

            {/* Decorative accent line */}
            <div className="mt-8 w-16 h-[2px] bg-gradient-to-r from-accent-yellow via-accent-yellow/50 to-transparent" />
          </div>

          {/* Right — Card Swap */}
          <div className="card-swap-wrapper w-full lg:w-[58%] xl:w-[62%] relative flex flex-col items-center lg:items-end overflow-visible" style={{ opacity: 0 }}>
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[490px] lg:h-[520px] xl:h-[560px]">
              <CardSwap
                ref={cardSwapRef}
                width={560}
                height={315}
                cardDistance={24}
                verticalDistance={32}
                delay={4500}
                pauseOnHover={true}
                skewAmount={4}
                easing="smooth"
              >
                {PROJECTS.map((project, i) => (
                  <Card key={i}>
                    {/* Card interior */}
                    <div className="relative w-full h-full overflow-hidden rounded-2xl group/card cursor-pointer bg-zinc-950 shadow-2xl">
                      {/* Background image — pristine showcase without obscuring text overlays */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                        loading="lazy"
                        draggable={false}
                      />

                      {/* Top-right card index badge + click to swap button */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            cardSwapRef.current?.swap();
                          }}
                          aria-label="Click to swap card"
                          className="hidden sm:inline-flex items-center gap-1.5 text-[9px] uppercase font-bold tracking-widest text-off-white/90 bg-black/70 hover:bg-black/90 hover:text-accent-yellow active:scale-95 transition-all duration-200 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 hover:border-accent-yellow/60 cursor-pointer pointer-events-auto shadow-md"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse" />
                          CLICK TO SWAP
                        </button>
                        <div className="w-8 h-8 rounded-full border border-white/15 bg-black/60 backdrop-blur-md flex items-center justify-center">
                          <span className="text-off-white/80 font-display text-xs font-bold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
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
