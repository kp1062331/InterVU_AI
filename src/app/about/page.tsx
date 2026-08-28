import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import type { TeamMember } from "@/types";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why InterVu AI exists, what we believe about interview preparation, and who is building it.",
};

const beliefs = [
  {
    title: "Honest rubric feedback beats generic praise",
    body: "A tool that tells you an answer was fine when structure was lacking costs you the offer. We provide exact, line-by-line feedback so you enter the room prepared.",
  },
  {
    title: "Interviewing is a skill, not an innate trait",
    body: "The gap between a strong candidate and an offer is usually structure, technical depth, and composure — all of which compound quickly with deliberate practice.",
  },
  {
    title: "High-quality coaching should be accessible to all",
    body: "Traditional mock interview coaching runs at hundreds an hour. A free, accessible plan with real hiring rubrics ensures merit decides outcomes, not budget.",
  },
] as const;

const team: TeamMember[] = [
  {
    name: "Anika Rajan",
    role: "Co-founder, CEO",
    bio: "Engineering manager at Google for six years on roughly 800 interview panels. Observed that preparation and answer structure, not raw ability, decided most offers.",
    initials: "AR",
  },
  {
    name: "Daniel Osei",
    role: "Co-founder, CTO",
    bio: "Infrastructure engineer at Meta, then three years building evaluation AI systems. Owns the live voice evaluation pipeline and company rubric models.",
    initials: "DO",
  },
  {
    name: "Sofia Mendez",
    role: "Head of Product",
    bio: "Previously Product at LinkedIn and Notion. Focuses on actionable diagnostic scorecards — the part of the platform that changes candidate behavior.",
    initials: "SM",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper font-sans">
      <section className="border-b border-rule bg-surface pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container className="flex flex-col items-start">
          <p className="eyebrow">About InterVu AI</p>
          <h1 className="mt-4 max-w-3xl text-hero text-ink tracking-tight">
            We built the AI interview coach we wished we had during our own job
            searches.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
            Between the three of us, we have sat on both sides of the table — as
            candidates who lost great offers to unstructured answers, and as
            hiring managers watching talented engineers struggle under exam
            pressure.
          </p>
        </Container>
      </section>

      <Container className="py-16 sm:py-24">
        <section aria-labelledby="beliefs">
          <p className="eyebrow">Core principles</p>
          <h2 id="beliefs" className="mt-3 text-title text-ink tracking-tight">
            What we believe
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {beliefs.map((belief, index) => (
              <div key={belief.title}>
                <span className="figure block text-sm text-brand">0{index + 1}</span>
                <h3 className="text-head text-ink mt-2">{belief.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{belief.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="team" className="mt-20 border-t border-rule pt-16">
          <p className="eyebrow">Leadership</p>
          <h2 id="team" className="mt-3 text-title text-ink tracking-tight">
            The team
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name}>
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{member.name}</h3>
                    <p className="text-xs text-brand">{member.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 flex flex-col items-start gap-6 rounded-lg border border-rule bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <Badge tone="positive">We are hiring</Badge>
            <h3 className="text-head text-ink mt-3">Join the InterVu AI team</h3>
            <p className="mt-1 max-w-lg text-sm text-ink-soft">
              Building AI evaluation systems that help candidates land their
              dream roles.
            </p>
          </div>
          <a
            href="mailto:jobs@intervu.ai"
            className="shrink-0 text-sm font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
          >
            jobs@intervu.ai
          </a>
        </div>
      </Container>
    </div>
  );
}
