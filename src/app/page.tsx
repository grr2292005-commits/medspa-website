import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClinicalOutcomesSection } from "@/components/sections/ClinicalOutcomesSection";
import { ClinicalDirectionSection } from "@/components/sections/ClinicalDirectionSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Solène | Aesthetic Medicine & Studio Beverly Hills",
  description:
    "Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm Beverly Hills studio environment.",
  alternates: {
    canonical: "https://solenestudio.com",
  },
  openGraph: {
    title: "Solène | Aesthetic Medicine & Studio Beverly Hills",
    description:
      "Board-certified physician-led aesthetic studio in Beverly Hills specializing in subtle, natural facial architecture.",
    url: "https://solenestudio.com",
  },
};

export default function Page() {
  return (
    <main id="main-content">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClinicalOutcomesSection />
      <ClinicalDirectionSection />
      <FooterSection />
    </main>
  );
}
