"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { heroSlides, HeroSlide } from "@/data/siteData";

export default function HeroSlider() {
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const totalSlides = heroSlides.length;

  const slideRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const animateIn = useCallback(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline();

    if (imageContainerRef.current) {
      tl.fromTo(
        imageContainerRef.current,
        { scale: 1.05, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
      );
    }

    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        {
          clipPath: "inset(100% 0 0 0)",
          y: 30,
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "<0.2"
      );
    }

    if (subtextRef.current) {
      tl.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "<0.25"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "<0.2"
      );
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay 4.2 seconds
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 4200);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPlaying, nextSlide]);

  useEffect(() => {
    animateIn();
  }, [current, animateIn]);

  const activeSlide: HeroSlide = heroSlides[current];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Icon Drugs Key Commitments"
      className="relative w-full h-[92dvh] min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] max-h-[1100px] overflow-hidden bg-[#00477F]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Layer with Zoom & Overlay */}
      <div ref={imageContainerRef} className="absolute inset-0 w-full h-full">
        <Image
          src={activeSlide.bgImage}
          alt={activeSlide.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Editorial Brand Gradient Tint Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00477F]/95 via-[#00477F]/80 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00477F] via-transparent to-black/30" />
      </div>

      {/* Decorative Brand SVG Geometry (Logo Arc & Vertical Pillar) */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none translate-x-1/3 hidden md:block"
        aria-hidden="true"
      />
      <div
        className="absolute left-10 bottom-24 top-36 w-1 bg-gradient-to-b from-[#005EB1] via-[#F87901] to-transparent opacity-40 hidden xl:block"
        aria-hidden="true"
      />

      {/* Slide Content Container */}
      <div
        ref={slideRef}
        className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-12 flex flex-col justify-center pt-28 sm:pt-36 lg:pt-44 xl:pt-48 pb-28 sm:pb-32 lg:pb-36"
      >
        <div className="max-w-3xl">
          {/* Accent Label */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1 rounded bg-[#F87901] text-white text-xs font-bold tracking-widest uppercase">
              {activeSlide.accentLabel}
            </span>
            <span className="text-white/70 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {activeSlide.tagline}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1
            ref={headlineRef}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 font-heading"
          >
            {activeSlide.headline}
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            className="text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal mb-6 sm:mb-10 max-w-2xl line-clamp-3 sm:line-clamp-none"
          >
            {activeSlide.subtext}
          </p>

          {/* Action CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <Link
              href={activeSlide.ctaLink}
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-lg bg-[#F87901] text-white font-bold text-sm sm:text-base hover:bg-[#e06c00] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F87901]/30 group min-h-[44px]"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all min-h-[44px]"
            >
              Explore Formulations
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Slider Navigation and Controls Bar */}
      <div className="absolute bottom-6 sm:bottom-14 left-0 right-0 z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between pb-safe">
        {/* Slide Indicators / Tabs */}
        <div className="flex items-center gap-2 sm:gap-4">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`group flex items-center gap-2 py-2 text-left transition-all ${
                current === idx ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              <span
                className={`text-xs font-mono font-bold transition-colors ${
                  current === idx ? "text-[#F87901]" : "text-white"
                }`}
              >
                0{idx + 1}
              </span>
              <div
                className={`h-1 transition-all rounded-full ${
                  current === idx
                    ? "w-10 sm:w-16 bg-[#F87901]"
                    : "w-4 sm:w-8 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Play/Pause & Arrows */}
        <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            className="p-1.5 text-white/80 hover:text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <div className="w-[1px] h-4 bg-white/20" />
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-1.5 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-1.5 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
