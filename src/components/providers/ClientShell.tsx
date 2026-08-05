"use client";

import React from "react";
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <SmoothScrollProvider>
            <PageLoader />
            <ScrollProgress />
            {children}
            <BackToTop />
          </SmoothScrollProvider>
        </LazyMotion>
      </MotionConfig>
    </LanguageProvider>
  );
}
