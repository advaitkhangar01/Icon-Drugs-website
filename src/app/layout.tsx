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
    default: "Icon Drugs | Pharmaceutical Company in Nagpur, Maharashtra",
    template: "%s | Icon Drugs",
  },
  description:
    "Icon Drugs Private Limited is an Indian pharmaceutical manufacturer and distributor based in Nagpur, Maharashtra. Established in 2002, producing DCGI-approved formulations across neurology, orthopedics, gastroenterology, and respiratory care.",
  keywords: [
    "Icon Drugs",
    "Icon Drugs Private Limited",
    "Icon Drugs Nagpur",
    "Pharma companies in Nagpur",
    "Pharmaceutical manufacturers in Nagpur",
    "Pharmaceutical company in Nagpur",
    "Pharmaceutical distributors in Nagpur",
    "Pharma suppliers in Nagpur",
    "Pharmaceutical products Nagpur",
    "Pharmaceutical manufacturing company Maharashtra",
    "Medicine manufacturing company Nagpur",
    "Prenerve",
    "Prenerve-NT",
    "APAR",
    "APAR-S",
    "APAR-MR",
    "PCD pharma franchise Maharashtra",
  ],
  authors: [{ name: "ICON DRUGS PRIVATE LIMITED", url: "https://icondrugs.com" }],
  creator: "ICON DRUGS PRIVATE LIMITED",
  publisher: "ICON DRUGS PRIVATE LIMITED",
  alternates: {
    canonical: "https://icondrugs.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
    title: "Icon Drugs | Pharmaceutical Company in Nagpur, Maharashtra",
    description:
      "Icon Drugs Private Limited — Established in 2002 in Nagpur, Maharashtra. Pharmaceutical manufacturing, formulation development, and distribution network across India.",
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
    title: "Icon Drugs | Pharmaceutical Company in Nagpur, Maharashtra",
    description:
      "Established in 2002 in Nagpur, Maharashtra. Pharmaceutical formulations across neurology, orthopedics, gastroenterology, and respiratory health.",
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
        "Icon Drugs Private Limited is an Indian pharmaceutical company incorporated on 8 January 2002, specializing in pharmaceutical formulations, manufacturing, and distribution in Nagpur, Maharashtra.",
      "foundingDate": "2002-01-08",
      "identifier": [
        {
          "@type": "PropertyValue",
          "name": "CIN",
          "value": "U24231MH2002PTC134479",
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M2, Ved Solitaire, 5th Cross B St., Cement Road, Dharampeth",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440010",
        "addressCountry": "IN",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-98230-44000",
          "contactType": "customer service",
          "email": "business@icondrugs.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Marathi"],
        },
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Umesh Dange",
          "jobTitle": "Director",
        },
        {
          "@type": "Person",
          "name": "Sushrut Dange",
          "jobTitle": "Business Owner & Representative",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/company/icon-drugs",
        "https://www.instagram.com/icondrugs/",
        "https://www.facebook.com/profile.php?id=61596072134328",
        "https://x.com/icondrugs",
      ],
      "knowsAbout": [
        "Pharmaceutical Manufacturing",
        "Pharmaceutical Formulations",
        "Neurology Formulations",
        "Orthopedics Formulations",
        "Gastroenterology Formulations",
        "Respiratory Formulations",
        "PCD Pharma Franchise Distribution",
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
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://icondrugs.com/products?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
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
