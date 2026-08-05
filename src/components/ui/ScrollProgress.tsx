"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3C4233] via-[#C9A876] to-[#EFE3D8] z-[9998] origin-left"
      style={{ scaleX }}
    />
  );
};
