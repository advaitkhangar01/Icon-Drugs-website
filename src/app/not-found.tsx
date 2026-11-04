import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IconLogo from "@/components/ui/IconLogo";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center py-32 px-4">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <IconLogo size="md" />
          </div>
          <div className="text-7xl font-extrabold text-[#005EB1] font-heading mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 mb-8">
            The page, formulation, or medical topic you are looking for may have been moved or updated.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#005EB1] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#00477F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Search Portal</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
