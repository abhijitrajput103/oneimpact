"use client";

import { useEffect, useState, useRef } from "react";

export type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold = 10): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollY.current = window.pageYOffset || window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || window.scrollY;
      const difference = scrollY - lastScrollY.current;

      // Prevent triggering direction updates on bounce effects (iOS elastic scroll)
      if (scrollY < 0 || scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        return;
      }

      if (Math.abs(difference) >= threshold) {
        setScrollDirection(difference > 0 ? "down" : "up");
        lastScrollY.current = scrollY;
      }
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [threshold]);

  return scrollDirection;
}

export default useScrollDirection;
