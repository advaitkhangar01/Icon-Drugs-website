"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for monitoring
    console.error("Global application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F7F9FB] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
        <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-6">
          <AlertCircle className="w-7 h-7" />
        </div>

        <h1 className="text-2xl font-extrabold text-[#111111] font-heading mb-3">
          Something went wrong
        </h1>

        <p className="text-sm text-[#555555] leading-relaxed mb-8">
          We encountered an unexpected error while loading this page. Our technical team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#005EB1] hover:bg-[#00477F] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#005EB1]/20 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
