import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href = "#",
  children,
  className,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-between gap-3 bg-[#EFE3D8] hover:bg-[#E4D7CB] text-[#211D1A] rounded-[66px] min-w-[212px] h-[44px] px-[18px] py-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFE3D8] shrink-0 group",
        className
      )}
      {...props}
    >
      <span className="font-sans font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#211D1A] whitespace-nowrap">
        {children}
      </span>

      {/* Circle Icon Badge with Larger Arrow */}
      <span className="relative flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#211D1A] shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] h-[14px] text-[#EFE3D8]"
          aria-hidden="true"
        >
          <path
            d="M3 9L9 3M9 3H4M9 3V8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
};
