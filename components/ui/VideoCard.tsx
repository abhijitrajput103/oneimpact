"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useCursor } from "@/hooks/useCursor";

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  poster?: string;
  cursorText?: string;
  autoplay?: boolean;
}

export function VideoCard({
  src,
  poster,
  cursorText = "PLAY",
  autoplay = true,
  className,
  ...props
}: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { setCursorType, setCursorText, resetCursor } = useCursor();

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Use IntersectionObserver to lazy load and manage play/pause based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (autoplay) {
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" } // trigger slightly before entering viewport
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [autoplay]);

  const handleMouseEnter = () => {
    setCursorType("text");
    setCursorText(cursorText);
  };

  const handleMouseLeave = () => {
    resetCursor();
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#080808] border border-white/5 cursor-none group aspect-video select-none",
        className
      )}
      {...props}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-1000 ease-main group-hover:scale-[1.03]"
      />
      {/* Elegant visual overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
    </div>
  );
}

export default VideoCard;
