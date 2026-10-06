"use client";

import React, { useRef } from "react";
import { applyMagneticEffect, resetMagneticEffect } from "@/utils/gsapHelpers";
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
  const { setCursorType, setMagneticTarget, resetCursor } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      applyMagneticEffect(containerRef.current, e.nativeEvent, strength, textStrength);
    }
  };

  const handleMouseEnter = () => {
    setCursorType("magnetic");
    if (containerRef.current) {
      setMagneticTarget(containerRef.current);
    }
  };

  const handleMouseLeave = () => {
    resetCursor();
    if (containerRef.current) {
      resetMagneticEffect(containerRef.current);
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
