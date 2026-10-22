"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useCursor } from "@/hooks/useCursor";
import { MagneticButton } from "@/components/ui/MagneticButton";

const SERVICE_LINKS = [
  { label: "SEO Services", href: "/seo" },
  { label: "Social Media Marketing Services", href: "/social-media-marketing" },
];

export function Navbar() {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { setCursorType, resetCursor } = useCursor();

  const handleServicesEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

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

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

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
          {/* Branding Logo — Official OneImpact logo image */}
          <MagneticButton strength={0.2} textStrength={0.1}>
            <Link
              href="/"
              className="select-none cursor-none block py-0.5 group text-black"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/LOGO/oneimpact-logo.webp"
                alt="One Impact"
                className="h-6 sm:h-7 md:h-8 w-auto object-contain"
              />
            </Link>
          </MagneticButton>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 sm:gap-7 md:gap-8">
            <a
              href="/#showreel"
              className="font-display text-[11px] sm:text-xs font-black tracking-widest text-black/85 hover:text-black uppercase transition-all duration-300 cursor-none relative py-1 group"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              <span>Work</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
            </a>

            <a
              href="/#card-swap"
              className="font-display text-[11px] sm:text-xs font-black tracking-widest text-black/85 hover:text-black uppercase transition-all duration-300 cursor-none relative py-1 group"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              <span>Showroom</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
            </a>

            {/* Services with Clean Matching Submenu */}
            <div
              className="relative py-1"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="font-display text-[11px] sm:text-xs font-black tracking-widest text-black/85 hover:text-black uppercase transition-all duration-300 cursor-none relative inline-flex items-center gap-1.5 py-1"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={resetCursor}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "transition-transform duration-300 ease-out",
                    isServicesOpen ? "rotate-180" : ""
                  )}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
              </button>

              {/* Submenu Dropdown Panel */}
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: `translateX(-50%) translateY(${isServicesOpen ? "8px" : "-4px"})`,
                  opacity: isServicesOpen ? 1 : 0,
                  pointerEvents: isServicesOpen ? "auto" : "none",
                  transition: "opacity 220ms ease, transform 220ms ease",
                  zIndex: 60,
                }}
              >
                <div
                  style={{
                    background: "#DA9F37",
                    border: "1.5px solid rgba(0, 0, 0, 0.14)",
                    borderRadius: "18px",
                    padding: "6px",
                    minWidth: "290px",
                    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.28)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                  }}
                >
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="font-display text-[11px] sm:text-xs font-black tracking-widest text-black/90 hover:text-[#DA9F37] hover:bg-black uppercase transition-all duration-200 cursor-none px-4 py-2.5 rounded-xl block text-center whitespace-nowrap"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={resetCursor}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/#about-banner"
              className="font-display text-[11px] sm:text-xs font-black tracking-widest text-black/85 hover:text-black uppercase transition-all duration-300 cursor-none relative py-1 group"
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              <span>About</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
            </a>
          </nav>

          {/* Right Area: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-display text-[10px] sm:text-xs font-black tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 text-[#DA9F37] !text-[#DA9F37] bg-black hover:bg-black/85"
              style={{ color: "#DA9F37" }}
              onMouseEnter={() => setCursorType("hover")}
              onMouseLeave={resetCursor}
            >
              <span style={{ color: "#DA9F37" }}>CONTACT</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#DA9F37" }}>→</span>
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
        <div className="w-full max-w-sm flex flex-col items-center gap-4 sm:gap-5 text-center">
          <span className="text-black/60 font-display text-xs font-black tracking-widest uppercase mb-1">
            Navigation
          </span>

          <a
            href="/#showreel"
            onClick={() => setIsMenuOpen(false)}
            className="font-display text-2xl sm:text-3xl font-black tracking-wider text-black hover:text-black/70 uppercase transition-colors duration-300 py-1"
          >
            Work
          </a>

          <a
            href="/#card-swap"
            onClick={() => setIsMenuOpen(false)}
            className="font-display text-2xl sm:text-3xl font-black tracking-wider text-black hover:text-black/70 uppercase transition-colors duration-300 py-1"
          >
            Showroom
          </a>

          {/* Services on Mobile */}
          <div className="w-full flex flex-col items-center py-1">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="font-display text-2xl sm:text-3xl font-black tracking-wider text-black hover:text-black/70 uppercase transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span>Services</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  "transition-transform duration-300",
                  isMobileServicesOpen ? "rotate-180" : ""
                )}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              className={cn(
                "flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 ease-in-out",
                isMobileServicesOpen
                  ? "max-h-36 opacity-100 mt-2.5 mb-1"
                  : "max-h-0 opacity-0 pointer-events-none"
              )}
            >
              <Link
                href="/seo"
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-base sm:text-lg font-bold tracking-wider text-black/85 hover:text-black uppercase py-1"
              >
                SEO Services
              </Link>
              <Link
                href="/social-media-marketing"
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-base sm:text-lg font-bold tracking-wider text-black/85 hover:text-black uppercase py-1"
              >
                Social Media Marketing Services
              </Link>
            </div>
          </div>

          <a
            href="/#about-banner"
            onClick={() => setIsMenuOpen(false)}
            className="font-display text-2xl sm:text-3xl font-black tracking-wider text-black hover:text-black/70 uppercase transition-colors duration-300 py-1"
          >
            About
          </a>

          <div className="w-16 h-[2px] bg-black/20 my-2" />

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-4 rounded-full font-display text-sm font-black tracking-wider uppercase text-[#DA9F37] !text-[#DA9F37] bg-black hover:bg-black/85 transition-transform active:scale-95 text-center shadow-lg"
            style={{ color: "#DA9F37" }}
          >
            GET IN TOUCH →
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
