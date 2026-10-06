"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyMilestones } from "@/data/siteData";
import { Clock } from "lucide-react";

export default function MilestonesTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".milestone-card",
        { y: 20, opacity: 0.8 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <section id="milestones" ref={containerRef} className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#005EB1]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#005EB1]">
              Historical Trajectory
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight font-heading">
            Milestones of scientific growth and compliance.
          </h2>
        </div>

        {/* Horizontal scrollable milestone cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {companyMilestones.map((m, idx) => (
            <div
              key={idx}
              className="milestone-card relative bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              {/* Top pillar accent line */}
              <div className="w-10 h-1 bg-[#005EB1] group-hover:w-full group-hover:bg-[#F87901] transition-all duration-300 mb-4" />

              <div>
                <div className="text-xs font-mono font-bold uppercase text-[#005EB1] mb-1">
                  {m.tag}
                </div>
                <div className="text-2xl font-extrabold text-[#111111] font-heading mb-2">
                  {m.year}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1.5">
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {m.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>Phase 0{idx + 1}</span>
                <Clock className="w-3.5 h-3.5 text-[#005EB1]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
