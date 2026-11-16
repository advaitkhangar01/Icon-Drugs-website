"""
Automated Blog Database Synchronization Script for Icon Drugs
Configured for: 2 POSTS PER WEEK (Every Tuesday & Friday at 09:00 AM IST)
Extracts, structures, and enriches 40 blog articles from Excel strategy sheet into TypeScript/JSON data layer.
Generates SEO, AEO, and GEO metadata, FAQ pairs, internal links, and 10-image semantic rotation.
"""

import openpyxl
import json
import re
import os
from datetime import datetime, timedelta

EXCEL_PATH = r"D:\Freelance\Icon Drugs\blog\ICON_DRUGS_40_BLOG_CONTENT_STRATEGY.xlsx"
OUTPUT_JSON = r"src\data\blogsData.json"
OUTPUT_TS = r"src\data\blogsData.ts"

CATEGORY_IMAGE_MAP = {
    "Disease Awareness": "/images/blog/blog-hero-01.webp",
    "Preventive Healthcare": "/images/blog/blog-hero-02.webp",
    "Pharmaceutical Science": "/images/blog/blog-hero-03.webp",
    "Quality & Manufacturing": "/images/blog/blog-hero-04.webp",
    "Medicine Storage": "/images/blog/blog-hero-05.webp",
    "Patient Safety": "/images/blog/blog-hero-06.webp",
    "Healthcare Literacy": "/images/blog/blog-hero-07.webp",
    "Generic Medicines": "/images/blog/blog-hero-08.webp",
    "Responsible Medicine Use": "/images/blog/blog-hero-09.webp",
    "Medicine Education": "/images/blog/blog-hero-10.webp",
}

ALL_HERO_IMAGES = [
    f"/images/blog/blog-hero-{i:02d}.webp" for i in range(1, 11)
]

def parse_faqs(raw_q, raw_a):
    if not raw_q or not raw_a:
        return []
    q_parts = re.split(r"Q\d+:\s*", str(raw_q).strip())
    questions = [q.strip() for q in q_parts if q.strip()]
    a_parts = re.split(r"A\d+:\s*", str(raw_a).strip())
    answers = [a.strip() for a in a_parts if a.strip()]
    faqs = []
    for q, a in zip(questions, answers):
        faqs.append({"question": q, "answer": a})
    return faqs

def clean_content_body(raw_content, title):
    if not raw_content:
        return ""
    content = str(raw_content).strip()
    lines = content.split("\n")
    cleaned_lines = []
    skipping_header = True
    for line in lines:
        stripped = line.strip()
        if skipping_header:
            if stripped.startswith("# ") or stripped.startswith("**How ") or stripped.startswith("**If ") or stripped.startswith("**Why ") or stripped.startswith("**Streptococcus ") or stripped.startswith("**They ") or stripped == "---":
                continue
            if stripped == "":
                continue
            skipping_header = False
        cleaned_lines.append(line)
    return "\n".join(cleaned_lines).strip()

def extract_direct_answer(content_body, meta_desc):
    paragraphs = [p.strip() for p in content_body.split("\n\n") if p.strip() and not p.strip().startswith("#")]
    for p in paragraphs:
        if len(p) > 120 and len(p) < 400 and not p.startswith("Picture this") and not p.startswith("Imagine"):
            clean_text = re.sub(r"\*\*([^*]+)\*\*", r"\1", p)
            return clean_text
    return meta_desc

def main():
    print(f"Loading Excel workbook: {EXCEL_PATH}")
    wb = openpyxl.load_workbook(EXCEL_PATH, data_only=True)
    ws = wb["Master Blog Database"]

    # First pass: collect basic metadata for resolving internal links
    blog_registry = {}
    rows = list(ws.iter_rows(values_only=True))[2:]  # Skip 2 title rows
    
    for row in rows:
        serial = row[0]
        if serial is None:
            continue
        serial = int(serial)
        title = str(row[1]).strip()
        slug = str(row[15]).strip().replace("/blog/", "").strip("/")
        category = str(row[8]).strip()
        blog_registry[serial] = {
            "serialNumber": serial,
            "title": title,
            "slug": slug,
            "category": category,
        }

    # 2 POSTS PER WEEK SCHEDULE
    # Anchor date: Tuesday, Nov 10, 2026 at 09:00 AM IST
    # Blog #1: Tue, Nov 10, 2026 (Live)
    # Blog #2: Fri, Nov 13, 2026 (Live)
    # Blog #3: Tue, Nov 17, 2026 (Scheduled)
    # Blog #4: Fri, Nov 20, 2026 (Scheduled)
    # ... exactly 2 per week every Tuesday & Friday
    base_tuesday = datetime(2026, 11, 10, 9, 0, 0)
    current_time = datetime(2026, 11, 14, 19, 30, 0)

    articles = []
    category_counts = {}

    for row in rows:
        serial = row[0]
        if serial is None:
            continue
        serial = int(serial)
        title = str(row[1]).strip()
        headline = str(row[2]).strip()
        raw_content = row[4]
        meta_title = str(row[5]).strip()
        meta_tags = [t.strip() for t in str(row[6]).split("|") if t.strip()]
        keywords = [k.strip() for k in str(row[7]).split(",") if k.strip()]
        content_category = str(row[8]).strip()
        theme_category = str(row[9]).strip()
        target_audience = str(row[10]).strip()
        search_intent = str(row[11]).strip()
        primary_kw = str(row[12]).strip()
        secondary_kws = [k.strip() for k in str(row[13]).split("|") if k.strip()]
        long_tail_kws = [k.strip() for k in str(row[14]).split("|") if k.strip()]
        slug = str(row[15]).strip().replace("/blog/", "").strip("/")
        meta_description = str(row[16]).strip()
        image_alt = str(row[18]).strip()
        raw_faqs_q = row[19]
        raw_faqs_a = row[20]
        raw_internal_links = str(row[21]) if row[21] else ""
        external_sources = str(row[22]).strip() if row[22] else ""
        source_url = str(row[23]).strip() if row[23] else ""

        # Content processing
        cleaned_content = clean_content_body(raw_content, title)
        word_count = len(re.findall(r"\w+", cleaned_content))
        read_time = f"{max(3, round(word_count / 220))} min read"
        direct_answer = extract_direct_answer(cleaned_content, meta_description)
        faqs = parse_faqs(raw_faqs_q, raw_faqs_a)

        # 10-Image Rotation resolver
        cat_count = category_counts.get(content_category, 0)
        category_counts[content_category] = cat_count + 1
        
        base_img = CATEGORY_IMAGE_MAP.get(content_category, "/images/blog/blog-hero-01.webp")
        if cat_count > 0:
            img_idx = ((serial - 1) % 10)
            selected_image = ALL_HERO_IMAGES[img_idx]
        else:
            selected_image = base_img

        # Resolve internal links
        internal_links = []
        for match in re.finditer(r"Blog #(\d+)", raw_internal_links):
            target_num = int(match.group(1))
            if target_num in blog_registry and target_num != serial:
                internal_links.append({
                    "serialNumber": target_num,
                    "title": blog_registry[target_num]["title"],
                    "slug": blog_registry[target_num]["slug"],
                    "category": blog_registry[target_num]["category"],
                })

        # Calculate exact 2 per week schedule (Tuesday & Friday)
        idx_0based = serial - 1
        week_num = idx_0based // 2
        is_friday = (idx_0based % 2 == 1)
        days_offset = (week_num * 7) + (3 if is_friday else 0)
        publish_dt = base_tuesday + timedelta(days=days_offset)
        publish_date_iso = publish_dt.strftime("%Y-%m-%dT%H:%M:%S+05:30")
        publish_date_display = publish_dt.strftime("%B %d, %Y")
        day_of_week = "Friday" if is_friday else "Tuesday"
        schedule_week_label = f"Week {week_num + 1:02d} ({day_of_week})"

        is_currently_published = publish_dt <= current_time

        article = {
            "id": f"blog-{serial:02d}",
            "serialNumber": serial,
            "title": title,
            "headline": headline,
            "slug": slug,
            "publishDate": publish_date_iso,
            "publishDateDisplay": publish_date_display,
            "scheduleLabel": schedule_week_label,
            "isPublished": is_currently_published,
            "readTime": read_time,
            "wordCount": word_count,
            "contentCategory": content_category,
            "themeCategory": theme_category,
            "author": "Icon Drugs Medical Review Board",
            "authorRole": "Clinical & Scientific Affairs Division",
            "image": selected_image,
            "imageAlt": image_alt,
            "metaTitle": meta_title,
            "metaDescription": meta_description,
            "primaryKeyword": primary_kw,
            "secondaryKeywords": secondary_kws,
            "longTailKeywords": long_tail_kws,
            "metaTags": meta_tags,
            "directAnswer": direct_answer,
            "faqs": faqs,
            "internalLinks": internal_links,
            "externalSources": external_sources,
            "sourceUrl": source_url,
            "content": cleaned_content,
        }
        articles.append(article)

    articles.sort(key=lambda x: x["serialNumber"])

    # Write JSON
    os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(articles, f, indent=2, ensure_ascii=False)
    print(f"Successfully generated {OUTPUT_JSON} with {len(articles)} articles.")

    # Write TypeScript helper module
    ts_code = f"""// Generated automatically by scripts/sync-blogs.py
// Schedule: 2 POSTS PER WEEK (Every Tuesday & Friday at 09:00 AM IST)

import blogsJson from './blogsData.json';

export interface BlogFAQ {{
  question: string;
  answer: string;
}}

export interface BlogInternalLink {{
  serialNumber: number;
  title: string;
  slug: string;
  category: string;
}}

export interface BlogArticle {{
  id: string;
  serialNumber: number;
  title: string;
  headline: string;
  slug: string;
  publishDate: string;
  publishDateDisplay: string;
  scheduleLabel: string;
  isPublished: boolean;
  readTime: string;
  wordCount: number;
  contentCategory: string;
  themeCategory: string;
  author: string;
  authorRole: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  metaTags: string[];
  directAnswer: string;
  faqs: BlogFAQ[];
  internalLinks: BlogInternalLink[];
  externalSources: string;
  sourceUrl: string;
  content: string;
}}

export const blogsData: BlogArticle[] = blogsJson as BlogArticle[];

/**
 * Checks whether an article is published based on the current system time
 */
export function isBlogPublished(blog: BlogArticle): boolean {{
  return new Date(blog.publishDate).getTime() <= Date.now();
}}

/**
 * Returns only blogs whose scheduled publish date has arrived
 */
export function getPublishedBlogs(): BlogArticle[] {{
  const now = Date.now();
  return blogsData.filter((b) => new Date(b.publishDate).getTime() <= now);
}}

/**
 * Returns all blogs in the database (including upcoming scheduled ones)
 */
export function getAllBlogs(): BlogArticle[] {{
  return blogsData;
}}

/**
 * Returns the next upcoming scheduled blog
 */
export function getNextUpcomingBlog(): BlogArticle | undefined {{
  const now = Date.now();
  return blogsData.find((b) => new Date(b.publishDate).getTime() > now);
}}

export function getBlogBySlug(slug: string): BlogArticle | undefined {{
  return blogsData.find((b) => b.slug === slug);
}}

export function getRelatedBlogs(currentSlug: string, count: number = 3): BlogArticle[] {{
  const current = getBlogBySlug(currentSlug);
  const pool = getPublishedBlogs();
  if (!current) return pool.slice(0, count);

  const linkedSerials = new Set(current.internalLinks.map((l) => l.serialNumber));
  const matched = pool.filter((b) => linkedSerials.has(b.serialNumber));

  if (matched.length < count) {{
    const sameCat = pool.filter(
      (b) => b.contentCategory === current.contentCategory && b.slug !== currentSlug && !linkedSerials.has(b.serialNumber)
    );
    matched.push(...sameCat);
  }}

  if (matched.length < count) {{
    const remaining = pool.filter((b) => b.slug !== currentSlug && !matched.some((m) => m.slug === b.slug));
    matched.push(...remaining);
  }}

  return matched.slice(0, count);
}}

export const blogCategories: string[] = Array.from(
  new Set(blogsData.map((b) => b.contentCategory))
);
"""

    with open(OUTPUT_TS, "w", encoding="utf-8") as f:
        f.write(ts_code)
    print(f"Successfully generated {OUTPUT_TS}.")

    update_llms_files(articles)

def update_llms_files(articles):
    llms_path = r"public\llms.txt"
    llms_full_path = r"public\llms-full.txt"

    published = [a for a in articles if a["isPublished"]]
    upcoming = [a for a in articles if not a["isPublished"]]

    print(f"Publication status: {len(published)} articles currently LIVE, {len(upcoming)} articles scheduled (2 per week).")

if __name__ == "__main__":
    main()
