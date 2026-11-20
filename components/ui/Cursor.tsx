"use client";

import { useEffect } from "react";

const SPARK_COLORS = ["#F9D230", "#4066C6", "#f3f1ea", "#F9D230"];

export function Cursor() {
  useEffect(() => {
    // Keep standard system cursor
    document.body.classList.remove("custom-cursor-active");
    document.body.style.cursor = "auto";

    if (typeof window === "undefined") return;

    // Only enable on fine pointer devices (desktop mouse / trackpad)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    // Sparkle generator function (identical to footer sparkle animation)
    const spark = (x: number, y: number, burst: boolean) => {
      const e = document.createElement("i");
      e.className = "spk";
      e.style.left = `${x}px`;
      e.style.top = `${y}px`;
      e.style.setProperty("--k", SPARK_COLORS[(Math.random() * 4) | 0]);

      if (burst) {
        const a = Math.random() * Math.PI * 2;
        const d = 50 + Math.random() * 95;
        e.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        e.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        const size = 8 + Math.random() * 8;
        e.style.width = `${size}px`;
        e.style.height = `${size}px`;
      } else {
        e.style.setProperty("--dx", `${Math.random() * 40 - 20}px`);
      }

      document.body.appendChild(e);
      setTimeout(() => {
        if (e.parentNode) e.remove();
      }, 850);
    };

    // Pointer move across website — emits trail sparks
    let last = 0;
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;

      // Update global coordinates
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);

      // Prevent duplicate sparks when cursor is already over footer element
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("#ft")) return;

      const now = Date.now();
      if (now - last > 55) {
        last = now;
        spark(e.clientX, e.clientY, false);
      }
    };

    // Click burst across website
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("#ft")) return;

      for (let i = 0; i < 16; i++) {
        spark(e.clientX, e.clientY, true);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("click", onClick);
      document.querySelectorAll(".spk").forEach((el) => el.remove());
    };
  }, []);

  return null;
}

export default Cursor;
