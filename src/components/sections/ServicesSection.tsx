"use client";

import React from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useLanguage } from "@/context/LanguageContext";
import injectablesImg from "../../../public/assets/Injectables.png";
import facialsImg from "../../../public/assets/Facials and Skin.png";
import laserImg from "../../../public/assets/Laser and Light.png";
import bodyImg from "../../../public/assets/Body and Wellness.png";
import ourLogoSvg from "../../../public/assets/svg/ic_our_logo.svg";

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("service_1_title"),
      subtitle: t("service_1_sub"),
      image: injectablesImg,
      href: "/treatments/injectables",
    },
    {
      title: t("service_2_title"),
      subtitle: t("service_2_sub"),
      image: facialsImg,
      href: "/treatments/hydration",
    },
    {
      title: t("service_3_title"),
      subtitle: t("service_3_sub"),
      image: laserImg,
      href: "/treatments/laser",
    },
    {
      title: t("service_4_title"),
      subtitle: t("service_4_sub"),
      image: bodyImg,
      href: "/treatments/collagen",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-[80px] sm:py-[100px] lg:py-[120px]" id="services">
      <div className="mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px]">
        {/* Section Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex items-start justify-between gap-6 mb-[48px] sm:mb-[60px]"
        >
          {/* Title & Subtitle Stack */}
          <div className="max-w-[640px]">
            {/* Category Kicker */}
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#526071] mb-3">
              {t("services_kicker")}
            </span>

            {/* Section H2 Heading */}
            <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#1C1C1C]">
              {t("services_heading_1")} <br />
              <em className="font-serif italic font-light text-[#3C4233]">
                {t("services_heading_2")}
              </em>{" "}
              {t("services_heading_3")}
            </h2>
          </div>

          {/* Right Brand Monogram Icon */}
          <div className="hidden sm:flex items-center justify-center p-2 opacity-90">
            <Image
              src={ourLogoSvg}
              alt="Solène Brand Emblem"
              width={48}
              height={76}
              className="w-[44px] sm:w-[56px] h-[70px] sm:h-[88px] shrink-0"
            />
          </div>
        </motion.div>

        {/* 4-Column Services Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                image={service.image}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
