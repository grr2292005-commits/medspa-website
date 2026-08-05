import type { Metadata } from "next";
import { primaryFont, serifFont } from "@/styles/fonts";
import { ClientShell } from "@/components/providers/ClientShell";
import { MedicalClinicJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solenestudio.com"),
  title: {
    default: "Solène | Aesthetic Medicine & Studio Beverly Hills",
    template: "%s | Solène Aesthetic Medicine Studio",
  },
  description:
    "Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm Beverly Hills studio environment.",
  keywords: [
    "Medspa Beverly Hills",
    "Aesthetic Medicine Studio",
    "Morpheus8 Beverly Hills",
    "Doctor-led Dermal Fillers",
    "HydraFacial Beverly Hills",
    "Natural Facial Balancing",
  ],
  authors: [{ name: "Solène Medical Team" }],
  creator: "Solène Studio",
  publisher: "Solène Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://solenestudio.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solenestudio.com",
    siteName: "Solène Aesthetic Medicine Studio",
    title: "Solène | Aesthetic Medicine & Studio Beverly Hills",
    description:
      "Board-certified physician-led aesthetic studio in Beverly Hills specializing in subtle, natural facial architecture.",
    images: [
      {
        url: "https://solenestudio.com/assets/Home%20Hero%20Section.png",
        width: 1200,
        height: 630,
        alt: "Solène Beverly Hills Studio Sanctuary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solène | Aesthetic Medicine & Studio Beverly Hills",
    description:
      "Board-certified physician-led aesthetic studio in Beverly Hills specializing in subtle, natural facial architecture.",
    images: ["https://solenestudio.com/assets/Home%20Hero%20Section.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${primaryFont.variable} ${serifFont.variable}`}
    >
      <head>
        <MedicalClinicJsonLd />
      </head>
      <body className="antialiased selection:bg-[#EFE3D8] selection:text-[#1C1C1C]">
        {/* WCAG 2.2 Accessible Skip to Main Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-6 focus:py-3 focus:bg-[#3C4233] focus:text-white focus:rounded-full focus:shadow-xl font-sans text-[14px] font-medium"
        >
          Skip to main content
        </a>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
