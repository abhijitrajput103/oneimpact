"use client";

import React from "react";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { GSAPProvider } from "@/components/common/GSAPProvider";
import { CursorProvider } from "@/hooks/useCursor";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <GSAPProvider>
      <SmoothScrollProvider>
        <CursorProvider>
          {children}
        </CursorProvider>
      </SmoothScrollProvider>
    </GSAPProvider>
  );
}

export default Providers;
