"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { qualityPillars } from "@/data/siteData";
import {
  ShieldCheck,
  FlaskConical,
  ThermometerSnowflake,
  QrCode,
  ArrowRight,
  Award,
  CheckCircle2,
} from "lucide-react";

// Icon mapping corresponding to qualityPillars data
const pillarIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  FlaskConical,
  ThermometerSnowflake,
  QrCode,
};

export default function QualitySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Refresh ScrollTrigger after dynamic hydration/layout shifts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quality-pillar-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="quality"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Laboratory Visual - high clarity with minimal scrim so the image is clearly visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/backgrounds/quality-bg.jpg"
          alt="High-tech pharmaceutical cleanroom and analytical testing laboratory"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-85 brightness-95"
          priority={false}
        />
        {/* Soft neutral scrim to maintain text readability without obscuring the background */}
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/70" />
      </div>

      {/* Decorative Brand Geometry Circles */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-blue-500/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-orange-500/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Bright High-Contrast Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
              Zero-Defect Quality Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white mb-6 leading-tight drop-shadow-md">
            Quality at every single stage of production.
          </h2>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow">
            Our pharmaceutical manufacturing centers operate under synchronized automated controls, continuous atmospheric particulate testing, and pharmacopeial assays to ensure every tablet and capsule matches the highest international efficacy benchmarks.
          </p>
        </div>

        {/* 4 Quality Pillars Grid - High Contrast Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {qualityPillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[pillar.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="quality-pillar-card bg-slate-800/85 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-700/80 hover:border-blue-400/70 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/25 hover:shadow-blue-500/15 group opacity-100"
              >
                <div>
                  {/* Glowing Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/35 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-[#005EB1] group-hover:text-white group-hover:border-[#005EB1] transition-all duration-300 shadow-md shadow-blue-500/15">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Subtitle Badge */}
                  <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                    {pillar.subtitle}
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-100 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Standard / Compliance Footer */}
                <div className="pt-4 border-t border-slate-700/80 flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">{pillar.standard}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Certification Banner */}
        <div className="bg-gradient-to-r from-[#00477F] via-[#005EB1] to-[#0070D1] rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/30 shadow-2xl shadow-blue-950/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/25 shadow-inner">
              <Award className="w-8 h-8 text-amber-300" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                Audited & Certified WHO-GMP Facilities
              </h3>
              <p className="text-sm sm:text-base text-blue-50 max-w-2xl leading-relaxed font-medium">
                Ready for institutional procurement, hospital formularies, and contract licensing with comprehensive analytical validation files and regulatory dossiers.
              </p>
            </div>
          </div>

          <Link
            href="/healthcare-professionals"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#00477F] hover:bg-blue-50 font-bold text-sm transition-all duration-200 shrink-0 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Review Compliance Dossiers</span>
            <ArrowRight className="w-4 h-4 text-[#005EB1]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
