"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/siteData";
import {
  Pill,
  Syringe,
  Droplet,
  Layers,
  Sparkles,
  ShieldCheck,
  Atom,
  Package,
  ZoomIn,
} from "lucide-react";

interface ProductHeroShowcaseProps {
  product: Product;
}

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes("injection")) return <Syringe className="w-4 h-4" />;
  if (f.includes("syrup") || f.includes("suspension")) return <Droplet className="w-4 h-4" />;
  if (f.includes("gel") || f.includes("cream")) return <Layers className="w-4 h-4" />;
  if (f.includes("sachet")) return <Sparkles className="w-4 h-4" />;
  return <Pill className="w-4 h-4" />;
};

export default function ProductHeroShowcase({ product }: ProductHeroShowcaseProps) {
  const [activeView, setActiveView] = useState<"pack" | "molecule">("pack");

  // Get primary chemical entity if available
  const primaryChemical = product.ingredientActions?.find((ia) => ia.chemicalData)?.chemicalData;

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-2xl overflow-hidden flex flex-col justify-between">
      {/* Top Header & Tab Switcher */}
      <div className="p-5 pb-3 border-b-2 border-blue-400/20 bg-[#005EB1] text-white flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white border border-white/20 text-xs font-black uppercase tracking-wider">
            {getDosageIcon(product.dosageForm)}
            <span>{product.dosageForm}</span>
          </span>

          {product.isRx ? (
            <span className="px-3 py-1 rounded-full bg-[#F87901] text-white text-[11px] font-black uppercase tracking-wider shadow">
              Rx Only
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider shadow">
              OTC
            </span>
          )}
        </div>

        {/* View Toggle */}
        {primaryChemical && (
          <div className="flex items-center bg-black/20 p-1 rounded-xl border border-white/15 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveView("pack")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                activeView === "pack"
                  ? "bg-[#F87901] text-white shadow"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Pack View</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("molecule")}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                activeView === "molecule"
                  ? "bg-white text-[#005EB1] shadow"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>Molecular</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Image Stage - Pure white background to match pack artwork seamlessly */}
      <div className="relative h-80 sm:h-96 bg-white flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-blue-50/40 via-transparent to-transparent pointer-events-none" />

        {activeView === "pack" ? (
          product.image ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={product.image}
                alt={`${product.name} pharmaceutical packaging`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4 drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-500">
              <Pill className="w-16 h-16 text-[#005EB1]" />
              <span className="text-sm font-black text-slate-900 mt-3">{product.dosageForm}</span>
            </div>
          )
        ) : primaryChemical ? (
          <div className="relative w-full h-full flex flex-col items-center justify-center animate-fade-in">
            <div className="relative w-64 h-64 bg-white rounded-2xl border-2 border-slate-200 p-3 shadow-inner flex items-center justify-center">
              <Image
                src={primaryChemical.structureUrl}
                alt={`${primaryChemical.name} 2D Molecular Skeletal Structure`}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs font-mono font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-300">
                Formula: {primaryChemical.formula} &bull; MW: {primaryChemical.molecularWeight}
              </span>
            </div>
          </div>
        ) : null}

        {/* Quality Badges */}
        <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-950 font-black text-[11px] shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>WHO-GMP Validated Batch</span>
          </span>
        </div>
      </div>

      {/* Product Title Banner */}
      <div className="p-6 bg-[#005EB1] text-white space-y-2 border-t-2 border-blue-400/30">
        <div className="text-xs font-black uppercase tracking-widest text-orange-200">
          {product.category}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
          {product.name}
        </h1>
        <p className="text-sm font-bold text-blue-100 leading-relaxed">
          {product.genericName}
        </p>
      </div>

      {/* High-Contrast Technical Specifications Matrix with Bold Dark Texts */}
      <div className="p-6 bg-slate-50 border-t-2 border-slate-200 space-y-3">
        <div className="flex items-center justify-between text-xs pb-2.5 border-b-2 border-slate-200">
          <span className="text-slate-700 font-extrabold uppercase tracking-wider">Standard Packaging</span>
          <span className="font-black text-slate-950 text-sm">{product.packSize}</span>
        </div>

        <div className="flex items-center justify-between text-xs pb-2.5 border-b-2 border-slate-200">
          <span className="text-slate-700 font-extrabold uppercase tracking-wider">Dosage Strength</span>
          <span className="font-black text-slate-950 text-sm">{product.strength}</span>
        </div>

        <div className="flex items-center justify-between text-xs pb-2.5 border-b-2 border-slate-200">
          <span className="text-slate-700 font-extrabold uppercase tracking-wider">Quality Standard</span>
          <span className="font-black text-emerald-700 text-sm">WHO-GMP & ISO 9001:2015</span>
        </div>

        <div className="flex items-center justify-between text-xs pb-2.5 border-b-2 border-slate-200">
          <span className="text-slate-700 font-extrabold uppercase tracking-wider">Climatic Zone</span>
          <span className="font-black text-slate-950 text-sm">Zone IVb (Hot & Humid Stability)</span>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <span className="text-slate-700 font-extrabold uppercase tracking-wider">Monograph Compendia</span>
          <span className="font-black text-[#005EB1] text-xs">IP / BP / USP Validated</span>
        </div>
      </div>
    </div>
  );
}
