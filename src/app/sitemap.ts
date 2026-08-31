import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { BLOG_POSTS } from "@/lib/blogs";
import { COMPANIES } from "@/lib/companies";
import { toISODate } from "@/lib/seo";

/**
 * Static marketing pages have no genuine "last modified" data source (no
 * CMS/git-per-page tracking), so `lastModified` is intentionally omitted
 * for them rather than stamped with a fake build-time date. Company pages
 * use their real, hand-maintained `lastUpdated`; blog posts use their real
 * `publishedAt` as the best available proxy until a separate "updated" field
 * exists.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/companies`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/placement-preparation`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/blogs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/pricing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const companyRoutes: MetadataRoute.Sitemap = COMPANIES.map((company) => ({
    url: `${siteConfig.url}/companies/${company.slug}`,
    lastModified: company.lastUpdated,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    lastModified: toISODate(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...companyRoutes, ...blogRoutes];
}
