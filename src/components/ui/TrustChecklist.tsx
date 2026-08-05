import React from "react";

const TRUST_ITEMS = [
  "Board Certified Staff",
  "1,000+ Treatments Performed",
  "FDA Cleared Technology",
] as const;

export const TrustChecklist: React.FC = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 text-[13px] sm:text-[14px] leading-[1.3] font-normal text-[#FAF7F2]/90 w-full max-w-full">
      {TRUST_ITEMS.map((item) => (
        <div key={item} className="flex items-center gap-1.5 shrink-0">
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[12px] h-[9px] text-[#FAF7F2] shrink-0"
            aria-hidden="true"
          >
            <path
              d="M0.75 5.11L4.3 8.75L11.75 0.75"
              stroke="#F6F1EA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="whitespace-nowrap">{item}</span>
        </div>
      ))}
    </div>
  );
};
