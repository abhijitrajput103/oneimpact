"use client";

import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManifesto } from "@/components/about/AboutManifesto";
import { ImpactChronicle } from "@/components/about/ImpactChronicle";
import { AboutDisciplines } from "@/components/about/AboutDisciplines";
import { AboutFounders } from "@/components/about/AboutFounders";
import { AboutClients } from "@/components/about/AboutClients";
import { AboutValuesCTA } from "@/components/about/AboutValuesCTA";

export default function AboutPage() {
  React.useEffect(() => {
    document.body.classList.remove("custom-cursor-active");
    document.body.style.cursor = "auto";
    document.body.style.backgroundColor = "#070707";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#070707]">
      <Navbar />

      <main className="flex-grow bg-[#070707]">
        {/* 1. Hero — Tilted headline, gold paper texture, center computer with scroll popup */}
        <AboutHero />

        {/* 2. Section 02: The Manifesto — Editorial philosophy, typography & motion */}
        <AboutManifesto />

        {/* 3. Section 03: The Impact Chronicle — Interactive editorial timeline */}
        <ImpactChronicle />

        {/* 4. Section 04: Seven Disciplines — 3D isometric fanned card engine */}
        <AboutDisciplines />

        {/* 5. Section 05: Our Founders — Kartik Mittal & Kajol Chavan */}
        <AboutFounders />

        {/* 6. Section 06: Brands That Trust Our Impact — Interactive Megaphone & Client Grid */}
        <AboutClients />

        {/* 7. Values marquee + CTA with parallax */}
        <AboutValuesCTA />
        
      </main>

      <Footer />
    </div>
  );
}
