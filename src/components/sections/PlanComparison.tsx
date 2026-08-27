import { ButtonLink } from "@/components/ui/Button";
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
    cta: { label: "Start Free Assessment", href: "https://intervu-frontend.vercel.app/" },
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "per month",
    blurb: "For an active job search against real deadlines.",
    cta: { label: "Start Pro Assessment", href: "https://intervu-frontend.vercel.app/" },
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
      {
        label: "Scored rounds per month",
        values: { free: "3", pro: "Unlimited", teams: "Unlimited" },
      },
      {
        label: "Round formats",
        values: {
          free: "Behavioral, technical",
          pro: "All formats",
          teams: "All formats",
        },
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
        values: {
          free: "Overall band",
          pro: "Per criterion",
          teams: "Per criterion",
        },
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
      {
        label: "Questions available",
        values: { free: "50", pro: "All 512", teams: "All 512" },
      },
      {
        label: "Role tracks",
        values: { free: "1 track", pro: "All 6 tracks", teams: "All 6 tracks" },
      },
      {
        label: "Custom question packs",
        values: { free: false, pro: false, teams: true },
      },
    ],
  },
  {
    title: "Seats and support",
    rows: [
      { label: "Seats included", values: { free: "1", pro: "1", teams: "Up to 25" } },
      { label: "Cohort dashboard", values: { free: false, pro: false, teams: true } },
      {
        label: "Support",
        values: {
          free: "Community",
          pro: "Email, 1 business day",
          teams: "Named contact",
        },
      },
    ],
  },
];

function Value({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <>
        <Check className="size-4 text-purple-600 font-bold" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Dash className="size-4 text-slate-300" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-slate-700 font-medium">{value}</span>;
}

function PlanHead({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full flex-col font-sans">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xl font-bold text-[#0B1E3D]">{plan.name}</span>
        {plan.recommended && (
          <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            Most Popular
          </span>
        )}
      </div>
      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-extrabold text-[#0B1E3D]" data-figure>
          {plan.price}
        </span>
        <span className="text-xs text-slate-500">{plan.period}</span>
      </p>
      <p className="mt-2 text-xs font-normal text-slate-600">{plan.blurb}</p>
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
                    "border-t border-x border-slate-200 p-6 align-top font-normal rounded-t-2xl",
                    plan.recommended ? "bg-purple-50/60" : "bg-white",
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
                  className="border-b border-purple-200 pt-8 pb-3 text-xs font-bold uppercase tracking-widest text-purple-600"
                >
                  {group.title}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label} className="border-b border-slate-200">
                  <th
                    scope="row"
                    className="py-3.5 pr-6 text-left text-sm font-medium text-slate-800"
                  >
                    {row.label}
                  </th>
                  {plans.map((plan) => (
                    <td
                      key={plan.id}
                      className={cn(
                        "border-x border-slate-200 px-6 py-3.5 text-sm",
                        plan.recommended && "bg-purple-50/40",
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
                    "border-x border-b border-slate-200 px-6 pt-5 pb-6 rounded-b-2xl",
                    plan.recommended && "bg-purple-50/60",
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

      <div className="space-y-10 lg:hidden font-sans">
        {plans.map((plan) => (
          <section
            key={plan.id}
            aria-labelledby={`plan-${plan.id}`}
            className={cn(
              "rounded-2xl border p-6 shadow-xl shadow-slate-200/50",
              plan.recommended
                ? "border-purple-300 bg-purple-50/50"
                : "border-slate-200 bg-white",
            )}
          >
            <h3 id={`plan-${plan.id}`} className="sr-only">
              {plan.name}
            </h3>
            <PlanHead plan={plan} />
            {groups.map((group) => (
              <div key={group.title} className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-purple-600">
                  {group.title}
                </h4>
                <dl className="mt-2 border-t border-slate-200">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-6 border-b border-slate-100 py-3"
                    >
                      <dt className="text-sm text-slate-800">{row.label}</dt>
                      <dd className="flex shrink-0 items-center text-right text-sm">
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
