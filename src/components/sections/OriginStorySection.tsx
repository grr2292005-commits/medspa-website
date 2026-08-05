"use client";

import React from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import drElenaImg from "../../../public/assets/Dr. Elena Vance.png";

export const OriginStorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#F5EFE6] overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-stretch">
          {/* Left Column: Origin Story Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center gap-6 bg-[#F5EFE6]"
          >
            {/* Kicker */}
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#526071]">
              {t("origin_kicker")}
            </span>

            {/* Main Headline */}
            <h2 className="font-serif font-medium text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.1] tracking-[-0.01em] text-[#1C1C1C]">
              {t("origin_heading_1")} <br />
              {t("origin_heading_2")}
            </h2>

            {/* Quote Paragraph 1 */}
            <blockquote className="font-serif font-normal text-[17px] sm:text-[18px] leading-[1.5] text-[#1C1C1C]/90">
              {t("origin_quote_1")}
            </blockquote>

            {/* Quote Paragraph 2 */}
            <blockquote className="font-serif font-normal text-[17px] sm:text-[18px] leading-[1.5] text-[#1C1C1C]/90">
              {t("origin_quote_2")}
            </blockquote>

            {/* Author Attribution */}
            <div className="pt-2">
              <p className="font-serif font-semibold text-[16px] text-[#1C1C1C]">
                {t("origin_author")}
              </p>
              <p className="font-sans text-[13px] text-[#526071] mt-0.5">
                {t("origin_role")}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Full Height Doctor Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-6 min-h-[420px] lg:min-h-full w-full overflow-hidden"
          >
            <Image
              src={drElenaImg}
              alt="Dr. Elena Vance, MD - Founder & Lead Medical Director"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              quality={95}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
