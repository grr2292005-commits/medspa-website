import React from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  label: string;
  className?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-full text-white text-[13px] leading-[16px] font-normal pointer-events-none select-none",
        // Apple-style Glassmorphism Refraction Effect
        "bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-white/5 before:pointer-events-none",
        className
      )}
    >
      <span className="relative z-10 drop-shadow-sm">{label}</span>
    </div>
  );
};
