"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useLanguage, Language } from "@/context/LanguageContext";
import logoSvg from "../../../public/assets/svg/ic_logo_1.svg";
import downDirectorSvg from "../../../public/assets/svg/ic_down_director.svg";

const LANGUAGES: Language[] = ["EN", "FR", "DE"];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto flex h-[106px] max-w-[1440px] items-center justify-between px-[24px] sm:px-[40px] py-[32px]">
        {/* Left Side: SVG Logo + Nav Items */}
        <div className="flex items-center gap-[32px]">
          {/* Logo Container */}
          <Link
            href="/"
            className="flex items-center gap-[6px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm hover:opacity-90 transition-opacity"
          >
            <Image
              src={logoSvg}
              alt="Solène Mark"
              width={10}
              height={15}
              className="w-[10px] h-[15px] shrink-0"
              priority
            />
            <span className="font-serif font-semibold text-[18px] leading-[20px] text-white tracking-normal">
              Solène
            </span>
          </Link>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-[32px]"
            aria-label="Main Navigation"
          >
            <NavItem href="/about" label={t("nav_about")} />
            <NavItem href="/treatments" label={t("nav_treatments")} hasDropdown />
            <NavItem href="/results" label={t("nav_results")} />
            <NavItem href="/journal" label={t("nav_journal")} />
            <NavItem href="/contact" label={t("nav_contact")} />
          </nav>
        </div>

        {/* Right Side: Language Selector + CTA */}
        <div className="flex items-center gap-[24px]">
          {/* Language Selector Dropdown using Treatments SVG Arrow */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="font-sans text-[15px] sm:text-[16px] leading-[19px] tracking-[-0.02em] font-normal text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer flex items-center gap-[6px]"
              aria-label="Select language"
            >
              <span>{language}</span>
              <Image
                src={downDirectorSvg}
                alt=""
                width={16}
                height={8}
                className={cn(
                  "w-[15.5px] h-[7.5px] shrink-0 transition-transform duration-200",
                  langOpen ? "rotate-180" : ""
                )}
              />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#FAF7F2] rounded-[14px] p-2 shadow-xl border border-[#E8DFD1] min-w-[80px] flex flex-col gap-1 z-50">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLanguage(l);
                      setLangOpen(false);
                    }}
                    className={`font-sans text-[14px] px-3 py-1.5 rounded-[8px] text-left transition-colors ${
                      language === l
                        ? "bg-[#3C4233] text-white font-medium"
                        : "text-[#1C1C1C] hover:bg-[#F5EFE6]"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <PrimaryButton href="/contact">{t("nav_book")}</PrimaryButton>
        </div>
      </div>
    </header>
  );
};
