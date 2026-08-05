import React from "react";
import Image from "next/image";
import drElena from "../../../public/assets/Dr. Elena Vance.png";
import drMarcus from "../../../public/assets/Dr. Marcus Sterling.png";
import drMaya from "../../../public/assets/Dr. Maya Lin.png";

const AVATARS = [
  { id: "elena", src: drElena, alt: "Dr. Elena Vance" },
  { id: "marcus", src: drMarcus, alt: "Dr. Marcus Sterling" },
  { id: "maya", src: drMaya, alt: "Dr. Maya Lin" },
] as const;

export const AvatarGroup: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Overlapping Avatar Stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((avatar) => (
          <div
            key={avatar.id}
            className="relative w-[38px] h-[38px] rounded-full overflow-hidden border-[1.5px] border-[#3C4233] shrink-0"
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              className="object-cover"
              sizes="38px"
            />
          </div>
        ))}
      </div>

      {/* Social Proof Star Rating Stack */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <div className="flex text-[#F59E0B] text-[13px] tracking-tight" aria-label="5 out of 5 stars rating">
            ★★★★★
          </div>
          <span className="text-[12px] font-semibold text-[#EFE3D8]">4.9 / 5.0</span>
        </div>
        <p className="text-[12px] leading-[15px] font-normal tracking-[-0.01em] text-[#FFFFFF]/90">
          400+ Verified Clients in Beverly Hills
        </p>
      </div>
    </div>
  );
};
