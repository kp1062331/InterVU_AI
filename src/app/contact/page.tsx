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
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { label: "Reply time", value: "Within 1 business day" },
  { label: "Hours", value: "Mon–Fri, 09:00–18:00 IST" },
  { label: "Cohorts & Universities", value: "Choose 'Teams and cohorts'" },
] as const;

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      <PageHeader
        eyebrow="CONTACT US"
        title="Get in touch with our team."
        lede="Questions about plans, cohort rollouts, or your practice score reports? We respond quickly to help you succeed."
      />

      <Container className="pb-24 pt-12 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xl shadow-slate-200/50">
            <ContactForm />
          </div>

          <aside className="lg:pt-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 block mb-2">
              SUPPORT PROTOCOL
            </span>
            <h2 className="text-xl font-medium text-[#0B1E3D] mb-4">
              Getting a Response
            </h2>
            <dl className="border-t border-slate-200">
              {rails.map((rail) => (
                <div
                  key={rail.label}
                  className="border-b border-slate-200/80 py-4"
                >
                  <dt className="text-xs text-slate-500 font-medium">{rail.label}</dt>
                  <dd className="mt-1 text-sm text-[#0B1E3D] font-medium">
                    {"href" in rail && rail.href ? (
                      <a
                        href={rail.href}
                        className="text-purple-600 underline decoration-purple-500/40 underline-offset-4 hover:text-purple-700"
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
            <p className="mt-6 text-xs text-slate-500 leading-relaxed">
              Support requests move faster if you include your session ID from your report header.
            </p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
