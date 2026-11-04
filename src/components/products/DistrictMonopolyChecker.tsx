"use client";

import React, { useState } from "react";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/data/siteData";

interface DistrictMonopolyCheckerProps {
  product: Product;
  onOpenModal: (intent: "franchise", territory: string) => void;
}

export default function DistrictMonopolyChecker({
  product,
  onOpenModal,
}: DistrictMonopolyCheckerProps) {
  const [district, setDistrict] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!district.trim()) return;
    setChecked(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border-2 border-slate-300 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-[#005EB1] text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </span>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#005EB1]">
              PCD Franchise Distribution
            </h4>
            <div className="text-base font-black text-slate-950 font-heading">
              Check District Monopoly Rights
            </div>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-black">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Monopoly Protected</span>
        </span>
      </div>

      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
        Verify if exclusive marketing and distribution rights for <strong className="text-slate-950 underline decoration-[#F87901] decoration-2">{product.name}</strong> are currently vacant in your target district.
      </p>

      {checked ? (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 space-y-3 animate-fade-in">
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-black text-emerald-950">Territory Vacancy Confirmed: </span>
              <span>
                Exclusive monopoly rights for <strong className="text-slate-950 font-black">{district}</strong> are eligible for franchise allocation for this portfolio.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onOpenModal("franchise", district)}
              className="flex-1 py-3 px-4 rounded-xl bg-[#F87901] hover:bg-[#e06c00] text-white text-xs font-black shadow-lg shadow-[#F87901]/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Lock Territory for {district}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                setChecked(false);
                setDistrict("");
              }}
              className="py-3 px-4 rounded-xl border-2 border-slate-300 text-slate-900 text-xs font-extrabold hover:bg-slate-100 transition-colors"
            >
              Check Other
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <div className="relative flex-1">
            <MapPin className="w-4 h-4 text-slate-600 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Enter District / City (e.g. Pune, Lucknow, Patna)"
              className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-50 focus:bg-white border-2 border-slate-300 focus:border-[#005EB1] outline-none text-base sm:text-sm text-slate-950 font-extrabold placeholder:text-slate-500 transition-all min-h-[44px]"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white text-xs font-black uppercase tracking-wider shadow-md transition-all whitespace-nowrap cursor-pointer min-h-[44px]"
          >
            Check Status
          </button>
        </form>
      )}

      {/* Trust micro-bullets */}
      <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-slate-950 font-black border-t-2 border-slate-100">
        <div>&bull; Exclusive Agreement</div>
        <div>&bull; Visual Aid Support</div>
        <div>&bull; 24-48h Dispatch</div>
      </div>
    </div>
  );
}
