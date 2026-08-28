import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about plans, cohorts or the product itself. Our team replies promptly.",
};

const rails = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Reply time", value: "Within 1 business day" },
  { label: "Hours", value: "Mon–Fri, 09:00–18:00 IST" },
  { label: "Cohorts & universities", value: "Choose “Teams and cohorts”" },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <PageHeader
        eyebrow="Contact us"
        title="Get in touch with our team."
        lede="Questions about plans, cohort rollouts, or your practice score reports? We respond quickly."
      />

      <Container className="pt-12 pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="rounded-lg border border-rule bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>

          <aside className="lg:pt-1">
            <p className="eyebrow">Support protocol</p>
            <h2 className="text-head text-ink mt-3">Getting a response</h2>
            <dl className="mt-4 border-t border-rule">
              {rails.map((rail) => (
                <div key={rail.label} className="border-b border-rule py-4">
                  <dt className="text-xs font-medium text-ink-soft">{rail.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">
                    {"href" in rail && rail.href ? (
                      <a
                        href={rail.href}
                        className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                      >
                        {rail.value}
                      </a>
                    ) : (
                      rail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-ink-faint">
              Support requests move faster if you include your session ID from
              your report header.
            </p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
