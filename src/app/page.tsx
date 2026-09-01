import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MixedCardsSection } from "@/components/sections/MixedCardsSection";
import { TemplatesSection } from "@/components/sections/TemplatesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { topBannerData } from "@/data/navigation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d0d] text-white selection:bg-purple-500 selection:text-white">
      {topBannerData.visible && <TopBanner />}
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <MixedCardsSection />
        {/* <TemplatesSection /> */}
        <ReviewsSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
