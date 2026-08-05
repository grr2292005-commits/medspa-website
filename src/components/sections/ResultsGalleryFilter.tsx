"use client";

import React, { useState } from "react";
import { m as motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import acneBeforeImg from "../../../public/assets/Slider image with acne.png";
import acneAfterImg from "../../../public/assets/Slider image with no acne.png";
import cheekBeforeImg from "../../../public/assets/cheek_before.png";
import cheekAfterImg from "../../../public/assets/cheek_after.png";
import pigmentBeforeImg from "../../../public/assets/pigment_before.png";
import pigmentAfterImg from "../../../public/assets/pigment_after.png";
import hydraBeforeImg from "../../../public/assets/hydra_before.png";
import hydraAfterImg from "../../../public/assets/hydra_after.png";

const RESULTS_DATA = [
  {
    category: "collagen",
    title: "Morpheus8 Texture & Acne Remodeling",
    client: "Camile L., Age 32",
    protocol: "3 Sessions of Morpheus8 RF Microneedling + PRF Matrix",
    timeframe: "Results shown 12 weeks post-treatment",
    beforeImg: acneBeforeImg,
    afterImg: acneAfterImg,
    testimonial:
      "“I was terrified of looking overdone or frozen. Dr. Vance built a conservative plan for my skin texture that made me look completely refreshed, like I had just returned from a month-long vacation.”",
  },
  {
    category: "injectables",
    title: "Facial Architecture & Cheek Balancing",
    client: "Elena R., Age 38",
    protocol: "Cheek Dermal Fillers + Micro-Botulinum Toning",
    timeframe: "Results shown 4 weeks post-treatment",
    beforeImg: cheekBeforeImg,
    afterImg: cheekAfterImg,
    testimonial:
      "“The subtlety is what impressed me most. My colleagues noticed I looked rested and glowing, but no one could guess I had anything done.”",
  },
  {
    category: "laser",
    title: "IPL Photofacial Sun Damage Clearance",
    client: "Margaret T., Age 42",
    protocol: "2 Sessions of Lumecca IPL + Medical Pigment Inhibitors",
    timeframe: "Results shown 6 weeks post-treatment",
    beforeImg: pigmentBeforeImg,
    afterImg: pigmentAfterImg,
    testimonial:
      "“Years of sun damage melted away. My skin tone is more even than it’s been in over a decade. I actually feel confident going out without foundation now.”",
  },
  {
    category: "hydration",
    title: "Glass-Skin Hydration & Pore Refinement",
    client: "Priya S., Age 29",
    protocol: "HydraFacial MD Platinum + Exosome Cellular Infusion",
    timeframe: "Results shown 2 weeks post-treatment",
    beforeImg: hydraBeforeImg,
    afterImg: hydraAfterImg,
    testimonial:
      "“My skin was chronically dehydrated and dull. After just two sessions, people started asking what skincare product I was using. It’s literally glass-skin now.”",
  },
] as const;

const FILTER_TABS = [
  { label: "All Outcomes", value: "all" },
  { label: "Collagen & Texture", value: "collagen" },
  { label: "Injectables", value: "injectables" },
  { label: "Laser & Photofacials", value: "laser" },
  { label: "Hydration & Rehab", value: "hydration" },
] as const;

export const ResultsGalleryFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResults =
    activeFilter === "all"
      ? RESULTS_DATA
      : RESULTS_DATA.filter((item) => item.category === activeFilter);

  return (
    <section
      className="py-[80px] sm:py-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]"
      id="gallery"
    >
      {/* Category Filters */}
      <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveFilter(tab.value)}
            className={`px-6 py-2.5 rounded-full font-sans text-[14px] font-medium transition-colors cursor-pointer ${
              activeFilter === tab.value
                ? "bg-[#3C4233] text-white shadow-md"
                : "bg-white text-[#1C1C1C] border border-[#E8DFD1] hover:bg-[#F5EFE6]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results Items Stack */}
      <div
        className="flex flex-col gap-16"
        aria-live="polite"
        aria-atomic="true"
      >
        {filteredResults.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-[#E8DFD1]/60 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left Column: Interactive Before & After Slider */}
            <div className="lg:col-span-6 w-full">
              <BeforeAfterSlider
                beforeImage={item.beforeImg}
                afterImage={item.afterImg}
                beforeAlt={`${item.title} Before`}
                afterAlt={`${item.title} After`}
              />
            </div>

            {/* Right Column: Case Details & Quote */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="font-sans text-[12px] font-semibold tracking-[0.12em] uppercase text-[#526071]">
                  CLINICAL CASE STUDY
                </span>
                <h2 className="font-serif font-medium text-[28px] sm:text-[34px] text-[#1C1C1C] mt-2 leading-[1.15]">
                  {item.title}
                </h2>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-[20px] border border-[#E8DFD1] flex flex-col gap-3 font-sans text-[14px] text-[#4A4630]">
                <p>
                  <strong className="text-[#1C1C1C]">Client:</strong>{" "}
                  {item.client}
                </p>
                <p>
                  <strong className="text-[#1C1C1C]">Protocol:</strong>{" "}
                  {item.protocol}
                </p>
                <p>
                  <strong className="text-[#1C1C1C]">Timeframe:</strong>{" "}
                  {item.timeframe}
                </p>
              </div>

              <blockquote className="font-serif font-normal text-[17px] sm:text-[18px] leading-[1.5] text-[#1C1C1C] italic">
                {item.testimonial}
              </blockquote>

              <div className="pt-2">
                <PrimaryButton href="/contact">
                  Book Similar Treatment
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
