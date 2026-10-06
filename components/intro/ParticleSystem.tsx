"use client";

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export interface ParticleSystemHandle {
  spawnParticles: (x: number, y: number) => void;
  clear: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
}

export const ParticleSystem = forwardRef<ParticleSystemHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameIdRef = useRef<number | null>(null);

  // Resize canvas on mount
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

  useImperativeHandle(ref, () => ({
    spawnParticles(x: number, y: number) {
      const pCount = 50 + Math.floor(Math.random() * 30); // 50 to 80 particles
      const colors = ["#F5F5F7", "#E2E8F0", "#0066FF", "#38BDF8", "#FFFFFF"];

      for (let i = 0; i < pCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 8;
        
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (1 + Math.random() * 3), // slight upwards burst
          size: 1 + Math.random() * 2.5, // 1px to 3.5px
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.8 + Math.random() * 0.2,
          decay: 0.015 + Math.random() * 0.02, // fades in 1 to 2 seconds
          gravity: 0.12 + Math.random() * 0.1, // falling down
        });
      }

      // Start loop if not already running
      if (!frameIdRef.current) {
        tick();
      }
    },
    clear() {
      particlesRef.current = [];
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
        frameIdRef.current = null;
      }
    },
  }));

  const tick = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      // Draw particle as a tiny glass reflection sparkle
      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      
      // Sparkles are drawn as little diamond shapes, dust as circles
      if (Math.random() > 0.5) {
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      } else {
        // Draw small diamond shape
        ctx.moveTo(p.x, p.y - p.size);
        ctx.lineTo(p.x + p.size, p.y);
        ctx.lineTo(p.x, p.y + p.size);
        ctx.lineTo(p.x - p.size, p.y);
        ctx.closePath();
      }
      
      ctx.fill();
      ctx.restore();
    }

    if (particles.length > 0) {
      frameIdRef.current = requestAnimationFrame(tick);
    } else {
      frameIdRef.current = null;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20 w-full h-full pointer-events-none select-none"
    />
  );
});

ParticleSystem.displayName = "ParticleSystem";
export default ParticleSystem;
