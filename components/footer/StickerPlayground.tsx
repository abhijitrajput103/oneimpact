"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePhysicsStickers } from "@/hooks/usePhysicsStickers";
import { StickerItem } from "./StickerItem";
import Image from "next/image";

const STICKER_ALT: Record<string, string> = {
  "sticker-duck": "Yellow duck sticker",
  "sticker-rocket": "Rocket ship sticker",
  "sticker-lightning": "Lightning bolt sticker",
  "sticker-star": "Starburst sticker",
  "sticker-peace": "Peace sign hand sticker",
  "sticker-smiley": "Smiling face sticker",
  "sticker-illustrator": "Adobe Illustrator icon",
  "sticker-photoshop": "Adobe Photoshop icon",
  "sticker-aftereffects": "Adobe After Effects icon",
  "sticker-premiere": "Adobe Premiere Pro icon",
  "sticker-instagram": "Instagram icon",
  "sticker-meta": "Meta logo",
};

const QUICK_EMOJIS = [
  "🤭", "🔥", "🚀", "✨", "⚡", "😎", "🎯", "💖", "💡", "🍕", "🥳", "👾", "👀", "🙌", "💯", "🤯"
];

const MAX_CUSTOM_STICKERS = 10; // Max custom user stickers allowed to prevent memory/DOM overflow
const RATE_LIMIT_MS = 600; // Minimum interval between sticker creations to prevent spam/abuse

const ALL_EMOJIS = [
  "🤭", "😂", "😎", "🤯", "🥳", "😍", "🤩", "🤪", "🥺", "🤫", "😴", "😈",
  "🔥", "🚀", "⚡", "💥", "✨", "🌟", "⭐", "🎉", "💯", "🏆", "👑", "🎯",
  "💡", "🎨", "💻", "🎬", "📱", "📸", "🎧", "🕹️", "👾", "🍕", "☕", "🍿",
  "🙌", "👏", "✌️", "🤘", "🤙", "💪", "👀", "🫡", "🤝", "💖", "❤️‍🔥", "🌈"
];

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
    // Curated essential stickers for mobile phones < 480px: brands + rocket only
    return [
      {
        id: "sticker-rocket",
        type: "image",
        src: "/images/stickers/rocket.webp",
        x: xPos(0.04, 48),
        y: 10,
        rotation: 12,
        width: 48,
        height: 58,
      },
      {
        id: "sticker-photoshop",
        type: "image",
        src: "/images/stickers/photoshop.webp",
        x: xPos(0.20, 50),
        y: 22,
        rotation: 8,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-aftereffects",
        type: "image",
        src: "/images/stickers/after effects.webp",
        x: xPos(0.36, 50),
        y: 10,
        rotation: -6,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-premiere",
        type: "image",
        src: "/images/stickers/premier pro.webp",
        x: xPos(0.52, 50),
        y: 26,
        rotation: 10,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-illustrator",
        type: "image",
        src: "/images/stickers/Illustrator.webp",
        x: xPos(0.68, 50),
        y: 8,
        rotation: -10,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-instagram",
        type: "image",
        src: "/images/stickers/instgram.webp",
        x: xPos(0.82, 50),
        y: 28,
        rotation: -8,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-meta",
        type: "image",
        src: "/images/stickers/Meta.webp",
        x: xPos(0.40, 50),
        y: 35,
        rotation: 14,
        width: 50,
        height: 50,
      },
    ];
  }

  if (isMobile) {
    // Curated essential stickers for mobile 480px–640px: brands + rocket only
    return [
      {
        id: "sticker-rocket",
        type: "image",
        src: "/images/stickers/rocket.webp",
        x: xPos(0.04, 54),
        y: 12,
        rotation: 12,
        width: 54,
        height: 64,
      },
      {
        id: "sticker-photoshop",
        type: "image",
        src: "/images/stickers/photoshop.webp",
        x: xPos(0.20, 56),
        y: 24,
        rotation: 8,
        width: 56,
        height: 56,
      },
      {
        id: "sticker-aftereffects",
        type: "image",
        src: "/images/stickers/after effects.webp",
        x: xPos(0.36, 56),
        y: 12,
        rotation: -6,
        width: 56,
        height: 56,
      },
      {
        id: "sticker-premiere",
        type: "image",
        src: "/images/stickers/premier pro.webp",
        x: xPos(0.52, 56),
        y: 28,
        rotation: 10,
        width: 56,
        height: 56,
      },
      {
        id: "sticker-illustrator",
        type: "image",
        src: "/images/stickers/Illustrator.webp",
        x: xPos(0.68, 56),
        y: 8,
        rotation: -10,
        width: 56,
        height: 56,
      },
      {
        id: "sticker-instagram",
        type: "image",
        src: "/images/stickers/instgram.webp",
        x: xPos(0.82, 56),
        y: 30,
        rotation: -8,
        width: 56,
        height: 56,
      },
      {
        id: "sticker-meta",
        type: "image",
        src: "/images/stickers/Meta.webp",
        x: xPos(0.42, 56),
        y: 36,
        rotation: 14,
        width: 56,
        height: 56,
      },
    ];
  }

  if (isTablet) {
    return [
      {
        id: "sticker-duck",
        type: "image",
        src: "/images/stickers/duck.webp",
        x: xPos(0.04, 60),
        y: 10,
        rotation: -8,
        width: 60,
        height: 60,
      },
      {
        id: "sticker-rocket",
        type: "image",
        src: "/images/stickers/rocket.webp",
        x: xPos(0.18, 55),
        y: 25,
        rotation: 12,
        width: 55,
        height: 65,
      },
      {
        id: "sticker-lightning",
        type: "image",
        src: "/images/stickers/lightning.webp",
        x: xPos(0.32, 50),
        y: 5,
        rotation: -5,
        width: 50,
        height: 60,
      },
      {
        id: "sticker-star",
        type: "image",
        src: "/images/stickers/star.webp",
        x: xPos(0.44, 55),
        y: 18,
        rotation: 15,
        width: 55,
        height: 55,
      },
      {
        id: "sticker-peace",
        type: "image",
        src: "/images/stickers/peace.webp",
        x: xPos(0.56, 55),
        y: 35,
        rotation: -12,
        width: 55,
        height: 65,
      },
      {
        id: "sticker-smiley",
        type: "image",
        src: "/images/stickers/smiley.webp",
        x: xPos(0.68, 50),
        y: 15,
        rotation: 6,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-illustrator",
        type: "image",
        src: "/images/stickers/Illustrator.webp",
        x: xPos(0.80, 50),
        y: 10,
        rotation: -10,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-photoshop",
        type: "image",
        src: "/images/stickers/photoshop.webp",
        x: xPos(0.11, 50),
        y: 40,
        rotation: 8,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-aftereffects",
        type: "image",
        src: "/images/stickers/after effects.webp",
        x: xPos(0.24, 50),
        y: 15,
        rotation: -6,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-premiere",
        type: "image",
        src: "/images/stickers/premier pro.webp",
        x: xPos(0.38, 50),
        y: 35,
        rotation: 10,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-instagram",
        type: "image",
        src: "/images/stickers/instgram.webp",
        x: xPos(0.62, 50),
        y: 45,
        rotation: -8,
        width: 50,
        height: 50,
      },
      {
        id: "sticker-meta",
        type: "image",
        src: "/images/stickers/Meta.webp",
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
      src: "/images/stickers/duck.webp",
      x: xPos(0.04, 130),
      y: 10,
      rotation: -8,
      width: 130,
      height: 130,
    },
    {
      id: "sticker-rocket",
      type: "image",
      src: "/images/stickers/rocket.webp",
      x: xPos(0.18, 100),
      y: 30,
      rotation: 12,
      width: 100,
      height: 120,
    },
    {
      id: "sticker-lightning",
      type: "image",
      src: "/images/stickers/lightning.webp",
      x: xPos(0.32, 85),
      y: 5,
      rotation: -5,
      width: 85,
      height: 100,
    },
    {
      id: "sticker-star",
      type: "image",
      src: "/images/stickers/star.webp",
      x: xPos(0.44, 90),
      y: 20,
      rotation: 15,
      width: 90,
      height: 90,
    },
    {
      id: "sticker-peace",
      type: "image",
      src: "/images/stickers/peace.webp",
      x: xPos(0.56, 95),
      y: 40,
      rotation: -12,
      width: 95,
      height: 110,
    },
    {
      id: "sticker-smiley",
      type: "image",
      src: "/images/stickers/smiley.webp",
      x: xPos(0.68, 85),
      y: 15,
      rotation: 6,
      width: 85,
      height: 85,
    },
    {
      id: "sticker-illustrator",
      type: "image",
      src: "/images/stickers/Illustrator.webp",
      x: xPos(0.80, 80),
      y: 10,
      rotation: -10,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-photoshop",
      type: "image",
      src: "/images/stickers/photoshop.webp",
      x: xPos(0.11, 80),
      y: 45,
      rotation: 8,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-aftereffects",
      type: "image",
      src: "/images/stickers/after effects.webp",
      x: xPos(0.24, 80),
      y: 15,
      rotation: -6,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-premiere",
      type: "image",
      src: "/images/stickers/premier pro.webp",
      x: xPos(0.38, 80),
      y: 40,
      rotation: 10,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-instagram",
      type: "image",
      src: "/images/stickers/instgram.webp",
      x: xPos(0.62, 80),
      y: 50,
      rotation: -8,
      width: 80,
      height: 80,
    },
    {
      id: "sticker-meta",
      type: "image",
      src: "/images/stickers/Meta.webp",
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
    unregisterSticker,
    resetStickers,
    startSimulation,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    cleanup,
  } = usePhysicsStickers(containerRef);

  const [stickers, setStickers] = useState<StickerData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const lastCreatedRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
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

  const handleCreateBubble = useCallback((customText?: string) => {
    const now = Date.now();
    // Rate limit sticker creations across devices to prevent flooding, spam & lag
    if (now - lastCreatedRef.current < RATE_LIMIT_MS) {
      setIsRateLimited(true);
      setTimeout(() => setIsRateLimited(false), 500);
      return;
    }

    const raw = (typeof customText === "string" ? customText : inputValue).trim();
    if (!raw) return;

    // Sanitize and limit text length to 45 chars to protect canvas & performance
    const text = raw.slice(0, 45);
    lastCreatedRef.current = now;

    bubbleCountRef.current += 1;
    const newId = `bubble-custom-${bubbleCountRef.current}`;
    const container = containerRef.current;
    const containerWidth = container && container.offsetWidth > 0 ? container.offsetWidth : window.innerWidth;

    const isSmallMobile = containerWidth < 480;
    const isMobile = containerWidth < 640;

    // Detect if content is purely emojis
    const isOnlyEmoji = /^(\p{Extended_Pictographic}|\p{Emoji_Presentation}|\s)+$/u.test(text);
    const glyphCount = Array.from(text).length;

    let newWidth: number;
    let newHeight: number;

    if (isOnlyEmoji) {
      const emojiCount = Array.from(text.replace(/\s+/g, "")).length;
      newWidth = isSmallMobile
        ? Math.min(emojiCount * 36 + 28, 180)
        : Math.min(emojiCount * 44 + 32, 240);
      newHeight = isSmallMobile ? 42 : isMobile ? 48 : 56;
    } else {
      const charWidth = isSmallMobile ? 6.5 : isMobile ? 7.5 : 9.5;
      const padding = isSmallMobile ? 24 : isMobile ? 32 : 48;
      const minW = isSmallMobile ? 60 : isMobile ? 70 : 74;
      const maxW = isSmallMobile ? 180 : isMobile ? 220 : containerWidth < 1024 ? 260 : 360;
      newWidth = Math.max(minW, Math.min(glyphCount * charWidth + padding, maxW));
      newHeight = isSmallMobile ? 30 : isMobile ? 36 : 52;
    }

    const newSticker: StickerData = {
      id: newId,
      type: "bubble",
      content: text,
      x: Math.max(10, Math.random() * (containerWidth - newWidth - 20)),
      y: 10,
      rotation: (Math.random() - 0.5) * 20,
      width: newWidth,
      height: newHeight,
    };

    setStickers((prev) => {
      // Evict oldest custom sticker if total custom stickers exceed capacity
      const customStickers = prev.filter((s) => s.id.startsWith("bubble-custom-"));
      let updated = prev;
      if (customStickers.length >= MAX_CUSTOM_STICKERS) {
        const oldest = customStickers[0];
        unregisterSticker(oldest.id);
        updated = prev.filter((s) => s.id !== oldest.id);
      }
      return [...updated, newSticker];
    });

    if (!customText) setInputValue("");

    requestAnimationFrame(() => {
      registerSticker(
        newSticker.id,
        newSticker.x,
        newSticker.y,
        newSticker.rotation,
        newWidth,
        newHeight,
        stickerRadius(newWidth, newHeight)
      );
    });
  }, [inputValue, registerSticker, unregisterSticker]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleCreateBubble();
      }
    },
    [handleCreateBubble]
  );

  const handleEmojiClick = (emoji: string) => {
    setInputValue((prev) => prev + emoji);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const renderStickerContent = (sticker: StickerData) => {
    switch (sticker.type) {
      case "image":
        return (
          <div
            className="rounded-lg sm:rounded-2xl overflow-hidden"
            style={{ width: sticker.width, height: sticker.height }}
          >
            <Image
              src={sticker.src!}
              alt={STICKER_ALT[sticker.id] || "Sticker"}
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
            className="bg-accent-yellow text-black font-display text-[8.5px] sm:text-[10px] md:text-xs font-extrabold tracking-wide px-2 sm:px-4 py-1 sm:py-2 rounded-full whitespace-nowrap shadow-md"
            style={{ maxWidth: sticker.width }}
          >
            {sticker.content}
          </div>
        );

      case "bubble": {
        const isOnlyEmoji = /^(\p{Extended_Pictographic}|\p{Emoji_Presentation}|\s)+$/u.test(sticker.content || "");
        return (
          <div
            className={`shadow-md relative select-none ${isOnlyEmoji
              ? "bg-white text-black px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-2xl"
              : "bg-white text-black font-sans text-[8.5px] sm:text-[11px] md:text-xs font-semibold leading-snug px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-2xl"
              }`}
            style={{ maxWidth: sticker.width }}
          >
            <span>{sticker.content}</span>
            <div className="absolute -bottom-1 left-2 sm:-bottom-2 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 bg-white rotate-45 rounded-sm pointer-events-none" />
          </div>
        );
      }
    }
  };

  return (
    <div className="relative mt-6">
      {/* Physics container */}
      <div
        ref={containerRef}
        className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-2xl bg-[#111111] border border-white/[0.04]"
        style={{ contain: "paint layout", transform: "translateZ(0)" }}
      >
        {/* Subtle grid noise texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:24px_24px]" />

        {/* Click around label */}
        <div className="absolute bottom-3 right-4 sm:bottom-6 sm:right-8 select-none pointer-events-none z-10">
          <span className="font-display text-white/80 text-[10px] sm:text-sm font-bold tracking-wide">
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

      {/* Create your own stickers section */}
      <div className="mt-5 bg-[#111111]/90 border border-white/[0.06] rounded-2xl p-3.5 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <h4 className="font-display text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-off-white">
              Create your own stickers
            </h4>
          </div>
          <span className="text-[10px] sm:text-xs font-sans text-white/40">
            Type text, pick emojis, or press Enter (max {MAX_CUSTOM_STICKERS} active stickers)
          </span>
        </div>

        {/* Input bar with emoji picker toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex-1 relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type something and press Enter (max 45 chars)..."
              maxLength={45}
              className="w-full bg-[#181818] border border-white/[0.08] rounded-xl pl-3 pr-10 py-2.5 sm:pl-4 sm:pr-12 sm:py-3 font-sans text-xs sm:text-sm text-off-white/90 placeholder:text-off-white/30 focus:outline-none focus:border-accent-yellow/50 transition-colors duration-200"
            />
            {/* Emoji toggle inside input */}
            <button
              type="button"
              onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
              aria-label="Toggle emoji picker"
              title="Add emojis"
              className="absolute right-2 sm:right-3 p-1 rounded-lg text-lg sm:text-xl hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              😀
            </button>
          </div>
          <button
            onClick={() => handleCreateBubble()}
            disabled={!inputValue.trim() || isRateLimited}
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-accent-yellow text-black font-display text-[10px] sm:text-xs font-extrabold tracking-wider uppercase rounded-xl hover:bg-accent-yellow/90 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap shadow-md cursor-pointer"
          >
            {isRateLimited ? "Wait..." : "Create"}
          </button>
        </div>

        {/* Quick Emoji selection chips */}
        <div className="mt-3 flex items-center gap-1.5 sm:gap-2 flex-wrap select-none">
          <span className="text-[10px] sm:text-xs font-sans font-medium text-white/50 mr-0.5">
            Emojis:
          </span>
          {QUICK_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => handleEmojiClick(emoji)}
              className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] active:scale-90 border border-white/[0.04] text-sm sm:text-base transition-all cursor-pointer"
              title={`Add ${emoji}`}
            >
              {emoji}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
            className="text-[11px] sm:text-xs font-sans font-semibold text-accent-yellow hover:underline ml-1 cursor-pointer py-1"
          >
            {isEmojiPickerOpen ? "Hide panel ▲" : "More emojis ▼"}
          </button>
        </div>

        {/* Expanded Emoji Tray */}
        {isEmojiPickerOpen && (
          <div className="mt-3 pt-3 border-t border-white/[0.06] grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-1.5 sm:gap-2 max-h-56 md:max-h-none overflow-y-auto md:overflow-visible pb-1">
            {ALL_EMOJIS.map((emoji, idx) => (
              <button
                key={`${emoji}-${idx}`}
                type="button"
                onClick={() => handleEmojiClick(emoji)}
                className="p-1.5 sm:p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.14] active:scale-90 text-sm sm:text-lg transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
                title={`Add ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StickerPlayground;
