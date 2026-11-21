"use client";

import React, { useRef } from "react";
import type * as MagneticEffects from "@/utils/gsapHelpers";
import { useCursor } from "@/hooks/useCursor";

interface MagneticButtonProps {
  children: React.ReactElement;
  strength?: number;
  textStrength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 0.35,
  textStrength = 0.15,
  className,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const effects = useRef<typeof MagneticEffects | null>(null);
  const { setCursorType, setMagneticTarget, resetCursor } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      effects.current?.applyMagneticEffect(containerRef.current, e.nativeEvent, strength, textStrength);
    }
  };

  const handleMouseEnter = () => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    if (!effects.current) void import("@/utils/gsapHelpers").then((module) => { effects.current = module; });
    setCursorType("magnetic");
    if (containerRef.current) {
      setMagneticTarget(containerRef.current);
    }
  };

  const handleMouseLeave = () => {
    resetCursor();
    if (containerRef.current) {
      effects.current?.resetMagneticEffect(containerRef.current);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ display: "inline-block" }}
    >
      {children}
    </div>
  );
}

export default MagneticButton;
