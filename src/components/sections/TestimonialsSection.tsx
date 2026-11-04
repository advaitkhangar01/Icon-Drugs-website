"use client";

import React, { useState } from "react";
import {
  Quote,
  Star,
  ShieldCheck,
  Building2,
  Stethoscope,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { testimonialsData, TestimonialItem } from "@/data/siteData";

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "franchise" | "doctor">("all");

  const filteredTestimonials = testimonialsData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <section id="testimonials" className="py-20 bg-slate-100/70 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#005EB1] text-xs font-black tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Real World Validation & Trust</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight">
              Trusted by Doctors. <span className="text-[#005EB1]">Built with Distributors.</span>
            </h2>

            <p className="text-base text-slate-600 font-medium">
              Read direct experiences from PCD franchise partners scaling territories and physicians prescribing our formulations daily.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#005EB1] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              All Voices
            </button>
            <button
              onClick={() => setActiveFilter("franchise")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === "franchise"
                  ? "bg-[#005EB1] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Franchise Partners</span>
            </button>
            <button
              onClick={() => setActiveFilter("doctor")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === "doctor"
                  ? "bg-[#005EB1] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinicians</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => {
            const isDoctor = t.type === "doctor";
            return (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        isDoctor
                          ? "bg-purple-50 text-purple-800 border border-purple-200"
                          : "bg-blue-50 text-[#005EB1] border border-blue-200"
                      }`}
                    >
                      {isDoctor ? (
                        <Stethoscope className="w-3.5 h-3.5" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5" />
                      )}
                      <span>{t.tag}</span>
                    </span>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-slate-200 absolute -top-3 -left-2 -z-0" />
                    <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed relative z-10 italic">
                      "{t.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info & Metric badge */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-black text-slate-950 font-heading">
                      {t.author}
                    </h4>
                    <p className="text-xs font-bold text-slate-600 mt-0.5">
                      {t.role}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.location}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-right sm:self-center shrink-0">
                    <span className="text-xs font-black text-[#005EB1] block">
                      {t.metric}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">
                      {t.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
