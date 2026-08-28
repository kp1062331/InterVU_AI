import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight, Check } from "@/components/ui/icons";

interface CompanyAssessment {
  name: string;
  badge: string;
  focus: string;
  rounds: string;
  pattern: string;
}

const companyData: CompanyAssessment[] = [
  {
    name: "TCS iON NQT",
    badge: "National Benchmark",
    focus: "Placement assessment",
    rounds: "Aptitude + Advanced Coding",
    pattern: "Numerical, Verbal & Reasoning",
  },
  {
    name: "Infosys",
    badge: "Specialist & SE",
    focus: "Technical & coding",
    rounds: "DSA + Hands-on Coding",
    pattern: "Pseudocode & Algorithmic Design",
  },
  {
    name: "Cognizant",
    badge: "GenC & GenC Next",
    focus: "Aptitude & technical",
    rounds: "Quantitative + Analytical",
    pattern: "Domain Specific Tech MCQs",
  },
  {
    name: "Accenture",
    badge: "Prime Assessment",
    focus: "Coding & communication",
    rounds: "Cognitive + Technical + Comm",
    pattern: "Full-Stack Coding & MCQs",
  },
  {
    name: "Capgemini",
    badge: "Exceller Track",
    focus: "Pseudocode & English",
    rounds: "Pseudocode + Game Aptitude",
    pattern: "Behavioral & English Proficiency",
  },
  {
    name: "IBM",
    badge: "Cognitive Assessment",
    focus: "Technical & coding",
    rounds: "Coding Challenge + Learning Agility",
    pattern: "Data Structures & Complex Logic",
  },
];

export function Coverage() {
  return (
    <Section id="coverage" tone="paper" divided aria-labelledby="coverage-heading">
      <SectionHeading
        eyebrow="Dynamic Question Bank"
        titleId="coverage-heading"
        title="Same company. New test. Every time."
        lede="Practice with company-specific assessments built around the test patterns and skills relevant to each hiring process. Every new attempt gives you a different set, so you can keep practicing without repeating the same questions."
      />

      {/* Structured Table of Company Assessments */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-rule bg-white shadow-xl shadow-black/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-rule bg-surface/80 text-xs font-bold uppercase tracking-wider text-ink-muted">
                <th className="py-4 px-6">Company</th>
                <th className="py-4 px-6">Assessment Focus</th>
                <th className="py-4 px-6 hidden sm:table-cell">Rounds Covered</th>
                <th className="py-4 px-6 hidden md:table-cell">Pattern Calibration</th>
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
                  <td className="py-4 px-6 text-ink-soft hidden sm:table-cell font-medium">
                    {row.rounds}
                  </td>
                  <td className="py-4 px-6 text-ink-faint hidden md:table-cell text-xs font-medium">
                    {row.pattern}
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
    </Section>
  );
}
