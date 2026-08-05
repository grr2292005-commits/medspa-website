"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import soleneDifferenceImg from "../../../public/assets/Solene Difference.png";
import logoSvg from "../../../public/assets/svg/ic_logo_1.svg";

const POINTS = [
  {
    title: "Board Certified Care:",
    description:
      "Every treatment is administered or directly supervised by licensed medical doctors.",
  },
  {
    title: "Conservative Enhancement:",
    description:
      "We specialize in subtle, undetectable adjustments that keep you looking like yourself.",
  },
  {
    title: "Transparent Consultation:",
    description:
      "No unexpected fees or aggressive upsells. Every visit begins with upfront pricing.",
  },
] as const;

export const AboutSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FAF7F2] py-[80px] sm:py-[100px] lg:py-[120px]" id="about">
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
            ABOUT US
          </span>
          <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#1C1C1C]">
            A Studio Designed Around Calm, <br />
            Not Quotes
          </h2>
        </motion.div>

        {/* Showcase Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F5EFE6] grid grid-cols-1 lg:grid-cols-12 shadow-sm border border-[#E8DFD1]/60"
        >
          {/* Left Column Image */}
          <div className="relative min-h-[380px] lg:min-h-[580px] lg:col-span-7 w-full overflow-hidden">
            <Image
              src={soleneDifferenceImg}
              alt="Solène Studio Sanctuary Bed Area"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
              quality={95}
            />
          </div>

          {/* Right Column Content Card */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative bg-[#F5EFE6]">
            {/* Top Right Monogram Icon */}
            <div className="absolute top-8 right-8 sm:top-10 sm:right-10 opacity-70">
              <Image
                src={logoSvg}
                alt="Solène Brand Mark"
                width={16}
                height={24}
                className="w-[16px] h-[24px] shrink-0"
              />
            </div>

            <div className="flex flex-col gap-6">
              {/* Card Title */}
              <h3 className="font-serif font-medium text-[36px] sm:text-[42px] leading-[1.15] text-[#1C1C1C]">
                The{" "}
                <span className="text-[#3C4233] font-semibold">Soléne</span>{" "}
                <br />
                Difference
              </h3>

              {/* Subtitle Paragraph */}
              <p className="font-sans font-normal text-[15px] leading-[1.6] text-[#4A4630] tracking-[-0.01em]">
                Solène was founded to redefine aesthetic medicine. We sit
                between cold, clinical offices and rushed medspa chains,
                delivering board certified expertise in an unhurried, sanctuary
                like environment.
              </p>

              {/* Interactive Points Stack */}
              <div className="relative flex flex-col gap-5 pt-4">
                {POINTS.map((point, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={point.title}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className="group cursor-pointer relative pl-5 transition-[transform,color] duration-300"
                    >
                      {/* Sliding Left Border Line Indicator */}
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-[2.5px] rounded-full bg-[#1C1C1C] transition-[opacity,transform] duration-300 ease-out ${
                          isActive
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-50"
                        }`}
                      />

                      {/* Text pushing/sliding right on hover */}
                      <div
                        className={`transition-[transform,color] duration-300 ease-out ${
                          isActive
                            ? "translate-x-1 text-[#1C1C1C]"
                            : "text-[#4A4630]/60 group-hover:text-[#4A4630] group-hover:translate-x-1"
                        }`}
                      >
                        <p className="font-sans text-[14px] sm:text-[15px] leading-[1.5]">
                          <strong
                            className={`font-semibold transition-colors ${
                              isActive ? "text-[#1C1C1C]" : "text-[#4A4630]/80"
                            }`}
                          >
                            {point.title}{" "}
                          </strong>
                          <span>{point.description}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
