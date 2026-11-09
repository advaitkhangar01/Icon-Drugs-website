import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import { productsData, companyData } from "@/data/siteData";
import {
  Factory,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Layers,
  FlaskConical,
  Sparkles,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical Manufacturing Company in Maharashtra | Icon Drugs",
  description:
    "Icon Drugs Private Limited is an established pharmaceutical manufacturing company in Maharashtra. Founded in 2002 in Nagpur, formulating oral solids, liquids, injectables, and topical therapies with state-wide distribution.",
  keywords: [
    "Pharmaceutical manufacturing company Maharashtra",
    "Pharmaceutical company Maharashtra",
    "Medicine manufacturing company Maharashtra",
    "Pharma manufacturers in Maharashtra",
    "Third party pharma manufacturing Maharashtra",
    "Contract pharmaceutical manufacturing Nagpur",
    "Pharma formulations Maharashtra",
    "Icon Drugs Maharashtra",
  ],
  alternates: {
    canonical: "https://icondrugs.com/pharmaceutical-manufacturing-maharashtra",
  },
  openGraph: {
    title: "Pharmaceutical Manufacturing Company in Maharashtra | Icon Drugs",
    description:
      "Formulation manufacturing, DCGI-approved medicines, and contract manufacturing solutions across Maharashtra.",
    url: "https://icondrugs.com/pharmaceutical-manufacturing-maharashtra",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Pharmaceutical Manufacturing Maharashtra",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Manufacturing Company in Maharashtra | Icon Drugs",
    description:
      "Solid oral, liquid, and injectable manufacturing with state-wide supply chains in Maharashtra.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function PharmaceuticalManufacturingMaharashtraPage() {
  const manufacturingPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://icondrugs.com/pharmaceutical-manufacturing-maharashtra#webpage",
        "url": "https://icondrugs.com/pharmaceutical-manufacturing-maharashtra",
        "name": "Pharmaceutical Manufacturing Company in Maharashtra | Icon Drugs",
        "description":
          "Overview of formulation manufacturing and pharmaceutical supply capabilities of Icon Drugs Private Limited in Maharashtra.",
        "isPartOf": {
          "@id": "https://icondrugs.com/#website",
        },
        "about": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/pharmaceutical-manufacturing-maharashtra#breadcrumb",
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
            "name": "Manufacturing in Maharashtra",
            "item": "https://icondrugs.com/pharmaceutical-manufacturing-maharashtra",
          },
        ],
      },
    ],
  };

  const dosageForms = [
    {
      title: "Solid Oral Dosage (Tablets)",
      desc: "Uncoated, film-coated, enteric-coated (EC), and sustained-release (SR) formulations including APAR, Serek-N, Recoff, and Allerkast.",
      icon: Layers,
    },
    {
      title: "Encapsulation (Hard & Softgel)",
      desc: "High-grade Alu-Alu packed hard gelatin capsules and nutrient-dense softgels such as the Prenerve and Precal series.",
      icon: FlaskConical,
    },
    {
      title: "Liquid Orals & Syrups",
      desc: "Homogeneous oral suspensions and antitussive syrups formulated with calibrated measuring dispensers for pediatric and adult care.",
      icon: Sparkles,
    },
    {
      title: "Topical Formulations & Gels",
      desc: "Non-greasy deep-penetrating topical analgesics engineered for musculoskeletal pain relief and inflammatory conditions.",
      icon: Factory,
    },
  ];

  const districtsServed = [
    "Nagpur",
    "Pune",
    "Mumbai & MMR",
    "Nashik",
    "Chhatrapati Sambhajinagar (Aurangabad)",
    "Amravati",
    "Akola",
    "Chandrapur",
    "Kolhapur",
    "Solapur",
    "Jalgaon",
    "Nanded",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturingPageJsonLd) }}
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
              <span>Maharashtra Manufacturing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Pharmaceutical Manufacturing in Maharashtra
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Serving India’s most robust industrial and healthcare state. Icon Drugs Private Limited develops, manufactures, and supplies DCGI-approved formulations engineered for clinical bioequivalence and patient safety.
            </p>
          </div>
        </section>

        {/* Manufacturing Strengths Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dosageForms.map((df, idx) => {
                const IconComp = df.icon;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005EB1] flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {df.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {df.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Manufacturing & State Supply Scope */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F87901] text-xs font-black uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" />
                <span>Formulation Standards &amp; Controls</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight leading-snug">
                Engineered Formulations for Clinicians and Healthcare Institutions
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                As a Maharashtra-registered corporate entity (CIN: U24231MH2002PTC134479), Icon Drugs Private Limited has built its reputation on manufacturing integrity. Every batch formulated undergoes strict protocol checkpoints:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">API Assay &amp; Pharmacopeial Verification</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Raw active pharmaceutical ingredients (APIs) sourced exclusively from audited suppliers conforming to Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), and USP specifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dissolution Kinetics &amp; Bioavailability</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Batch-wise testing of disintegration, enteric release profiles, and dissolution rates to assure predictable therapeutic absorption in clinical use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Packaging Integrity &amp; Tropical Stability</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Moisture-barrier Alu-Alu and premium blister laminates designed to preserve molecular potency across Zone IVb tropical climatic zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                State-Wide Maharashtra Distribution
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Icon Drugs provides streamlined supply chains and district-level distribution rights across Maharashtra’s healthcare markets:
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {districtsServed.map((dist, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-200 text-slate-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#005EB1] shrink-0" />
                    <span>{dist}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-900">Commercial Inquiries:</strong> Contact our Dharampeth, Nagpur desk for loan license manufacturing, institutional tenders, or PCD distribution.
                </div>
                <Link
                  href="/business-enquiry"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#F87901] hover:bg-[#e06c00] text-white font-bold text-sm transition-colors shadow-sm gap-2"
                >
                  <span>Submit Manufacturing Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
