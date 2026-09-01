"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { type BlogPost, type BlogCategory } from "@/lib/blogs";
import { ArrowRight, Clock, Layers } from "@/components/ui/icons";

interface BlogHubClientProps {
  posts: BlogPost[];
}

const CATEGORIES: { label: string; value: "all" | BlogCategory }[] = [
  { label: "All Insights", value: "all" },
  { label: "Placement Intelligence", value: "Placement Intelligence" },
  { label: "MNC Tests", value: "MNC Tests" },
  { label: "Interview Strategy", value: "Interview Strategy" },
  { label: "Coding & DSA", value: "Coding & DSA" },
  { label: "Aptitude & Logic", value: "Aptitude & Logic" },
];

const AUDIENCES = [
  { label: "All Readers", value: "all" },
  { label: "TPOs & Leadership", value: "tpo" },
  { label: "Students & Aspirants", value: "student" },
];

export function BlogHubClient({ posts }: BlogHubClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | BlogCategory>("all");
  const [selectedAudience, setSelectedAudience] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category filter
      if (selectedCategory !== "all" && post.category !== selectedCategory) {
        return false;
      }

      // Audience filter
      if (selectedAudience === "tpo") {
        const aud = (post.audience || "").toLowerCase();
        if (!aud.includes("tpo") && !aud.includes("director") && !aud.includes("officer") && !aud.includes("principal")) {
          return false;
        }
      } else if (selectedAudience === "student") {
        const aud = (post.audience || "").toLowerCase();
        if (!aud.includes("student") && !aud.includes("general") && !aud.includes("shareable") && post.audience) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(query);
        const matchesTags = post.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesKeyword = (post.targetKeyword || "").toLowerCase().includes(query);
        if (!matchesTitle && !matchesExcerpt && !matchesTags && !matchesKeyword) {
          return false;
        }
      }

      return true;
    });
  }, [posts, selectedCategory, selectedAudience, searchQuery]);

  const featuredPost = useMemo(() => {
    // If no filters, show the primary featured post
    if (selectedCategory === "all" && selectedAudience === "all" && !searchQuery.trim()) {
      return posts.find((p) => p.featured) || posts[0];
    }
    // If filtered, return the first matching post as featured if available
    return filteredPosts[0] || null;
  }, [posts, filteredPosts, selectedCategory, selectedAudience, searchQuery]);

  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
  }, [filteredPosts, featuredPost]);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="mb-10 rounded-3xl border border-rule bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    active
                      ? "bg-brand text-white shadow-sm"
                      : "bg-surface text-ink-muted hover:bg-black/5 hover:text-ink border border-rule/80"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Audience Selector */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Audience Buttons */}
            <div className="inline-flex rounded-xl bg-surface p-1 border border-rule">
              {AUDIENCES.map((aud) => {
                const active = selectedAudience === aud.value;
                return (
                  <button
                    key={aud.value}
                    type="button"
                    onClick={() => setSelectedAudience(aud.value)}
                    className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                      active ? "bg-white text-ink shadow-xs" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {aud.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px] flex-1 sm:flex-initial">
              <input
                type="text"
                placeholder="Search topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-rule bg-surface px-3.5 py-1.5 text-xs text-ink placeholder:text-ink-faint focus:border-brand focus:bg-white focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-ink-muted hover:text-ink"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post (if available) */}
      {featuredPost && (
        <section className="mb-14" aria-label="Featured article">
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-rule bg-gradient-to-br from-surface via-white to-brand/[0.04] p-7 sm:p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-2xl hover:shadow-brand/5"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-xs">
                    ★ Featured Placement Intelligence
                  </span>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink-muted border border-rule">
                    {featuredPost.category}
                  </span>
                  {featuredPost.audience && (
                    <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-brand border border-brand/20">
                      {featuredPost.audience}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-ink-faint">
                    <Clock className="size-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight group-hover:text-brand transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                {featuredPost.targetKeyword && (
                  <p className="mt-4 text-xs font-mono text-ink-faint">
                    Keyword: <span className="text-ink-soft">{featuredPost.targetKeyword}</span>
                  </p>
                )}

                {/* Author & Date */}
                <div className="mt-6 flex items-center gap-3 border-t border-rule/60 pt-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-white shadow-xs">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">{featuredPost.author.name}</p>
                    <p className="text-[11px] text-ink-faint">
                      {featuredPost.publishedAt} · {featuredPost.author.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Visual Pill */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                    <Layers className="size-3.5 text-brand" />
                    Topics Covered
                  </span>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft border border-rule/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-brand group-hover:underline">
                  <span>Read full analysis</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Grid of Articles */}
      <section aria-label="Articles list">
        <div className="flex items-center justify-between border-b border-rule pb-4 mb-8">
          <h3 className="text-xl font-bold text-ink">
            {selectedCategory === "all" ? "All Playbooks & Breakdowns" : `${selectedCategory} Guides`}
          </h3>
          <span className="text-xs font-semibold text-ink-muted">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="my-12 rounded-2xl border border-dashed border-rule bg-surface p-12 text-center">
            <p className="text-base font-bold text-ink">No matching guides found</p>
            <p className="mt-1 text-sm text-ink-soft">
              Try adjusting your search terms or category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedAudience("all");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-brand/90"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-black/20 hover:shadow-xl hover:shadow-black/5"
              >
                <div>
                  {/* Category, Funnel, & Read Time */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule/60 pb-3 text-xs">
                    <span className="font-bold text-brand uppercase tracking-wider text-[11px]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {post.funnelStage && (
                        <span className="rounded-md bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-ink-muted border border-rule">
                          {post.funnelStage}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-ink-faint">
                        <Clock className="size-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="mt-3.5 text-lg font-bold text-ink leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-soft line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface/80 px-2 py-0.5 text-[10px] font-medium text-ink-muted border border-rule/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-[10px] text-ink-faint self-center">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer / Author info */}
                <div className="mt-6 flex items-center justify-between border-t border-rule/40 pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-full bg-surface text-[10px] font-bold text-ink border border-rule">
                      {post.author.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-ink leading-none">
                        {post.author.name}
                      </span>
                      <span className="text-[10px] text-ink-faint leading-tight mt-0.5">
                        {post.publishedAt}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand flex items-center gap-1 group-hover:underline">
                    Read
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
