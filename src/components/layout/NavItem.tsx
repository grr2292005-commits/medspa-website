"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import downDirectorSvg from "../../../public/assets/svg/ic_down_director.svg";

export interface NavItemProps {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  hasDropdown = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = [
    { label: "Injectables & Sculpting", href: "/treatments/injectables" },
    { label: "Collagen & Texture", href: "/treatments/collagen" },
    { label: "Laser & Photofacials", href: "/treatments/laser" },
    { label: "Medical Hydration", href: "/treatments/hydration" },
  ];

  if (!hasDropdown) {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-[6px] font-sans text-[16px] leading-[19px] tracking-[-0.02em] font-normal text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        )}
      >
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-[6px] font-sans text-[16px] leading-[19px] tracking-[-0.02em] font-normal text-white hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
        )}
      >
        <span>{label}</span>
        <Image
          src={downDirectorSvg}
          alt="Dropdown indicator"
          width={16}
          height={8}
          className={cn(
            "w-[15.5px] h-[7.5px] shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </Link>

      {/* Floating Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 pt-3 z-50 transition-all duration-200 origin-top-left",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-[#FAF7F2] rounded-[20px] p-5 shadow-2xl border border-[#E8DFD1] min-w-[240px] flex flex-col gap-3">
          {dropdownItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="font-sans text-[15px] leading-[1.3] text-[#1C1C1C] hover:text-[#3C4233] hover:translate-x-1 transition-all duration-150 py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
