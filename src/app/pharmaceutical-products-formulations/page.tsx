import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import { productsData, therapyAreasData } from "@/data/siteData";
import {
  Pill,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Stethoscope,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical Products & Formulations Manufacturer | Icon Drugs Nagpur",
  description:
    "Explore DCGI-approved pharmaceutical formulations manufactured and distributed by Icon Drugs Private Limited, Nagpur. Comprehensive portfolios spanning neurology (Prenerve), orthopedics (APAR, Serek), gastroenterology, and respiratory care.",
  keywords: [
    "Pharmaceutical products Nagpur",
    "Pharmaceutical formulations manufacturer",
    "Icon Drugs products",
    "Prenerve",
    "Prenerve-NT",
    "APAR",
    "APAR-S",
    "APAR-MR",
    "Serek-N",
    "Rabicon",
    "Medicine manufacturing company Nagpur",
    "Pharma formulations Maharashtra",
  ],
  alternates: {
    canonical: "https://icondrugs.com/pharmaceutical-products-formulations",
  },
  openGraph: {
    title: "Pharmaceutical Products & Formulations Manufacturer | Icon Drugs Nagpur",
    description:
      "Explore 25+ verified prescription formulations across neurology, orthopedics, gastroenterology, bone health, and respiratory care.",
    url: "https://icondrugs.com/pharmaceutical-products-formulations",
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
    title: "Pharmaceutical Products & Formulations | Icon Drugs Nagpur",
    description:
      "DCGI-approved formulations engineered for clinical bioequivalence and patient compliance.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function PharmaceuticalProductsFormulationsPage() {
  const formulationsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://icondrugs.com/pharmaceutical-products-formulations#webpage",
        "url": "https://icondrugs.com/pharmaceutical-products-formulations",
        "name": "Pharmaceutical Products & Formulations Manufacturer | Icon Drugs Nagpur",
        "description":
          "Directory of pharmaceutical formulations manufactured and supplied by Icon Drugs Private Limited.",
        "isPartOf": {
          "@id": "https://icondrugs.com/#website",
        },
        "about": {
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
              "description": prod.genericName,
              "category": prod.category,
              "brand": {
                "@type": "Brand",
                "name": "Icon Drugs",
              },
              "manufacturer": {
                "@id": "https://icondrugs.com/#organization",
              },
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/pharmaceutical-products-formulations#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://icondrugs.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products & Formulations",
            "item": "https://icondrugs.com/pharmaceutical-products-formulations",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formulationsJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Formulations Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Pharmaceutical Products &amp; Formulations
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Formulated with scientific rigor in licensed manufacturing facilities. Explore Icon Drugs Private Limited’s core therapeutic medicines engineered for reliable dissolution, bioequivalence, and patient outcomes.
            </p>
          </div>
        </section>

        {/* Flagship Brands Highlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <h2 className="text-xl font-bold text-slate-900 font-heading mb-6">
              Flagship Formulations Developed by Icon Drugs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
                <span className="text-xs font-bold text-[#005EB1] uppercase tracking-wider">
                  Neurology &amp; Nerve Care
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  Prenerve&reg; Range
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Including Prenerve Caps, Prenerve-NT, Prenerve Forte, Prenerve Inj, and Prenerve Gel. Formulated with Methylcobalamin, Pregabalin, Nortriptyline, and Benfotiamine for peripheral neuropathies.
                </p>
                <div className="pt-2">
                  <Link
                    href="/products/prenerve-caps"
                    className="text-xs font-bold text-[#005EB1] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Prenerve Monograph</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-3">
                <span className="text-xs font-bold text-[#F87901] uppercase tracking-wider">
                  Orthopedics &amp; Analgesics
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  APAR&reg; &amp; Serek Series
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Including APAR, APAR-S, APAR-MR, CT-Flam, Serek-D, and Serek-N. Advanced Aceclofenac, Diclofenac, Serratiopeptidase, and Paracetamol combinations for acute and musculoskeletal inflammation.
                </p>
                <div className="pt-2">
                  <Link
                    href="/products/apar-range"
                    className="text-xs font-bold text-[#F87901] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View APAR Range</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Gastro &amp; Respiratory
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  Rabicon&reg;, Pandom &amp; Recoff
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rabeprazole (Rabicon), Pantoprazole (Pandom), and Antitussive / Mucolytic syrups (Recoff, Recoff-DX) and Allerkast Montelukast formulations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/products"
                    className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Catalog</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Master Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Complete Formulations Directory
            </h2>
            <p className="text-base text-slate-600">
              Each product monograph provides active generic salt compositions, clinical indications, dosage formats, and B2B procurement terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {prod.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {prod.dosageForm}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {prod.name}
                  </h3>

                  <p className="text-xs font-medium text-[#005EB1] mb-3">
                    {prod.genericName}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {prod.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Pack: {prod.packSize}</span>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F87901] hover:text-[#005EB1] transition-colors"
                  >
                    <span>Full Monograph</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <PartnershipCTA />
      </main>
      <Footer />
    </>
  );
}
