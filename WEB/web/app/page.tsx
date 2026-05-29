import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DevelopersSection } from "@/components/marketing/developers-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { SecuritySection } from "@/components/marketing/security-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <DevelopersSection />
      <PricingSection />
      <SiteFooter />
    </main>
  );
}