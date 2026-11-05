"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  User,
  UserCheck,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Clock,
  Sparkles,
} from "lucide-react";
import { sendFormSubmitRequest } from "@/lib/formsubmit";

export default function QuickContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    referralName: "",
    message: "",
  });
  const [consentTerms, setConsentTerms] = useState(false);
  const [optInUpdates, setOptInUpdates] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentTerms) {
      setSubmitError("Please confirm age affirmation and consent to the Terms of Use & Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const refId = `ICN-MSG-${Math.floor(100000 + Math.random() * 900000)}`;

    const result = await sendFormSubmitRequest({
      subject: `[Contact Desk] ${formData.category} - ${formData.name} (Ref: ${refId})`,
      replyTo: formData.email,
      honeypot: honeypot,
      data: {
        "Message Reference": refId,
        "Sender Name": formData.name,
        "Email Address": formData.email,
        "Phone / Mobile": formData.phone || "Not provided",
        "Inquiry Category": formData.category,
        "Referral / Agent Guidance": formData.referralName.trim() || "None / Direct",
        "Message": formData.message,
        "DPDP Act Consent (Sec. 6)": "Granted (18+ Confirmed)",
        "Terms & DPA Agreement": "Accepted (vNov2026)",
        "Updates Opt-In": optInUpdates ? "Granted (WhatsApp/Email)" : "Declined",
        "Data Fiduciary": "ICON DRUGS PRIVATE LIMITED",
        "Submitted At (IST)": new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      },
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(
        result.message ||
          "Could not transmit message. Please contact us via phone or WhatsApp."
      );
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-xl text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
          Message Dispatched to Central Desk
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for getting in touch. Your message has been routed to our corporate correspondence team at{" "}
          <strong className="text-slate-900 font-semibold">contact@icondrugs.com</strong>.
        </p>
        <p className="text-xs text-slate-500">
          A receipt acknowledgement and inquiry reference will be logged in accordance with statutory DPDP standards.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setConsentTerms(false);
              setOptInUpdates(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                category: "General Inquiry",
                referralName: "",
                message: "",
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005EB1] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Electronic Dispatch</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
          Send a Direct Message
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Directly relayed to corporate administration at{" "}
          <span className="font-semibold text-slate-700">contact@icondrugs.com</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact_check">Leave empty</label>
          <input
            type="text"
            id="contact_check"
            name="contact_check"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. / Mr. / Ms. Name"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Business Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@organization.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phone / Mobile
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98230 44000"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Inquiry Department
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all font-medium"
            >
              <option value="General Inquiry">General Corporate Inquiry</option>
              <option value="PCD Distribution">PCD Franchise & Territory Rights</option>
              <option value="Hospital Procurement">Hospital & Institutional Supply</option>
              <option value="Contract Manufacturing">Contract Formulation / Third Party</option>
              <option value="Pharmacovigilance">Pharmacovigilance / Medical Query</option>
            </select>
          </div>
        </div>

        {/* Referral / Agent Guidance Name (Non-Compulsory) */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Referral / Agent Guidance Name
            </label>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
              Non-Compulsory
            </span>
          </div>
          <div className="relative">
            <UserCheck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={formData.referralName}
              onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
              placeholder="e.g. Field Representative, Consulting Doctor, or Referral Associate"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Message / Specification <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share your inquiry, required formulation quantities, territory of interest, or clinical inquiry..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005EB1] focus:bg-white transition-all font-medium resize-none leading-relaxed"
          />
        </div>

        {/* DPDP ACT (2023) NOTICE & CONSENT ARCHITECTURE */}
        <div className="pt-2 pb-1 space-y-3">
          {/* Statutory Collection Notice (DPDP Section 5) */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800">DPDP Act (2023) Statutory Notice:</strong> Personal data submitted above is processed by <strong>ICON DRUGS PRIVATE LIMITED</strong> (Data Fiduciary) strictly to evaluate and respond to your inquiry. We do not sell or monetize personal contact data. Data Principal rights and grievance redressal can be exercised via <a href="mailto:grievance@icondrugs.com" className="text-[#005EB1] underline font-semibold">grievance@icondrugs.com</a>.
            </div>
          </div>

          {/* Checkbox 1: Explicit Consent & Age Affirmation (Mandatory, unchecked by default) */}
          <label className="flex items-start gap-2.5 cursor-pointer select-none group">
            <input
              type="checkbox"
              required
              checked={consentTerms}
              onChange={(e) => setConsentTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#005EB1] focus:ring-[#005EB1] focus:ring-offset-0 cursor-pointer accent-[#005EB1] shrink-0"
            />
            <span className="text-xs text-slate-700 leading-snug">
              I confirm that I am at least 18 years of age and explicitly consent to the processing of my contact details by Icon Drugs in accordance with the{" "}
              <Link href="/terms" target="_blank" className="text-[#005EB1] underline font-semibold hover:text-blue-800">
                Terms of Use &amp; DPA
              </Link>{" "}
              and{" "}
              <Link href="/privacy" target="_blank" className="text-[#005EB1] underline font-semibold hover:text-blue-800">
                Privacy Policy
              </Link>
              . <span className="text-rose-500">*</span>
            </span>
          </label>

          {/* Checkbox 2: Optional Updates Consent (Unchecked by default) */}
          <label className="flex items-start gap-2.5 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={optInUpdates}
              onChange={(e) => setOptInUpdates(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#005EB1] focus:ring-[#005EB1] focus:ring-offset-0 cursor-pointer accent-[#005EB1] shrink-0"
            />
            <span className="text-xs text-slate-500 leading-snug">
              I agree to receive verified product monographs, therapeutic updates, and institutional notifications via WhatsApp / Email. (Optional)
            </span>
          </label>
        </div>

        {submitError && (
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{submitError}</span>
            </div>
            <a
              href="https://wa.me/919823044000?text=Hello%20Icon%20Drugs,%20I%20would%20like%20to%20connect%20regarding%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] whitespace-nowrap"
            >
              Message on WhatsApp
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !consentTerms}
          className="w-full py-3.5 px-6 rounded-xl bg-[#005EB1] hover:bg-[#00477F] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting to contact@icondrugs.com...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>

        <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#005EB1]" />
            Encrypted Dispatch
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-600" />
            24-Hour Business SLA
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-teal-600" />
            DPDP Compliant
          </span>
        </div>
      </form>
    </div>
  );
}
