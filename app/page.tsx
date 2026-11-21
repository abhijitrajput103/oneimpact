import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/hero/Hero";
import { Showreel } from "@/components/showroom/Showreel";
import { AboutBanner } from "@/components/showroom/AboutBanner";
import { FullServiceCreativeSection } from "@/components/showroom/FullServiceCreativeSection";

import { DesktopIntro } from "@/components/intro/DesktopIntro";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { LetsPlaySection } from "@/components/common/LetsPlaySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <DesktopIntro />

      <Navbar />

      <main className="flex-grow">
        {/* Interactive Fullscreen Hero */}
        <Hero />

        {/* Showreel Portfolio Section */}
        <div className="section-contained">
          <Showreel />
        </div>

        {/* About Banner + Client Logos */}
        <div className="section-contained">
          <AboutBanner />
        </div>

        {/* Full-Service Creative Services Section */}
        <div className="section-contained">
          <FullServiceCreativeSection />
        </div>

        {/* Project Inquiry & Contact Form Section */}
        <div className="section-contained">
          <ContactFormSection />
        </div>

        {/* Interactive Sticker Playground ("Let's play") */}
        <div className="section-contained">
          <LetsPlaySection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
