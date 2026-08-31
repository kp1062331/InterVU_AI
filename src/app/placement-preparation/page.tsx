import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, ArrowRight } from "@/components/ui/icons";
import { COMPANIES } from "@/lib/companies";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Campus Placement Preparation Guide 2026 | Skillitrix",
  description:
    "How campus placement drives actually work: the aptitude, coding, technical, and HR stages, what to study for each, and a realistic prep plan — plus links to every company-specific guide.",
  path: "/placement-preparation",
});

const stages = [
  {
    title: "Online assessment (aptitude + coding)",
    description:
      "Nearly every drive opens with a timed online test: quantitative aptitude, verbal ability, and logical reasoning for everyone, plus one or more coding problems for technical/digital tracks. Sectional cutoffs usually apply — a strong overall score doesn't save you from missing one section's minimum.",
  },
  {
    title: "Technical interview",
    description:
      "A panel reviews your resume, your projects, core CS fundamentals (OOPs, DBMS, OS, networks), and — very often — the exact code you submitted in the online round. Being able to explain your own solution's logic and complexity matters as much as writing it correctly the first time.",
  },
  {
    title: "HR interview",
    description:
      "Communication, motivation, and fit: why this company, willingness to relocate or work rotational shifts, and how you handle ambiguity or setbacks. Concise, specific answers consistently beat rehearsed, generic ones.",
  },
  {
    title: "Document verification & offer",
    description:
      "Academic mark sheets, ID proof, and a resume check before the formal offer letter. Keep consolidated/provisional certificates and mark sheets ready in advance — a missing document is a common, avoidable last-mile delay.",
  },
];

const codingTopics = [
  "Arrays, strings & hashing",
  "Recursion, searching & sorting",
  "Two-pointer / sliding-window patterns",
  "Basic dynamic programming",
  "Trees and graph traversal (for higher-package tracks)",
  "Time and space complexity analysis",
];

const aptitudeTopics = [
  "Percentages, profit & loss, SI/CI",
  "Time, speed, distance & work",
  "Permutations, combinations & probability",
  "Logical reasoning: syllogisms, puzzles, blood relations",
  "Data interpretation from tables and graphs",
  "Reading comprehension and grammar",
];

const weeklyPlan = [
  {
    week: "Weeks 1–2",
    focus: "Quantitative & logical foundations",
    detail: "Percentages, ratios, time-speed-distance, syllogisms, and puzzles. Timed practice: 60s per question.",
  },
  {
    week: "Weeks 3–4",
    focus: "Core DSA & programming",
    detail: "Arrays, strings, two pointers, hashing, and binary search. 30–40 LeetCode Easy/Medium problems in your chosen language.",
  },
  {
    week: "Weeks 5–6",
    focus: "CS core & project walkthroughs",
    detail: "OOPs design, DBMS indexing/queries, OS process scheduling, and end-to-end rehearsal of your resume projects.",
  },
  {
    week: "Weeks 7–8",
    focus: "Full timed mocks & company patterns",
    detail: "Company-specific online assessment mocks, behavioral STAR responses, and live technical mock interviews.",
  },
];

const faqs = [
  {
    question: "When should I start preparing for campus placements?",
    answer:
      "Most candidates start 2–3 months before final-year recruitment drives begin (typically July/August for 7th-semester on-campus drives). Starting earlier with consistent 45-minute daily aptitude practice significantly reduces crunch stress.",
  },
  {
    question: "How is campus placement aptitude tested?",
    answer:
      "Aptitude tests are usually sectionally timed and cover quantitative math, logical puzzles, and verbal comprehension. Many platforms use adaptive or non-navigable formats where you cannot return to earlier questions once submitted.",
  },
  {
    question: "What coding language should I use for placement coding rounds?",
    answer:
      "C++, Java, or Python are the standard three. Choose one and stick to its standard library (STL in C++, Collections in Java, built-ins in Python) so you don't lose time looking up standard syntax during timed tests.",
  },
  {
    question: "How important are core computer science subjects for placement interviews?",
    answer:
      "Critical for tech roles. Interviewers routinely ask OOPs concepts (polymorphism, encapsulation, inheritance), DBMS fundamentals (ACID properties, indexing, normalization), and basic OS concepts (threads, deadlocks, process states).",
  },
  {
    question: "How should I prepare for placement aptitude tests?",
    answer:
      "Practice each topic — percentages, time & work, time-speed-distance, permutations & combinations, and logical reasoning — under a strict per-question timer, since most placement tests give roughly 45–75 seconds per question. Speed and consistent accuracy matter more than solving every question by the textbook method.",
  },
  {
    question: "How can I prepare for a company-specific interview?",
    answer:
      "General aptitude and coding preparation gets you through most of the funnel, but each company's process, syllabus, and interview style differs — see the dedicated preparation guide for your target company for its exact stages, topics, and commonly asked questions.",
  },
  {
    question: "What is the difference between on-campus and off-campus placement drives?",
    answer:
      "On-campus drives are run through your college's placement cell for eligible final-year students; off-campus drives are open applications directly through a company's careers portal or a hiring platform, usually with the same test/interview stages but no college-level shortlisting step first.",
  },
];

export default function PlacementPreparationPage() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <JsonLd data={faqPageJsonLd(faqs)} />

      <PageHeader
        eyebrow="Placement preparation guide"
        title="How to prepare for campus placements."
        lede="What a typical placement drive actually looks like, which topics carry the most weight, and a realistic week-by-week plan — with links to exact process and syllabus details for each company we cover."
        imageSrc="/images/placement-hero-bg.jpg"
        imageAlt="College students preparing for campus placement drives and mock assessments"
      />

      <Container className="pt-4 pb-24">
        <ScrollReveal delay={50} duration={600}>
          <Breadcrumbs items={[{ name: "Placement Preparation", path: "/placement-preparation" }]} />
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          {/* Stages */}
          <section aria-labelledby="stages-heading" className="mb-14">
            <ScrollReveal>
              <h2 id="stages-heading" className="text-title text-ink">
                What are the stages of a campus placement drive?
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Most drives — across TCS, Infosys, Cognizant, Accenture, Capgemini, IBM, and similar recruiters — follow
                the same four-stage shape, even though the exact test format and cutoffs differ by company.
              </p>
            </ScrollReveal>
            <ol className="mt-6 space-y-4">
              {stages.map((stage, i) => (
                <ScrollReveal key={stage.title} delay={i * 80} duration={650}>
                  <li className="flex gap-4 rounded-xl border border-rule bg-white p-5 shadow-xs">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-ink">{stage.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{stage.description}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </section>

          {/* Coding & aptitude topics */}
          <section aria-labelledby="topics-heading" className="mb-14 border-t border-rule pt-10">
            <ScrollReveal>
              <h2 id="topics-heading" className="text-title text-ink">
                Which coding and aptitude topics matter most?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100} duration={750}>
              <div className="mt-5 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink-muted">Coding</h3>
                  <ul className="mt-3 space-y-2">
                    {codingTopics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink-muted">Aptitude</h3>
                  <ul className="mt-3 space-y-2">
                    {aptitudeTopics.map((topic) => (
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

          {/* Weekly plan */}
          <section aria-labelledby="plan-heading" className="mb-14 border-t border-rule pt-10">
            <ScrollReveal>
              <h2 id="plan-heading" className="text-title text-ink">
                An 8-week placement preparation plan
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                A realistic pace, not a promise — adjust the timeline to how many weeks you actually have before your
                first drive.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120} duration={800}>
              <div className="mt-6 overflow-hidden rounded-xl border border-rule">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-rule bg-surface text-xs font-bold uppercase tracking-wider text-ink-muted">
                        <th className="px-4 py-3">Timeline</th>
                        <th className="px-4 py-3">Focus</th>
                        <th className="px-4 py-3">What to do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-rule/70">
                      {weeklyPlan.map((row) => (
                        <tr key={row.week}>
                          <td className="px-4 py-3.5 align-top font-semibold text-ink">{row.week}</td>
                          <td className="px-4 py-3.5 align-top font-medium text-ink-soft">{row.focus}</td>
                          <td className="px-4 py-3.5 align-top text-ink-soft">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Company-specific links */}
          <section aria-labelledby="companies-heading" className="mb-14 border-t border-rule pt-10">
            <ScrollReveal>
              <h2 id="companies-heading" className="text-title text-ink">
                Company-specific preparation
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Once the fundamentals are solid, the exact process, syllabus, and interview style vary by recruiter —
                go deeper with the guide for your target company.
              </p>
            </ScrollReveal>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {COMPANIES.map((company, idx) => (
                <ScrollReveal key={company.slug} delay={idx * 60} duration={600}>
                  <Link
                    href={`/companies/${company.slug}`}
                    className="group flex items-center justify-between gap-2 rounded-lg border border-rule bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {company.shortName}
                    <ArrowRight className="size-3.5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading" className="border-t border-rule pt-10">
            <ScrollReveal>
              <h2 id="faq-heading" className="text-title text-ink">
                Frequently asked questions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100} duration={750}>
              <div className="mt-5 border-t border-rule">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group border-b border-rule">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </ScrollReveal>
          </section>
        </div>
      </Container>

      <HomeCTA />
    </div>
  );
}
