import React from "react";
import { Metadata } from "next";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import {
  MedicalProcedureJsonLd,
  BreadcrumbJsonLd,
  WebPageJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import injectablesImg from "../../../../public/assets/Injectables.png";

export const metadata: Metadata = {
  title: "Injectables & Facial Sculpting | Solène Aesthetic Medicine Beverly Hills",
  description:
    "Doctor-administered Botox, Xeomin, and hyaluronic acid dermal fillers designed for natural, subtle facial architecture.",
  alternates: {
    canonical: "https://solenestudio.com/treatments/injectables",
  },
  openGraph: {
    title: "Injectables & Facial Sculpting | Solène Studio",
    description:
      "Doctor-administered Botox, Xeomin, and hyaluronic acid dermal fillers designed for natural, subtle facial architecture.",
    url: "https://solenestudio.com/treatments/injectables",
  },
};

const TREATMENTS = [
  {
    name: "Subtle Neuromodulators",
    duration: "30 Min",
    downtime: "Zero downtime",
    idealFor: "Forehead lines, crow's feet, brow elevation, jawline slimming",
    description:
      "Micro-dosed Botox or Xeomin precisely targeted to soften dynamic muscle lines while preserving full, authentic facial expression.",
  },
  {
    name: "Facial Architecture Dermal Fillers",
    duration: "45 Min",
    downtime: "1-2 days mild swelling",
    idealFor: "Cheek elevation, jawline definition, chin projection, tear troughs",
    description:
      "Premium hyaluronic acid gels placed along deep structural periosteal planes to restore youthful contours without over-filling.",
  },
  {
    name: "Subtle Lip Architecture",
    duration: "45 Min",
    downtime: "2-3 days mild swelling",
    idealFor: "Lip asymmetry, hydration loss, subtle volume enhancement",
    description:
      "Micro-cannula technique creating soft, hydrated lip contours that complement your individual facial proportions.",
  },
  {
    name: "Sculptra Biostimulatory Sculpting",
    duration: "45 Min",
    downtime: "Minimal (Resume daily activities immediately)",
    idealFor: "Hollow temples, mid-face volume loss, overall structural collagen",
    description:
      "Poly-L-lactic acid micro-particles that stimulate your own body to produce new Type-I collagen over 3 to 6 months.",
  },
] as const;

const BENEFITS = [
  "100% Doctor Administered or Supervised",
  "Micro-Cannula Techniques for Minimal Bruising",
  "Subtle, Rested Results — Never Frozen",
  "Comprehensive Upfront Facial Mapping",
] as const;

const FAQ_ITEMS = [
  {
    question: "Who administers injectable treatments at Solène?",
    answer:
      "Every injectable procedure at Solène is 100% administered or directly supervised by board-certified physicians specializing in aesthetic medicine.",
  },
  {
    question: "How do you prevent an overfilled or unnatural appearance?",
    answer:
      "We utilize precise micro-dosing and micro-cannula placement techniques along deep periosteal structural planes, working conservatively to honor your natural facial features.",
  },
];

export default function InjectablesPage() {
  return (
    <>
      <WebPageJsonLd
        name="Injectables & Facial Sculpting | Solène Studio"
        description="Doctor-administered Botox, Xeomin, and hyaluronic acid dermal fillers designed for natural, subtle facial architecture."
        url="/treatments/injectables"
      />
      <MedicalProcedureJsonLd
        name="Neuromodulators & Dermal Filler Sculpting"
        description="Precision micro-dosed Botox, Xeomin, and hyaluronic acid fillers for subtle facial balancing."
        bodyLocation="Face, Lips, Jawline"
        procedureType="Injectable Medical Procedure"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Treatments", url: "/treatments" },
          { name: "Injectables", url: "/treatments/injectables" },
        ]}
      />
      <FAQPageJsonLd mainEntity={FAQ_ITEMS} />
      <TreatmentCategoryTemplate
        kicker="PROCEDURE CATEGORY"
        title="Injectables & Facial"
        italicWord="Sculpting"
        subtitle="Conservative, doctor-administered injectable therapies designed to honor your natural facial architecture."
        heroImage={injectablesImg}
        overviewHeading="Conservative Adjustments for Effortless Balance"
        overviewDescription="We believe injectable treatments should enhance your natural bone structure, not replace it. Our board-certified physicians use micro-dosing and cannula delivery methods to restore volume loss, soften expression lines, and bring harmony to your facial features."
        treatmentsList={TREATMENTS}
        benefits={BENEFITS}
      />
    </>
  );
}
