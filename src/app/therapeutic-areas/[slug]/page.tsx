import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { therapyAreasData, productsData } from "@/data/siteData";
import {
  ArrowRight,
  ChevronRight,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Droplet,
  Layers,
  Sparkles,
  Syringe,
} from "lucide-react";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = therapyAreasData.find((a) => a.slug === slug);
  if (!area) return {};

  const title = `${area.name} Formulations & Clinical Care | Icon Drugs`;
  const description = `${area.fullDesc} Manufactured by Icon Drugs Private Limited under WHO-GMP compliance in Nagpur, Maharashtra.`;
  const pageUrl = `https://icondrugs.com/therapeutic-areas/${area.slug}`;

  return {
    title,
    description,
    keywords: [
      area.name,
      ...area.conditions,
      "Icon Drugs therapy portfolio",
      "pharmaceutical formulations Nagpur",
      "PCD pharma franchise Maharashtra",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Icon Drugs",
      images: [
        {
          url: "/icon-brand-mark.png",
          width: 1200,
          height: 630,
          alt: `${area.name} — Icon Drugs Therapeutic Division`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/icon-brand-mark.png"],
    },
  };
}

export async function generateStaticParams() {
  return therapyAreasData.map((area) => ({
    slug: area.slug,
  }));
}

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes("injection")) return <Syringe className="w-3.5 h-3.5" />;
  if (f.includes("syrup") || f.includes("suspension")) return <Droplet className="w-3.5 h-3.5" />;
  if (f.includes("gel") || f.includes("cream")) return <Layers className="w-3.5 h-3.5" />;
  if (f.includes("sachet")) return <Sparkles className="w-3.5 h-3.5" />;
  return <Pill className="w-3.5 h-3.5" />;
};

export default async function TherapeuticAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = therapyAreasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) => p.therapySlug === area.slug);

  const therapyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://icondrugs.com/therapeutic-areas/${area.slug}#webpage`,
        "url": `https://icondrugs.com/therapeutic-areas/${area.slug}`,
        "name": `${area.name} Formulations | Icon Drugs`,
        "description": area.fullDesc,
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
        "about": {
          "@type": "MedicalSpecialty",
          "name": area.name,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://icondrugs.com/therapeutic-areas/${area.slug}#breadcrumb`,
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
            "name": "Therapeutic Areas",
            "item": "https://icondrugs.com/therapeutic-areas",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": area.name,
            "item": `https://icondrugs.com/therapeutic-areas/${area.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(therapyJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20 bg-slate-50/50">
        {/* Detail Hero Banner */}
        <section className="relative bg-[#00477F] text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={area.heroImage}
              alt={area.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/therapeutic-areas" className="hover:underline text-blue-200">Therapeutic Areas</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>{area.name}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-4 max-w-3xl">
              {area.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              {area.fullDesc}
            </p>
          </div>
        </section>

        {/* Overview & Key Conditions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Clinical Overview & Pathophysiology
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                In this therapeutic area, Icon Drugs formulates high-stability compounds meeting pharmacopeial limits for content uniformity, dissolution rates, and organic impurities. Our manufacturing adheres to verified batch repeatability so prescribing clinicians can depend upon predictable bioavailability.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#005EB1] p-5 rounded-r-2xl">
                <div className="font-bold text-[#00477F] text-sm mb-1">
                  Physician & Institutional Inquiries
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For complete bioequivalence dossiers, stability monographs, or hospital tender supply parameters in {area.name}, please contact our Medical Affairs or Business Enquiry team.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
                <span>Indications & Conditions</span>
                <span className="font-mono text-blue-600 font-bold">{area.conditions.length} Addressed</span>
              </h3>
              <ul className="space-y-2.5">
                {area.conditions.map((cond, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-[#F87901] shrink-0" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Formulations in {area.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Active pharmaceutical formulations manufactured under WHO-GMP compliance
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-[#005EB1] hover:text-[#F87901] transition-colors"
            >
              All Formulations →
            </Link>
          </div>

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.slug}`}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#005EB1] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6 pb-4 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        {getDosageIcon(prod.dosageForm)}
                        <span>{prod.dosageForm}</span>
                      </span>

                      {prod.isRx ? (
                        <span className="px-2 py-0.5 rounded bg-[#F87901]/10 text-[#F87901] border border-[#F87901]/30 text-[10px] font-bold uppercase tracking-wider">
                          Rx Only
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                          OTC / Wellness
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-1">
                      {prod.name}
                    </h3>

                    <p className="text-xs font-semibold text-[#F87901] italic line-clamp-1 mb-2">
                      &ldquo;{prod.tagline}&rdquo;
                    </p>

                    <p className="text-xs text-slate-500 font-medium line-clamp-2">
                      {prod.genericName}
                    </p>
                  </div>

                  <div className="p-6 pt-4 flex-1 flex flex-col justify-between space-y-4">
                    {/* Clinical highlights if present */}
                    {prod.clinicalHighlights && prod.clinicalHighlights.length > 0 && (
                      <div className="space-y-1.5">
                        {prod.clinicalHighlights.slice(0, 2).map((h, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005EB1] group-hover:text-[#F87901]">
                      <span className="text-slate-400 font-mono font-normal">Pack: {prod.packSize.split(" ")[0]} {prod.packSize.split(" ")[1]}</span>
                      <div className="flex items-center gap-1">
                        <span>Clinical Monograph</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
              <Pill className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600 font-semibold mb-2">Formulations under regulatory dossier submission</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Additional formulations in this therapy category are currently under active commercial batch testing. Contact our business enquiry team for institutional pre-orders.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}