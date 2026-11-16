"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogArticle } from "@/data/blogsData";
import {
  Search,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  Timer,
  BellRing,
} from "lucide-react";

interface BlogListClientProps {
  articles: BlogArticle[];
  categories: string[];
  upcomingArticle?: BlogArticle;
}

export default function BlogListClient({
  articles,
  categories,
  upcomingArticle,
}: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchCategory =
        selectedCategory === "All" || art.contentCategory === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.headline.toLowerCase().includes(q) ||
        art.contentCategory.toLowerCase().includes(q) ||
        art.primaryKeyword.toLowerCase().includes(q) ||
        art.metaDescription.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featured = articles[0];
  const regularList =
    selectedCategory === "All" && !searchQuery
      ? filteredArticles.slice(1)
      : filteredArticles;

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diseases, medicines, storage, or keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#005EB1] focus:border-transparent text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results count */}
          <div className="flex items-center gap-3">
            <div className="text-xs sm:text-sm font-semibold text-slate-500 whitespace-nowrap">
              <span className="text-slate-900 font-bold">{filteredArticles.length}</span> published
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === "All"
                ? "bg-[#005EB1] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Categories ({articles.length})
          </button>
          {categories.map((cat) => {
            const count = articles.filter((a) => a.contentCategory === cat).length;
            if (count === 0) return null;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-[#005EB1] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Banner (Shown when no search/filter active) */}
      {selectedCategory === "All" && !searchQuery && featured && (
        <div className="mb-12 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 group">
          <div className="relative h-64 sm:h-80 lg:h-auto lg:col-span-7 overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F87901] text-white uppercase tracking-wider shadow-sm">
                Latest Release
              </span>
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#005EB1] uppercase tracking-wider mb-2">
                <span>{featured.contentCategory}</span>
                <span>•</span>
                <span>Monograph #{featured.serialNumber}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-3 leading-snug group-hover:text-[#005EB1] transition-colors">
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                {featured.headline || featured.metaDescription}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.publishDateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#005EB1] text-white text-xs sm:text-sm font-bold hover:bg-[#00477F] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Published Articles */}
      {regularList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularList.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <Link
                  href={`/blog/${art.slug}`}
                  className="block relative h-48 w-full overflow-hidden bg-slate-100"
                >
                  <Image
                    src={art.image}
                    alt={art.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-[#005EB1] shadow-sm backdrop-blur-sm">
                      {art.contentCategory}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {art.publishDateDisplay}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 leading-snug group-hover:text-[#005EB1] transition-colors line-clamp-2">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {art.headline || art.metaDescription}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">
                  Monograph #{art.serialNumber}
                </span>
                <Link
                  href={`/blog/${art.slug}`}
                  className="inline-flex items-center gap-1 text-[#005EB1] group-hover:text-[#F87901] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-base text-slate-600 mb-4 font-medium">
            No published articles match your filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-[#005EB1] text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Upcoming Scheduled Monograph Teaser */}
      {upcomingArticle && (
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F87901]/15 text-[#F87901] flex items-center justify-center shrink-0">
              <BellRing className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F87901] mb-1">
                <span>Coming Next in the Series</span>
                <span>•</span>
                <span>Publishing {upcomingArticle.publishDateDisplay}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                {upcomingArticle.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mt-1">
                {upcomingArticle.headline || upcomingArticle.metaDescription}
              </p>
            </div>
          </div>
          <Link
            href="/business-enquiry"
            className="px-5 py-2.5 rounded-xl bg-[#005EB1] text-white text-xs font-bold whitespace-nowrap hover:bg-[#00477F] transition-colors shrink-0"
          >
            Subscribe / Contact Desk
          </Link>
        </div>
      )}
    </div>
  );
}
