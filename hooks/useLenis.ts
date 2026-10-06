"use client";

import { useContext } from "react";
import { LenisContext } from "@/components/common/SmoothScrollProvider";
import Lenis from "lenis";

export function useLenis(): Lenis | null {
  const context = useContext(LenisContext);
  return context;
}

export default useLenis;
