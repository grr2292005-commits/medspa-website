import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClinicalOutcomesSection } from "@/components/sections/ClinicalOutcomesSection";
import { ClinicalDirectionSection } from "@/components/sections/ClinicalDirectionSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClinicalOutcomesSection />
      <ClinicalDirectionSection />
      <FooterSection />
    </main>
  );
}
