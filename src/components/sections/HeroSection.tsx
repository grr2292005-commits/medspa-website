"use client";

import React from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TrustChecklist } from "@/components/ui/TrustChecklist";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingBadge } from "@/components/ui/FloatingBadge";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "../../../public/assets/Home Hero Section.png";
import ellipseLayerImg from "../../../public/assets/Ellipse 1.png";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] overflow-hidden bg-[#1F221B] flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Main Hero Background Image */}
        <Image
          src={heroImg}
          alt="Solène Aesthetic Medicine Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[92%_top] xl:object-[95%_top] pointer-events-none select-none"
          quality={90}
        />

        {/* Ambient Glow Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60 mix-blend-screen">
          <Image
            src={ellipseLayerImg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
            priority
          />
        </div>

        {/* Left Dark Gradient Overlay for Text Readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F221B]/85 via-[#1F221B]/40 to-transparent w-full md:w-[60%] pointer-events-none"
          aria-hidden="true"
        />

        {/* Floating Glassmorphism Refraction Badges */}
        <div className="absolute inset-0 w-full h-full max-w-[1440px] mx-auto pointer-events-none z-20 hidden md:block">
          <FloatingBadge
            label="Cellular Rejuvenation"
            className="absolute top-[16.3%] left-[79%] -translate-x-1/2"
          />
          <FloatingBadge
            label="Facial Architecture"
            className="absolute top-[66%] left-[47.3%] -translate-x-1/2"
          />
        </div>
      </div>

      {/* Top Header Navbar */}
      <Navbar />

      {/* Hero Core Content Layout Container */}
      <div className="relative z-30 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] pt-[130px] sm:pt-[150px] pb-[60px] flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[620px] flex flex-col gap-6"
        >
          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-normal text-[48px] sm:text-[56px] lg:text-[64px] leading-[1.08] tracking-[-0.01em] text-[#FAF7F2]"
          >
            {t("hero_title_1")} <br />
            {t("hero_title_2")} <br />
            {t("hero_title_3")}{" "}
            <em className="font-serif italic font-light">{t("hero_title_4")}</em>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.55] tracking-[-0.02em] text-[#FAF7F2]/80 max-w-[480px]"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2"
          >
            <PrimaryButton href="#book">{t("hero_cta")}</PrimaryButton>
          </motion.div>

          {/* Trust Indicators Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 w-full"
          >
            <TrustChecklist />
          </motion.div>

          {/* Social Proof Avatar Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4 sm:pt-6"
          >
            <AvatarGroup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
