"use client";

import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutConveyorServices } from "@/components/about/AboutConveyorServices";
import { AboutOriginStory } from "@/components/about/AboutOriginStory";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutValuesCTA } from "@/components/about/AboutValuesCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero — Tilted headline, gold paper texture, center computer with scroll popup */}
        <AboutHero />

        {/* 2. Conveyor — Horizontal scrolling tracks presenting the 3 major service categories */}
        <AboutConveyorServices />

        {/* 3. Origin story — "ONE BELIEF" + stats */}
        <AboutOriginStory />

        {/* 4. Mission — "THAT'S WHY ONE IMPACT EXISTS" + services + founder quote */}
        <AboutMission />

        {/* 5. Values marquee + CTA with parallax */}
        <AboutValuesCTA />
      </main>

      <Footer />
    </div>
  );
}
