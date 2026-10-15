"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Loader } from "@/components/ui/Loader";
import { GlassBreakIntro } from "@/components/intro/GlassBreakIntro";
import { Hero } from "@/components/hero/Hero";
import { Showreel } from "@/components/showroom/Showreel";
import { AboutBanner } from "@/components/showroom/AboutBanner";
import { CardSwapSection } from "@/components/showroom/CardSwapSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

/** Detect touch-primary devices */
function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [introActive, setIntroActive] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Skip GlassBreakIntro entirely on mobile — only show scratch-to-reveal hero
      const mobile = isTouchDevice();
      const hasSeenIntro = sessionStorage.getItem("oneimpact-intro") === "true";

      if (hasSeenIntro || mobile) {
        requestAnimationFrame(() => {
          setIntroActive(false);
        });
        // Mark as seen so it's skipped on refresh too
        if (mobile) {
          sessionStorage.setItem("oneimpact-intro", "true");
        }
      }
    }
  }, []);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          {introActive && (
            <GlassBreakIntro onComplete={() => setIntroActive(false)} />
          )}

          <Navbar />

          <main className="flex-grow">
            {/* Interactive Fullscreen Hero */}
            <Hero />

            {/* Showreel Portfolio Section */}
            <Showreel />

            {/* About Banner + Client Logos */}
            <AboutBanner />

            {/* Featured Projects Card Swap */}
            <CardSwapSection />

            {/* Project Inquiry & Contact Form Section */}
            <ContactFormSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
