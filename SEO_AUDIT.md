# Technical SEO, AEO & GEO Audit — Icon Drugs
**Domain:** [https://icondrugs.com](https://icondrugs.com)  
**Legal Entity:** ICON DRUGS PRIVATE LIMITED  
**Headquarters:** Nagpur, Maharashtra, India  
**Audit Date:** November 2026  
**Auditor:** Principal Technical SEO & Structured Data Architect  
**Framework:** Next.js 16.3.8 (React 19.2.8, Turbopack, App Router)  
**Hosting Environment:** Ubuntu VPS (`46.202.162.79`), Nginx Reverse Proxy, PM2 Cluster  

---

## Executive Summary

A comprehensive 20-point technical, architectural, and semantic audit was conducted across the entire codebase and static rendering tree (60+ generated routes). 

While the website exhibits strong visual design, modern responsive UI, and excellent component modularity, critical technical gaps previously hindered organic indexing, rich snippet eligibility, and AI discoverability. Key issues identified include:
- Client-side rendering on `/products` preventing server-side metadata export.
- Absence of JSON-LD schemas (`Organization`, `Product`, `MedicalWebPage`, `Article`, `FAQPage`, `BreadcrumbList`).
- Missing canonical URLs and Open Graph tags across several dynamic routes.
- Internal search (`/search`) being exposed to indexation in `sitemap.xml`.
- Missing AI search manifests (`llms.txt`) for generative engine optimization (GEO).
- Generic local presence without Nagpur, Maharashtra NAP (Name, Address, Phone) data.
- Missing HTTP security headers and redirects for common URL variations.

---

## 20-Point Technical SEO Audit Matrix

| # | Inspection Area | Existing State | Severity | Technical Explanation | Recommended Action & Fix | Status |
|:--|:---|:---|:---|:---|:---|:---|
| **1** | **Framework & Version** | Next.js 16.3.8, React 19.2.8 | Low (Positive) | Cutting-edge App Router with Turbopack and static site generation (SSG). | Leverage full SSG capabilities (`generateStaticParams`, `generateMetadata`) on all pages. | Verified |
| **2** | **Routing Architecture** | Flat & nested dynamic routes (`/products/[slug]`, `/therapeutic-areas/[slug]`, `/health/[slug]`, `/insights/[slug]`) | Medium | Missing key corporate pages (`/about`, `/quality`, `/contact`, `/sitemap`) causing navigation voids. | Implement dedicated corporate routes with high-intent content and structured data. | Planned |
| **3** | **Existing Pages Count** | 60 static pages generated at build time | Low (Positive) | Healthy coverage across products (25), therapies (10), health guides (4), insights (3). | Expand with dedicated corporate authority hubs. | Planned |
| **4** | **Metadata Implementation** | Static layout metadata with basic fallback | High | Dynamic product pages had minimal titles and descriptions; `/products` catalog lacked metadata due to `"use client"`. | Separate `/products` into Server Component wrapper with metadata; enrich all dynamic route metadata. | Planned |
| **5** | **Existing SEO Config** | Minimal `metadataBase` in `layout.tsx` | High | Missing verification tags for Google Search Console and Bing Webmaster Tools; missing Twitter cards. | Configure comprehensive `verification`, OpenGraph locale (`en_IN`), and Twitter metadata. | Planned |
| **6** | **Robots.txt** | `src/app/robots.ts` allows `/` globally | High | Allows crawling of internal query search page `/search`, wasting Google crawl budget. | Add explicit `disallow: ["/search", "/api/"]` and link to XML sitemap. | Planned |
| **7** | **XML Sitemap** | `src/app/sitemap.ts` | High | Included `/search` in sitemap; lacked image metadata and proper prioritization. | Remove `/search`; add new corporate routes; refine change frequency and priority scores. | Planned |
| **8** | **Canonical Implementation** | Incomplete across pages | High | Dynamic pages lacked explicit `alternates.canonical` definitions; risk of duplicate query indexing. | Enforce explicit canonical tags with `https://icondrugs.com` on every route. | Planned |
| **9** | **Structured Data (JSON-LD)** | Completely missing | Critical | Zero schema markup present; no rich snippet eligibility for products, FAQs, breadcrumbs, or company. | Implement comprehensive Schema.org JSON-LD graph (`Organization`, `Product`, `FAQPage`, etc.). | Planned |
| **10** | **Internal Linking** | Basic navigation; isolated deep links | Medium | Missing automated breadcrumbs; limited cross-linking between therapeutic areas and business enquiry. | Add contextual breadcrumbs and bidirectional links across products, therapies, and conditions. | Planned |
| **11** | **Image Optimisation** | Next.js `<Image />` used with standard props | Low / Medium | Some hero backgrounds lacked `priority` flag while below-the-fold images lacked explicit `sizes`. | Audit image priority flags, responsive `sizes`, and descriptive `alt` texts for accessibility and image search. | Planned |
| **12** | **Rendering Strategy** | SSG (Static Site Generation) | Low (Positive) | 60/60 routes pre-rendered as static HTML at build time for instant TTFB. | Maintain SSG architecture for peak performance on VPS. | Verified |
| **13** | **JS Dependencies** | GSAP and Lenis smooth scrolling | Medium | Client hydration executes smoothly, but main content must remain 100% crawlable without JS execution. | Ensure pure semantic HTML fallback with all textual content directly in initial HTML payload. | Planned |
| **14** | **Mobile Responsiveness** | Tailwind responsive breakpoints | Low (Positive) | Fluid typography and mobile navigation functional across all screen widths. | Enhance touch targets to $\ge 48\text{px}$ and ensure no horizontal overflow. | Verified |
| **15** | **Page Speed & TTFB** | Hostinger Ubuntu VPS with Nginx | Medium | Lacks HTTP caching headers and gzip/brotli static asset pre-compression headers in Next config. | Add security and cache-control headers in `next.config.ts` and Nginx conf. | Planned |
| **16** | **Core Web Vitals** | Target: LCP < 2.5s, CLS < 0.1, INP < 200ms | Medium | Hero slider animations require proper font fallback and image dimensions to eliminate CLS. | Preload fonts with `display: swap`; reserve container aspect ratios for product packaging images. | Planned |
| **17** | **Redirect Configuration** | Missing standard aliases | Medium | Common variations like `/privacy-policy`, `/terms-and-conditions`, and `/contact` return 404 or unhandled paths. | Configure 301 permanent redirects in `next.config.ts`. | Planned |
| **18** | **Broken Links** | Anchor links (`/#our-story`, `/#quality`) | Medium | Deep linking from external pages to homepage fragment anchors needs dedicated pages. | Provide dedicated standalone URLs (`/about`, `/quality`) alongside anchor fallbacks. | Planned |
| **19** | **Duplicate Content** | Potential query parameter duplication | Low | Search results and filter states can generate duplicate URL parameters if crawled. | Disallow `/search` in `robots.txt` and canonicalize filtered product catalog to `/products`. | Planned |
| **20** | **Indexability & AI Discoverability** | No AEO/GEO assets | High | AI search engines (ChatGPT, Perplexity, Gemini, Claude) lack a standardized `/llms.txt` manifest. | Deploy `/llms.txt` and `/llms-full.txt` containing structured corporate and therapeutic monographs. | Planned |

---

## Detailed Findings by URL Category

### 1. Root & Corporate Pages (`/`)
- **Issue:** Homepage contains high-value FAQ content in `HomeFaqAccordion.tsx` but lacks `FAQPage` schema. Google cannot parse rich FAQ SERP accordions.
- **Issue:** Company NAP (Name, Address, Phone) uses placeholder strings (`+91 (0) 11-2940-XXXX`, `Pharma Industrial Zone Complex`) rather than verified Nagpur, Maharashtra location details.
- **Fix:** Embed unified JSON-LD graph (`Organization`, `WebSite`, `FAQPage`, `MedicalBusiness`) and update corporate NAP data.

### 2. Product Catalog (`/products`)
- **Issue:** File `src/app/products/page.tsx` starts with `"use client";`, which blocks Next.js `export const metadata`. As a result, the primary commercial catalog has no custom page title or meta description.
- **Fix:** Refactor into a Server Component `page.tsx` exporting high-converting metadata and `CollectionPage` schema, wrapping an interactive `ProductsCatalogClient.tsx`.

### 3. Product Monographs (`/products/[slug]`)
- **Issue:** 25 individual product pages have thin titles (e.g. `Prenerve-NT Clinical Monograph & Supply Terms | Icon Drugs`) without canonical URLs, Open Graph images, or structured `Product` schema.
- **Fix:** Add dynamic canonical tags, OpenGraph metadata with product packaging visuals, and Schema.org `Product` JSON-LD with active ingredients, dosage form, manufacturer, and supply terms.

### 4. Therapeutic Areas (`/therapeutic-areas/[slug]`)
- **Issue:** 10 therapeutic category hubs lack `MedicalWebPage` and `MedicalSpecialty` schemas.
- **Fix:** Inject structured `MedicalWebPage` schema linking related products, clinical indications, and ICD/therapy categories.

### 5. Health & Disease Guides (`/health/[slug]`)
- **Issue:** 4 health education pages lack medical reviewer attribution and `MedicalCondition` schema, weakening E-E-A-T signals.
- **Fix:** Implement `MedicalCondition` schema with signOrSymptom, riskFactor, and advisory board review attribution.

### 6. Insights & Articles (`/insights/[slug]`)
- **Issue:** Lacks `Article` / `BlogPosting` schema; lacks `author` and `publisher` entity references.
- **Fix:** Inject Schema.org `Article` schema with publisher `@id` reference to Icon Drugs Private Limited.

---

## Technical Audit Conclusion

The site has an exceptional design foundation. Resolving these 20 audit points will transform the site into an authoritative, search-engine-optimized, and AI-discoverable pharmaceutical asset.
