// Generated automatically by scripts/sync-blogs.py
// Schedule: 2 POSTS PER WEEK (Every Tuesday & Friday at 09:00 AM IST)

import blogsJson from './blogsData.json';

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogInternalLink {
  serialNumber: number;
  title: string;
  slug: string;
  category: string;
}

export interface BlogArticle {
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
}

export const blogsData: BlogArticle[] = blogsJson as BlogArticle[];

/**
 * Checks whether an article is published based on the current system time
 */
export function isBlogPublished(blog: BlogArticle): boolean {
  return new Date(blog.publishDate).getTime() <= Date.now();
}

/**
 * Returns only blogs whose scheduled publish date has arrived
 */
export function getPublishedBlogs(): BlogArticle[] {
  const now = Date.now();
  return blogsData.filter((b) => new Date(b.publishDate).getTime() <= now);
}

/**
 * Returns all blogs in the database (including upcoming scheduled ones)
 */
export function getAllBlogs(): BlogArticle[] {
  return blogsData;
}

/**
 * Returns the next upcoming scheduled blog
 */
export function getNextUpcomingBlog(): BlogArticle | undefined {
  const now = Date.now();
  return blogsData.find((b) => new Date(b.publishDate).getTime() > now);
}

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return blogsData.find((b) => b.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, count: number = 3): BlogArticle[] {
  const current = getBlogBySlug(currentSlug);
  const pool = getPublishedBlogs();
  if (!current) return pool.slice(0, count);

  const linkedSerials = new Set(current.internalLinks.map((l) => l.serialNumber));
  const matched = pool.filter((b) => linkedSerials.has(b.serialNumber));

  if (matched.length < count) {
    const sameCat = pool.filter(
      (b) => b.contentCategory === current.contentCategory && b.slug !== currentSlug && !linkedSerials.has(b.serialNumber)
    );
    matched.push(...sameCat);
  }

  if (matched.length < count) {
    const remaining = pool.filter((b) => b.slug !== currentSlug && !matched.some((m) => m.slug === b.slug));
    matched.push(...remaining);
  }

  return matched.slice(0, count);
}

export const blogCategories: string[] = Array.from(
  new Set(blogsData.map((b) => b.contentCategory))
);
