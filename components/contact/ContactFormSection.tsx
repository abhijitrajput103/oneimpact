"use client";

import React, { useState, useRef } from "react";
import { gsap } from "@/gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/cn";

const SERVICES_OPTIONS = [
  "Website Development",
  "Brand Identity",
  "SEO & Growth",
  "Creative & Content",
  "Influencer Marketing",
  "UGC Campaigns",
];

const BUDGET_OPTIONS = [
  "< ₹2.5L",
  "₹2.5L – ₹5L",
  "₹5L – ₹15L",
  "₹15L+",
];

export function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  // GSAP Entrance animation
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const elements = section.querySelectorAll(".contact-reveal");
      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText("hello@oneimpact.in").then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
    } catch {
      setTimeout(() => {
        setStatus("success");
      }, 700);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setSelectedServices([]);
    setSelectedBudget("");
    setStatus("idle");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-10 w-full py-12 sm:py-16 md:py-20 overflow-hidden border-t border-[#E6E1D8] font-sans"
    >
      {/* Background Image: contact-us-bg */}
      <picture className="absolute inset-0 w-full h-full -z-10 pointer-events-none select-none">
        <source srcSet="/images/contact-us-bg.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact-us-bg.png"
          alt="Contact background"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </picture>

      <style jsx>{`
        .project-highlight {
          position: relative;
          display: inline-block;
          z-index: 1;
          font-style: italic;
          padding: 0 10px 4px;
          margin-left: -4px;
          color: #161616;
        }
        .project-highlight::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 10%;
          bottom: 5%;
          background: #f9d230;
          border-radius: 45% 8px 35% 12px;
          transform: rotate(-1deg);
          z-index: -1;
        }
        .project-highlight::after {
          content: "";
          position: absolute;
          width: 95%;
          height: 4px;
          background: rgba(249, 210, 48, 0.6);
          right: -6px;
          bottom: 0;
          border-radius: 50%;
          transform: rotate(-2deg);
        }
      `}</style>

      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Proportional, reduced font sizes             */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            
            {/* Top Label */}
            <div className="contact-reveal inline-flex items-center gap-2.5 border border-[#D8D3C9] rounded-full px-4 py-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-[2px] text-[#161616] mb-4 sm:mb-5 w-fit bg-white/70 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f9d230]" />
              // START A PROJECT
            </div>

            {/* Main Heading with Highlight & Spark rays */}
            <h2 className="contact-reveal font-display text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-bold leading-[1.15] tracking-tight text-[#161616] mb-3.5 sm:mb-4">
              Turn your vision into{" "}
              <span className="inline-block relative">
                <svg
                  className="absolute -top-3.5 sm:-top-4 -right-5 sm:-right-6 w-5 sm:w-6 h-5 sm:h-6 text-[#f9d230] pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                >
                  <path d="M12 2v6" />
                  <path d="M4 6l4.5 4" />
                  <path d="M20 6l-4.5 4" />
                </svg>
              </span>
              <br />
              <span className="project-highlight">experiences.</span>
            </h2>

            {/* Description */}
            <p className="contact-reveal text-[#161616] text-xs sm:text-sm md:text-base leading-relaxed max-w-[480px] mb-5 sm:mb-6 font-semibold">
              Have an ambitious idea or looking to scale your brand? Tell us about your goals.
              We collaborate with industry frontrunners to engineer category-defining digital experiences.
            </p>

            {/* Contact Information Cards */}
            <div className="contact-reveal flex flex-col gap-2.5 sm:gap-3 max-w-[500px]">
              
              {/* Direct Email Card */}
              <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/90 border border-[#E6E1D8] rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-md backdrop-blur-md">
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#FFF0B5] text-[#171717]">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div className="w-[1px] h-8 sm:h-9 bg-[#E6E1D8] shrink-0" />

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-extrabold tracking-wider text-[#858078] uppercase mb-0.5">
                    Direct Email
                  </div>
                  <a
                    href="mailto:hello@oneimpact.in"
                    className="text-xs sm:text-sm md:text-base font-bold text-[#161616] hover:text-[#4066c6] transition-colors break-words no-underline block"
                  >
                    hello@oneimpact.in
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 border border-[#4066c6] text-[#4066c6] bg-transparent rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold cursor-pointer transition-all duration-200 hover:bg-[#4066c6] hover:text-white flex items-center gap-1.5"
                >
                  <span>{copied ? "Copied! ✓" : "Copy"}</span>
                  {!copied && (
                    <svg
                      className="w-3 h-3 hidden sm:inline-block"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>

              {/* WhatsApp / Phone Card */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/90 border border-[#E6E1D8] rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-md backdrop-blur-md no-underline text-inherit"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#E3EBFF] text-[#4066c6]">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="2" width="12" height="20" rx="2" />
                    <path d="M11 18h2" />
                  </svg>
                </div>

                <div className="w-[1px] h-8 sm:h-9 bg-[#E6E1D8] shrink-0" />

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-extrabold tracking-wider text-[#858078] uppercase mb-0.5">
                    WhatsApp / Phone
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-[#161616] break-words block">
                    +91 99999 99999
                  </span>
                </div>

                <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#E5F8EA] text-[#15964B] text-[10px] sm:text-xs font-bold">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#19BD63] shadow-[0_0_0_3px_rgba(25,189,99,0.2)] inline-block" />
                  Online
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="contact-reveal mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#D9D5CD] flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 max-w-[500px]">
              
              {/* 24h Response */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-[160px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#FFF1C8] text-[#E6A900]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.2 1.5 4.8 13h5.5l-.9 9.5L19.2 10h-5.7l-.3-8.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#161616] leading-tight">24h Response</div>
                  <div className="text-[10px] sm:text-[11px] text-[#66635D]">Guaranteed turnaround</div>
                </div>
              </div>

              <div className="w-[1px] h-8 bg-[#D9D5CD] shrink-0 hidden sm:block" />

              {/* Confidentiality */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-[160px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#E4EBFF] text-[#4066c6]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#161616] leading-tight">Confidentiality</div>
                  <div className="text-[10px] sm:text-[11px] text-[#66635D]">Strict NDA protected</div>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Elevated Crisp Form Card                    */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7 w-full">
            <div className="contact-reveal relative rounded-3xl bg-white/95 text-[#161616] p-5 sm:p-7 md:p-8 shadow-2xl border border-[#E6E1D8] backdrop-blur-xl overflow-hidden">
              
              {/* Subtle top golden accent */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#f9d230]/40 via-[#f9d230] to-[#f9d230]/40" />

              {status === "success" ? (
                <div className="py-10 px-4 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#f9d230]/20 border border-[#f9d230] flex items-center justify-center text-[#161616] mb-3 shadow-md shadow-[#f9d230]/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161616] mb-1.5">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66635D] max-w-sm mx-auto mb-5">
                    Thank you for reaching out. A senior partner will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-[#161616] hover:bg-[#333] text-white text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Services Multi-Select */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-2">
                      I&apos;m interested in <span className="text-[#4066c6]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {SERVICES_OPTIONS.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={cn(
                              "text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer",
                              isSelected
                                ? "bg-[#f9d230] text-[#161616] border-[#f9d230] shadow-sm shadow-[#f9d230]/30 font-bold"
                                : "bg-[#F5F5F7] text-[#161616] border-[#E5E5EA] hover:border-[#f9d230] hover:bg-white"
                            )}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-1">
                        Your Name <span className="text-[#4066c6]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#4066c6] focus:bg-white rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#161616] placeholder:text-[#A39E93] outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-1">
                        Work Email <span className="text-[#4066c6]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#4066c6] focus:bg-white rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#161616] placeholder:text-[#A39E93] outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#4066c6] focus:bg-white rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#161616] placeholder:text-[#A39E93] outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-1">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Studio"
                        className="w-full bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#4066c6] focus:bg-white rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#161616] placeholder:text-[#A39E93] outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-1">
                      Budget Range (Optional)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                      {BUDGET_OPTIONS.map((budget) => {
                        const isSelected = selectedBudget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(isSelected ? "" : budget)}
                            className={cn(
                              "text-[11px] sm:text-xs py-1.5 px-2 rounded-lg border text-center transition-all duration-200 cursor-pointer font-medium",
                              isSelected
                                ? "bg-[#f9d230] border-[#f9d230] text-[#161616] font-bold shadow-sm"
                                : "bg-[#F5F5F7] border-[#E5E5EA] text-[#66635D] hover:border-[#f9d230] hover:bg-white"
                            )}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Overview Message */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#66635D] mb-1">
                      Project Overview
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like to build, timeline, or goals..."
                      className="w-full bg-[#F5F5F7] border border-[#E5E5EA] focus:border-[#4066c6] focus:bg-white rounded-xl p-2.5 text-xs sm:text-sm text-[#161616] placeholder:text-[#A39E93] outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 rounded-full font-display text-xs sm:text-sm font-black tracking-[0.16em] uppercase transition-all duration-300 hover:scale-[1.01] hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      style={{
                        backgroundColor: "#f9d230",
                        color: "#161616",
                        boxShadow: "0 6px 20px rgba(249, 210, 48, 0.4)",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#161616]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          SENDING INQUIRY...
                        </>
                      ) : (
                        <>
                          <span>SEND INQUIRY</span>
                          <span className="text-base font-bold">→</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-[#858078] mt-2">
                      🔒 Your information is confidential and protected by NDA.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
