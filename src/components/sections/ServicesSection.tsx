"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import injectablesImg from "../../../public/assets/Injectables.png";
import facialsImg from "../../../public/assets/Facials and Skin.png";
import laserImg from "../../../public/assets/Laser and Light.png";
import bodyImg from "../../../public/assets/Body and Wellness.png";
import ourLogoSvg from "../../../public/assets/svg/ic_our_logo.svg";

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Injectables",
      subtitle: "Precision sculpting for natural, subtle results",
      image: injectablesImg,
      href: "#injectables",
    },
    {
      title: "Facials and Skin",
      subtitle: "Deep medical hydration for cellular renewal",
      image: facialsImg,
      href: "#facials",
    },
    {
      title: "Laser and Light",
      subtitle: "Targeted light therapy for skin clarity",
      image: laserImg,
      href: "#laser",
    },
    {
      title: "Body and Wellness",
      subtitle: "Advanced body contouring and holistic wellness",
      image: bodyImg,
      href: "#body",
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
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b] mb-3">
              OUR SERVICES
            </span>

            {/* Section H2 Heading */}
            <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#1C1C1C]">
              Enhance Your Natural <br />
              <em className="font-serif italic font-light text-[#3C4233]">
                Radiance
              </em>{" "}
              and Well Being
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
              key={idx}
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
