"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";
import CardSwap, { Card } from "./CardSwap";

/* ─── Showcase project data for the swapping cards ─── */
const PROJECTS = [
  {
    title: "Calamansi Gin & Tonic",
    category: "BRAND CAMPAIGN",
    description: "Crafting a tropical identity for an artisan beverage brand.",
    gradient: "from-amber-900/80 via-orange-800/60 to-yellow-700/40",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Festive Wonderland",
    category: "EXPERIENTIAL DESIGN",
    description: "Transforming retail spaces into immersive holiday experiences.",
    gradient: "from-red-900/80 via-rose-800/60 to-pink-700/40",
    image:
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Culinary Stories",
    category: "FOOD PHOTOGRAPHY",
    description: "Visual narratives that make every dish a work of art.",
    gradient: "from-emerald-900/80 via-teal-800/60 to-cyan-700/40",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop&q=80",
  },
  {
    title: "Night Market Diaries",
    category: "DOCUMENTARY",
    description: "Capturing the soul of street culture through cinematic lenses.",
    gradient: "from-violet-900/80 via-purple-800/60 to-fuchsia-700/40",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=400&fit=crop&q=80",
  },
];

interface CardSwapSectionProps {
  className?: string;
}

export function CardSwapSection({ className }: CardSwapSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

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

      <div className="relative z-[1] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-8 sm:pb-10 md:pb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-8">
          {/* Left — Text content */}
          <div className="flex-1 max-w-xl">
            {/* Subtitle */}
            <span className="text-accent-blue font-display text-[10px] md:text-xs font-extrabold tracking-widest uppercase block mb-4">
              {"// "}FEATURED PROJECTS
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
            <div className="mt-8 w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-blue/50 to-transparent" />
          </div>

          {/* Right — Card Swap */}
          <div className="card-swap-wrapper flex-1 relative w-full" style={{ opacity: 0 }}>
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
              <CardSwap
                width={420}
                height={340}
                cardDistance={55}
                verticalDistance={65}
                delay={4000}
                pauseOnHover={false}
                skewAmount={5}
                easing="elastic"
              >
                {PROJECTS.map((project, i) => (
                  <Card key={i}>
                    {/* Card interior */}
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      {/* Background image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        draggable={false}
                      />

                      {/* Gradient overlay */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t",
                          project.gradient
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Card content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <span className="text-accent-yellow font-display text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] uppercase block mb-2">
                          {project.category}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-black tracking-tight text-off-white leading-tight mb-1">
                          {project.title}
                        </h3>
                        <p className="text-off-white/50 text-xs sm:text-sm font-sans leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Top-right card index badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                        <span className="text-off-white/40 font-display text-xs font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>

      {/* White Torn Paper Edge Divider — with solid black mask extending downwards to hide all cards */}
      <div className="relative w-full z-10 pointer-events-none select-none -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            className="w-full h-9 sm:h-11 md:h-13 lg:h-15 block"
          >
            <defs>
              <filter id="torn-paper-ribbon-shadow" x="-5%" y="-30%" width="110%" height="180%">
                <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.45" />
              </filter>
            </defs>
            <path
              d="M0,13.3 L8,17.7 L16,11.1 L24,16.6 L32,9.8 L40,14.5 L48,11.5 L56,12.1 L64,8.3 L72,10.4 L80,12.5 L88,9.2 L96,12.2 L104,9.5 L112,13.6 L120,10.5 L128,15.5 L136,12.5 L144,16 L152,11.2 L160,14.7 L168,13.2 L176,13.8 L184,14.3 L192,13.3 L200,16.2 L208,9.5 L216,13.9 L224,10.3 L232,12.6 L240,9.8 L248,9.4 L256,4.7 L264,9.9 L272,9.3 L280,3.6 L288,5.2 L296,2.4 L304,5.9 L312,0.3 L320,6.4 L328,2.4 L336,4.8 L344,1 L352,6.4 L360,2.4 L368,5.5 L376,5 L384,4.9 L392,5.8 L400,3.2 L408,9.4 L416,6.7 L424,8.9 L432,7.6 L440,10.2 L448,7.8 L456,10.3 L464,7.4 L472,8.4 L480,10.2 L488,4.3 L496,10.6 L504,5.9 L512,9.1 L520,6.2 L528,7.5 L536,2.8 L544,8.6 L552,4.4 L560,8.9 L568,5 L576,9 L584,8.2 L592,5.1 L600,8.5 L608,7.9 L616,10.9 L624,7.3 L632,12.9 L640,11.6 L648,16 L656,10.5 L664,17.9 L672,11.8 L680,14.3 L688,18.4 L696,14.4 L704,17.5 L712,15.5 L720,16.9 L728,14.4 L736,16.4 L744,14.4 L752,16.8 L760,14.1 L768,17 L776,12.8 L784,11.3 L792,14 L800,9.8 L808,15 L816,9.4 L824,12.7 L832,10.2 L840,12.6 L848,11.6 L856,14.9 L864,11.2 L872,15.6 L880,10 L888,11.6 L896,17.2 L904,14.4 L912,18.1 L920,12.3 L928,18 L936,14.5 L944,15.2 L952,12.9 L960,14.6 L968,12.3 L976,14 L984,11.8 L992,9.2 L1000,12.3 L1008,7.5 L1016,11.9 L1024,7.3 L1032,7.7 L1040,4.1 L1048,7.7 L1056,2.5 L1064,5.9 L1072,1.3 L1080,4.3 L1088,1.7 L1096,1.7 L1104,7.1 L1112,1.4 L1120,5.7 L1128,2 L1136,5.5 L1144,5.2 L1152,9.4 L1160,5.6 L1168,9.4 L1176,4.9 L1184,11.2 L1192,9.9 L1200,5.9 L1208,10.5 L1216,7.1 L1224,7.8 L1232,6.4 L1240,8.2 L1248,3.9 L1256,6.9 L1264,3.9 L1272,5.4 L1280,3.2 L1288,6.9 L1296,5.4 L1304,1.1 L1312,7 L1320,1.8 L1328,5.7 L1336,4.5 L1344,7.7 L1352,4.8 L1360,8.7 L1368,6.1 L1376,9 L1384,7.9 L1392,10.7 L1400,13.3 L1408,9.2 L1416,13.4 L1424,11.7 L1432,16 L1440,12.4 L1440,29.6 L1432,26.2 L1424,27.6 L1416,24.1 L1408,29.6 L1400,24 L1392,26.3 L1384,25.3 L1376,28.7 L1368,25.9 L1360,23.4 L1352,28 L1344,23.6 L1336,28.5 L1328,27.8 L1320,31.6 L1312,27.8 L1304,30.5 L1296,29 L1288,33.4 L1280,30.9 L1272,32.9 L1264,33.3 L1256,30.5 L1248,34.2 L1240,31.7 L1232,35.6 L1224,31.7 L1216,34.4 L1208,31 L1200,32.8 L1192,31.1 L1184,33.9 L1176,28.6 L1168,30.6 L1160,30.4 L1152,25.5 L1144,30.7 L1136,24.8 L1128,28.9 L1120,24.3 L1112,27.3 L1104,24.8 L1096,25.4 L1088,22.4 L1080,27.1 L1072,23.3 L1064,23 L1056,26.3 L1048,25.6 L1040,27.3 L1032,25 L1024,27.9 L1016,25.7 L1008,27.5 L1000,26.3 L992,27.1 L984,26.6 L976,27.2 L968,22.4 L960,23.1 L952,26.8 L944,22.2 L936,23.6 L928,22.1 L920,24.7 L912,19.4 L904,20.8 L896,18.5 L888,19.4 L880,17 L872,18.6 L864,15.3 L856,15.9 L848,21 L840,14.8 L832,19.4 L824,15.7 L816,20.1 L808,19 L800,23.7 L792,19.9 L784,24.4 L776,21 L768,25.7 L760,21.4 L752,23.1 L744,26.6 L736,23.7 L728,29.2 L720,24 L712,27.6 L704,26.2 L696,28.5 L688,25.8 L680,26.1 L672,24.1 L664,25.6 L656,24 L648,22.7 L640,26.1 L632,21.8 L624,26.6 L616,24 L608,25.6 L600,22.3 L592,28.6 L584,24.4 L576,29.5 L568,24.9 L560,30.5 L552,29.2 L544,27.2 L536,34.1 L528,27.9 L520,33.1 L512,30 L504,35.7 L496,32.3 L488,36.7 L480,31.2 L472,36.6 L464,30.6 L456,36.8 L448,33.3 L440,31.5 L432,34.4 L424,30.8 L416,30.8 L408,29.3 L400,29.8 L392,25.6 L384,28.7 L376,26.8 L368,28.9 L360,25.6 L352,29.5 L344,28.8 L336,24.4 L328,28.5 L320,25.3 L312,27.7 L304,25.2 L296,28.4 L288,25 L280,28.4 L272,27.2 L264,31.1 L256,26.9 L248,29.9 L240,28.4 L232,25.1 L224,27.6 L216,24.1 L208,29.8 L200,25.7 L192,26.7 L184,21.8 L176,24.2 L168,20.3 L160,23.9 L152,18 L144,19.3 L136,20.4 L128,16.5 L120,19.7 L112,16.8 L104,18.3 L96,15.6 L88,21.4 L80,17.8 L72,22.1 L64,16.8 L56,22.8 L48,18.6 L40,19.6 L32,22.5 L24,22.1 L16,23.6 L8,23.3 L0,24.5 Z"
              fill="#FFFFFF"
              filter="url(#torn-paper-ribbon-shadow)"
            />
            {/* Solid black under-fill starting directly from the bottom torn line */}
            <path
              d="M0,24.5 L8,23.3 L16,23.6 L24,22.1 L32,22.5 L40,19.6 L48,18.6 L56,22.8 L64,16.8 L72,22.1 L80,17.8 L88,21.4 L96,15.6 L104,18.3 L112,16.8 L120,19.7 L128,16.5 L136,20.4 L144,19.3 L152,18 L160,23.9 L168,20.3 L176,24.2 L184,21.8 L192,26.7 L200,25.7 L208,29.8 L216,24.1 L224,27.6 L232,25.1 L240,28.4 L248,29.9 L256,26.9 L264,31.1 L272,27.2 L280,28.4 L288,25 L296,28.4 L304,25.2 L312,27.7 L320,25.3 L328,28.5 L336,24.4 L344,28.8 L352,29.5 L360,25.6 L368,28.9 L376,26.8 L384,28.7 L392,25.6 L400,29.8 L408,29.3 L416,30.8 L424,30.8 L432,34.4 L440,31.5 L448,33.3 L456,36.8 L464,30.6 L472,36.6 L480,31.2 L488,36.7 L496,32.3 L504,35.7 L512,30 L520,33.1 L528,27.9 L536,34.1 L544,27.2 L552,29.2 L560,30.5 L568,24.9 L576,29.5 L584,24.4 L592,28.6 L600,22.3 L608,25.6 L616,24 L624,26.6 L632,21.8 L640,26.1 L648,22.7 L656,24 L664,25.6 L672,24.1 L680,26.1 L688,25.8 L696,28.5 L704,26.2 L712,27.6 L720,24 L728,29.2 L736,23.7 L744,26.6 L752,23.1 L760,21.4 L768,25.7 L776,21 L784,24.4 L792,19.9 L800,23.7 L808,19 L816,20.1 L824,15.7 L832,19.4 L840,14.8 L848,21 L856,15.9 L864,15.3 L872,18.6 L880,17 L888,19.4 L896,18.5 L904,20.8 L912,19.4 L920,24.7 L928,22.1 L936,23.6 L944,22.2 L952,26.8 L960,23.1 L968,22.4 L976,27.2 L984,26.6 L992,27.1 L1000,26.3 L1008,27.5 L1016,25.7 L1024,27.9 L1032,25 L1040,27.3 L1048,25.6 L1056,26.3 L1064,23 L1072,23.3 L1080,27.1 L1088,22.4 L1096,25.4 L1104,24.8 L1112,27.3 L1120,24.3 L1128,28.9 L1136,24.8 L1144,30.7 L1152,25.5 L1160,30.4 L1168,30.6 L1176,28.6 L1184,33.9 L1192,31.1 L1200,32.8 L1208,31 L1216,34.4 L1224,31.7 L1232,35.6 L1224,31.7 L1216,34.4 L1208,31 L1200,32.8 L1192,31.1 L1184,33.9 L1176,28.6 L1168,30.6 L1160,30.4 L1152,25.5 L1144,30.7 L1136,24.8 L1128,28.9 L1120,24.3 L1112,27.3 L1104,24.8 L1096,25.4 L1088,22.4 L1080,27.1 L1072,23.3 L1064,23 L1056,26.3 L1048,25.6 L1040,27.3 L1032,25 L1024,27.9 L1016,25.7 L1008,27.5 L1000,26.3 L992,27.1 L984,26.6 L976,27.2 L968,22.4 L960,23.1 L952,26.8 L944,22.2 L936,23.6 L928,22.1 L920,24.7 L912,19.4 L904,20.8 L896,18.5 L888,19.4 L880,17 L872,18.6 L864,15.3 L856,15.9 L848,21 L840,14.8 L832,19.4 L824,15.7 L816,20.1 L808,19 L800,23.7 L792,19.9 L784,24.4 L776,21 L768,25.7 L760,21.4 L752,23.1 L744,26.6 L736,23.7 L728,29.2 L720,24 L712,27.6 L704,26.2 L696,28.5 L688,25.8 L680,26.1 L672,24.1 L664,25.6 L656,24 L648,22.7 L640,26.1 L632,21.8 L624,26.6 L616,24 L608,25.6 L600,22.3 L592,28.6 L584,24.4 L576,29.5 L568,24.9 L560,30.5 L552,29.2 L544,27.2 L536,34.1 L528,27.9 L520,33.1 L512,30 L504,35.7 L496,32.3 L488,36.7 L480,31.2 L472,36.6 L464,30.6 L456,36.8 L448,33.3 L440,31.5 L432,34.4 L424,30.8 L416,30.8 L408,29.3 L400,29.8 L392,25.6 L384,28.7 L376,26.8 L368,28.9 L360,25.6 L352,29.5 L344,28.8 L336,24.4 L328,28.5 L320,25.3 L312,27.7 L304,25.2 L296,28.4 L288,25 L280,28.4 L272,27.2 L264,31.1 L256,26.9 L248,29.9 L240,28.4 L232,25.1 L224,27.6 L216,24.1 L208,29.8 L200,25.7 L192,26.7 L184,21.8 L176,24.2 L168,20.3 L160,23.9 L152,18 L144,19.3 L136,20.4 L128,16.5 L120,19.7 L112,16.8 L104,18.3 L96,15.6 L88,21.4 L80,17.8 L72,22.1 L64,16.8 L56,22.8 L48,18.6 L40,19.6 L32,22.5 L24,22.1 L16,23.6 L8,23.3 L0,24.5 L0,40 L1440,40 L1440,29.6 Z"
              fill="#000000"
            />
          </svg>
        </div>
        {/* Solid black backdrop extending down to completely mask any cards below the border */}
        <div className="w-full h-24 sm:h-28 md:h-32 bg-black -mt-[1px]" />
      </div>
    </section>
  );
}

export default CardSwapSection;
