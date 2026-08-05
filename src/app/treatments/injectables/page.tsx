import React from "react";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import injectablesImg from "../../../../public/assets/Injectables.png";

export const metadata = {
  title: "Injectables & Facial Sculpting | Solène Aesthetic Medicine",
  description:
    "Board-certified physician administered neuromodulators and dermal fillers designed to refine facial architecture without over-filling.",
};

export default function InjectablesPage() {
  const treatments = [
    {
      name: "Subtle Neuromodulators",
      duration: "30 Min",
      downtime: "Zero downtime",
      idealFor: "Forehead lines, crow's feet, brow elevation, jawline slimming",
      description:
        "Micro-dosed Botox or Xeomin precisely targeted to soften dynamic muscle lines while preserving full natural facial expressions.",
    },
    {
      name: "Hyaluronic Dermal Sculpting",
      duration: "45 Min",
      downtime: "Mild swelling (24-48 hrs)",
      idealFor: "Cheek architecture, tear trough support, chin projection",
      description:
        "Ultra-smooth hyaluronic acid gels injected with micro-cannulas to restore structural volume loss with smooth, touchable contouring.",
    },
    {
      name: "Sculptra Biostimulator",
      duration: "45 Min",
      downtime: "Minimal (Resume normal activity)",
      idealFor: "Overall deep collagen loss, mid-face hollows, skin density",
      description:
        "Poly-L-lactic acid micro-particles that stimulate your skin's innate collagen factory for gradual, long-lasting facial rejuvenation.",
    },
    {
      name: "Lip Architecture & Hydration",
      duration: "40 Min",
      downtime: "Mild swelling (1-3 days)",
      idealFor: "Lip border crispness, hydration restoration, subtle symmetry",
      description:
        "Customized lip enhancement tailored to your natural lip shape. Focuses on deep moisture, crisp vermilion borders, and balanced volume.",
    },
  ];

  const benefits = [
    "100% Doctor Administered or Supervised",
    "Micro-Cannula Techniques for Minimal Bruising",
    "Subtle, Rested Results — Never Frozen",
    "Comprehensive Upfront Facial Mapping",
  ];

  return (
    <TreatmentCategoryTemplate
      kicker="PROCEDURE CATEGORY"
      title="Injectables & Facial"
      italicWord="Sculpting"
      subtitle="Board-certified medical precision designed to honor your natural architecture and balance facial proportions."
      heroImage={injectablesImg}
      overviewHeading="Authentic Facial Enhancement Over Aggressive Volume"
      overviewDescription="At Solène, injectable therapies are approached through an architectural lens. We analyze dynamic muscle movements, bone structure, and facial fat pads before recommending any product. Our goal is never to change how you look, but to restore youthfulness and subtle symmetry."
      treatmentsList={treatments}
      benefits={benefits}
    />
  );
}
