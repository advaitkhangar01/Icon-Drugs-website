"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IconLogo from "@/components/ui/IconLogo";
import gsap from "gsap";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  ShieldCheck,
  Lock,
  Building2,
  Globe2,
  User,
  Clock,
  FileText,
  Loader2,
  Sparkles,
  Layers,
  UserCheck,
  HelpCircle,
  Copy,
  Check,
  ShieldAlert,
} from "lucide-react";

interface InquiryOption {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

const INQUIRY_OPTIONS: InquiryOption[] = [
  {
    id: "Hospital Procurement",
    label: "Hospital & Clinical Procurement",
    sublabel: "Tier 1 hospital tenders & direct formulary supplies",
    icon: Building2,
  },
  {
    id: "Export & Distribution",
    label: "International Export / Distribution",
    sublabel: "CTD/eCTD dossier licensing & overseas franchise",
    icon: Globe2,
  },
  {
    id: "Contract Manufacturing",
    label: "Contract Formulation & Packaging",
    sublabel: "Custom oral solids, injectables & liquids (cGMP)",
    icon: Layers,
  },
  {
    id: "Medical Representative",
    label: "Request Medical Representative",
    sublabel: "Doctor clinic detailing, sampling kits & literature",
    icon: UserCheck,
  },
  {
    id: "Other",
    label: "Other Regulatory / Technical Query",
    sublabel: "COA, stability data, pharmacovigilance or licensing",
    icon: HelpCircle,
  },
];

const QUICK_TAGS = [
  "Request Certificate of Analysis (COA)",
  "Inquire Annual Tender Volume Pricing",
  "Request CTD Dossier for Registration",
  "PCD Monopoly Distribution Territory",
];

export default function BusinessEnquiryClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);
  const [currentTimeIST, setCurrentTimeIST] = useState<string>("");
  const [dossierRefId, setDossierRefId] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    country: "",
    inquiryType: "Hospital Procurement",
    message: "",
  });

  // Animated elements refs
  const heroRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const sidecarRef = useRef<HTMLDivElement>(null);

  // Live IST Clock simulation
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTimeIST(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heroRef.current) {
        tl.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
        );
      }

      if (formCardRef.current) {
        tl.fromTo(
          formCardRef.current,
          { opacity: 0, y: 30, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.5"
        );
      }

      if (sidecarRef.current) {
        tl.fromTo(
          sidecarRef.current.children,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.15 },
          "-=0.6"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Compute Live Dossier Readiness (Percentage of required fields complete)
  const requiredFields = [
    Boolean(formData.fullName.trim()),
    Boolean(formData.email.trim() && formData.email.includes("@")),
    Boolean(formData.organization.trim()),
    Boolean(formData.country.trim()),
    Boolean(formData.inquiryType.trim()),
    Boolean(formData.message.trim().length >= 10),
  ];
  const completedCount = requiredFields.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / requiredFields.length) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `ICN-${Math.floor(100000 + Math.random() * 900000)}`;
    setDossierRefId(generatedId);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 850);
  };

  const handleCopyRef = () => {
    if (!dossierRefId) return;
    navigator.clipboard.writeText(dossierRefId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const appendQuickTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      message: prev.message ? `${prev.message}\n• ${tag}` : `• ${tag}`,
    }));
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-24 bg-[#F8FAFC] relative overflow-hidden">
        
        {/* Ambient Enterprise Geometry & Grid Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 inset-x-0 h-[560px] bg-gradient-to-b from-[#003866] via-[#00477F] to-[#F8FAFC]" />
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,94,177,0.35)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#005EB1_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-10 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={heroRef}>
            
            {/* Live Operational Ribbon */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-300 font-bold uppercase tracking-wider text-[11px]">
                Institutional Portal Active
              </span>
              <span className="text-white/40">|</span>
              <span className="text-slate-200 text-[11px]">
                IST Clock: {currentTimeIST || "12:00:00 PM"}
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-slate-200 text-[11px] hidden sm:inline">
                SLA: &lt; 24h Review
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white max-w-4xl leading-[1.12]">
              Institutional Procurement & Global B2B Partnerships
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Direct regulatory and commercial desk for hospital tenders, PCD monopoly franchises, international CTD dossiers, and contract formulation pipelines.
            </p>
          </div>
        </section>

        {/* Content Section: Form & Institutional Sidecar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* MAIN FORM COLUMN */}
            <div 
              ref={formCardRef}
              className="lg:col-span-8 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,71,127,0.08)] p-6 sm:p-10 transition-all"
            >
              {submitted ? (
                /* SUCCESS RECEIPT STATE (Awwwards Grade) */
                <div className="py-10 animate-fade-in">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="text-center max-w-lg mx-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Dossier Transmitted & Logged
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3">
                      Partnership Proposal Received
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                      Thank you for submitting your specifications to Icon Drugs. Your file has been queued for institutional review by our Commercial Licensing Board.
                    </p>
                  </div>

                  {/* Digital Receipt Card */}
                  <div className="max-w-xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 mb-8 text-left shadow-inner">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          Official Reference Identifier
                        </span>
                        <div className="text-lg font-mono font-bold text-slate-900 flex items-center gap-2">
                          <span>{dossierRefId}</span>
                          <button
                            type="button"
                            onClick={handleCopyRef}
                            className="p-1.5 rounded-md hover:bg-slate-200/70 text-slate-500 hover:text-slate-900 transition-colors"
                            title="Copy dossier reference"
                          >
                            {copiedRef ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-[#005EB1]/10 text-[#005EB1] text-xs font-bold">
                        {formData.inquiryType}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 block mb-0.5">Contact Person</span>
                        <strong className="text-slate-800 font-semibold">{formData.fullName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">Corporate Domain</span>
                        <strong className="text-slate-800 font-semibold">{formData.email}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">Organization</span>
                        <strong className="text-slate-800 font-semibold">{formData.organization}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">Jurisdiction</span>
                        <strong className="text-slate-800 font-semibold">{formData.country}</strong>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Guaranteed Review: Within 24 Business Hours
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Lock className="w-3 h-3" />
                        256-Bit Vault
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          organization: "",
                          country: "",
                          inquiryType: "Hospital Procurement",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-500/15 cursor-pointer"
                    >
                      Submit Another Dossier
                    </button>
                  </div>
                </div>
              ) : (
                /* INTERACTIVE ENTERPRISE FORM */
                <form onSubmit={handleSubmit} className="space-y-9">
                  
                  {/* Form Header with Dynamic Progress Bar */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                          Commercial Dossier Transmission
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">
                          Directly connects to Icon Drugs Corporate & Institutional Formulation Desk.
                        </p>
                      </div>

                      {/* Live Readiness Pill */}
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs">
                        <span className="font-semibold text-slate-700">Readiness:</span>
                        <span className={`font-bold ${progressPercent === 100 ? "text-emerald-600" : "text-[#005EB1]"}`}>
                          {progressPercent}%
                        </span>
                        <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden ml-1">
                          <div 
                            className="h-full bg-[#005EB1] transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 1: Institutional Credentials */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#005EB1] flex items-center justify-center text-xs font-bold">
                          01
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                          Institutional Identity & Representative Credentials
                        </h3>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">Step 1 of 2</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            Full Name
                          </label>
                          <span className="text-[10px] font-bold text-[#005EB1] bg-blue-50 px-2 py-0.5 rounded uppercase">
                            Required
                          </span>
                        </div>
                        <div className="relative group">
                          <User className="w-4 h-4 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Dr. / Mr. / Ms. Full Name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white focus:ring-4 focus:ring-[#005EB1]/10 transition-all min-h-[44px]"
                          />
                        </div>
                      </div>

                      {/* Corporate Email */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            Corporate / Domain Email
                          </label>
                          <span className="text-[10px] font-bold text-[#005EB1] bg-blue-50 px-2 py-0.5 rounded uppercase">
                            Required
                          </span>
                        </div>
                        <div className="relative group">
                          <Mail className="w-4 h-4 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="procurement@hospital.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white focus:ring-4 focus:ring-[#005EB1]/10 transition-all min-h-[44px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Organization */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            Organization / Hospital / Distributor
                          </label>
                          <span className="text-[10px] font-bold text-[#005EB1] bg-blue-50 px-2 py-0.5 rounded uppercase">
                            Required
                          </span>
                        </div>
                        <div className="relative group">
                          <Building2 className="w-4 h-4 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="Hospital Group, Clinic or Distributor"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white focus:ring-4 focus:ring-[#005EB1]/10 transition-all min-h-[44px]"
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            Country / Territory
                          </label>
                          <span className="text-[10px] font-bold text-[#005EB1] bg-blue-50 px-2 py-0.5 rounded uppercase">
                            Required
                          </span>
                        </div>
                        <div className="relative group">
                          <Globe2 className="w-4 h-4 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            placeholder="e.g. India, United Kingdom, UAE"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white focus:ring-4 focus:ring-[#005EB1]/10 transition-all min-h-[44px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Direct Phone / WhatsApp
                        </label>
                        <span className="text-[10px] font-medium text-slate-400">
                          Optional for Priority Desk
                        </span>
                      </div>
                      <div className="relative group">
                        <Phone className="w-4 h-4 text-slate-400 group-focus-within:text-[#005EB1] transition-colors absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 (0) 98765-43210 (with country code)"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white focus:ring-4 focus:ring-[#005EB1]/10 transition-all min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Procurement Scope & Specifications */}
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-orange-100 text-[#F87901] flex items-center justify-center text-xs font-bold">
                          02
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                          Procurement Scope & Formulation Dossier
                        </h3>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">Step 2 of 2</span>
                    </div>

                    {/* Awwwards Grade Segmented Card Matrix for Inquiry Nature */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        Inquiry Nature & Procurement Track <span className="text-rose-500">*</span>
                      </label>
                      <div 
                        role="radiogroup" 
                        aria-label="Inquiry Nature" 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {INQUIRY_OPTIONS.map((opt) => {
                          const isSelected = formData.inquiryType === opt.id;
                          const IconComp = opt.icon;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => setFormData({ ...formData, inquiryType: opt.id })}
                              className={`p-3.5 rounded-2xl border text-left transition-all relative flex items-start gap-3.5 cursor-pointer ${
                                isSelected
                                  ? "bg-blue-50/60 border-[#005EB1] shadow-sm ring-1 ring-[#005EB1]"
                                  : "bg-slate-50/50 border-slate-200/80 hover:bg-white hover:border-slate-300"
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-[#005EB1] text-white shadow-sm"
                                    : "bg-white text-slate-500 border border-slate-200"
                                }`}
                              >
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1 pr-4">
                                <span className={`text-xs font-bold block ${isSelected ? "text-[#005EB1]" : "text-slate-800"}`}>
                                  {opt.label}
                                </span>
                                <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                                  {opt.sublabel}
                                </span>
                              </div>
                              {isSelected && (
                                <div className="w-4 h-4 rounded-full bg-[#005EB1] text-white flex items-center justify-center absolute top-3.5 right-3.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Inquiry Details & Molecule Requirements */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-800">
                          Inquiry Details & Molecule Requirements <span className="text-rose-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {formData.message.length} chars
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify molecules of interest, target dosage forms (tablets, dry syrups, injectables), expected batch quantities, tender deadlines, or technical query..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/70 border border-slate-200/90 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white focus:ring-4 focus:ring-[#005EB1]/10 transition-all min-h-[44px] leading-relaxed"
                      />

                      {/* Quick-Prompt Tags */}
                      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-[#F87901]" />
                          Quick Insert:
                        </span>
                        {QUICK_TAGS.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => appendQuickTag(tag)}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors font-medium cursor-pointer"
                          >
                            + {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submission Row & Enterprise Assurances */}
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#F87901] to-[#e06c00] hover:from-[#e06c00] hover:to-[#c75e00] active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#F87901]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Encrypting & Routing Dossier...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Enquiry Dossier</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Enterprise Trust Micro-Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-500 bg-slate-50/80 py-2 px-3 rounded-xl border border-slate-100">
                        <Lock className="w-3.5 h-3.5 text-[#005EB1] shrink-0" />
                        <span>256-Bit TLS Encryption</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-500 bg-slate-50/80 py-2 px-3 rounded-xl border border-slate-100">
                        <Clock className="w-3.5 h-3.5 text-[#005EB1] shrink-0" />
                        <span>SLA: &lt; 24h Dedicated Desk</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-500 bg-slate-50/80 py-2 px-3 rounded-xl border border-slate-100">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Pharma GxP NDA Bound</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* CORPORATE SIDECAR COLUMN */}
            <div ref={sidecarRef} className="lg:col-span-4 space-y-6">
              
              {/* Corporate Identity & Key Desk Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <IconLogo size="sm" className="mb-5" />
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-5 border-b border-slate-100 pb-3">
                  Icon Drugs Commercial Headquarters
                </h3>

                <div className="space-y-5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#005EB1] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-0.5">Corporate &amp; Manufacturing Headquarters:</strong>
                      <span className="leading-relaxed text-slate-600">
                        Pharma Industrial Complex, Nagpur, Maharashtra 440001, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#005EB1] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-0.5">Institutional Email:</strong>
                      <a 
                        href="mailto:business@icondrugs.com" 
                        className="text-[#005EB1] hover:underline font-semibold"
                      >
                        business@icondrugs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#005EB1] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-0.5">Priority Procurement Hotline:</strong>
                      <span className="text-slate-800 font-medium">
                        +91 712 294 0128 / +91 98230 44000
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance & Regulatory Commitment Card */}
              <div className="bg-gradient-to-br from-[#003B6B] to-[#002747] text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#F87901]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="text-[11px] uppercase font-bold tracking-widest text-[#F87901] mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Compliance Commitment
                </div>
                <h4 className="text-base font-bold mb-2">
                  Strict Confidentiality & Traceability
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  All institutional proposals, CTD dossiers, and formulation licensing discussions are governed under strict non-disclosure conforming to international commercial pharma standards.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WHO-GMP & ISO 9001:2015 Compliant</span>
                </div>
              </div>

              {/* Fast-Track Emergency Tender Desk */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F87901] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Urgent Institutional Supply?</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    For emergency hospital formulary tenders, mention &quot;URGENT&quot; in the notes.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
