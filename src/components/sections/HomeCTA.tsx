import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/icons";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-24 font-sans">
      {/* Background image on the right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <Image
          src="/images/home-cta-bg.jpg"
          alt="Student taking an MNC placement assessment test"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center lg:object-right"
          priority
        />
        {/* Left fade gradient overlay blending into dark bg-ink background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-transparent lg:from-ink lg:via-ink/85 lg:to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <div className="lg:w-3/5 lg:pr-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-tint/80">
            Placement Prep Benchmark
          </p>

          <h2 className="mt-4 max-w-2xl text-display text-white tracking-tight text-balance">
            Don’t wait for the real test to find your weak spots.
          </h2>

          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80 text-pretty">
            Take a company-style assessment, see where you stand, and get a personalized AI-powered study plan to improve before test day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="https://intervu-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm sm:text-base font-semibold text-ink shadow-xl transition-all hover:bg-white/90 hover:scale-105 active:scale-[0.98]"
            >
              <span>Take Your First Test</span>
              <ArrowRight className="size-4 text-ink transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#coverage"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm sm:text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Explore Assessments
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-xs font-medium text-white/60">
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Free diagnostic test included
            </span>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
            <span aria-hidden="true">·</span>
            <span className="figure text-white/90">75,000+ tests scored</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
