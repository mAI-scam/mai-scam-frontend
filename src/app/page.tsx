"use client";

import Header from "@/components/main/Header";
import HeroSection from "@/components/main/HeroSection";
import InstructionsSection from "@/components/main/InstructionsSection";
import FeaturesSection from "@/components/main/FeaturesSection";
import WhyMaiscamSection from "@/components/main/WhyMaiscamSection";
import MarketOpportunitySection from "@/components/main/MarketOpportunitySection";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        <HeroSection />
        <InstructionsSection />
        <FeaturesSection />
        <WhyMaiscamSection />
        <MarketOpportunitySection />
      </main>

      <Footer />
    </>
  );
}
