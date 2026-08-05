import React from "react";
import Image from "next/image";
import drElena from "../../../public/assets/Dr. Elena Vance.png";
import drMarcus from "../../../public/assets/Dr. Marcus Sterling.png";
import drMaya from "../../../public/assets/Dr. Maya Lin.png";

export const AvatarGroup: React.FC = () => {
  const avatars = [
    { src: drElena, alt: "Customer 1" },
    { src: drMarcus, alt: "Customer 2" },
    { src: drMaya, alt: "Customer 3" },
  ];

  return (
    <div className="flex items-center gap-3">
      {/* Overlapping Avatar Stack */}
      <div className="flex -space-x-3">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
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

      {/* Caption Text with strict colors: 400+ (#EFE3D8), remainder (#FFFFFF) */}
      <p className="text-[13px] leading-[16px] font-normal tracking-[-0.02em] max-w-[160px]">
        <span className="text-[#EFE3D8]">400+ </span>
        <span className="text-[#FFFFFF]">Individuals who have trusted Solène</span>
      </p>
    </div>
  );
};
