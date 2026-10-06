import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <section className="bg-[#00477F] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Terms of Use
            </h1>
            <p className="text-slate-300 mt-2 text-sm">Effective: October 2026</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and navigating this website, you agree to comply with and be bound by these Terms of Use and all applicable domestic and international regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Corporate & Informational Intent</h2>
            <p>
              This website serves as a corporate and brand portal detailing our manufacturing history, WHO-GMP certifications, therapeutic fields, and business services. It does not operate as an online pharmacy, direct-to-consumer pharmacy retailer, or e-commerce storefront.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Intellectual Property</h2>
            <p>
              All trademarks, product names, logos, formulation specifications, and custom graphics displayed on this website are the intellectual property of Icon Drugs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
