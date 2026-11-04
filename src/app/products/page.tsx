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

// Helper to return dosage form icon
const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes("injection")) return <Syringe className="w-3.5 h-3.5" />;
  if (f.includes("syrup") || f.includes("suspension")) return <Droplet className="w-3.5 h-3.5" />;
  if (f.includes("gel") || f.includes("cream")) return <Layers className="w-3.5 h-3.5" />;
  if (f.includes("sachet")) return <Sparkles className="w-3.5 h-3.5" />;
  return <Pill className="w-3.5 h-3.5" />;
};

export default function ProductsPage() {
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
      <main id="main-content" className="flex-1 pt-24 pb-20 bg-slate-100/70">
        {/* Banner */}
        <section className="bg-gradient-to-br from-[#002242] via-[#003B6A] to-[#005EB1] text-white py-16 sm:py-20 relative overflow-hidden border-b-4 border-[#F87901]">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F87901] mb-3">
              <Link href="/" className="hover:underline text-white font-bold">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-white font-extrabold">Products & Formulations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading mb-4 max-w-4xl text-white">
              Pharmaceutical Formulations Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-100 max-w-3xl leading-relaxed font-semibold">
              Explore Icon Drugs&apos; authenticated portfolio of 25 core therapeutic formulations. Manufactured strictly to WHO-GMP standards with verified clinical purity, bioequivalence, and reliable supply continuity.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar - High Opacity Solid Command Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-300 p-6 sm:p-7 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-slate-700 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by brand name, active composition (e.g. Pregabalin), or therapeutic indication..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-50 focus:bg-white text-base sm:text-sm font-bold text-slate-950 placeholder:text-slate-500 border-2 border-slate-300 focus:border-[#005EB1] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Therapeutic Area Dropdown */}
              <div className="flex items-center gap-2 sm:w-auto">
                <Filter className="w-4 h-4 text-slate-800 shrink-0 hidden sm:block" />
                <select
                  value={selectedTherapy}
                  onChange={(e) => {
                    setSelectedTherapy(e.target.value);
                    if (e.target.value !== "all") setSelectedSpecialty("all");
                  }}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-base sm:text-sm font-extrabold text-slate-950 border-2 border-slate-300 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all shadow-sm cursor-pointer"
                >
                  <option value="all">All Therapeutic Areas (10)</option>
                  {therapyAreasData.map((t) => (
                    <option key={t.slug} value={t.slug} className="text-slate-900 font-bold">
                      {t.name} ({t.productCount})
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Specialty Target Dropdown */}
              <div className="flex items-center gap-2 sm:w-auto">
                <Stethoscope className="w-4 h-4 text-[#005EB1] shrink-0 hidden sm:block" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => {
                    setSelectedSpecialty(e.target.value);
                    if (e.target.value !== "all") setSelectedTherapy("all");
                  }}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-base sm:text-sm font-extrabold text-slate-950 border-2 border-slate-300 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all shadow-sm cursor-pointer"
                >
                  <option value="all">Filter by Medical Specialty</option>
                  {doctorSpecialtiesData.map((s) => (
                    <option key={s.slug} value={s.slug} className="text-slate-900 font-bold">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Filter Tags with High Opacity Solid Pills */}
            <div className="flex items-center gap-2.5 pt-3 border-t-2 border-slate-200 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-950 font-black uppercase tracking-wider shrink-0">Quick Filter:</span>
              <button
                type="button"
                onClick={() => { setSelectedTherapy("neurology-neuropathic-pain"); setSelectedSpecialty("all"); }}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all whitespace-nowrap shadow-xs ${
                  selectedTherapy === "neurology-neuropathic-pain"
                    ? "bg-slate-950 text-white border-2 border-slate-950 shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-950 border-2 border-slate-200"
                }`}
              >
                Neurology & Pain
              </button>
              <button
                type="button"
                onClick={() => { setSelectedTherapy("orthopedics-musculoskeletal"); setSelectedSpecialty("all"); }}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all whitespace-nowrap shadow-xs ${
                  selectedTherapy === "orthopedics-musculoskeletal"
                    ? "bg-slate-950 text-white border-2 border-slate-950 shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-950 border-2 border-slate-200"
                }`}
              >
                Orthopedics
              </button>
              <button
                type="button"
                onClick={() => { setSelectedTherapy("gastroenterology"); setSelectedSpecialty("all"); }}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all whitespace-nowrap shadow-xs ${
                  selectedTherapy === "gastroenterology"
                    ? "bg-slate-950 text-white border-2 border-slate-950 shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-950 border-2 border-slate-200"
                }`}
              >
                Gastroenterology
              </button>
              <button
                type="button"
                onClick={() => { setSelectedTherapy("respiratory-pulmonology"); setSelectedSpecialty("all"); }}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all whitespace-nowrap shadow-xs ${
                  selectedTherapy === "respiratory-pulmonology"
                    ? "bg-slate-950 text-white border-2 border-slate-950 shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-950 border-2 border-slate-200"
                }`}
              >
                Respiratory
              </button>
              <button
                type="button"
                onClick={() => { setSelectedTherapy("all"); setSelectedSpecialty("all"); setSearchTerm(""); }}
                className="text-slate-950 font-black hover:text-[#005EB1] underline ml-auto shrink-0 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-slate-300">
            <span className="text-sm font-extrabold text-slate-950">
              Showing <span className="text-[#005EB1] font-black text-base">{filteredProducts.length}</span> validated pharmaceutical formulations
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-950 bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>WHO-GMP Validated & Stability Tested</span>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProducts.map((product) => {
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group bg-white rounded-3xl border-2 border-slate-200/90 hover:border-[#005EB1] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Section: Dedicated Illuminated Product Image Stage */}
                    <div className="relative h-60 sm:h-64 bg-gradient-to-b from-slate-100 via-slate-50 to-white p-5 flex items-center justify-center overflow-hidden border-b-2 border-slate-100">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent pointer-events-none" />

                      {product.image ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={`${product.name} packaging packaging box`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-md"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-slate-500">
                          <Pill className="w-12 h-12 text-[#005EB1]" />
                          <span className="text-xs font-black text-slate-800 mt-2">{product.dosageForm}</span>
                        </div>
                      )}

                      {/* Floating Badges */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                          {getDosageIcon(product.dosageForm)}
                          <span>{product.dosageForm}</span>
                        </span>
                      </div>

                      <div className="absolute top-3.5 right-3.5 z-10">
                        {product.isRx ? (
                          <span className="px-3 py-1 rounded-full bg-[#F87901] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                            Rx Only
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                            OTC
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-2.5 right-3.5 z-10">
                        <span className="px-2.5 py-0.5 rounded-md bg-white text-slate-950 font-black text-[10px] tracking-wider uppercase border border-slate-300 shadow-xs">
                          WHO-GMP
                        </span>
                      </div>
                    </div>

                    {/* Middle Section: Bold Clinical Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div>
                          <div className="text-[11px] font-black uppercase tracking-wider text-[#005EB1] mb-1">
                            {product.category}
                          </div>

                          <h2 className="text-2xl font-black text-slate-950 group-hover:text-[#005EB1] transition-colors leading-snug font-heading">
                            {product.name}
                          </h2>

                          {/* Bold Dark Clinical Tagline Quote */}
                          <p className="text-xs font-bold text-[#D45E00] mt-1.5 italic line-clamp-1">
                            &ldquo;{product.tagline}&rdquo;
                          </p>
                        </div>

                        {/* Active Formula Box */}
                        <div className="bg-slate-100 rounded-2xl p-3.5 border-2 border-slate-200/90">
                          <div className="text-[10px] font-black uppercase tracking-wider text-slate-950 mb-1 flex items-center justify-between">
                            <span>Active Composition</span>
                            <span className="text-[#005EB1] font-bold">Standard IP / BP</span>
                          </div>
                          <p className="text-xs font-bold text-slate-950 leading-relaxed line-clamp-2">
                            {product.genericName}
                          </p>
                        </div>

                        {/* Clinical Highlights Chips */}
                        {product.clinicalHighlights && product.clinicalHighlights.length > 0 && (
                          <div className="space-y-1.5">
                            {product.clinicalHighlights.slice(0, 2).map((h, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-900">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Top Indications Tags */}
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-wider text-slate-950 mb-1.5">
                            Key Indications:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {product.indications.slice(0, 3).map((ind, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-300 text-xs font-bold text-slate-900"
                              >
                                {ind}
                              </span>
                            ))}
                            {product.indications.length > 3 && (
                              <span className="px-2 py-1 rounded-lg bg-slate-100 border border-slate-300 text-xs font-extrabold text-slate-700">
                                +{product.indications.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer with High-Conversion Action Button */}
                      <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between gap-3">
                        <span className="text-xs font-black text-slate-950 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
                          {product.packSize.split(" ")[0]} {product.packSize.split(" ")[1]}
                        </span>

                        <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 group-hover:bg-[#005EB1] text-white font-extrabold text-xs shadow-md transition-all">
                          <span>View Monograph</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white border-2 border-slate-300 rounded-3xl p-16 text-center max-w-lg mx-auto shadow-xl">
              <Pill className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h3 className="text-xl font-black text-slate-950 mb-2 font-heading">No formulations match your query</h3>
              <p className="text-sm font-semibold text-slate-800 mb-6 leading-relaxed">
                Try searching with a broader keyword (e.g. &ldquo;pain&rdquo;, &ldquo;cough&rdquo;, or &ldquo;tablet&rdquo;) or reset your filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTherapy("all");
                  setSelectedSpecialty("all");
                }}
                className="px-6 py-3 rounded-xl bg-slate-950 text-white text-xs font-black uppercase tracking-wider hover:bg-[#005EB1] transition-colors shadow-md"
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
