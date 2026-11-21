"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SectionImageLoading() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    // Start the whole row together, including images off to the side of a carousel.
    const sections = new Set<HTMLElement>();
    for (const image of document.querySelectorAll('section img[loading="lazy"]')) {
      const section = image.closest("section");
      if (section) sections.add(section);
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        for (const image of entry.target.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')) {
          if (image.closest("section") === entry.target) image.loading = "eager";
        }
      }
    }, { rootMargin: "2400px 0px" });

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
