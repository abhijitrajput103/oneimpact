"use client";

import React from "react";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { GSAPProvider } from "@/components/common/GSAPProvider";
import { CursorProvider } from "@/hooks/useCursor";
import { SectionImageLoading } from "@/components/common/SectionImageLoading";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <GSAPProvider>
      <SmoothScrollProvider>
        <CursorProvider>
          <SectionImageLoading />
          {children}
        </CursorProvider>
      </SmoothScrollProvider>
    </GSAPProvider>
  );
}

export default Providers;
