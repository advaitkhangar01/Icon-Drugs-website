import React from "react";
import type { Metadata } from "next";
import BusinessEnquiryClient from "@/components/business/BusinessEnquiryClient";

export const metadata: Metadata = {
  title: "PCD Pharma Franchise, Monopoly Rights & Contract Manufacturing Enquiry",
  description:
    "Apply for district monopoly PCD pharma franchise, third-party contract formulation manufacturing, or hospital procurement supplies with Icon Drugs Private Limited, Nagpur, Maharashtra. Instant commercial inquiry response.",
  keywords: [
    "PCD pharma franchise Maharashtra",
    "pharma franchise Nagpur",
    "third party pharma manufacturing",
    "pharma monopoly rights Vidarbha",
    "hospital medicine supply",
    "Icon Drugs franchise",
    "pharmaceutical contract manufacturing India",
  ],
  alternates: {
    canonical: "https://icondrugs.com/business-enquiry",
  },
  openGraph: {
    title: "PCD Pharma Franchise & Contract Manufacturing Enquiry | Icon Drugs",
    description:
      "Exclusive district monopoly territories, certified WHO-GMP manufacturing lines, and promotional visual aids support for pharma distributors across India.",
    url: "https://icondrugs.com/business-enquiry",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs B2B Business Enquiry",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCD Pharma Franchise & Manufacturing Enquiry | Icon Drugs",
    description:
      "Partner with Icon Drugs for district monopoly franchise rights and institutional supply tenders.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function BusinessEnquiryPage() {
  const enquiryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://icondrugs.com/business-enquiry#webpage",
    "url": "https://icondrugs.com/business-enquiry",
    "name": "PCD Pharma Franchise & Manufacturing Enquiry | Icon Drugs",
    "description":
      "Commercial inquiry portal for PCD pharma distribution, third-party manufacturing, and hospital supply tenders.",
    "publisher": {
      "@id": "https://icondrugs.com/#organization",
    },
    "mainEntity": {
      "@type": "Service",
      "name": "PCD Pharma Franchise & Third Party Manufacturing",
      "provider": {
        "@id": "https://icondrugs.com/#organization",
      },
      "areaServed": "IN",
      "serviceType": "Pharmaceutical Distribution & Contract Manufacturing",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquiryJsonLd) }}
      />
      <BusinessEnquiryClient />
    </>
  );
}
