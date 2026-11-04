"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  MessageSquare,
  Briefcase,
  Building2,
  Stethoscope,
  ShieldCheck,
  Package,
  Truck,
  FileCheck2,
  Scale,
  Download,
} from "lucide-react";
import { Product, CommercialData } from "@/data/siteData";
import ProductInquiryModal from "./ProductInquiryModal";
import DistrictMonopolyChecker from "./DistrictMonopolyChecker";
import ProductConversionBar from "./ProductConversionBar";
import TherapeuticCrossSell from "./TherapeuticCrossSell";

interface ProductDetailContextType {
  openModal: (intent: "franchise" | "tender" | "sample", territory?: string) => void;
  product: Product;
}

const ProductDetailContext = createContext<ProductDetailContextType | null>(null);

export function useProductDetail() {
  const context = useContext(ProductDetailContext);
  if (!context) {
    throw new Error("useProductDetail must be used within a ProductDetailProvider");
  }
  return context;
}

interface ProductDetailProviderProps {
  product: Product;
  commercialData: CommercialData;
  complementaryProducts: Product[];
  children: ReactNode;
}

export function ProductDetailProvider({
  product,
  commercialData,
  complementaryProducts,
  children,
}: ProductDetailProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIntent, setModalIntent] = useState<"franchise" | "tender" | "sample">("franchise");
  const [modalTerritory, setModalTerritory] = useState("");

  const openModal = (intent: "franchise" | "tender" | "sample", territory: string = "") => {
    setModalIntent(intent);
    setModalTerritory(territory);
    setModalOpen(true);
  };

  return (
    <ProductDetailContext.Provider value={{ openModal, product }}>
      {children}

      {/* B2B Commercial & Logistics Specifications Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#005EB1] mb-1">
                <Truck className="w-4 h-4" />
                <span>Procurement & Logistics Specifications</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-950">
                B2B Commercial & Shipping Metrics
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 border-2 border-emerald-300 text-xs font-black flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>WHO-GMP Validated Batch</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box / Master Shipper */}
            <div className="bg-slate-100 border-2 border-slate-200/90 rounded-2xl p-5 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Package className="w-4 h-4 text-[#005EB1]" />
                <span>Master Shipper Packing</span>
              </div>
              <div className="text-base font-black text-slate-950">
                {commercialData.masterShipperPacking}
              </div>
              <p className="text-xs text-slate-800 font-bold">
                Moisture-sealed 5-ply export corrugation
              </p>
            </div>

            {/* MOQ Franchise */}
            <div className="bg-slate-100 border-2 border-slate-200/90 rounded-2xl p-5 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#F87901]" />
                <span>Franchise MOQ</span>
              </div>
              <div className="text-base font-black text-slate-950">
                {commercialData.moqFranchise}
              </div>
              <p className="text-xs text-slate-800 font-bold">
                Includes visual aids & promotional inputs
              </p>
            </div>

            {/* Third-Party MOQ */}
            <div className="bg-slate-100 border-2 border-slate-200/90 rounded-2xl p-5 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>Third-Party / Contract MOQ</span>
              </div>
              <div className="text-base font-black text-slate-950">
                {commercialData.moqThirdParty}
              </div>
              <p className="text-xs text-slate-800 font-bold">
                Private label & institutional supply
              </p>
            </div>

            {/* Tax & Tariff */}
            <div className="bg-slate-100 border-2 border-slate-200/90 rounded-2xl p-5 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-slate-950 text-xs font-black uppercase tracking-wider">
                <Scale className="w-4 h-4 text-purple-700" />
                <span>HSN Code & GST Slab</span>
              </div>
              <div className="text-base font-black text-slate-950">
                HSN {commercialData.hsnCode} ({commercialData.gstRate} GST)
              </div>
              <p className="text-xs text-slate-800 font-bold">
                Standard pharmaceutical commercial tariff
              </p>
            </div>
          </div>

          {/* Compliance & Regulatory Documentation Bar */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-black text-slate-950 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#005EB1]" />
                <span>Regulatory Dossier & Batch Certification Provided Upon Order</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-900 font-bold">
                Certificate of Analysis (COA), Stability Study Reports (Zone IVb), Finished Product Specs (FPS), and Material Safety Data Sheet (MSDS).
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openModal("tender")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#005EB1] text-white hover:bg-[#00477F] text-xs font-black uppercase tracking-wider shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Request Sample COA</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Prescribed / Stocked Together Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <TherapeuticCrossSell
          currentProduct={product}
          complementaryProducts={complementaryProducts}
          onOpenModal={openModal}
        />
      </section>

      {/* Sticky Bottom Conversion Bar */}
      <ProductConversionBar product={product} onOpenModal={openModal} />

      {/* Conversion Inquiry Modal */}
      <ProductInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
        initialIntent={modalIntent}
        initialTerritory={modalTerritory}
      />
    </ProductDetailContext.Provider>
  );
}

export function ProductDetailHeroActions({ product }: { product: Product }) {
  const { openModal } = useProductDetail();

  const whatsAppDirectUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi Icon Drugs Commercial Team, I am interested in ${product.name} (${product.dosageForm}, ${product.packSize}) for PCD Franchise / Wholesale Tender. Please provide price list and commercial terms.`
  )}`;

  return (
    <div className="space-y-6 pt-2">
      {/* District Monopoly Checker */}
      <DistrictMonopolyChecker product={product} onOpenModal={openModal} />

      {/* Primary Action Buttons Bar - Solid Opaque Command Box */}
      <div className="bg-[#005EB1] text-white p-6 rounded-3xl shadow-2xl border-2 border-blue-400/30 space-y-4">
        <div className="flex items-center justify-between text-xs text-blue-100 pb-3 border-b-2 border-white/20">
          <span className="font-black uppercase tracking-widest text-orange-200">
            Commercial Procurement Desk
          </span>
          <span className="text-emerald-300 font-black flex items-center gap-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
            Distributor Allocations Open
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* 1-Click WhatsApp Direct Quote */}
          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg shadow-emerald-950/20 transition-all group"
          >
            <MessageSquare className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
            <span>Instant WhatsApp Quote</span>
          </a>

          {/* PCD Franchise & Wholesale Inquiry Button */}
          <button
            type="button"
            onClick={() => openModal("franchise")}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#F87901] hover:bg-[#e06c00] text-white font-black text-sm shadow-lg shadow-[#F87901]/30 transition-all"
          >
            <Briefcase className="w-4 h-4" />
            <span>PCD Franchise Inquiry</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Institutional Tender Quotation */}
          <button
            type="button"
            onClick={() => openModal("tender")}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-black text-xs border border-white/25 transition-colors"
          >
            <Building2 className="w-4 h-4 text-blue-100" />
            <span>Institutional / Tender Supply</span>
          </button>

          {/* Doctor Clinical Evaluation Sample */}
          <button
            type="button"
            onClick={() => openModal("sample")}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-black text-xs border border-white/25 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-emerald-200" />
            <span>Request Doctor Sample Kit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
