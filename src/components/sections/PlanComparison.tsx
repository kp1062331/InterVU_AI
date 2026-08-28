import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Dash } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type PlanId = "free" | "pro" | "teams";

interface Plan {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  blurb: string;
  cta: { label: string; href: string };
  recommended?: boolean;
}

interface Row {
  label: string;
  values: Record<PlanId, string | boolean>;
}

interface Group {
  title: string;
  rows: Row[];
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    blurb: "Enough rounds to find out where you stand.",
    cta: { label: "Start free assessment", href: "https://intervu-frontend.vercel.app/" },
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "per month",
    blurb: "For an active job search against real deadlines.",
    cta: { label: "Start Pro assessment", href: "https://intervu-frontend.vercel.app/" },
    recommended: true,
  },
  {
    id: "teams",
    name: "Teams",
    price: "$79",
    period: "per month",
    blurb: "For bootcamps, universities and hiring cohorts.",
    cta: { label: "Talk to us", href: "/contact" },
  },
];

const groups: Group[] = [
  {
    title: "Practice",
    rows: [
      { label: "Scored rounds per month", values: { free: "3", pro: "Unlimited", teams: "Unlimited" } },
      {
        label: "Round formats",
        values: { free: "Behavioral, technical", pro: "All formats", teams: "All formats" },
      },
      { label: "Voice interviews", values: { free: false, pro: true, teams: true } },
      { label: "Timed conditions", values: { free: true, pro: true, teams: true } },
    ],
  },
  {
    title: "Feedback",
    rows: [
      {
        label: "Rubric scoring",
        values: { free: "Overall band", pro: "Per criterion", teams: "Per criterion" },
      },
      { label: "Marked transcript", values: { free: false, pro: true, teams: true } },
      {
        label: "Round history",
        values: { free: "Last 3 rounds", pro: "Full history", teams: "Full history" },
      },
      {
        label: "Transcript export",
        values: { free: false, pro: "Markdown, PDF", teams: "Markdown, PDF" },
      },
    ],
  },
  {
    title: "Question bank",
    rows: [
      { label: "Questions available", values: { free: "50", pro: "All 512", teams: "All 512" } },
      { label: "Role tracks", values: { free: "1 track", pro: "All 6 tracks", teams: "All 6 tracks" } },
      { label: "Custom question packs", values: { free: false, pro: false, teams: true } },
    ],
  },
  {
    title: "Seats and support",
    rows: [
      { label: "Seats included", values: { free: "1", pro: "1", teams: "Up to 25" } },
      { label: "Cohort dashboard", values: { free: false, pro: false, teams: true } },
      {
        label: "Support",
        values: { free: "Community", pro: "Email, 1 business day", teams: "Named contact" },
      },
    ],
  },
];

function Value({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <>
        <Check className="size-4 text-brand" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Dash className="size-4 text-rule-strong" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-ink-muted">{value}</span>;
}

function PlanHead({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full flex-col font-sans">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-lg font-semibold text-ink">{plan.name}</span>
        {plan.recommended && <Badge tone="brand">Most popular</Badge>}
      </div>
      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="figure text-3xl font-semibold text-ink">{plan.price}</span>
        <span className="text-xs text-ink-soft">{plan.period}</span>
      </p>
      <p className="mt-2 text-xs text-ink-soft">{plan.blurb}</p>
      <ButtonLink
        href={plan.cta.href}
        variant={plan.recommended ? "primary" : "secondary"}
        size="md"
        className="mt-5 w-full"
      >
        {plan.cta.label}
      </ButtonLink>
    </div>
  );
}

export function PlanComparison() {
  return (
    <>
      <div className="hidden lg:block font-sans">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Feature comparison across the Free, Pro and Teams plans.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="w-[22rem] align-bottom">
                <span className="sr-only">Feature</span>
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={cn(
                    "rounded-t-lg border-t border-x border-rule p-6 align-top font-normal",
                    plan.recommended ? "bg-brand/5" : "bg-paper",
                  )}
                >
                  <PlanHead plan={plan} />
                </th>
              ))}
            </tr>
          </thead>

          {groups.map((group) => (
            <tbody key={group.title}>
              <tr>
                <th
                  scope="rowgroup"
                  colSpan={4}
                  className="border-b border-rule pt-8 pb-3 text-xs font-semibold uppercase tracking-wide text-ink-faint"
                >
                  {group.title}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label} className="border-b border-rule">
                  <th scope="row" className="py-3.5 pr-6 text-left text-sm font-medium text-ink">
                    {row.label}
                  </th>
                  {plans.map((plan) => (
                    <td
                      key={plan.id}
                      className={cn(
                        "border-x border-rule px-6 py-3.5 text-sm",
                        plan.recommended && "bg-brand/[0.03]",
                      )}
                    >
                      <Value value={row.values[plan.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}

          <tfoot>
            <tr>
              <td />
              {plans.map((plan) => (
                <td
                  key={plan.id}
                  className={cn(
                    "rounded-b-lg border-x border-b border-rule px-6 pt-5 pb-6",
                    plan.recommended ? "bg-brand/5" : "bg-paper",
                  )}
                >
                  <ButtonLink
                    href={plan.cta.href}
                    variant={plan.recommended ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    {plan.cta.label}
                  </ButtonLink>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="space-y-8 lg:hidden font-sans">
        {plans.map((plan) => (
          <section
            key={plan.id}
            aria-labelledby={`plan-${plan.id}`}
            className={cn(
              "rounded-lg border p-6",
              plan.recommended ? "border-brand/30 bg-brand/[0.03]" : "border-rule bg-paper",
            )}
          >
            <h3 id={`plan-${plan.id}`} className="sr-only">
              {plan.name}
            </h3>
            <PlanHead plan={plan} />
            {groups.map((group) => (
              <div key={group.title} className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  {group.title}
                </h4>
                <dl className="mt-2 border-t border-rule">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-6 border-b border-rule py-3"
                    >
                      <dt className="text-sm text-ink">{row.label}</dt>
                      <dd className="flex shrink-0 items-center gap-1.5 text-right text-sm">
                        <Value value={row.values[plan.id]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
