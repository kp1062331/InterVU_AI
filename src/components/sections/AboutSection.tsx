import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ClipboardCheck,
  Layers,
  TrendUp,
  FileText,
  Clock,
  Check,
  ArrowRight,
} from "@/components/ui/icons";

interface FeatureCard {
  number: string;
  category: string;
  title: string;
  description: React.ReactNode;
  tag: string;
  icon: typeof ClipboardCheck;
}

const assessmentFeatures: FeatureCard[] = [
  {
    number: "01",
    category: "Assessment Practice",
    title: "Realistic company-style assessments",
    description: (
      <>
        Practice assessments for{" "}
        <strong className="font-semibold text-ink">
          TCS NQT, Infosys, Cognizant, Accenture, Capgemini, IBM and other MNC hiring tests
        </strong>
        , with per-company structured sections and realistic test flows.
      </>
    ),
    tag: "COMPANY-STYLE TESTS",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    category: "Multiple Skill Areas",
    title: "Aptitude, reasoning & more",
    description: (
      <>
        Build the skills you need across{" "}
        <strong className="font-semibold text-ink">
          Aptitude, Reasoning, Verbal, and Coding
        </strong>{" "}
        — all in one place.
      </>
    ),
    tag: "MULTIPLE SKILL TRACKS",
    icon: Layers,
  },
  {
    number: "03",
    category: "Instant Results",
    title: "Know your score as soon as you finish",
    description: (
      <>
        Get your assessment results without the wait. See your{" "}
        <strong className="font-semibold text-ink">
          score, accuracy, and overall performance
        </strong>{" "}
        after every attempt.
      </>
    ),
    tag: "INSTANT RESULTS",
    icon: TrendUp,
  },
  {
    number: "04",
    category: "Section-wise Insights",
    title: "Know what’s holding you back",
    description: (
      <>
        Go beyond your overall score. See how you performed across sections and identify your{" "}
        <strong className="font-semibold text-ink">strong and weak areas</strong> so you know what to practice next.
      </>
    ),
    tag: "PERFORMANCE BREAKDOWN",
    icon: FileText,
  },
  {
    number: "05",
    category: "Real Test Experience",
    title: "Practice under real test conditions",
    description: (
      <>
        Timed assessments, question navigation, answer tracking, and auto-save give you a realistic environment to build{" "}
        <strong className="font-semibold text-ink">speed, accuracy, and test confidence</strong>.
      </>
    ),
    tag: "REAL TEST MODE",
    icon: Clock,
  },
  {
    number: "06",
    category: "Track Your Progress",
    title: "See yourself getting better",
    description: (
      <>
        Review your previous attempts, compare performance over time, and turn every test into a smarter preparation session.
      </>
    ),
    tag: "ATTEMPT HISTORY",
    icon: Check,
  },
];

export function AboutSection() {
  return (
    <Section id="features" tone="paper" divided aria-labelledby="features-heading">
      <ScrollReveal>
        <SectionHeading
          eyebrow="The AI-powered advantage"
          titleId="features-heading"
          title="Everything you need to ace your next assessment."
          lede="Prepare with realistic up to date company-grade assessments designed around the skills that matter in placement tests. Practice under test conditions, see how you perform, and know exactly where to improve."
        />
      </ScrollReveal>

      {/* 6 Feature Cards Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {assessmentFeatures.map((item, index) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={item.number}
              variant="fade-up"
              delay={index * 75}
              duration={700}
            >
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-rule bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-xl hover:shadow-black/5">
                <div>
                  {/* Header: Number & Category */}
                  <div className="flex items-center justify-between border-b border-rule/60 pb-3">
                    <span className="figure text-xs font-bold text-brand">
                      {item.number} — {item.category}
                    </span>
                    <div className="flex size-8 items-center justify-center rounded-lg bg-brand/8 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-ink leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-3 border-t border-rule/40">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-ink-muted border border-rule group-hover:border-brand/30 group-hover:text-brand transition-colors">
                    <span className="size-1.5 rounded-full bg-brand/70" />
                    {item.tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-14 flex justify-center">
        <ScrollReveal delay={150} duration={800}>
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand hover:scale-105 active:scale-[0.98]"
          >
            <span>Explore all assessment features</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </Section>
  );
}
