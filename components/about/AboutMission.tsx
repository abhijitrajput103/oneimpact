"use client";

import React, { useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";

/**
 * Mission section — matches SweetTape's "THAT'S WHY SWEETTAPE EXISTS" +
 * "TO REIMAGINE AN EVERYDAY ESSENTIAL..." sections.
 *
 * Dark background. Services shown as large image cards, not emoji cards.
 * Founder quote with editorial portrait.
 */

const SERVICES = [
  {
    title: "Branding & Identity",
    description: "Visual identities that stand out and resonate.",
    image: "/images/service-v2-branding.webp",
  },
  {
    title: "Social Media",
    description: "Strategy-first content that builds communities.",
    image: "/images/service-v2-social-media.webp",
  },
  {
    title: "SEO & Growth",
    description: "Data-driven optimization for the right audience.",
    image: "/images/service-v2-seo.webp",
  },
  {
    title: "Web Development",
    description: "Premium websites that convert visitors.",
    image: "/images/service-v2-website-development.webp",
  },
  {
    title: "Content & Creative",
    description: "Reels to campaigns — content that captivates.",
    image: "/images/service-v2-content-creative.webp",
  },
  {
    title: "Influencer Marketing",
    description: "Authentic collabs that amplify your reach.",
    image: "/images/service-v2-influencer-marketing.webp",
  },
];

export function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = sectionRef.current;
      if (!el) return;

      // Mission headline
      gsap.fromTo(
        el.querySelector(".mission-headline"),
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.3, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        }
      );

      // Reimagine text
      gsap.fromTo(
        el.querySelector(".reimagine-text"),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: el.querySelector(".reimagine-text"), start: "top 85%", once: true },
        }
      );

      // Service cards
      gsap.fromTo(
        el.querySelectorAll(".service-card"),
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: el.querySelector(".services-grid"), start: "top 86%", once: true },
        }
      );

      // Founder section
      gsap.fromTo(
        el.querySelector(".founder-section"),
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: el.querySelector(".founder-section"), start: "top 85%", once: true },
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
        {/* Mission headline — massive like Sweet Tape */}
        <h2
          className="mission-headline font-display font-black uppercase leading-[1.0] tracking-tight mb-10 sm:mb-14"
          style={{
            color: "#f9d230",
            fontSize: "clamp(2.5rem, 9vw, 7rem)",
            opacity: 0,
          }}
        >
          THAT&apos;S WHY
          <br />
          <span style={{ color: "#FAF9F6" }}>ONE IMPACT</span>
          <br />
          EXISTS.
        </h2>

        {/* "To reimagine" text — like Sweet Tape's secondary statement */}
        <div
          className="reimagine-text max-w-4xl mb-20 sm:mb-28"
          style={{ opacity: 0 }}
        >
          <h3
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug tracking-tight"
            style={{ color: "rgba(250, 249, 246, 0.8)" }}
          >
            TO REIMAGINE HOW BRANDS SHOW UP IN THE WORLD — MORE{" "}
            <span style={{ color: "#f9d230" }}>THOUGHTFUL</span>, MORE{" "}
            <span style={{ color: "#f9d230" }}>EXPRESSIVE</span>, AND FULL OF{" "}
            <span style={{ color: "#f9d230" }}>CHARACTER</span>.
          </h3>
        </div>

        {/* Services grid — real images */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-24 sm:mb-32">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-card group relative rounded-xl overflow-hidden"
              style={{ opacity: 0 }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  draggable={false}
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h4 className="font-display text-lg sm:text-xl font-bold" style={{ color: "#FAF9F6" }}>
                    {service.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm mt-1" style={{ color: "rgba(250,249,246,0.65)" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder quote */}
        <div className="founder-section grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-14 lg:gap-20 items-center" style={{ opacity: 0 }}>
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-founder.jpg"
              alt="Abhijit Rajput — Founder"
              className="w-full h-auto object-cover aspect-[3/4] hover:scale-[1.02] transition-transform duration-700"
              draggable={false}
            />
          </div>

          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            <div className="font-display text-5xl sm:text-6xl leading-none" style={{ color: "#f9d230" }}>&ldquo;</div>
            <blockquote
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight"
              style={{ color: "#FAF9F6" }}
            >
              We didn&apos;t want to be louder.
              <br />
              We wanted to be{" "}
              <em style={{ color: "#f9d230" }}>impossible to ignore</em>.
            </blockquote>
            <div className="flex items-center gap-4 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div className="font-display text-base sm:text-lg font-bold" style={{ color: "#FAF9F6" }}>
                  Abhijit Rajput
                </div>
                <div className="font-sans text-sm" style={{ color: "rgba(250,249,246,0.5)" }}>
                  Founder &amp; Creative Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
