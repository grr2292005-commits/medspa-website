"use client";

import React from "react";
import { m as motion, AnimatePresence } from "framer-motion";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
