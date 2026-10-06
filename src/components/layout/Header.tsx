"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Activity,
  Building2,
  Mail,
  Sparkles,
} from "lucide-react";
import IconLogo from "@/components/ui/IconLogo";
import SearchModal from "@/components/ui/SearchModal";
import { therapyAreasData } from "@/data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"company" | "therapies" | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? "bg-slate-900/60 backdrop-blur-md border-b border-white/10 text-white"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-900 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Top utility sub-bar */}
        <div
          className={`hidden lg:block text-[11px] font-semibold border-b transition-colors ${
            isTransparent
              ? "border-white/10 text-slate-300 bg-black/20"
              : "border-slate-100 text-slate-500 bg-slate-50/70"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                WHO-GMP Certified & Export Compliant
              </span>
              <span>•</span>
              <span>25+ Years of Formulation Excellence</span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/healthcare-professionals"
                className={`hover:text-[#F87901] transition-colors ${
                  isTransparent ? "text-slate-200" : "text-slate-700"
                }`}
              >
                Healthcare Professionals Portal
              </Link>
              <span>•</span>
              <a
                href="mailto:business@icondrugs.com"
                className="hover:text-[#F87901] transition-colors flex items-center gap-1"
              >
                <Mail className="w-3 h-3 text-[#F87901]" />
                business@icondrugs.com
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 focus:outline-none"
              aria-label="Icon Drugs Home"
            >
              <IconLogo
                variant={isTransparent ? "white" : "color"}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Company Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("company")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-bold tracking-tight transition-all ${
                    isTransparent
                      ? "text-slate-100 hover:text-white hover:bg-white/10"
                      : "text-slate-800 hover:text-[#005EB1] hover:bg-slate-100"
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "company" ? "rotate-180 text-[#F87901]" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "company" && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 text-slate-900 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <Link
                      href="/#our-story"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center shrink-0 group-hover:bg-[#005EB1] group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#005EB1]">
                          Heritage & Story
                        </div>
                        <div className="text-[11px] text-slate-500">
                          25+ years of manufacturing pedigree
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#milestones"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center shrink-0 group-hover:bg-[#005EB1] group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#005EB1]">
                          Milestones & Timeline
                        </div>
                        <div className="text-[11px] text-slate-500">
                          From foundation in 2002 to present
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#quality"
                      onClick={() => setActiveMegaMenu(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center shrink-0 group-hover:bg-[#005EB1] group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#005EB1]">
                          Quality & Safety Systems
                        </div>
                        <div className="text-[11px] text-slate-500">
                          WHO-GMP, HPLC assay & sterile lines
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Therapeutic Areas Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu("therapies")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-bold tracking-tight transition-all ${
                    isTransparent
                      ? "text-slate-100 hover:text-white hover:bg-white/10"
                      : "text-slate-800 hover:text-[#005EB1] hover:bg-slate-100"
                  }`}
                >
                  <span>Therapeutic Areas</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMegaMenu === "therapies" ? "rotate-180 text-[#F87901]" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "therapies" && (
                  <div className="absolute top-full -left-28 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 text-slate-900 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#005EB1]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#005EB1]">
                          Specialized Therapy Portfolios
                        </span>
                      </div>
                      <Link
                        href="/therapeutic-areas"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-xs font-bold text-[#F87901] hover:underline flex items-center gap-1"
                      >
                        All Areas <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {therapyAreasData.map((therapy) => (
                        <Link
                          key={therapy.id}
                          href={`/therapeutic-areas/${therapy.slug}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center shrink-0 group-hover:bg-[#005EB1] group-hover:text-white transition-colors">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#005EB1] transition-colors">
                              {therapy.name}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {therapy.shortDesc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Products Link */}
              <Link
                href="/products"
                className={`px-3.5 py-2 rounded-lg text-[13.5px] font-bold tracking-tight transition-all ${
                  isTransparent
                    ? "text-slate-100 hover:text-white hover:bg-white/10"
                    : "text-slate-800 hover:text-[#005EB1] hover:bg-slate-100"
                }`}
              >
                Products
              </Link>

              {/* Health Information Link */}
              <Link
                href="/health"
                className={`px-3.5 py-2 rounded-lg text-[13.5px] font-bold tracking-tight transition-all ${
                  isTransparent
                    ? "text-slate-100 hover:text-white hover:bg-white/10"
                    : "text-slate-800 hover:text-[#005EB1] hover:bg-slate-100"
                }`}
              >
                Health Info
              </Link>

              {/* Insights Link */}
              <Link
                href="/insights"
                className={`px-3.5 py-2 rounded-lg text-[13.5px] font-bold tracking-tight transition-all ${
                  isTransparent
                    ? "text-slate-100 hover:text-white hover:bg-white/10"
                    : "text-slate-800 hover:text-[#005EB1] hover:bg-slate-100"
                }`}
              >
                Insights
              </Link>
            </nav>

            {/* Right Action buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  isTransparent
                    ? "border-white/20 text-slate-200 hover:bg-white/10"
                    : "border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
                aria-label="Open search dialog"
              >
                <Search className="w-3.5 h-3.5 text-[#F87901]" />
                <span>Search</span>
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">
                  /
                </kbd>
              </button>

              <Link
                href="/business-enquiry"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#F87901] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#e06c00] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#F87901]/25"
              >
                Business Enquiry
              </Link>
            </div>

            {/* Mobile Actions: Search & Menu Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-lg ${isTransparent ? "text-white" : "text-slate-800"}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${isTransparent ? "text-white" : "text-slate-800"}`}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#F87901]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-900 border-b border-slate-200 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/#our-story"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100"
              >
                Our Company & Heritage
              </Link>
              <Link
                href="/#quality"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100"
              >
                Quality & Safety
              </Link>
              <Link
                href="/therapeutic-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100 text-[#005EB1]"
              >
                Therapeutic Areas
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100"
              >
                Product Formulations
              </Link>
              <Link
                href="/health"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100"
              >
                Health Information
              </Link>
              <Link
                href="/healthcare-professionals"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100"
              >
                For Healthcare Professionals
              </Link>
              <Link
                href="/insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-slate-100"
              >
                Latest Insights & News
              </Link>
              <div className="pt-3">
                <Link
                  href="/business-enquiry"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-[#F87901] text-white font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Submit Business Enquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
