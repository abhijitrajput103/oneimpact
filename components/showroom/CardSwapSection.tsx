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

      <div className="relative z-[5] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
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

      {/* Single Upper Torn Paper Cut Edge Divider — Pure White Crisp Torn Line */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none select-none mt-8 sm:mt-12 md:mt-16 -mb-1">
        <svg
          viewBox="140 455 2068 40"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-9 md:h-12 block scale-x-105"
        >
          <path
            d="M152.98,471.19s1.79,2.06,3.14,2.06,1.79,4.11,3.58,5.14c1.79,1.03,2.69-3.6,3.14-5.66.45-2.06,5.82,0,8.06,1.03,2.24,1.03,4.48-.51,6.27-1.54,1.79-1.03,4.03.51,4.93,2.57.9,2.06,7.61-2.06,8.51-4.11.9-2.06,5.37-2.57,5.37-2.57h7.61c2.69,0,11.2,3.6,13.88,2.57,2.69-1.03,8.96-3.6,11.2-4.11,2.24-.51,10.3,4.11,12.09,4.11s7.61,1.03,8.96-1.54c1.34-2.57,3.58-2.06,5.82.51,2.24,2.57,6.72,1.54,8.06,1.03,1.34-.51,6.72,3.08,6.72,3.08l4.48,3.09s8.06-.51,11.19-1.54c3.14-1.03,6.27,5.14,7.61,5.14s3.13-3.09,5.37-3.09,4.93-3.6,5.37-8.23c.45-4.63,3.13-.51,6.72,1.54,3.58,2.06,4.93-5.14,6.27-6.17,1.34-1.03,6.43-1.64,9.84-2.26,3.41-.62,5.74.82,10.4,2.88,4.66,2.06,5.56-3.29,6.64-3.5,1.08-.21,3.05-.21,4.48,0,1.44.21,3.77.82,5.92-1.03,2.15-1.85,3.23-2.27,5.38-3.09,2.15-.82,4.84-.41,6.82-2.26,1.97-1.85,9.15-3.09,9.68-3.91.54-.82,2.15-.21,3.41.62,1.26.82,3.23-.21,5.74-1.24,2.51-1.03,4.48-.82,6.46-.62,1.97.21,5.2,1.24,8.07,1.65,2.87.41,6.82-2.27,6.82-2.27,0,0,2.87-.82,3.59-1.44.72-.62,3.05-1.24,4.84-1.44,1.79-.21,5.56.82,7.35.82s4.48-.41,6.46-.62c1.97-.21,3.23,3.5,4.66,4.53,1.43,1.03,9.86.41,9.86.41,0,0,2.15,1.44,3.41,1.24,1.26-.21,2.51,1.65,4.12,2.27,1.61.62,3.23-.82,5.38-1.44,2.15-.62,6.99,3.09,8.61,3.91,1.61.82,4.66.21,5.74-1.44,1.08-1.65,4.66-3.71,6.1-3.5s5.02-.62,5.92-3.5c.9-2.88,4.84-1.65,6.28-.21,1.43,1.44,2.87,1.44,4.48.82,1.61-.62,7.35.62,9.33,1.44,1.97.82,5.2-2.06,6.82-3.5,1.61-1.44,5.02,2.88,5.02,2.88,0,0,3.77.82,5.92.82s3.95,1.24,5.56.62c1.61-.62,4.84-2.27,6.46-3.71,1.61-1.44,4.66-1.65,6.46-2.06,1.79-.41,4.3,1.03,6.46,2.68,2.15,1.65,5.56-.82,7.35-.82s4.3,3.5,5.38,4.53c1.08,1.03,8.79-.41,10.4-.41s1.08,2.06,2.33,3.71c1.26,1.65,3.59.41,5.92-.62,2.33-1.03,5.2-2.27,6.46-2.47,1.26-.21,4.3,2.06,5.56,2.88,1.26.82,3.05-1.44,4.66-2.68,1.61-1.24,2.51,2.47,3.59,4.74,1.08,2.27,6.64.41,8.61,1.44,1.97,1.03,3.23-3.91,4.13-4.53.9-.62,4.3,3.09,5.02,3.09s1.79-2.68,2.87-3.71c1.08-1.03,1.79,2.06,3.59,3.91,1.79,1.85,5.56-1.03,8.43-1.65,2.87-.62,2.69,3.09,5.74,4.53,3.05,1.44,2.33-2.88,3.95-2.47,1.61.41,2.87,3.09,3.59,4.32.72,1.24,1.44-.41,2.87-.62,1.44-.21,4.66-.82,5.56-1.03s2.51,1.03,3.59,2.47c1.08,1.44,5.38-2.27,5.87-2.27,0,0,0,.02,0,.02,0-.01,0-.03,0-.03.49,0,4.79,3.71,5.87,2.27,1.08-1.44,2.69-2.68,3.59-2.47s4.12.82,5.56,1.03c1.43.21,2.15,1.85,2.87.62.72-1.24,1.97-3.91,3.59-4.32,1.61-.41.9,3.91,3.95,2.47,3.05-1.44,2.87-5.15,5.74-4.53,2.87.62,6.64,3.5,8.43,1.65,1.79-1.85,2.51-4.94,3.59-3.91,1.08,1.03,2.15,3.71,2.87,3.71s4.12-3.71,5.02-3.09c.9.62,2.15,5.56,4.13,4.53,1.97-1.03,7.53.82,8.61-1.44,1.08-2.27,1.97-5.97,3.59-4.74,1.61,1.24,3.41,3.5,4.66,2.68,1.26-.82,4.3-3.09,5.56-2.88,1.26.21,4.12,1.44,6.46,2.47,2.33,1.03,4.66,2.26,5.92.62,1.26-1.65.72-3.71,2.33-3.71s9.33,1.44,10.4.41c1.08-1.03,3.59-4.53,5.38-4.53s5.2,2.47,7.35.82c2.15-1.65,4.66-3.09,6.46-2.68,1.79.41,4.84.62,6.46,2.06,1.61,1.44,4.84,3.09,6.46,3.71,1.61.62,3.41-.62,5.56-.62s5.92-.82,5.92-.82c0,0,3.41-4.32,5.02-2.88,1.61,1.44,4.84,4.32,6.82,3.5,1.97-.82,7.71-2.06,9.33-1.44,1.61.62,3.05.62,4.48-.82,1.43-1.44,5.38-2.68,6.28.21.9,2.88,4.48,3.71,5.92,3.5s5.02,1.85,6.1,3.5c1.08,1.65,4.13,2.27,5.74,1.44,1.61-.82,6.46-4.53,8.61-3.91,2.15.62,3.77,2.06,5.38,1.44,1.61-.62,2.87-2.47,4.13-2.27,1.26.21,3.41-1.24,3.41-1.24,0,0,8.43.62,9.86-.41,1.44-1.03,2.69-4.74,4.66-4.53,1.97.21,4.66.62,6.46.62s5.56-1.03,7.35-.82c1.79.21,4.13.82,4.84,1.44.72.62,3.59,1.44,3.59,1.44,0,0,3.95,2.68,6.81,2.26,2.87-.41,6.1-1.44,8.07-1.65,1.97-.21,3.95-.41,6.46.62,2.51,1.03,4.48,2.06,5.74,1.24s2.87-1.44,3.41-.62c.54.82,7.71,2.06,9.68,3.91,1.97,1.85,4.66,1.44,6.82,2.26,2.15.82,3.23,1.24,5.38,3.09,2.15,1.85,4.48,1.24,5.92,1.03,1.43-.21,3.41-.21,4.48,0,1.08.21,1.97,5.56,6.64,3.5,4.66-2.06,7-3.5,10.4-2.88,3.41.62,8.5,1.23,9.84,2.26,1.34,1.03,2.69,8.23,6.27,6.17,3.58-2.06,6.27-6.17,6.72-1.54.45,4.63,3.13,8.23,5.37,8.23s4.03,3.09,5.37,3.09,4.48-6.17,7.61-5.14c3.13,1.03,11.19,1.54,11.19,1.54l4.48-3.09s5.37-3.6,6.72-3.08c1.34.51,5.82,1.54,8.06-1.03,2.24-2.57,4.48-3.09,5.82-.51,1.34,2.57,7.16,1.54,8.96,1.54s9.85-4.63,12.09-4.11c2.24.51,8.51,3.09,11.2,4.11,2.69,1.03,11.2-2.57,13.88-2.57h7.61s4.48.51,5.37,2.57c.89,2.06,7.61,6.17,8.51,4.11.9-2.06,3.14-3.6,4.93-2.57,1.79,1.03,4.03,2.57,6.27,1.54,2.24-1.03,7.61-3.08,8.06-1.03.45,2.06,1.34,6.68,3.13,5.66,1.79-1.03,2.24-5.14,3.58-5.14s3.13-2.05,3.13-2.06v-.03s1.79,2.06,3.14,2.06,1.79,4.11,3.58,5.14c1.79,1.03,2.69-3.6,3.14-5.66.45-2.06,5.82,0,8.06,1.03,2.24,1.03,4.48-.51,6.27-1.54,1.79-1.03,4.03.51,4.93,2.57.9,2.06,7.61-2.06,8.51-4.11.9-2.06,5.37-2.57,5.37-2.57h7.61c2.69,0,11.19,3.6,13.88,2.57,2.69-1.03,8.96-3.6,11.2-4.11,2.24-.51,10.3,4.11,12.09,4.11s7.61,1.03,8.96-1.54c1.34-2.57,3.58-2.06,5.82.51,2.24,2.57,6.72,1.54,8.06,1.03,1.34-.51,6.72,3.08,6.72,3.08l4.48,3.09s8.06-.51,11.2-1.54c3.14-1.03,6.27,5.14,7.61,5.14s3.13-3.09,5.37-3.09,4.93-3.6,5.37-8.23c.45-4.63,3.13-.51,6.72,1.54s4.93-5.14,6.27-6.17c1.34-1.03,6.43-1.64,9.84-2.26,3.41-.62,5.74.82,10.4,2.88,4.66,2.06,5.56-3.3,6.64-3.5,1.08-.21,3.05-.21,4.48,0,1.43.21,3.77.82,5.92-1.03,2.15-1.85,3.23-2.27,5.38-3.09,2.15-.82,4.84-.41,6.82-2.26,1.97-1.85,9.15-3.09,9.68-3.91.54-.82,2.15-.21,3.41.62,1.26.82,3.23-.21,5.74-1.24,2.51-1.03,4.48-.82,6.46-.62,1.97.21,5.2,1.24,8.07,1.65,2.87.41,6.82-2.27,6.82-2.27,0,0,2.87-.82,3.59-1.44.72-.62,3.05-1.24,4.84-1.44,1.79-.21,5.56.82,7.35.82s4.48-.41,6.46-.62c1.97-.21,3.23,3.5,4.66,4.53,1.43,1.03,9.86.41,9.86.41,0,0,2.15,1.44,3.41,1.24,1.26-.21,2.51,1.65,4.12,2.27,1.61.62,3.23-.82,5.38-1.44,2.15-.62,6.99,3.09,8.61,3.91,1.61.82,4.66.21,5.74-1.44,1.08-1.65,4.66-3.71,6.1-3.5,1.43.21,5.02-.62,5.92-3.5.9-2.88,4.84-1.65,6.28-.21,1.43,1.44,2.87,1.44,4.48.82,1.61-.62,7.35.62,9.33,1.44,1.97.82,5.2-2.06,6.82-3.5,1.61-1.44,5.02,2.88,5.02,2.88,0,0,3.77.82,5.92.82s3.95,1.24,5.56.62c1.61-.62,4.84-2.27,6.46-3.71,1.61-1.44,4.66-1.65,6.46-2.06s4.3,1.03,6.46,2.68c2.15,1.65,5.56-.82,7.35-.82s4.3,3.5,5.38,4.53c1.08,1.03,8.79-.41,10.4-.41s1.08,2.06,2.33,3.71c1.26,1.65,3.59.41,5.92-.62,2.33-1.03,5.2-2.27,6.46-2.47,1.26-.21,4.3,2.06,5.56,2.88,1.26.82,3.05-1.44,4.66-2.68,1.61-1.24,2.51,2.47,3.59,4.74,1.08,2.27,6.64.41,8.61,1.44,1.97,1.03,3.23-3.91,4.13-4.53.9-.62,4.3,3.09,5.02,3.09s1.79-2.68,2.87-3.71c1.08-1.03,1.79,2.06,3.59,3.91,1.79,1.85,5.56-1.03,8.43-1.65,2.87-.62,2.69,3.09,5.74,4.53,3.05,1.44,2.33-2.88,3.95-2.47,1.61.41,2.87,3.09,3.59,4.32.72,1.24,1.43-.41,2.87-.62,1.43-.21,4.66-.82,5.56-1.03.9-.21,2.51,1.03,3.59,2.47c1.08,1.44,5.38-2.27,5.87-2.27,0,0,0,.02,0,.02,0-.01,0-.03,0-.03.49,0,4.79,3.71,5.87,2.26,1.08-1.44,2.69-2.68,3.59-2.47.9.21,4.12.82,5.56,1.03,1.43.21,2.15,1.85,2.87.62.72-1.24,1.97-3.91,3.59-4.32,1.61-.41.9,3.91,3.95,2.47,3.05-1.44,2.87-5.15,5.74-4.53,2.87.62,6.64,3.5,8.43,1.65,1.79-1.85,2.51-4.94,3.59-3.91,1.08,1.03,2.15,3.71,2.87,3.71s4.12-3.71,5.02-3.09c.9.62,2.15,5.56,4.12,4.53,1.97-1.03,7.53.82,8.61-1.44,1.08-2.27,1.97-5.97,3.59-4.74,1.61,1.24,3.41,3.5,4.66,2.68,1.26-.82,4.3-3.09,5.56-2.88,1.26.21,4.12,1.44,6.46,2.47s4.66,2.27,5.92.62c1.26-1.65,7.2-3.71,2.33-3.71s9.33,1.44,10.4.41c1.08-1.03,3.59-4.53,5.38-4.53s5.2,2.47,7.35.82c2.15-1.65,4.66-3.09,6.46-2.68,1.79.41,4.84.62,6.46,2.06,1.61,1.44,4.84,3.09,6.46,3.71,1.61.62,3.41-.62,5.56-.62s5.92-.82,5.92-.82c0,0,3.41-4.32,5.02-2.88,1.61,1.44,4.84,4.32,6.82,3.5,1.97-.82,7.71-2.06,9.33-1.44,1.61.62,3.05.62,4.48-.82,1.44-1.44,5.38-2.68,6.28.21.9,2.88,4.48,3.71,5.92,3.5s5.02,1.85,6.1,3.5c1.08,1.65,4.13,2.27,5.74,1.44,1.61-.82,6.46-4.53,8.61-3.91,2.15.62,3.77,2.06,5.38,1.44,1.61-.62,2.87-2.47,4.13-2.27,1.26.21,3.41-1.24,3.41-1.24,0,0,8.43.62,9.86-.41,1.44-1.03,2.69-4.74,4.66-4.53,1.97.21,4.66.62,6.46.62s5.56-1.03,7.35-.82,4.13.82,4.84,1.44c.72.62,3.59,1.44,3.59,1.44,0,0,3.95,2.68,6.81,2.26,2.87-.41,6.1-1.44,8.07-1.65,1.97-.21,3.95-.41,6.46.62,2.51,1.03,4.48,2.06,5.74,1.24s2.87-1.44,3.41-.62c.54.82,7.71,2.06,9.68,3.91,1.97,1.85,4.66,1.44,6.82,2.26,2.15.82,3.23,1.24,5.38,3.09,2.15,1.85,4.48,1.24,5.92,1.03,1.43-.21,3.41-.21,4.48,0,1.08.21,1.97,5.56,6.64,3.5,4.66-2.06,7-3.5,10.4-2.88,3.41.62,8.5,1.23,9.84,2.26,1.34,1.03,2.69,8.23,6.27,6.17,3.58-2.06,6.27-6.17,6.72-1.54.45,4.63,3.13,8.23,5.37,8.23s4.03,3.09,5.37,3.09,4.48-6.17,7.61-5.14c3.13,1.03,11.19,1.54,11.19,1.54l4.48-3.09s5.37-3.6,6.72-3.08c1.34.51,5.82,1.54,8.06-1.03,2.24-2.57,4.48-3.09,5.82-.51,1.34,2.57,7.16,1.54,8.96,1.54s9.85-4.63,12.09-4.11c2.24.51,8.51,3.09,11.2,4.11,2.69,1.03,11.2-2.57,13.88-2.57h7.61s4.48.51,5.37,2.57c.89,2.06,7.61,6.17,8.51,4.11.9-2.06,3.14-3.6,4.93-2.57,1.79,1.03,4.03,2.57,6.27,1.54,2.24-1.03,7.61-3.08,8.06-1.03.45,2.06,1.34,6.68,3.13,5.66,1.79-1.03,2.24-5.14,3.58-5.14s3.13-2.05,3.13-2.06"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

export default CardSwapSection;
