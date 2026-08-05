"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bedAreaImg from "../../../public/assets/Bed Area.png";
import teaLoungeImg from "../../../public/assets/Tea Lounge.png";
import meetingAreaImg from "../../../public/assets/Meeting Area.png";

export const SanctuaryGallerySection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF7F2] py-[80px] sm:py-[100px] lg:py-[120px]" id="sanctuary">
      <div className="mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-[620px] mb-[48px] sm:mb-[60px]"
        >
          <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b] mb-3">
            THE SANCTUARY
          </span>
          <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#1C1C1C] mb-4">
            A Space Designed for <br />
            <em className="font-serif italic font-light text-[#3C4233]">
              Restoration
            </em>
          </h2>
          <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.55] tracking-[-0.01em] text-[#4A4630]/90">
            Step inside our studio, a private, light filled haven crafted with
            organic stone textures and quiet acoustic isolation.
          </p>
        </motion.div>

        {/* Studio Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Large Treatment Room Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-6 min-h-[380px] sm:min-h-[480px] lg:min-h-[640px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm"
          >
            <Image
              src={bedAreaImg}
              alt="Solène Studio Sanctuary Treatment Bed Area"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              quality={95}
            />
          </motion.div>

          {/* Right Column: Stacked 2 Images (Tea Set & Reception Office Area) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6 sm:gap-8"
          >
            {/* Top Right Image (Tea Lounge Set) */}
            <div className="relative min-h-[260px] sm:min-h-[300px] flex-1 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm">
              <Image
                src={teaLoungeImg}
                alt="Solène Tea & Hydration Lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                quality={95}
              />
            </div>

            {/* Bottom Right Image (Meeting & Reception Consultation Area) */}
            <div className="relative min-h-[260px] sm:min-h-[300px] flex-1 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm">
              <Image
                src={meetingAreaImg}
                alt="Solène Reception & Consultation Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                quality={95}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
