"use client";

import { useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const GlassBreakIntro = dynamic(
  () => import("@/components/intro/GlassBreakIntro").then((m) => m.GlassBreakIntro),
  { ssr: false }
);

const emptySubscribe = () => () => { };

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
  if (isMobileExperience() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return sessionStorage.getItem("oneimpact-intro") !== "true";
}

export function DesktopIntro() {
  const [introDismissed, setIntroDismissed] = useState(false);
  const shouldShowDesktopIntro = useSyncExternalStore(
    emptySubscribe,
    getDesktopIntroSnapshot,
    () => false
  );
  const introActive = shouldShowDesktopIntro && !introDismissed;

  return introActive ? <GlassBreakIntro onComplete={() => setIntroDismissed(true)} /> : null;
}
