import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { JournalArticleList } from "@/components/sections/JournalArticleList";
import { FooterSection } from "@/components/sections/FooterSection";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import journalHeroImg from "../../../public/assets/journal_hero.png";

export const metadata: Metadata = {
  title: "Aesthetic Medicine Journal | Solène Studio Beverly Hills",
  description:
    "Physician-authored insights into facial anatomy, Morpheus8 dermal remodeling, IPL photofacials, and skin barrier health.",
  alternates: {
    canonical: "https://solenestudio.com/journal",
  },
  openGraph: {
    title: "Aesthetic Medicine Journal | Solène Studio",
    description:
      "Physician-authored insights into facial anatomy, dermal remodeling, and skin barrier longevity.",
    url: "https://solenestudio.com/journal",
  },
};

export default function JournalPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen" id="main-content">
      <WebPageJsonLd
        name="Aesthetic Medicine Journal | Solène Studio"
        description="Physician-authored insights into facial anatomy, dermal remodeling, and skin barrier health."
        url="/journal"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Journal", url: "/journal" },
        ]}
      />

      {/* Hero Banner */}
      <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] bg-[#1F221B] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={journalHeroImg}
            alt="Solène Journal Studio Science"
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
              AESTHETIC MEDICINE JOURNAL
            </span>

            <h1 className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm">
              Science, Longevity & <br />
              <em className="font-serif italic font-light text-[#EFE3D8]">Bespoke Skincare</em>
            </h1>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm">
              Physician-authored insights into facial anatomy, dermal remodeling, and skin barrier health.
            </p>

            <div className="pt-3">
              <PrimaryButton href="#articles">Read Articles</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid & Modal Reader Client Island */}
      <JournalArticleList />

      <FooterSection />
    </main>
  );
}
