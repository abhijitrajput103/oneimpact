"use client";

import React, { useState, useSyncExternalStore } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { GlassBreakIntro } from "@/components/intro/GlassBreakIntro";
import { Hero } from "@/components/hero/Hero";
import { Showreel } from "@/components/showroom/Showreel";
import { AboutBanner } from "@/components/showroom/AboutBanner";
import { CardSwapSection } from "@/components/showroom/CardSwapSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

const emptySubscribe = () => () => {};

/** Detect mobile/touch-primary devices so desktop intro never runs on mobile */
function isMobileExperience(): boolean {
  if (typeof window === "undefined") return false;
  const isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;
  return window.innerWidth < 768 || (isTouch && window.innerWidth < 1024);
}

function getDesktopIntroSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  if (isMobileExperience()) return false;
  return sessionStorage.getItem("oneimpact-intro") !== "true";
}

export default function Home() {
  const [introDismissed, setIntroDismissed] = useState(false);
  const shouldShowDesktopIntro = useSyncExternalStore(
    emptySubscribe,
    getDesktopIntroSnapshot,
    () => false
  );
  const introActive = shouldShowDesktopIntro && !introDismissed;

  return (
    <div className="flex flex-col min-h-screen">
      {introActive && (
        <GlassBreakIntro onComplete={() => setIntroDismissed(true)} />
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
  );
}
