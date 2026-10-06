"use client";

import React, { createContext, useEffect } from "react";
import { ScrollTrigger } from "@/gsap";
import { usePathname } from "next/navigation";

export const GSAPContext = createContext<null>(null);

interface GSAPProviderProps {
  children: React.ReactNode;
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Force ScrollTrigger to refresh coordinates when routing occurs
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <GSAPContext.Provider value={null}>
      {children}
    </GSAPContext.Provider>
  );
}

export default GSAPProvider;
