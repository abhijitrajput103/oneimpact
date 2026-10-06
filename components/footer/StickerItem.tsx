"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface StickerItemProps {
  id: string;
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  initialRotation?: number;
  className?: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  onPointerMove: (e: React.PointerEvent, id: string) => void;
  onPointerUp: (e: React.PointerEvent, id: string) => void;
}

export function StickerItem({
  id,
  children,
  initialX,
  initialY,
  initialRotation = 0,
  className,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: StickerItemProps) {
  return (
    <div
      data-sticker-id={id}
      className={cn(
        "absolute top-0 left-0 touch-none select-none will-change-transform",
        "cursor-grab active:cursor-grabbing",
        "transition-[filter] duration-200",
        "hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]",
        className
      )}
      style={{
        transform: `translate(${initialX}px, ${initialY}px) rotate(${initialRotation}deg)`,
      }}
      onPointerDown={(e) => onPointerDown(e, id)}
      onPointerMove={(e) => onPointerMove(e, id)}
      onPointerUp={(e) => onPointerUp(e, id)}
      onPointerCancel={(e) => onPointerUp(e, id)}
    >
      {children}
    </div>
  );
}

export default StickerItem;
