"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { sendFormSubmitRequest } from "@/lib/formsubmit";

export default function CatalogDownloadHub() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [referralName, setReferralName] = useState("");
  const [consentTerms, setConsentTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadRequested, setDownloadRequested] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim() || !consentTerms) return;

    setIsSubmitting(true);

    const isEmail = emailOrPhone.includes("@");
    await sendFormSubmitRequest({
      subject: `[Catalog Request] Icon Drugs Master Compendium`,
      replyTo: isEmail ? emailOrPhone.trim() : undefined,
      honeypot: honeypot,
      data: {
        "Requester Contact (WhatsApp/Email)": emailOrPhone.trim(),
        "Referral / Agent Guidance": referralName.trim() || "None / Direct",
        "Requested Asset": "Icon Drugs Master Product Compendium & Net Price List (2026 Edition)",
        "DPDP Act Consent (Sec. 6)": "Granted (18+ Confirmed)",
        "Terms & DPA Agreement": "Accepted (vNov2026)",
        "Data Fiduciary": "ICON DRUGS PRIVATE LIMITED",
        "Request Timestamp": new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      },
    });

    setIsSubmitting(false);
    setDownloadRequested(true);
  };

  return (
    <section id="download-catalog" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden bg-[#003866]">
          {/* Background Image with Deep Gradient Overlay */}
          <Image
            src="/backgrounds/catalog-bg.jpg"
            alt="Pharmaceutical laboratory research & clinical documentation"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.25] pointer-events-none"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#003866]/90 via-[#00477F]/85 to-[#002342]/90"
            aria-hidden="true"
          />

          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#005EB1]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#F87901]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Text & Value props */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-blue-200 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F87901]" />
                <span>2026 Official Formulation Directory</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Download the Master <br className="hidden sm:inline" />
                <span className="text-[#F87901]">Product Catalog & Price List</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Comprehensive 48-page clinical dossier featuring complete chemical monographs, packaging formats, DCGI approvals, MRP, wholesale net pricing, and physician sample visual aid previews.
              </p>

              {/* Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All 25+ Active Formulations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>HSN Codes & 12%/18% GST Specs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>PCD Franchise Wholesale Net Rates</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Third-Party Contract MOQs</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                  <div className="w-14 h-16 rounded-xl bg-red-50 border border-red-200 text-red-600 flex flex-col items-center justify-center font-bold shrink-0 shadow-xs">
                    <FileText className="w-6 h-6" />
                    <span className="text-[10px] uppercase font-black mt-0.5">PDF</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 font-heading">
                      Icon Drugs Master Compendium
                    </h3>
                    <p className="text-xs text-slate-500 font-bold mt-0.5">
                      Updated October 2026 • 4.8 MB • High Resolution
                    </p>
                  </div>
                </div>

                {downloadRequested ? (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-black text-emerald-950">
                      Catalog Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-emerald-900 font-medium">
                      We have shared the full master dossier with price list to <strong>{emailOrPhone}</strong>. You can also view our full catalog online anytime.
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors"
                    >
                      <span>Browse Products Online</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Anti-spam honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="catalog_code">Do not fill this</label>
                      <input
                        type="text"
                        id="catalog_code"
                        name="catalog_code"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Number or Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210 or agency@pharma.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 font-medium text-slate-900 text-sm focus:outline-none focus:border-[#005EB1] placeholder:text-slate-400 bg-slate-50 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                          Referral / Agent Guidance Name
                        </label>
                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded uppercase">
                          Non-Compulsory
                        </span>
                      </div>
                      <input
                        type="text"
                        value={referralName}
                        onChange={(e) => setReferralName(e.target.value)}
                        placeholder="e.g. Field Executive or Representative Name"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 font-medium text-slate-900 text-sm focus:outline-none focus:border-[#005EB1] placeholder:text-slate-400 bg-slate-50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* DPDP Act (2023) Consent Architecture */}
                    <div className="pt-0.5">
                      <label className="flex items-start gap-2 cursor-pointer select-none group">
                        <input
                          type="checkbox"
                          required
                          checked={consentTerms}
                          onChange={(e) => setConsentTerms(e.target.checked)}
                          className="mt-0.5 w-3.5 h-3.5 rounded border-slate-300 text-[#005EB1] focus:ring-[#005EB1] focus:ring-offset-0 cursor-pointer accent-[#005EB1] shrink-0"
                        />
                        <span className="text-[11px] text-slate-600 leading-snug">
                          I confirm I am 18+ and consent to Icon Drugs processing my details to deliver the product compendium per the{" "}
                          <Link href="/terms" target="_blank" className="text-[#005EB1] underline font-bold hover:text-blue-800">
                            Terms &amp; DPA
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" target="_blank" className="text-[#005EB1] underline font-bold hover:text-blue-800">
                            Privacy Policy
                          </Link>
                          . <span className="text-rose-500">*</span>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !consentTerms}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Dossier Link...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Download Instant Price Dossier</span>
                        </>
                      )}
                    </button>

                    <div className="pt-2 text-center">
                      <p className="text-[11px] text-slate-500 font-medium">
                        Instant delivery via WhatsApp & Email • No spam guarantee
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
