"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return (
    <div
      className={cn(
        "absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 sm:gap-3 text-center pointer-events-none select-none",
        className
      )}
    >
      {/* <span className="font-display text-[6px] sm:text-[8px] font-extrabold tracking-widest text-off-white/30 uppercase">
        SCROLL TO DISCOVER
      </span> */}
      {/* Elegant mouse scroll indicator */}
      <div className="w-[16px] h-[28px] border border-white/10 rounded-full flex justify-center p-1">
        {/* Animated bounce wheel dot */}
        <div
          className="w-[2px] h-[6px] bg-accent-blue rounded-full"
          style={{
            animation: "scrollDotBounce 1.8s cubic-bezier(0.76, 0, 0.24, 1) infinite",
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes scrollDotBounce {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          60% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollIndicator;
