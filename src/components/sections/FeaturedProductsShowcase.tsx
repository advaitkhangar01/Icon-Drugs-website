"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ArrowRight,
  Pill,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  ChevronRight,
  Filter,
} from "lucide-react";
import { productsData, Product } from "@/data/siteData";
import ProductInquiryModal from "@/components/products/ProductInquiryModal";

const DOSAGE_TABS = [
  { id: "all", label: "All Formulations" },
  { id: "tablets", label: "Tablets" },
  { id: "capsules", label: "Capsules" },
  { id: "syrups", label: "Syrups & Suspensions" },
  { id: "injectables", label: "Injections & Specialty" },
] as const;

export default function FeaturedProductsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [modalTerritory, setModalTerritory] = useState("");

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      // Tab filter
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "tablets"
          ? p.dosageForm.toLowerCase().includes("tablet")
          : activeTab === "capsules"
          ? p.dosageForm.toLowerCase().includes("capsule")
          : activeTab === "syrups"
          ? p.dosageForm.toLowerCase().includes("syrup") ||
            p.dosageForm.toLowerCase().includes("suspension") ||
            p.dosageForm.toLowerCase().includes("liquid")
          : p.dosageForm.toLowerCase().includes("injection") ||
            p.dosageForm.toLowerCase().includes("sachet") ||
            p.dosageForm.toLowerCase().includes("cream") ||
            p.dosageForm.toLowerCase().includes("gel");

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.genericName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.indications.some((ind) => ind.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="featured-products" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#005EB1] text-xs font-black tracking-wider uppercase">
              <Pill className="w-3.5 h-3.5" />
              <span>Bioequivalent Formulations Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
              Featured Formulations & <span className="text-[#005EB1]">Commercial Portfolio</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              WHO-GMP compliant solid oral and liquid preparations formulated with validated active pharmaceutical ingredients (APIs) for superior therapeutic bioequivalence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border-2 border-slate-300 hover:border-[#005EB1] text-slate-900 hover:text-[#005EB1] font-bold text-sm shadow-sm transition-all group"
            >
              <span>Explore All 25+ Formulations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Tab Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {DOSAGE_TABS.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? "bg-[#005EB1] text-white shadow-md shadow-blue-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Molecule Search */}
          <div className="relative min-w-[280px] lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search molecule, brand or indication..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005EB1] focus:border-transparent bg-slate-50 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching formulations found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your search query or reset the dosage form filter to discover available medicines.
            </p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#005EB1] text-white font-bold text-xs hover:bg-[#00477F] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.slice(0, 6).map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Top Badge & Pack preview container */}
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200/80 p-6 flex items-center justify-center h-52 overflow-hidden border-b border-slate-100">
                    {/* Dosage & Rx Badges */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-black uppercase tracking-wider text-slate-800 shadow-xs border border-slate-200">
                        {product.dosageForm}
                      </span>
                      {product.isRx && (
                        <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black tracking-widest">
                          Rx
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold flex items-center gap-1 shadow-xs">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>DCGI Verified</span>
                      </span>
                    </div>

                    {/* Pack Shot or Visual Presentation */}
                    {product.image ? (
                      <div className="relative w-44 h-40 transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-lg"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-4">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 text-[#005EB1] flex items-center justify-center mb-2 shadow-inner">
                          <Pill className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Blister / Alu-Alu Pack
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Therapy Category */}
                      <div className="text-xs font-black uppercase tracking-wider text-[#005EB1] mb-1">
                        {product.category}
                      </div>

                      {/* Brand Name */}
                      <h3 className="text-xl font-black text-slate-950 font-heading group-hover:text-[#005EB1] transition-colors leading-snug">
                        {product.name}
                      </h3>

                      {/* Generic Molecule Formula */}
                      <p className="text-xs font-bold text-slate-600 mt-1 line-clamp-1">
                        {product.genericName}
                      </p>

                      {/* Indications Pills */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.indications.slice(0, 3).map((ind, i) => (
                          <span
                            key={i}
                            className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                          >
                            {ind}
                          </span>
                        ))}
                        {product.indications.length > 3 && (
                          <span className="inline-block px-1.5 py-1 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold">
                            +{product.indications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Packaging & Commercial Bar */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <div>
                        <span className="text-slate-400 block text-[10px] font-bold uppercase">Packaging:</span>
                        <span className="font-bold text-slate-800">{product.packSize}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 block text-[10px] font-bold uppercase">Distributor MOQ:</span>
                        <span className="font-bold text-slate-800">
                          {product.commercialData?.moqFranchise || "1 Master Shipper"}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-600" />
                        <span>Monograph</span>
                      </Link>

                      <button
                        onClick={() => {
                          setSelectedProductForModal(product);
                          setModalTerritory("");
                        }}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <Building2 className="w-3.5 h-3.5 text-blue-200" />
                        <span>Territory Enquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View all banner card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#F87901] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                Looking for third-party contract manufacturing or custom batch sizes?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                We manufacture under private labels with customized blister geometries, ALU-ALU foils, and full analytical batch dossiers.
              </p>
            </div>
          </div>
          <Link
            href="/business-enquiry"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F87901] hover:bg-[#d96800] text-white font-bold text-sm shadow-md transition-all shrink-0"
          >
            <span>Request Contract Mfg Quote</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Inquiry Modal */}
      {selectedProductForModal && (
        <ProductInquiryModal
          isOpen={!!selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          product={selectedProductForModal}
          initialIntent="franchise"
          initialTerritory={modalTerritory}
        />
      )}
    </section>
  );
}
