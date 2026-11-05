import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { companyData } from "@/data/siteData";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Scale,
  Database,
  Building2,
  Clock,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & DPDP Data Protection | Icon Drugs Private Limited",
  description:
    "Official Privacy Policy and Personal Data Protection governance framework of Icon Drugs Private Limited, Nagpur, compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) and international data protection standards.",
  keywords: [
    "Icon Drugs privacy policy",
    "DPDP compliance pharma",
    "Data Protection Officer Nagpur",
    "pharma data privacy India",
    "Icon Drugs data fiduciary",
  ],
  alternates: {
    canonical: "https://icondrugs.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy & DPDP Data Protection | Icon Drugs",
    description:
      "Statutory privacy notice, lawful processing standards, and Data Principal rights pursuant to the Digital Personal Data Protection Act, 2023.",
    url: "https://icondrugs.com/privacy",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Privacy Policy & Data Protection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20 bg-slate-50/50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#00477F] text-white py-16 sm:py-20 border-b border-slate-700/60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-white">Privacy & Data Governance</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-medium mb-4">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              Digital Personal Data Protection Act (DPDP Act, 2023) Compliant
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Privacy Policy & Personal Data Governance
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              Transparent statutory notice under Section 5 of the DPDP Act, 2023, outlining how{" "}
              <strong className="text-white">{companyData.legalName}</strong> collects, processes, secures, and honors Data Principal rights across our digital platforms and procurement desks.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                Last Updated: November 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-teal-400" />
                Nagpur, Maharashtra, India
              </span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* 1. Overview & Data Fiduciary Identity */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#00477F]" />
              1. Overview & Identity of Data Fiduciary
            </h2>
            <p>
              {companyData.legalName} (&quot;Icon Drugs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to the highest standards of data integrity, confidentiality, and lawful processing. Under the Digital Personal Data Protection Act, 2023 (DPDP Act, Act No. 22 of 2023) and the Information Technology Act, 2000, Icon Drugs functions as the <strong>Data Fiduciary</strong> in respect of all digital personal data collected via <strong>icondrugs.com</strong> and associated corporate communication channels.
            </p>
            <p className="text-xs text-slate-500">
              Registered Corporate Office: {companyData.address}. Corporate Inquiries: {companyData.email}.
            </p>
          </div>

          {/* 2. Grounds of Processing & Notice */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              2. Lawful Grounds of Processing (Section 4 & Section 5 DPDP Act)
            </h2>
            <p>
              We process personal data only when backed by recognized statutory grounds:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li>
                <strong>Affirmative Consent:</strong> Where you have given free, specific, informed, unconditional, and unambiguous consent through affirmative action when completing an inquiry or procurement form.
              </li>
              <li>
                <strong>Legitimate Uses (Section 7 DPDP Act):</strong> Fulfilling a contract or service explicitly requested by you (such as processing institutional tenders, verifying drug licenses, or dispatching clinical monographs), responding to public health alerts, or complying with orders of competent courts and drug regulatory authorities.
              </li>
            </ul>
          </div>

          {/* 3. Categories of Information We Collect */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <Database className="w-5 h-5 text-[#00477F]" />
              3. Categories of Digital Personal Data Collected
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">Commercial Inquiries & Contact Data:</strong>
                Name, business email address, phone number, institutional organization, hospital / clinic designation, and procurement notes.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">Regulatory & Professional Verification:</strong>
                Wholesale Drug License numbers (Forms 20B/21B), GSTIN certificates, and medical council registrations for verified HCP access.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">Pharmacovigilance & Drug Safety:</strong>
                Voluntary adverse event notices containing anonymized patient age band, suspect batch details, and clinical reaction narratives.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">Technical Device & Audit Logs:</strong>
                IP addresses, browser type, TLS protocol version, and telemetry necessary for cyber defense and preventing DDOS exploitation.
              </div>
            </div>
          </div>

          {/* 4. Purpose & Utilization */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-700" />
              4. Specific Purposes of Processing
            </h2>
            <p className="text-sm text-slate-600">
              Personal data is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Evaluate and fulfill PCD pharma franchise, hospital procurement, and contract manufacturing proposals;</li>
              <li>Authenticate statutory drug distributor credentials prior to commercial execution;</li>
              <li>Provide authorized healthcare professionals with formulation dossiers and prescribing information;</li>
              <li>Satisfy mandatory pharmacovigilance and drug safety reporting obligations under CDSCO / PvPI directives;</li>
              <li>Enforce our <Link href="/terms" className="text-[#00477F] underline font-medium">Terms of Use</Link> and protect our digital infrastructure against security incidents.</li>
            </ul>
            <p className="text-xs text-slate-500 font-medium pt-2">
              <strong>We do not sell, rent, monetize, or broker personal data to commercial data aggregators or third-party advertisers.</strong>
            </p>
          </div>

          {/* 5. Data Principal Rights */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-teal-600" />
              5. Statutory Rights of Data Principals (DPDP Act Sections 11–14)
            </h2>
            <p className="text-sm text-slate-600">
              Under Indian law, you possess explicit rights regarding your digital personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
              <li><strong>Right to Access (Section 11):</strong> Right to obtain a summary of personal data being processed and a list of all Data Fiduciaries/Processors with whom it has been shared.</li>
              <li><strong>Right to Correction & Erasure (Section 12):</strong> Right to correct inaccurate data, complete incomplete records, or request total erasure (subject to statutory pharmacovigilance and tax archiving laws).</li>
              <li><strong>Right of Grievance Redressal (Section 13):</strong> Right to seek prompt grievance resolution from our designated Grievance Officer within statutory timelines.</li>
              <li><strong>Right to Nominate (Section 14):</strong> Right to nominate a person who shall, in the event of death or incapacity, exercise your rights as Data Principal.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent at any time with equal ease by contacting <a href="mailto:grievance@icondrugs.com" className="text-[#00477F] font-semibold underline">grievance@icondrugs.com</a>.</li>
            </ul>
          </div>

          {/* 6. Technical & Organizational Measures (Security) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-700" />
              6. Technical & Organizational Security Measures
            </h2>
            <p className="text-sm text-slate-600">
              Pursuant to Section 8(5) of the DPDP Act and Rule 5(8) of the SPDI Rules, Icon Drugs employs rigorous physical, managerial, and technological controls:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Modern TLS 1.3 protocol encryption for all incoming and outgoing form submissions;</li>
              <li>Restricted role-based access controls (RBAC) safeguarding sensitive corporate and inquiry databases;</li>
              <li>Regular patch cycles and firewall perimeter security;</li>
              <li>Non-disclosure agreements executed with all internal personnel handling customer records.</li>
            </ul>
          </div>

          {/* 7. Children's Data Prohibition */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              7. Processing of Personal Data of Children (Section 9 DPDP Act)
            </h2>
            <p className="text-sm text-slate-600">
              Icon Drugs does not knowingly collect or process personal data of children below 18 years of age. Our services and scientific monographs are exclusively intended for adult enterprise representatives and licensed healthcare professionals. We do not engage in behavioral monitoring, tracking, or targeted advertising directed at minors.
            </p>
          </div>

          {/* 8. Grievance Redressal & DPO Office */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00477F]" />
              8. Grievance Officer & Statutory Escalation
            </h2>
            <p className="text-sm text-slate-600">
              For any privacy inquiries, consent withdrawal requests, or data principal rights exercise, please contact:
            </p>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1.5">
              <p><strong>Designation:</strong> Data Protection Officer & Grievance Redressal Officer</p>
              <p><strong>Company:</strong> {companyData.legalName}</p>
              <p><strong>Address:</strong> {companyData.address}</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:grievance@icondrugs.com" className="text-[#00477F] font-semibold underline">
                  grievance@icondrugs.com
                </a>
              </p>
              <p><strong>Telephone:</strong> {companyData.phone}</p>
              <p className="text-xs text-slate-500 pt-1">
                Response Window: Acknowledgment within 48 hours; complete redressal within 30 days.
              </p>
            </div>
            <p className="text-xs text-slate-600">
              <strong>Escalation to Data Protection Board of India (DPBI):</strong> If you do not receive a resolution within the statutory period or are dissatisfied with the remedy provided, you are entitled under Section 13(3) of the DPDP Act to submit a complaint before the <strong>Data Protection Board of India (DPBI)</strong>.
            </p>
          </div>

          {/* Navigational Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <Link
              href="/terms"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00477F] hover:underline"
            >
              Read Terms of Use & Data Protection Addendum (DPA)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/disclaimer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Medical & Regulatory Disclaimer
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
