import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, FileDown, Stethoscope, Search, FileText, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Professionals Portal | Icon Drugs",
  description: "Dedicated portal for physicians, pharmacists, hospital formularies, and medical procurement leads.",
};

export default function HCPPortalPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F87901] text-white text-xs font-bold uppercase tracking-wider mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>For Registered Healthcare Professionals</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              Clinical Formularies, Dossiers & Pharmacovigilance
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Direct access to prescribing data, batch stability summaries, hospital supply coordination, and scientific medical affairs.
            </p>
          </div>
        </section>

        {/* Quick Links Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/products"
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:border-[#005EB1] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center mb-4 group-hover:bg-[#005EB1] group-hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-1">
                Monograph & Leaflet Directory
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Look up indications, recommended dosages, and clinical contraindications.
              </p>
            </Link>

            <Link
              href="/business-enquiry"
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:border-[#F87901] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F87901]/10 text-[#F87901] flex items-center justify-center mb-4 group-hover:bg-[#F87901] group-hover:text-white transition-colors">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-[#F87901] transition-colors mb-1">
                Request Medical Representative
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Schedule a clinical consultation or product sample evaluation for your department.
              </p>
            </Link>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 group">
              <div className="w-10 h-10 rounded-xl bg-[#A285D5]/10 text-[#A285D5] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">
                Adverse Event Reporting
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                24/7 dedicated pharmacovigilance logging for rapid post-marketing surveillance.
              </p>
            </div>
          </div>
        </section>

        {/* Resources & Formularies Downloads */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-8">
            Physician Leaflets & Formulary Documents
          </h2>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-sm">
            {[
              {
                title: "Comprehensive 2026 Icon Drugs Product Formulary & Therapeutic Index",
                size: "4.8 MB PDF",
                category: "Hospital Formulary",
              },
              {
                title: "WHO-GMP Facility Compliance Dossier & Analytical Certification",
                size: "2.1 MB PDF",
                category: "Regulatory Documentation",
              },
              {
                title: "Cardiovascular Formulations — Bioequivalence & Pharmacokinetic Summary",
                size: "3.4 MB PDF",
                category: "Clinical Data",
              },
              {
                title: "Antimicrobial Stewardship & Susceptibility Monograph",
                size: "1.9 MB PDF",
                category: "Infectious Disease",
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[#005EB1] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F87901] mb-1">
                      {doc.category}
                    </div>
                    <div className="font-bold text-slate-900 text-base">{doc.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{doc.size}</div>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-[#005EB1] hover:text-white text-slate-700 text-xs font-bold transition-colors shrink-0"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Document</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
