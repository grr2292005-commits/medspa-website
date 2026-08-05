"use client";

import React from "react";
import { motion } from "framer-motion";
import { DoctorCard } from "@/components/ui/DoctorCard";
import drElenaImg from "../../../public/assets/Dr. Elena Vance.png";
import drMarcusImg from "../../../public/assets/Dr. Marcus Sterling.png";
import drMayaImg from "../../../public/assets/Dr. Maya Lin.png";

export const ClinicalDirectionSection: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Elena Vance, MD",
      role: "Founder and Lead Medical Director",
      quote:
        "Aesthetic care should honor your natural facial architecture, never alter it. Our goal is to make you look like the most rested version of yourself.",
      image: drElenaImg,
    },
    {
      name: "Dr. Marcus Sterling, MD",
      role: "Laser & Cellular Rejuvenation Specialist",
      quote:
        "True skin transformation happens beneath the surface. We utilize precision laser technology to rebuild collagen and clarity without compromising skin integrity.",
      image: drMarcusImg,
    },
    {
      name: "Dr. Maya Lin, PA-C",
      role: "Master Aesthetic Injector",
      quote:
        "Injectables should enhance your unique facial expression, not mask it. I specialize in subtle lip architecture and full-face balancing that looks completely effortless.",
      image: drMayaImg,
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-[80px] sm:py-[100px] lg:py-[120px]" id="team">
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
            CLINICAL DIRECTION
          </span>
          <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.12] tracking-[-0.01em] text-[#1C1C1C]">
            Guided by Board Certified <br />
            Medical{" "}
            <em className="font-serif italic font-light text-[#3C4233]">
              Precision
            </em>
          </h2>
        </motion.div>

        {/* 3-Column Doctors Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <DoctorCard
                name={doc.name}
                role={doc.role}
                quote={doc.quote}
                image={doc.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
