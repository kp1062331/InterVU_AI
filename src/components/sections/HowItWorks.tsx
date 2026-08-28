import { Section, SectionHeading } from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/Button";

const steps = [
  {
    step: "01",
    title: "Select your role & company",
    description:
      "Choose your target role — software engineer, system design, product — seniority, and the company's assessment format.",
  },
  {
    step: "02",
    title: "Sit the live AI interview",
    description:
      "Answer by voice or text in real time. The interviewer adapts, probing deeper when an explanation lacks technical rigor.",
  },
  {
    step: "03",
    title: "Get your score & action plan",
    description:
      "In under 60 seconds: your 5-point rubric score, a marked transcript, and a targeted plan for your weakest areas.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="surface" divided aria-labelledby="how-it-works-heading">
      <SectionHeading
        eyebrow="Simple 3-step workflow"
        titleId="how-it-works-heading"
        title="How InterVu AI prepares you to pass."
        lede="From setup to a scored feedback report in about 15 minutes."
      />

      <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {steps.map((item, index) => (
          <li key={item.step} className="relative">
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-4 -right-4 hidden h-px w-8 bg-rule-strong sm:block"
              />
            )}
            <span className="figure block text-sm text-brand">{item.step}</span>
            <h3 className="text-head text-ink mt-2">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {item.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col items-center gap-3">
        <a
          href="https://intervu-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass({ size: "lg" })}
        >
          Start your first free session
        </a>
        <span className="text-xs text-ink-faint">
          No credit card required · Full rubric report included
        </span>
      </div>
    </Section>
  );
}
