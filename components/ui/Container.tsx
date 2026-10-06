import React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean; // If true, removes max-width and margin auto to act as a custom wrapper
}

export function Container({ children, className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        !clean && "w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
