"use client";

import { useEffect, useRef } from "react";

export function FooterEffects({ children }: { children: React.ReactNode }) {
  const ftRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ft = ftRef.current;
    const note = ft?.querySelector<HTMLAnchorElement>("[data-footer-note]");
    if (!ft) return;

    const cols = ["#F9D230", "#4066C6", "#f3f1ea", "#F9D230"];

    // Check if already in viewport or observe entrance
    const checkInView = () => {
      const rect = ft.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.98) {
        ft.classList.add("in");
        return true;
      }
      return false;
    };

    let observer: IntersectionObserver | null = null;
    if (!checkInView()) {
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                ft.classList.add("in");
                obs.disconnect();
              }
            });
          },
          { threshold: 0.05 }
        );
        observer.observe(ft);
      } else {
        ft.classList.add("in");
      }
    }

    // Sparkle generator function
    const spark = (x: number, y: number, burst: boolean) => {
      const e = document.createElement("i");
      e.className = "spk";
      e.style.left = `${x}px`;
      e.style.top = `${y}px`;
      e.style.setProperty("--k", cols[(Math.random() * 4) | 0]);

      if (burst) {
        const a = Math.random() * Math.PI * 2;
        const d = 60 + Math.random() * 110;
        e.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        e.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        const size = 8 + Math.random() * 10;
        e.style.width = `${size}px`;
        e.style.height = `${size}px`;
      } else {
        e.style.setProperty("--dx", `${Math.random() * 40 - 20}px`);
      }

      document.body.appendChild(e);
      setTimeout(() => {
        if (e.parentNode) e.remove();
      }, 850);
    };

    // Pointer move on footer — updates flashlight position and emits trail sparks
    let last = 0;
    const onFooterPointerMove = (e: PointerEvent) => {
      const r = ft.getBoundingClientRect();
      ft.style.setProperty("--mx", `${e.clientX - r.left}px`);
      ft.style.setProperty("--my", `${e.clientY - r.top}px`);
      const now = Date.now();
      if (now - last > 55) {
        last = now;
        spark(e.clientX, e.clientY, false);
      }
    };
    ft.addEventListener("pointermove", onFooterPointerMove);

    // Note 3D perspective tilt & burst on click
    let onNotePointerMove: ((e: PointerEvent) => void) | null = null;
    let onNotePointerLeave: (() => void) | null = null;
    let onNoteClick: ((e: MouseEvent) => void) | null = null;

    if (note) {
      onNotePointerMove = (e: PointerEvent) => {
        const r = note.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        note.style.transform = `perspective(800px) rotateX(${-y * 14}deg) rotateY(${x * 16}deg) rotate(1deg) scale(1.05)`;
      };

      onNotePointerLeave = () => {
        note.style.transform = "";
      };

      onNoteClick = () => {
        const r = note.getBoundingClientRect();
        for (let i = 0; i < 30; i++) {
          spark(r.left + r.width / 2, r.top + r.height / 2, true);
        }
      };

      note.addEventListener("pointermove", onNotePointerMove);
      note.addEventListener("pointerleave", onNotePointerLeave);
      note.addEventListener("click", onNoteClick);
    }

    // Social icon burst on click
    const socLinks = ft.querySelectorAll<HTMLAnchorElement>(".soc a");
    const socHandlers: Array<{ el: HTMLAnchorElement; fn: (e: MouseEvent) => void }> = [];
    socLinks.forEach((a) => {
      const fn = () => {
        const r = a.getBoundingClientRect();
        for (let i = 0; i < 12; i++) {
          spark(r.left + r.width / 2, r.top + r.height / 2, true);
        }
      };
      a.addEventListener("click", fn);
      socHandlers.push({ el: a, fn });
    });

    return () => {
      observer?.disconnect();
      ft.removeEventListener("pointermove", onFooterPointerMove);
      if (note) {
        if (onNotePointerMove) note.removeEventListener("pointermove", onNotePointerMove);
        if (onNotePointerLeave) note.removeEventListener("pointerleave", onNotePointerLeave);
        if (onNoteClick) note.removeEventListener("click", onNoteClick);
      }
      socHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      document.querySelectorAll(".spk").forEach((el) => el.remove());
    };
  }, []);

  return <footer ref={ftRef} className="ft select-none" id="ft">{children}</footer>;
}
