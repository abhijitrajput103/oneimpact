"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/gsap";
import { HERO_IMAGES } from "@/constants/heroImages";
import { createCardConfig, getDistance } from "@/utils/trailHelpers";

interface UseCursorTrailProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  enabled?: boolean;
}

export function useCursorTrail({ containerRef, enabled = true }: UseCursorTrailProps) {
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastSpawnTime = useRef(0);
  const cardIndex = useRef(0);
  const imageIndex = useRef(0);
  const activeCards = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enabled) return;

    // Check accessibility reduced-motion query
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Detect device type
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;

    // Responsive configuration
    const maxCards = isMobile ? 0 : isTablet ? 6 : 12;
    const spawnDistanceThreshold = isTablet ? 80 : 60; // minimum pixels moved before spawning
    const spawnCooldown = 100; // ms

    if (isMobile) {
      // Mobile tap interaction: create a floating card at touch position
      const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        spawnCard(touch.clientX, touch.clientY, 8); // 8 max cards for mobile tapping
      };

      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
      };
    }

    // Desktop/Tablet cursor movement trail
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dist = getDistance(
        e.clientX,
        e.clientY,
        lastMousePos.current.x,
        lastMousePos.current.y
      );

      // Spawn only if moved enough and cooldown finished
      if (dist > spawnDistanceThreshold && now - lastSpawnTime.current > spawnCooldown) {
        spawnCard(e.clientX, e.clientY, maxCards);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        lastSpawnTime.current = now;
      }
    };

    const spawnCard = (x: number, y: number, cap: number) => {
      const parent = containerRef.current;
      if (!parent) return;

      const id = cardIndex.current++;
      const currentImgIdx = imageIndex.current;
      
      // Cycle through portfolio images
      imageIndex.current = (imageIndex.current + 1) % HERO_IMAGES.length;

      const config = createCardConfig(x, y, id, currentImgIdx);
      const item = HERO_IMAGES[currentImgIdx];

      // Create card DOM element manually to bypass React render loops
      const cardEl = document.createElement("div");
      cardEl.className = "absolute pointer-events-none select-none glassmorphism-dark rounded-xl p-3 shadow-2xl border border-white/5 opacity-0";
      cardEl.style.width = "220px";
      cardEl.style.height = "280px";
      cardEl.style.zIndex = `${10 + (id % 100)}`;
      cardEl.style.transformOrigin = "center center";

      // Render inner content including loader, fallback gradient, title & tags
      cardEl.innerHTML = `
        <div class="relative w-full h-full rounded-lg overflow-hidden flex flex-col justify-end p-4">
          <!-- Fallback/Loader Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 z-0"></div>
          
          <!-- Image Layer -->
          <img 
            src="${item.unsplashUrl}" 
            alt="${item.title}" 
            class="absolute inset-0 w-full h-full object-cover opacity-80 z-0 transition-transform duration-[2s]"
            style="transform: scale(1.05);"
          />
          
          <!-- Shadow Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
          
          <!-- Info Details -->
          <div class="relative z-20 flex flex-col gap-1">
            <span class="text-[8px] font-display font-extrabold tracking-widest text-accent-blue">${item.category}</span>
            <h4 class="text-sm font-display font-black tracking-wider text-off-white uppercase leading-none">${item.title}</h4>
          </div>
        </div>
      `;

      parent.appendChild(cardEl);
      activeCards.current.push(cardEl);

      // 1. Spawning/Intro animation
      gsap.fromTo(
        cardEl,
        {
          x: x - 110, // center offset width
          y: y - 140, // center offset height
          scale: 0.3,
          rotation: config.rotation * 1.5,
          opacity: 0,
        },
        {
          scale: config.scale,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.4)",
        }
      );

      // Zoom image slightly on enter for parallax
      const img = cardEl.querySelector("img");
      if (img) {
        gsap.to(img, { scale: 1.0, duration: 1.2, ease: "power2.out" });
      }

      // 2. Slow physical drift/float motion
      gsap.to(cardEl, {
        y: `+=20`,
        rotation: `+=${config.rotation * 0.4}`,
        duration: config.lifetime,
        ease: "sine.out",
      });

      // 3. Fade out and recycle DOM nodes
      const fadeOut = () => {
        gsap.to(cardEl, {
          opacity: 0,
          scale: 0.75,
          y: "+=35",
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            cardEl.remove();
            activeCards.current = activeCards.current.filter((c) => c !== cardEl);
          },
        });
      };

      // Set timeout to start fade-out sequence
      const timeoutId = setTimeout(fadeOut, (config.lifetime - 0.6) * 1000);
      cardEl.setAttribute("data-timeout-id", String(timeoutId));

      // 4. Recycle oldest cards if we exceed the device cap limit
      if (activeCards.current.length > cap) {
        const oldest = activeCards.current.shift();
        if (oldest) {
          // Cancel normal fadeout scheduler
          const tid = oldest.getAttribute("data-timeout-id");
          if (tid) clearTimeout(Number(tid));
          
          // Animate instant drop-out
          gsap.to(oldest, {
            opacity: 0,
            scale: 0.6,
            y: "+=50",
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => oldest.remove(),
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Clean up remaining DOM cards on unmount
      activeCards.current.forEach((card) => {
        const tid = card.getAttribute("data-timeout-id");
        if (tid) clearTimeout(Number(tid));
        card.remove();
      });
      activeCards.current = [];
    };
  }, [containerRef, enabled]);
}

export default useCursorTrail;
