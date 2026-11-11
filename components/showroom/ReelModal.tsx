"use client";

import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useSyncExternalStore,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LenisContext } from "@/components/common/SmoothScrollProvider";
import { ReelItem } from "./ReelsData";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const emptySubscribe = () => () => {};

interface ReelModalProps {
  reels: ReelItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  /** Internal anchor/route for the "Start a similar campaign" CTA */
  projectCtaHref?: string;
}

export function ReelModal({
  reels,
  activeIndex,
  onClose,
  onSelectIndex,
  projectCtaHref = "/#contact",
}: ReelModalProps) {
  const lenis = useContext(LenisContext);
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const embedContainerRef = useRef<HTMLDivElement>(null);
  const [loadedReelId, setLoadedReelId] = useState<string | null>(null);
  const [scriptFailed, setScriptFailed] = useState(false);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  const isOpen =
    activeIndex !== null && activeIndex >= 0 && activeIndex < reels.length;
  const activeReel = isOpen ? reels[activeIndex] : null;
  const embedReady = Boolean(activeReel && loadedReelId === activeReel.reelId);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setMeasuredHeight(null);
    onSelectIndex((activeIndex - 1 + reels.length) % reels.length);
  }, [activeIndex, reels.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setMeasuredHeight(null);
    onSelectIndex((activeIndex + 1) % reels.length);
  }, [activeIndex, reels.length, onSelectIndex]);

  // Lock background scroll & pause Lenis while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, lenis, onClose, handlePrev, handleNext]);

  // Listen to Instagram's MEASURE postMessage so any aspect ratio (9:16 or 16:9) fits cleanly
  useEffect(() => {
    if (!isOpen || !activeReel) return;

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("instagram.com")) return;
      try {
        const parsed =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        const reportedHeight =
          parsed?.type === "MEASURE"
            ? parsed?.details?.height
            : parsed?.height;

        if (typeof reportedHeight === "number" && reportedHeight > 150) {
          setMeasuredHeight(Math.ceil(reportedHeight));
          setLoadedReelId(activeReel.reelId);
        }
      } catch {
        // Ignore unrelated postMessage payloads
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isOpen, activeReel]);

  // Render via Instagram's official embed.js so the iframe auto-sizes to each reel's true aspect ratio
  useEffect(() => {
    if (!isOpen || !activeReel || scriptFailed) return;

    const container = embedContainerRef.current;
    if (!container) return;

    const currentReelId = activeReel.reelId;

    // Watch for Instagram's dynamically injected iframe and its load event
    const observer = new MutationObserver(() => {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.setAttribute("scrolling", "no");
        iframe.style.width = "100%";
        iframe.style.minWidth = "100%";
        iframe.style.maxWidth = "100%";
        iframe.style.border = "0";
        iframe.style.margin = "0";
        iframe.addEventListener(
          "load",
          () => setLoadedReelId(currentReelId),
          { once: true }
        );
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    const processEmbed = () => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    if (window.instgrm?.Embeds) {
      processEmbed();
    } else {
      let script = document.querySelector<HTMLScriptElement>(
        'script[src*="instagram.com/embed.js"]'
      );
      if (!script) {
        script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onerror = () => setScriptFailed(true);
        document.body.appendChild(script);
      }
      script.addEventListener("load", processEmbed, { once: true });
    }

    // Fallback if embed.js is blocked by a privacy extension
    const fallbackTimer = window.setTimeout(() => {
      if (!container.querySelector("iframe")) {
        setScriptFailed(true);
      }
    }, 3500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, [isOpen, activeReel, scriptFailed]);

  const handleProjectCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();

    const isSamePageHash =
      projectCtaHref.startsWith("#") ||
      (pathname === "/" && projectCtaHref.startsWith("/#"));

    if (isSamePageHash) {
      e.preventDefault();
      const targetId = projectCtaHref.replace(/^\/?#/, "");
      requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (el) {
          if (lenis) {
            lenis.start();
            lenis.scrollTo(el, { offset: -20 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  };

  if (!mounted || !isOpen || !activeReel) return null;

  const permalink = `https://www.instagram.com/reel/${activeReel.reelId}/`;
  const fallbackEmbedUrl = `https://www.instagram.com/reel/${activeReel.reelId}/embed/?cr=1&v=14`;
  const formattedIndex = String((activeIndex ?? 0) + 1).padStart(2, "0");
  const formattedTotal = String(reels.length).padStart(2, "0");

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${activeReel.title} — ${activeReel.label}`}
      data-lenis-prevent
      onClick={onClose}
      className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-[fadeIn_200ms_ease-out]"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[980px] max-h-[92vh] overflow-y-auto no-scrollbar rounded-[28px] bg-[#0B0B0E] border border-white/15 shadow-[0_32px_90px_rgba(0,0,0,0.9)] text-[#F5F5F7]"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-7 py-3.5 bg-[#0B0B0E]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f9d230]/15 border border-[#f9d230]/35 text-[#f9d230] text-[11px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9d230]" />
              {activeReel.label}
            </span>
            <span className="text-xs font-mono text-white/55 tracking-wider">
              {formattedIndex} / {formattedTotal}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous reel"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f9d230] text-white hover:text-black border border-white/15 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next reel"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f9d230] text-white hover:text-black border border-white/15 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close reel viewer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-colors duration-200 cursor-pointer ml-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body: Auto-Sized In-Website Reel Player + Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 sm:gap-8 p-5 sm:p-7 items-center">
          {/* Left: Auto-sizing In-Website Reel Frame */}
          <div className="mx-auto w-full max-w-[360px] min-w-0 sm:min-w-[326px]">
            <div
              className={`relative w-full max-h-[75vh] overflow-y-auto no-scrollbar rounded-[22px] bg-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.75)] ${
                embedReady ? "" : "min-h-[420px]"
              }`}
            >
              {/* Loading overlay while embed initializes (keeps embed container full-width for accurate Instagram sizing) */}
              {!embedReady && (
                <div className="absolute inset-0 z-20 bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeReel.thumbnail}
                    alt={activeReel.title}
                    className="w-full h-full object-cover opacity-50"
                    draggable={false}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/45 backdrop-blur-xs pointer-events-none">
                    <div className="w-10 h-10 rounded-full border-2 border-[#f9d230]/30 border-t-[#f9d230] animate-spin" />
                    <span className="text-xs font-medium text-white/85 tracking-wide">
                      Loading reel inside website...
                    </span>
                  </div>
                </div>
              )}

              {!scriptFailed ? (
                <div
                  key={activeReel.reelId}
                  ref={embedContainerRef}
                  className="relative z-10 w-full"
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={permalink}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFFFFF",
                      border: 0,
                      margin: 0,
                      padding: 0,
                      width: "100%",
                      minWidth: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              ) : (
                <iframe
                  key={`fallback-${activeReel.reelId}`}
                  src={fallbackEmbedUrl}
                  title={`${activeReel.title} — ${activeReel.label}`}
                  scrolling="no"
                  onLoad={() => setLoadedReelId(activeReel.reelId)}
                  style={{
                    width: "100%",
                    height: measuredHeight ? `${measuredHeight}px` : "520px",
                    border: 0,
                    display: "block",
                  }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Right: IIDE-inspired Case & Service Context Panel */}
          <div className="flex flex-col justify-between gap-6 h-full">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/55 block mb-2">
                  {activeReel.serviceTag} &bull; {activeReel.format}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.08]">
                  {activeReel.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                {activeReel.summary}
              </p>

              {/* Deliverables / Highlights */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#f9d230] block mb-3">
                  What we crafted
                </span>
                <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                  {activeReel.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#f9d230] text-black flex items-center justify-center flex-shrink-0">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Internal-Only Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={projectCtaHref}
                  onClick={handleProjectCta}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#f9d230] hover:bg-[#fae066] text-black font-sans font-bold text-sm tracking-tight transition-transform duration-200 active:scale-95 no-underline"
                >
                  <span>Start a similar campaign</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {pathname !== activeReel.serviceHref && (
                  <Link
                    href={activeReel.serviceHref}
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-sans font-semibold text-sm tracking-tight transition-colors duration-200 no-underline"
                  >
                    <span>Explore {activeReel.serviceLabel}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* In-Modal Reel Switcher Playlist */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">
                  More reels from our work
                </span>
                <span className="text-[11px] text-white/40 hidden sm:inline">
                  Use ← → keys to switch
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {reels.map((item, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setMeasuredHeight(null);
                        onSelectIndex(idx);
                      }}
                      aria-label={`Play ${item.title} reel`}
                      className={`group relative rounded-xl overflow-hidden aspect-[3/4] border transition-all duration-200 cursor-pointer p-0 bg-black ${
                        selected
                          ? "border-[#f9d230] ring-2 ring-[#f9d230]/50 scale-[1.03]"
                          : "border-white/15 opacity-70 hover:opacity-100"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                      <span className="absolute bottom-1.5 inset-x-1.5 text-[9px] font-bold text-white leading-tight truncate text-left">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ReelModal;
