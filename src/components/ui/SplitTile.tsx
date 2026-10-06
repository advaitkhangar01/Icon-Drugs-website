"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

interface SplitTileProps {
  id?: string;
  side?: "left" | "right";
  splitRatio?: "50/50" | "40/60" | "60/40";
  imageSrc: string;
  imageAlt: string;
  categoryTag?: string;
  headline: string;
  subtext: string;
  bulletPoints?: string[];
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgColor?: string; // hex or tailwind class
  textColor?: "dark" | "light";
  statBadge?: { value: string; label: string };
  overlayGraphic?: "arc" | "pillar" | "none";
}

export default function SplitTile({
  id,
  side = "left",
  imageSrc,
  imageAlt,
  categoryTag,
  headline,
  subtext,
  bulletPoints,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  bgColor = "bg-white",
  textColor = "dark",
  statBadge,
  overlayGraphic = "arc",
}: SplitTileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageRef.current && contentRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.04, opacity: 0.9 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
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
          contentRef.current,
          { y: 20, opacity: 0.9 },
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
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const isLightText = textColor === "light";
  const isImageLeft = side === "left";

  return (
    <section id={id} ref={containerRef} className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,94,177,0.06)] border border-slate-200/90 ${bgColor}`}
        >
          {/* Image Container */}
          <div
            className={`relative min-h-[320px] lg:min-h-[460px] overflow-hidden ${
              isImageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
            }`}
          >
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              {/* Subtle tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Floating Stat Badge */}
              {statBadge && (
                <div className="absolute bottom-5 left-5 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-lg max-w-xs">
                  <div className="text-xl font-extrabold text-[#005EB1] tracking-tight">
                    {statBadge.value}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#424242]">
                    {statBadge.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Panel */}
          <div
            ref={contentRef}
            className={`relative p-6 sm:p-10 lg:p-12 flex flex-col justify-center ${
              isImageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
            } ${isLightText ? "text-white" : "text-[#111111]"}`}
          >
            {/* Background Arc Geometric Detail */}
            {overlayGraphic === "arc" && (
              <div
                className="absolute top-0 right-0 w-56 h-56 border border-[#A285D5]/20 rounded-full translate-x-20 -translate-y-20 pointer-events-none"
                aria-hidden="true"
              />
            )}

            {/* Category tag / pill */}
            {categoryTag && (
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F87901]" />
                <span
                  className={`text-xs uppercase tracking-[0.2em] font-bold ${
                    isLightText ? "text-[#A285D5]" : "text-[#005EB1]"
                  }`}
                >
                  {categoryTag}
                </span>
              </div>
            )}

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug mb-3">
              {headline}
            </h2>

            {/* Subtext */}
            <p
              className={`text-sm sm:text-base leading-relaxed mb-5 ${
                isLightText ? "text-slate-200" : "text-[#555555]"
              }`}
            >
              {subtext}
            </p>

            {/* Bullet Points */}
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-2.5 mb-6">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#005EB1]/10 text-[#005EB1] flex items-center justify-center font-bold text-[11px]">
                      ✓
                    </span>
                    <span
                      className={`text-xs sm:text-sm ${
                        isLightText ? "text-slate-300" : "text-[#424242]"
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTAs */}
            {(primaryCtaText || secondaryCtaText) && (
              <div className="flex flex-wrap items-center gap-3 mt-1">
                {primaryCtaText && (
                  <Link
                    href={primaryCtaLink || "#"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F87901] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#e06c00] transition-colors shadow-sm group"
                  >
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}

                {secondaryCtaText && (
                  <Link
                    href={secondaryCtaLink || "#"}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider border transition-colors ${
                      isLightText
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-slate-300 text-[#00477F] hover:bg-slate-100"
                    }`}
                  >
                    <span>{secondaryCtaText}</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
