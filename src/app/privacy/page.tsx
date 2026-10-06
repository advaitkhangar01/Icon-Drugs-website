import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <section className="bg-[#00477F] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Privacy Policy & Data Protection
            </h1>
            <p className="text-slate-300 mt-2 text-sm">Last updated: October 2026</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              Icon Drugs (&quot;Icon Drugs&quot;, &quot;we&quot;, &quot;us&quot;) is committed to respecting the privacy and data integrity of all website visitors, healthcare professionals, hospital partners, and distributor affiliates. This Privacy Policy details how we handle inquiry communications and corporate data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              We collect information provided directly through our Business Enquiry form, including names, corporate email addresses, institutional organizations, phone numbers, and product requirement queries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Utilization of Information</h2>
            <p>
              Collected information is strictly used for fulfilling commercial tender submissions, replying to medical inquiries, verifying professional licensing, and sending requested prescribing monographs. We do not sell or monetize client or provider contact data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Pharmacovigilance Data</h2>
            <p>
              Adverse event disclosures received through our contact desks are processed in compliance with statutory drug safety and regulatory post-marketing surveillance obligations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
