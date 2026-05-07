import { Hero } from "@/components/Hero";
import { WorkbookSection } from "@/components/workbook/WorkbookSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { PremiumSection } from "@/components/premium/PremiumSection";
import { AboutSection } from "@/components/about/AboutSection";
import { Newsletter } from "@/components/Newsletter";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkbookSection />
      <ServicesSection />
      <PremiumSection />
      <AboutSection />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}
