"use client";

import React from "react";
import { m as motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title: "Conservative Precision",
    description:
      "Undetectable adjustments designed to honor your natural facial architecture, ensuring you look rested and refreshed, never over filled.",
  },
  {
    number: "02",
    title: "Doctor Led Care",
    description:
      "Every treatment plan is custom crafted and directly supervised or administered by board certified physicians specializing in aesthetic medicine.",
  },
  {
    number: "03",
    title: "Unhurried Sanctuary",
    description:
      "Generous 60 minute consultation slots ensure a serene environment with ample time to discuss your goals without feeling pressure sold.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description:
      "Clear, detailed treatment outlines with zero hidden fees. You receive honest recommendations and know exact costs before any procedure begins.",
  },
] as const;

export const CorePillarsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF7F2] py-[80px] sm:py-[100px] lg:py-[120px]" id="pillars">
      <div className="mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-[720px] mb-[48px] sm:mb-[60px]"
        >
          <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b] mb-3">
            OUR CORE PILLARS
          </span>
          <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#1C1C1C]">
            Built on Clinical Integrity, <br />
            Designed for{" "}
            <em className="font-serif italic font-light text-[#3C4233]">
              Peace of Mind
            </em>
          </h2>
        </motion.div>

        {/* 4 Stacked Pillar Cards */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#F5EFE6] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-sm border border-[#E8DFD1]/60 hover:border-[#3C4233]/30 transition-colors"
            >
              {/* Left Side: Number + Title */}
              <div className="flex items-center gap-6 sm:gap-10 md:w-[45%] shrink-0">
                <span className="font-serif font-semibold text-[32px] sm:text-[40px] text-[#1C1C1C] tracking-tight">
                  {pillar.number}
                </span>
                <h3 className="font-serif font-medium text-[22px] sm:text-[26px] leading-[1.2] text-[#1C1C1C]">
                  {pillar.title}
                </h3>
              </div>

              {/* Right Side: Description */}
              <p className="font-sans font-normal text-[14px] sm:text-[15px] leading-[1.6] text-[#4A4630]/90 md:w-[55%]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
