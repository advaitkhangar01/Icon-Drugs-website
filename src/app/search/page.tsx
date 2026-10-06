"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productsData, therapyAreasData, healthConditionsData } from "@/data/siteData";
import { Search, ArrowRight, Pill, Stethoscope, FileText } from "lucide-react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const trimmed = searchTerm.trim().toLowerCase();

  const matchedProducts = trimmed
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.genericName.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedTherapies = trimmed
    ? therapyAreasData.filter(
        (t) =>
          t.name.toLowerCase().includes(trimmed) ||
          t.shortDesc.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedConditions = trimmed
    ? healthConditionsData.filter(
        (c) =>
          c.title.toLowerCase().includes(trimmed) ||
          c.category.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults = matchedProducts.length + matchedTherapies.length + matchedConditions.length;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <section className="bg-[#00477F] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
              Global Pharmaceutical Search
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search across products, therapeutic specialties, and clinical conditions..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none shadow-xl text-base"
              />
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {trimmed && (
            <div className="text-sm font-semibold text-slate-500 mb-8">
              Found <span className="text-slate-900 font-bold">{totalResults}</span> matches for &ldquo;{searchTerm}&rdquo;
            </div>
          )}

          {!trimmed && (
            <div className="py-12 text-center text-slate-400">
              <p>Type keywords to search our entire pharmaceutical repository.</p>
            </div>
          )}

          {trimmed && totalResults === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-base text-slate-700 font-bold mb-1">No matching results found</p>
              <p className="text-xs text-slate-500">
                Please verify spelling or search by therapeutic class (e.g. Cardiovascular, Antibiotics).
              </p>
            </div>
          )}

          {/* Group 1: Products */}
          {matchedProducts.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Pill className="w-5 h-5 text-[#005EB1]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#005EB1]">
                  Pharmaceutical Products ({matchedProducts.length})
                </h2>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm">
                {matchedProducts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#005EB1]">
                        {p.name} <span className="text-xs text-slate-500 font-normal">({p.strength})</span>
                      </div>
                      <div className="text-xs text-slate-500">{p.genericName} • {p.dosageForm}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005EB1] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Group 2: Therapies */}
          {matchedTherapies.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-5 h-5 text-[#F87901]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#F87901]">
                  Therapeutic Portfolios ({matchedTherapies.length})
                </h2>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm">
                {matchedTherapies.map((th) => (
                  <Link
                    key={th.id}
                    href={`/therapeutic-areas/${th.slug}`}
                    className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#005EB1]">
                        {th.name}
                      </div>
                      <div className="text-xs text-slate-500">{th.shortDesc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005EB1] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Group 3: Conditions */}
          {matchedConditions.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#A285D5]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#A285D5]">
                  Clinical Health Conditions ({matchedConditions.length})
                </h2>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm">
                {matchedConditions.map((c) => (
                  <Link
                    key={c.id}
                    href={`/health/${c.slug}`}
                    className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#005EB1]">
                        {c.title}
                      </div>
                      <div className="text-xs text-slate-500">{c.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005EB1] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
