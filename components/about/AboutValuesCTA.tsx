"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

/**
 * Values CTA — matches SweetTape's closing sections:
 * 1) Scrolling marquee "WE DIDN'T WANT TO BE LOUDER. WE WANTED TO BE"
 * 2) Gold bg section "MORE COLOUR, MORE HEART, AND YES — BETTER TAPE" + CTA button
 */
export function AboutValuesCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      // Marquee
      gsap.fromTo(
        el.querySelector(".marquee-wrap"),
        { opacity: 0 },
        {
          opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );

      // Bridge text
      gsap.fromTo(
        el.querySelector(".bridge-text"),
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: el.querySelector(".bridge-text"), start: "top 88%", once: true },
        }
      );

      // CTA headline
      gsap.fromTo(
        el.querySelector(".cta-headline"),
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: el.querySelector(".cta-headline"), start: "top 82%", once: true },
        }
      );

      // CTA button
      gsap.fromTo(
        el.querySelector(".cta-btn"),
        { scale: 0.85, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)", delay: 0.3,
          scrollTrigger: { trigger: el.querySelector(".cta-headline"), start: "top 82%", once: true },
        }
      );

      // Parallax bg
      const bg = el.querySelector(".parallax-bg");
      if (bg) {
        gsap.fromTo(bg, { y: -30 }, {
          y: 30, ease: "none",
          scrollTrigger: { trigger: el.querySelector(".cta-section"), start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Scrolling marquee strip — gold bg like Sweet Tape's scrolling text */}
      <div className="marquee-wrap w-full overflow-hidden py-5 sm:py-6" style={{ backgroundColor: "#f9d230", opacity: 0 }}>
        <style>{`
          @keyframes valuesMarquee2 {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .values-marquee-track-2 {
            animation: valuesMarquee2 22s linear infinite;
          }
        `}</style>
        <div className="values-marquee-track-2 flex items-center w-max whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-display text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[0.1em] px-6 sm:px-10" style={{ color: "#1A1A1A" }}>
              WE DIDN&apos;T WANT TO BE LOUDER. WE WANTED TO BE
              <span className="inline-block mx-4 sm:mx-6">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* "We believe" bridge */}
      <div className="py-14 sm:py-18 md:py-20 text-center" style={{ backgroundColor: "#050505" }}>
        <p className="bridge-text font-sans text-lg sm:text-xl md:text-2xl font-light italic" style={{ color: "rgba(250,249,246,0.5)", opacity: 0 }}>
          We believe the world is better with
        </p>
      </div>

      {/* Full-bleed CTA — parallax image bg */}
      <div className="cta-section relative py-28 sm:py-36 md:py-44 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/about-results.jpg" alt="" className="parallax-bg absolute inset-0 w-full h-[120%] object-cover -top-[10%]" draggable={false} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(5, 5, 5, 0.75)" }} />

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-center">
          <h2
            className="cta-headline font-display font-black uppercase leading-[1.05] tracking-tight mb-10 sm:mb-14"
            style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)", color: "#FAF9F6", opacity: 0 }}
          >
            MORE <span style={{ color: "#f9d230" }}>CREATIVITY</span>,
            <br />
            MORE <span style={{ color: "#f9d230" }}>HEART</span>, AND
            <br />
            YES — <span style={{ color: "#f9d230" }}>BETTER BRANDS</span>.
          </h2>

          <div className="cta-btn" style={{ opacity: 0 }}>
            <a
              href="/#showreel"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display text-sm sm:text-base font-black tracking-[0.18em] uppercase transition-all duration-300 hover:scale-[1.04] active:scale-95"
              style={{ backgroundColor: "#f9d230", color: "#1A1A1A", boxShadow: "0 8px 36px rgba(249, 210, 48,0.35)" }}
            >
              <span>EXPLORE OUR WORK</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
