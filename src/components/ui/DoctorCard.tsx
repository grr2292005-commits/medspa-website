import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface DoctorCardProps {
  name: string;
  role: string;
  quote: string;
  image: StaticImageData | string;
  className?: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  role,
  quote,
  image,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 pb-6 sm:pb-8 flex flex-col gap-5 shadow-sm border border-[#E8DFD1]/50 group hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      {/* Doctor Portrait Image */}
      <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[400px] rounded-[20px] overflow-hidden bg-[#F5EFE6]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
        />
      </div>

      {/* Doctor Information Stack */}
      <div className="flex flex-col gap-2 px-1">
        {/* Name */}
        <h3 className="font-serif font-medium text-[24px] sm:text-[26px] leading-[1.2] text-[#1C1C1C]">
          {name}
        </h3>

        {/* Role */}
        <p className="font-sans font-normal text-[13px] sm:text-[14px] leading-[1.4] text-[#64748b]">
          {role}
        </p>

        {/* Philosophy Quote */}
        <p className="font-serif font-normal text-[15px] sm:text-[16px] leading-[1.45] text-[#1C1C1C]/90 pt-2">
          {quote}
        </p>
      </div>
    </div>
  );
};
