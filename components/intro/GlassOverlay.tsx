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
      {/* Frosted Glass Layer with Diagonal Gradient & Inner Shadow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-black/[0.15] shadow-[inset_0_0_150px_rgba(255,255,255,0.06)]" />

      {/* Light Reflection highlights */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_100%)]" />

      {/* Subtle Scratch Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url('${scratchPattern}')`,
          backgroundSize: "300px 300px",
        }}
      />

      {/* Premium Beveled Border / Glass sheet edge */}
      <div className="absolute inset-6 border border-white/5 rounded-[4px]" />
      <div className="absolute inset-[25px] border border-black/10 rounded-[4px]" />
    </div>
  );
}

export default GlassOverlay;
