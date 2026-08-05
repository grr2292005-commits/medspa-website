import { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { OriginStorySection } from "@/components/sections/OriginStorySection";
import { CorePillarsSection } from "@/components/sections/CorePillarsSection";
import { SanctuaryGallerySection } from "@/components/sections/SanctuaryGallerySection";
import { ClinicalDirectionSection } from "@/components/sections/ClinicalDirectionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { PhysicianJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Solène Aesthetic Medicine Studio Beverly Hills",
  description:
    "Solène was created to bridge the gap between cold, sterile medical offices and rushed aesthetic chains. Learn about our philosophy, core pillars, sanctuary space, and board-certified medical team.",
  alternates: {
    canonical: "https://solenestudio.com/about",
  },
  openGraph: {
    title: "About Us | Solène Aesthetic Medicine Studio",
    description:
      "Learn about our philosophy, core pillars, Beverly Hills sanctuary space, and board-certified medical team.",
    url: "https://solenestudio.com/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PhysicianJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <AboutHeroSection />
      <OriginStorySection />
      <CorePillarsSection />
      <SanctuaryGallerySection />
      <ClinicalDirectionSection />
      <FooterSection />
    </main>
  );
}
