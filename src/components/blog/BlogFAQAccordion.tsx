"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { BlogFAQ } from "@/data/blogsData";

interface BlogFAQAccordionProps {
  faqs: BlogFAQ[];
}

export default function BlogFAQAccordion({ faqs }: BlogFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mt-14 pt-8 border-t border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005EB1] flex items-center justify-center">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Expert medical insights and regulatory clarifications from Icon Drugs
          </p>
        </div>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-blue-200 bg-blue-50/20 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left px-5 py-4 sm:py-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-[#005EB1] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    Q{idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#005EB1]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-blue-100/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
