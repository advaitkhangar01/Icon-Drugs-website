import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { therapyAreasData } from "@/data/siteData";
import { ArrowRight, Activity, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapeutic Areas & Specialized Medical Portfolios",
  description:
    "Explore Icon Drugs' 10 core therapeutic focus areas spanning neurology, orthopedics, gastroenterology, pulmonology, bone health, and anti-infectives. Precision formulations manufactured under WHO-GMP compliance in Nagpur, India.",
  keywords: [
    "therapeutic areas",
    "neurology formulations",
    "orthopedic medicines",
    "gastroenterology drugs",
    "pulmonology cough formulations",
    "anti infectives urology",
    "Icon Drugs therapies",
    "pharma company Nagpur",
  ],
  alternates: {
    canonical: "https://icondrugs.com/therapeutic-areas",
  },
  openGraph: {
    title: "Therapeutic Areas & Specialized Medical Portfolios | Icon Drugs",
    description:
      "Explore 10 specialized therapeutic categories manufactured by Icon Drugs Private Limited with stringent pharmacopeial validation in Nagpur, Maharashtra.",
    url: "https://icondrugs.com/therapeutic-areas",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Therapeutic Portfolios",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Areas | Icon Drugs",
    description:
      "10 specialized medical segments formulated under WHO-GMP standards for patient health outcomes.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function TherapeuticAreasPage() {
  const therapyJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://icondrugs.com/therapeutic-areas#webpage",
    "url": "https://icondrugs.com/therapeutic-areas",
    "name": "Therapeutic Areas & Medical Portfolios | Icon Drugs",
    "description":
      "Overview of 10 therapeutic divisions developed and manufactured by Icon Drugs Private Limited, Nagpur, India.",
    "publisher": {
      "@id": "https://icondrugs.com/#organization",
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": therapyAreasData.map((area, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": area.name,
        "url": `https://icondrugs.com/therapeutic-areas/${area.slug}`,
        "description": area.shortDesc,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(therapyJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Therapeutic Areas</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              Specialized Portfolios Engineered for Clinical Precision
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Targeted formulations meeting rigorous pharmacopeial standards across key chronic and acute disease areas.
            </p>
          </div>
        </section>

        {/* Portfolios Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyAreasData.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center group-hover:bg-[#005EB1] group-hover:text-white transition-colors">
                      <Activity className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {area.stats}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-3">
                    {area.name}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {area.fullDesc}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Conditions Addressed:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {area.conditions.map((cond, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-slate-100 text-xs font-medium text-slate-700"
                        >
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/therapeutic-areas/${area.slug}`}
                  className="inline-flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-[#005EB1] group-hover:text-[#F87901] transition-colors"
                >
                  <span>Explore Portfolio & Formulations</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
