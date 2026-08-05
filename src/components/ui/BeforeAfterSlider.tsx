"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface BeforeAfterSliderProps {
  beforeImage: StaticImageData | string;
  afterImage: StaticImageData | string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before Treatment",
  afterAlt = "After Treatment",
  className,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Before and after image comparison slider"
      className={cn(
        "relative w-full h-[480px] sm:h-[560px] lg:h-[620px] rounded-[24px] sm:rounded-[32px] overflow-hidden select-none cursor-ew-resize shadow-md",
        className
      )}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Full Base Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[12px] font-sans font-medium px-3.5 py-1 rounded-full uppercase tracking-wider z-10">
          After
        </span>
      </div>

      {/* Before Image */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[12px] font-sans font-medium px-3.5 py-1 rounded-full uppercase tracking-wider z-20">
          Before
        </span>
      </div>

      {/* Vertical Slider Divider Line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white z-30 shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Central Circular Drag Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border border-black/10 transition-transform hover:scale-105">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[12px] text-[#1C1C1C]"
            aria-hidden="true"
          >
            <path
              d="M5 1L1 6L5 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 1L17 6L13 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Accessible Input Slider for keyboard users */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="sr-only"
        aria-label="Image comparison slider control"
      />
    </div>
  );
};
