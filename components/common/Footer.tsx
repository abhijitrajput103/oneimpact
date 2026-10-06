"use client";

import { FooterHeadline } from "@/components/footer/FooterHeadline";
import { StickerPlayground } from "@/components/footer/StickerPlayground";
import { FooterBottom } from "@/components/footer/FooterBottom";

export function Footer() {
  return (
    <footer className="bg-black pt-2 pb-6 md:pt-6 md:pb-12 mt-auto select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
       
        {/* Large display headline */}
        <FooterHeadline />

        {/* Interactive sticker physics playground */}
        <StickerPlayground />

        {/* Bottom copyright + social bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
