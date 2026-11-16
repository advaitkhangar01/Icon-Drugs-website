import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import BlogFAQAccordion from "@/components/blog/BlogFAQAccordion";
import {
  getAllBlogs,
  getBlogBySlug,
  getRelatedBlogs,
  isBlogPublished,
  type BlogArticle,
} from "@/data/blogsData";
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowLeft,
  ShieldCheck,
  Building2,
  FileText,
  Sparkles,
  Lock,
  Timer,
} from "lucide-react";

import type { Metadata } from "next";

// ISR: Revalidate every hour
export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) return {};

  const published = isBlogPublished(article);
  const title = `${article.metaTitle} | Icon Drugs`;
  const description = article.metaDescription;
  const pageUrl = `https://icondrugs.com/blog/${article.slug}`;
  const imageUrl = `https://icondrugs.com${article.image}`;

  return {
    title,
    description,
    keywords: [
      article.primaryKeyword,
      ...article.secondaryKeywords,
      article.contentCategory,
      "Icon Drugs blog",
      "pharmaceutical formulations Nagpur",
      "WHO-GMP manufacturing India",
    ],
    // If not yet published in the 2-per-week schedule, don't index in search engines yet
    robots: published
      ? { index: true, follow: true }
      : { index: false, follow: true },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Icon Drugs Pharmaceuticals Pvt. Ltd.",
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.publishDate,
      authors: ["https://icondrugs.com/about"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: article.imageAlt,
        },
      ],
      locale: "en_IN",
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
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const published = isBlogPublished(article);
  const relatedArticles = getRelatedBlogs(slug, 3);
  const pageUrl = `https://icondrugs.com/blog/${article.slug}`;
  const imageUrl = `https://icondrugs.com${article.image}`;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#medicalPage`,
        "url": pageUrl,
        "name": article.title,
        "description": article.metaDescription,
        "aspect": "Overview, Clinical Literacy & Preventive Guidelines",
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patients, Caregivers, Pharmacists, and Healthcare Professionals",
        },
        "publisher": {
          "@id": "https://icondrugs.com/#organization",
        },
      },
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        "headline": article.title,
        "alternativeHeadline": article.headline,
        "description": article.metaDescription,
        "image": {
          "@type": "ImageObject",
          "url": imageUrl,
          "width": 1200,
          "height": 675,
          "caption": article.imageAlt,
        },
        "datePublished": article.publishDate,
        "dateModified": article.publishDate,
        "author": {
          "@type": "Organization",
          "name": article.author,
          "url": "https://icondrugs.com/about",
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://icondrugs.com/#organization",
          "name": "Icon Drugs Private Limited",
          "url": "https://icondrugs.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://icondrugs.com/icon-brand-mark.png",
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "M2, Ved Solitaire, 5th Cross B St., Cement Road, Dharampeth",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "postalCode": "440010",
            "addressCountry": "IN",
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        "keywords": [
          article.primaryKeyword,
          ...article.secondaryKeywords,
          article.contentCategory,
        ].join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": article.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20 bg-slate-50/40">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F87901] mb-6"
          >
            <Link href="/" className="hover:underline text-slate-500">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:underline text-slate-500">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#005EB1]">{article.contentCategory}</span>
          </nav>

          {/* Schedule Notice if not yet released in 2-per-week schedule */}
          {!published && (
            <div className="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Timer className="w-5 h-5 text-[#F87901] shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold">Scheduled Monograph:</span> Part of our 2-per-week editorial rollout. Official public release scheduled for{" "}
                  <span className="font-bold underline">{article.publishDateDisplay}</span>.
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-200/70 text-amber-900 shrink-0">
                Preview Mode
              </span>
            </div>
          )}

          {/* Category Badge & Monograph Number */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#005EB1]/10 text-[#005EB1]">
              <Sparkles className="w-3.5 h-3.5" />
              {article.contentCategory}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Monograph #{article.serialNumber} • {article.scheduleLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading mb-4 leading-tight">
            {article.title}
          </h1>

          {article.headline && (
            <p className="text-lg sm:text-xl text-slate-600 font-medium mb-6 leading-relaxed">
              {article.headline}
            </p>
          )}

          {/* Meta Line: Author, Date, Read Time */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs sm:text-sm text-slate-600 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#005EB1]" />
                <span className="font-semibold text-slate-900">{article.author}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {article.publishDateDisplay}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {article.readTime}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span>Verified Medical Science</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden mb-8 shadow-md border border-slate-200">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-4 sm:p-6 text-white">
              <p className="text-xs sm:text-sm italic font-medium opacity-90 line-clamp-2">
                {article.imageAlt}
              </p>
            </div>
          </div>

          {/* AEO Direct Answer Callout Box */}
          {article.directAnswer && (
            <div className="my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/40 border-2 border-[#005EB1]/20 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#005EB1] mb-2.5">
                <div className="w-6 h-6 rounded-md bg-[#005EB1] text-white flex items-center justify-center text-xs">
                  A
                </div>
                <span>Direct Answer &amp; Key Takeaway (AEO)</span>
              </div>
              <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
                {article.directAnswer}
              </p>
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-slate max-w-none text-slate-700">
            <MarkdownRenderer content={article.content} />
          </div>

          {/* Frequently Asked Questions */}
          <BlogFAQAccordion faqs={article.faqs} />

          {/* Internal Links / Related References from Strategy Sheet */}
          {article.internalLinks && article.internalLinks.length > 0 && (
            <section className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#005EB1]" />
                <span>Related Monographs &amp; Recommended Reading</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {article.internalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${link.slug}`}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#005EB1] hover:shadow-sm transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F87901]">
                        {link.category}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#005EB1] line-clamp-2 mt-1">
                        {link.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-[#005EB1] mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read Monograph →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Commercial Brand Discovery & Lead Funnel */}
          <div className="mt-14 p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#00477F] to-[#005EB1] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white mb-3">
                <Building2 className="w-3.5 h-3.5" />
                Icon Drugs Pharmaceuticals Pvt. Ltd. • Nagpur
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3 leading-tight">
                Partner with a Certified WHO-GMP &amp; ISO Formulation Manufacturer
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Operating since 2002 from Nagpur, Maharashtra, Icon Drugs provides advanced
                tablet, capsule, syrup, and injectable formulations for hospital procurement, PCD pharma franchises, and third-party contract manufacturing across Central India and pan-India.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/business-enquiry"
                  className="px-6 py-3 rounded-xl bg-[#F87901] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#e06c00] transition-colors shadow-md"
                >
                  Send Commercial Enquiry
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors border border-white/20"
                >
                  Explore Formulation Catalog
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Back */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#005EB1] hover:text-[#F87901] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all educational articles</span>
            </Link>
            <Link
              href="/contact"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Have a medical or regulatory question? Contact our team →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
