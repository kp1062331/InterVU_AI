import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Resolves a site-relative path to an absolute URL against `siteConfig.url`. */
export function absoluteUrl(path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

/** Best-effort conversion of a human date string ("Aug 26, 2026") to ISO 8601. Falls back to the input if it doesn't parse. */
export function toISODate(input: string): string {
  const parsed = new Date(input);
  return Number.isNaN(parsed.getTime()) ? input : parsed.toISOString();
}

interface BuildMetadataOptions {
  /** The complete, human-facing title for this page. Rendered as-is (bypasses the root layout's title template) so every page controls its own exact title. */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/companies/tcs". */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

/**
 * Standardizes per-page metadata: canonical URL, robots directive, and
 * consistent OpenGraph/Twitter output. Every indexable page should build its
 * `Metadata` export through this so canonical/OG never silently drift.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = "/opengraph-image.png",
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const images = [
    { url: image, width: 1200, height: 630, alt: imageAlt ?? title },
  ];

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          url,
          title,
          description,
          siteName: siteConfig.name,
          images,
          publishedTime,
          modifiedTime,
        }
      : {
          type: "website",
          url,
          title,
          description,
          siteName: siteConfig.name,
          images,
        };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ─── JSON-LD builders ────────────────────────────────────────────────────
// Only cover schema types actually backed by real data on the page that
// renders them. Nothing here should be used to assert facts (job listings,
// events, courses) the site doesn't genuinely have.

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/skillitrix-logo.png"),
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface ArticleJsonLdInput {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}

export function articleJsonLd(input: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Person", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/skillitrix-logo.png"),
      },
    },
  };
}

export interface ItemListEntry {
  name: string;
  path: string;
}

export function itemListJsonLd(items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
