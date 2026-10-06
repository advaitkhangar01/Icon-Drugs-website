"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { therapyAreasData } from "@/data/siteData";
import {
  ArrowRight,
  HeartPulse,
  Brain,
  Activity,
  ShieldAlert,
  Stethoscope,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";

// Icon mapper helper
const getTherapyIcon = (id: string) => {
  switch (id) {
    case "cardio":
      return <HeartPulse className="w-5 h-5" />;
    case "neuro":
      return <Brain className="w-5 h-5" />;
    case "gastro":
      return <Activity className="w-5 h-5" />;
    case "resp":
      return <Stethoscope className="w-5 h-5" />;
    case "anti-infectives":
      return <ShieldAlert className="w-5 h-5" />;
    case "endocrinology":
      return <Sparkles className="w-5 h-5" />;
    default:
      return <Activity className="w-5 h-5" />;
  }
};

export default function TherapeuticFocusGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLDivElement>(null);
  const previewContentRef = useRef<HTMLDivElement>(null);

  const selectedTherapy = therapyAreasData[selectedIndex];

  // GSAP animation when selected index changes with immediate full visibility
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    if (previewImageRef.current && previewContentRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        previewImageRef.current,
        { scale: 1.04, opacity: 0.9 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out", clearProps: "opacity,scale" }
      );
      tl.fromTo(
        previewContentRef.current,
        { y: 8, opacity: 0.9 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out", clearProps: "opacity,transform" },
        "<"
      );
    }
  }, [selectedIndex]);

  // Section reveal trigger ensuring 100% full opacity on entry
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".console-header",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        ".console-panel",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-16 bg-gradient-to-b from-white via-[#F7F9FB] to-white relative overflow-hidden"
    >
      {/* Decorative brand geometry watermarks */}
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full border border-[#005EB1]/5 pointer-events-none translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-6 w-[400px] h-[400px] rounded-full border border-[#A285D5]/10 pointer-events-none -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section with badge & all portfolios link */}
        <div className="console-header flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005EB1]/10 text-[#005EB1] text-xs font-bold uppercase tracking-wider mb-2.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#F87901]" />
              <span>Interactive Clinical Console</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight font-heading leading-tight">
              Where scientific rigor meets pressing healthcare needs.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore our core therapeutic portfolios. Select any domain below to review clinical indications, formulations count, and targeted pharmacopeial solutions.
            </p>
          </div>

          <Link
            href="/therapeutic-areas"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#005EB1] hover:text-[#F87901] transition-colors shrink-0 group border-b border-[#005EB1]/20 pb-1"
          >
            <span>View All Therapeutic Portfolios</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* The Clinical Console Master Container */}
        <div className="console-panel grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_12px_35px_rgba(0,94,177,0.06)]">
          {/* Left Column: Interactive Domain Selector List (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-50 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Select Specialty
                </span>
                <span className="text-xs font-mono font-bold text-[#F87901]">
                  0{selectedIndex + 1} / 0{therapyAreasData.length}
                </span>
              </div>

              <div className="space-y-1.5">
                {therapyAreasData.map((area, index) => {
                  const isActive = selectedIndex === index;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedIndex(index)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group relative ${
                        isActive
                          ? "bg-white shadow-sm border border-[#005EB1]/40 translate-x-1"
                          : "bg-white/60 hover:bg-white border border-slate-200/70 hover:border-slate-300"
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div className="absolute left-0 top-2.5 bottom-2.5 w-1.5 bg-[#005EB1] rounded-r-full" />
                      )}

                      <div className="flex items-center gap-3.5 pl-1">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                            isActive
                              ? "bg-[#005EB1] text-white shadow-sm shadow-[#005EB1]/30"
                              : "bg-slate-100 text-slate-700 group-hover:bg-[#005EB1]/10 group-hover:text-[#005EB1]"
                          }`}
                        >
                          {getTherapyIcon(area.id)}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-mono font-bold ${
                                isActive ? "text-[#F87901]" : "text-slate-500"
                              }`}
                            >
                              0{index + 1}
                            </span>
                            <span
                              className={`font-heading font-extrabold text-sm tracking-tight transition-colors ${
                                isActive ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                              }`}
                            >
                              {area.name}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-medium line-clamp-1">
                            {area.stats}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                          isActive
                            ? "text-[#F87901] translate-x-0.5"
                            : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom micro note */}
            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                WHO-GMP validated pipelines
              </span>
              <span className="font-mono font-bold text-slate-600">150+ Formulations</span>
            </div>
          </div>

          {/* Right Column: The Dynamic Reactive Stage (7 Cols) */}
          <div className="lg:col-span-7 relative p-5 sm:p-8 flex flex-col justify-between bg-white overflow-hidden">
            {/* Visual background window */}
            <div
              ref={previewImageRef}
              className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden mb-6 shadow-sm"
            >
              <Image
                src={selectedTherapy.heroImage}
                alt={selectedTherapy.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Pill on image */}
              <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F87901]" />
                <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">
                  {selectedTherapy.name}
                </span>
              </div>

              {/* Formulation count badge on image */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                <div>
                  <div className="text-[11px] font-mono font-bold text-blue-200 uppercase tracking-wider">
                    Therapeutic Capacity
                  </div>
                  <div className="text-lg sm:text-xl font-black font-heading">
                    {selectedTherapy.stats}
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pharmacopeial Compliance</span>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div ref={previewContentRef} className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mb-2">
                  {selectedTherapy.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedTherapy.fullDesc}
                </p>
              </div>

              {/* Treated indications tags */}
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Key Indications & Conditions Addressed
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTherapy.conditions.map((cond, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/therapeutic-areas/${selectedTherapy.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#005EB1] hover:bg-[#00477F] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Explore {selectedTherapy.name} Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Browse All Formulations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
