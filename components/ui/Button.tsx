"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { useCursor } from "@/hooks/useCursor";
import { MagneticButton } from "./MagneticButton";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  magnetic?: boolean;
  arrow?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  magnetic = true,
  arrow = true,
  ...props
}: ButtonProps) {
  const { setCursorType, resetCursor } = useCursor();

  const buttonContent = (
    <button
      className={cn(
        "relative overflow-hidden group px-8 py-4 font-display text-xs font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 cursor-none select-none transition-colors duration-300",
        // Primary: Solid White background, bold black text, strong drop shadow
        variant === "primary" &&
          "bg-white text-black font-black border border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:bg-black hover:text-white hover:border-accent-blue",
        // Secondary: Electric Blue background, white text. Slides in black background on hover
        variant === "secondary" &&
          "bg-accent-blue text-off-white border border-accent-blue hover:text-off-white hover:border-white/20",
        // Outline: Bordered button
        variant === "outline" &&
          "bg-transparent text-off-white border border-white/20 hover:border-off-white hover:text-black",
        // Text: Simple text button with sliding underline
        variant === "text" &&
          "bg-transparent text-off-white px-0 py-1 border-b border-white/10 hover:border-accent-blue rounded-none tracking-widest",
        className
      )}
      onMouseEnter={() => !magnetic && setCursorType("hover")}
      onMouseLeave={() => !magnetic && resetCursor()}
      {...props}
    >
      {/* Background slide effects */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-accent-blue origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-main -z-10 rounded-full" />
      )}
      {variant === "secondary" && (
        <span className="absolute inset-0 w-full h-full bg-black origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-main -z-10 rounded-full" />
      )}
      {variant === "outline" && (
        <span className="absolute inset-0 w-full h-full bg-off-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-main -z-10 rounded-full" />
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2" data-magnetic-child>
        <span>{children}</span>
        {arrow && (
          <span className="relative overflow-hidden w-3 h-3 flex items-center justify-center">
            <svg
              className="w-3 h-3 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        )}
      </span>
    </button>
  );

  if (magnetic) {
    return <MagneticButton>{buttonContent}</MagneticButton>;
  }

  return buttonContent;
}

export default Button;
