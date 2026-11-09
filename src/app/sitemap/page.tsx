import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productsData, therapyAreasData, healthConditionsData, insightsData } from "@/data/siteData";
import { ChevronRight, FileText, ArrowRight, Layers, Pill, Activity, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap & Complete Website Directory | Icon Drugs",
  description:
    "Explore the complete website directory of Icon Drugs Private Limited. Direct links to all corporate pages, 25+ product monographs, 10 therapeutic divisions, health guides, and institutional portals.",
  alternates: {
    canonical: "https://icondrugs.com/sitemap",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HtmlSitemapPage() {
  const sitemapJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://icondrugs.com/sitemap#webpage",
    "url": "https://icondrugs.com/sitemap",
    "name": "HTML Sitemap & Website Directory | Icon Drugs",
    "description": "Visual hierarchical directory of all indexable pages on icondrugs.com.",
    "publisher": {
      "@id": "https://icondrugs.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20 bg-slate-50">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Sitemap</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4 max-w-3xl">
              Complete Website Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Navigate all published corporate portals, active pharmaceutical monographs, therapeutic portfolios, and clinical health resources.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Cluster */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-[#005EB1] font-bold text-lg font-heading">
                <ShieldCheck className="w-5 h-5" />
                <h2>Corporate &amp; Governance</h2>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li>
                  <Link href="/" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Homepage</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>About Icon Drugs (Heritage &amp; Leadership)</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/corporate-information" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Corporate Information &amp; Entity Facts</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/pharmaceutical-company-in-nagpur" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Pharma Company in Nagpur, Maharashtra</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/pharmaceutical-manufacturing-maharashtra" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Manufacturing in Maharashtra</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/pharmaceutical-products-formulations" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Formulations &amp; Products Portfolio</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/pharmaceutical-distribution-supply" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>PCD Franchise &amp; Distribution Supply</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/quality" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Quality Standards &amp; QA</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Contact &amp; Nagpur Office (Dharampeth)</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/healthcare-professionals" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>Healthcare Professionals (HCP) Portal</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
                <li>
                  <Link href="/business-enquiry" className="hover:text-[#005EB1] font-medium flex items-center justify-between">
                    <span>PCD Franchise &amp; Tender Inquiries</span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Therapeutic Portfolios */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-[#F87901] font-bold text-lg font-heading">
                <Activity className="w-5 h-5" />
                <h2>Therapeutic Areas (10)</h2>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 max-h-72 overflow-y-auto pr-2">
                <li>
                  <Link href="/therapeutic-areas" className="font-bold text-[#005EB1] hover:underline block pb-1">
                    Therapeutic Overview Hub &rarr;
                  </Link>
                </li>
                {therapyAreasData.map((area) => (
                  <li key={area.id}>
                    <Link
                      href={`/therapeutic-areas/${area.slug}`}
                      className="hover:text-[#005EB1] flex items-center justify-between"
                    >
                      <span className="line-clamp-1">{area.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Health & Insights */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-600 font-bold text-lg font-heading">
                <BookOpen className="w-5 h-5" />
                <h2>Clinical Health &amp; Insights</h2>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li>
                  <Link href="/health" className="font-bold text-[#005EB1] hover:underline block pb-1">
                    Health Education Hub &rarr;
                  </Link>
                </li>
                {healthConditionsData.map((c) => (
                  <li key={c.id}>
                    <Link href={`/health/${c.slug}`} className="hover:text-[#005EB1] flex items-center justify-between text-xs sm:text-sm">
                      <span className="line-clamp-1">{c.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t border-slate-100">
                  <Link href="/insights" className="font-bold text-[#005EB1] hover:underline block pb-1">
                    Insights &amp; News Hub &rarr;
                  </Link>
                </li>
                {insightsData.map((i) => (
                  <li key={i.id}>
                    <Link href={`/insights/${i.slug}`} className="hover:text-[#005EB1] flex items-center justify-between text-xs sm:text-sm">
                      <span className="line-clamp-1">{i.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Complete Product Monograph Inventory (All 25) */}
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5 text-slate-900 font-bold text-xl font-heading">
                  <Pill className="w-6 h-6 text-[#005EB1]" />
                  <h2>All Formulations &amp; Monographs ({productsData.length})</h2>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-black uppercase tracking-wider text-[#005EB1] hover:underline"
                >
                  View Searchable Grid &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productsData.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-[#005EB1] transition-all group block"
                  >
                    <div className="text-sm font-black text-slate-900 group-hover:text-[#005EB1] line-clamp-1">
                      {product.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                      {product.genericName}
                    </div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 flex items-center justify-between">
                      <span>{product.dosageForm}</span>
                      <span className="text-[#005EB1] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal & Compliance */}
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between text-xs text-slate-600 gap-4">
              <div className="flex flex-wrap items-center gap-6 font-semibold">
                <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-slate-900 transition-colors">
                  Terms &amp; Conditions
                </Link>
                <Link href="/disclaimer" className="hover:text-slate-900 transition-colors">
                  Regulatory &amp; Medical Disclaimer
                </Link>
                <a href="/sitemap.xml" className="text-[#005EB1] hover:underline font-bold">
                  XML Sitemap (Crawler Feed)
                </a>
                <a href="/llms.txt" className="text-[#F87901] hover:underline font-bold">
                  AI Manifest (llms.txt)
                </a>
              </div>
              <div>© {new Date().getFullYear()} Icon Drugs Private Limited. All rights reserved.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
