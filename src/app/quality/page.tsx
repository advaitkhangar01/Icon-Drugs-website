import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QualitySection from "@/components/sections/QualitySection";
import CertificationsRibbon from "@/components/sections/CertificationsRibbon";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Microscope,
  FileCheck,
  ThermometerSnowflake,
  FlaskConical,
  Activity,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance, WHO-GMP & ISO 9001:2015 Standards",
  description:
    "Discover the rigorous quality assurance protocols, WHO-GMP compliant facilities, and GLP-certified analytical laboratories behind every batch manufactured by Icon Drugs Private Limited, Nagpur.",
  keywords: [
    "WHO-GMP pharma manufacturing",
    "ISO 9001:2015 certified pharma",
    "GLP analytical laboratories",
    "DCGI approved formulations",
    "pharmaceutical quality control Nagpur",
    "HPLC assay testing pharma",
    "stability testing ICH guidelines",
  ],
  alternates: {
    canonical: "https://icondrugs.com/quality",
  },
  openGraph: {
    title: "Quality Assurance & WHO-GMP Standards | Icon Drugs",
    description:
      "End-to-end analytical validation, sterile batch processing, and global pharmacopeia compliance safeguarding every dose formulated by Icon Drugs Private Limited.",
    url: "https://icondrugs.com/quality",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Quality Control & WHO-GMP Standards",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Assurance & WHO-GMP Standards | Icon Drugs",
    description:
      "Validated chemical purity, ICH stability chambers, and certified GMP compliance in Nagpur, Maharashtra.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function QualityPage() {
  const qualityJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://icondrugs.com/quality#webpage",
        "url": "https://icondrugs.com/quality",
        "name": "Quality Assurance & Standards | Icon Drugs",
        "description":
          "Overview of WHO-GMP and ISO 9001:2015 certified pharmaceutical formulation quality management systems at Icon Drugs Private Limited.",
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/quality#breadcrumb",
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
            "name": "Quality Standards",
            "item": "https://icondrugs.com/quality",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qualityJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Quality Assurance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Quality Validated at Every Stage of Synthesis
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              From raw API chromatographic assaying to cleanroom HVAC atmospheric control and stability aging, Icon Drugs Private Limited enforces uncompromising Good Manufacturing Practices.
            </p>
          </div>
        </section>

        {/* Certifications Ribbon */}
        <CertificationsRibbon />

        {/* Analytical Testing Workflow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005EB1] text-xs font-black uppercase tracking-wider">
              <Microscope className="w-3.5 h-3.5" />
              <span>Analytical Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Three-Tier Quality Assurance Architecture
            </h2>
            <p className="text-base text-slate-600">
              No product is released for commercial distribution without multi-point clearance from our independent Quality Assurance (QA) and Quality Control (QC) units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#005EB1] flex items-center justify-center">
                <FlaskConical className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#005EB1]">
                  Tier 1 / Inbound
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Raw API & Excipient Validation
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every shipment of active pharmaceutical ingredients is quarantined and subjected to identification, assay testing, related substances chromatography, and heavy metal screening against Indian Pharmacopoeia standards.
              </p>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>HPLC Purity Profiling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Karl Fischer Water Titration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F87901] flex items-center justify-center">
                <Activity className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F87901]">
                  Tier 2 / In-Process
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  In-Process Quality Controls (IPQC)
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                During granulation, compression, encapsulation, and liquid filling, real-time tests verify blend uniformity, tablet hardness, friability, disintegration time, and fill volume tolerances.
              </p>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Multi-Point Hardness & Friability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated Leak Testing in Blisters</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileCheck className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Tier 3 / Finished Goods
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Release & Retention Protocols
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Finished consignments receive a complete Certificate of Analysis (COA) signed by qualified analytical heads. Retention samples of every single batch are preserved in controlled stability vaults for shelf-life audits.
              </p>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ICH Q1A Stability Chambers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Batch Manufacturing Record (BMR) Audit</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Existing Full Quality Philosophy Component */}
        <QualitySection />

        {/* Call to Action */}
        <PartnershipCTA />
      </main>
      <Footer />
    </>
  );
}
