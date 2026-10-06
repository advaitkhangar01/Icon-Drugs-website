import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icondrugs.com"),
  title: "Icon Drugs | Healthcare, Built on Experience",
  description: "25+ years of trusted pharmaceutical manufacturing, stringent quality assurance, and therapeutic excellence across cardiology, gastroenterology, respiratory, and anti-infectives.",
  keywords: ["Icon Drugs", "Pharmaceuticals", "Pharma Manufacturer", "WHO-GMP", "Therapeutic Formulations", "Cardiovascular Care", "Generic Medicine"],
  openGraph: {
    title: "Icon Drugs — Healthcare, Built on Experience",
    description: "25+ years in pharmaceutical excellence, advanced manufacturing, and patient-centered therapies.",
    url: "https://icondrugs.com",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs — Healthcare, Built on Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F7F9FB] text-[#111111] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#005EB1] focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
