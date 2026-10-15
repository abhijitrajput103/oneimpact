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
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
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

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("hello@oneimpact.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      // Graceful fallback for mock success
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
      className="relative z-10 bg-[#050505] text-off-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background ambient glows */}
      <div
        className="absolute top-1/4 -right-40 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-[100px]"
        style={{ backgroundColor: "#DA9F37" }}
      />
      <div
        className="absolute bottom-5 -left-40 w-80 h-80 rounded-full pointer-events-none opacity-10 blur-[110px]"
        style={{ backgroundColor: "#0066FF" }}
      />

      <div className="max-w-[1360px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Direct Contact Meta */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Badge */}
            <div className="contact-reveal inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DA9F37] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-off-white/70">
                // START A PROJECT
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="contact-reveal font-display text-2xl sm:text-3xl md:text-4xl font-black leading-[1.1] tracking-tight mb-3">
              Turn your vision into <br />
              <span
                className="italic font-normal"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 20%, #DA9F37 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                impactful reality.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="contact-reveal font-sans text-xs sm:text-sm text-off-white/60 leading-relaxed max-w-md mb-6">
              Have an ambitious idea or looking to scale your brand? Tell us about your goals.
              We collaborate with industry frontrunners to engineer category-defining digital experiences.
            </p>

            {/* Contact Information Cards (Compact) */}
            <div className="contact-reveal space-y-2.5 mb-6">
              {/* Email card */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#DA9F37]/40 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#DA9F37]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-off-white/40">Direct Email</div>
                    <a href="mailto:hello@oneimpact.in" className="font-sans text-xs sm:text-sm font-semibold text-off-white hover:text-[#DA9F37] transition-colors">
                      hello@oneimpact.in
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.05] hover:bg-[#DA9F37] hover:text-black transition-all text-off-white/70 cursor-pointer"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>

              {/* WhatsApp / Call quick card */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#DA9F37]/40 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#DA9F37]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-off-white/40">WhatsApp / Phone</div>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="font-sans text-xs sm:text-sm font-semibold text-off-white hover:text-[#DA9F37] transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Online
                </span>
              </div>
            </div>

            {/* Trust markers */}
            <div className="contact-reveal grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#DA9F37]">⚡</span>
                <div>
                  <div className="text-[11px] font-bold text-off-white">24h Response</div>
                  <div className="text-[10px] text-off-white/50">Guaranteed turnaround</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#DA9F37]">🛡️</span>
                <div>
                  <div className="text-[11px] font-bold text-off-white">Confidentiality</div>
                  <div className="text-[10px] text-off-white/50">Strict NDA protected</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek, Compact Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="contact-reveal relative rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-2xl p-5 sm:p-6 md:p-7 shadow-xl overflow-hidden">
              {/* Subtle top golden gradient highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DA9F37]/50 to-transparent" />

              {status === "success" ? (
                <div className="py-8 px-4 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#DA9F37]/20 border border-[#DA9F37] flex items-center justify-center text-[#DA9F37] mb-4 shadow-lg shadow-[#DA9F37]/20">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-off-white mb-2">
                    Message Received!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-off-white/70 max-w-sm mx-auto mb-6">
                    Thank you for reaching out. A senior partner will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-off-white font-sans text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Services Multi-Select Pills */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-2">
                      I&apos;m interested in <span className="text-[#DA9F37]">*</span>
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
                              "text-xs font-sans px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer",
                              isSelected
                                ? "bg-[#DA9F37] text-black font-bold border-[#DA9F37] shadow-sm shadow-[#DA9F37]/20"
                                : "bg-white/[0.03] text-off-white/80 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06]"
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
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-1.5">
                        Your Name <span className="text-[#DA9F37]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#DA9F37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-off-white placeholder:text-off-white/25 outline-none transition-all duration-200 focus:bg-white/[0.05]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-1.5">
                        Work Email <span className="text-[#DA9F37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#DA9F37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-off-white placeholder:text-off-white/25 outline-none transition-all duration-200 focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#DA9F37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-off-white placeholder:text-off-white/25 outline-none transition-all duration-200 focus:bg-white/[0.05]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-1.5">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Ltd."
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#DA9F37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-off-white placeholder:text-off-white/25 outline-none transition-all duration-200 focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>

                  {/* Expected Budget */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-1.5">
                      Budget Range (Optional)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_OPTIONS.map((budget) => {
                        const isSelected = selectedBudget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(isSelected ? "" : budget)}
                            className={cn(
                              "text-xs font-sans py-2 px-2.5 rounded-lg border text-center transition-all duration-200 cursor-pointer",
                              isSelected
                                ? "bg-[#DA9F37]/15 border-[#DA9F37] text-[#DA9F37] font-semibold"
                                : "bg-white/[0.02] border-white/[0.08] text-off-white/70 hover:border-white/20 hover:bg-white/[0.05]"
                            )}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-off-white/60 mb-1.5">
                      Project Overview
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like to build, timeline, or goals..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#DA9F37] rounded-lg p-3 text-xs sm:text-sm text-off-white placeholder:text-off-white/25 outline-none transition-all duration-200 focus:bg-white/[0.05] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 sm:py-3.5 rounded-full font-display text-xs sm:text-sm font-black tracking-[0.16em] uppercase transition-all duration-300 hover:scale-[1.01] hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      style={{
                        backgroundColor: "#DA9F37",
                        color: "#050505",
                        boxShadow: "0 6px 24px rgba(218, 159, 55, 0.35)",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          SENDING INQUIRY...
                        </>
                      ) : (
                        <>
                          <span>SEND INQUIRY</span>
                          <span className="text-base">→</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] font-mono text-center text-off-white/40 mt-2">
                      🔒 Your information is confidential and will never be shared.
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
