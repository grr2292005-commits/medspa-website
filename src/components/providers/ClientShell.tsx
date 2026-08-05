"use client";

import React from "react";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageLoader />
      <ScrollProgress />
      {children}
      <BackToTop />
    </SmoothScrollProvider>
  );
}
