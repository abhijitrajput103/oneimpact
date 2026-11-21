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
  return (
    <div className="flex flex-col min-h-screen bg-[#070707]">
      <Navbar />

      <main className="flex-grow bg-[#070707]">
        {/* 1. Hero — Tilted headline, gold paper texture, center computer with scroll popup */}
        <AboutHero />

        {/* 2. Section 02: The Manifesto — Editorial philosophy, typography & motion */}
        <div className="section-contained">
          <AboutManifesto />
        </div>

        {/* 3. Section 03: The Impact Chronicle — Interactive editorial timeline */}
        <div className="section-contained">
          <ImpactChronicle />
        </div>

        {/* 4. Section 04: Seven Disciplines — 3D isometric fanned card engine */}
        <div className="section-contained">
          <AboutDisciplines />
        </div>

        {/* 5. Section 05: Our Founders — Kartik Mittal & Kajol Chavan */}
        <div className="section-contained">
          <AboutFounders />
        </div>

        {/* 6. Section 06: Brands That Trust Our Impact — Interactive Megaphone & Client Grid */}
        <div className="section-contained">
          <AboutClients />
        </div>

        {/* 7. Values marquee + CTA with parallax */}
        <div className="section-contained">
          <AboutValuesCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
