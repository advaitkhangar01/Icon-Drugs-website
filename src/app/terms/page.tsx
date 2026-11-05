import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { companyData } from "@/data/siteData";
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  AlertTriangle,
  Building2,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  UserCheck,
  Database,
  Globe,
  FileCheck2,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use & Data Protection Addendum (DPDP & DPA) | Icon Drugs",
  description:
    "Official Terms of Use and Data Protection Addendum (DPA) for Icon Drugs Private Limited, compliant with India's Digital Personal Data Protection Act, 2023 (DPDP Act), IT Act 2000, and global enterprise data governance standards.",
  keywords: [
    "Icon Drugs terms of use",
    "DPDP Act 2023 compliance",
    "Data Protection Addendum pharma",
    "Icon Drugs privacy terms",
    "pharma manufacturing legal terms",
    "PCD franchise terms conditions",
    "Data Fiduciary Icon Drugs Nagpur",
  ],
  alternates: {
    canonical: "https://icondrugs.com/terms",
  },
  openGraph: {
    title: "Terms of Use & DPDP/DPA Compliance | Icon Drugs Private Limited",
    description:
      "Enterprise legal terms, user obligations, and statutory data protection covenants pursuant to the Digital Personal Data Protection Act, 2023 (DPDP Act) and international DPA standards.",
    url: "https://icondrugs.com/terms",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Terms and DPDP Compliance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsPage() {
  const sections = [
    { id: "preamble", title: "1. Scope & Binding Acceptance" },
    { id: "corporate-scope", title: "2. Corporate & Institutional Scope (Non-Retail)" },
    { id: "medical-disclaimer", title: "3. Prescription Regimen (Rx) & Medical Disclaimers" },
    { id: "commercial-terms", title: "4. Institutional Procurement, PCD & Supply Inquiries" },
    { id: "dpdp-compliance", title: "5. DPDP Act (2023) Compliance & Data Fiduciary Obligations" },
    { id: "dpa-terms", title: "6. Data Protection Addendum (DPA) for B2B Partners" },
    { id: "pharmacovigilance", title: "7. Pharmacovigilance & Drug Safety Disclosures" },
    { id: "intellectual-property", title: "8. Intellectual Property & Formulation Data" },
    { id: "acceptable-use", title: "9. Prohibited Conduct & Cyber Integrity (IT Act Rules)" },
    { id: "liability-warranties", title: "10. Warranty Disclaimers & Limitation of Liability" },
    { id: "indemnity", title: "11. Indemnification" },
    { id: "grievance-redressal", title: "12. Grievance Officer & Statutory Redressal Mechanism" },
    { id: "governing-law", title: "13. Governing Law, Arbitration & Jurisdiction" },
    { id: "miscellaneous", title: "14. Modifications, Severability & Entire Agreement" },
  ];

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
              <span className="text-white">Legal & Compliance</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-medium mb-4">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              DPDP Act (2023) & Data Protection Addendum (DPA) Aligned
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
              Terms of Use & Data Protection Governance
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              Official legal terms governing the access, institutional procurement queries, pharmaceutical monograph repository, and personal data handling practices of{" "}
              <strong className="text-white">{companyData.legalName}</strong> under Indian and international regulatory standards.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                Effective Date: November 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-teal-400" />
                Nagpur, Maharashtra, India
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-teal-400" />
                WHO-GMP & DCGI Compliant Operations
              </span>
            </div>
          </div>
        </section>

        {/* Executive Summary Cards */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#00477F] flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Strict B2B & Informational Portal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                This portal does not sell medicines directly to retail consumers or fill consumer prescriptions. It serves licensed healthcare professionals and institutional partners.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">DPDP Act (2023) Rights</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear statutory rights of access, correction, erasure, grievance redressal, and nomination under Sections 6 & 11–14 of the Digital Personal Data Protection Act, 2023.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Enterprise DPA Terms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured Technical and Organizational Measures (TOMs), audit protocols, and sub-processor controls for PCD franchisees, suppliers, and institutional distributors.
              </p>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quick Table of Contents (Sticky on desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00477F]" />
                Table of Contents
              </h2>
              <nav className="space-y-1.5 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block py-1.5 px-2.5 rounded-md text-slate-600 hover:text-[#00477F] hover:bg-slate-50 transition-colors font-medium truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                  <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-teal-600" />
                    Statutory Grievance Desk
                  </p>
                  <p className="text-[11px] leading-relaxed">
                    Have inquiries or data principal requests? Write directly to our Grievance & DPO Office.
                  </p>
                  <a
                    href="mailto:grievance@icondrugs.com"
                    className="inline-flex items-center gap-1 text-[#00477F] font-bold text-xs hover:underline"
                  >
                    grievance@icondrugs.com
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Terms & Clauses */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-xs space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">
              
              {/* 1. Scope & Binding Acceptance */}
              <div id="preamble" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Scope, Preamble & Binding Acceptance
                  </h2>
                </div>
                <div className="space-y-3">
                  <p>
                    These Terms of Use, together with the incorporated Data Protection Addendum (&quot;DPA&quot;), our{" "}
                    <Link href="/privacy" className="text-[#00477F] underline font-medium hover:text-blue-800">
                      Privacy Policy
                    </Link>
                    , and{" "}
                    <Link href="/disclaimer" className="text-[#00477F] underline font-medium hover:text-blue-800">
                      Medical & Regulatory Disclaimer
                    </Link>
                    , constitute an electronic contract under the provisions of the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;), and relevant rules thereunder.
                  </p>
                  <p>
                    This contract is entered into between <strong>{companyData.legalName}</strong> (&quot;Icon Drugs&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated under the laws of the Republic of India having its corporate office at {companyData.address}, and any visitor, commercial partner, healthcare professional, distributor, vendor, or corporate representative (&quot;User&quot;, &quot;you&quot;, or &quot;Data Principal&quot;) accessing or using <strong>icondrugs.com</strong> (the &quot;Portal&quot;).
                  </p>
                  <p>
                    By accessing, browsing, submitting inquiries through, or utilizing any clinical monograph, formulation specification, or commercial request form on this Portal, you unconditionally accept and agree to be legally bound by these Terms. If you do not agree to these Terms in full, you must immediately discontinue your use of this Portal.
                  </p>
                </div>
              </div>

              {/* 2. Corporate & Institutional Scope */}
              <div id="corporate-scope" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Corporate & Institutional Scope (Strict Non-Retail Portal)
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-amber-900 leading-normal">
                      <strong>STRICT NON-RETAIL DISCLAIMER:</strong> icondrugs.com is not an online pharmacy, retail drug outlet, or direct-to-consumer e-commerce portal. We do not sell pharmaceuticals directly to consumers, patients, or the general public through this website, nor do we fulfill retail prescriptions.
                    </p>
                  </div>
                  <p>
                    The Portal functions exclusively as an enterprise informational platform and business-to-business (&quot;B2B&quot;) liaison channel. It serves:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
                    <li>Accredited pharmaceutical distributors, stockists, and C&amp;F agents seeking PCD franchise collaborations;</li>
                    <li>Licensed hospital procurement desks, government institutional tenders, and buying groups;</li>
                    <li>Corporate entities seeking third-party contract formulation and manufacturing;</li>
                    <li>Licensed Registered Medical Practitioners (RMPs) and healthcare professionals reviewing technical monographs and pharmacopeial specifications.</li>
                  </ul>
                </div>
              </div>

              {/* 3. Prescription Regimen (Rx) & Medical Disclaimers */}
              <div id="medical-disclaimer" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Prescription Regimen (Rx) & Medical Disclaimers
                  </h2>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    Pharmaceutical products referenced on this Portal include formulations classified as <strong>Schedule H</strong> and <strong>Schedule H1</strong> prescription drugs under the Drugs and Cosmetics Act, 1940 and the Drugs and Cosmetics Rules, 1945 (India).
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>
                      <strong>No Medical or Therapeutic Advice:</strong> Monograph data, clinical summaries, therapeutic category outlines, and pharmacological actions presented on this Portal are compiled exclusively for educational, technical, and regulatory informational purposes. Nothing contained herein constitutes medical advice, clinical diagnosis, or a recommendation to self-medicate.
                    </li>
                    <li>
                      <strong>No Doctor-Patient Relationship:</strong> Transmitting an inquiry, reviewing product information, or engaging in communication via this Portal does not establish a doctor-patient, prescriber-patient, or clinical consultation relationship between Icon Drugs and any individual.
                    </li>
                    <li>
                      <strong>Mandatory Prescription Dispensation:</strong> Prescription drugs must be dispensed solely against a valid prescription generated by a licensed Registered Medical Practitioner (RMP). Self-medication is hazardous to health.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4. Commercial Procurement & PCD Terms */}
              <div id="commercial-terms" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Institutional Procurement, PCD Franchise & Commercial Inquiries
                  </h2>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    When submitting commercial inquiries, requests for quotes (RFQ), or PCD franchise applications:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>
                      <strong>Statutory Verification & Drug Licenses:</strong> Users representing corporate buyers or distributors warrant that they hold valid Drug Licenses (e.g., Form 20B/21B or regional wholesale drug licenses), a valid Goods and Services Tax Identification Number (GSTIN), and all necessary regulatory marketing authorizations. Icon Drugs reserves the absolute right to demand notarized or certified copies before entering commercial discussions.
                    </li>
                    <li>
                      <strong>Non-Binding Quotations:</strong> Any minimum order quantities (MOQ), commercial estimates, formulation batch schedules, or pricing discussions transmitted through digital forms or email desks are non-binding expressions of interest. Commercial binding agreements arise solely upon execution of a formal, bilateral Purchase Order, Manufacturing Agreement, or PCD Distribution Contract.
                    </li>
                    <li>
                      <strong>Territory Exclusivity:</strong> PCD franchise rights and geographic marketing allocations are strictly governed by designated bilateral agreements and are not conferred merely through inquiry submissions or website browsing.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 5. DPDP Act (2023) Compliance & Data Fiduciary Obligations */}
              <div id="dpdp-compliance" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-bold text-xs">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    DPDP Act (2023) Compliance & Data Fiduciary Obligations
                  </h2>
                </div>
                <div className="space-y-4 text-sm">
                  <p>
                    In compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, Act No. 22 of 2023)</strong> and the rules notified thereunder, Icon Drugs functions as a <strong>&quot;Data Fiduciary&quot;</strong> in respect of all digital personal data collected, stored, processed, or transferred through this Portal.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      5.1 Grounds of Processing & Notice (Section 4 & Section 5 DPDP Act)
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      We process personal data strictly pursuant to: (a) your affirmative, clear, informed, and unambiguous <strong>Consent</strong> provided at the point of communication; or (b) <strong>Legitimate Uses</strong> as recognized under Section 7 of the DPDP Act (including compliance with Indian statutory judgments, drug safety surveillance obligations, and fulfilling contracts requested by you).
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <Database className="w-4 h-4 text-[#00477F]" />
                      5.2 Categories of Digital Personal Data Processed
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                      <li><strong>Identity & Contact Data:</strong> Authorized representative name, professional designation, corporate email, commercial telephone number, company name, and physical address.</li>
                      <li><strong>Commercial & Professional Credentials:</strong> Drug License numbers (Forms 20B/21B), GSTIN, Medical Council registration numbers (for healthcare professionals requesting scientific monographs).</li>
                      <li><strong>Pharmacovigilance Data:</strong> Voluntary adverse event reports containing patient age group, clinical manifestation, and suspect drug batch data (anonymized in conformity with national PvPI protocols).</li>
                      <li><strong>Technical Meta-Data:</strong> Internet Protocol (IP) addresses, browser type, device identifiers, and session timestamps captured for cyber-defense and server load balancing.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <Scale className="w-4 h-4 text-indigo-700" />
                      5.3 Statutory Rights of Data Principals (Sections 11–14 DPDP Act)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      As a Data Principal, you are entitled to exercise the following statutory rights free of charge:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <strong className="text-slate-900 block mb-0.5">Right to Access Information (Sec. 11):</strong>
                        Obtain a summary of personal data being processed, identities of third parties with whom data has been shared, and lawful processing descriptions.
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <strong className="text-slate-900 block mb-0.5">Right to Correction & Erasure (Sec. 12):</strong>
                        Request correction of inaccurate data, completion of incomplete records, or erasure of personal data that is no longer necessary for its original purpose.
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <strong className="text-slate-900 block mb-0.5">Right of Grievance Redressal (Sec. 13):</strong>
                        Access readily available grievance redressal mechanisms with guaranteed response windows as specified in Section 12 of these Terms.
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <strong className="text-slate-900 block mb-0.5">Right to Nominate (Sec. 14):</strong>
                        Nominate another natural person to exercise your data principal rights in the event of your death or incapacity.
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <UserCheck className="w-4 h-4 text-amber-700" />
                      5.4 Protection of Children and Vulnerable Persons (Section 9 DPDP Act)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      This Portal is exclusively engineered for individuals who are at least 18 years of age. We do not knowingly process personal data of children (individuals under 18 years of age) or persons with disabilities without verifiable parental or legal guardian consent. We do not conduct behavioral tracking, targeted behavioral advertising, or profiling of minors under any circumstance.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                      <Lock className="w-4 h-4 text-emerald-700" />
                      5.5 Security Safeguards & Breach Notification (Section 8 DPDP Act)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We implement reasonable security safeguards, including TLS 1.3 cryptographic protocols, encrypted rest storage, access-controlled server environments, and intrusion prevention systems. In the event of an unavoidable personal data breach, Icon Drugs will immediately notify the <strong>Data Protection Board of India (DPBI)</strong> and impacted Data Principals in the form and manner prescribed by statutory rules, alongside statutory notifications to CERT-In under Indian cybersecurity directives.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Data Protection Addendum (DPA) */}
              <div id="dpa-terms" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Data Protection Addendum (DPA) for B2B Partners & Processors
                  </h2>
                </div>
                <div className="space-y-4 text-sm">
                  <p>
                    This Section constitutes our standardized <strong>Data Protection Addendum (&quot;DPA&quot;)</strong> applicable to all commercial relationships, PCD franchise agreements, third-party logistics (3PL) partners, IT system providers, and institutional vendors who process digital personal data on behalf of or jointly with Icon Drugs.
                  </p>

                  <div className="border border-slate-200 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                      6.1 Roles & Division of Responsibilities
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Except where explicitly specified otherwise in a bilateral agreement: (a) <strong>Icon Drugs</strong> acts as the Data Fiduciary (or Data Controller); and (b) any technology service provider, cloud hosting operator, or logistics partner acting on our behalf operates as a <strong>&quot;Data Processor&quot;</strong> bound strictly by documented processing instructions and DPDP Act provisions.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                      6.2 Technical & Organizational Measures (TOMs)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Both Icon Drugs and its authorized B2B processors covenant to implement and maintain stringent Technical and Organizational Measures, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                      <li>End-to-end HTTPS/TLS 1.3 transit encryption and AES-256 at-rest database encryption;</li>
                      <li>Zero-trust administrative privilege segregation and multi-factor authentication (MFA);</li>
                      <li>Regular vulnerability assessment, penetration testing (VAPT), and patch management schedules;</li>
                      <li>Strict employee non-disclosure covenants and statutory confidentiality obligations.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                      6.3 Sub-processors & Downstream Governance
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Data Processors shall not engage any sub-processor without prior written authorization from Icon Drugs. Where authorized, the processor must enforce contractual data protection covenants at least as rigorous as those set forth in this DPA. The processor remains fully liable for the acts and omissions of any downstream sub-processor.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                      6.4 Cross-Border Data Transfers (Section 16 DPDP Act)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Personal data processed under these Terms shall not be transferred to any foreign country or territory that has been restricted or blacklisted by the Central Government of India pursuant to Section 16 of the DPDP Act. Any international transfers to cloud infrastructure in overseas jurisdictions must satisfy statutory adequacy conditions and applicable Standard Contractual Clauses (SCCs).
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                      6.5 Security Incidents & 48-Hour Notification
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Any commercial or technology partner experiencing a verified or suspected personal data breach impacting Icon Drugs data must provide written notification to our Data Protection Office within <strong>48 hours</strong> of detection, detailing affected records, containment measures, and remediation steps.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7. Pharmacovigilance & Drug Safety */}
              <div id="pharmacovigilance" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Pharmacovigilance & Mandatory Safety Disclosures
                  </h2>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    Icon Drugs complies with mandatory post-marketing surveillance and pharmacovigilance directives issued by the <strong>Central Drugs Standard Control Organisation (CDSCO)</strong> and the <strong>Pharmacovigilance Programme of India (PvPI)</strong>.
                  </p>
                  <p className="text-slate-600">
                    If you submit Adverse Drug Event (ADE), adverse reaction, product quality complaint, or batch anomaly disclosures through this Portal:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>
                      <strong>Statutory Override of Erasure:</strong> Pharmacovigilance safety data is required by law to be archived for statutory multi-year safety monitoring periods. Under Section 7 and Section 8(7) of the DPDP Act, statutory retention mandates override general rights of data erasure for the duration prescribed under national drug safety regulations.
                    </li>
                    <li>
                      <strong>Data Minimization & Anonymization:</strong> Patient identifiers are sanitized and pseudonymized prior to mandatory transmission to Indian health regulators or national pharmacovigilance databases.
                    </li>
                    <li>
                      <strong>Direct Contact for Safety:</strong> Critical adverse reactions should be communicated directly to our Pharmacovigilance Desk at <a href="mailto:safety@icondrugs.com" className="text-[#00477F] font-semibold underline">safety@icondrugs.com</a> or our regulatory desk.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 8. Intellectual Property & Formulation Data */}
              <div id="intellectual-property" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Intellectual Property, Trademarks & Monograph Rights
                  </h2>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    All registered and unregistered trademarks, brand names (including Prenerve, Icomet, Icon-specific formulations), scientific monographs, chemical structures, packaging livery, source code, visual UI layouts, and clinical summaries displayed across this Portal are the exclusive intellectual property of <strong>{companyData.legalName}</strong> or its licensors.
                  </p>
                  <p className="text-slate-600">
                    Users are granted a non-exclusive, revocable, non-transferable, limited license to view and download technical monographs solely for professional clinical evaluation or legitimate procurement appraisal. Any automated extraction, web scraping, data harvesting, systematic reproduction, or training of generative artificial intelligence models using proprietary formulation dossiers or monograph text without our prior express written permission is strictly prohibited.
                  </p>
                </div>
              </div>

              {/* 9. Prohibited Conduct & Cyber Integrity */}
              <div id="acceptable-use" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-red-800 font-bold text-xs">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Prohibited Conduct & Cyber Integrity (IT Act Rules)
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    Pursuant to Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Information Technology Act, 2000, you covenant that you shall not host, display, upload, modify, publish, transmit, or share any information on or through this Portal that:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Belongs to another person and to which you do not have any legitimate right;</li>
                    <li>Is defamatory, obscene, invasive of another&apos;s privacy, hateful, or racially or ethnically objectionable;</li>
                    <li>Impersonates any registered medical doctor, hospital administrator, procurement authority, or corporate executive;</li>
                    <li>Submits falsified, forged, or expired wholesale drug licenses, Form 20B/21B documents, or fraudulent GSTIN certificates;</li>
                    <li>Contains software viruses, trojans, worms, logic bombs, or code designed to disrupt, overload, or compromise the integrity of our digital infrastructure;</li>
                    <li>Threatens the unity, integrity, defense, security, or sovereignty of India, friendly relations with foreign states, or public order.</li>
                  </ul>
                </div>
              </div>

              {/* 10. Disclaimer of Warranties & Limitation of Liability */}
              <div id="liability-warranties" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Disclaimer of Warranties & Limitation of Liability
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    <strong>&quot;AS-IS&quot; PROVISION:</strong> This Portal, its content, monograph summaries, and contact inquiry services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express, statutory, or implied, including warranties of merchantability, fitness for a particular clinical or commercial purpose, and non-infringement.
                  </p>
                  <p>
                    <strong>LIMITATION OF LIABILITY:</strong> To the maximum extent permitted under applicable law, Icon Drugs, its directors, officers, employees, research associates, and affiliates shall not be liable for any indirect, incidental, punitive, special, or consequential damages, loss of business profits, goodwill, clinical interruption, or data corruption arising from or relating to your use of, or inability to use, this Portal or reliance on any monograph data.
                  </p>
                </div>
              </div>

              {/* 11. Indemnification */}
              <div id="indemnity" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Indemnification
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    You agree to defend, indemnify, and hold harmless {companyData.legalName}, its directors, managers, and agents against any claims, losses, statutory penalties, damages, liabilities, costs, and expenses (including reasonable legal counsel fees) arising out of or related to: (a) your violation of these Terms; (b) your submission of falsified credentials, unauthorized third-party personal data, or fraudulent drug licensing records; (c) any violation of the DPDP Act or IT Act attributable to your actions; or (d) any unlawful commercial re-distribution of our products.
                  </p>
                </div>
              </div>

              {/* 12. Statutory Grievance Redressal Mechanism */}
              <div id="grievance-redressal" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-bold text-xs">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Grievance Officer & Statutory Redressal Mechanism
                  </h2>
                </div>
                <div className="space-y-4 text-sm">
                  <p>
                    Pursuant to <strong>Section 13 of the Digital Personal Data Protection Act, 2023</strong> and Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Icon Drugs has designated a dedicated Grievance Officer and Data Protection Officer (DPO) to receive, acknowledge, and redress all user grievances and data principal requests.
                  </p>

                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-200/80 rounded-2xl p-6 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#00477F]" />
                      Designated Grievance & Data Protection Office
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="text-slate-500 block text-xs">Designated Officer</span>
                        <strong className="text-slate-900 font-medium">Head of Legal, Regulatory & Data Compliance</strong>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-500 block text-xs">Entity</span>
                        <strong className="text-slate-900 font-medium">{companyData.legalName}</strong>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-500 block text-xs">Physical Address</span>
                        <p className="text-slate-700">{companyData.address}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-slate-500 block text-xs">Statutory Redressal Desk</span>
                        <a href="mailto:grievance@icondrugs.com" className="text-[#00477F] font-semibold underline block">
                          grievance@icondrugs.com
                        </a>
                        <span className="text-slate-500 text-xs">Direct Office: {companyData.phone}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-blue-100 text-xs text-slate-600 space-y-1.5">
                      <p>
                        <strong>Statutory Resolution Timelines:</strong> Our Grievance Office will acknowledge receipt of your communication within forty-eight (48) hours and work to resolve substantive grievances expeditiously, not exceeding thirty (30) days from receipt.
                      </p>
                      <p>
                        <strong>Escalation to Data Protection Board of India (DPBI):</strong> If your personal data grievance remains unresolved within the statutory period or you are unsatisfied with our response, you have the statutory right under Section 13(3) of the DPDP Act to submit an appeal to the <strong>Data Protection Board of India (DPBI)</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 13. Governing Law & Jurisdiction */}
              <div id="governing-law" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Governing Law, Arbitration & Jurisdiction
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    These Terms, the incorporated DPA, and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>, without giving effect to conflict of law principles.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Portal shall be subject to the <strong>exclusive territorial jurisdiction of the competent courts of law situated at Nagpur, Maharashtra, India</strong>.
                  </p>
                </div>
              </div>

              {/* 14. Modifications, Severability & Entire Agreement */}
              <div id="miscellaneous" className="scroll-mt-28 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#00477F] font-bold text-xs">
                    14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Modifications, Severability & Entire Agreement
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    <strong>Revisions:</strong> Icon Drugs reserves the right to amend, update, or modify these Terms and the DPA at any time to reflect legislative updates (including new statutory rules notified under the DPDP Act), technological evolutions, or operational changes. The &quot;Effective Date&quot; at the top of this document will reflect the date of the latest update. Continued use of the Portal following any updates constitutes acceptance of the amended terms.
                  </p>
                  <p>
                    <strong>Severability:</strong> If any provision of these Terms is determined by a competent authority or court of law to be invalid, unlawful, or unenforceable, such provision shall be severed to that extent, and the remaining provisions shall continue in full force and effect.
                  </p>
                  <p>
                    <strong>Entire Agreement:</strong> These Terms of Use, along with our Privacy Policy and Medical Disclaimer, constitute the entire agreement between you and Icon Drugs regarding digital access to this Portal.
                  </p>
                </div>
              </div>

              {/* Quick Contact Bar */}
              <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Have Questions Regarding Our Terms or Data Governance?</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our compliance counsel and corporate desk are available for institutional partners and distributors.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00477F] text-white text-xs font-semibold hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    Contact Legal Desk
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Privacy Policy
                  </Link>
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
