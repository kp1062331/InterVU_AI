import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { BLOG_POSTS } from "@/lib/blogs";
import { ArrowRight, Clock } from "@/components/ui/icons";

export const metadata = {
  title: "Placement Preparation Blogs & Guides — Skillitrix",
  description:
    "Expert insights, company test patterns, syllabus breakdowns, and speed problem-solving strategies for TCS, Infosys, Cognizant, and Tier-1 MNCs.",
};

export default function BlogsPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <main className="min-h-screen bg-paper pt-28 pb-20 font-sans">
      {/* Blog Hub Hero */}
      <Container className="pt-8 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-3.5 py-1 text-xs font-semibold text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            Skillitrix Placement Knowledge Hub
          </div>
          <h1 className="mt-4 text-display font-bold text-ink tracking-tight">
            MNC Assessment Guides &amp; Placement Strategies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Deep-dives into company test patterns, sectional cut-offs, fast math shortcuts, and high-scoring DSA techniques calibrated for 2026 hiring.
          </p>
        </div>
      </Container>

      <Container>
        {/* Featured Post Card */}
        <section className="mb-16" aria-label="Featured article">
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-rule bg-gradient-to-br from-surface via-white to-brand/5 p-7 sm:p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-2xl hover:shadow-brand/5"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-xs">
                    ★ Featured Guide
                  </span>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink-muted border border-rule">
                    {featuredPost.category}
                  </span>
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

                {/* Author & Date */}
                <div className="mt-6 flex items-center gap-3 border-t border-rule/60 pt-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-white">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">{featuredPost.author.name}</p>
                    <p className="text-[11px] text-ink-faint">{featuredPost.publishedAt} · {featuredPost.author.role}</p>
                  </div>
                </div>
              </div>

              {/* Right Side Visual Pill */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                    Topics in this guide
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
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

        {/* Regular Articles Grid */}
        <section aria-label="Recent articles">
          <div className="flex items-center justify-between border-b border-rule pb-4 mb-8">
            <h3 className="text-xl font-bold text-ink">Recent Articles &amp; Breakdowns</h3>
            <span className="text-xs font-semibold text-ink-muted">
              Showing {regularPosts.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-black/20 hover:shadow-xl hover:shadow-black/5"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between border-b border-rule/60 pb-3 text-xs">
                    <span className="font-bold text-brand uppercase tracking-wider text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-ink-faint">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 text-lg font-bold text-ink leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-soft line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer / Author info */}
                <div className="mt-6 flex items-center justify-between border-t border-rule/40 pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-full bg-surface text-[10px] font-bold text-ink border border-rule">
                      {post.author.avatar}
                    </div>
                    <span className="text-xs font-medium text-ink-soft">
                      {post.author.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand flex items-center gap-1">
                    Read
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>

      <div className="mt-20">
        <HomeCTA />
      </div>
    </main>
  );
}
