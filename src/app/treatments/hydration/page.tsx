import React from "react";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import bodyImg from "../../../../public/assets/Body and Wellness.png";

export const metadata = {
  title: "Medical Hydration & Skin Rehab | Solène Aesthetic Medicine",
  description:
    "Restorative clinical facials, exosome infusion, and chemical peels engineered to repair skin barrier integrity.",
};

export default function HydrationPage() {
  const treatments = [
    {
      name: "HydraFacial MD Platinum",
      duration: "60 Min",
      downtime: "Zero downtime (Instant glow)",
      idealFor: "Congested pores, dehydration, uneven texture, dullness",
      description:
        "Vortex-fusion technology that deep cleanses, extracts impurities, and saturates the skin with antioxidants, peptides, and hyaluronic acid.",
    },
    {
      name: "Exosome Cellular Infusion",
      duration: "45 Min",
      downtime: "Zero downtime",
      idealFor: "Compromised skin barrier, redness, post-procedure healing",
      description:
        "Billion mRNA and lipid nanoparticles infused into the skin to calm inflammation, accelerate repair, and restore glass-skin hydration.",
    },
    {
      name: "Medical Grade Chemical Peels",
      duration: "30 Min",
      downtime: "2-4 days mild flaking",
      idealFor: "Cellular turnover, dull tone, superficial pigmentation",
      description:
        "Custom blends of TCA, glycolic, and lactic acids tailored to dissolve dead surface skin cells and reveal fresh, radiant tissue.",
    },
    {
      name: "Lipid Barrier Repair Facial",
      duration: "60 Min",
      downtime: "Zero downtime",
      idealFor: "Dry, reactive skin, compromised moisture barrier",
      description:
        "Soothes sensitive, overworked skin using ceramide complexes, soothing botanical extracts, and LED red light phototherapy.",
    },
  ];

  const benefits = [
    "Patented Vortex-Fusion Extraction Technology",
    "Clinical Grade Exosome Nanoparticle Infusions",
    "Customized Moisture & Barrier Repair Formulations",
    "Immediate Radiant Glow with Zero Recovery Time",
  ];

  return (
    <TreatmentCategoryTemplate
      kicker="PROCEDURE CATEGORY"
      title="Medical Hydration &"
      italicWord="Skin Rehab"
      subtitle="Clinical grade hydration therapies designed to soothe reactive skin, repair moisture barriers, and restore glass-skin radiance."
      heroImage={bodyImg}
      overviewHeading="Barrier Repair & Deep Cellular Moisture"
      overviewDescription="Environmental factors and harsh active ingredients can compromise your skin's natural lipid barrier. Our clinical hydration protocols combine mechanical extraction, antioxidant infusion, and exosome cellular signals to restore deep moisture, calm inflammation, and impart a healthy, dewy glow."
      treatmentsList={treatments}
      benefits={benefits}
    />
  );
}
