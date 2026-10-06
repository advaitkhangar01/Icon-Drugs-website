import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { healthConditionsData, productsData } from "@/data/siteData";
import { ChevronRight, ArrowRight, ShieldAlert, CheckCircle, AlertTriangle } from "lucide-react";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = healthConditionsData.find((c) => c.slug === slug);
  if (!condition) return {};
  return {
    title: `${condition.title} | Health Information | Icon Drugs`,
    description: condition.overview,
  };
}

export async function generateStaticParams() {
  return healthConditionsData.map((c) => ({
    slug: c.slug,
  }));
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = healthConditionsData.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) =>
    condition.relatedProductIds.includes(p.id)
  );

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/health" className="hover:underline text-blue-200">Health Information</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>{condition.title}</span>
            </div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#A285D5] mb-2">
              {condition.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6 max-w-4xl">
              {condition.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              {condition.overview}
            </p>
          </div>
        </section>

        {/* Clinical breakdown */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Symptoms */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Primary Symptoms & Clinical Manifestations
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {condition.symptoms.map((sym, i) => (
                    <li key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#005EB1] mt-1.5 shrink-0" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk Factors */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4">
                  Known Risk Factors & Predispositions
                </h2>
                <ul className="space-y-2.5">
                  {condition.riskFactors.map((risk, i) => (
                    <li key={i} className="text-sm sm:text-base text-slate-600 flex items-start gap-3">
                      <span className="text-[#F87901] font-bold">•</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Management */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Evidence-Based Management & Protocols
                </h2>
                <div className="space-y-3">
                  {condition.management.map((mgmt, i) => (
                    <div key={i} className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-sm text-emerald-950 flex items-start gap-3">
                      <span className="font-bold text-emerald-700">0{i + 1}.</span>
                      <span>{mgmt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with related formulations */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#005EB1] mb-4">
                  Icon Drugs Treatment Options
                </h3>
                {relatedProducts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        className="block p-4 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 transition-colors group"
                      >
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#005EB1]">
                          {p.name}
                        </div>
                        <div className="text-xs text-slate-500 italic mt-0.5">{p.genericName}</div>
                        <div className="text-[11px] font-semibold text-[#F87901] mt-2 flex items-center gap-1">
                          Prescribing Specs <ArrowRight className="w-3 h-3" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">
                    Consult our product directory for applicable therapeutic formulations.
                  </p>
                )}
              </div>

              {/* Disclaimer card */}
              <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
                <ShieldAlert className="w-5 h-5 text-slate-500 mb-2" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Treatment must only be prescribed by authorized healthcare providers following objective diagnostic assessment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
