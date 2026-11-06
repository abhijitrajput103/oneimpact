"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

/**
 * Origin Story — matches SweetTape's scrolling sections.
 * Black background with massive white text, scattered work images as collage.
 * "ROWS OF AGENCIES" → "ENDLESS PROMISES" → "SAME PLAIN STRATEGIES"
 */
export function AboutOriginStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      // Number counter labels
      const numbers = el.querySelectorAll(".section-number");
      gsap.fromTo(
        numbers,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );

      // Large headline words
      const words = el.querySelectorAll(".origin-word");
      if (words.length > 0) {
        gsap.fromTo(
          words,
          { y: "130%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.0,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 78%", once: true },
          }
        );
      }

      // Body text
      const paras = el.querySelectorAll(".origin-para");
      gsap.fromTo(
        paras,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: el.querySelector(".origin-body"), start: "top 85%", once: true },
        }
      );

      // Floating image reveals
      el.querySelectorAll(".floating-img").forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: 40, opacity: 0, rotate: (i % 2 === 0 ? -5 : 5) },
          {
            y: 0,
            opacity: 1,
            rotate: (i % 2 === 0 ? -3 : 4),
            duration: 1,
            ease: "power3.out",
            delay: 0.2 + i * 0.15,
            scrollTrigger: { trigger: img, start: "top 90%", once: true },
          }
        );
      });

      // Stats
      gsap.fromTo(
        el.querySelectorAll(".stat-item"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: el.querySelector(".stats-row"), start: "top 88%", once: true },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Giant two-line headline — like Sweet Tape's "THREE GENERATION / ONE SHARED BELIEF" */}
        <div className="relative mb-16 sm:mb-24 md:mb-32">
          {/* Floating polaroid images around the headline */}
          <div
            className="floating-img absolute top-[-5%] right-[2%] z-10 hidden lg:block"
            style={{ width: "clamp(140px, 14vw, 220px)", opacity: 0 }}
          >
            <div style={{ border: "4px solid white", borderRadius: "6px", overflow: "hidden", boxShadow: "4px 6px 24px rgba(0,0,0,0.4)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-hero-team.jpg" alt="Team" className="w-full aspect-[4/3] object-cover" draggable={false} />
            </div>
          </div>

          <div
            className="floating-img absolute bottom-[-10%] left-[60%] z-10 hidden lg:block"
            style={{ width: "clamp(120px, 12vw, 180px)", opacity: 0 }}
          >
            <div style={{ border: "4px solid white", borderRadius: "6px", overflow: "hidden", boxShadow: "4px 6px 24px rgba(0,0,0,0.4)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-creative-process.jpg" alt="Process" className="w-full aspect-[4/3] object-cover" draggable={false} />
            </div>
          </div>

          <h2 className="font-display font-black uppercase leading-[0.88] tracking-tighter">
            <span
              className="block flex flex-wrap gap-x-[0.2em]"
              style={{ fontSize: "clamp(3rem, 12vw, 10rem)", color: "#FAF9F6" }}
            >
              {"ONE TEAM".split(" ").map((word, i) => (
                <span key={`a-${i}`} className="relative inline-block overflow-hidden py-1">
                  <span className="origin-word inline-block" style={{ opacity: 0 }}>{word}</span>
                </span>
              ))}
            </span>
            <span
              className="block flex flex-wrap gap-x-[0.2em]"
              style={{ fontSize: "clamp(3rem, 12vw, 10rem)", color: "#DA9F37" }}
            >
              {"ONE BELIEF".split(" ").map((word, i) => (
                <span key={`b-${i}`} className="relative inline-block overflow-hidden py-1">
                  <span className="origin-word inline-block" style={{ opacity: 0 }}>{word}</span>
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Narrative text */}
        <div className="origin-body max-w-3xl space-y-6 sm:space-y-8 mb-16 sm:mb-24">
          <p
            className="origin-para font-sans text-lg sm:text-xl md:text-2xl leading-relaxed font-light"
            style={{ color: "rgba(250, 249, 246, 0.85)", opacity: 0 }}
          >
            We started One Impact in 2020 with a bold, simple idea — brands
            deserve more than just templates and trends. They deserve{" "}
            <span className="font-semibold" style={{ color: "#DA9F37" }}>identity</span>,{" "}
            <span className="font-semibold" style={{ color: "#DA9F37" }}>soul</span>, and
            stories that stick.
          </p>

          <p
            className="origin-para font-sans text-base sm:text-lg leading-relaxed"
            style={{ color: "rgba(250, 249, 246, 0.5)", opacity: 0 }}
          >
            From a scrappy two-person team in Mumbai to a full-stack creative
            agency trusted by startups, enterprises, and government bodies alike —
            our journey has been fueled by relentless curiosity and an
            unapologetic obsession with craft.
          </p>
        </div>

        {/* Stats row */}
        <div className="stats-row grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
          {[
            { number: "5+", label: "Years of Impact" },
            { number: "50+", label: "Brands Served" },
            { number: "200+", label: "Campaigns Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="stat-item" style={{ opacity: 0 }}>
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black" style={{ color: "#DA9F37" }}>
                {stat.number}
              </div>
              <div className="font-sans text-xs sm:text-sm uppercase tracking-widest mt-1" style={{ color: "rgba(250,249,246,0.4)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
