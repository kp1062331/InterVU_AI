import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { BlogHubClient } from "@/components/sections/BlogHubClient";
import { BLOG_POSTS } from "@/lib/blogs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Placement Intelligence, MNC Assessment Guides & TPO Playbooks — Skillitrix",
  description:
    "Explore strategic placement intelligence, pre-drive diagnostic frameworks for TPOs, TCS NQT section-wise weightage, and institutional accreditation evidence.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-paper pt-28 pb-20 font-sans">
      {/* Blog Hub Hero */}
      <Container className="pt-8 pb-10 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-3.5 py-1 text-xs font-semibold text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            Skillitrix Placement &amp; Assessment Intelligence Hub
          </div>
          <h1 className="mt-4 text-display font-bold text-ink tracking-tight">
            Campus Placement Intelligence &amp; Assessment Playbooks
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Data-backed breakdowns for Training &amp; Placement Officers, institutional directors, and students preparing for 2026 campus hiring drives.
          </p>
        </div>
      </Container>

      <Container>
        <div className="mb-6">
          <Breadcrumbs items={[{ name: "Blogs & Intelligence", path: "/blogs" }]} />
        </div>

        {/* Interactive Filter & Articles Grid */}
        <BlogHubClient posts={BLOG_POSTS} />
      </Container>

      <div className="mt-20">
        <HomeCTA />
      </div>
    </main>
  );
}
