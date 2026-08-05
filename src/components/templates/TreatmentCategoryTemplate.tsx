"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FooterSection } from "@/components/sections/FooterSection";

export interface TreatmentItem {
  name: string;
  duration: string;
  downtime: string;
  idealFor: string;
  description: string;
}

export interface TreatmentCategoryTemplateProps {
  title: string;
  italicWord: string;
  titleEnd?: string;
  kicker: string;
  subtitle: string;
  heroImage: StaticImageData | string;
  overviewHeading: string;
  overviewDescription: string;
  treatmentsList: TreatmentItem[];
  benefits: string[];
}

export const TreatmentCategoryTemplate: React.FC<TreatmentCategoryTemplateProps> = ({
  title,
  italicWord,
  titleEnd = "",
  kicker,
  subtitle,
  heroImage,
  overviewHeading,
  overviewDescription,
  treatmentsList,
  benefits,
}) => {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Banner - Matching Home & About Us Full-Height Viewport Style */}
      <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] bg-[#1F221B] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
            quality={95}
          />
          <div
            className="absolute inset-0 bg-black/35 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Top Header Navbar */}
        <Navbar />

        {/* Hero Core Centered Content Container */}
        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] pt-[140px] pb-[80px] flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[820px] flex flex-col items-center gap-6"
          >
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-white/80">
              {kicker}
            </span>

            <h1 className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm">
              {title} <br />
              <em className="font-serif italic font-light text-[#EFE3D8]">
                {italicWord}
              </em>{" "}
              {titleEnd}
            </h1>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm">
              {subtitle}
            </p>

            <div className="pt-3">
              <PrimaryButton href="#book">Reserve Consultation</PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Core Benefits */}
      <section className="py-[80px] sm:py-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]" id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b]">
              CLINICAL PHILOSOPHY
            </span>
            <h2 className="font-serif font-medium text-[36px] sm:text-[44px] text-[#1C1C1C] leading-[1.15]">
              {overviewHeading}
            </h2>
            <p className="font-sans text-[16px] leading-[1.6] text-[#4A4630]">
              {overviewDescription}
            </p>
          </div>

          {/* Key Advantages Box */}
          <div className="lg:col-span-5 bg-[#F5EFE6] rounded-[28px] p-8 sm:p-10 border border-[#E8DFD1] shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-medium text-[24px] text-[#1C1C1C]">
              Protocol Highlights
            </h3>
            <ul className="flex flex-col gap-3 pt-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 font-sans text-[15px] text-[#1C1C1C]">
                  <span className="w-5 h-5 rounded-full bg-[#3C4233] text-white text-[12px] flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <PrimaryButton href="#book">Book Consultation</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Treatment Items Stack */}
      <section className="py-[60px] pb-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]">
        <div className="mb-10">
          <span className="font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b]">
            AVAILABLE PROCEDURES
          </span>
          <h2 className="font-serif font-medium text-[36px] sm:text-[44px] text-[#1C1C1C] mt-2">
            Targeted Treatment Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {treatmentsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[24px] p-8 shadow-sm border border-[#E8DFD1]/60 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif font-medium text-[24px] text-[#1C1C1C]">
                    {item.name}
                  </h3>
                  <span className="bg-[#FAF7F2] border border-[#E8DFD1] text-[#3C4233] font-sans text-[12px] font-semibold px-3 py-1 rounded-full uppercase">
                    {item.duration}
                  </span>
                </div>
                <p className="font-sans text-[15px] text-[#4A4630]/90 leading-[1.55]">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD1]/60 flex flex-col gap-2 font-sans text-[13px] text-[#64748b]">
                <p>
                  <strong className="text-[#1C1C1C]">Ideal For:</strong> {item.idealFor}
                </p>
                <p>
                  <strong className="text-[#1C1C1C]">Downtime:</strong> {item.downtime}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
};
