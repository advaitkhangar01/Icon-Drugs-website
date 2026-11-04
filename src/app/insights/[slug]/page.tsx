import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { insightsData } from "@/data/siteData";
import { ChevronRight, Calendar, ArrowLeft, Share2 } from "lucide-react";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) return {};

  const title = `${article.title} | Icon Drugs Insights`;
  const description = `${article.excerpt} Published by Icon Drugs Private Limited, Nagpur, Maharashtra.`;
  const pageUrl = `https://icondrugs.com/insights/${article.slug}`;

  return {
    title,
    description,
    keywords: [
      article.category,
      "pharmaceutical research",
      "clinical monograph",
      "manufacturing standards",
      "Icon Drugs article",
      "Nagpur pharma insights",
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
          url: article.image || "/icon-brand-mark.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.image || "/icon-brand-mark.png"],
    },
  };
}

export async function generateStaticParams() {
  return insightsData.map((a) => ({
    slug: a.slug,
  }));
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://icondrugs.com/insights/${article.slug}#article`,
        "headline": article.title,
        "description": article.excerpt,
        "image": article.image ? `https://icondrugs.com${article.image}` : "https://icondrugs.com/icon-brand-mark.png",
        "datePublished": "2024-01-15T08:00:00+05:30",
        "dateModified": "2026-11-01T12:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": article.author,
        },
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://icondrugs.com/insights/${article.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://icondrugs.com/insights/${article.slug}#breadcrumb`,
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
            "name": "Insights",
            "item": "https://icondrugs.com/insights",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://icondrugs.com/insights/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-6">
            <Link href="/" className="hover:underline text-slate-500">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/insights" className="hover:underline text-slate-500">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta line */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs sm:text-sm text-slate-600 mb-8">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-slate-900">{article.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {article.date}
              </span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005EB1] hover:underline"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

          {/* Featured Hero Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-10 shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Editorial Content Paragraphs */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Back button */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#005EB1] hover:text-[#F87901] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </Link>
            <Link
              href="/business-enquiry"
              className="px-5 py-2.5 rounded-lg bg-[#F87901] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#e06c00] transition-colors"
            >
              Enquire About This Technology
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
