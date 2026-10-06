"use client";

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { gsap } from "@/gsap";
import { lerp } from "@/utils/math";

export interface CrackCanvasHandle {
  generateCrack: (x: number, y: number, onComplete: () => void) => void;
  clearCanvas: () => void;
}

interface Segment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  thickness: number;
  opacity: number;
  progressStart: number; // 0 to 1
  progressEnd: number;   // 0 to 1
}

export const CrackCanvas = forwardRef<CrackCanvasHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const segmentsRef = useRef<Segment[]>([]);
  const animationRef = useRef<{ progress: number }>({ progress: 0 });

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(animationRef.current.progress); // redraw current state
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // set initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Expose controls to parent
  useImperativeHandle(ref, () => ({
    generateCrack(x: number, y: number, onComplete: () => void) {
      // Clear previous cracks
      segmentsRef.current = [];
      animationRef.current.progress = 0;

      // 1. Generate primary branches
      const primaryCount = 14 + Math.floor(Math.random() * 7); // 14 to 20 branches
      const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.7;

      for (let i = 0; i < primaryCount; i++) {
        // Distribute base angle roughly evenly around 360 degrees
        const baseAngle = (i / primaryCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
        generateBranch(x, y, baseAngle, maxDistance, 3.0, 1.0, 0, 0.7);
      }

      // 2. Generate a few tight concentric shatter fractures around center impact
      const fractureRings = 3;
      for (let r = 1; r <= fractureRings; r++) {
        const radius = r * 20 + Math.random() * 15;
        const ringSegments = 16 - r * 2;
        let lastPt = null;
        let firstPt = null;

        for (let i = 0; i <= ringSegments; i++) {
          const angle = (i / ringSegments) * Math.PI * 2 + (Math.random() - 0.5) * 0.15;
          const px = x + Math.cos(angle) * radius * (0.85 + Math.random() * 0.3);
          const py = y + Math.sin(angle) * radius * (0.85 + Math.random() * 0.3);

          if (i === 0) {
            firstPt = { x: px, y: py };
          } else if (lastPt) {
            // Segment of concentric shatter ring
            segmentsRef.current.push({
              x1: lastPt.x,
              y1: lastPt.y,
              x2: px,
              y2: py,
              thickness: (2.0 - r * 0.4) * (0.8 + Math.random() * 0.4),
              opacity: 0.95 - r * 0.15,
              progressStart: r * 0.08,
              progressEnd: r * 0.08 + 0.15,
            });
          }
          lastPt = { x: px, y: py };
        }

        // Close the ring loop
        if (lastPt && firstPt) {
          segmentsRef.current.push({
            x1: lastPt.x,
            y1: lastPt.y,
            x2: firstPt.x,
            y2: firstPt.y,
            thickness: (2.0 - r * 0.4) * (0.8 + Math.random() * 0.4),
            opacity: 0.95 - r * 0.15,
            progressStart: r * 0.08,
            progressEnd: r * 0.08 + 0.15,
          });
        }
      }

      // 3. Tween the crack animation progress from 0 to 1
      gsap.to(animationRef.current, {
        progress: 1,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => {
          draw(animationRef.current.progress);
        },
        onComplete: () => {
          draw(1);
          onComplete();
        },
      });
    },

    clearCanvas() {
      segmentsRef.current = [];
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    },
  }));

  // Recursive branch generator
  const generateBranch = (
    startX: number,
    startY: number,
    angle: number,
    maxLen: number,
    thickness: number,
    opacity: number,
    pStart: number, // progress range start (0 to 1)
    pEnd: number,    // progress range end (0 to 1)
    depth = 0
  ) => {
    // Prevent infinite recursion call stack size exceeded
    if (depth > 2 || maxLen < 12) return;

    const steps = 6 + Math.floor(Math.random() * 6); // 6 to 12 segments per branch
    const stepLength = (maxLen * (0.4 + Math.random() * 0.5)) / steps;

    let curX = startX;
    let curY = startY;
    let curAngle = angle;

    for (let s = 0; s < steps; s++) {
      const stepProgStart = pStart + (s / steps) * (pEnd - pStart);
      const stepProgEnd = pStart + ((s + 1) / steps) * (pEnd - pStart);

      // Wobble angle slightly for organic look
      curAngle += (Math.random() - 0.5) * 0.35;
      const nextX = curX + Math.cos(curAngle) * stepLength;
      const nextY = curY + Math.sin(curAngle) * stepLength;

      const tRatio = s / steps;
      const segThickness = thickness * (1 - tRatio * 0.7);
      const segOpacity = opacity * (1 - tRatio * 0.95);

      // Primary segment
      segmentsRef.current.push({
        x1: curX,
        y1: curY,
        x2: nextX,
        y2: nextY,
        thickness: segThickness,
        opacity: segOpacity,
        progressStart: stepProgStart,
        progressEnd: stepProgEnd,
      });

      // Spawn sub-branches (2-4 per primary branch, randomly along the path)
      if (s < steps - 1 && Math.random() < 0.35) {
        // Fork off sub-branch outwards
        const subAngle = curAngle + (Math.random() > 0.5 ? 1 : -1) * (0.6 + Math.random() * 0.8);
        const subMaxLen = stepLength * (steps - s) * 0.75;
        
        generateBranch(
          nextX,
          nextY,
          subAngle,
          subMaxLen,
          segThickness * 0.65,
          segOpacity * 0.8,
          stepProgEnd,
          stepProgEnd + 0.3,
          depth + 1
        );
      }

      curX = nextX;
      curY = nextY;
    }
  };

  // Draw the current state of cracks based on progress
  const draw = (progress: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    segmentsRef.current.forEach((seg) => {
      if (progress < seg.progressStart) return;

      ctx.beginPath();
      ctx.moveTo(seg.x1, seg.y1);

      // Configure white glass lines
      ctx.strokeStyle = `rgba(245, 245, 247, ${seg.opacity})`;
      ctx.lineWidth = seg.thickness;

      if (progress >= seg.progressEnd) {
        // Draw fully
        ctx.lineTo(seg.x2, seg.y2);
      } else {
        // Draw partially (interpolate path)
        const ratio = (progress - seg.progressStart) / (seg.progressEnd - seg.progressStart);
        const dx = lerp(seg.x1, seg.x2, ratio);
        const dy = lerp(seg.y1, seg.y2, ratio);
        ctx.lineTo(dx, dy);
      }
      ctx.stroke();
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20 w-full h-full pointer-events-none select-none"
    />
  );
});

CrackCanvas.displayName = "CrackCanvas";
export default CrackCanvas;
