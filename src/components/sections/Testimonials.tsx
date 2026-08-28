import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const testimonials = [
  {
    quote:
      "I had four final-round rejections before InterVu AI. The report showed my answers lacked structured trade-offs — something human interviewers never pointed out. Two weeks later, I landed the offer at Stripe.",
    author: "Priya Sharma",
    role: "Senior Product Manager, Stripe",
    outcome: "Landed offer at Stripe",
  },
  {
    quote:
      "The voice interviewer probes when your answer gets hand-wavy. It's the only preparation tool that pushed me into real, uncomfortable interview conditions.",
    author: "Marcus Chen",
    role: "Staff Software Engineer, Figma",
    outcome: "17 mock rounds",
  },
  {
    quote:
      "Transitioning from finance to tech, my stories had the right content but the wrong structure. Watching my rubric score climb from 60% to 92% gave me real confidence.",
    author: "Leila Navarro",
    role: "Product Manager, Notion",
    outcome: "Career switch",
  },
] as const;

export function Testimonials() {
  return (
    <Section tone="surface" divided aria-labelledby="testimonials-heading">
      <SectionHeading
        eyebrow="Real candidate outcomes"
        titleId="testimonials-heading"
        title="Trusted by candidates who landed dream roles."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.author}
            className="flex flex-col justify-between rounded-lg border border-rule bg-paper p-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-caution text-sm tracking-wide">★★★★★</span>
                <Badge tone="positive">{item.outcome}</Badge>
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-ink-muted">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-rule pt-5">
              <div className="flex size-9 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                {item.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{item.author}</div>
                <div className="text-xs text-ink-soft">{item.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
