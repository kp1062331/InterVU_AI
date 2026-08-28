import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { buttonClass } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";

const stats = [
  {
    value: "+95%",
    label: "Score improvement",
    detail: "Candidates gain 2 full rubric bands within 3 practice sessions.",
    highlight: true,
  },
  {
    value: "12.5k+",
    label: "Offers landed",
    detail: "At Stripe, TCS, Google, Infosys, Amazon and Fortune 500s.",
    highlight: false,
  },
  {
    value: "<60s",
    label: "Report speed",
    detail: "Instant rubric feedback with per-sentence suggestions.",
    highlight: false,
  },
] as const;

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <div className="relative overflow-hidden">
        {/* Image filling background right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <Image
            src="/images/home-about-lab.jpg"
            alt="InterVu AI speech assessment lab and real-time evaluation setup"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center lg:object-right"
            priority
          />
          {/* Left fade gradient overlay blending into section background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-paper via-paper/95 to-transparent lg:from-paper lg:via-paper/85 lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Text Overlay Layer */}
        <div className="relative z-10 py-4 lg:w-3/5 lg:py-8 lg:pr-8">
          <p className="eyebrow">The AI-powered advantage</p>
          <h2 id="about-heading" className="mt-3 text-display text-ink tracking-tight text-balance">
            Built for candidates who want real results, not canned advice.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
            Traditional interview prep is passive — reading questions without knowing
            if your actual spoken response would pass a hiring panel. InterVu AI
            evaluates structure, technical depth, and delivery in real time.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-[var(--color-brand-hover)]"
            >
              Read our full founding story
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 border-t border-l border-rule sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border-r border-b border-rule px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {stat.label}
              </span>
              {stat.highlight && <Badge tone="positive">Proven</Badge>}
            </div>
            <div className="figure mt-3 text-4xl font-semibold text-ink">
              {stat.value}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-ink p-8 sm:p-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Why it works
            </span>
            <h3 className="mt-3 text-title text-white tracking-tight leading-snug">
              Adaptive follow-ups that challenge vague answers before the real
              interviewer does.
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
              If a technical explanation drops crucial trade-offs or rambles
              without structure, InterVu AI probes deeper — just like a staff
              engineer or hiring lead would.
            </p>
          </div>
          <div className="flex lg:col-span-4 lg:justify-end">
            <a
              href="https://intervu-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass({ size: "md" })}
            >
              Try a free assessment
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
