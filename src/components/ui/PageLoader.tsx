"use client";

import React, { useState, useEffect } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoSvg from "../../../public/assets/svg/ic_logo_1.svg";

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[10000] bg-[#1F221B] flex flex-col items-center justify-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Image
              src={logoSvg}
              alt="Solène"
              width={16}
              height={24}
              className="w-[16px] h-[24px] shrink-0"
            />
            <span className="font-serif font-semibold text-[28px] text-white tracking-normal">
              Solène
            </span>
          </motion.div>

          {/* Loading bar */}
          <div className="w-[120px] h-[2px] bg-white/15 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
              className="h-full w-full bg-[#EFE3D8] rounded-full origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
