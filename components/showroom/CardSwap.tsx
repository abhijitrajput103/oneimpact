"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { gsap } from "@/gsap";

/* ─── Card ─────────────────────────────────────────────── */

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className, style, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card-swap-card ${customClass ?? ""} ${className ?? ""}`.trim()}
      style={style}
    />
  )
);
Card.displayName = "Card";

/* ─── Helpers ──────────────────────────────────────────── */

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

/* ─── CardSwap ─────────────────────────────────────────── */

export interface CardSwapRef {
  swap: () => void;
}

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "smooth";
  children: React.ReactNode;
}

const CardSwap = forwardRef<CardSwapRef, CardSwapProps>(({
  width = 560,
  height = 315,
  cardDistance = 24,
  verticalDistance = 32,
  delay = 4500,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 4,
  easing = "smooth",
  children,
}, ref) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const swapRef = useRef<() => void>(() => {});
  const isHoveredRef = useRef(false);

  useImperativeHandle(ref, () => ({
    swap: () => {
      swapRef.current();
    },
  }));

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
      }
    });

    const startInterval = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!isHoveredRef.current) {
          swap();
        }
      }, delay);
    };

    const swap = () => {
      if (order.current.length < 2) return;

      // If already animating, finish previous animation instantly to remain immediately responsive
      if (tlRef.current && tlRef.current.isActive()) {
        tlRef.current.progress(1);
        tlRef.current.kill();
      }

      startInterval();

      const [front, ...rest] = order.current;
      const elFront = refs[front]?.current;
      if (!elFront) return;

      const tl = gsap.timeline({
        onComplete: () => {
          order.current = [...rest, front];
        },
      });
      tlRef.current = tl;

      // Front card drops down snappily
      tl.to(elFront, {
        y: "+=360",
        opacity: 0.4,
        duration: 0.45,
        ease: "power2.in",
      });

      // Promote back cards forward into their next slots
      rest.forEach((idx, i) => {
        const el = refs[idx]?.current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: 0.5,
            ease: "power3.out",
          },
          "<0.05"
        );
        tl.set(el, { zIndex: slot.zIndex }, "<");
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length
      );

      // Return front card cleanly to back slot
      tl.set(elFront, {
        x: backSlot.x,
        z: backSlot.z,
        zIndex: backSlot.zIndex,
      });

      tl.to(elFront, {
        y: backSlot.y,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    swapRef.current = swap;
    startInterval();

    const node = containerRef.current;
    if (node) {
      const onEnter = () => {
        if (pauseOnHover) {
          isHoveredRef.current = true;
          clearInterval(intervalRef.current);
        }
      };
      const onLeave = () => {
        if (pauseOnHover) {
          isHoveredRef.current = false;
          startInterval();
        }
      };
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
      return () => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<CardProps & { ref?: React.Ref<HTMLDivElement> }>, {
          key: i,
          ref: refs[i],
          style: {
            width,
            height,
            ...(typeof child.props === 'object' && child.props !== null && 'style' in child.props
              ? ((child.props as Record<string, unknown>).style as React.CSSProperties)
              : {}),
          },
          onClick: (e: React.MouseEvent) => {
            if (typeof child.props === 'object' && child.props !== null && 'onClick' in child.props) {
              (child.props as Record<string, unknown> & { onClick?: (e: React.MouseEvent) => void }).onClick?.(e);
            }
            swapRef.current();
            onCardClick?.(i);
          },
        })
      : child
  );

  return (
    <>
      <div
        ref={containerRef}
        className="card-swap-container"
        style={{ width, height }}
      >
        {rendered}
      </div>

      <style jsx global>{`
        .card-swap-container {
          position: absolute;
          bottom: 20px;
          right: 0px;
          transform: scale(0.95);
          transform-origin: center right;
          perspective: 1000px;
          overflow: visible;
        }
        .card-swap-card {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #0a0a0a;
          transform-style: preserve-3d;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .card-swap-card:hover {
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(218, 159, 55, 0.15);
        }
        @media (min-width: 1536px) {
          .card-swap-container {
            right: 0;
            transform: scale(0.95);
            transform-origin: center right;
          }
        }
        @media (max-width: 1535px) and (min-width: 1280px) {
          .card-swap-container {
            right: 0;
            transform: scale(0.82);
            transform-origin: center right;
          }
        }
        @media (max-width: 1279px) and (min-width: 1024px) {
          .card-swap-container {
            right: 0;
            transform: scale(0.70);
            transform-origin: center right;
          }
        }
        @media (max-width: 1023px) {
          .card-swap-container {
            right: auto;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%) scale(0.82);
            transform-origin: bottom center;
          }
        }
        @media (max-width: 768px) {
          .card-swap-container {
            right: auto;
            left: 50%;
            bottom: 15px;
            transform: translateX(-50%) scale(0.68);
            transform-origin: bottom center;
          }
        }
        @media (max-width: 640px) {
          .card-swap-container {
            right: auto;
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%) scale(0.55);
            transform-origin: bottom center;
          }
        }
        @media (max-width: 480px) {
          .card-swap-container {
            right: auto;
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%) scale(0.46);
            transform-origin: bottom center;
          }
        }
        @media (max-width: 380px) {
          .card-swap-container {
            right: auto;
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%) scale(0.38);
            transform-origin: bottom center;
          }
        }
      `}</style>
    </>
  );
});

CardSwap.displayName = "CardSwap";

export default CardSwap;
