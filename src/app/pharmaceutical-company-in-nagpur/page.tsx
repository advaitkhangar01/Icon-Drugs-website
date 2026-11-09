import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnershipCTA from "@/components/sections/PartnershipCTA";
import { productsData, companyData } from "@/data/siteData";
import {
  MapPin,
  Building2,
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Truck,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pharmaceutical Company in Nagpur | Icon Drugs Private Limited",
  description:
    "Icon Drugs Private Limited is an established pharmaceutical company in Nagpur, Maharashtra (Incorporated 2002, CIN: U24231MH2002PTC134479). Manufacturer and distributor of prescription formulations across neurology, orthopedics, gastroenterology, and respiratory care.",
  keywords: [
    "Pharmaceutical company in Nagpur",
    "Pharma companies in Nagpur",
    "Pharmaceutical manufacturers in Nagpur",
    "Pharmaceutical company near me",
    "Pharmaceuticals near me",
    "Pharma suppliers in Nagpur",
    "Pharmaceutical products Nagpur",
    "Icon Drugs Nagpur",
    "Icon Drugs Private Limited",
    "Pharma distributor Dharampeth Nagpur",
  ],
  alternates: {
    canonical: "https://icondrugs.com/pharmaceutical-company-in-nagpur",
  },
  openGraph: {
    title: "Pharmaceutical Company in Nagpur | Icon Drugs Private Limited",
    description:
      "Established in 2002 in Nagpur, Maharashtra. Formulation manufacturing, PCD franchise monopoly distribution, and institutional supply across Central India.",
    url: "https://icondrugs.com/pharmaceutical-company-in-nagpur",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Private Limited Nagpur Headquarters",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Company in Nagpur | Icon Drugs Private Limited",
    description:
      "Commercial office in Dharampeth, Nagpur. Discover 25+ DCGI formulations and distribution opportunities.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function PharmaceuticalCompanyInNagpurPage() {
  const localPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://icondrugs.com/pharmaceutical-company-in-nagpur#webpage",
        "url": "https://icondrugs.com/pharmaceutical-company-in-nagpur",
        "name": "Pharmaceutical Company in Nagpur | Icon Drugs Private Limited",
        "description":
          "Overview of Icon Drugs Private Limited as a leading pharmaceutical formulation company and distributor based in Nagpur, Maharashtra.",
        "isPartOf": {
          "@id": "https://icondrugs.com/#website",
        },
        "about": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/pharmaceutical-company-in-nagpur#breadcrumb",
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
            "name": "Pharmaceutical Company in Nagpur",
            "item": "https://icondrugs.com/pharmaceutical-company-in-nagpur",
          },
        ],
      },
    ],
  };

  const featuredLocalProducts = productsData.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localPageJsonLd) }}
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
              <span>Nagpur, Maharashtra</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl leading-tight">
              Pharmaceutical Company in Nagpur, Maharashtra
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
              Headquartered in Central India’s prime logistical hub, Icon Drugs Private Limited has served healthcare professionals, hospitals, and pharmaceutical distribution networks since its incorporation on 8 January 2002.
            </p>
          </div>
        </section>

        {/* Corporate Identity & Local Corridor Snapshot */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Established In Nagpur
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  8 Jan 2002
                </div>
                <p className="text-xs text-slate-600">
                  CIN: U24231MH2002PTC134479. Over two decades of verified corporate operations.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Commercial Address
                </span>
                <div className="text-lg sm:text-xl font-black text-[#005EB1] font-heading flex items-center gap-1.5 mt-1">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Dharampeth, Nagpur</span>
                </div>
                <p className="text-xs text-slate-600">
                  M2, Ved Solitaire, Cement Road, Dharampeth, Nagpur – 440010.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Product Scope
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#F87901] font-heading">
                  25+ Formulations
                </div>
                <p className="text-xs text-slate-600">
                  Oral solids (tablets &amp; capsules), liquids, injectables &amp; topical analgesics.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Distribution Reach
                </span>
                <div className="text-xl font-black text-slate-900 font-heading flex items-center gap-1.5 mt-1">
                  <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Central India &amp; Pan-India</span>
                </div>
                <p className="text-xs text-slate-600">
                  Fast dispatches through Nagpur’s air and ground logistics junction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Local Relevance Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005EB1] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Central India Pharmaceutical Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight leading-snug">
                Why Nagpur Serves as the Operational Core of Icon Drugs
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Nagpur is widely recognized as the geographical heart and premier transit crossroads of India. For a pharmaceutical enterprise like <strong>Icon Drugs Private Limited</strong>, operating out of Nagpur provides unparalleled strategic advantages: cold-chain and dry freight shipments reach distributors across Maharashtra, Madhya Pradesh, Chhattisgarh, and Telangana with minimal turnaround time.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Whether supplying authorized stockists in Vidarbha, tertiary hospital pharmacies in metropolitan hubs, or granting exclusive district monopoly rights to PCD franchise partners, our Nagpur operations desk coordinates procurement, quality documentation, and batch dispatch with precision.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                {[
                  "Registered with RoC Mumbai / Nagpur under CIN U24231MH2002PTC134479",
                  "Commercial desk located at M2, Ved Solitaire, Dharampeth, Nagpur – 440010",
                  "Broad therapeutic coverage: Neurology, Orthopedics, Gastroenterology & Respiratory",
                  "Dedicated support for stockists, hospitals, and ethical franchise partners",
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
                Corporate Governance &amp; Registry Details
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Legal Entity
                  </span>
                  <div className="font-bold text-slate-900">ICON DRUGS PRIVATE LIMITED</div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Corporate Leadership
                  </span>
                  <div className="font-semibold text-slate-900">
                    Umesh Dange – <span className="text-slate-600">Director</span>
                  </div>
                  <div className="font-semibold text-slate-900">
                    Sushrut Dange – <span className="text-slate-600">Business Owner &amp; Representative</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Corporate Office Locations
                  </span>
                  <p className="text-xs text-slate-600">
                    <strong>Business Office:</strong> M2, Ved Solitaire, 5th Cross B St., Cement Road, Dharampeth, Nagpur, Maharashtra – 440010
                  </p>
                  <p className="text-xs text-slate-600 pt-1">
                    <strong>Registered Office (MCA):</strong> Plot No. 1, Flat No. 201, Sai Darshan Complex, Vivekanand Nagar, Wardha Road, Nagpur – 440015
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white font-bold text-sm transition-colors shadow-sm gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Nagpur Desk</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Formulations Available from Nagpur */}
          <div className="space-y-8 pt-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#F87901] uppercase tracking-wider">
                  Therapeutic Portfolios
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  Flagship Formulations Supplied from Nagpur
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#005EB1] hover:text-[#00477F]"
              >
                <span>View All 25 Formulations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLocalProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.slug}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group block"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#005EB1] mb-2">
                    {prod.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                    {prod.genericName}
                  </p>
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 pt-3 border-t border-slate-100">
                    <span>{prod.dosageForm}</span>
                    <span className="font-bold text-[#F87901] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Monograph <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
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
