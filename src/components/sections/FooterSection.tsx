"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/ui/BookingForm";
import footerBannerImg from "../../../public/assets/Footer Section Image.png";
import ourLogoSvg from "../../../public/assets/svg/ic_our_logo.svg";

export const FooterSection: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#1C1A17] text-white relative" id="book">
      {/* Upper Section: Showcase Image & Overlapping Booking Form */}
      <div className="relative w-full bg-[#FAF7F2] pt-[40px] lg:pt-[60px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={footerBannerImg}
            alt="Solène Studio Therapy Session"
            fill
            sizes="100vw"
            className="object-cover object-right lg:object-[85%_center]"
            quality={95}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/65 to-transparent w-full lg:w-[65%]"
            aria-hidden="true"
          />
        </div>

        {/* Content Container (Booking Form positioned on left) */}
        <div className="relative z-20 mx-auto max-w-[1440px] px-[24px] sm:px-[40px] pb-[80px] lg:pb-[140px]">
          <BookingForm />
        </div>
      </div>

      {/* Main Dark Footer Base Container */}
      <div className="relative z-30 mx-auto max-w-[1440px] px-[24px] sm:px-[40px] pt-[80px] pb-[60px]">
        {/* Top Header Row: Large Solène S Emblem & Wordmark */}
        <div className="flex items-center justify-end border-b border-white/10 pb-[48px] mb-[56px]">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* S Leaf Logo Emblem on the left of SOLÈNE text */}
            <Image
              src={ourLogoSvg}
              alt="Solène S Logo Emblem"
              width={56}
              height={88}
              className="w-[44px] sm:w-[64px] h-[68px] sm:h-[96px] shrink-0 filter invert brightness-200"
            />
            <span className="font-serif font-semibold text-[60px] sm:text-[84px] lg:text-[96px] leading-none text-white tracking-tight">
              Solène
            </span>
          </div>
        </div>

        {/* 5-Column Navigation & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Studio Description & Social Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <p className="font-sans text-[14px] leading-[1.6] text-white/75 max-w-[240px]">
              Personalized aesthetic studio tailored for you.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif font-medium text-[18px] text-white">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 font-sans text-[14px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about#pillars" className="hover:text-white transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-white transition-colors">
                  Results Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Medical Team
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif font-medium text-[18px] text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 font-sans text-[14px] text-white/70">
              <li>
                <Link href="/treatments/injectables" className="hover:text-white transition-colors">
                  Injectables
                </Link>
              </li>
              <li>
                <Link href="/treatments/hydration" className="hover:text-white transition-colors">
                  Skin Rehab
                </Link>
              </li>
              <li>
                <Link href="/treatments/laser" className="hover:text-white transition-colors">
                  Laser Therapy
                </Link>
              </li>
              <li>
                <Link href="/treatments/collagen" className="hover:text-white transition-colors">
                  Collagen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Email */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h4 className="font-serif font-medium text-[18px] text-white">
                Address
              </h4>
              <p className="font-sans text-[14px] leading-[1.5] text-white/70">
                1044 Heritage Way, Suite 200, Beverly Hills, California 90210
              </p>
            </div>

            <div className="flex flex-col gap-1.5 pt-2">
              <h4 className="font-serif font-medium text-[18px] text-white">
                Email
              </h4>
              <a
                href="mailto:concierge@solenestudio.com"
                className="font-sans text-[14px] text-white/70 hover:text-white transition-colors"
              >
                concierge@solenestudio.com
              </a>
            </div>
          </div>

          {/* Column 5: Newsletter Subscription */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif font-medium text-[18px] text-white">
              Subscribe newsletter
            </h4>
            <p className="font-sans text-[13px] leading-[1.5] text-white/70">
              Stay updated with the latest news and offers!
            </p>

            {subscribed ? (
              <p className="font-sans text-[13px] text-[#C9A876]">
                ✓ Subscribed! Thank you.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative w-full max-w-[280px]">
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full h-[44px] px-4 pr-10 rounded-full border border-white/20 bg-transparent text-[14px] font-sans text-white placeholder:text-white/40 focus:outline-none focus:border-white/60"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-[48px] mt-[48px] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[12px] text-white/60">
          <p>© {new Date().getFullYear()} Solène Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
