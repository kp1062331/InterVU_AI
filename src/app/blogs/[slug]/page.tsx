import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { BLOG_POSTS } from "@/lib/blogs";
import { COMPANIES } from "@/lib/companies";
import { ArrowRight, Clock, Check, FileText } from "@/components/ui/icons";
import { buildMetadata, articleJsonLd, toISODate } from "@/lib/seo";

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

  return buildMetadata({
    title: `${post.title} — Skillitrix`,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    type: "article",
    publishedTime: toISODate(post.publishedAt),
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedCompany = COMPANIES.find((company) => company.relatedBlogSlugs.includes(slug));

  const takeaways = post.keyTakeaways && post.keyTakeaways.length > 0 ? post.keyTakeaways : [
    "Calibrate your speed to under 60 seconds per quantitative aptitude question.",
    "Simulate full exam condition test environments to eliminate mid-exam panic.",
    "Practice automated problem-solving algorithms with strict time & memory constraints.",
  ];

  return (
    <main className="min-h-screen bg-paper pt-28 pb-20 font-sans">
      <JsonLd
        data={articleJsonLd({
          headline: post.title,
          description: post.excerpt,
          path: `/blogs/${post.slug}`,
          datePublished: toISODate(post.publishedAt),
          authorName: post.author.name,
        })}
      />

      <Container className="max-w-4xl pt-4">
        <Breadcrumbs items={[{ name: "Blogs", path: "/blogs" }, { name: post.title, path: `/blogs/${post.slug}` }]} />

        {/* Article Header */}
        <header className="border-b border-rule pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand border border-brand/20">
              {post.category}
            </span>
            {post.funnelStage && (
              <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink-muted border border-rule">
                Stage: {post.funnelStage}
              </span>
            )}
            {post.audience && (
              <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink-muted border border-rule">
                Audience: {post.audience}
              </span>
            )}
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

          {post.targetKeyword && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-surface/80 px-3 py-1.5 text-xs text-ink-muted border border-rule/70">
              <span className="font-semibold text-brand">Focus Keyword:</span>
              <code className="font-mono text-xs text-ink">{post.targetKeyword}</code>
            </div>
          )}

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
          <div className="mb-8 rounded-2xl border border-brand/20 bg-brand/[0.03] p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
              <Check className="size-4" />
              <span>Key Strategic &amp; Assessment Takeaways</span>
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HTML Formatted Content */}
          <div
            className="prose prose-slate max-w-none 
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:border-rule/40 [&_h2]:pb-2
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_h3]:mt-7 [&_h3]:mb-3
              [&_p]:text-base [&_p]:text-ink-soft [&_p]:leading-relaxed [&_p]:mb-5
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2.5 [&_ul]:text-ink-soft [&_ul]:mb-6
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2.5 [&_ol]:text-ink-soft [&_ol]:mb-6
              [&_li]:text-sm [&_li]:sm:text-base [&_li]:leading-relaxed
              [&_strong]:font-semibold [&_strong]:text-ink
              [&_em]:italic [&_em]:text-ink
              [&_a]:font-semibold [&_a]:text-brand [&_a]:underline [&_a]:decoration-brand/30 [&_a]:underline-offset-4 [&_a]:hover:decoration-brand
              [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:bg-brand/[0.03] [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:rounded-r-2xl [&_blockquote]:my-6 [&_blockquote]:text-ink-soft [&_blockquote]:italic
              [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:border [&_table]:border-rule
              [&_th]:bg-surface [&_th]:text-xs [&_th]:font-bold [&_th]:uppercase [&_th]:tracking-wider [&_th]:p-3.5 [&_th]:text-ink [&_th]:border-b [&_th]:border-rule
              [&_td]:p-3.5 [&_td]:text-xs [&_td]:sm:text-sm [&_td]:text-ink-soft [&_td]:border-b [&_td]:border-rule/60
              [&_pre]:bg-[#0D1117] [&_pre]:text-white [&_pre]:p-5 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:font-mono [&_pre]:text-xs [&_pre]:sm:text-sm
              [&_code]:font-mono [&_code]:text-brand [&_code]:bg-brand/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
              [&_pre_code]:text-emerald-300 [&_pre_code]:bg-transparent [&_pre_code]:p-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {relatedCompany && (
          <div className="my-10 rounded-2xl border border-rule bg-white p-5 shadow-xs flex items-center gap-3">
            <FileText className="size-5 text-brand shrink-0" />
            <p className="text-sm leading-relaxed text-ink-soft">
              Looking for company-specific hiring criteria? See the complete{" "}
              <Link
                href={`/companies/${relatedCompany.slug}`}
                className="font-semibold text-brand underline underline-offset-2 hover:text-brand/80"
              >
                {relatedCompany.name} preparation guide
              </Link>{" "}
              — full syllabus, eligibility, and candidate questions.
            </p>
          </div>
        )}

        {/* Dynamic CTA Banner */}
        <section className="my-12 rounded-3xl border border-rule bg-gradient-to-br from-surface via-white to-brand/[0.04] p-7 sm:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand border border-brand/20">
                {post.cta?.label || "Skillitrix Placement Platform"}
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-ink tracking-tight">
                {post.audience?.includes("TPO") || post.audience?.includes("Director")
                  ? "Elevate Your College Placement Intelligence"
                  : "Practice under real test conditions"}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {post.cta?.text ||
                  "Take full-length timed tests with automated scoring, question matrix navigation, and instant AI study plans."}
              </p>
            </div>
            <a
              href={post.cta?.href || "https://intervu-frontend.vercel.app/"}
              target={post.cta?.href?.startsWith("http") ? "_blank" : undefined}
              rel={post.cta?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand hover:scale-105 active:scale-[0.98]"
            >
              <span>{post.cta?.actionText || "Get Started"}</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-rule pt-12">
          <h3 className="text-xl font-bold text-ink mb-6">Related Placement Guides &amp; Analyses</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blogs/${related.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-brand uppercase tracking-wider">
                      {related.category}
                    </span>
                    <span className="text-ink-faint">{related.readTime}</span>
                  </div>
                  <h4 className="mt-2.5 text-base font-bold text-ink leading-snug group-hover:text-brand transition-colors">
                    {related.title}
                  </h4>
                  <p className="mt-2 text-xs text-ink-soft line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-faint pt-3 border-t border-rule/50">
                  <span className="font-semibold text-ink">{related.author.name}</span>
                  <span className="font-bold text-brand flex items-center gap-1 group-hover:underline">
                    Read guide
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
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
