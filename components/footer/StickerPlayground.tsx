"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePhysicsStickers } from "@/hooks/usePhysicsStickers";
import { StickerItem } from "./StickerItem";
import Image from "next/image";

/** Compute collision radius from a sticker's bounding box */
function stickerRadius(w: number, h: number): number {
  return Math.min(w, h) / 2;
}

interface StickerData {
  id: string;
  type: "image" | "badge" | "bubble";
  content?: string;
  src?: string;
  x: number;
  y: number;
  rotation: number;
  width: number;
  height: number;
}

/**
 * Returns ultra-small stickers for mobile devices to ensure complete fit without clutter.
 *
 * Small Mobile (< 480):  4 tiny micro-stickers (24–28px images, 44px badge, 90px bubble)
 * Mobile (480–640):     5 small stickers (30–36px images)
 * Tablet (640–1024):    medium stickers (70–85px images)
 * Desktop (> 1024):     full size stickers (100–120px images)
 */
function getResponsiveStickers(containerWidth: number): StickerData[] {
  const isSmallMobile = containerWidth < 480;
  const isMobile = containerWidth >= 480 && containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth <= 1024;

  const xPos = (frac: number, w: number) =>
    Math.max(0, Math.min(frac * containerWidth, containerWidth - w));

  if (isSmallMobile) {
    // Ultra-small micro-stickers for phones < 480px (all 12 image stickers present)
    return [
      {
        id: "sticker-duck",
        type: "image",
        src: "/images/stickers/duck.png",
        x: xPos(0.02, 24),
        y: 6,
        rotation: -8,
        width: 24,
        height: 24,
      },
      {
        id: "sticker-rocket",
        type: "image",
        src: "/images/stickers/rocket.png",
        x: xPos(0.16, 22),
        y: 16,
        rotation: 12,
        width: 22,
        height: 26,
      },
      {
        id: "sticker-lightning",
        type: "image",
        src: "/images/stickers/lightning.png",
        x: xPos(0.30, 20),
        y: 4,
        rotation: -5,
        width: 20,
        height: 24,
      },
      {
        id: "sticker-star",
        type: "image",
        src: "/images/stickers/star.png",
        x: xPos(0.44, 22),
        y: 12,
        rotation: 15,
        width: 22,
        height: 22,
      },
      {
        id: "sticker-peace",
        type: "image",
        src: "/images/stickers/peace.png",
        x: xPos(0.58, 22),
        y: 18,
        rotation: -12,
        width: 22,
        height: 25,
      },
      {
        id: "sticker-smiley",
        type: "image",
        src: "/images/stickers/smiley.png",
        x: xPos(0.72, 20),
        y: 10,
        rotation: 6,
        width: 20,
        height: 20,
      },
      {
        id: "sticker-illustrator",
        type: "image",
        src: "/images/stickers/Illustrator.png",
        x: xPos(0.84, 22),
        y: 5,
        rotation: -10,
        width: 22,
        height: 22,
      },
      {
        id: "sticker-photoshop",
        type: "image",
        src: "/images/stickers/photoshop.png",
        x: xPos(0.10, 22),
        y: 22,
        rotation: 8,
        width: 22,
        height: 22,
      },
      {
        id: "sticker-aftereffects",
        type: "image",
        src: "/images/stickers/after effects.png",
        x: xPos(0.24, 22),
        y: 8,
        rotation: -6,
        width: 22,
        height: 22,
      },
      {
        id: "sticker-premiere",
        type: "image",
        src: "/images/stickers/premier pro.png",
        x: xPos(0.38, 22),
        y: 20,
        rotation: 10,
        width: 22,
        height: 22,
      },
      {
        id: "sticker-instagram",
        type: "image",
        src: "/images/stickers/instgram.png",
        x: xPos(0.52, 22),
        y: 24,
        rotation: -8,
        width: 22,
        height: 22,
      },
      {
        id: "sticker-meta",
        type: "image",
        src: "/images/stickers/Meta.png",
        x: xPos(0.66, 22),
        y: 14,
        rotation: 14,
        width: 22,
        height: 22,
      },
      {
        id: "badge-meaning",
        type: "badge",
        content: "What is the meaning of One Impact?",
        x: xPos(0.26, Math.min(containerWidth - 12, 140)),
        y: 0,
        rotation: -3,
        width: Math.min(containerWidth - 12, 140),
        height: 22,
      },
      {
        id: "badge-toss",
        type: "badge",
        content: "Toss me.",
        x: xPos(0.78, 44),
        y: 12,
        rotation: 90,
        width: 44,
        height: 16,
      },
      {
        id: "bubble-quote",
        type: "bubble",
        content: "One Impact",
        x: xPos(0.32, Math.min(containerWidth - 12, 90)),
        y: 6,
        rotation: -6,
        width: Math.min(containerWidth - 12, 90),
        height: 22,
      },
    ];
  }

  if (isMobile) {
    // Compact small stickers for phones 480px–640px (all 12 image stickers present)
    return [
      {
        id: "sticker-duck",
        type: "image",
        src: "/images/stickers/duck.png",
        x: xPos(0.03, 32),
        y: 8,
        rotation: -8,
        width: 32,
        height: 32,
      },
      {
        id: "sticker-rocket",
        type: "image",
        src: "/images/stickers/rocket.png",
        x: xPos(0.17, 30),
        y: 16,
        rotation: 12,
        width: 30,
        height: 35,
      },
      {
        id: "sticker-lightning",
        type: "image",
        src: "/images/stickers/lightning.png",
        x: xPos(0.31, 28),
        y: 5,
        rotation: -5,
        width: 28,
        height: 34,
      },
      {
        id: "sticker-star",
        type: "image",
        src: "/images/stickers/star.png",
        x: xPos(0.45, 30),
        y: 14,
        rotation: 15,
        width: 30,
        height: 30,
      },
      {
        id: "sticker-peace",
        type: "image",
        src: "/images/stickers/peace.png",
        x: xPos(0.59, 30),
        y: 20,
        rotation: -12,
        width: 30,
        height: 35,
      },
      {
        id: "sticker-smiley",
        type: "image",
        src: "/images/stickers/smiley.png",
        x: xPos(0.73, 28),
        y: 12,
        rotation: 6,
        width: 28,
        height: 28,
      },
      {
        id: "sticker-illustrator",
        type: "image",
        src: "/images/stickers/Illustrator.png",
        x: xPos(0.85, 30),
        y: 6,
        rotation: -10,
        width: 30,
        height: 30,
      },
      {
        id: "sticker-photoshop",
        type: "image",
        src: "/images/stickers/photoshop.png",
        x: xPos(0.10, 30),
        y: 28,
        rotation: 8,
        width: 30,
        height: 30,
      },
      {
        id: "sticker-aftereffects",
        type: "image",
        src: "/images/stickers/after effects.png",
        x: xPos(0.24, 30),
        y: 10,
        rotation: -6,
        width: 30,
        height: 30,
      },
      {
        id: "sticker-premiere",
        type: "image",
        src: "/images/stickers/premier pro.png",
        x: xPos(0.38, 30),
        y: 24,
        rotation: 10,
        width: 30,
        height: 30,
      },
      {
        id: "sticker-instagram",
        type: "image",
        src: "/images/stickers/instgram.png",
        x: xPos(0.52, 30),
        y: 30,
        rotation: -8,
        width: 30,
        height: 30,
      },
      {
        id: "sticker-meta",
        type: "image",
        src: "/images/stickers/Meta.png",
        x: xPos(0.66, 30),
        y: 18,
        rotation: 14,
        width: 30,
        height: 30,
      },
      {
        id: "badge-meaning",
        type: "badge",
        content: "What is the meaning of One Impact?",
        x: xPos(0.24, Math.min(containerWidth - 16, 170)),
        y: 0,
        rotation: -3,
        width: Math.min(containerWidth - 16, 170),
        height: 26,
      },
      {
        id: "badge-toss",
        type: "badge",
        content: "Toss me.",
        x: xPos(0.80, 54),
        y: 14,
        rotation: 90,
        width: 54,
        height: 18,
      },
      {
        id: "bubble-quote",
        type: "bubble",
        content: "One Impact digital",
        x: xPos(0.32, Math.min(containerWidth - 16, 110)),
        y: 8,
        rotation: -6,
        width: Math.min(containerWidth - 16, 110),
        height: 24,
      },
    ];
  }

  if (isTablet) {
    return [
      {
        id: "sticker-duck",
        type: "image",
        src: "/images/stickers/duck.png",
        x: xPos(0.04, 60),
        y: 10,
        rotation: -8,
        width: 60,
        height: 60,
      },
      {
        id: "sticker-rocket",
        type: "image",
        src: "/images/stickers/rocket.png",
        x: xPos(0.18, 55),
        y: 25,
        rotation: 12,
        width: 55,
        height: 65,
      },
      {
        id: "sticker-lightning",
        type: "image",
        src: "/images/stickers/lightning.png",
        x: xPos(0.32, 50),
        y: 5,
        rotation: -5,
        width: 50,
        height: 60,
      },
      {
        id: "sticker-star",
        type: "image",
        src: "/images/stickers/star.png",
        x: xPos(0.44, 55),
        y: 18,
        rotation: 15,
        width: 55,
        height: 55,
      },
      {
        id: "sticker-peace",
        type: "image",
        src: "/images/stickers/peace.png",
        x: xPos(0.56, 55),
        y: 35,
        rotation: -12,
        width: 55,
        height: 65,
      },
      {
        id: "sticker-smiley",
        type: "image",
        src: "/images/stickers/smiley.png",
        x: xPos(0.68, 50),
        y: 15,
        rotation: 6,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-illustrator",
        type: "image",
        src: "/images/stickers/Illustrator.png",
        x: xPos(0.80, 50),
        y: 10,
        rotation: -10,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-photoshop",
        type: "image",
        src: "/images/stickers/photoshop.png",
        x: xPos(0.11, 50),
        y: 40,
        rotation: 8,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-aftereffects",
        type: "image",
        src: "/images/stickers/after effects.png",
        x: xPos(0.24, 50),
        y: 15,
        rotation: -6,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-premiere",
        type: "image",
        src: "/images/stickers/premier pro.png",
        x: xPos(0.38, 50),
        y: 35,
        rotation: 10,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-instagram",
        type: "image",
        src: "/images/stickers/instgram.png",
        x: xPos(0.62, 50),
        y: 45,
        rotation: -8,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-meta",
        type: "image",
        src: "/images/stickers/Meta.png",
        x: xPos(0.74, 50),
        y: 22,
        rotation: 14,
        width: 50,
        height: 50,
      },
      {
        id: "badge-meaning",
        type: "badge",
        content: "What is the meaning of One Impact?",
        x: xPos(0.3, 240),
        y: 0,
        rotation: -3,
        width: 240,
        height: 38,
      },
      {
        id: "badge-toss",
        type: "badge",
        content: "Toss me.",
        x: xPos(0.86, 85),
        y: 20,
        rotation: 90,
        width: 85,
        height: 28,
      },
      {
        id: "bubble-quote",
        type: "bubble",
        content: "Creating digital experiences that leave a lasting impression.",
        x: xPos(0.42, 170),
        y: 10,
        rotation: -6,
        width: 170,
        height: 60,
      },
    ];
  }

  // Desktop (>1024px)
  return [
    {
      id: "sticker-duck",
      type: "image",
      src: "/images/stickers/duck.png",
      x: xPos(0.04, 130),
      y: 10,
      rotation: -8,
      width: 130,
      height: 130,
    },
    {
      id: "sticker-rocket",
      type: "image",
      src: "/images/stickers/rocket.png",
      x: xPos(0.18, 100),
      y: 30,
      rotation: 12,
      width: 100,
      height: 120,
    },
    {
      id: "sticker-lightning",
      type: "image",
      src: "/images/stickers/lightning.png",
      x: xPos(0.32, 85),
      y: 5,
      rotation: -5,
      width: 85,
      height: 100,
    },
    {
      id: "sticker-star",
      type: "image",
      src: "/images/stickers/star.png",
      x: xPos(0.44, 90),
      y: 20,
      rotation: 15,
      width: 90,
      height: 90,
    },
    {
      id: "sticker-peace",
      type: "image",
      src: "/images/stickers/peace.png",
      x: xPos(0.56, 95),
      y: 40,
      rotation: -12,
      width: 95,
      height: 110,
    },
    {
      id: "sticker-smiley",
      type: "image",
      src: "/images/stickers/smiley.png",
      x: xPos(0.68, 85),
      y: 15,
      rotation: 6,
      width: 85,
      height: 85,
    },
    {
      id: "sticker-illustrator",
      type: "image",
      src: "/images/stickers/Illustrator.png",
      x: xPos(0.80, 80),
      y: 10,
      rotation: -10,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-photoshop",
      type: "image",
      src: "/images/stickers/photoshop.png",
      x: xPos(0.11, 80),
      y: 45,
      rotation: 8,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-aftereffects",
      type: "image",
      src: "/images/stickers/after effects.png",
      x: xPos(0.24, 80),
      y: 15,
      rotation: -6,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-premiere",
      type: "image",
      src: "/images/stickers/premier pro.png",
      x: xPos(0.38, 80),
      y: 40,
      rotation: 10,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-instagram",
      type: "image",
      src: "/images/stickers/instgram.png",
      x: xPos(0.62, 80),
      y: 50,
      rotation: -8,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-meta",
      type: "image",
      src: "/images/stickers/Meta.png",
      x: xPos(0.74, 80),
      y: 25,
      rotation: 14,
      width: 80,
      height: 80,
    },
    {
      id: "badge-meaning",
      type: "badge",
      content: "What is the meaning of One Impact?",
      x: xPos(0.28, 380),
      y: 0,
      rotation: -3,
      width: 380,
      height: 54,
    },
    {
      id: "badge-toss",
      type: "badge",
      content: "Toss me.",
      x: xPos(0.86, 110),
      y: 25,
      rotation: 90,
      width: 110,
      height: 36,
    },
    {
      id: "bubble-quote",
      type: "bubble",
      content: "Creating digital experiences that leave a lasting impression.",
      x: xPos(0.48, 260),
      y: 10,
      rotation: -6,
      width: 260,
      height: 80,
    },
  ];
}

export function StickerPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    registerSticker,
    resetStickers,
    startSimulation,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    cleanup,
  } = usePhysicsStickers(containerRef);

  const [stickers, setStickers] = useState<StickerData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const bubbleCountRef = useRef(0);
  const hasStartedRef = useRef(false);

  // Measure container width accurately on mount and resize
  useEffect(() => {
    const updateLayout = () => {
      const el = containerRef.current;
      const w = el && el.offsetWidth > 0 ? el.offsetWidth : window.innerWidth;
      resetStickers();
      setStickers(getResponsiveStickers(w));
    };

    updateLayout();

    window.addEventListener("resize", updateLayout, { passive: true });
    return () => window.removeEventListener("resize", updateLayout);
  }, [resetStickers]);

  // Register all stickers and start gravity simulation whenever stickers array updates
  useEffect(() => {
    if (stickers.length === 0) return;

    stickers.forEach((s) => {
      registerSticker(s.id, s.x, s.y, s.rotation, s.width, s.height, stickerRadius(s.width, s.height));
    });

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      requestAnimationFrame(() => {
        startSimulation();
      });
    }

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stickers]);

  const handleCreateBubble = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;

    bubbleCountRef.current += 1;
    const newId = `bubble-custom-${bubbleCountRef.current}`;
    const container = containerRef.current;
    const containerWidth = container && container.offsetWidth > 0 ? container.offsetWidth : window.innerWidth;

    const isSmallMobile = containerWidth < 480;
    const isMobile = containerWidth < 640;
    const charWidth = isSmallMobile ? 4 : isMobile ? 5 : 9;
    const padding = isSmallMobile ? 10 : isMobile ? 16 : 48;
    const maxW = isSmallMobile ? 110 : isMobile ? 150 : containerWidth < 1024 ? 220 : 320;

    const newWidth = Math.min(text.length * charWidth + padding, maxW);
    const newHeight = isSmallMobile ? 22 : isMobile ? 28 : 52;
    const newSticker: StickerData = {
      id: newId,
      type: "bubble",
      content: text,
      x: Math.random() * (containerWidth - newWidth),
      y: 10,
      rotation: (Math.random() - 0.5) * 20,
      width: newWidth,
      height: newHeight,
    };

    setStickers((prev) => [...prev, newSticker]);
    setInputValue("");

    requestAnimationFrame(() => {
      registerSticker(newSticker.id, newSticker.x, newSticker.y, newSticker.rotation, newWidth, newHeight, stickerRadius(newWidth, newHeight));
    });
  }, [inputValue, registerSticker]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleCreateBubble();
      }
    },
    [handleCreateBubble]
  );

  const renderStickerContent = (sticker: StickerData) => {
    switch (sticker.type) {
      case "image":
        return (
          <div
            className="rounded-lg sm:rounded-2xl overflow-hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            style={{ width: sticker.width, height: sticker.height }}
          >
            <Image
              src={sticker.src!}
              alt={sticker.id}
              width={sticker.width}
              height={sticker.height}
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>
        );

      case "badge":
        return (
          <div
            className="bg-accent-yellow text-black font-display text-[6px] sm:text-[10px] font-extrabold tracking-wide px-1.5 py-0.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            style={{ maxWidth: sticker.width }}
          >
            {sticker.content}
          </div>
        );

      case "bubble":
        return (
          <div
            className="bg-white text-black font-sans text-[6.5px] sm:text-[11px] leading-snug px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)] relative"
            style={{ maxWidth: sticker.width }}
          >
            {sticker.content}
            <div className="absolute -bottom-1 left-2 sm:-bottom-2 sm:left-5 w-2 h-2 sm:w-3.5 sm:h-3.5 bg-white rotate-45 rounded-sm" />
          </div>
        );
    }
  };

  return (
    <div className="relative mt-6">
      {/* Physics container */}
      <div
        ref={containerRef}
        className="relative w-full h-[180px] sm:h-[280px] md:h-[380px] overflow-hidden rounded-2xl bg-[#111111] border border-white/[0.04]"
      >
        {/* Subtle grid noise texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:24px_24px]" />

        {/* Click around label */}
        <div className="absolute bottom-3 right-4 sm:bottom-6 sm:right-8 select-none pointer-events-none z-10">
          <span className="font-display text-off-white/40 text-[10px] sm:text-sm font-bold tracking-wide">
            Click around.
          </span>
        </div>

        {/* Stickers */}
        {stickers.map((sticker) => (
          <StickerItem
            key={sticker.id}
            id={sticker.id}
            initialX={sticker.x}
            initialY={sticker.y}
            initialRotation={sticker.rotation}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="z-20"
          >
            {renderStickerContent(sticker)}
          </StickerItem>
        ))}
      </div>

      {/* Input bar */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type something and press Enter..."
            maxLength={80}
            className="w-full bg-[#111111] border border-white/[0.06] rounded-xl px-3 py-2 sm:px-5 sm:py-3.5 font-sans text-xs sm:text-sm text-off-white/80 placeholder:text-off-white/20 focus:outline-none focus:border-accent-yellow/40 transition-colors duration-300"
          />
        </div>
        <button
          onClick={handleCreateBubble}
          disabled={!inputValue.trim()}
          className="px-4 py-2 sm:px-6 sm:py-3.5 bg-accent-yellow text-black font-display text-[10px] sm:text-xs font-extrabold tracking-wider uppercase rounded-xl hover:bg-accent-yellow/90 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed whitespace-nowrap"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default StickerPlayground;
