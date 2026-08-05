import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ResultsGalleryFilter } from "@/components/sections/ResultsGalleryFilter";
import { FooterSection } from "@/components/sections/FooterSection";
import { BreadcrumbJsonLd, WebPageJsonLd, ReviewJsonLd } from "@/components/seo/JsonLd";
import resultsHeroImg from "../../../public/assets/results_hero.png";

export const metadata: Metadata = {
  title: "Clinical Outcomes & Results | Solène Aesthetic Medicine Beverly Hills",
  description:
    "Explore authentic client outcomes and interactive before & after transformations post Morpheus8, dermal fillers, and IPL photofacials.",
  alternates: {
    canonical: "https://solenestudio.com/results",
  },
  openGraph: {
    title: "Clinical Outcomes & Results | Solène Aesthetic Medicine",
    description:
      "Authentic client transformations post Morpheus8, dermal fillers, and IPL photofacials.",
    url: "https://solenestudio.com/results",
  },
};

const CASE_REVIEWS = [
  {
    author: "Camile L.",
    reviewBody:
      "I was terrified of looking overdone or frozen. Dr. Vance built a conservative plan for my skin texture that made me look completely refreshed.",
    ratingValue: 5,
  },
  {
    author: "Elena R.",
    reviewBody:
      "The subtlety is what impressed me most. My colleagues noticed I looked rested and glowing, but no one could guess I had anything done.",
    ratingValue: 5,
  },
  {
    author: "Margaret T.",
    reviewBody:
      "Years of sun damage melted away. My skin tone is more even than it’s been in over a decade. I actually feel confident going out without foundation now.",
    ratingValue: 5,
  },
  {
    author: "Priya S.",
    reviewBody:
      "My skin was chronically dehydrated and dull. After just two sessions, people started asking what skincare product I was using. It’s literally glass-skin now.",
    ratingValue: 5,
  },
];

export default function ResultsPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen" id="main-content">
      <WebPageJsonLd
        name="Clinical Outcomes & Results | Solène Aesthetic Medicine"
        description="Authentic client outcomes and before & after transformations post Morpheus8, dermal fillers, and IPL photofacials."
        url="/results"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Clinical Results", url: "/results" },
        ]}
      />
      <ReviewJsonLd reviews={CASE_REVIEWS} />

      {/* Hero Banner */}
      <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] bg-[#1F221B] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={resultsHeroImg}
            alt="Solène Clinical Results Gallery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
            quality={95}
          />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 pointer-events-none" aria-hidden="true" />
        </div>

        <Navbar />

        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] pt-[140px] pb-[80px] flex-1 flex flex-col items-center justify-center text-center">
          <div className="max-w-[820px] flex flex-col items-center gap-6">
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-white/80">
              REAL CLINICAL OUTCOMES
            </span>

            <h1 className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm">
              Undetectable Adjustments, <br />
              Unmistakable <em className="font-serif italic font-light text-[#EFE3D8]">Radiance</em>
            </h1>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm">
              Explore authentic client outcomes after bespoke, doctor-led treatment protocols designed to honor natural facial features.
            </p>

            <div className="pt-3">
              <PrimaryButton href="#gallery">View Case Studies</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Client Island */}
      <ResultsGalleryFilter />

      <FooterSection />
    </main>
  );
}
