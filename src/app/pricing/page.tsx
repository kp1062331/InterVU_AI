import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { PricingFaq } from "@/components/sections/PricingFaq";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for candidates and hiring cohorts. Start free and upgrade when you need unlimited practice rounds.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <PageHeader
        eyebrow="Transparent pricing"
        title="Three plans. The free plan includes full scored rounds."
        lede="Simple monthly billing. Cancel anytime from settings — no hidden fees or annual lock-ins."
        meta="Prices in USD."
      />

      <Container className="pt-12 pb-24">
        <PlanComparison />

        <div className="mt-20 border-t border-rule pt-16">
          <PricingFaq />
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-lg border border-rule bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <Badge tone="brand">Enterprise & cohorts</Badge>
            <h3 className="text-head text-ink mt-3">
              Preparing a bootcamp or university cohort?
            </h3>
            <p className="mt-1 max-w-lg text-sm text-ink-soft">
              Cohort dashboards, custom question packs, SSO, and volume pricing
              for teams over 25 seats.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-hover)]"
          >
            Contact sales
          </Link>
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Want to explore our question tracks?{" "}
          <Link
            href="/#coverage"
            className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            See complete assessment coverage
          </Link>
        </p>
      </Container>
    </div>
  );
}
