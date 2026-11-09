import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import { companyData } from "@/data/siteData";
import {
  Truck,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  BadgeCheck,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical Distribution & PCD Supply Nagpur | Icon Drugs",
  description:
    "Authorized pharmaceutical distribution, PCD franchise with district monopoly rights, and hospital supply tenders across Maharashtra and Central India by Icon Drugs Private Limited, Nagpur.",
  keywords: [
    "Pharmaceutical distributors in Nagpur",
    "Pharmaceutical wholesale suppliers Nagpur",
    "Pharma suppliers in Nagpur",
    "PCD pharma franchise Maharashtra",
    "Pharma wholesale distribution Nagpur",
    "Hospital medicine suppliers Nagpur",
    "Pharma monopoly rights Vidarbha",
    "Icon Drugs distribution",
  ],
  alternates: {
    canonical: "https://icondrugs.com/pharmaceutical-distribution-supply",
  },
  openGraph: {
    title: "Pharmaceutical Distribution & PCD Supply Nagpur | Icon Drugs",
    description:
      "Exclusive district monopoly terms, institutional supply chains, and prompt consignment dispatch from Nagpur, Maharashtra.",
    url: "https://icondrugs.com/pharmaceutical-distribution-supply",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Pharmaceutical Distribution & Supply",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Distribution & PCD Supply | Icon Drugs",
    description:
      "District monopoly rights, marketing collaterals, and hospital supply tenders across Central India.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function PharmaceuticalDistributionSupplyPage() {
  const distributionPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://icondrugs.com/pharmaceutical-distribution-supply#webpage",
        "url": "https://icondrugs.com/pharmaceutical-distribution-supply",
        "name": "Pharmaceutical Distribution & PCD Supply Nagpur | Icon Drugs",
        "description":
          "Commercial framework for PCD pharma franchise distribution and wholesale hospital supply by Icon Drugs Private Limited.",
        "isPartOf": {
          "@id": "https://icondrugs.com/#website",
        },
        "about": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/pharmaceutical-distribution-supply#breadcrumb",
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
            "name": "Distribution & Supply",
            "item": "https://icondrugs.com/pharmaceutical-distribution-supply",
          },
        ],
      },
    ],
  };

  const distributionPillars = [
    {
      title: "District Monopoly Rights",
      desc: "Strictly enforced territorial protection. No overlapping stockists or distributor undercutting within your allotted district territory.",
      icon: BadgeCheck,
    },
    {
      title: "Promotional & MR Collaterals",
      desc: "Comprehensive marketing inputs provided: spiral visual aids, doctor leave-behinds, sample catch covers, order books, and product glossaries.",
      icon: FileText,
    },
    {
      title: "Rapid Dispatch Timelines",
      desc: "Consignments dispatched within 24 to 48 hours from our central warehouse via surface cargo, express express parcels, and temperature-controlled freight.",
      icon: Clock,
    },
    {
      title: "Hospital & Institutional Tenders",
      desc: "Approved supply capabilities for private multispecialty nursing homes, charitable trust hospitals, and institutional healthcare supply panels.",
      icon: Building2,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(distributionPageJsonLd) }}
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
              <span>Distribution &amp; Supply</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Pharmaceutical Distribution &amp; PCD Supply
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Partner with a reliable pharmaceutical house. Icon Drugs Private Limited offers contractual district monopoly rights, high-potency DCGI formulations, and robust wholesale logistics managed from Nagpur, Maharashtra.
            </p>
          </div>
        </section>

        {/* Pillars Snapshot */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {distributionPillars.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F87901] flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Distribution Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005EB1] text-xs font-black uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                <span>Distributor Partnership Terms</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight leading-snug">
                Building Sustainable, Long-Term Pharma Agencies
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                At Icon Drugs Private Limited, our commercial philosophy focuses on distributor prosperity. We understand that marketing prescription medicines requires consistent product availability, zero cross-border territory poaching, and dependable batch-to-batch chemical efficacy.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Our portfolio spans established clinical brands such as <strong>Prenerve</strong> (peripheral neuropathy), <strong>APAR &amp; Serek-N</strong> (musculoskeletal and acute inflammation), <strong>Rabicon-DSR</strong> (gastroenterology), and <strong>Recoff-DX</strong> (cough and cold). We welcome ethical distributors holding valid Drug Licenses (Form 20B/21B) and GST registration.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                {[
                  "Accessible starting investment per district without non-refundable deposits",
                  "Contractual district monopoly agreement protecting your local doctor outreach",
                  "Full marketing collaterals and physician sample catch covers provided",
                  "Direct commercial coordination from our Dharampeth, Nagpur operations desk",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Apply for Territory Monopoly
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check district availability across Maharashtra, Madhya Pradesh, Chhattisgarh, and other Indian states.
              </p>

              <div className="space-y-3 text-xs text-slate-700 bg-white p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#005EB1] shrink-0" />
                  <span><strong>Hub:</strong> Dharampeth, Nagpur – 440010</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#005EB1] shrink-0" />
                  <span><strong>WhatsApp / Direct:</strong> +91 98230 44000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#005EB1] shrink-0" />
                  <span><strong>Institutional Email:</strong> business@icondrugs.com</span>
                </div>
              </div>

              <Link
                href="/business-enquiry"
                className="inline-flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white font-bold text-sm transition-colors shadow-sm gap-2"
              >
                <span>Check District Availability &amp; Apply</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
