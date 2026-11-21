"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FooterHeadline } from "@/components/footer/FooterHeadline";
const StickerPlayground = dynamic(() => import("@/components/footer/StickerPlayground"));

interface LetsPlaySectionProps {
  headline?: string;
  className?: string;
}

export function LetsPlaySection({
  headline = "Let's play.",
  className = "",
}: LetsPlaySectionProps) {
  const section = useRef<HTMLElement>(null);
  const [nearby, setNearby] = useState(false);
  useEffect(() => {
    if (!section.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearby(true);
        observer.disconnect();
      }
    }, { rootMargin: "800px" });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={section}
      id="lets-play"
      className={`bg-black pt-4 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 select-none relative z-10 ${className}`}
    >
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Large display headline */}
        <FooterHeadline title={headline} />

        {/* Interactive sticker physics playground */}
        {nearby ? <StickerPlayground /> : <div aria-hidden className="mt-6 h-[240px] sm:h-[340px] md:h-[440px]" />}
      </div>
    </section>
  );
}

export default LetsPlaySection;
