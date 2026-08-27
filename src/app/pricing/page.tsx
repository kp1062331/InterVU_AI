import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { PricingFaq } from "@/components/sections/PricingFaq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for candidates and hiring cohorts. Start free and upgrade when you need unlimited practice rounds.",
};

export default function PricingPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      <PageHeader
        eyebrow="TRANSPARENT PRICING"
        title="Three plans. The free plan includes full scored rounds."
        lede="Simple monthly billing. Cancel anytime from settings with no hidden fees or annual lock-ins."
        meta="Prices in USD."
      />

      <Container className="pb-24 pt-12 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <PlanComparison />

        <div className="mt-24 border-t border-slate-200 pt-20">
          <PricingFaq />
        </div>

        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider inline-block mb-2">
              ENTERPRISE &amp; COHORTS
            </span>
            <h3 className="text-2xl font-medium text-[#0B1E3D]">
              Preparing a bootcamp or university cohort?
            </h3>
            <p className="mt-1 max-w-lg text-sm text-slate-600">
              Cohort dashboards, custom question packs, SSO, and volume pricing available for teams over 25 seats.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-purple-pill px-8 py-3.5 text-sm uppercase tracking-wider shrink-0 cursor-pointer"
          >
            Contact Sales
          </Link>
        </div>

        <p className="mt-12 text-center text-xs font-semibold text-slate-500">
          Want to explore our question tracks?{" "}
          <Link
            href="/#coverage"
            className="text-purple-600 font-bold underline decoration-purple-500/40 underline-offset-4 hover:text-purple-700"
          >
            See complete assessment coverage
          </Link>
        </p>
      </Container>
    </div>
  );
}
