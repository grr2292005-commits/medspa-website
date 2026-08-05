"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import acneImg from "../../../public/assets/Slider image with acne.png";
import clearImg from "../../../public/assets/Slider image with no acne.png";
import leftDirectorSvg from "../../../public/assets/svg/ic_left_director.svg";
import rightDirectorSvg from "../../../public/assets/svg/ic_right_director.svg";

export const ClinicalOutcomesSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "“I was terrified of looking over done or frozen. Dr. Vance built a conservative plan for my skin texture that made me look completely refreshed, like I had just returned from a month-long vacation.”",
      author: "Camile.L",
      detail: "Verified Client (Morpheus8 Texture Protocol)",
      rating: 5,
    },
    {
      quote:
        "“The subtlety is what impressed me most. My colleagues noticed I looked rested and glowing, but no one could guess I had anything done.”",
      author: "Elena R.",
      detail: "Verified Client (Cellular Hydration & Glow)",
      rating: 5,
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrev = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[activeTestimonial];

  return (
    <section className="w-full bg-[#FAF7F2] py-[80px] sm:py-[100px] lg:py-[120px]" id="results">
      <div className="mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy, CTAs, and Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Header & Subtitle */}
            <div className="flex flex-col gap-4">
              <span className="font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b]">
                REAL CLINICAL OUTCOMES
              </span>

              <h2 className="font-serif font-medium text-[38px] sm:text-[48px] lg:text-[52px] leading-[1.1] tracking-[-0.01em] text-[#1C1C1C]">
                Undetectable Adjustments <br />
                Unmistakable{" "}
                <em className="font-serif italic font-light text-[#3C4233]">
                  Radiance
                </em>
              </h2>

              <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.55] tracking-[-0.02em] text-[#4A4630] max-w-[500px]">
                Real client results after bespoke treatment protocols. Every
                session is designed to honor your natural facial architecture,
                never over-filled.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton href="#book">Book Consultation</PrimaryButton>

              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white hover:bg-[#F5EFE6] text-[#1C1C1C] rounded-[66px] h-[44px] px-7 text-[15px] font-sans font-medium transition-colors border border-[#E8DFD1]"
              >
                Explore Services
              </a>
            </div>

            {/* Testimonial Block */}
            <div className="flex flex-col gap-5 pt-4 border-t border-[#E8DFD1]/60">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="#F59E0B"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif font-medium text-[20px] sm:text-[22px] leading-[1.35] text-[#1C1C1C]">
                {current.quote}
              </blockquote>

              {/* Author & Verification */}
              <p className="font-sans text-[13px] leading-[1.4] text-[#64748b]">
                <strong className="font-semibold text-[#1C1C1C]">
                  {current.author}
                </strong>{" "}
                | {current.detail}
              </p>

              {/* Carousel Prev / Next Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-[42px] h-[42px] rounded-full bg-white hover:bg-[#F5EFE6] border border-[#E8DFD1] flex items-center justify-center shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1C] cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <Image
                    src={leftDirectorSvg}
                    alt="Previous"
                    width={10}
                    height={10}
                    className="w-[10px] h-[10px] shrink-0"
                  />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-[42px] h-[42px] rounded-full bg-white hover:bg-[#F5EFE6] border border-[#E8DFD1] flex items-center justify-center shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1C] cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <Image
                    src={rightDirectorSvg}
                    alt="Next"
                    width={10}
                    height={10}
                    className="w-[10px] h-[10px] shrink-0"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Before & After Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 w-full"
          >
            <BeforeAfterSlider
              beforeImage={acneImg}
              afterImage={clearImg}
              beforeAlt="Client Skin Before Morpheus8 Treatment"
              afterAlt="Client Skin After Morpheus8 Treatment"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
