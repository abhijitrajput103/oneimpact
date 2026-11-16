"use client";

import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManifesto } from "@/components/about/AboutManifesto";
import { ImpactChronicle } from "@/components/about/ImpactChronicle";
import { AboutDisciplines } from "@/components/about/AboutDisciplines";
import { AboutValuesCTA } from "@/components/about/AboutValuesCTA";

export default function AboutPage() {
  React.useEffect(() => {
    document.body.classList.remove("custom-cursor-active");
    document.body.style.cursor = "auto";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero — Tilted headline, gold paper texture, center computer with scroll popup */}
        <AboutHero />

        {/* 2. Section 02: The Manifesto — Editorial philosophy, typography & motion */}
        <AboutManifesto />

        {/* 3. Section 03: The Impact Chronicle — Interactive editorial timeline */}
        <ImpactChronicle />

        {/* 4. Section 04: Seven Disciplines — 3D isometric fanned card engine */}
        <AboutDisciplines />

        {/* 5. Values marquee + CTA with parallax */}
        <AboutValuesCTA />
      </main>

      <Footer />
    </div>
  );
}
