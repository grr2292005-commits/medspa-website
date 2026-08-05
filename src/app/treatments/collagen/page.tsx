import React from "react";
import { Metadata } from "next";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import {
  MedicalProcedureJsonLd,
  BreadcrumbJsonLd,
  WebPageJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import facialsImg from "../../../../public/assets/Facials and Skin.png";

export const metadata: Metadata = {
  title: "Collagen & Texture Remodeling | Solène Aesthetic Medicine Beverly Hills",
  description:
    "Advanced RF microneedling and cellular matrix therapies engineered to rebuild deep dermal collagen and refine skin texture.",
  alternates: {
    canonical: "https://solenestudio.com/treatments/collagen",
  },
  openGraph: {
    title: "Collagen & Texture Remodeling | Solène Studio",
    description:
      "Advanced RF microneedling and cellular matrix therapies engineered to rebuild deep dermal collagen.",
    url: "https://solenestudio.com/treatments/collagen",
  },
};

const TREATMENTS = [
  {
    name: "Morpheus8 RF Microneedling",
    duration: "60 Min",
    downtime: "2-3 days redness & mild tightness",
    idealFor: "Deep skin laxity, acne scarring, jawline contour, pore size",
    description:
      "Combines gold-plated insulated microneedles with fractional radiofrequency energy to remodel dermal fat and rebuild elastic fibers.",
  },
  {
    name: "PRF Matrix Regenerative Therapy",
    duration: "45 Min",
    downtime: "Minimal redness (24 hrs)",
    idealFor: "Under-eye dark circles, fine lines, cellular skin repair",
    description:
      "Autologous Platelet-Rich Fibrin isolated from your own blood, rich in growth factors and stem cell signals for deep tissue repair.",
  },
  {
    name: "Medical Micro-channeling",
    duration: "45 Min",
    downtime: "1-2 days mild pinkness",
    idealFor: "Skin texture refining, dullness, hyperpigmentation",
    description:
      "Precision micro-injuries infused with clinical grade hyaluronic acid and peptide complexes to stimulate rapid dermal turnover.",
  },
  {
    name: "Targeted Scar Remodeling",
    duration: "50 Min",
    downtime: "2-4 days localized pinkness",
    idealFor: "Atrophic acne scars, post-surgical marks, uneven texture",
    description:
      "Subcision combined with targeted radiofrequency to release fibrous tethered scars and encourage smooth collagen rebuilding.",
  },
] as const;

const BENEFITS = [
  "FDA Cleared Radiofrequency Microneedling",
  "Clinical Grade Topical Numbing Protocols",
  "Autologous Growth Factor Regeneration",
  "Visible Skin Texture & Firmness Improvement",
] as const;

const FAQ_ITEMS = [
  {
    question: "How long does Morpheus8 downtime typically last?",
    answer:
      "Most clients experience mild redness and skin tightness for 2 to 3 days post-treatment. Makeup can be safely applied 48 hours post procedure.",
  },
  {
    question: "How many collagen remodeling sessions are recommended?",
    answer:
      "We typically recommend a package of 3 sessions spaced 4 to 6 weeks apart for maximum structural collagen rebuilding and dermal firming.",
  },
];

export default function CollagenPage() {
  return (
    <>
      <WebPageJsonLd
        name="Collagen & Texture Remodeling | Solène Studio"
        description="Advanced RF microneedling and cellular matrix therapies engineered to rebuild deep dermal collagen."
        url="/treatments/collagen"
      />
      <MedicalProcedureJsonLd
        name="Morpheus8 RF Microneedling & Collagen Remodeling"
        description="Subdermal fractional radiofrequency energy combined with microneedling for collagen contraction and dermal rebuilding."
        bodyLocation="Face, Neck, Decolletage"
        procedureType="Energy Therapy / Microneedling"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Treatments", url: "/treatments" },
          { name: "Collagen & Texture", url: "/treatments/collagen" },
        ]}
      />
      <FAQPageJsonLd mainEntity={FAQ_ITEMS} />
      <TreatmentCategoryTemplate
        kicker="PROCEDURE CATEGORY"
        title="Collagen & Dermal"
        italicWord="Remodeling"
        subtitle="Cellular level dermal remodeling engineered to rebuild collagen density and restore skin smoothness."
        heroImage={facialsImg}
        overviewHeading="Deep Dermal Regeneration Beneath the Surface"
        overviewDescription="Skin longevity depends on structural collagen integrity. Our collagen remodeling protocols utilize advanced energy devices and autologous growth factors to stimulate your body's natural healing cascade, resulting in tighter pores, firmer skin, and smoother texture."
        treatmentsList={TREATMENTS}
        benefits={BENEFITS}
      />
    </>
  );
}
