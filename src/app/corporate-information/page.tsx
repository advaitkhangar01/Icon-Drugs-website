import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import { companyData } from "@/data/siteData";
import {
  Building2,
  MapPin,
  Calendar,
  UserCheck,
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
  FileText,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Information & Company Facts | Icon Drugs Private Limited",
  description:
    "Verified corporate profile of Icon Drugs Private Limited (CIN: U24231MH2002PTC134479). Learn about our incorporation date, leadership, Nagpur business address, product categories, and manufacturing capabilities.",
  keywords: [
    "Icon Drugs Private Limited corporate information",
    "Icon Drugs CIN U24231MH2002PTC134479",
    "Icon Drugs director Umesh Dange",
    "Icon Drugs Nagpur address",
    "Icon Drugs incorporation date",
    "pharma company Nagpur Maharashtra",
    "who is Icon Drugs",
  ],
  alternates: {
    canonical: "https://icondrugs.com/corporate-information",
  },
  openGraph: {
    title: "Corporate Information & Company Facts | Icon Drugs Private Limited",
    description:
      "Factual corporate profile, leadership, incorporation details, and manufacturing overview for Icon Drugs Private Limited.",
    url: "https://icondrugs.com/corporate-information",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Private Limited Corporate Facts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Information | Icon Drugs Private Limited",
    description:
      "Factual corporate profile and verified business data of Icon Drugs Private Limited, Nagpur.",
    images: ["/icon-brand-mark.png"],
  },
};

const corporateQuestions = [
  {
    q: "Who is Icon Drugs Private Limited?",
    a: "Icon Drugs Private Limited is an Indian pharmaceutical company engaged in the manufacturing, marketing, and distribution of prescription pharmaceutical formulations. The company partners with authorized healthcare stockists, hospitals, and ethical PCD franchise distributors across India.",
  },
  {
    q: "Where is Icon Drugs located?",
    a: "The commercial business operations of Icon Drugs Private Limited are located at M2, Ved Solitaire, 5th Cross B St., Cement Road, Dharampeth, Nagpur, Maharashtra – 440010. Its official registered office as filed with the Ministry of Corporate Affairs (MCA) is at Plot No. 1, Flat No. 201, Sai Darshan Complex, Vivekanand Nagar, Wardha Road, Nagpur, Maharashtra – 440015.",
  },
  {
    q: "What does Icon Drugs manufacture?",
    a: "Icon Drugs manufactures and supplies diverse DCGI-approved pharmaceutical dosage forms, including oral solid tablets (uncoated, film-coated, enteric-coated, and sustained-release), hard and soft gelatin capsules, liquid oral suspensions and cough syrups, sterile injectables, and topical analgesic gels.",
  },
  {
    q: "What are its key product categories and brand ranges?",
    a: "Key therapeutic categories include: (1) Neurology & Neuropathic Pain (Prenerve Caps, Prenerve-NT, Prenerve Forte, Prenerve Inj, Prenerve Gel); (2) Orthopedics & Musculoskeletal Care (APAR, APAR-S, APAR-MR, CT-Flam, Serek-D, Serek-N); (3) Gastroenterology (Pandom, Pandom-SR, Rabicon, Rabicon-L); (4) Respiratory & Pulmonology (Recoff, Recoff-DX, Allerkast); (5) Bone Health & Nutrition (Precal Softgel, Argicon, Fobiron, Lycotox); and (6) Anti-Infectives & Urology (Nitobact-SR, Ocon-OZ, Dermicon-BN).",
  },
  {
    q: "When was the company incorporated?",
    a: "Icon Drugs Private Limited was incorporated on 8 January 2002 under the Indian Companies Act, registered with the Registrar of Companies (RoC Mumbai / Nagpur) with Corporate Identification Number (CIN) U24231MH2002PTC134479.",
  },
  {
    q: "Who is the director and leadership of Icon Drugs?",
    a: "Mr. Umesh Dange serves as the founding Director of Icon Drugs Private Limited (appointed at incorporation on 8 January 2002). Mr. Sushrut Dange is the Business Owner and representative directing commercial strategy, territory expansion, and distribution management.",
  },
  {
    q: "What are its manufacturing and quality capabilities?",
    a: "Icon Drugs formulates in licensed, quality-compliant pharmaceutical manufacturing facilities adhering to Good Manufacturing Practices. Batch releases are subject to pharmacopeial assay testing (IP/BP/USP), dissolution profiling, content uniformity validation, and accelerated stability testing to assure clinical bioequivalence.",
  },
  {
    q: "How can businesses and distributors contact Icon Drugs?",
    a: "Businesses can contact the corporate procurement desk via direct telephone / WhatsApp at +91 98230 44000, via email at business@icondrugs.com or info@icondrugs.com, or through our online commercial portal at https://icondrugs.com/business-enquiry.",
  },
];

export default function CorporateInformationPage() {
  const corporateJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://icondrugs.com/corporate-information#webpage",
        "url": "https://icondrugs.com/corporate-information",
        "name": "Corporate Information & Facts | Icon Drugs Private Limited",
        "description":
          "Verified corporate facts, corporate governance, incorporation data, and operations overview of Icon Drugs Private Limited.",
        "isPartOf": {
          "@id": "https://icondrugs.com/#website",
        },
        "about": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://icondrugs.com/corporate-information#faq",
        "mainEntity": corporateQuestions.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/corporate-information#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://icondrugs.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Corporate Information",
            "item": "https://icondrugs.com/corporate-information",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Corporate Governance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Corporate Information &amp; Entity Profile
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Official reference dataset detailing legal identity, corporate leadership, operational facilities, and therapeutic manufacturing capabilities of Icon Drugs Private Limited.
            </p>
          </div>
        </section>

        {/* Corporate Factsheet Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <h2 className="text-xl font-bold text-slate-900 font-heading mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#005EB1]" />
              <span>Key Entity Facts</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Legal Name</span>
                <div className="font-bold text-slate-900">ICON DRUGS PRIVATE LIMITED</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">CIN</span>
                <div className="font-bold text-slate-900 font-mono">U24231MH2002PTC134479</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Incorporation Date</span>
                <div className="font-bold text-slate-900">8 January 2002</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">RoC Jurisdiction</span>
                <div className="font-bold text-slate-900">RoC Mumbai / Nagpur</div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Corporate Q&A Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#005EB1] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Direct Answers to Corporate Queries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Frequently Asked Questions About Icon Drugs
            </h2>
            <p className="text-sm text-slate-600">
              Clear, transparent, and authoritative answers compiled for healthcare partners, institutional auditors, and search engine crawlers.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {corporateQuestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3"
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#005EB1] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    Q{idx + 1}
                  </span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-10">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Direct Desk Banner */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 max-w-4xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Official Corporate Contact Channels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Telephone / WhatsApp</span>
                <p className="font-bold text-slate-900">+91 98230 44000</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Institutional Email</span>
                <p className="font-bold text-slate-900">business@icondrugs.com</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Postal Code</span>
                <p className="font-bold text-slate-900">440010 (Dharampeth, Nagpur)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <PartnershipCTA />
      </main>
      <Footer />
    </>
  );
}
