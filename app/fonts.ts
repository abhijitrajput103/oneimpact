import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: "./fonts/playfair-display-latin.woff2",
  weight: "400 900",
  adjustFontFallback: "Times New Roman",
  variable: "--font-display",
  display: "swap",
});

export const fontSans = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  variable: "--font-sans",
  display: "swap",
});
