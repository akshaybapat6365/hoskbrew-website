import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "./sections/hero";
import { ServicesSection } from "./sections/services";
import { PlatformsSection } from "./sections/platforms";
import { ProcessSection } from "./sections/process";
import { PortfolioPreviewSection } from "./sections/portfolio-preview";
import { FAQPreviewSection } from "./sections/faq-preview";
import { FinalCTASection } from "./sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PlatformsSection />
        <ProcessSection />
        <PortfolioPreviewSection />
        <FAQPreviewSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
