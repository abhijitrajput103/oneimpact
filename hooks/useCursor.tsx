"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type CursorType = "default" | "hover" | "text" | "hidden" | "magnetic";

interface CursorContextType {
  cursorType: CursorType;
  cursorText: string;
  magneticTarget: HTMLElement | null;
  setCursorType: (type: CursorType) => void;
  setCursorText: (text: string) => void;
  setMagneticTarget: (target: HTMLElement | null) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

interface CursorProviderProps {
  children: React.ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
  const [cursorType, setCursorTypeState] = useState<CursorType>("default");
  const [cursorText, setCursorTextState] = useState<string>("");
  const [magneticTarget, setMagneticTargetState] = useState<HTMLElement | null>(null);

  const setCursorType = useCallback((type: CursorType) => {
    setCursorTypeState(type);
  }, []);

  const setCursorText = useCallback((text: string) => {
    setCursorTextState(text);
  }, []);

  const setMagneticTarget = useCallback((target: HTMLElement | null) => {
    setMagneticTargetState(target);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorTypeState("default");
    setCursorTextState("");
    setMagneticTargetState(null);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorType,
        cursorText,
        magneticTarget,
        setCursorType,
        setCursorText,
        setMagneticTarget,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
export default useCursor;
