import React from "react";
import type { Metadata } from "next";
import ProductsCatalogClient from "@/components/products/ProductsCatalogClient";
import { productsData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Pharmaceutical Products Directory & DCGI Formulations",
  description:
    "Explore Icon Drugs' comprehensive directory of 25+ DCGI-approved pharmaceutical formulations. Features full clinical monographs, active salt compositions, indications, and B2B commercial terms manufactured under WHO-GMP compliance in Nagpur, Maharashtra.",
  keywords: [
    "Icon Drugs products",
    "Icon Drugs medicine list",
    "pharma formulations Nagpur",
    "WHO-GMP medicine catalog",
    "Prenerve capsules",
    "Prenerve-NT tablets",
    "Rabicon DSR",
    "PCD pharma price list",
    "DCGI approved medicines India",
  ],
  alternates: {
    canonical: "https://icondrugs.com/products",
  },
  openGraph: {
    title: "Pharmaceutical Products Directory & DCGI Formulations | Icon Drugs",
    description:
      "Comprehensive catalog of 25+ prescription formulations across neurology, orthopedics, gastroenterology, and respiratory health by Icon Drugs Private Limited, Nagpur.",
    url: "https://icondrugs.com/products",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Pharmaceutical Formulations Catalog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Products Directory | Icon Drugs",
    description:
      "Browse 25+ certified therapeutic formulations with clinical indications, PubChem molecular data, and commercial supply terms.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function ProductsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://icondrugs.com/products#webpage",
    "url": "https://icondrugs.com/products",
    "name": "Pharmaceutical Products Directory | Icon Drugs",
    "description":
      "Directory of DCGI-approved pharmaceutical formulations manufactured by Icon Drugs Private Limited under certified WHO-GMP standards.",
    "publisher": {
      "@id": "https://icondrugs.com/#organization",
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": productsData.length,
      "itemListElement": productsData.map((prod, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "@id": `https://icondrugs.com/products/${prod.slug}#product`,
          "name": prod.name,
          "url": `https://icondrugs.com/products/${prod.slug}`,
          "description": `${prod.genericName} - ${prod.tagline}`,
          "category": prod.category,
          "manufacturer": {
            "@id": "https://icondrugs.com/#organization",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <ProductsCatalogClient />
    </>
  );
}
