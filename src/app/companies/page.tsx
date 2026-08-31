import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { COMPANIES } from "@/lib/companies";
import { buildMetadata, itemListJsonLd } from "@/lib/seo";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Company Placement Preparation — TCS, Infosys, Accenture & More | Skillitrix",
  description:
    "Company-specific placement preparation guides: process, eligibility, syllabus, aptitude and coding questions, and technical + HR interview prep for TCS, Infosys, Cognizant, Accenture, Capgemini, and IBM.",
  path: "/companies",
});

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <JsonLd
        data={itemListJsonLd(
          COMPANIES.map((company) => ({
            name: `${company.shortName} placement preparation`,
            path: `/companies/${company.slug}`,
          })),
        )}
      />

      <PageHeader
        eyebrow="Company-wise preparation"
        title="Placement preparation guides, by company."
        lede="Placement process, eligibility, syllabus, aptitude and coding topics, and the questions each recruiter commonly asks — for every major campus recruiter we cover."
      />

      <Container className="pt-4 pb-24">
        <Breadcrumbs items={[{ name: "Companies", path: "/companies" }]} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((company) => (
            <Link
              key={company.slug}
              href={`/companies/${company.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-rule bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink text-xs font-bold text-white transition-colors group-hover:bg-brand">
                    {company.logoInitial}
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-ink transition-colors group-hover:text-brand">
                      {company.shortName} placement preparation
                    </h2>
                    <span className="text-[11px] font-semibold text-brand">
                      {company.badge}
                    </span>
                  </div>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                  {company.summary}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 border-t border-rule/60 pt-4 text-xs font-bold text-brand">
                <span>{company.shortName} process, syllabus &amp; interview questions</span>
                <ArrowRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-rule bg-surface p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-ink-soft">
            New to campus placements or preparing across multiple companies at once? Start with the{" "}
            <Link href="/placement-preparation" className="font-semibold text-brand hover:underline">
              general placement preparation guide
            </Link>{" "}
            for the stages every drive shares, or browse the{" "}
            <Link href="/blogs" className="font-semibold text-brand hover:underline">
              placement preparation blog
            </Link>{" "}
            for deeper syllabus and test-pattern breakdowns.
          </p>
        </div>
      </Container>

      <HomeCTA />
    </div>
  );
}
