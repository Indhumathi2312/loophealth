import { HeroSection } from "@/components/home/HeroSection";
import { LogosSection } from "@/components/home/LogosSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { InfoSection } from "@/components/home/InfoSection";
import { CareTabsSection } from "@/components/home/CareTabsSection";
import { AppSection } from "@/components/home/AppSection";
import { AppMockupSection } from "@/components/home/AppMockupSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { WhyLoopSection } from "@/components/home/WhyLoopSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";
import { PopupForm } from "@/components/home/PopupForm";
import { DiabetesPopup } from "@/components/home/DiabetesPopup";
import { CookiePopup } from "@/components/home/CookiePopup";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="main-wrapper bg-v3">
      <div className="page-wrapper">
        <Header />
        <main className="main-wrapper">
          <HeroSection />
          <LogosSection />
          <AchievementsSection />
          <InfoSection />
          <CareTabsSection />
          <AppSection />
          <AppMockupSection />
          <TestimonialSection />
          <WhyLoopSection />
          <BlogSection />
        </main>
        <CTASection />
        <Footer />
        <CookiePopup />
        <PopupForm />
        <DiabetesPopup />
      </div>
    </div>
  );
}
