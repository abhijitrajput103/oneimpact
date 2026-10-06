"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/gsap";
import { useCursor } from "@/hooks/useCursor";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { cursorType, cursorText, magneticTarget } = useCursor();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if touch device on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          ("msMaxTouchPoints" in navigator &&
            (navigator as Navigator & { msMaxTouchPoints: number }).msMaxTouchPoints > 0)
      );
    });
  }, []);

  // Track mouse coordinates efficiently without React state re-renders
  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center origin
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      // If magnetic target exists, lock cursor with drag
      if (magneticTarget) {
        const bound = magneticTarget.getBoundingClientRect();
        const targetX = bound.left + bound.width / 2;
        const targetY = bound.top + bound.height / 2;
        
        // Blend between mouse position and target center for physical feel
        const px = targetX + (e.clientX - targetX) * 0.35;
        const py = targetY + (e.clientY - targetY) * 0.35;
        xTo(px);
        yTo(py);
      } else {
        xTo(e.clientX);
        yTo(e.clientY);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isTouchDevice, magneticTarget]);

  // React to state changes of custom cursor type
  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const tl = gsap.timeline({ overwrite: "auto" });

    switch (cursorType) {
      case "hover":
        tl.to(cursor, {
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderColor: "#FFFFFF",
          borderWidth: "1.5px",
          mixBlendMode: "difference",
          duration: 0.3,
        });
        break;
      case "text":
        tl.to(cursor, {
          scale: 3.5,
          backgroundColor: "#FFFFFF",
          borderColor: "transparent",
          borderWidth: "0px",
          mixBlendMode: "difference",
          duration: 0.35,
        });
        break;
      case "magnetic":
        tl.to(cursor, {
          scale: 1.8,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderColor: "#FFFFFF",
          borderWidth: "2px",
          mixBlendMode: "difference",
          duration: 0.3,
        });
        break;
      case "hidden":
        tl.to(cursor, {
          opacity: 0,
          scale: 0,
          duration: 0.2,
        });
        break;
      default: // default
        tl.to(cursor, {
          opacity: 1,
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderColor: "#FFFFFF",
          borderWidth: "1.5px",
          mixBlendMode: "difference",
          duration: 0.3,
        });
    }
  }, [cursorType, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-[7px] font-display font-semibold tracking-widest text-center uppercase transition-[opacity] duration-300"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {cursorType === "text" ? (
        <span className="text-black block scale-75 select-none">{cursorText}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-white block" />
      )}
    </div>
  );
}

export default Cursor;
