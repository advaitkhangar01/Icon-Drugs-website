import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#00477F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://icondrugs.com"),
  title: {
    default: "Icon Drugs | Healthcare, Built on Experience | Nagpur, Maharashtra",
    template: "%s | Icon Drugs",
  },
  description:
    "Icon Drugs Private Limited — 25+ years of trusted pharmaceutical manufacturing, certified WHO-GMP & ISO 9001:2015 standards, and advanced therapeutic formulations across neurology, orthopedics, gastroenterology, respiratory, and anti-infectives in Nagpur, Maharashtra, India.",
  keywords: [
    "Icon Drugs",
    "Icon Drugs Private Limited",
    "Icon Drugs Nagpur",
    "Pharmaceutical company in Nagpur",
    "Pharmaceutical companies in Maharashtra",
    "WHO-GMP pharma manufacturer",
    "PCD pharma franchise Maharashtra",
    "Prenerve capsules",
    "Prenerve-NT",
    "Rabicon DSR",
    "Healthcare built on experience",
  ],
  authors: [{ name: "ICON DRUGS PRIVATE LIMITED", url: "https://icondrugs.com" }],
  creator: "ICON DRUGS PRIVATE LIMITED",
  publisher: "ICON DRUGS PRIVATE LIMITED",
  alternates: {
    canonical: "https://icondrugs.com",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Icon Drugs — Healthcare, Built on Experience",
    description:
      "Icon Drugs Private Limited — 25+ years in pharmaceutical formulation excellence, certified WHO-GMP manufacturing, and patient-centered therapies headquartered in Nagpur, Maharashtra, India.",
    url: "https://icondrugs.com",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Private Limited — Pharmaceutical Formulations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Icon Drugs — Healthcare, Built on Experience",
    description:
      "25+ years of pharmaceutical manufacturing precision, WHO-GMP accredited formulations, and patient care across India.",
    images: ["/icon-brand-mark.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://icondrugs.com/#organization",
      "name": "Icon Drugs",
      "legalName": "ICON DRUGS PRIVATE LIMITED",
      "url": "https://icondrugs.com",
      "logo": "https://icondrugs.com/icon-brand-mark.png",
      "description":
        "Icon Drugs Private Limited is an Indian pharmaceutical manufacturing enterprise established in 2002, producing WHO-GMP certified therapeutic formulations in Nagpur, Maharashtra.",
      "foundingDate": "2002",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pharma Industrial Complex",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440001",
        "addressCountry": "IN",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-712-294-0128",
          "contactType": "customer service",
          "email": "business@icondrugs.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Marathi"],
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/company/icon-drugs",
      ],
      "knowsAbout": [
        "Pharmaceutical Manufacturing",
        "WHO-GMP Formulations",
        "Neurology Formulations",
        "Orthopedics Formulations",
        "Gastroenterology Formulations",
        "PCD Pharma Franchise",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://icondrugs.com/#website",
      "url": "https://icondrugs.com",
      "name": "Icon Drugs",
      "publisher": {
        "@id": "https://icondrugs.com/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://icondrugs.com/#localbusiness",
      "name": "Icon Drugs Private Limited",
      "image": "https://icondrugs.com/icon-brand-mark.png",
      "url": "https://icondrugs.com",
      "telephone": "+91-712-294-0128",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pharma Industrial Complex",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1458,
        "longitude": 79.0882,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
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
