"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { therapyAreasData, TherapyArea } from "@/data/siteData";
import TherapeuticAreaIllustration, {
  THERAPEUTIC_AREA_ASSETS,
} from "@/components/illustrations/TherapeuticAreaIllustration";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

export default function TherapeuticFocusGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const totalCards = therapyAreasData.length;
  // Authoritative enterprise card geometry: wider horizontal span (420px) + gap (24px)
  const cardWidth = 420;
  const cardGap = 24;
  const stepSize = cardWidth + cardGap;
  const maxTranslate = (totalCards - 1) * stepSize;

  // Viewport and accessibility detection
  useEffect(() => {
    setIsMounted(true);
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkViewport();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    window.addEventListener("resize", checkViewport, { passive: true });
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkViewport);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Programmatic smooth navigation to specific card index
  const scrollToIndex = useCallback(
    (index: number) => {
      const targetIdx = Math.max(0, Math.min(totalCards - 1, index));
      setActiveIndex(targetIdx);
      const newProgress = (targetIdx / (totalCards - 1)) * 100;
      setScrollProgress(newProgress);

      if (isDesktop && trackRef.current) {
        if (prefersReducedMotion) {
          trackRef.current.style.transform = `translateX(-${targetIdx * stepSize}px)`;
          return;
        }

        gsap.to(trackRef.current, {
          x: -targetIdx * stepSize,
          duration: 0.65,
          ease: "power2.out",
          overwrite: "auto",
        });

        if (scrollTriggerInstance.current) {
          const st = scrollTriggerInstance.current;
          const totalDistance = st.end - st.start;
          const targetScroll = st.start + (targetIdx / (totalCards - 1)) * totalDistance;
          const lenis = (window as any).__lenis;
          if (lenis) {
            lenis.scrollTo(targetScroll, {
              duration: 0.75,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            window.scrollTo({
              top: targetScroll,
              behavior: "smooth",
            });
          }
        }
      } else if (mobileScrollRef.current) {
        const container = mobileScrollRef.current;
        const width = container.querySelector(".mobile-card")?.clientWidth || 300;
        container.scrollTo({
          left: targetIdx * (width + 16),
          behavior: "smooth",
        });
      }
    },
    [isDesktop, prefersReducedMotion, totalCards, stepSize]
  );

  // Keyboard navigation when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowRight") {
        if (activeIndex < totalCards - 1) {
          e.preventDefault();
          scrollToIndex(activeIndex + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (activeIndex > 0) {
          e.preventDefault();
          scrollToIndex(activeIndex - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, totalCards, scrollToIndex]);

  // GSAP ScrollTrigger setup for calm, predictable horizontal progression
  useEffect(() => {
    if (!isMounted || !isDesktop || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Measured vertical travel distance (~340px per card for refined, responsive pacing)
    const pinScrollDistance = totalCards * 340;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top top",
        end: `+=${pinScrollDistance}`,
        scrub: 0.65, // Calm physical inertia without jarring snaps
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress * 100);

          // Calculate active card index smoothly
          const calculatedIndex = Math.min(
            totalCards - 1,
            Math.max(0, Math.round(progress * (totalCards - 1)))
          );
          setActiveIndex(calculatedIndex);

          // Translate horizontal track along X
          if (track) {
            const currentX = -progress * maxTranslate;
            gsap.set(track, { x: currentX, force3D: true });
          }
        },
      });

      scrollTriggerInstance.current = st;
    }, section);

    return () => {
      scrollTriggerInstance.current = null;
      ctx.revert();
    };
  }, [isMounted, isDesktop, prefersReducedMotion, totalCards, maxTranslate]);

  // Handle mobile touch horizontal scroll sync
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const width = container.querySelector(".mobile-card")?.clientWidth || 300;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.min(
      totalCards - 1,
      Math.max(0, Math.round(scrollLeft / (width + 16)))
    );
    setActiveIndex(newIndex);
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const currentArea = therapyAreasData[activeIndex] || therapyAreasData[0];

  const getCleanDomainLabel = (id: string, name: string) => {
    return THERAPEUTIC_AREA_ASSETS[id]?.cleanLabel || name.split("&")[0].trim();
  };

  return (
    <section
      ref={sectionRef}
      id="therapeutic-areas"
      className="relative w-full bg-gradient-to-b from-white via-[#F7F9FB] to-white overflow-hidden py-8 md:pt-28 md:pb-6 select-none"
    >
      {/* Background Brand Geometry Ambient Rings */}
      <div
        className="absolute right-0 top-1/4 w-[450px] h-[450px] rounded-full border border-[#005EB1]/5 pointer-events-none translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 bottom-6 w-[350px] h-[350px] rounded-full border border-[#A285D5]/10 pointer-events-none -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-2 md:mb-3">
        {/* Compact, Sleek Header Row Fitting Cleanly in Any Viewport */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#005EB1]/10 text-[#005EB1] text-[11px] font-bold uppercase tracking-wider mb-1">
              <SlidersHorizontal className="w-3 h-3 text-[#F87901]" />
              <span>Specialized Therapeutic Portfolios</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111111] tracking-tight font-heading leading-tight">
              Where scientific rigor meets pressing healthcare needs.
            </h2>
          </div>

          {/* Action Link & Direct Prev/Next Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/therapeutic-areas"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005EB1] hover:text-[#F87901] transition-colors group border-b border-[#005EB1]/20 pb-0.5"
            >
              <span>View All Portfolios</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous therapeutic area"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed transition-colors shadow-xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === totalCards - 1}
                aria-label="Next therapeutic area"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed transition-colors shadow-xs"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP & TABLET: CALM, UNIFORM HORIZONTAL TRACK             */}
      {/* ============================================================ */}
      <div
        className={`hidden md:block w-full pt-8 pb-4 ${
          prefersReducedMotion ? "overflow-x-auto scrollbar-thin" : "overflow-visible"
        }`}
      >
        <div
          ref={trackRef}
          className="flex items-end gap-6 pl-6 sm:pl-12 lg:pl-16 will-change-transform"
          style={{ width: "max-content" }}
        >
          {therapyAreasData.map((area: TherapyArea, index: number) => {
            const isActive = activeIndex === index;
            const indexStr = String(index + 1).padStart(2, "0");
            const cleanLabel = getCleanDomainLabel(area.id, area.name);

            return (
              <div
                key={area.id}
                data-card-index={index}
                onClick={() => scrollToIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${area.name}`}
                aria-current={isActive ? "true" : undefined}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToIndex(index);
                  }
                }}
                className={`therapeutic-card group relative w-[420px] h-[415px] rounded-[24px] cursor-pointer flex-shrink-0 select-none p-6 flex flex-col justify-between transition-all duration-500 ease-out ${
                  isActive
                    ? "bg-white border-2 border-[#005EB1] shadow-[0_16px_40px_rgba(0,94,177,0.14)] z-20"
                    : "bg-white hover:bg-slate-50/90 border border-slate-200/90 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-md z-10"
                }`}
              >
                {/* Large Background Watermark Numerals */}
                <span
                  className={`absolute top-4 left-6 font-extrabold select-none transition-colors duration-300 font-heading pointer-events-none -z-0 ${
                    isActive ? "text-6xl text-[#005EB1]/10" : "text-5xl text-slate-100"
                  }`}
                  aria-hidden="true"
                >
                  {indexStr}
                </span>

                {/* Clean Enterprise Top Row: Domain Tag (Left) & Formulation Badge (Right) */}
                <div className="w-full flex items-center justify-between z-20 relative">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`px-2 py-0.5 rounded-md font-mono text-[11px] font-extrabold tracking-wider transition-colors ${
                        isActive
                          ? "bg-[#005EB1] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {indexStr}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      PORTFOLIO
                    </span>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-tight transition-colors ${
                      isActive
                        ? "bg-[#005EB1]/10 text-[#005EB1] border border-[#005EB1]/20"
                        : "bg-slate-100 text-slate-500 border border-slate-200/60"
                    }`}
                  >
                    {area.stats}
                  </span>
                </div>

                {/* Illustration Stage: Consistent 150-190px Footprint with 2.5D Isometric Render */}
                <div className="w-full h-[180px] relative flex items-center justify-center my-auto overflow-visible z-10">
                  <div className="w-[175px] h-[175px] relative flex items-center justify-center">
                    <TherapeuticAreaIllustration
                      id={area.id}
                      className="w-full h-full"
                      isActive={isActive}
                      priority={index < 3}
                    />
                  </div>
                </div>

                {/* Content Block: Category Name & Short Clinical Description */}
                <div className="z-10 mt-1">
                  <h3
                    className={`font-black font-heading leading-snug line-clamp-1 transition-colors ${
                      isActive
                        ? "text-lg text-slate-900"
                        : "text-base text-slate-800 group-hover:text-slate-900"
                    }`}
                  >
                    {area.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {area.shortDesc}
                  </p>
                </div>

                {/* Bottom Action Pill: Direct Navigation Link */}
                <div className="w-full pt-3 z-10 border-t border-slate-100 mt-2">
                  <Link
                    href={`/therapeutic-areas/${area.slug}`}
                    onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault();
                        scrollToIndex(index);
                      }
                    }}
                    className={`w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-300 ${
                      isActive
                        ? "bg-[#005EB1] hover:bg-[#00477F] text-white shadow-xs"
                        : "bg-slate-100 hover:bg-[#005EB1]/10 text-slate-700 hover:text-[#005EB1]"
                    }`}
                  >
                    <span className="truncate pr-2 font-bold tracking-wide">
                      {isActive ? `Explore ${cleanLabel}` : cleanLabel}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white text-slate-500 group-hover:text-[#005EB1] shadow-2xs"
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE: TOUCH-FRIENDLY HORIZONTAL CAROUSEL                   */}
      {/* ============================================================ */}
      <div className="block md:hidden w-full">
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 pt-2 scrollbar-none"
        >
          {therapyAreasData.map((area: TherapyArea, index: number) => {
            const isActive = activeIndex === index;
            const indexStr = String(index + 1).padStart(2, "0");
            const cleanLabel = getCleanDomainLabel(area.id, area.name);

            return (
              <div
                key={area.id}
                data-mobile-index={index}
                onClick={() => scrollToIndex(index)}
                className={`mobile-card w-[84vw] max-w-[340px] shrink-0 snap-center rounded-2xl p-5 bg-white border transition-all duration-300 ${
                  isActive
                    ? "border-[#005EB1] shadow-[0_10px_25px_rgba(0,94,177,0.12)]"
                    : "border-slate-200/90 shadow-xs"
                }`}
              >
                {/* Card Top: Index and Formulation Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#F87901]">
                    {indexStr} / {String(totalCards).padStart(2, "0")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#005EB1]/10 text-[#005EB1] text-[10px] font-mono font-bold">
                    {area.stats}
                  </span>
                </div>

                {/* Mobile Illustration Container: Consistent 140px Footprint */}
                <div className="w-36 h-36 mx-auto mb-2 relative flex items-center justify-center">
                  <TherapeuticAreaIllustration
                    id={area.id}
                    className="w-full h-full"
                    isActive={isActive}
                    priority={index < 2}
                  />
                </div>

                {/* Title & Short Description */}
                <h3 className="text-base font-black text-slate-900 font-heading mb-1 leading-snug line-clamp-1">
                  {area.name}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-3 line-clamp-2">
                  {area.shortDesc}
                </p>

                {/* Explore Button */}
                <Link
                  href={`/therapeutic-areas/${area.slug}`}
                  className="w-full py-2 px-3.5 rounded-xl bg-[#005EB1] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore {cleanLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* PROGRESS BAR & CONTROLS FOOTER ROW                           */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 md:mt-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
          {/* Active Area Indicator Text */}
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <span className="font-mono font-bold text-[#F87901]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(totalCards).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
              {currentArea.name}
            </span>
          </div>

          {/* Reference-Matched Sleek Horizontal Progress Bar */}
          <div className="w-full sm:w-80 md:w-96 flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-slate-200/80 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#005EB1] to-[#F87901] rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${Math.max(10, scrollProgress)}%`,
                }}
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-slate-500 shrink-0">
              {Math.round(Math.max(10, scrollProgress))}%
            </span>
          </div>

          {/* Compliance Tag */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#F87901]" />
            <span>Curated WHO-GMP Monographed Formulations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
