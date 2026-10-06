import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { therapyAreasData, productsData } from "@/data/siteData";
import { ArrowRight, ChevronRight, Pill } from "lucide-react";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = therapyAreasData.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.name} Formulations & Clinical Care | Icon Drugs`,
    description: area.shortDesc,
  };
}

export async function generateStaticParams() {
  return therapyAreasData.map((area) => ({
    slug: area.slug,
  }));
}

export default async function TherapeuticAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = therapyAreasData.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) => p.therapySlug === area.slug);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
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
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              {area.name}
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              {area.fullDesc}
            </p>
          </div>
        </section>

        {/* Overview & Key Conditions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Clinical Overview & Pathophysiology
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                In this therapeutic area, Icon Drugs formulates high-stability compounds meeting pharmacopeial limits for content uniformity, dissolution rates, and organic impurities. Our manufacturing adheres to verified batch repeatability so prescribing clinicians can depend upon predictable bioavailability.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#005EB1] p-6 rounded-r-xl">
                <div className="font-bold text-[#00477F] text-sm mb-1">
                  Physician & Institutional Inquiries
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For complete bioequivalence studies, stability monographs, or hospital tender supply parameters in {area.name}, please contact our Medical Affairs or Business Enquiry team.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Treated Indications & Conditions
              </h3>
              <ul className="space-y-3">
                {area.conditions.map((cond, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-[#F87901]" />
                    {cond}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Available Formulations in {area.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Active pharmaceutical formulations manufactured under WHO-GMP compliance
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold uppercase tracking-wider text-[#005EB1] hover:text-[#F87901] transition-colors"
            >
              All Products →
            </Link>
          </div>

          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.slug}`}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#005EB1] text-white text-[10px] font-bold uppercase">
                      {prod.dosageForm}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#F87901] uppercase tracking-wider mb-1">
                        {prod.strength}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-2">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-500 italic mb-4">
                        {prod.genericName}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005EB1] group-hover:text-[#F87901]">
                      <span>Prescribing Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
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
