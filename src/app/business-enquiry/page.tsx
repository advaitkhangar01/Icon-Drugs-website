"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, CheckCircle2, Send } from "lucide-react";

export default function BusinessEnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    country: "",
    inquiryType: "Hospital Procurement",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              Business & Institutional Partnerships
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Connect directly with our corporate business development, tender supply, and international dossier teams.
            </p>
          </div>
        </section>

        {/* Contact Form & Office Information */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Enquiry Received Successfully
                  </h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out to Icon Drugs. Our institutional business team will review your requirements and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-[#005EB1] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-heading mb-2">
                      Submit Your Partnership Proposal
                    </h2>
                    <p className="text-xs text-slate-500">
                      Fields marked with * are required for institutional verification.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Organization / Hospital *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Hospital, Clinic or Distributor Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Country / Jurisdiction *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Country of Operation"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+CountryCode Number"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Inquiry Nature *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:border-[#005EB1]"
                      >
                        <option value="Hospital Procurement">Hospital & Clinical Procurement</option>
                        <option value="Export & Distribution">International Export / Distribution</option>
                        <option value="Contract Manufacturing">Contract Formulation & Packaging</option>
                        <option value="Medical Representative">Request Medical Representative</option>
                        <option value="Other">Other Regulatory / Technical Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Inquiry Details & Molecule Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify therapeutic categories, expected batch quantities, delivery schedules or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#005EB1] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#F87901] hover:bg-[#e06c00] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md shadow-[#F87901]/25 flex items-center justify-center gap-2"
                  >
                    <span>Transmit Enquiry Dossier</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Corporate Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-6">
                  Icon Drugs Corporate Headquarters
                </h3>

                <div className="space-y-6 text-sm text-slate-600">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#005EB1] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Manufacturing Facility & Labs:</strong>
                      <span>Pharma Industrial Zone Complex, Central Formulation Belt</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#005EB1] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Institutional Email:</strong>
                      <span>business@icondrugs.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#005EB1] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">Direct Desk:</strong>
                      <span>+91 (0) 11-2940-XXXX / +91 (0) 98710-XXXXX</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality & Assurance badge */}
              <div className="bg-[#00477F] text-white rounded-2xl p-8 shadow-sm">
                <div className="text-xs uppercase font-bold tracking-widest text-[#F87901] mb-2">
                  Compliance Commitment
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Strict Confidentiality & Traceability
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  All institutional proposals and formulation licensing discussions are held under non-disclosure governance conforming to international commercial pharma standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
