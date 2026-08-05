"use client";

import React from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import aboutHeroImg from "../../../public/assets/A view.png";

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] overflow-hidden bg-[#1F221B] flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={aboutHeroImg}
          alt="Solène Studio Sanctuary Architectural View"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
          quality={95}
        />

        {/* Black Fill 30% Layer + 40% to 20% Linear Gradient Overlays for High Text Contrast */}
        <div
          className="absolute inset-0 bg-black/30 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none"
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
          className="max-w-[780px] flex flex-col items-center gap-6"
        >
          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm"
          >
            Crafted Around Calm, <br />
            Driven by Science
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm"
          >
            Solène was created to bridge the gap between cold, sterile medical
            offices and rushed aesthetic chains.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
