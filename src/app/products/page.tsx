"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productsData, therapyAreasData } from "@/data/siteData";
import { Search, Filter, ArrowRight, Pill, ChevronRight } from "lucide-react";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTherapy, setSelectedTherapy] = useState("all");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTherapy =
      selectedTherapy === "all" || product.therapySlug === selectedTherapy;

    return matchesSearch && matchesTherapy;
  });

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Products & Formulations</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              Pharmaceutical Formulations Directory
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Explore our validated catalog of prescription and hospital medicines manufactured with strict batch uniformity.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by brand name or generic compound..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
              />
            </div>

            {/* Category / Therapy Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Filter className="w-4 h-4 text-slate-500 hidden sm:block" />
              <select
                value={selectedTherapy}
                onChange={(e) => setSelectedTherapy(e.target.value)}
                className="w-full md:w-auto px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:border-[#005EB1]"
              >
                <option value="all">All Therapeutic Areas</option>
                {therapyAreasData.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-semibold text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> formulations
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#005EB1] text-white text-[11px] font-bold">
                        {product.dosageForm}
                      </span>
                      {product.isRx && (
                        <span className="px-2 py-1 rounded bg-[#F87901] text-white text-[11px] font-bold">
                          Rx Only
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#005EB1] mb-1">
                        {product.category}
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-1">
                        {product.name}
                      </h2>
                      <p className="text-xs text-slate-500 italic mb-4">
                        {product.genericName}
                      </p>
                      <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg mb-4">
                        <span className="font-semibold">Strength:</span> {product.strength} •{" "}
                        <span className="font-semibold">Pack:</span> {product.packSize}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005EB1] group-hover:text-[#F87901] transition-colors">
                      <span>View Monograph & Leaflet</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">
              <Pill className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">No formulations match your filter</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                Try clearing your search query or choosing another therapeutic category from the dropdown above.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTherapy("all");
                }}
                className="px-5 py-2.5 rounded-lg bg-[#005EB1] text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
