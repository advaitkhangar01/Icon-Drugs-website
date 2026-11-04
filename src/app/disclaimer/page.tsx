import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Medical & Regulatory Disclaimer | Pharmacovigilance Notice",
  description: "Official medical and regulatory disclaimer for Icon Drugs Private Limited. Information on prescription status, pharmacovigilance, and CDSCO compliance.",
  alternates: {
    canonical: "https://icondrugs.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <section className="bg-[#00477F] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Medical & Regulatory Disclaimer
            </h1>
            <p className="text-slate-300 mt-2 text-sm">Regulatory Notice</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-amber-900 mb-1">
                Not Medical Advice
              </h2>
              <p className="text-sm text-amber-800">
                The information provided on this website is for general informational and educational purposes only. Nothing contained here is intended to be used as medical advice, clinical diagnosis, or therapeutic instruction.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Prescription Regimen (Rx) Notice</h2>
            <p>
              Medicines listed on this site labeled as Rx or Schedule H/Schedule H1 must be dispensed only against a valid prescription issued by a licensed medical practitioner. Self-medication is hazardous to health.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Regional Availability & Regulatory Filings</h2>
            <p>
              Product indications, brand names, and availability can differ depending on local regulatory health authorities in specific jurisdictions. Please check with our regulatory affairs desk or local marketing authorizations for exact territory specifications.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
