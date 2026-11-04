"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Pill, Stethoscope, FileText } from "lucide-react";
import { productsData, therapyAreasData, healthConditionsData } from "@/data/siteData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-2 sm:pt-20 px-2 sm:px-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94dvh] sm:max-h-[85vh]">
        {/* Brand Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4 shrink-0">
              <Image src="/icon-brand-mark.png" alt="Icon Drugs" fill className="object-contain" />
            </div>
            <span className="font-bold text-slate-700 truncate max-w-[220px] sm:max-w-none">
              Icon Drugs Master Formulary Search
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[11px] font-mono text-slate-500 hover:text-slate-900 sm:hidden px-2 py-0.5 rounded bg-slate-200"
          >
            Close
          </button>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">ESC to close</span>
        </div>

        {/* Search Input Bar */}
        <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 bg-slate-50/50 shrink-0">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#005EB1] mr-2.5 sm:mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medications, therapy fields, or health conditions..."
            className="w-full bg-transparent text-base sm:text-lg text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 overscroll-contain pb-safe">
          {!trimmed && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Suggested Quick Inquiries
              </p>
              <div className="flex flex-wrap gap-2">
                {["Neurology", "Pregabalin", "APAR", "GERD", "Allergy", "Anti-Infectives", "Cough", "Calcium"].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#005EB1]/10 text-slate-700 hover:text-[#005EB1] text-xs font-semibold transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {trimmed && totalResults === 0 && (
            <div className="text-center py-12">
              <p className="text-base text-slate-600 mb-2">No matching formulations or topics found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-slate-400">
                Try searching by chemical generic name (e.g., Telmisartan) or broad medical category.
              </p>
            </div>
          )}

          {/* Matched Products */}
          {matchedProducts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-4 h-4 text-[#005EB1]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#005EB1]">
                  Pharmaceutical Products ({matchedProducts.length})
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {matchedProducts.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/products/${prod.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors">
                        {prod.name} <span className="text-xs font-normal text-slate-500">({prod.strength})</span>
                      </div>
                      <div className="text-xs text-slate-500">{prod.genericName} • {prod.dosageForm}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005EB1] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Therapies */}
          {matchedTherapies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Stethoscope className="w-4 h-4 text-[#F87901]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#F87901]">
                  Therapeutic Categories ({matchedTherapies.length})
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {matchedTherapies.map((th) => (
                  <Link
                    key={th.id}
                    href={`/therapeutic-areas/${th.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors group"
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

          {/* Matched Conditions */}
          {matchedConditions.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-[#A285D5]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A285D5]">
                  Health & Clinical Conditions ({matchedConditions.length})
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {matchedConditions.map((cond) => (
                  <Link
                    key={cond.id}
                    href={`/health/${cond.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#005EB1]">
                        {cond.title}
                      </div>
                      <div className="text-xs text-slate-500">{cond.category}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005EB1] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Press ESC to dismiss</span>
          <Link
            href="/search"
            onClick={onClose}
            className="font-semibold text-[#005EB1] hover:underline"
          >
            Go to full search page →
          </Link>
        </div>
      </div>
    </div>
  );
}
