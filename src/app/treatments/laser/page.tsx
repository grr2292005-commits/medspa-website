import React from "react";
import { TreatmentCategoryTemplate } from "@/components/templates/TreatmentCategoryTemplate";
import laserImg from "../../../../public/assets/Laser and Light.png";

export const metadata = {
  title: "Laser & Photofacials | Solène Aesthetic Medicine",
  description:
    "Targeted light energy protocols for hyperpigmentation, sun damage, vascular redness, and fractional skin resurfacing.",
};

export default function LaserPage() {
  const treatments = [
    {
      name: "Lumecca IPL Photofacial",
      duration: "45 Min",
      downtime: "Mild darkening of spots (3-5 days)",
      idealFor: "Sun spots, age spots, rosacea, vascular redness",
      description:
        "High-peak power intense pulsed light targeted at hemoglobin and melanin to clarify stubborn pigment spots and diffuse facial redness.",
    },
    {
      name: "Clear & Brilliant Resurfacing",
      duration: "45 Min",
      downtime: "1-2 days sandpaper texture",
      idealFor: "Pore refining, early signs of aging, tone uniformity",
      description:
        "Gentle fractional laser technology that creates millions of microscopic treatment zones, replacing damaged skin with clear, radiant tissue.",
    },
    {
      name: "Vascular Redness Eraser",
      duration: "30 Min",
      downtime: "Mild pinkness (24 hrs)",
      idealFor: "Broken capillaries, spider veins, cherry angiomas",
      description:
        "Targeted laser wavelength absorbed by dilated vessels, causing gentle coagulation and natural clearance by the body's lymphatic system.",
    },
    {
      name: "Melasma & Pigment Protocol",
      duration: "50 Min",
      downtime: "Zero downtime",
      idealFor: "Hormonal melasma, post-inflammatory hyperpigmentation",
      description:
        "Low-fluence q-switched laser toning paired with medical pigment inhibitors to break down deep melanin without thermal rebound risks.",
    },
  ];

  const benefits = [
    "Medical Grade Lumecca & Fractional Lasers",
    "Tailored Wavelengths for Fitzpatrick Skin Types",
    "Rapid Clearance of Sun Damage & Age Spots",
    "Non-Invasive with Minimal Interruption to Daily Life",
  ];

  return (
    <TreatmentCategoryTemplate
      kicker="PROCEDURE CATEGORY"
      title="Laser & Light"
      italicWord="Clarity"
      subtitle="Precision light energy therapies formulated to dissolve hyperpigmentation, clear redness, and unify skin tone."
      heroImage={laserImg}
      overviewHeading="Targeted Wavelengths for Luminous Skin Clarity"
      overviewDescription="Sun exposure and environmental stressors break down skin tone over time. Our laser and photofacial therapies deliver targeted optical energy to destroy brown spots and broken capillaries while boosting dermal radiance without damaging the surrounding epidermis."
      treatmentsList={treatments}
      benefits={benefits}
    />
  );
}
