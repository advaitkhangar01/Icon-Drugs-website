import React from "react";
import Image from "next/image";
import { certificationsData } from "@/data/siteData";

export default function CertificationsRibbon() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-14 sm:py-18 bg-[#FBFDFE] border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Editorial Heading Block */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-5 h-[2px] bg-[#F87901]" aria-hidden="true" />
            <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
              Quality Assurance &amp; Compliance
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-12">
            <h2
              id="certifications-heading"
              className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-950 font-heading tracking-tight leading-snug"
            >
              Certifications &amp; Regulatory Standards
            </h2>

            <p className="text-sm text-slate-600 max-w-lg leading-relaxed font-normal">
              Our commitment to quality is reflected in the standards, laboratory practices and regulatory requirements governing our operations.
            </p>
          </div>
        </div>

        {/* Cohesive Corporate Credentials Register Panel */}
        <div className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {certificationsData.map((cert) => {
              return (
                <div
                  key={cert.id}
                  className="p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-50/50
                    border-b border-slate-200/80 last:border-b-0
                    sm:[&:nth-child(1)]:border-r sm:[&:nth-child(3)]:border-r
                    sm:[&:nth-child(2)]:border-b sm:[&:nth-child(4)]:border-b
                    sm:last:col-span-2 lg:last:col-span-1
                    lg:border-b-0 lg:[&:nth-child(1)]:border-b-0 lg:[&:nth-child(2)]:border-b-0 lg:[&:nth-child(3)]:border-b-0 lg:[&:nth-child(4)]:border-b-0
                    lg:border-r lg:last:border-r-0"
                >
                  {/* Logo Area: optically aligned with a common baseline */}
                  <div className="h-16 flex items-end justify-start mb-6">
                    {cert.isTypographicBadge || !cert.logoSrc ? (
                      /* Refined Scientific Typographic Laboratory Treatment for GLP */
                      <div className="flex flex-col justify-end">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-mono text-2xl font-black tracking-tight text-slate-900">
                            GLP
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                            LABS
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase mt-1">
                          Schedule L-1 In-House Protocol
                        </span>
                      </div>
                    ) : (
                      /* Authentic Verified Regulatory/Standard Logo */
                      <Image
                        src={cert.logoSrc}
                        alt={cert.logoAlt || `${cert.title} logo`}
                        width={140}
                        height={64}
                        className={`w-auto object-contain object-left ${
                          cert.id === "who-gmp"
                            ? "max-h-14"
                            : cert.id === "iso-9001"
                            ? "max-h-13"
                            : cert.id === "dcgi-approved"
                            ? "max-h-14"
                            : "max-h-11"
                        }`}
                        priority={cert.id === "who-gmp" || cert.id === "iso-9001"}
                      />
                    )}
                  </div>

                  {/* 3 Distinct Text Levels: Category, Name, Short Descriptor */}
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 block mb-1">
                      {cert.category}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading tracking-tight leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                      {cert.descriptor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Restrained Horizontal Footer Beneath the Credentials Panel */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#005EB1]" aria-hidden="true" />
            <span>Quality Assurance Protocols</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 text-xs font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#005EB1]" aria-hidden="true" />
              Raw Material Identity Testing
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#005EB1]" aria-hidden="true" />
              Stability Testing &amp; Validation
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#005EB1]" aria-hidden="true" />
              Pharmacovigilance &amp; Batch Traceability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}