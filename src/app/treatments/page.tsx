import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FooterSection } from "@/components/sections/FooterSection";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import injectablesImg from "../../../public/assets/Injectables.png";
import facialsImg from "../../../public/assets/Facials and Skin.png";
import laserImg from "../../../public/assets/Laser and Light.png";
import bodyImg from "../../../public/assets/Body and Wellness.png";
import bedAreaImg from "../../../public/assets/Bed Area.png";

export const metadata: Metadata = {
  title: "Treatments & Clinical Protocols | Solène Aesthetic Medicine Beverly Hills",
  description:
    "Explore our complete medical menu: Morpheus8 RF microneedling, physician dermal fillers, Lumecca IPL photofacials, and HydraFacial MD.",
  alternates: {
    canonical: "https://solenestudio.com/treatments",
  },
  openGraph: {
    title: "Treatments & Clinical Protocols | Solène Aesthetic Medicine",
    description:
      "Explore our doctor-led menu: Morpheus8, dermal fillers, Lumecca IPL, and HydraFacial MD.",
    url: "https://solenestudio.com/treatments",
  },
};

const TREATMENT_CATEGORIES = [
  {
    title: "Injectables & Sculpting",
    slug: "/treatments/injectables",
    subtitle: "Precision sculpting for natural, subtle facial balancing.",
    image: injectablesImg,
    details: ["Botulinum Toxins", "Hyaluronic Acid Dermal Fillers", "Sculptra Collagen Stimulators", "Subtle Lip Architecture"],
  },
  {
    title: "Collagen & Texture",
    slug: "/treatments/collagen",
    subtitle: "Deep cellular renewal and dermal remodeling.",
    image: facialsImg,
    details: ["Morpheus8 RF Microneedling", "PRF Matrix Therapy", "Medical Micro-channeling", "Custom Scar Remodeling"],
  },
  {
    title: "Laser & Photofacials",
    slug: "/treatments/laser",
    subtitle: "Targeted light therapies for pigment and vessel clarity.",
    image: laserImg,
    details: ["Lumecca IPL Photofacial", "Clear & Brilliant Resurfacing", "Vascular Laser Therapy", "Hyperpigmentation Eraser"],
  },
  {
    title: "Medical Hydration & Skin Rehab",
    slug: "/treatments/hydration",
    subtitle: "Restorative clinical facials for radiant skin barrier health.",
    image: bodyImg,
    details: ["HydraFacial MD Platinum", "Medical Chemical Peels", "Exosome Glow Therapy", "Barrier Repair Protocol"],
  },
] as const;

export default function TreatmentsPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen" id="main-content">
      <WebPageJsonLd
        name="Treatments & Clinical Protocols | Solène Aesthetic Medicine"
        description="Explore our complete doctor-led medical menu: Morpheus8 RF microneedling, dermal fillers, Lumecca IPL, and HydraFacial MD."
        url="/treatments"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Treatments", url: "/treatments" },
        ]}
      />

      {/* Hero Banner */}
      <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] bg-[#1F221B] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bedAreaImg}
            alt="Solène Treatment Sanctuary Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
            quality={95}
          />
          <div
            className="absolute inset-0 bg-black/35 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        <Navbar />

        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] pt-[140px] pb-[80px] flex-1 flex flex-col items-center justify-center text-center">
          <div className="max-w-[820px] flex flex-col items-center gap-6">
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-white/80">
              OUR TREATMENT MENU
            </span>

            <h1 className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm">
              Bespoke Medical Therapies, <br />
              Refined for <em className="font-serif italic font-light text-[#EFE3D8]">Natural Expression</em>
            </h1>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm">
              Solène pairs board-certified medical supervision with unhurried clinical care, customized to your unique facial architecture.
            </p>

            <div className="pt-3">
              <PrimaryButton href="#menu">Explore Procedures</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories Grid */}
      <section className="py-[80px] sm:py-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]" id="menu">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {TREATMENT_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              className="bg-[#F5EFE6] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#E8DFD1]/60 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 flex flex-col gap-5">
                <div>
                  <h2 className="font-serif font-medium text-[28px] sm:text-[32px] text-[#1C1C1C]">
                    {cat.title}
                  </h2>
                  <p className="font-sans text-[15px] text-[#4A4630] mt-2">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.details.map((detail) => (
                    <span
                      key={detail}
                      className="bg-white/80 border border-[#E8DFD1] text-[#1C1C1C] font-sans text-[13px] px-3.5 py-1.5 rounded-full"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E8DFD1]/60">
                  <Link
                    href={cat.slug}
                    className="inline-flex items-center gap-2 font-serif font-medium text-[16px] text-[#1C1C1C] hover:text-[#3C4233] transition-colors"
                  >
                    <span>Explore Protocol Details</span>
                    <span className="text-[18px]">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
