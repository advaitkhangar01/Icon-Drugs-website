import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productsData, getProductCommercialData, getComplementaryProducts } from "@/data/siteData";
import {
  ProductDetailProvider,
  ProductDetailHeroActions,
} from "@/components/products/ProductDetailClient";
import ProductHeroShowcase from "@/components/products/ProductHeroShowcase";
import {
  ChevronRight,
  AlertCircle,
  Info,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  ExternalLink,
  Atom,
} from "lucide-react";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return {};
  
  const title = `${product.name} (${product.strength}) Clinical Monograph & Supply Terms | Icon Drugs`;
  const description = `Prescribing monograph, active salt composition (${product.genericName}), dosage guidelines, clinical pharmacology, and commercial B2B supply terms for ${product.name} manufactured by Icon Drugs Private Limited, Nagpur.`;
  const pageUrl = `https://icondrugs.com/products/${product.slug}`;
  const imageUrl = product.image ? `https://icondrugs.com${product.image}` : "https://icondrugs.com/icon-brand-mark.png";

  return {
    title,
    description,
    keywords: [
      product.name,
      product.genericName,
      product.category,
      product.dosageForm,
      "Icon Drugs product monograph",
      "pharma manufacturer Nagpur",
      "PCD franchise medicine supply",
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
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${product.name} — ${product.genericName} packaging and monograph`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const commercialData = getProductCommercialData(product);
  const complementaryProducts = getComplementaryProducts(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://icondrugs.com/products/${product.slug}#product`,
        "name": product.name,
        "description": `${product.tagline}. Active generic composition: ${product.genericName}. Indicated for: ${product.indications.join(", ")}.`,
        "image": product.image ? `https://icondrugs.com${product.image}` : "https://icondrugs.com/icon-brand-mark.png",
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "Icon Drugs",
        },
        "manufacturer": {
          "@id": "https://icondrugs.com/#organization",
        },
        "offers": {
          "@type": "Offer",
          "url": `https://icondrugs.com/products/${product.slug}`,
          "priceCurrency": "INR",
          "price": "0.00",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceType": "https://schema.org/B2BPrice",
            "priceCurrency": "INR",
          },
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://icondrugs.com/#organization",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://icondrugs.com/products/${product.slug}#breadcrumb`,
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
            "name": "Products",
            "item": "https://icondrugs.com/products",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://icondrugs.com/products/${product.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-28 lg:pb-20 bg-slate-100/70">
        <ProductDetailProvider
          product={product}
          commercialData={commercialData}
          complementaryProducts={complementaryProducts}
        >
          {/* Breadcrumb Bar */}
          <section className="bg-white border-b-2 border-slate-200 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-black text-slate-900">
              <Link href="/" className="hover:text-[#005EB1] text-slate-700">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/products" className="hover:text-[#005EB1] text-slate-700">Products</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-950 font-black uppercase tracking-wider">{product.name}</span>
            </div>
          </section>

          {/* Product Identity Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Dedicated Studio Showcase & Specs */}
              <div className="lg:col-span-5">
                <ProductHeroShowcase product={product} />
              </div>

              {/* Right Column: Hero Clinical Positioning & Order CTAs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Clinical Tagline Quote Banner */}
                <div className="bg-white rounded-3xl p-7 border-l-8 border-[#F87901] shadow-xl border-2 border-slate-300">
                  <div className="text-xs font-black uppercase tracking-widest text-[#F87901] mb-1.5 flex items-center justify-between">
                    <span>Clinical Positioning & Rationale</span>
                    <span className="text-slate-950 font-black">WHO-GMP Validated</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-heading text-slate-950 italic leading-snug">
                    &ldquo;{product.tagline}&rdquo;
                  </div>
                </div>

                {/* Key Clinical Differentiators & Advantages */}
                {product.clinicalHighlights && product.clinicalHighlights.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-xl space-y-3.5">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#005EB1] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#F87901]" />
                      <span>Clinical Differentiators & Advantages</span>
                    </h3>
                    <div className="space-y-2.5">
                      {product.clinicalHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-950 font-bold">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Doctor Specialties Target */}
                {product.targetSpecialties && product.targetSpecialties.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-xl">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-950 mb-3 flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-[#005EB1]" />
                      <span>Recommended Prescribing Medical Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.targetSpecialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-xl bg-blue-100 border-2 border-blue-200 text-xs font-black text-blue-950 shadow-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* High-Conversion B2B Commercial Actions & Monopoly Checker */}
                <ProductDetailHeroActions product={product} />
              </div>
            </div>
          </section>

          {/* Clinical Monograph Deep-Dive Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-3xl border-2 border-slate-300 p-8 sm:p-12 shadow-xl space-y-10">
              {/* Active Ingredients & Molecular Structures */}
              {product.ingredientActions && product.ingredientActions.length > 0 && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-slate-200">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading flex items-center gap-2.5">
                        <Atom className="w-6 h-6 text-[#005EB1]" />
                        <span>Active Chemical Compounds & Molecular Architecture</span>
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                        Validated chemical entities, 2D skeletal bond diagrams, empirical molecular formulas, and receptor-level modes of action
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#005EB1] text-white text-xs font-mono font-black shadow-xs shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>NIH PubChem Indexed</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.ingredientActions.map((ia, idx) => (
                      <div
                        key={idx}
                        className="bg-white border-2 border-slate-300 rounded-3xl p-6 hover:border-[#005EB1] shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                      >
                        <div>
                          {ia.chemicalData ? (
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-4 pb-4 border-b-2 border-slate-100">
                              <div className="w-32 h-32 shrink-0 bg-slate-50 border-2 border-slate-200 rounded-2xl p-2 flex items-center justify-center shadow-inner">
                                <Image
                                  src={ia.chemicalData.structureUrl}
                                  alt={`${ia.chemicalData.name} 2D Molecular Structure`}
                                  width={120}
                                  height={120}
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1 space-y-2 text-center sm:text-left">
                                <div className="font-black text-slate-950 text-lg leading-tight font-heading">
                                  {ia.ingredient}
                                </div>
                                <div className="text-xs font-mono font-bold text-slate-900 bg-slate-100 p-2 rounded-xl border border-slate-200 space-y-0.5">
                                  <div>
                                    <span className="font-black text-slate-700">Formula:</span> {ia.chemicalData.formula}
                                  </div>
                                  <div>
                                    <span className="font-black text-slate-700">Molar Mass:</span> {ia.chemicalData.molecularWeight}
                                  </div>
                                </div>
                                <a
                                  href={`https://pubchem.ncbi.nlm.nih.gov/compound/${ia.chemicalData.pubchemCid}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#005EB1] hover:text-[#F87901] transition-colors pt-1"
                                >
                                  <span>PubChem CID: {ia.chemicalData.pubchemCid}</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div className="mb-4 pb-3 border-b border-slate-100">
                              <div className="font-black text-slate-950 text-lg mb-1">
                                {ia.ingredient}
                              </div>
                              <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-xs font-black text-slate-800 uppercase tracking-wider">
                                Biochemical / Enzymatic Complex
                              </span>
                            </div>
                          )}

                          <div className="pt-1">
                            <div className="text-[11px] font-black uppercase tracking-wider text-slate-950 mb-1">
                              Pharmacological Mechanism of Action
                            </div>
                            <p className="text-xs font-bold text-slate-950 leading-relaxed">
                              {ia.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Indications Checklist */}
              <div className="pt-8 border-t-2 border-slate-200">
                <h2 className="text-2xl font-black text-slate-950 font-heading mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#005EB1]" />
                  <span>Approved Clinical Indications & Disease Burden</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.indications.map((ind, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-100 border-2 border-slate-200 text-xs font-black text-slate-950 shadow-xs"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#005EB1] shrink-0" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Mechanism of Action */}
              <div className="pt-8 border-t-2 border-slate-200">
                <h2 className="text-2xl font-black text-slate-950 font-heading mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#005EB1]" />
                  <span>Pharmacodynamic Mechanism of Action</span>
                </h2>
                <p className="text-base text-slate-950 font-bold leading-relaxed bg-blue-50/90 p-7 rounded-3xl border-2 border-blue-200">
                  {product.mechanism}
                </p>
              </div>

              {/* Dosage & Administration */}
              <div className="pt-8 border-t-2 border-slate-200">
                <h2 className="text-2xl font-black text-slate-950 font-heading mb-3">
                  Dosage & Administration Protocol
                </h2>
                <p className="text-base text-slate-950 font-bold leading-relaxed bg-slate-100 p-6 rounded-3xl border-2 border-slate-200">
                  {product.dosage}
                </p>
              </div>

              {/* Warnings & Precautions */}
              <div className="pt-8 border-t-2 border-slate-200">
                <h2 className="text-2xl font-black text-slate-950 font-heading mb-4 flex items-center gap-2 text-amber-800">
                  <AlertCircle className="w-5 h-5" />
                  <span>Precautions, Warnings & Contraindications</span>
                </h2>
                <div className="space-y-2.5">
                  {product.warnings.map((warn, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm font-bold text-slate-950 bg-amber-50/90 border-2 border-amber-200 p-4 rounded-2xl"
                    >
                      <span className="text-amber-700 font-black text-base mt-0.5 shrink-0">!</span>
                      <span>{warn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage & Shelf Life */}
              <div className="pt-8 border-t-2 border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-black text-slate-950 bg-slate-100 p-6 rounded-3xl border-2 border-slate-300">
                <div>
                  <span className="text-slate-700 uppercase tracking-wider font-extrabold">Storage & Handling: </span>
                  <span className="text-slate-950 font-black">{product.storage}</span>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-emerald-800 font-black text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>WHO-GMP Controlled Release Batch</span>
                </div>
              </div>
            </div>
          </section>
        </ProductDetailProvider>
      </main>
      <Footer />
    </>
  );
}
