import React from "react";
import { Metadata } from "next";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import {
  MedicalProcedureJsonLd,
  BreadcrumbJsonLd,
  WebPageJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import bodyImg from "../../../../public/assets/Body and Wellness.png";

export const metadata: Metadata = {
  title: "Medical Hydration & Skin Rehab | Solène Aesthetic Medicine Beverly Hills",
  description:
    "Clinical facials, exosome glow infusions, and vortex extraction engineered to restore deep lipid barrier health and cellular hydration.",
  alternates: {
    canonical: "https://solenestudio.com/treatments/hydration",
  },
  openGraph: {
    title: "Medical Hydration & Skin Rehab | Solène Studio",
    description:
      "Clinical facials and exosome glow infusions engineered to restore deep lipid barrier health.",
    url: "https://solenestudio.com/treatments/hydration",
  },
};

const TREATMENTS = [
  {
    name: "HydraFacial MD Platinum",
    duration: "60 Min",
    downtime: "Zero downtime (Instant glow)",
    idealFor: "Congested pores, dehydration, uneven texture, dullness",
    description:
      "Vortex-fusion technology that deep cleanses, extracts impurities, and saturates the skin with antioxidants and hyaluronic acid.",
  },
  {
    name: "Exosome Cellular Glow Therapy",
    duration: "45 Min",
    downtime: "Zero downtime",
    idealFor: "Post-laser healing, severe dryness, compromised skin barrier",
    description:
      "Nanoparticle exosome infusions rich in growth factors and mRNA signals to accelerate cellular repair and achieve glass-skin glow.",
  },
  {
    name: "Medical Grade Chemical Peels",
    duration: "30 Min",
    downtime: "2-5 days mild flaking",
    idealFor: "Hyperpigmentation, fine lines, acne scarring, dull tone",
    description:
      "Customized blend of TCA, glycolic, and salicylic acids formulated to gently slough dead cells and reveal radiant new skin.",
  },
  {
    name: "Barrier Repair & Soothing Protocol",
    duration: "50 Min",
    downtime: "Zero downtime",
    idealFor: "Rosacea, inflamed skin, sensitive dermal barrier",
    description:
      "Biomimetic ceramide and lipid infusion combined with cooling LED light therapy to calm redness and rebuild dermal defense.",
  },
] as const;

const BENEFITS = [
  "Patented Vortex-Fusion Extraction Technology",
  "Clinical Grade Exosome Nanoparticle Infusions",
  "Customized Moisture & Barrier Repair Formulations",
  "Immediate Radiant Glow with Zero Recovery Time",
] as const;

const FAQ_ITEMS = [
  {
    question: "Is there any recovery downtime required for HydraFacial MD?",
    answer:
      "HydraFacial MD Platinum requires zero downtime. Clients step out of the treatment room with instant radiant hydration and clean pores.",
  },
  {
    question: "How often should medical hydration facials be performed?",
    answer:
      "For optimal skin barrier maintenance and cellular turnover, we recommend scheduling a HydraFacial MD session every 4 weeks.",
  },
] as const;

export default function HydrationPage() {
  return (
    <>
      <WebPageJsonLd
        name="Medical Hydration & Skin Rehab | Solène Studio"
        description="Clinical facials and exosome glow infusions engineered to restore deep lipid barrier health."
        url="/treatments/hydration"
      />
      <MedicalProcedureJsonLd
        name="HydraFacial MD & Exosome Hydration Therapy"
        description="Deep vortex extraction and nanoparticle exosome cellular infusion for instant hydration and skin barrier restoration."
        bodyLocation="Face, Neck"
        procedureType="Clinical Facial / Medical Hydration"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Treatments", url: "/treatments" },
          { name: "Hydration & Rehab", url: "/treatments/hydration" },
        ]}
      />
      <FAQPageJsonLd mainEntity={FAQ_ITEMS} />
      <TreatmentCategoryTemplate
        kicker="PROCEDURE CATEGORY"
        title="Medical Hydration &"
        italicWord="Skin Rehab"
        subtitle="Restorative clinical facials and exosome infusions formulated to revive compromised skin barriers and deliver lasting glow."
        heroImage={bodyImg}
        overviewHeading="Saturating the Dermal Layer with Essential Nutrients"
        overviewDescription="True glow cannot be achieved on dehydrated or inflamed skin. Our hydration protocols combine vortex-fusion extraction with clinical-grade nanoparticle exosomes and ceramides to repair your skin barrier and unlock luminous, glass-skin clarity."
        treatmentsList={TREATMENTS}
        benefits={BENEFITS}
        faqs={FAQ_ITEMS}
      />
    </>
  );
}
