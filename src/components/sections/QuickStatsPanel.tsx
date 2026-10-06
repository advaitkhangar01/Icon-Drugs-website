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
    <section ref={containerRef} className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,94,177,0.08)] border border-slate-200/90 p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`stat-item flex flex-col justify-between ${
                idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#005EB1] tracking-tight font-heading mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-[#111111] mb-1">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
