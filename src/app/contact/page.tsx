import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickContactForm from "@/components/contact/QuickContactForm";
import { companyData } from "@/data/siteData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  ChevronRight,
  ShieldCheck,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Icon Drugs Private Limited | Corporate Office & Procurement Desk | Nagpur",
  description:
    "Get in touch with Icon Drugs Private Limited. Contact our corporate headquarters in Nagpur, Maharashtra for PCD pharma franchise distribution, hospital tenders, institutional procurement, and contract manufacturing.",
  keywords: [
    "Contact Icon Drugs",
    "Icon Drugs Nagpur contact number",
    "Icon Drugs office address",
    "pharma company Nagpur address",
    "pharma distributor contact Maharashtra",
    "Icon Drugs email",
  ],
  alternates: {
    canonical: "https://icondrugs.com/contact",
  },
  openGraph: {
    title: "Contact Icon Drugs Private Limited | Nagpur, Maharashtra",
    description:
      "Official contact directory and procurement hotline for Icon Drugs Private Limited in Nagpur, Maharashtra, India.",
    url: "https://icondrugs.com/contact",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Corporate Contact Desk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Icon Drugs Private Limited",
    description:
      "Headquarters and Priority Procurement Desk in Nagpur, Maharashtra.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://icondrugs.com/contact#webpage",
        "url": "https://icondrugs.com/contact",
        "name": "Contact Icon Drugs Private Limited",
        "description":
          "Official contact information and location coordinates for Icon Drugs Private Limited headquarters in Nagpur, Maharashtra.",
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
        "mainEntity": {
          "@id": "https://icondrugs.com/#localbusiness",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/contact#breadcrumb",
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
            "name": "Contact Us",
            "item": "https://icondrugs.com/contact",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
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
              <span>Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Connect with Icon Drugs
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Whether you are an authorized healthcare distributor, hospital procurement lead, or clinician seeking formulation monographs, our Central India desk is at your disposal.
            </p>
          </div>
        </section>

        {/* Contact Info Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005EB1] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Corporate Headquarters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ICON DRUGS PRIVATE LIMITED<br />
                Pharma Industrial Complex<br />
                Nagpur, Maharashtra 440001, India
              </p>
              <div className="pt-2 text-xs font-semibold text-[#005EB1]">
                Central India Logistics Corridor
              </div>
            </div>

            {/* Telephone Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F87901] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Direct Procurement Hotlines
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct Desk: <a href="tel:+917122940128" className="font-bold text-slate-900 hover:text-[#005EB1]">+91 712 294 0128</a><br />
                Priority WhatsApp: <a href="tel:+919823044000" className="font-bold text-slate-900 hover:text-[#005EB1]">+91 98230 44000</a>
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-500">
                Mon – Sat: 09:00 AM – 06:00 PM IST
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Electronic Correspondence
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Institutional: <a href="mailto:business@icondrugs.com" className="font-bold text-[#005EB1] hover:underline">business@icondrugs.com</a><br />
                Corporate: <a href="mailto:info@icondrugs.com" className="font-bold text-[#005EB1] hover:underline">info@icondrugs.com</a>
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-600">
                Guaranteed 24-Hour Business Response
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Form & Central Desk Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <QuickContactForm />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Corporate Direct Desks
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct communications channels for clinicians, distributors & regulatory leads.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#005EB1]">
                      PCD Franchise & Monopoly Inquiries
                    </span>
                    <p className="font-bold text-slate-900">
                      Email: <a href="mailto:contact@icondrugs.com" className="text-[#005EB1] hover:underline">contact@icondrugs.com</a>
                    </p>
                    <p className="text-slate-500 text-xs">
                      Territory reservation for Maharashtra, MP, Chhattisgarh & Pan-India.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F87901]">
                      Instant WhatsApp Hotline
                    </span>
                    <p className="font-bold text-slate-900">
                      Mobile: <a href="https://wa.me/919823044000" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-[#005EB1]">+91 98230 44000</a>
                    </p>
                    <p className="text-slate-500 text-xs">
                      Direct escalation to Commercial General Manager.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                      Hours of Operation
                    </span>
                    <p className="font-bold text-slate-900">
                      Mon – Sat: 09:00 AM – 06:00 PM IST
                    </p>
                    <p className="text-slate-500 text-xs">
                      Closed on Sundays & National Gazetted Holidays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Office Inquiries & Fast Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-slate-900 to-[#002747] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F87901] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Commercial Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading leading-tight">
                Looking for District Monopoly Rights or Hospital Bulk Tenders?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                We have dedicated desks for PCD pharma franchise territory allocations, institutional hospital supply agreements, and third-party contract manufacturing. Use our specialized interactive enquiry form for fast clearance.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/business-enquiry"
                  className="px-8 py-4 rounded-xl bg-[#F87901] hover:bg-[#e06c00] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                >
                  <span>Open Business Enquiry Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 inline-flex items-center gap-2"
                >
                  <span>Browse Product Directory</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
