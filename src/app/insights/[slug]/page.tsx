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
  return {
    title: `${article.title} | Icon Drugs Insights`,
    description: article.excerpt,
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

  return (
    <>
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
