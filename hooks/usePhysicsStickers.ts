"use client";

import { useCallback, useRef } from "react";
import { gsap } from "@/gsap";

export interface StickerPhysicsState {
  x: number;
  y: number;
  rotation: number;
  vx: number;
  vy: number;
  vr: number; // rotational velocity
  radius: number; // collision radius for ball-like bouncing
  w: number; // actual element width for boundary clamping
  h: number; // actual element height for boundary clamping
}

interface DragState {
  active: boolean;
  stickerId: string | null;
  offsetX: number;
  offsetY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
  velocityX: number;
  velocityY: number;
}

// --- Physics constants ---
const GRAVITY = 0.45;
const FRICTION = 0.985;
const GROUND_FRICTION = 0.96;
const ROTATION_FRICTION = 0.94;
const BOUNCE_RESTITUTION = 0.72;
const STICKER_BOUNCE = 0.8;
const VELOCITY_SCALE = 0.8;
const REST_THRESHOLD_VY = 0.5;
const DEFAULT_RADIUS = 55;
const WALL_PADDING = 8; // keep stickers this many px inside walls

export function usePhysicsStickers(containerRef: React.RefObject<HTMLDivElement | null>) {
  const stickersRef = useRef<Map<string, StickerPhysicsState>>(new Map());
  const dragRef = useRef<DragState>({
    active: false,
    stickerId: null,
    offsetX: 0,
    offsetY: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    velocityX: 0,
    velocityY: 0,
  });
  const rafRef = useRef<number | null>(null);
  const isSimulatingRef = useRef(false);

  const getContainerBounds = useCallback(() => {
    if (!containerRef.current) return { width: 0, height: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }, [containerRef]);

  const registerSticker = useCallback(
    (
      id: string,
      initialX: number,
      initialY: number,
      initialRotation = 0,
      width = 120,
      height = 120,
      radius = DEFAULT_RADIUS
    ) => {
      const existing = stickersRef.current.get(id);
      if (existing) {
        // Update dimensions and radius if responsive layout changed
        existing.w = width;
        existing.h = height;
        existing.radius = radius;
        return;
      }

      stickersRef.current.set(id, {
        x: initialX,
        y: initialY,
        rotation: initialRotation,
        vx: 0,
        vy: 0,
        vr: 0,
        radius,
        w: width,
        h: height,
      });
    },
    []
  );

  const resetStickers = useCallback(() => {
    stickersRef.current.clear();
  }, []);

  // Resolve circle-circle collisions between stickers
  const resolveCollisions = useCallback(() => {
    const entries = Array.from(stickersRef.current.entries());
    const dragId = dragRef.current.active ? dragRef.current.stickerId : null;

    for (let i = 0; i < entries.length; i++) {
      for (let j = i + 1; j < entries.length; j++) {
        const [idA, a] = entries[i];
        const [idB, b] = entries[j];

        // Center of each sticker using actual dimensions
        const cx_a = a.x + a.w / 2;
        const cy_a = a.y + a.h / 2;
        const cx_b = b.x + b.w / 2;
        const cy_b = b.y + b.h / 2;

        const dx = cx_b - cx_a;
        const dy = cy_b - cy_a;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = a.radius + b.radius;

        if (dist < minDist && dist > 0.01) {
          const nx = dx / dist;
          const ny = dy / dist;

          const overlap = (minDist - dist) / 2;
          const aIsDragged = idA === dragId;
          const bIsDragged = idB === dragId;

          if (!aIsDragged && !bIsDragged) {
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
          } else if (aIsDragged) {
            b.x += nx * overlap * 2;
            b.y += ny * overlap * 2;
          } else {
            a.x -= nx * overlap * 2;
            a.y -= ny * overlap * 2;
          }

          const relVx = a.vx - b.vx;
          const relVy = a.vy - b.vy;
          const relVelDotNormal = relVx * nx + relVy * ny;

          if (relVelDotNormal > 0) {
            const impulse = relVelDotNormal * STICKER_BOUNCE;

            if (!aIsDragged) {
              a.vx -= impulse * nx;
              a.vy -= impulse * ny;
              a.vr += (Math.random() - 0.5) * impulse * 0.5;
            }
            if (!bIsDragged) {
              b.vx += impulse * nx;
              b.vy += impulse * ny;
              b.vr += (Math.random() - 0.5) * impulse * 0.5;
            }
          }
        }
      }
    }
  }, []);

  const startSimulation = useCallback(() => {
    if (isSimulatingRef.current) return;
    isSimulatingRef.current = true;

    const tick = () => {
      const bounds = getContainerBounds();
      if (bounds.width === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      resolveCollisions();

      stickersRef.current.forEach((state, id) => {
        // Skip sticker being dragged
        if (dragRef.current.active && dragRef.current.stickerId === id) {
          const el = containerRef.current?.querySelector(`[data-sticker-id="${id}"]`);
          if (el) {
            gsap.set(el, { x: state.x, y: state.y, rotation: state.rotation });
          }
          return;
        }

        // --- Apply gravity ---
        state.vy += GRAVITY;

        // --- Apply air friction ---
        state.vx *= FRICTION;
        state.vy *= FRICTION;
        state.vr *= ROTATION_FRICTION;

        // --- Update position ---
        state.x += state.vx;
        state.y += state.vy;
        state.rotation += state.vr;

        // --- Boundary collisions using rotation-aware AABB ---
        // When rotated, the axis-aligned bounding box expands.
        // AABB width  = |w·cos θ| + |h·sin θ|
        // AABB height = |w·sin θ| + |h·cos θ|
        const rad = (state.rotation * Math.PI) / 180;
        const cosA = Math.abs(Math.cos(rad));
        const sinA = Math.abs(Math.sin(rad));
        const aabbW = state.w * cosA + state.h * sinA;
        const aabbH = state.w * sinA + state.h * cosA;

        // The transform origin is top-left, so when rotated the visual
        // bounding box shifts. We offset x/y by half the AABB expansion
        // to keep the sticker visually inside.
        const expandX = (aabbW - state.w) / 2;
        const expandY = (aabbH - state.h) / 2;

        const maxX = bounds.width - aabbW - WALL_PADDING + expandX;
        const maxY = bounds.height - aabbH - WALL_PADDING + expandY;
        const minX = WALL_PADDING + expandX;
        const minY = WALL_PADDING + expandY;

        // Floor (bottom wall)
        if (state.y > maxY) {
          state.y = maxY;
          state.vy = -Math.abs(state.vy) * BOUNCE_RESTITUTION;
          state.vx *= GROUND_FRICTION;
          state.vr += state.vx * 0.08;

          if (Math.abs(state.vy) < REST_THRESHOLD_VY) {
            state.vy = 0;
          }
        }

        // Ceiling (top wall)
        if (state.y < minY) {
          state.y = minY;
          state.vy = Math.abs(state.vy) * BOUNCE_RESTITUTION;
          state.vr += (Math.random() - 0.5) * 2;
        }

        // Left wall
        if (state.x < minX) {
          state.x = minX;
          state.vx = Math.abs(state.vx) * BOUNCE_RESTITUTION;
          state.vr += (Math.random() - 0.5) * 2;
        }

        // Right wall
        if (state.x > maxX) {
          state.x = maxX;
          state.vx = -Math.abs(state.vx) * BOUNCE_RESTITUTION;
          state.vr += (Math.random() - 0.5) * 2;
        }

        // --- Render via GSAP ---
        const el = containerRef.current?.querySelector(`[data-sticker-id="${id}"]`);
        if (el) {
          gsap.set(el, {
            x: state.x,
            y: state.y,
            rotation: state.rotation,
          });
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [getContainerBounds, containerRef, resolveCollisions]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, stickerId: string) => {
      const state = stickersRef.current.get(stickerId);
      if (!state) return;

      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();

      const el = container.querySelector(`[data-sticker-id="${stickerId}"]`) as HTMLElement;
      if (!el) return;

      el.setPointerCapture(e.pointerId);

      const pointerX = e.clientX - containerRect.left;
      const pointerY = e.clientY - containerRect.top;

      dragRef.current = {
        active: true,
        stickerId,
        offsetX: pointerX - state.x,
        offsetY: pointerY - state.y,
        lastX: pointerX,
        lastY: pointerY,
        lastTime: performance.now(),
        velocityX: 0,
        velocityY: 0,
      };

      state.vx = 0;
      state.vy = 0;
      state.vr = 0;

      gsap.to(el, {
        scale: 1.12,
        duration: 0.2,
        ease: "back.out(1.7)",
      });

      startSimulation();
    },
    [containerRef, startSimulation]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent, stickerId: string) => {
      const drag = dragRef.current;
      if (!drag.active || drag.stickerId !== stickerId) return;

      const state = stickersRef.current.get(stickerId);
      if (!state) return;

      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();

      const pointerX = e.clientX - containerRect.left;
      const pointerY = e.clientY - containerRect.top;
      const now = performance.now();
      const dt = Math.max(now - drag.lastTime, 1);

      const rawVx = (pointerX - drag.lastX) / dt * 16;
      const rawVy = (pointerY - drag.lastY) / dt * 16;
      drag.velocityX = drag.velocityX * 0.5 + rawVx * 0.5;
      drag.velocityY = drag.velocityY * 0.5 + rawVy * 0.5;

      drag.lastX = pointerX;
      drag.lastY = pointerY;
      drag.lastTime = now;

      state.x = pointerX - drag.offsetX;
      state.y = pointerY - drag.offsetY;
      state.rotation += drag.velocityX * 0.15;

      const el = container.querySelector(`[data-sticker-id="${stickerId}"]`);
      if (el) {
        gsap.set(el, {
          x: state.x,
          y: state.y,
          rotation: state.rotation,
        });
      }
    },
    [containerRef]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent, stickerId: string) => {
      const drag = dragRef.current;
      if (!drag.active || drag.stickerId !== stickerId) return;

      const state = stickersRef.current.get(stickerId);
      if (!state) return;

      state.vx = drag.velocityX * VELOCITY_SCALE;
      state.vy = drag.velocityY * VELOCITY_SCALE;
      state.vr = drag.velocityX * 0.3;

      drag.active = false;
      drag.stickerId = null;

      const el = containerRef.current?.querySelector(`[data-sticker-id="${stickerId}"]`);
      if (el) {
        el.releasePointerCapture(e.pointerId);
        gsap.to(el, {
          scale: 1,
          duration: 0.35,
          ease: "back.out(1.4)",
        });
      }

      startSimulation();
    },
    [containerRef, startSimulation]
  );

  const cleanup = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    isSimulatingRef.current = false;
  }, []);

  return {
    registerSticker,
    resetStickers,
    startSimulation,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    cleanup,
  };
}
