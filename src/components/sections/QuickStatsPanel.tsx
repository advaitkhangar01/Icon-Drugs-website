"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { quickStats } from "@/data/siteData";

export default function QuickStatsPanel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,94,177,0.08)] border border-slate-200/90 py-5 sm:py-6 px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-slate-100 sm:divide-x">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`stat-item flex flex-col justify-between ${
                idx % 2 !== 0 ? "border-l border-slate-100 pl-4 sm:border-l-0 sm:pl-0" : ""
              } ${idx > 0 ? "sm:pl-6 lg:pl-8" : ""}`}
            >
              <div>
                <div className="text-2xl sm:text-4xl font-extrabold text-[#005EB1] tracking-tight font-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-[#111111] leading-tight">
                  {stat.label}
                </div>
              </div>
              <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed mt-1 line-clamp-2 sm:line-clamp-none">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
