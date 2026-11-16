import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogListClient from "@/components/blog/BlogListClient";
import {
  getPublishedBlogs,
  getNextUpcomingBlog,
  blogCategories,
} from "@/data/blogsData";
import { ChevronRight, Sparkles, BookOpen, ShieldCheck, Timer } from "lucide-react";
import type { Metadata } from "next";

// ISR: Revalidate every hour to automatically release scheduled posts on Tuesdays & Fridays
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Clinical Monographs & Pharmaceutical Knowledge Blog | Icon Drugs Nagpur",
  description:
    "Authoritative patient education, antimicrobial resistance insights, medicine storage guides, and WHO-GMP manufacturing standards published 2x weekly by Icon Drugs Medical Review Board, Nagpur.",
  keywords: [
    "Icon Drugs blog",
    "pharmaceutical knowledge India",
    "antimicrobial resistance guide",
    "medicine safety Nagpur",
    "PCD pharma education",
    "generic vs branded medicines",
    "WHO-GMP manufacturing insights",
  ],
  alternates: {
    canonical: "https://icondrugs.com/blog",
  },
  openGraph: {
    title: "Clinical Monographs & Pharmaceutical Knowledge Blog | Icon Drugs",
    description:
      "Explore peer-reviewed educational monographs published every Tuesday & Friday by Icon Drugs Medical Review Board, Nagpur.",
    url: "https://icondrugs.com/blog",
    siteName: "Icon Drugs",
    images: [
      {
        url: "https://icondrugs.com/images/blog/blog-hero-01.webp",
        width: 1200,
        height: 675,
        alt: "Icon Drugs Clinical Monographs & Pharmaceutical Knowledge Hub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Monographs & Pharmaceutical Knowledge Blog | Icon Drugs",
    description:
      "Explore peer-reviewed educational monographs published every Tuesday & Friday by Icon Drugs Medical Review Board, Nagpur.",
    images: ["https://icondrugs.com/images/blog/blog-hero-01.webp"],
  },
};

export default function BlogListingPage() {
  const publishedBlogs = getPublishedBlogs();
  const nextUpcoming = getNextUpcomingBlog();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://icondrugs.com/blog#collection",
        "url": "https://icondrugs.com/blog",
        "name": "Icon Drugs Pharmaceutical Blog & Medical Monograph Hub",
        "description":
          "Clinical and patient education monographs published 2x weekly by Icon Drugs Pharmaceuticals Pvt. Ltd., Nagpur, Maharashtra.",
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://icondrugs.com/blog#breadcrumb",
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
            "name": "Blog",
            "item": "https://icondrugs.com/blog",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-6"
          >
            <Link href="/" className="hover:underline text-slate-500">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005EB1]">Blog & Medical Monographs</span>
          </nav>

          {/* Page Hero */}
          <div className="mb-12 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#005EB1]/10 text-[#005EB1]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#005EB1]" />
                Icon Drugs Medical Review Board • Nagpur
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F87901]/10 text-[#F87901]">
                <Timer className="w-3.5 h-3.5 text-[#F87901]" />
                2 Posts / Week (Tue &amp; Fri)
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-4 leading-tight">
              Clinical Insights, Patient Health &amp; Pharmaceutical Science
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore 40 peer-reviewed educational monographs published twice weekly on Tuesdays and Fridays, designed to decode formulation science, answer healthcare queries, and guide safe medicine use.
            </p>
          </div>

          {/* Interactive Client Search, Filters, and Cards */}
          <BlogListClient
            articles={publishedBlogs}
            categories={blogCategories}
            upcomingArticle={nextUpcoming}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
