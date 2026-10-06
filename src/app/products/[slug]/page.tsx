import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productsData } from "@/data/siteData";
import { ChevronRight, FileDown, AlertCircle, Info, Sparkles } from "lucide-react";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} (${product.genericName}) | Icon Drugs`,
    description: `Clinical prescribing information, dosage, indications and pharmacology for ${product.name} (${product.genericName} ${product.strength}).`,
  };
}

export async function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Breadcrumb Bar */}
        <section className="bg-slate-100 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-[#005EB1]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-[#005EB1]">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{product.name}</span>
          </div>
        </section>

        {/* Product Overview Top Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Product Image Container */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isRx && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#F87901] text-white text-xs font-bold uppercase tracking-wider">
                    Prescription Only (Rx)
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                <span>WHO-GMP Validated Batch</span>
                <span className="font-mono">ID: {product.id}</span>
              </div>
            </div>

            {/* Product Details Header */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#005EB1]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#005EB1]">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-600 italic mt-2">
                  Generic: {product.genericName}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-slate-200">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Strength</div>
                  <div className="text-base font-extrabold text-slate-900">{product.strength}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Dosage Form</div>
                  <div className="text-base font-extrabold text-slate-900">{product.dosageForm}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Packaging</div>
                  <div className="text-base font-extrabold text-slate-900">{product.packSize}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/business-enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F87901] hover:bg-[#e06c00] text-white font-bold text-sm transition-colors shadow-md shadow-[#F87901]/20"
                >
                  Request Bulk / Hospital Supply
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-sm transition-colors"
                >
                  <FileDown className="w-4 h-4 text-[#005EB1]" />
                  <span>Download Prescribing Leaflet</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Monograph Tabs / Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10">
            {/* Indications */}
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 font-heading mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#005EB1]" />
                Therapeutic Indications
              </h2>
              <ul className="space-y-2">
                {product.indications.map((ind, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="text-[#005EB1] font-bold mt-0.5">•</span>
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mechanism of Action */}
            <div className="pt-8 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 font-heading mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#005EB1]" />
                Clinical Mechanism of Action
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.mechanism}
              </p>
            </div>

            {/* Dosage & Administration */}
            <div className="pt-8 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 font-heading mb-3">
                Dosage & Administration Guidelines
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.dosage}
              </p>
            </div>

            {/* Warnings & Precautions */}
            <div className="pt-8 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-slate-900 font-heading mb-4 flex items-center gap-2 text-amber-700">
                <AlertCircle className="w-5 h-5" />
                Precautions & Contraindications
              </h2>
              <ul className="space-y-2">
                {product.warnings.map((warn, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="text-amber-600 font-bold mt-0.5">!</span>
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Storage */}
            <div className="pt-8 border-t border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-1">
                Storage & Stability
              </h2>
              <p className="text-sm text-slate-600">
                {product.storage}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
