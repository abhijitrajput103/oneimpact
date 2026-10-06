"use client";

import React from "react";
import { useCursor } from "@/hooks/useCursor";

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function FooterBottom() {
  const { setCursorType, resetCursor } = useCursor();
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 mt-6 sm:pt-8 sm:mt-8 border-t border-white/[0.04] gap-4">
      {/* Left: copyright + meta */}
      <div className="flex items-center gap-6">
        <span className="font-sans text-[10px] sm:text-[11px] text-off-white/30 tracking-wider">
          &copy; {currentYear} One Impact
        </span>
        <span className="hidden md:inline font-sans text-[11px] text-off-white/20">
          IST UTC+5:30
        </span>
      </div>

      {/* Right: social links */}
      <div className="flex items-center gap-3 sm:gap-5">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[9px] sm:text-[10px] font-bold tracking-widest text-off-white/30 hover:text-off-white uppercase transition-colors duration-300 cursor-none"
            onMouseEnter={() => setCursorType("hover")}
            onMouseLeave={resetCursor}
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterBottom;
