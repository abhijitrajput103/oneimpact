"use client";

import React, { useRef, useState } from "react";
import { SHOWREEL_REELS } from "./ReelsData";
import { ReelModal } from "./ReelModal";

interface ServiceReelsSectionProps {
  heading?: string;
  subtitle?: string;
}

export function ServiceReelsSection({
  heading = "Our work in motion",
  subtitle = "Watch our client reels right here — click any story to play inside the page.",
}: ServiceReelsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollTrack = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const step = 280;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reels-showcase"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "clamp(32px, 4.5vw, 56px) 0",
        borderTop: "1px solid #EBEBED",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(16px, 3vw, 32px)",
        }}
      >
        {/* Header Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                alignSelf: "flex-start",
                padding: "5px 12px",
                borderRadius: "999px",
                background: "#FFF4DE",
                color: "#1D1D1F",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#f9d230",
                  boxShadow: "0 0 0 2px rgba(0,0,0,0.12)",
                }}
              />
              Reels &amp; Case Films
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
                fontWeight: 700,
                color: "#1D1D1F",
              }}
            >
              {heading}
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "18.5px",
                color: "#6E6E73",
                maxWidth: "54ch",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              onClick={() => scrollTrack("prev")}
              aria-label="Previous reel"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #E5E5EA",
                background: "#F5F5F7",
                color: "#1D1D1F",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollTrack("next")}
              aria-label="Next reel"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #E5E5EA",
                background: "#F5F5F7",
                color: "#1D1D1F",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Reels Grid / Horizontal Snap Strip */}
        <div
          ref={trackRef}
          className="no-scrollbar"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "minmax(230px, 1fr)",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "8px",
          }}
        >
          {SHOWREEL_REELS.map((reel, idx) => (
            <button
              key={reel.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Play ${reel.title} — ${reel.label} reel`}
              className="group text-left bg-transparent border-0 p-0 appearance-none cursor-pointer focus:outline-none"
              style={{
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* 9:16 Vertical Video Card */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "9 / 15",
                  borderRadius: "22px",
                  overflow: "hidden",
                  backgroundColor: "#0B0B0E",
                  border: "1px solid #E5E5EA",
                  boxShadow: "0 14px 32px -18px rgba(0,0,0,0.35)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={reel.thumbnail}
                  alt={`${reel.title} — ${reel.label}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />

                {/* Top Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    right: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "999px",
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(8px)",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {reel.label}
                  </span>
                </div>

                {/* Bottom Gradient + Title */}
                <div
                  style={{
                    position: "absolute",
                    inset: "auto 0 0 0",
                    padding: "40px 14px 14px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      color: "#f9d230",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    {reel.serviceTag}
                  </div>
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {reel.title}
                  </div>
                </div>

                {/* Center Play Button */}
                <div
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "rgba(249, 210, 48, 0.95)",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginLeft: "2px" }}
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* In-Website Reel Player Lightbox Modal */}
      <ReelModal
        reels={SHOWREEL_REELS}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelectIndex={(idx) => setActiveIndex(idx)}
        projectCtaHref="#audit"
      />
    </section>
  );
}

export default ServiceReelsSection;

