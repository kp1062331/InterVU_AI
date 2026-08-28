import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ScoreMeter } from "@/components/sections/ScoreMeter";

const sectionScores = [
  { label: "System architecture & design", band: 5 },
  { label: "Data structures & problem solving", band: 4 },
  { label: "Behavioral & communication", band: 5 },
] as const;

const weakAreas = ["Distributed locking", "Queue retries"] as const;

const companyPills = [
  { name: "TCS iON NQT", type: "Placement assessment", count: "120+ sets" },
  { name: "Infosys InfyTQ", type: "Technical & coding", count: "95+ sets" },
  { name: "Cognizant GenC", type: "Aptitude & technical", count: "80+ sets" },
  { name: "Accenture Assessment", type: "Coding & communication", count: "110+ sets" },
  { name: "Capgemini Excellence", type: "Pseudocode & English", count: "75+ sets" },
  { name: "Stripe & big tech", type: "System design & coding", count: "150+ sets" },
] as const;

export function Coverage() {
  return (
    <Section id="coverage" divided aria-labelledby="coverage-heading">
      <div className="relative overflow-hidden">
        {/* Background image right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <Image
            src="/images/about-team.jpg"
            alt="Engineers and interview panel evaluating candidate score analytics"
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

        {/* Heading Text Overlay Layer */}
        <div className="relative z-10 py-4 lg:w-3/5 lg:py-8 lg:pr-8">
          <p className="eyebrow">Performance intelligence</p>
          <h2 id="coverage-heading" className="mt-3 text-display text-ink tracking-tight text-balance">
            Don't just practice. Know your exact readiness score.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
            Detailed score breakdowns, section accuracy, and a weak-area map after every round.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-rule bg-surface p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col items-start rounded-md border border-rule bg-paper p-6 lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Overall placement readiness
            </span>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="figure text-5xl font-semibold text-ink">88%</span>
              <Badge tone="positive">Strong hire</Badge>
            </div>
            <p className="mt-3 text-xs text-ink-soft">
              Top 5% percentile candidate benchmark.
            </p>
          </div>

          <div className="lg:col-span-8">
            <dl className="space-y-4">
              {sectionScores.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <dt className="text-sm text-ink">{row.label}</dt>
                  <dd className="flex shrink-0 items-center gap-2.5">
                    <ScoreMeter value={row.band} label={`${row.label}: ${row.band} of 5`} />
                    <span className="figure w-6 text-right text-sm text-ink-soft">
                      {row.band}/5
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-rule pt-5">
              <span className="text-xs font-medium text-ink-soft">Weak areas:</span>
              {weakAreas.map((area) => (
                <Badge key={area} tone="caution" className="normal-case">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-title text-ink">
          Prepared for tier-1 companies and global tech assessments.
        </h3>

        <div className="mt-6 grid grid-cols-1 border-t border-l border-rule sm:grid-cols-2 lg:grid-cols-3">
          {companyPills.map((comp) => (
            <div
              key={comp.name}
              className="flex items-center justify-between gap-4 border-r border-b border-rule px-5 py-4"
            >
              <div>
                <h4 className="text-sm font-semibold text-ink">{comp.name}</h4>
                <p className="mt-0.5 text-xs text-ink-soft">{comp.type}</p>
              </div>
              <span className="figure shrink-0 text-xs text-ink-faint">{comp.count}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
