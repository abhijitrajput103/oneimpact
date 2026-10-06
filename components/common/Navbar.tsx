"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useCursor } from "@/hooks/useCursor";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setCursorType, resetCursor } = useCursor();

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Work", href: "/#showreel" },
    { label: "Showroom", href: "/#card-swap" },
    { label: "SEO Services", href: "/seo" },
    { label: "About", href: "/#about-banner" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-main",
          scrollDirection === "down" && isScrolled && !isMenuOpen ? "-translate-y-full" : "translate-y-0",
          isScrolled ? "py-2 px-4 md:px-6" : "py-3.5 px-5 md:px-8 lg:px-12"
        )}
      >
        <div
          className={cn(
            "w-full mx-auto transition-all duration-500 ease-main rounded-full bg-[#DA9F37]/95 backdrop-blur-xl border border-black/10 shadow-md flex items-center justify-between",
            isScrolled ? "max-w-4xl py-1.5 px-5 sm:px-6" : "max-w-6xl py-2 px-5 sm:px-7"
          )}
        >
          {/* Branding Logo — Styled text matching logo font */}
          <MagneticButton strength={0.2} textStrength={0.1}>
            <Link
              href="/"
              className="select-none cursor-none block py-0.5 group text-black"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              <span className="font-serif font-black lowercase text-black tracking-tight text-sm sm:text-base md:text-lg">one</span>
              <span className="font-serif italic font-black lowercase text-black tracking-tight text-sm sm:text-base md:text-lg ml-0.5">impact</span>
              <span className="text-black font-black ml-0.5 inline-block group-hover:scale-125 transition-transform duration-300">.</span>
            </Link>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 sm:gap-7 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-[11px] sm:text-xs font-black tracking-widest text-black/85 hover:text-black uppercase transition-all duration-300 cursor-none relative py-1 group"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={resetCursor}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
              </a>
            ))}
          </nav>

          {/* Right Area: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-display text-[10px] sm:text-xs font-black tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 text-[#DA9F37] bg-black hover:bg-black/85"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              <span>CONTACT</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/10 hover:bg-black/20 text-black flex flex-col items-center justify-center gap-1 transition-all duration-300 active:scale-90"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <span
                className={cn(
                  "w-3.5 h-[2px] bg-black transition-all duration-300 origin-center",
                  isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
                )}
              />
              <span
                className={cn(
                  "w-3.5 h-[2px] bg-black transition-all duration-300",
                  isMenuOpen ? "opacity-0 scale-0" : ""
                )}
              />
              <span
                className={cn(
                  "w-3.5 h-[2px] bg-black transition-all duration-300 origin-center",
                  isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden bg-[#DA9F37]/95 backdrop-blur-2xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out px-6",
          isMenuOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        )}
      >
        <div className="w-full max-w-sm flex flex-col items-center gap-6 text-center">
          <span className="text-black/60 font-display text-xs font-black tracking-widest uppercase mb-2">
            Navigation
          </span>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-2xl sm:text-3xl font-black tracking-wider text-black hover:text-black/70 uppercase transition-colors duration-300 py-1.5"
            >
              {link.label}
            </a>
          ))}

          <div className="w-16 h-[2px] bg-black/20 my-4" />

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-4 rounded-full font-display text-sm font-black tracking-wider uppercase text-[#DA9F37] bg-black hover:bg-black/85 transition-transform active:scale-95 text-center shadow-lg"
          >
            GET IN TOUCH →
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
