import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { healthConditionsData } from "@/data/siteData";
import { ChevronRight, FileText, ArrowRight, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evidence-Based Health Information & Disease Guides",
  description:
    "Explore clinical disease education, symptom matrices, etiology, and pharmacologic management guidelines across neuropathic pain, osteoarthritis, acid reflux, and urinary tract infections. Reviewed by Icon Drugs Scientific Advisory Board.",
  keywords: [
    "health conditions",
    "disease guides",
    "neuropathic pain management",
    "osteoarthritis symptoms",
    "GERD treatment",
    "UTI clinical guide",
    "patient education Icon Drugs",
  ],
  alternates: {
    canonical: "https://icondrugs.com/health",
  },
  openGraph: {
    title: "Evidence-Based Health Information & Disease Guides | Icon Drugs",
    description:
      "Clinical knowledge, early symptom identification, and patient lifestyle guidance written with pharmaceutical accuracy by Icon Drugs Private Limited, Nagpur.",
    url: "https://icondrugs.com/health",
    siteName: "Icon Drugs",
    images: [
      {
        url: "/icon-brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Icon Drugs Clinical Health Education",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Information & Disease Guides | Icon Drugs",
    description:
      "Evidence-based health guides and symptom checklists reviewed by medical professionals.",
    images: ["/icon-brand-mark.png"],
  },
};

export default function HealthPage() {
  const healthJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://icondrugs.com/health#webpage",
    "url": "https://icondrugs.com/health",
    "name": "Health Information & Clinical Disease Education | Icon Drugs",
    "description":
      "Evidence-based health condition overviews, symptom matrices, and management guidelines for patients and caregivers.",
    "publisher": {
      "@id": "https://icondrugs.com/#organization",
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": healthConditionsData.map((cond, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": cond.title,
        "url": `https://icondrugs.com/health/${cond.slug}`,
        "description": cond.overview,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        {/* Banner */}
        <section className="bg-[#00477F] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-4">
              <Link href="/" className="hover:underline text-blue-200">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Health Information</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading mb-6 max-w-3xl">
              Evidence-Based Health & Disease Information
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              Clinical knowledge, early symptom identification, and patient lifestyle guidance written with scientific accuracy.
            </p>
          </div>
        </section>

        {/* Directory of Conditions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthConditionsData.map((cond) => (
              <div
                key={cond.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005EB1] mb-3">
                    <FileText className="w-4 h-4" />
                    <span>{cond.category}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors mb-3">
                    {cond.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {cond.overview}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Reported Symptoms:
                    </div>
                    <ul className="space-y-1.5">
                      {cond.symptoms.slice(0, 3).map((sym, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F87901]" />
                          {sym}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/health/${cond.slug}`}
                  className="inline-flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-[#005EB1] group-hover:text-[#F87901] transition-colors"
                >
                  <span>Read Full Medical Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* Medical Disclaimer Banner */}
          <div className="mt-16 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Medical Disclaimer:</strong> The educational content on this portal is provided strictly for informational purposes and should not be used as a substitute for professional clinical medical advice, diagnosis, or prescription. Always consult a qualified registered medical practitioner before commencing any pharmaceutical therapy.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
