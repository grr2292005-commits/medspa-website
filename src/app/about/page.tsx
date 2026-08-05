import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { OriginStorySection } from "@/components/sections/OriginStorySection";
import { CorePillarsSection } from "@/components/sections/CorePillarsSection";
import { SanctuaryGallerySection } from "@/components/sections/SanctuaryGallerySection";
import { ClinicalDirectionSection } from "@/components/sections/ClinicalDirectionSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata = {
  title: "About Us | Solène Aesthetic Medicine Studio",
  description:
    "Solène was created to bridge the gap between cold, sterile medical offices and rushed aesthetic chains. Learn about our philosophy, core pillars, sanctuary space, and board-certified medical team.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <OriginStorySection />
      <CorePillarsSection />
      <SanctuaryGallerySection />
      <ClinicalDirectionSection />
      <FooterSection />
    </main>
  );
}
