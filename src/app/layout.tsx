import type { Metadata } from "next";
import { primaryFont, serifFont } from "@/styles/fonts";
import { ClientShell } from "@/components/providers/ClientShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solène | Aesthetic Medicine & Studio",
  description: "Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm studio environment.",
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
      <body className="antialiased selection:bg-[#EFE3D8] selection:text-[#1C1C1C]">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
