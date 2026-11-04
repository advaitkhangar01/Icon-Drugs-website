import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { insightsData } from "@/data/siteData";
import { ChevronRight, ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmaceutical Insights, Clinical Science & Industry News",
  description:
    "Explore clinical formulation advancements, aseptic manufacturing standards, polymorphism bioavailability, and pharmaceutical supply chain insights from Icon Drugs Private Limited, Nagpur.",
  keywords: [
    "pharmaceutical insights",
    "aseptic injectable standards",
    "polymorphism bioavailability",
    "pharma supply chain",
    "Icon Drugs news",
    "Nagpur pharmaceutical company",
  ],
  alternates: {
    canonical: "https://icondrugs.com/insights",
  },
  openGraph: {
    title: "Pharmaceutical Insights, Clinical Science & Industry News | Icon Drugs",
    description:
      "Technical perspectives on chemical purity, formulation science, and quality validations from the Icon Drugs scientific team in Nagpur, Maharashtra.",
    url: "https://icondrugs.com/insights",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Scientific Insights",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Insights | Icon Drugs",
    description:
      "In-depth articles covering aseptic processing, bioavailability, and hospital supply chain integrity.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function InsightsPage() {
  const insightsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://icondrugs.com/insights#webpage",
    "url": "https://icondrugs.com/insights",
    "name": "Insights & Technical Perspectives | Icon Drugs",
    "description":
      "Articles covering pharmaceutical chemical purity, quality system validations, and healthcare supply chain resilience.",
    "publisher": {
      "@id": "https://icondrugs.com/#organization",
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": insightsData.map((article, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": article.title,
        "url": `https://icondrugs.com/insights/${article.slug}`,
        "description": article.excerpt,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Insights & Technical Desk</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              Scientific Perspectives & Corporate Milestones
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              In-depth articles covering pharmaceutical chemical purity, quality system validations, and healthcare supply chain resilience.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#005EB1] text-white text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005EB1] group-hover:text-[#F87901] transition-colors pt-4 border-t border-slate-100">
                    <span>Read Full Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
