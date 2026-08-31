import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/Button";
import { ArrowRight, Layers, ClipboardCheck, Mic } from "@/components/ui/icons";

const popularLinks = [
  {
    title: "AI Mock Interviews",
    description: "Practice live voice assessments with real-time feedback rubrics.",
    href: "/#features",
    icon: Mic,
  },
  {
    title: "Assessment Tracks",
    description: "Browse company-oriented tracks for TCS, Infosys, Stripe, and Big Tech.",
    href: "/companies",
    icon: Layers,
  },
  {
    title: "Plans & Pricing",
    description: "Free full practice rounds with no credit card required.",
    href: "/pricing",
    icon: ClipboardCheck,
  },
] as const;

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] overflow-hidden bg-paper font-sans pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-brand/5 blur-3xl"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-4 py-1.5 shadow-xs">
          <span className="size-2 rounded-full bg-brand animate-pulse" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-soft">
            404 Error · Page Not Found
          </span>
        </div>

        {/* Hero typography */}
        <h1 className="mt-6 max-w-2xl text-display text-ink tracking-tight text-balance">
          Looking for an assessment track?
        </h1>
        <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
          The link you followed may be outdated or moved. Jump straight into
          one of our popular sections below or start your practice round.
        </p>

        {/* Direct Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className={buttonClass({ size: "md" })}
          >
            Back to home page
          </Link>
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ variant: "secondary", size: "md" })}
          >
            Start free session
          </a>
        </div>

        {/* Quick Route Cards */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {popularLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col justify-between rounded-xl border border-rule bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-raised"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-paper border border-rule text-brand shadow-xs transition-colors group-hover:bg-brand group-hover:text-white">
                    <IconComponent className="size-5" />
                  </div>
                  <h2 className="mt-4 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand">
                  <span>Explore track</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

