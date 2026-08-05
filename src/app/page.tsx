import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClinicalOutcomesSection } from "@/components/sections/ClinicalOutcomesSection";
import { ClinicalDirectionSection } from "@/components/sections/ClinicalDirectionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WebPageJsonLd, ReviewJsonLd } from "@/components/seo/JsonLd";

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

const HOME_REVIEWS = [
  {
    author: "Camile L.",
    reviewBody:
      "Dr. Vance built a conservative plan for my skin texture that made me look completely refreshed, like I had just returned from a month-long vacation.",
    ratingValue: 5,
  },
  {
    author: "Elena R.",
    reviewBody:
      "The subtlety is what impressed me most. My colleagues noticed I looked rested and glowing, but no one could guess I had anything done.",
    ratingValue: 5,
  },
];

export default function Page() {
  return (
    <main id="main-content">
      <WebPageJsonLd
        name="Solène Aesthetic Medicine Studio Beverly Hills"
        description="Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm Beverly Hills studio environment."
        url=""
      />
      <ReviewJsonLd reviews={HOME_REVIEWS} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClinicalOutcomesSection />
      <ClinicalDirectionSection />
      <FooterSection />
    </main>
  );
}
