"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Building2,
  Stethoscope,
  Briefcase,
  MapPin,
  FileCheck,
  MessageSquare,
  Lock,
  Clock,
  ShieldCheck,
  ShieldAlert,
  User,
  UserCheck,
  Mail,
  Loader2,
  Package,
  Copy,
  Check,
} from "lucide-react";
import { Product } from "@/data/siteData";
import { sendFormSubmitRequest } from "@/lib/formsubmit";

interface ProductInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  initialIntent?: "franchise" | "tender" | "sample";
  initialTerritory?: string;
}

export default function ProductInquiryModal({
  isOpen,
  onClose,
  product,
  initialIntent = "franchise",
  initialTerritory = "",
}: ProductInquiryModalProps) {
  const [activeTab, setActiveTab] = useState<"franchise" | "tender" | "sample">(initialIntent);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState("");
  const [copiedId, setCopiedId] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [territory, setTerritory] = useState(initialTerritory);
  const [organization, setOrganization] = useState("");
  const [doctorRegNo, setDoctorRegNo] = useState("");
  const [volume, setVolume] = useState("");
  const [referralName, setReferralName] = useState("");
  const [notes, setNotes] = useState("");
  const [consentTerms, setConsentTerms] = useState(false);

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialIntent);
      if (initialTerritory) {
        setTerritory(initialTerritory);
      }
      setSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
      setReferralName("");
      setConsentTerms(false);
    }
  }, [isOpen, initialIntent, initialTerritory]);

  // Escape key handler & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentTerms) {
      setSubmitError("Please confirm age affirmation and accept the Terms & Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    const newId = `ICON-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(newId);

    const intentLabel =
      activeTab === "franchise"
        ? "PCD Monopoly Franchise"
        : activeTab === "tender"
        ? "Institutional Bulk Tender"
        : "Doctor Sample Kit";

    const dataPayload: Record<string, any> = {
      "Inquiry Reference ID": newId,
      "Product Name": product.name,
      "Generic Composition": product.genericName,
      "Strength & Dosage": `${product.strength} | ${product.dosageForm}`,
      "Packaging Size": product.packSize,
      "Therapeutic Category": product.category,
      "Intent Category": intentLabel,
      "Contact Person Name": name,
      "Contact Mobile/Phone": phone,
      "Email Address": email || "Not specified",
      "Target Territory / City": territory || "Pan-India",
      "Referral / Agent Guidance": referralName.trim() || "None / Direct",
      "Specific Notes / Questions": notes || "None provided",
      "DPDP Act Consent (Sec. 6)": "Granted (18+ Confirmed)",
      "Terms & DPA Agreement": "Accepted (vNov2026)",
      "Data Fiduciary": "ICON DRUGS PRIVATE LIMITED",
      "Submission Time (IST)": new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    };

    if (activeTab === "tender") {
      dataPayload["Procuring Institution"] = organization || "Hospital / Institution";
      dataPayload["Estimated Batch Volume"] = volume || "Standard Tender";
    }

    if (activeTab === "sample") {
      dataPayload["Hospital / Clinic Name"] = organization || "Private Practice";
      dataPayload["Doctor Registration No"] = doctorRegNo || "Verified Clinician";
    }

    const result = await sendFormSubmitRequest({
      subject: `[Product Inquiry] ${product.name} - ${intentLabel} (Ref: ${newId})`,
      replyTo: email || undefined,
      honeypot: honeypot,
      data: dataPayload,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(
        result.message ||
          "Could not send request right now. You can connect with our desk directly on WhatsApp."
      );
    }
  };

  const handleCopyId = () => {
    if (!inquiryId) return;
    navigator.clipboard.writeText(inquiryId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const getWhatsAppDirectLink = () => {
    const baseMsg = `*Commercial Inquiry - Icon Drugs*\n*Product:* ${product.name} (${product.dosageForm})\n*Strength & Pack:* ${product.strength} | ${product.packSize}\n*Inquiry Type:* ${
      activeTab === "franchise"
        ? "PCD Franchise Monopoly"
        : activeTab === "tender"
        ? "Institutional Bulk Tender"
        : "Doctor Sample Kit"
    }\n*Name:* ${name || "Healthcare Partner"}\n*Phone:* ${phone || "Not specified"}\n*Territory/City:* ${territory || "Pan-India"}\n*Details:* ${notes || "Please share price list and commercial terms."}`;

    return `https://wa.me/919876543210?text=${encodeURIComponent(baseMsg)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[92dvh] bg-white rounded-t-3xl sm:rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,35,80,0.18)] border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Top Brand Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#005EB1] via-[#00477F] to-[#F87901]" />

        {/* LIGHT THEME COMPACT HEADER (Zero Wasted Space) */}
        <div className="bg-gradient-to-b from-slate-50/90 to-white px-5 pt-3.5 pb-2.5 border-b border-slate-100 relative shrink-0">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Row 1: Operational Desk + SLA Badge */}
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Response within 2 Hours
            </span>
            <span className="text-slate-300 text-xs">•</span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
              Commercial Procurement Desk
            </span>
          </div>

          {/* Row 2: Product Name + Pack Size + Generic Summary in one line */}
          <div className="flex flex-wrap items-baseline gap-2 mb-2.5">
            <h2 id="modal-title" className="text-xl font-extrabold font-heading text-slate-900 tracking-tight">
              {product.name}
            </h2>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#005EB1] text-[11px] font-bold">
              {product.packSize}
            </span>
            <span className="text-slate-500 text-xs font-medium truncate max-w-xs">
              • {product.genericName}
            </span>
          </div>

          {/* Row 3: Compact Light-Theme Segmented Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80">
            <button
              type="button"
              onClick={() => {
                setActiveTab("franchise");
                setSubmitted(false);
              }}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "franchise"
                  ? "bg-white text-[#005EB1] shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Briefcase className={`w-3.5 h-3.5 ${activeTab === "franchise" ? "text-[#005EB1]" : "text-slate-400"}`} />
              <span><span className="hidden sm:inline">PCD </span>Franchise</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("tender");
                setSubmitted(false);
              }}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "tender"
                  ? "bg-white text-[#005EB1] shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Building2 className={`w-3.5 h-3.5 ${activeTab === "tender" ? "text-[#005EB1]" : "text-slate-400"}`} />
              <span>Bulk Tender</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("sample");
                setSubmitted(false);
              }}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "sample"
                  ? "bg-white text-[#005EB1] shadow-xs border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              <Stethoscope className={`w-3.5 h-3.5 ${activeTab === "sample" ? "text-[#005EB1]" : "text-slate-400"}`} />
              <span>Doctor Sample</span>
            </button>
          </div>
        </div>

        {/* MODAL BODY (Scrollable on small viewports with safe area) */}
        <div className="px-5 py-3.5 bg-white flex-1 overflow-y-auto overscroll-contain pb-safe">
          {submitted ? (
            /* COMPACT CONFIRMATION RECEIPT */
            <div className="py-4 text-center space-y-3 animate-fade-in">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-1 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Dossier Logged Successfully
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                  Inquiry Transmitted
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mt-0.5">
                  Your commercial request for <strong className="text-slate-900">{product.name}</strong> has been transferred to our Regional Formulary Desk.
                </p>
              </div>

              {/* Light Digital Receipt Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 text-left max-w-md mx-auto space-y-1.5 shadow-inner">
                <div className="flex justify-between items-center border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500 font-medium">Inquiry ID:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                      {inquiryId}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyId}
                      className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                      title="Copy Inquiry ID"
                    >
                      {copiedId ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500 font-medium">Assigned Team:</span>
                  <span className="font-semibold text-[#005EB1]">Commercial Formulary Directorate</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500 font-medium">Committed SLA:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Within 2 Working Hours
                  </span>
                </div>
              </div>

              {/* Instant Action */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={getWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Connect via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* ZERO-SCROLL COMPACT FORM */
            <form onSubmit={handleSubmit} className="space-y-2.5">
              
              {/* Compact Context Explainer Banner (Single-line high density) */}
              <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl px-3 py-1.5 text-[11px] text-slate-700 flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-[#005EB1] shrink-0" />
                <span className="truncate leading-tight">
                  {activeTab === "franchise" && (
                    <>Exclusive PCD monopoly rights for <strong className="text-[#005EB1]">{product.name}</strong> with promotional kit & net pricing.</>
                  )}
                  {activeTab === "tender" && (
                    <>Institutional bulk supply & tender specs for <strong className="text-[#005EB1]">{product.name}</strong> with certified COA/GMP.</>
                  )}
                  {activeTab === "sample" && (
                    <>Physicians can request a complimentary <strong className="text-[#005EB1]">Clinical Sample Kit</strong> & prescribing monograph.</>
                  )}
                </span>
              </div>

              {/* Grid 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Contact Person Name
                    </label>
                    <span className="text-[9px] font-bold text-[#005EB1] bg-blue-50 px-1 py-0.2 rounded">
                      *
                    </span>
                  </div>
                  <div className="relative group">
                    <User className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Rajesh Sharma / Mr. Verma"
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Phone / WhatsApp Number
                    </label>
                    <span className="text-[9px] font-bold text-[#005EB1] bg-blue-50 px-1 py-0.2 rounded">
                      *
                    </span>
                  </div>
                  <div className="relative group">
                    <Phone className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2: Email & Territory */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="partner@example.com"
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Target District / City
                    </label>
                    <span className="text-[9px] font-bold text-[#005EB1] bg-blue-50 px-1 py-0.2 rounded">
                      *
                    </span>
                  </div>
                  <div className="relative group">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={territory}
                      onChange={(e) => setTerritory(e.target.value)}
                      placeholder="e.g. Pune / Jaipur / Lucknow"
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Conditional Row by Tab */}
              {activeTab === "franchise" && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                    Firm / Distributor Name & Drug License Status
                  </label>
                  <div className="relative group">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Apex Pharma Agencies (Active Drug License)"
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                    />
                  </div>
                </div>
              )}

              {activeTab === "tender" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                      Hospital / Institution Name
                    </label>
                    <div className="relative group">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Apollo / Multi-Speciality"
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                      Estimated Volume / Batch Units
                    </label>
                    <div className="relative group">
                      <Package className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        placeholder="e.g. 5,000 Boxes / Monthly"
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "sample" && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                    State / MCI Registration Number
                  </label>
                  <div className="relative group">
                    <Stethoscope className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={doctorRegNo}
                      onChange={(e) => setDoctorRegNo(e.target.value)}
                      placeholder="e.g. MCI-2015-84920 / State Council Reg."
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                    />
                  </div>
                </div>
              )}

              {/* Referral / Agent Guidance Name (Non-compulsory) */}
              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Referral / Agent Guidance Name
                  </label>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded uppercase">
                    Non-Compulsory
                  </span>
                </div>
                <div className="relative group">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={referralName}
                    onChange={(e) => setReferralName(e.target.value)}
                    placeholder="e.g. Field Representative, Agent, or Referral Contact"
                    className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all font-medium shadow-2xs"
                  />
                </div>
              </div>

              {/* Commercial Notes / Questions */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                  Specific Commercial Notes / Questions
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Inquire about pricing slabs, delivery lead time, promotional inputs, or batch test reports..."
                  className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:ring-2 focus:ring-[#005EB1]/10 transition-all resize-none leading-relaxed font-medium shadow-2xs"
                />
              </div>

              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="modal_inquiry_code">Do not fill this</label>
                <input
                  type="text"
                  id="modal_inquiry_code"
                  name="modal_inquiry_code"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Fail-Safe Error Alert */}
              {submitError && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] flex items-center justify-between gap-2 shadow-xs">
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="font-medium">{submitError}</span>
                  </div>
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] whitespace-nowrap"
                  >
                    Use WhatsApp
                  </a>
                </div>
              )}

              {/* DPDP Act (2023) Consent Architecture */}
              <div className="pt-0.5 pb-0.5">
                <label className="flex items-start gap-2 cursor-pointer select-none group">
                  <input
                    type="checkbox"
                    required
                    checked={consentTerms}
                    onChange={(e) => setConsentTerms(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 rounded border-slate-300 text-[#005EB1] focus:ring-[#005EB1] focus:ring-offset-0 cursor-pointer accent-[#005EB1] shrink-0"
                  />
                  <span className="text-[11px] text-slate-600 leading-snug">
                    I confirm I am 18+ and consent to Icon Drugs processing my details to deliver quotation and product monographs per the{" "}
                    <Link href="/terms" target="_blank" className="text-[#005EB1] underline font-semibold hover:text-blue-800">
                      Terms &amp; DPA
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="text-[#005EB1] underline font-semibold hover:text-blue-800">
                      Privacy Policy
                    </Link>
                    . <span className="text-rose-500">*</span>
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !consentTerms}
                  className="w-full sm:flex-1 py-3 sm:py-2.5 px-4 min-h-[44px] rounded-xl bg-gradient-to-r from-[#F87901] to-[#e06c00] hover:from-[#e06c00] hover:to-[#c75e00] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#F87901]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Commercial Request</span>
                    </>
                  )}
                </button>

                <a
                  href={getWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 sm:py-2.5 px-4 min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              {/* Micro Trust Indicators (Single Row) */}
              <div className="pt-0.5 flex items-center justify-center gap-3 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  256-Bit SSL
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#005EB1]" />
                  Priority Routing
                </span>
                <span>•</span>
                <span>GxP Governed</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
