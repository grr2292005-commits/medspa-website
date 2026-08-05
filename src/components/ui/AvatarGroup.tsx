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

      {/* Caption Text */}
      <p className="text-[13px] leading-[16px] font-normal tracking-[-0.02em] max-w-[160px]">
        <span className="text-[#EFE3D8]">400+ </span>
        <span className="text-[#FFFFFF]">Individuals who have trusted Solène</span>
      </p>
    </div>
  );
};
