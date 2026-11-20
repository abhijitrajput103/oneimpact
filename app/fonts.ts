import { Playfair_Display, Manrope } from "next/font/google";

export const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
