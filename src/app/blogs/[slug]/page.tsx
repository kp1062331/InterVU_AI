import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { BLOG_POSTS } from "@/lib/blogs";
import { ArrowRight, Clock, Check } from "@/components/ui/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post Not Found — Skillitrix" };

  return {
    title: `${post.title} — Skillitrix`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-paper pt-28 pb-20 font-sans">
      <Container className="max-w-4xl pt-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-ink-muted">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-brand transition-colors">
            Blogs
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold truncate max-w-[240px] sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="border-b border-rule pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand border border-brand/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-ink-faint">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
            <span className="text-xs text-ink-faint">· Published {post.publishedAt}</span>
          </div>

          <h1 className="mt-4 text-display font-bold text-ink tracking-tight text-balance leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
            {post.excerpt}
          </p>

          {/* Author info & Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-rule/60">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-ink font-mono text-xs font-bold text-white shadow-xs">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{post.author.name}</p>
                <p className="text-xs text-ink-faint">{post.author.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink-muted border border-rule"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="mt-10 max-w-none text-ink leading-relaxed">
          {/* Key Takeaways Callout Box */}
          <div className="mb-8 rounded-2xl border border-brand/20 bg-brand/[0.03] p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <Check className="size-4" />
              <span>Key Placement Assessment Takeaways</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-brand shrink-0" />
                <span>Calibrate your speed to under 60 seconds per quantitative aptitude question.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-brand shrink-0" />
                <span>Simulate full 150-minute exam condition test environments to eliminate mid-exam panic.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-1.5 rounded-full bg-brand shrink-0" />
                <span>Practice automated LeetCode Medium algorithms with time complexity checks.</span>
              </li>
            </ul>
          </div>

          {/* HTML Formatted Content */}
          <div
            className="prose prose-slate max-w-none 
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:tracking-tight
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:text-base [&_p]:text-ink-soft [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-ink-soft [&_ul]:mb-4
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol]:text-ink-soft [&_ol]:mb-4
              [&_li]:text-sm [&_li]:sm:text-base
              [&_strong]:font-semibold [&_strong]:text-ink
              [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:border [&_table]:border-rule
              [&_th]:bg-surface [&_th]:text-xs [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:p-3.5 [&_th]:text-ink [&_th]:border-b [&_th]:border-rule
              [&_td]:p-3.5 [&_td]:text-xs [&_td]:sm:text-sm [&_td]:text-ink-soft [&_td]:border-b [&_td]:border-rule/60
              [&_pre]:bg-[#0D1117] [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:font-mono [&_pre]:text-xs [&_pre]:sm:text-sm
              [&_code]:font-mono [&_code]:text-brand [&_code]:bg-brand/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
              [&_pre_code]:text-emerald-300 [&_pre_code]:bg-transparent [&_pre_code]:p-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* In-Article Placement Test CTA Banner */}
        <section className="my-14 rounded-2xl border border-rule bg-surface p-7 sm:p-9 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                Live Test Simulation
              </span>
              <h3 className="mt-2 text-lg sm:text-xl font-bold text-ink">
                Practice this exact assessment on Skillitrix
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-ink-soft max-w-lg leading-relaxed">
                Take full-length timed tests with automated scoring, question matrix navigation, and instant AI study plans.
              </p>
            </div>
            <a
              href="https://intervu-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand hover:scale-105 active:scale-[0.98]"
            >
              <span>Take Free Mock Test</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-rule pt-12">
          <h3 className="text-xl font-bold text-ink mb-6">Related Placement Guides</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blogs/${related.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg"
              >
                <div>
                  <span className="text-[11px] font-bold text-brand uppercase tracking-wider">
                    {related.category}
                  </span>
                  <h4 className="mt-2 text-base font-bold text-ink leading-snug group-hover:text-brand transition-colors">
                    {related.title}
                  </h4>
                  <p className="mt-2 text-xs text-ink-soft line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-faint pt-3 border-t border-rule/50">
                  <span>{related.readTime}</span>
                  <span className="font-bold text-brand flex items-center gap-1">
                    Read guide →
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
