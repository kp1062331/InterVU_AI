import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { buttonClass } from "@/components/ui/Button";
import {
  Mic,
  ClipboardCheck,
  FileText,
  Layers,
  Clock,
  TrendUp,
} from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

interface FeatureCard {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  metric: string;
}

const featuresList: FeatureCard[] = [
  {
    id: "voice",
    icon: Mic,
    title: "Real-time AI voice interviewer",
    description:
      "Speak naturally in live timed sessions. The AI listens, tracks pace, and asks adaptive follow-up questions.",
    metric: "Voice & audio",
  },
  {
    id: "rubrics",
    icon: ClipboardCheck,
    title: "Calibrated hiring rubrics",
    description:
      "Evaluated on the same 5-point assessment bands used by TCS, Infosys, Stripe and Fortune 500 engineering panels.",
    metric: "5-point band",
  },
  {
    id: "report",
    icon: FileText,
    title: "Line-by-line feedback report",
    description:
      "A complete scorecard in under a minute, showing exactly where structure slipped and what to fix first.",
    metric: "<60s report",
  },
  {
    id: "bank",
    icon: Layers,
    title: "500+ calibrated question bank",
    description:
      "Dedicated tracks across software engineering, system design, behavioral (STAR) and product management.",
    metric: "500+ questions",
  },
  {
    id: "timer",
    icon: Clock,
    title: "Exam-condition timers",
    description:
      "Simulate real 15, 30 and 60-minute conditions to build composure and stop mid-interview rambling.",
    metric: "Real clock",
  },
  {
    id: "progress",
    icon: TrendUp,
    title: "Continuous progress tracking",
    description:
      "See performance over time and identify specific weak areas — like system design trade-offs — to drill.",
    metric: "Session history",
  },
];

export function Features() {
  return (
    <Section id="features" divided aria-labelledby="features-heading">
      <SectionHeading
        eyebrow="Core platform capabilities"
        titleId="features-heading"
        title="Everything you need to master your interview performance."
        lede="Built around authentic hiring rubrics, to turn interview anxiety into structured, high-scoring responses."
      />

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuresList.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="flex flex-col">
              <div className="flex size-10 items-center justify-center rounded-md bg-brand/8 text-brand">
                <Icon className="size-5" />
              </div>
              <h3 className="text-head text-ink mt-4">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {card.description}
              </p>
              <Badge tone="neutral" className="mt-4 self-start normal-case">
                {card.metric}
              </Badge>
            </div>
          );
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="https://intervu-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass({ variant: "secondary", size: "md" })}
        >
          Explore all feature modules
        </a>
      </div>
    </Section>
  );
}
