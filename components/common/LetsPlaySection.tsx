"use client";

import React from "react";
import { FooterHeadline } from "@/components/footer/FooterHeadline";
import { StickerPlayground } from "@/components/footer/StickerPlayground";

interface LetsPlaySectionProps {
  headline?: string;
  className?: string;
}

export function LetsPlaySection({
  headline = "Let's play.",
  className = "",
}: LetsPlaySectionProps) {
  return (
    <section
      id="lets-play"
      className={`bg-black pt-4 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 select-none relative z-10 ${className}`}
    >
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Large display headline */}
        <FooterHeadline title={headline} />

        {/* Interactive sticker physics playground */}
        <StickerPlayground />
      </div>
    </section>
  );
}

export default LetsPlaySection;
