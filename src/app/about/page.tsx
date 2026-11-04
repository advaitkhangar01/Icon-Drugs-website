import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MilestonesTimeline from "@/components/sections/MilestonesTimeline";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import { companyData } from "@/data/siteData";
import {
  ShieldCheck,
  Building2,
  Award,
  Users,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Icon Drugs Private Limited | 25+ Years Pharma Heritage | Nagpur",
  description:
    "Learn about Icon Drugs Private Limited — founded in 2002 in Nagpur, Maharashtra. 25+ years of uncompromised pharmaceutical precision, WHO-GMP compliant facilities, and dedicated patient care across India.",
  keywords: [
    "About Icon Drugs",
    "Icon Drugs Private Limited",
    "pharma company in Nagpur",
    "pharma companies in Maharashtra",
    "WHO-GMP pharma manufacturer",
    "Icon Drugs leadership",
    "Icon Drugs history",
  ],
  alternates: {
    canonical: "https://icondrugs.com/about",
  },
  openGraph: {
    title: "About Icon Drugs Private Limited | 25+ Years of Pharmaceutical Excellence",
    description:
      "Established in 2002, Icon Drugs Private Limited has built a legacy of scientific integrity, clinical quality, and accessible healthcare headquartered in Nagpur, Maharashtra.",
    url: "https://icondrugs.com/about",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Private Limited Corporate Heritage",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Icon Drugs Private Limited",
    description:
      "Over two decades of precision manufacturing, patient-first ethics, and healthcare innovation.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://icondrugs.com/about#webpage",
        "url": "https://icondrugs.com/about",
        "name": "About Icon Drugs Private Limited",
        "description":
          "Corporate profile, 25-year operational history, leadership principles, and manufacturing infrastructure of Icon Drugs Private Limited.",
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
        "mainEntity": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/about#breadcrumb",
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
            "name": "About Us",
            "item": "https://icondrugs.com/about",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
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
              <span>About Us</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Two and a Half Decades of Unyielding Pharmaceutical Precision
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Founded in 2002 in Nagpur, Maharashtra, Icon Drugs Private Limited was built on an uncompromising principle: every batch formulated must embody the pinnacle of chemical purity, clinical bioequivalence, and patient safety.
            </p>
          </div>
        </section>

        {/* Corporate Profile Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Incorporated
                </span>
                <div className="text-3xl font-black text-slate-900 font-heading">2002</div>
                <p className="text-xs text-slate-600">Established in Nagpur, Maharashtra with a mission of affordable clinical excellence.</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Accreditation
                </span>
                <div className="text-3xl font-black text-[#005EB1] font-heading">WHO-GMP</div>
                <p className="text-xs text-slate-600">ISO 9001:2015 certified production lines and GLP-calibrated analytical labs.</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Formulation Reach
                </span>
                <div className="text-3xl font-black text-[#F87901] font-heading">25+ Portfolios</div>
                <p className="text-xs text-slate-600">Covering neurology, orthopedics, gastroenterology, and acute respiratory care.</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Headquarters
                </span>
                <div className="text-xl font-black text-slate-900 font-heading flex items-center gap-1.5 mt-2">
                  <MapPin className="w-5 h-5 text-[#005EB1] shrink-0" />
                  <span>Nagpur, MH</span>
                </div>
                <p className="text-xs text-slate-600">Strategic Central India logistics corridor connecting distributors nationwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Heritage & Mission */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005EB1] text-xs font-black uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Our Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight leading-snug">
                From Regional Beginnings to a Nationally Recognized Pharma House
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                When Icon Drugs began operations in 2002, the Indian pharmaceutical sector was entering a critical era of standardisation. Recognizing the vital need for high-quality, bioequivalent therapies at reasonable costs, our founders set out to build an ethical manufacturing platform in Nagpur.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Over the past 25 years, that commitment has never wavered. Today, Icon Drugs Private Limited partners with hundreds of authorized distributors, government hospital panels, and institutional procurement departments across Maharashtra, Madhya Pradesh, Chhattisgarh, and other key Indian states.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                {[
                  "Rigorous raw API auditing from DCGI-licensed bulk drug suppliers",
                  "Class 10,000 cleanroom solid oral & aseptic processing environments",
                  "Dedicated in-house pharmacovigilance and stability monitoring desks",
                  "Contractual district monopoly rights for our PCD franchise network",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3">
              <Image
                src="/backgrounds/lab-research.jpg"
                alt="Analytical chemists conducting HPLC assays inside Icon Drugs laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-8">
                <div className="text-white space-y-1">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#F87901]">
                    Quality Infrastructure
                  </div>
                  <div className="text-lg font-bold">
                    GLP Analytical Validation &amp; Spectrophotometry Suites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <MilestonesTimeline />

        {/* Leadership & Values */}
        <section className="bg-white py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                Core Organizational Pillars
              </h2>
              <p className="text-base text-slate-600">
                The governing ethical and operational standards that direct our scientific team and corporate governance every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#005EB1] flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Scientific Integrity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We formulate using pharmacopeially validated active ingredients (IP/BP/USP), ensuring exact dissolution kinetics and verifiable bioavailability in every batch.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F87901] flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Distributor Trust
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe in equitable, transparent commerce. Our PCD franchise partners receive contractual territory protection, timely dispatches, and genuine visual promotion tools.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Patient Centricity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Healthcare is ultimately human. From patient-friendly blister packaging to clear dosage labeling, our medications are calibrated so clinicians can prescribe with confidence.
                </p>
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
