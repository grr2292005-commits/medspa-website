"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { BookingForm } from "@/components/ui/BookingForm";
import { FooterMinimal } from "@/components/sections/FooterMinimal";
import contactHeroImg from "../../../public/assets/contact_hero.png";

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Studio Location",
      value: "1044 Heritage Way, Suite 200",
      sub: "Beverly Hills, California 90210",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Direct Concierge",
      value: "+1 (310) 555-0192",
      sub: "concierge@solenestudio.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      title: "Studio Hours",
      value: "Monday – Friday: 9:00 AM – 6:00 PM",
      sub: "Saturday: 10:00 AM – 4:00 PM (Sunday Closed)",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] bg-[#1F221B] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={contactHeroImg}
            alt="Solène Beverly Hills Studio Sanctuary"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
            quality={95}
          />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 pointer-events-none" aria-hidden="true" />
        </div>

        <Navbar />

        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] pt-[140px] pb-[80px] flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[820px] flex flex-col items-center gap-6"
          >
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-white/80">
              BEVERLY HILLS STUDIO
            </span>

            <h1 className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm">
              Connect with Our <br />
              <em className="font-serif italic font-light text-[#EFE3D8]">Concierge Team</em>
            </h1>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm">
              We look forward to welcoming you to our Beverly Hills studio sanctuary for your bespoke consultation.
            </p>

            <div className="pt-3">
              <PrimaryButton href="#reserve">Reserve Appointment</PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-[80px] sm:py-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[24px] p-8 shadow-sm border border-[#E8DFD1]/60 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E8DFD1] text-[#3C4233] flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h2 className="font-serif font-medium text-[20px] text-[#1C1C1C]">{item.title}</h2>
                <p className="font-sans font-medium text-[15px] text-[#1C1C1C] mt-1">{item.value}</p>
                <p className="font-sans text-[14px] text-[#64748b]">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Single Booking Form Section */}
      <section className="py-[40px] pb-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]" id="reserve">
        <BookingForm />
      </section>

      {/* Footer without booking form (no duplicate) */}
      <FooterMinimal />
    </main>
  );
}
