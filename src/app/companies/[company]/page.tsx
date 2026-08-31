import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Check } from "@/components/ui/icons";
import { COMPANIES, getCompanyBySlug } from "@/lib/companies";
import { BLOG_POSTS } from "@/lib/blogs";
import { buildMetadata, faqPageJsonLd, articleJsonLd } from "@/lib/seo";

interface Props {
  params: Promise<{ company: string }>;
}

export async function generateStaticParams() {
  return COMPANIES.map((company) => ({ company: company.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company: slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return { title: "Company Not Found — Skillitrix" };

  return buildMetadata({
    title: `${company.shortName} Placement Preparation 2026: Process, Syllabus & Interview Questions | Skillitrix`,
    description: company.summary,
    path: `/companies/${company.slug}`,
    type: "article",
    modifiedTime: company.lastUpdated,
  });
}

export default async function CompanyPage({ params }: Props) {
  const { company: slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  const relatedBlogs = BLOG_POSTS.filter((post) => company.relatedBlogSlugs.includes(post.slug));
  const otherCompanies = COMPANIES.filter((c) => c.slug !== company.slug).slice(0, 3);
  const updatedLabel = new Date(company.lastUpdated).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-paper font-sans">
      <JsonLd data={faqPageJsonLd(company.commonQuestions)} />
      <JsonLd
        data={articleJsonLd({
          headline: `${company.shortName} Placement Preparation: Process, Syllabus & Interview Questions`,
          description: company.summary,
          path: `/companies/${company.slug}`,
          datePublished: company.lastUpdated,
          dateModified: company.lastUpdated,
          authorName: "Skillitrix Team",
        })}
      />

      <PageHeader
        eyebrow={`${company.badge} · ${company.focus}`}
        title={`${company.shortName} Placement Preparation`}
        lede={company.summary}
        meta={`Last updated ${updatedLabel}`}
        imageSrc="/images/companies-hero-bg.jpg"
        imageAlt={`${company.shortName} campus placement and interview preparation`}
      />

      <Container className="pt-4 pb-24">
        <ScrollReveal delay={50} duration={600}>
          <Breadcrumbs
            items={[
              { name: "Companies", path: "/companies" },
              { name: company.shortName, path: `/companies/${company.slug}` },
            ]}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="min-w-0">
            {/* Roles & packages */}
            <section aria-labelledby="roles-heading" className="mb-12">
              <ScrollReveal>
                <h2 id="roles-heading" className="text-title text-ink">
                  {company.shortName} hiring tracks
                </h2>
              </ScrollReveal>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {company.roles.map((role, idx) => (
                  <ScrollReveal key={role.title} delay={idx * 80} duration={600}>
                    <div className="h-full rounded-xl border border-rule bg-surface p-5">
                      <h3 className="text-sm font-bold text-ink">{role.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{role.note}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Process */}
            <section aria-labelledby="process-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="process-heading" className="text-title text-ink">
                  What is the {company.shortName} placement process?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                  {company.summary}
                </p>
              </ScrollReveal>
              <ol className="mt-6 space-y-4">
                {company.process.map((step, i) => (
                  <ScrollReveal key={step.title} delay={i * 70} duration={600}>
                    <li className="flex gap-4 rounded-xl border border-rule bg-white p-5 shadow-xs">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-ink">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </section>

            {/* Eligibility */}
            <section aria-labelledby="eligibility-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="eligibility-heading" className="text-title text-ink">
                  {company.shortName} eligibility criteria
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={80} duration={700}>
                <ul className="mt-5 space-y-2.5">
                  {company.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-ink-muted">
                  Documents required
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {company.documentsRequired.map((doc) => (
                    <li key={doc} className="text-sm text-ink-soft">
                      · {doc}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </section>

            {/* Syllabus */}
            <section aria-labelledby="syllabus-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="syllabus-heading" className="text-title text-ink">
                  {company.shortName} placement syllabus
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100} duration={750}>
                <div className="mt-5 overflow-hidden rounded-xl border border-rule">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-rule bg-surface text-xs font-bold uppercase tracking-wider text-ink-muted">
                          <th className="w-1/3 px-4 py-3">Section</th>
                          <th className="px-4 py-3">Topics</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rule/70">
                        {company.syllabus.map((section) => (
                          <tr key={section.section}>
                            <td className="px-4 py-3.5 align-top font-semibold text-ink">{section.section}</td>
                            <td className="px-4 py-3.5 align-top text-ink-soft">
                              {section.topics.join(" · ")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Aptitude & Coding topics */}
            <section aria-labelledby="topics-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="topics-heading" className="text-title text-ink">
                  {company.shortName} aptitude &amp; coding questions
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100} duration={750}>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-ink-muted">
                      Aptitude topics
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {company.aptitudeTopics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-ink-muted">
                      Coding topics
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {company.codingTopics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Technical interview */}
            <section aria-labelledby="technical-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="technical-heading" className="text-title text-ink">
                  {company.shortName} technical interview
                </h2>
              </ScrollReveal>
              <div className="mt-5 space-y-4">
                {company.technicalInterview.map((item, idx) => (
                  <ScrollReveal key={item.topic} delay={idx * 60} duration={600}>
                    <div className="rounded-xl border border-rule bg-surface p-5">
                      <h3 className="text-sm font-bold text-ink">{item.topic}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* HR interview */}
            <section aria-labelledby="hr-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="hr-heading" className="text-title text-ink">
                  {company.shortName} HR interview questions
                </h2>
              </ScrollReveal>
              <div className="mt-5 space-y-4">
                {company.hrInterview.map((qa, idx) => (
                  <ScrollReveal key={qa.question} delay={idx * 60} duration={600}>
                    <div className="rounded-xl border border-rule bg-white p-5 shadow-xs">
                      <h3 className="text-sm font-bold text-ink">&ldquo;{qa.question}&rdquo;</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{qa.answer}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Preparation tips & mistakes */}
            <section aria-labelledby="prep-heading" className="mb-12 border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="prep-heading" className="text-title text-ink">
                  How to prepare for {company.shortName} placements
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100} duration={750}>
                <div className="mt-5 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-positive">
                      Preparation tips
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {company.preparationTips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <Check className="mt-0.5 size-4 shrink-0 text-positive" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-critical">
                      Common mistakes
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {company.commonMistakes.map((mistake) => (
                        <li key={mistake} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-critical" />
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-heading" className="border-t border-rule pt-10">
              <ScrollReveal>
                <h2 id="faq-heading" className="text-title text-ink">
                  Frequently asked questions about {company.shortName} placements
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100} duration={750}>
                <div className="mt-5 border-t border-rule">
                  {company.commonQuestions.map((qa) => (
                    <details key={qa.question} className="group border-b border-rule">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                        {qa.question}
                        <span className="shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-45">+</span>
                      </summary>
                      <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-soft">{qa.answer}</p>
                    </details>
                  ))}
                </div>
              </ScrollReveal>
            </section>
          </article>

          {/* Sidebar: internal linking */}
          <aside className="lg:pt-1">
            <ScrollReveal delay={120} duration={750} className="sticky top-24 space-y-8">
              {relatedBlogs.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                    Related guides
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {relatedBlogs.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="text-sm font-semibold text-ink hover:text-brand transition-colors"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  Other companies
                </h3>
                <ul className="mt-3 space-y-3">
                  {otherCompanies.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/companies/${other.slug}`}
                        className="text-sm font-semibold text-ink hover:text-brand transition-colors"
                      >
                        {other.shortName} placement preparation
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/companies"
                      className="text-sm font-semibold text-brand hover:underline"
                    >
                      View all companies →
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  General preparation
                </h3>
                <ul className="mt-3 space-y-3">
                  <li>
                    <Link
                      href="/placement-preparation"
                      className="text-sm font-semibold text-ink hover:text-brand transition-colors"
                    >
                      Campus placement preparation guide
                    </Link>
                  </li>
                </ul>
              </div>

              <a
                href="https://intervu-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-rule bg-ink px-5 py-4 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
              >
                <span>Practice a {company.shortName}-style mock test</span>
                <ArrowRight className="size-4 shrink-0" />
              </a>
            </ScrollReveal>
          </aside>
        </div>
      </Container>

      <HomeCTA />
    </div>
  );
}
