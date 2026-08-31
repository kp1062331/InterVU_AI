import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Every route in this app is public marketing/content — there's no
 * authenticated area, dashboard, or admin surface to gate off, so this
 * allows everything, including AI/answer-engine crawlers (GPTBot,
 * ClaudeBot, PerplexityBot, Google-Extended, etc.) — no rule disallows
 * them and none are singled out, since discoverability by those crawlers
 * is this site's explicit goal.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
