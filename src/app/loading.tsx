import React from "react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className="min-h-screen bg-[#F7F9FB] flex items-center justify-center p-4"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-[#005EB1] animate-spin" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Loading...
        </span>
      </div>
    </div>
  );
}
