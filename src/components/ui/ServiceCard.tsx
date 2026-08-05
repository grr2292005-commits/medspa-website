import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  href?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  image,
  href = "#",
  className,
}) => {
  return (
    <a
      href={href}
      className={cn(
        "group relative block w-full h-[400px] sm:h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#211D1A]",
        className
      )}
    >
      {/* Service Image with smooth hover zoom */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Bottom Gradient Overlay for text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:opacity-90 pointer-events-none"
        aria-hidden="true"
      />

      {/* Card Content Overlay - Inline Title + Arrow */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col gap-1.5 text-white z-10">
        {/* Title with Arrow Icon inline right next to title */}
        <h3 className="font-serif font-semibold text-[22px] sm:text-[26px] leading-[1.2] text-white inline-flex items-center gap-2">
          <span>{title}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px] text-white opacity-90 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 inline-block"
            aria-hidden="true"
          >
            <path
              d="M4 12L12 4M12 4H5.33M12 4V10.67"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h3>

        {/* Subtitle */}
        <p className="font-sans font-normal text-[13px] sm:text-[14px] leading-[1.4] text-white/80 tracking-[-0.01em]">
          {subtitle}
        </p>
      </div>
    </a>
  );
};
