import { Fraunces, Public_Sans } from "next/font/google";

export const primaryFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  style: ["normal", "italic"],
});

export const serifFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});
