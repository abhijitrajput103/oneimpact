"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface GlassOverlayProps {
  className?: string;
}

export function GlassOverlay({ className }: GlassOverlayProps) {
  // SVG micro scratches inline string for procedural texture
  const scratchPattern = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" opacity="0.08"><path d="M20 50 L60 55 M110 160 L130 180 M210 30 L220 15 M150 210 L180 220" stroke="white" stroke-width="0.3" fill="none"/></svg>`;

  return (
    <div
      className={cn(
        "absolute inset-0 z-10 w-full h-full pointer-events-none select-none overflow-hidden",
        className
      )}
    >
      {/* Frosted Glass Layer with visible glass tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.03] shadow-[inset_0_0_200px_rgba(255,255,255,0.08)]" />

      {/* Light Reflection highlights — visible glare streak */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.04)_40%,rgba(255,255,255,0)_55%,rgba(0,0,0,0.15)_100%)]" />

      {/* Subtle Scratch Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url('${scratchPattern}')`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Premium Beveled Border / Glass sheet edge */}
      <div className="absolute inset-6 border border-white/[0.12] rounded-[4px]" />
      <div className="absolute inset-[25px] border border-white/[0.06] rounded-[4px]" />
    </div>
  );
}

export default GlassOverlay;
