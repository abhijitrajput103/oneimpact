"use client";

import React, { forwardRef, useImperativeHandle, useRef, useEffect } from "react";

export interface GlassShardsHandle {
  spawnShards: (x: number, y: number) => void;
  clear: () => void;
}

interface FallingShard {
  // Shape
  points: { x: number; y: number }[];
  // Physics
  cx: number;
  cy: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  // Visual
  opacity: number;
  size: number;
}

const GRAVITY = 980; // px/s^2
const SHARD_COUNT = 28;
const LARGE_SHARD_COUNT = 8;

/**
 * Generate a random convex polygon (glass shard shape) centered at origin.
 * Uses angular sweep to create irregular triangular/polygonal shapes.
 */
function generateShardShape(size: number, vertexCount: number): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const angleStep = (Math.PI * 2) / vertexCount;

  for (let i = 0; i < vertexCount; i++) {
    const angle = angleStep * i + (Math.random() - 0.5) * angleStep * 0.6;
    const radius = size * (0.5 + Math.random() * 0.5);
    points.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    });
  }
  return points;
}



export const GlassShards = forwardRef<GlassShardsHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shardsRef = useRef<FallingShard[]>([]);
  const frameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Resize canvas to fill viewport
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
    };
  }, []);

  // Physics tick — updates shard positions with gravity and draws them
  const tick = (timestamp: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const dt = lastTimeRef.current ? Math.min((timestamp - lastTimeRef.current) / 1000, 0.05) : 0.016;
    lastTimeRef.current = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const shards = shardsRef.current;
    const viewH = canvas.height;

    for (let i = shards.length - 1; i >= 0; i--) {
      const s = shards[i];

      // Apply gravity
      s.vy += GRAVITY * dt;

      // Apply velocity
      s.cx += s.vx * dt;
      s.cy += s.vy * dt;

      // Rotate
      s.rotation += s.rotationSpeed * dt;

      // Fade out as it falls past the screen
      if (s.cy > viewH * 0.6) {
        s.opacity -= dt * 1.5;
      }

      // Remove dead shards
      if (s.opacity <= 0 || s.cy > viewH + 200) {
        shards.splice(i, 1);
        continue;
      }

      // Draw the shard on canvas
      ctx.save();
      ctx.translate(s.cx, s.cy);
      ctx.rotate(s.rotation);
      ctx.globalAlpha = s.opacity;

      // Glass body — semi-transparent white with gradient
      const grad = ctx.createLinearGradient(-s.size, -s.size, s.size, s.size);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.25)");
      grad.addColorStop(0.5, "rgba(255, 255, 255, 0.08)");
      grad.addColorStop(1, "rgba(200, 220, 255, 0.15)");
      ctx.fillStyle = grad;

      ctx.beginPath();
      const pts = s.points;
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let j = 1; j < pts.length; j++) {
        ctx.lineTo(pts[j].x, pts[j].y);
      }
      ctx.closePath();
      ctx.fill();

      // Glass edge — bright white edge highlight
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 * s.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Specular reflection — small bright line across the shard
      ctx.beginPath();
      const reflectAngle = Math.PI * 0.25;
      const reflectLen = s.size * 0.3;
      ctx.moveTo(
        Math.cos(reflectAngle) * reflectLen * -0.5,
        Math.sin(reflectAngle) * reflectLen * -0.5
      );
      ctx.lineTo(
        Math.cos(reflectAngle) * reflectLen * 0.5,
        Math.sin(reflectAngle) * reflectLen * 0.5
      );
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.5 * s.opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    }

    if (shards.length > 0) {
      frameIdRef.current = requestAnimationFrame(tick);
    } else {
      frameIdRef.current = null;
      lastTimeRef.current = 0;
    }
  };

  useImperativeHandle(ref, () => ({
    spawnShards(impactX: number, impactY: number) {
      const newShards: FallingShard[] = [];
      const viewW = window.innerWidth;
      const viewH = window.innerHeight;

      // Generate large falling glass panel pieces
      for (let i = 0; i < LARGE_SHARD_COUNT; i++) {
        const size = 60 + Math.random() * 100; // 60px to 160px
        const vertexCount = 3 + Math.floor(Math.random() * 3); // 3–5 vertices
        const points = generateShardShape(size, vertexCount);

        // Position: spread across the full viewport, biased toward the impact area
        const spreadX = (Math.random() - 0.5) * viewW * 0.8;
        const spreadY = (Math.random() - 0.5) * viewH * 0.6;
        const cx = impactX + spreadX;
        const cy = impactY + spreadY;

        // Velocity: slight outward burst from impact, then gravity takes over
        const dx = cx - impactX;
        const dy = cy - impactY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const burstSpeed = 40 + Math.random() * 100;

        newShards.push({
          points,
          cx,
          cy,
          vx: (dx / dist) * burstSpeed + (Math.random() - 0.5) * 30,
          vy: (dy / dist) * burstSpeed * 0.3 - 50 - Math.random() * 80, // slight upward then gravity pulls down
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 4,
          opacity: 0.85 + Math.random() * 0.15,
          size,
        });
      }

      // Generate medium shards scattered around impact
      for (let i = 0; i < SHARD_COUNT; i++) {
        const size = 15 + Math.random() * 45; // 15px to 60px
        const vertexCount = 3 + Math.floor(Math.random() * 2); // 3–4 vertices
        const points = generateShardShape(size, vertexCount);

        const angle = Math.random() * Math.PI * 2;
        const spread = 30 + Math.random() * 250;
        const cx = impactX + Math.cos(angle) * spread;
        const cy = impactY + Math.sin(angle) * spread;

        // Outward burst velocity
        const burstSpeed = 80 + Math.random() * 200;
        const dx = cx - impactX;
        const dy = cy - impactY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        newShards.push({
          points,
          cx,
          cy,
          vx: (dx / dist) * burstSpeed + (Math.random() - 0.5) * 40,
          vy: (dy / dist) * burstSpeed * 0.4 - 120 - Math.random() * 150, // upward burst then falls
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 8,
          opacity: 0.7 + Math.random() * 0.3,
          size,
        });
      }

      // Generate tiny glass dust shards
      for (let i = 0; i < 20; i++) {
        const size = 4 + Math.random() * 10;
        const points = generateShardShape(size, 3);

        const angle = Math.random() * Math.PI * 2;
        const spread = Math.random() * 100;

        newShards.push({
          points,
          cx: impactX + Math.cos(angle) * spread,
          cy: impactY + Math.sin(angle) * spread,
          vx: (Math.random() - 0.5) * 300,
          vy: -200 - Math.random() * 250,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 0.5 + Math.random() * 0.5,
          size,
        });
      }

      shardsRef.current = newShards;
      lastTimeRef.current = 0;

      if (!frameIdRef.current) {
        frameIdRef.current = requestAnimationFrame(tick);
      }
    },

    clear() {
      shardsRef.current = [];
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
        frameIdRef.current = null;
      }
      lastTimeRef.current = 0;
    },
  }));

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-30 w-full h-full pointer-events-none select-none"
    />
  );
});

GlassShards.displayName = "GlassShards";
export default GlassShards;
