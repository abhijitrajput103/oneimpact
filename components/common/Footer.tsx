"use client";

import { FooterHeadline } from "@/components/footer/FooterHeadline";
import { StickerPlayground } from "@/components/footer/StickerPlayground";
import { FooterBottom } from "@/components/footer/FooterBottom";

export function Footer() {
  return (
    <footer className="bg-black pt-2 pb-6 md:pt-6 md:pb-12 mt-auto select-none">
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
       
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
