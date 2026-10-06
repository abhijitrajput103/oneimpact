import type { Metadata, Viewport } from "next";
import { fontDisplay, fontSans } from "./fonts";
import Providers from "./providers";
import Cursor from "@/components/ui/Cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Impact | Premium Interactive Digital Agency",
  description:
    "One Impact is an award-winning creative agency crafting high-performance, immersive, and premium interactive digital experiences.",
  metadataBase: new URL("https://oneimpact.agency"),
  openGraph: {
    title: "One Impact | Premium Interactive Digital Agency",
    description:
      "One Impact is an award-winning creative agency crafting high-performance, immersive, and premium interactive digital experiences.",
    url: "https://oneimpact.agency",
    siteName: "One Impact",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Impact | Premium Interactive Digital Agency",
    description:
      "One Impact is an award-winning creative agency crafting high-performance, immersive, and premium interactive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="bg-black text-off-white font-sans min-h-full flex flex-col custom-cursor-active overflow-x-hidden">
        <Providers>
          {/* Custom interactive cursor rendered globally */}
          <Cursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
