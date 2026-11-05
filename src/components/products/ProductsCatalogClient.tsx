"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productsData, therapyAreasData, doctorSpecialtiesData } from "@/data/siteData";
import {
  Search,
  Filter,
  ArrowRight,
  Pill,
  ChevronRight,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Droplet,
  Layers,
  CheckCircle2,
  Syringe,
} from "lucide-react";

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes("injection")) return <Syringe className="w-3.5 h-3.5" />;
  if (f.includes("syrup") || f.includes("suspension")) return <Droplet className="w-3.5 h-3.5" />;
  if (f.includes("gel") || f.includes("cream")) return <Layers className="w-3.5 h-3.5" />;
  if (f.includes("sachet")) return <Sparkles className="w-3.5 h-3.5" />;
  return <Pill className="w-3.5 h-3.5" />;
};

export default function ProductsCatalogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTherapy, setSelectedTherapy] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.genericName.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.indications.some((ind) => ind.toLowerCase().includes(q));

      const matchesTherapy =
        selectedTherapy === "all" || product.therapySlug === selectedTherapy;

      let matchesSpecialty = true;
      if (selectedSpecialty !== "all") {
        const spec = doctorSpecialtiesData.find((s) => s.slug === selectedSpecialty);
        if (spec) {
          matchesSpecialty = spec.portfolio.includes(product.slug);
        }
      }

      return matchesSearch && matchesTherapy && matchesSpecialty;
    });
  }, [searchTerm, selectedTherapy, selectedSpecialty]);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Products Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4 max-w-3xl">
              Pharmaceutical Formulations &amp; Clinical Monographs
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Explore 25+ DCGI-approved formulations engineered under strict WHO-GMP compliance, complete with active chemical profiles, clinical indications, and commercial B2B supply terms.
            </p>
          </div>
        </section>

        {/* Search & Filter Toolbar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search Bar */}
              <div className="md:col-span-6 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by brand, salt, molecule, or indication..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#005EB1] focus:border-transparent text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Therapy Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedTherapy}
                  onChange={(e) => setSelectedTherapy(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#005EB1] text-slate-900 bg-white"
                >
                  <option value="all">All Therapeutic Segments</option>
                  {therapyAreasData.map((area) => (
                    <option key={area.id} value={area.slug}>
                      {area.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Specialty Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#005EB1] text-slate-900 bg-white"
                >
                  <option value="all">All Prescribing Specialties</option>
                  {doctorSpecialtiesData.map((spec) => (
                    <option key={spec.id} value={spec.slug}>
                      {spec.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Result Counter & Active Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
              <span className="font-bold text-slate-700">
                Showing {filteredProducts.length} of {productsData.length} formulations
              </span>
              {(searchTerm || selectedTherapy !== "all" || selectedSpecialty !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTherapy("all");
                    setSelectedSpecialty("all");
                  }}
                  className="text-[#005EB1] hover:underline font-bold"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredProducts.map((product) => {
                const therapy = therapyAreasData.find((t) => t.slug === product.therapySlug);

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group bg-white rounded-3xl border-2 border-slate-200 hover:border-[#005EB1] p-5 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
                  >
                    <div>
                      {/* Product Packaging Image Showcase - 3:2 full container fit with zero grey background */}
                      <div className="relative w-full aspect-[3/2] mb-5 rounded-2xl bg-white overflow-hidden border border-slate-200/90 group-hover:border-blue-300 transition-colors">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={`${product.name} packaging shot — ${product.genericName}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-50/50">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100/70 text-[#005EB1] flex items-center justify-center">
                              {getDosageIcon(product.dosageForm)}
                            </div>
                          </div>
                        )}

                        {/* Top Badges: Single-line dosage and truncated therapy to prevent collisions */}
                        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none z-10">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/90 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-800 shadow-sm shrink-0 whitespace-nowrap">
                            {getDosageIcon(product.dosageForm)}
                            <span>{product.dosageForm.replace("&", "/")}</span>
                          </span>

                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/90 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#005EB1] shadow-sm truncate max-w-[50%]">
                            <span className="truncate">{therapy ? therapy.name.split("&")[0].trim() : product.category.split("&")[0].trim()}</span>
                          </span>
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="mb-4 space-y-1.5">
                        <h2 className="text-xl sm:text-2xl font-black text-slate-950 group-hover:text-[#005EB1] transition-colors font-heading tracking-tight line-clamp-1">
                          {product.name}
                        </h2>

                        {/* Strength Formulation Pill - Safe max width and truncation to eliminate overflow */}
                        <div className="flex items-center min-h-[26px]">
                          <span
                            className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/80 truncate max-w-full inline-block"
                            title={product.strength}
                          >
                            {product.strength}
                          </span>
                        </div>

                        {/* Generic Molecule Formula - Fixed 2-line height for uniform alignment across tiles */}
                        <p className="text-xs font-semibold text-slate-600 line-clamp-2 leading-relaxed min-h-[36px]">
                          {product.genericName}
                        </p>
                      </div>

                      {/* Primary Indications - Uniform 2-row bounded height */}
                      <div className="space-y-2 mb-5">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                          Primary Indications:
                        </div>
                        <div className="flex flex-wrap gap-1.5 h-14 overflow-hidden content-start">
                          {product.indications.slice(0, 3).map((ind, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold truncate max-w-[240px]"
                              title={ind}
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Pack: {product.packSize}</span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#005EB1] group-hover:translate-x-1 transition-transform">
                        Monograph &amp; Supply Terms <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
              <Pill className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">No formulations match your search</h3>
              <p className="text-sm text-slate-600 mb-6">
                Try searching with a broader keyword (e.g. &ldquo;pain&rdquo;, &ldquo;tablet&rdquo;, or &ldquo;syrup&rdquo;) or clear your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTherapy("all");
                  setSelectedSpecialty("all");
                }}
                className="px-6 py-2.5 rounded-xl bg-[#005EB1] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#00477F] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
