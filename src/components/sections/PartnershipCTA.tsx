import React from "react";
import Link from "next/link";
import { ArrowRight, Handshake, Building2, Globe2 } from "lucide-react";

export default function PartnershipCTA() {
  return (
    <section className="relative py-24 bg-[#00477F] text-white overflow-hidden">
      {/* Decorative brand geometry arcs */}
      <div
        className="absolute right-0 top-0 w-96 h-96 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full border border-[#A285D5]/15 -translate-x-1/4 translate-y-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Handshake className="w-4 h-4 text-[#F87901]" />
            <span>Institutional & Global Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6 leading-tight">
            Let’s build enduring healthcare partnerships together.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you represent a government hospital network, private clinic consortium, or international distributor seeking high-purity generic formulations, our manufacturing capacity is engineered to scale with you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/business-enquiry"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#F87901] hover:bg-[#e06c00] text-white font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F87901]/30 group"
            >
              <span>Submit Business Enquiry</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/healthcare-professionals"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all"
            >
              <span>Healthcare Professional Portal</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/15 text-left">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#F87901] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-white">Contract Manufacturing</div>
                <div className="text-xs text-slate-300">Scalable solid and liquid formulations</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe2 className="w-5 h-5 text-[#F87901] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-white">Export Inquiries</div>
                <div className="text-xs text-slate-300">CTD/eCTD dossier assistance for 25+ markets</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Handshake className="w-5 h-5 text-[#F87901] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm text-white">Hospital Procurement</div>
                <div className="text-xs text-slate-300">Dedicated institutional supply chains</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
