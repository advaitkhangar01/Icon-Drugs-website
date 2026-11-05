"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/siteData";
import { Sparkles, ArrowRight, Layers, Pill, Droplet, Syringe, Plus, MessageSquare } from "lucide-react";

interface TherapeuticCrossSellProps {
  currentProduct: Product;
  complementaryProducts: Product[];
  onOpenModal: (intent: "franchise" | "tender") => void;
}

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes("injection")) return <Syringe className="w-3.5 h-3.5" />;
  if (f.includes("syrup") || f.includes("suspension")) return <Droplet className="w-3.5 h-3.5" />;
  if (f.includes("gel") || f.includes("cream")) return <Layers className="w-3.5 h-3.5" />;
  if (f.includes("sachet")) return <Sparkles className="w-3.5 h-3.5" />;
  return <Pill className="w-3.5 h-3.5" />;
};

export default function TherapeuticCrossSell({
  currentProduct,
  complementaryProducts,
  onOpenModal,
}: TherapeuticCrossSellProps) {
  if (!complementaryProducts || complementaryProducts.length === 0) return null;

  const allBasketNames = [currentProduct.name, ...complementaryProducts.map((p) => p.name)].join(
    ", "
  );

  const whatsAppBasketUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Icon Drugs, I am interested in procuring the complete therapeutic basket: ${allBasketNames}. Please provide consolidated pricing and commercial franchise terms.`
  )}`;

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#005EB1] mb-1">
            <Sparkles className="w-4 h-4 text-[#F87901]" />
            <span>Therapeutic Synergies & Formulary Basket</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-950">
            Frequently Prescribed & Stocked Together
          </h3>
          <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
            Clinically aligned formulations commonly co-prescribed with{" "}
            <strong className="text-slate-950 underline decoration-[#005EB1] decoration-2">{currentProduct.name}</strong> to improve patient outcomes and expand distributor portfolio basket size.
          </p>
        </div>

        <a
          href={whatsAppBasketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-900/30 transition-all shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Inquire Complete Portfolio Basket</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {complementaryProducts.map((comp) => (
          <div
            key={comp.id}
            className="group bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#005EB1] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Mini Image Stage - 3:2 full box fit with pure white background */}
              <div className="relative w-full aspect-[3/2] bg-white flex items-center justify-center border-b-2 border-slate-100 overflow-hidden">
                {comp.image ? (
                  <Image
                    src={comp.image}
                    alt={`${comp.name} pack shot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Pill className="w-10 h-10 text-[#005EB1]" />
                )}

                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#005EB1] text-white text-[10px] font-black uppercase tracking-wider shadow">
                    {getDosageIcon(comp.dosageForm)}
                    <span>{comp.dosageForm.replace("&", "/")}</span>
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 text-[#005EB1] shadow-sm">
                    Synergistic
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="font-black text-lg text-slate-950 group-hover:text-[#005EB1] transition-colors font-heading leading-snug">
                  {comp.name}
                </h4>
                <p className="text-xs text-slate-950 font-bold line-clamp-2">
                  {comp.genericName}
                </p>

                <div className="text-[11px] font-mono font-bold text-slate-950 bg-slate-100 p-2 rounded-xl border border-slate-200">
                  <span className="font-black text-slate-700">Pack:</span> {comp.packSize}
                </div>

                <p className="text-[11px] text-[#D45E00] font-bold italic line-clamp-1">
                  &ldquo;{comp.tagline}&rdquo;
                </p>
              </div>
            </div>

            <div className="p-5 pt-3 border-t-2 border-slate-100 flex items-center justify-between">
              <Link
                href={`/products/${comp.slug}`}
                className="text-xs font-black text-[#005EB1] hover:text-[#F87901] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenModal("franchise")}
                className="inline-flex items-center gap-1 text-xs font-black text-slate-950 hover:text-[#F87901] transition-colors bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg border border-slate-300"
                title="Add to quotation inquiry"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Inquire</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
