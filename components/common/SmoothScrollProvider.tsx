"use client";

import { createContext, useEffect, useState } from "react";
import type Lenis from "lenis";

export const LenisContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const eligible = matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let instance: Lenis | undefined;
    let generation = 0;
    async function update() {
      const current = ++generation;
      instance?.destroy();
      instance = undefined;
      setLenis(null);
      if (!eligible.matches) return;
      const { default: SmoothScroll } = await import("lenis");
      if (current !== generation) return;
      instance = new SmoothScroll({
        autoRaf: true,
        duration: 0.95,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 0.95,
      });
      setLenis(instance);
    }

    void update();
    eligible.addEventListener("change", update);
    return () => {
      generation++;
      instance?.destroy();
      eligible.removeEventListener("change", update);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export default SmoothScrollProvider;
