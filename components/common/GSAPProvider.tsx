"use client";

import React, { createContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export const GSAPContext = createContext<null>(null);

interface GSAPProviderProps {
  children: React.ReactNode;
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Force ScrollTrigger to refresh coordinates when routing occurs
    if (pathname !== "/") return;
    let active = true;
    void import("@/gsap").then(({ ScrollTrigger }) => {
      if (active) ScrollTrigger.refresh();
    });
    return () => { active = false; };
  }, [pathname]);

  return (
    <GSAPContext.Provider value={null}>
      {children}
    </GSAPContext.Provider>
  );
}

export default GSAPProvider;
