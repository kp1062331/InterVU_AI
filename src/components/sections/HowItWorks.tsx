import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowRight, Layers, Clock, TrendUp } from "@/components/ui/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Choose your company & test",
    description: (
      <>
        Pick the assessment you want to practice —{" "}
        <strong className="font-semibold text-ink">
          TCS NQT, Infosys, Cognizant, Accenture, Capgemini, or IBM
        </strong>{" "}
        — and get the corresponding test experience.
      </>
    ),
    icon: Layers,
    badge: "Company Catalog",
  },
  {
    step: "02",
    title: "Take the test. Just like the real thing.",
    description: (
      <>
        Enter a timed assessment environment with company-specific sections, questions, navigation, and test rules. Answer at your own pace while your progress is automatically saved.
      </>
    ),
    icon: Clock,
    badge: "Exam Simulation",
  },
  {
    step: "03",
    title: "Get your score & AI study plan",
    description: (
      <>
        See your{" "}
        <strong className="font-semibold text-ink">
          score, accuracy, time performance, section-wise KPIs, strengths, and weak areas
        </strong>
        . Get AI-powered recommendations on what to study next — plus see whether you{" "}
        <strong className="font-semibold text-ink">
          passed or missed the company-specific benchmark
        </strong>
        .
      </>
    ),
    icon: TrendUp,
    badge: "AI Scorecard & Plan",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="surface" divided aria-labelledby="how-it-works-heading">
      <ScrollReveal>
        <SectionHeading
          eyebrow="3-step workflow"
          titleId="how-it-works-heading"
          title="From practice test to placement-ready."
          lede="Choose your company, take the assessment in a realistic timed environment, then get AI-powered insights on exactly what to improve."
        />
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={item.step}
              variant="fade-up"
              delay={index * 100}
              duration={700}
            >
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-rule bg-paper p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-black/20 hover:shadow-xl hover:shadow-black/5">
                {/* Card Step Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between border-b border-rule pb-4">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-ink font-mono text-sm font-bold text-white shadow-sm transition-colors group-hover:bg-brand">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-bold text-ink-muted border border-rule group-hover:border-brand/30 group-hover:text-brand transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold text-ink leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>

                {/* Progress step indicator */}
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-rule/50 text-xs font-semibold text-ink-faint group-hover:text-brand transition-colors">
                  <Icon className="size-4" />
                  <span>Step {index + 1} of 3</span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* CTA Section */}
      <ScrollReveal delay={150} duration={800}>
        <div className="mt-14 flex flex-col items-center gap-3">
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-xl transition-all hover:bg-brand hover:scale-105 active:scale-[0.98]"
          >
            <span>Start Your Assessment</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-xs text-ink-soft">
            No credit card required · Full rubric report included
          </span>
        </div>
      </ScrollReveal>
    </Section>
  );
}
