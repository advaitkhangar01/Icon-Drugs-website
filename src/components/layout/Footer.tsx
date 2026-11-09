import React from "react";
import Link from "next/link";
import IconLogo from "@/components/ui/IconLogo";
import { companyData, therapyAreasData } from "@/data/siteData";
import { ShieldCheck, Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";

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
              Established pharmaceutical manufacturing enterprise headquartered in Nagpur, Maharashtra (Incorporated 2002, CIN: U24231MH2002PTC134479). Formulating high-bioavailability therapeutic medicines across India.
            </p>

            {/* Accreditations Badge row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/15 text-xs font-semibold text-blue-100">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F87901]" />
                DCGI Approved Formulations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/15 text-xs font-semibold text-blue-100">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F87901]" />
                Nagpur, Maharashtra
              </span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-3 space-y-2.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#F87901]">
                Follow &amp; Connect With Us
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/company/icon-drugs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Icon Drugs on LinkedIn"
                  title="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0077B5] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-[#0077B5] hover:scale-105 shadow-xs"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61596072134328"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Icon Drugs on Facebook"
                  title="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-[#1877F2] hover:scale-105 shadow-xs"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/icondrugs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Icon Drugs on Instagram"
                  title="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-transparent hover:scale-105 shadow-xs"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://x.com/icondrugs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Icon Drugs on X (Twitter)"
                  title="X (Twitter)"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-black hover:scale-105 shadow-xs"
                >
                  <TwitterIcon size={16} />
                </a>
                <a
                  href="https://wa.me/919823044000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Icon Drugs on WhatsApp"
                  title="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-[#25D366] hover:scale-105 shadow-xs"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
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
                  Heritage &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/corporate-information" className="hover:text-white transition-colors">
                  Corporate Information &amp; Facts
                </Link>
              </li>
              <li>
                <Link href="/pharmaceutical-company-in-nagpur" className="hover:text-white transition-colors">
                  Pharma Company in Nagpur
                </Link>
              </li>
              <li>
                <Link href="/pharmaceutical-manufacturing-maharashtra" className="hover:text-white transition-colors">
                  Manufacturing in Maharashtra
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  Quality Management &amp; Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Dharampeth Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Therapies & Products */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#F87901]">
              Formulations &amp; Supply
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/pharmaceutical-products-formulations" className="hover:text-white transition-colors">
                  Formulations Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pharmaceutical-distribution-supply" className="hover:text-white transition-colors">
                  PCD Franchise &amp; Supply
                </Link>
              </li>
              <li>
                <Link href="/products/prenerve-caps" className="hover:text-white transition-colors">
                  Prenerve&reg; Range (Neurology)
                </Link>
              </li>
              <li>
                <Link href="/products/apar-range" className="hover:text-white transition-colors">
                  APAR&reg; Series (Orthopedics)
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 font-bold text-white hover:text-[#F87901] transition-colors"
                >
                  Master Product Catalog <ArrowUpRight className="w-3.5 h-3.5" />
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
