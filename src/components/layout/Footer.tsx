import React from "react";
import Link from "next/link";
import IconLogo from "@/components/ui/IconLogo";
import { companyData, therapyAreasData } from "@/data/siteData";
import { ShieldCheck, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#00477F] text-white overflow-hidden pt-20 pb-12 border-t-4 border-[#F87901]">
      {/* Translucent logo arc geometry decorative background */}
      <div
        className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/3 top-0 w-80 h-80 rounded-full border border-[#A285D5]/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/15">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block" aria-label="Icon Drugs Home">
              <IconLogo variant="white" className="h-11 w-auto" />
            </Link>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
              Established pharmaceutical manufacturing enterprise committed to scientific rigor, certified WHO-GMP standards, and therapeutic accessibility across 25+ global markets.
            </p>

            {/* Quality Accreditations Badge row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {companyData.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/15 text-xs font-semibold text-blue-100"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F87901]" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Column: Company */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#F87901]">
              Our Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Heritage &amp; Story (About Us)
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  Quality Management &amp; WHO-GMP
                </Link>
              </li>
              <li>
                <Link href="/healthcare-professionals" className="hover:text-white transition-colors">
                  HCP Portal &amp; Standards
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  News &amp; Scientific Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Nagpur Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Therapies & Products */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#F87901]">
              Therapies & Formulations
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {therapyAreasData.slice(0, 4).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/therapeutic-areas/${area.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 font-bold text-white hover:text-[#F87901] transition-colors"
                >
                  Product Catalog <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Institutional & Connect */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#F87901]">
              Institutional Connect
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For hospital supply inquiries, export partnerships, contract manufacturing, or regulatory dossiers:
            </p>
            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F87901] shrink-0" />
                <span>business@icondrugs.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F87901] shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
            <Link
              href="/business-enquiry"
              className="inline-block px-4 py-2.5 rounded-lg bg-[#F87901] hover:bg-[#e06c00] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Business Enquiry Form
            </Link>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Icon Drugs Private Limited. All rights reserved. For informational purposes only.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Medical &amp; Regulatory Disclaimer
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              HTML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
