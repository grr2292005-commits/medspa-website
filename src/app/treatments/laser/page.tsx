import React from "react";
import { Metadata } from "next";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import {
  MedicalProcedureJsonLd,
  BreadcrumbJsonLd,
  WebPageJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import laserImg from "../../../../public/assets/Laser and Light.png";

export const metadata: Metadata = {
  title: "Laser & Photofacials | Solène Aesthetic Medicine Beverly Hills",
  description:
    "Lumecca IPL photofacials and fractional laser resurfacing for sun damage clearance, vascular redness, and collagen rebuilding.",
  alternates: {
    canonical: "https://solenestudio.com/treatments/laser",
  },
  openGraph: {
    title: "Laser & Photofacials | Solène Studio",
    description:
      "Lumecca IPL photofacials and fractional laser resurfacing for sun damage clearance and vascular redness.",
    url: "https://solenestudio.com/treatments/laser",
  },
};

const TREATMENTS = [
  {
    name: "Lumecca IPL Photofacial",
    duration: "45 Min",
    downtime: "Mild darkening of spots (3-5 days)",
    idealFor: "Sun spots, age spots, rosacea, vascular redness",
    description:
      "High-peak power intense pulsed light targeted at hemoglobin and melanin to clarify pigment and reduce facial redness.",
  },
  {
    name: "Clear & Brilliant Laser Resurfacing",
    duration: "45 Min",
    downtime: "1-2 days mild sandpaper texture",
    idealFor: "Early signs of aging, enlarged pores, dull skin tone",
    description:
      "Gentle fractional laser energy that creates millions of microscopic treatment zones to refresh skin from the inside out.",
  },
  {
    name: "Vascular & Rosacea Laser Toning",
    duration: "40 Min",
    downtime: "Minimal (Transient pinkness 2-4 hrs)",
    idealFor: "Broken capillaries, diffuses facial redness, spider veins",
    description:
      "Targeted laser wavelengths that coagulate visible facial vessels without disrupting surrounding dermal tissue.",
  },
  {
    name: "Medical Hyperpigmentation Eraser",
    duration: "50 Min",
    downtime: "1-3 days mild redness",
    idealFor: "Melasma, post-inflammatory hyperpigmentation, stubborn sun spots",
    description:
      "Dual-wavelength laser protocol combined with topical tyrosinase inhibitors for deep, safe pigment dissolution.",
  },
] as const;

const BENEFITS = [
  "Medical Grade Lumecca & Fractional Lasers",
  "Tailored Wavelengths for Fitzpatrick Skin Types",
  "Rapid Clearance of Sun Damage & Age Spots",
  "Non-Invasive with Minimal Interruption to Daily Life",
] as const;

const FAQ_ITEMS = [
  {
    question: "How many Lumecca IPL sessions are required to clear sun damage?",
    answer:
      "Most clients achieve dramatic clearance of sun spots and vascular redness in 1 to 2 sessions of high-peak Lumecca IPL.",
  },
  {
    question: "Is IPL photofacial safe for sensitive or rosacea-prone skin?",
    answer:
      "Yes, Lumecca IPL features customized optical filters specifically designed to safely target vascular lesions and calm rosacea redness.",
  },
];

export default function LaserPage() {
  return (
    <>
      <WebPageJsonLd
        name="Laser & Photofacials | Solène Studio"
        description="Lumecca IPL photofacials and fractional laser resurfacing for sun damage clearance and vascular redness."
        url="/treatments/laser"
      />
      <MedicalProcedureJsonLd
        name="Lumecca IPL & Laser Photofacial Therapy"
        description="High-peak power intense pulsed light and fractional laser resurfacing for sun damage and skin tone clarification."
        bodyLocation="Face, Neck, Hands"
        procedureType="Laser / IPL Energy Therapy"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Treatments", url: "/treatments" },
          { name: "Laser & Photofacials", url: "/treatments/laser" },
        ]}
      />
      <FAQPageJsonLd mainEntity={FAQ_ITEMS} />
      <TreatmentCategoryTemplate
        kicker="PROCEDURE CATEGORY"
        title="Laser & Light"
        italicWord="Therapies"
        subtitle="Medical grade light and optical energy therapies targeted at clearing sun damage, redness, and uneven skin tone."
        heroImage={laserImg}
        overviewHeading="Precision Wavelengths for Luminous Skin Tone"
        overviewDescription="Sun exposure, environmental stress, and vascular changes leave uneven pigment and diffuse redness over time. Our advanced laser and IPL technologies deliver specific light wavelengths directly into targeted chromophores, safely breaking down excess melanin and broken capillaries."
        treatmentsList={TREATMENTS}
        benefits={BENEFITS}
      />
    </>
  );
}
