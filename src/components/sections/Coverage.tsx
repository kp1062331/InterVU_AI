import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Check } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CompanyAssessment {
  name: string;
  badge: string;
  focus: string;
}

const companyData: CompanyAssessment[] = [
  {
    name: "TCS iON NQT",
    badge: "National Benchmark",
    focus: "Placement assessment",
  },
  {
    name: "Infosys",
    badge: "Specialist & SE",
    focus: "Technical & coding",
  },
  {
    name: "Cognizant",
    badge: "GenC & GenC Next",
    focus: "Aptitude & technical",
  },
  {
    name: "Accenture",
    badge: "Prime Assessment",
    focus: "Coding & communication",
  },
  {
    name: "Capgemini",
    badge: "Exceller Track",
    focus: "Pseudocode & English",
  },
  {
    name: "IBM",
    badge: "Cognitive Assessment",
    focus: "Technical & coding",
  },
];

export function Coverage() {
  return (
    <section id="coverage" className="bg-paper border-t border-rule" aria-labelledby="coverage-heading">

      {/* ── Full-bleed Split Image Banner (About-page style) ─────────────── */}
      <ScrollReveal variant="fade-in" duration={900}>
        <div className="relative overflow-hidden border-b border-rule bg-paper" style={{ minHeight: 340 }}>
          {/* Right-side image */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
            <Image
              src="/images/dynamic_questions.jpg"
              alt="SkillitriX analytics report showing per-company benchmark scores and section-wise performance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top lg:object-right"
              loading="lazy"
            />
            {/* Left-fade gradient blending into paper background */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-transparent lg:from-paper lg:via-paper/80 lg:to-transparent"
              aria-hidden="true"
            />
          </div>
          {/* Left-side text */}
          <Container className="relative z-10">
            <ScrollReveal className="flex flex-col items-start lg:w-3/5 lg:pr-10 py-14 sm:py-20">
              <p className="eyebrow">Dynamic Question Bank</p>
              <h2 id="coverage-heading" className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-snug">
                Same company. New test. Every time.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Company-specific rubrics refreshed weekly with the latest 2026 hiring patterns. Never repeat the same test twice.
              </p>
            </ScrollReveal>
          </Container>
        </div>
      </ScrollReveal>

      {/* Table + Footer inside Container */}
      <Container className="py-16 sm:py-24">
        {/* Structured Table of Company Assessments */}
        <ScrollReveal delay={100} duration={800}>
          <div className="overflow-hidden rounded-2xl border border-rule bg-white shadow-xl shadow-black/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-rule bg-surface/80 text-xs font-bold uppercase tracking-wider text-ink-muted">
                    <th className="py-4 px-6">Company</th>
                    <th className="py-4 px-6">Assessment Focus</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule/70 text-sm">
                  {companyData.map((row) => (
                    <tr
                      key={row.name}
                      className="group hover:bg-surface/50 transition-colors duration-150"
                    >
                      <td className="py-4 px-6 font-bold text-ink">
                        <div className="flex items-center gap-3">
                          <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-xs font-bold text-white shadow-xs group-hover:bg-brand transition-colors">
                            {row.name[0]}
                          </span>
                          <div>
                            <span className="text-sm font-bold text-ink block">{row.name}</span>
                            <span className="text-[10px] font-semibold text-brand sm:hidden block">
                              {row.badge}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/8 px-3 py-1 text-xs font-semibold text-brand border border-brand/20">
                          <Check className="size-3 text-brand" />
                          {row.focus}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href="https://intervu-frontend.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-ink hover:text-brand transition-colors"
                        >
                          Practice
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule bg-surface/50 px-6 py-4 text-xs text-ink-soft">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-ink">
                  All assessment sets refreshed weekly with latest 2026 hiring patterns.
                </span>
              </div>
              <a
                href="https://intervu-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand hover:underline"
              >
                Explore full company question bank →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
