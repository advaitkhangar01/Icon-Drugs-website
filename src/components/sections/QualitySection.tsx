"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { qualityPillars } from "@/data/siteData";
import { ShieldCheck, ArrowRight, Award, CheckCircle2 } from "lucide-react";

export default function QualitySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".quality-pillar-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quality" ref={containerRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lab Visual with Dark Contrast Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
          alt="High-tech analytical lab background"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative brand geometry arc */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F87901]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#F87901]">
              Zero-Defect Quality Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading mb-6">
            Quality at every single stage of production.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our pharmaceutical manufacturing centers operate under synchronized automated controls, continuous atmospheric particulate testing, and pharmacopeial assays to ensure every tablet and capsule matches the highest international efficacy benchmarks.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="quality-pillar-card bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#005EB1] hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#005EB1] text-white flex items-center justify-center mb-6 shadow-md shadow-[#005EB1]/40">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-[#F87901] uppercase tracking-wider mb-2">
                  {pillar.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#A285D5]" />
                <span>{pillar.standard}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Certification Banner */}
        <div className="bg-gradient-to-r from-[#00477F] to-[#005EB1] rounded-2xl p-8 sm:p-10 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Award className="w-8 h-8 text-[#F87901]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Audited & Certified WHO-GMP Facilities
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                Ready for institutional procurement, hospital formularies, and contract licensing with comprehensive analytical validation files and regulatory dossiers.
              </p>
            </div>
          </div>

          <Link
            href="/healthcare-professionals"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#00477F] hover:bg-slate-100 font-bold text-sm transition-colors shrink-0 shadow-lg"
          >
            <span>Review Compliance Dossiers</span>
            <ArrowRight className="w-4 h-4 text-[#005EB1]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
