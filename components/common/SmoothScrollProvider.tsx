"use client";

import React, { createContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/gsap";

export const LenisContext = createContext<Lenis | null>(null);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/** Detect touch-primary devices */
function isTouchPrimary(): boolean {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // On mobile/touch devices, skip Lenis entirely — native scroll is smoother
    if (isTouchPrimary()) {
      // Still connect ScrollTrigger to native scroll for GSAP animations
      ScrollTrigger.defaults({ scroller: window });
      ScrollTrigger.refresh();
      return;
    }

    // Desktop: Instantiate Lenis with premium smooth scroll settings
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    requestAnimationFrame(() => {
      setLenis(lenisInstance);
    });

    // Connect ScrollTrigger to update on Lenis scroll
    lenisInstance.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Use GSAP's ticker to drive Lenis updates
    const updateTicker = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
export default SmoothScrollProvider;
