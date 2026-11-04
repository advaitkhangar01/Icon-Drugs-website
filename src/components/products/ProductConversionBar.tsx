"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, FileText, ArrowRight, ShieldCheck, Pill } from "lucide-react";
import { Product } from "@/data/siteData";

interface ProductConversionBarProps {
  product: Product;
  onOpenModal: (intent: "franchise" | "tender" | "sample") => void;
}

export default function ProductConversionBar({
  product,
  onOpenModal,
}: ProductConversionBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const whatsAppUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Icon Drugs, I would like to inquire about wholesale/PCD franchise pricing for ${product.name} (${product.dosageForm}, ${product.packSize}). Please share price list and commercial terms.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-slate-300 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] py-2.5 sm:py-3 px-3 sm:px-6 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all animate-fade-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Product Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#005EB1] text-white flex items-center justify-center shrink-0 hidden sm:flex shadow-sm">
            <Pill className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-950 text-sm sm:text-base truncate font-heading">
                {product.name}
              </span>
              <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-950 text-[10px] font-black border border-slate-300">
                {product.dosageForm}
              </span>
              <span className="hidden lg:inline-flex items-center gap-1 text-[11px] text-emerald-700 font-black">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>WHO-GMP</span>
              </span>
            </div>
            <p className="text-xs text-slate-900 font-bold truncate hidden sm:block">
              {product.genericName} &bull; {product.packSize}
            </p>
          </div>
        </div>

        {/* Right: Conversion Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition-all"
            title="Instant WhatsApp Inquiry"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>WhatsApp<span className="hidden sm:inline"> Quote</span></span>
          </a>

          <button
            type="button"
            onClick={() => onOpenModal("franchise")}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 min-h-[44px] rounded-xl bg-[#F87901] hover:bg-[#e06c00] text-white font-black text-xs sm:text-sm shadow-md shadow-[#F87901]/25 transition-all"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline" />
          </button>

          <button
            type="button"
            onClick={() => onOpenModal("sample")}
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl border-2 border-slate-300 hover:bg-slate-100 text-slate-950 font-black text-xs transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#005EB1]" />
            <span>Doctor Sample</span>
          </button>
        </div>
      </div>
    </div>
  );
}
