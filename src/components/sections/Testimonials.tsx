"use client";

import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "I had four final-round rejections before InterVu AI. The report showed me my answers lacked structured trade-offs — something human interviewers never pointed out. Two weeks later, I landed the offer at Stripe.",
    author: "Priya Sharma",
    role: "Senior Product Manager, Stripe",
    badge: "Landed Offer at Stripe",
    rating: 5,
    avatarBg: "bg-purple-600",
  },
  {
    quote:
      "The voice interviewer probes when your answer gets hand-wavy. It's the only preparation tool that pushed me into real uncomfortable interview conditions.",
    author: "Marcus Chen",
    role: "Staff Software Engineer, Figma",
    badge: "17 Mock Rounds",
    rating: 5,
    avatarBg: "bg-indigo-600",
  },
  {
    quote:
      "Transitioning from finance to tech, my stories had the right content but the wrong structure. Seeing my rubric score jump from 60% to 92% gave me total confidence.",
    author: "Leila Navarro",
    role: "Product Manager, Notion",
    badge: "Career Switch Success",
    rating: 5,
    avatarBg: "bg-violet-600",
  },
] as const;

export function Testimonials() {
  return (
    <section
      className="relative py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden border-t border-slate-200/80"
      aria-labelledby="testimonials-heading"
    >
      <Container className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-2 block">
            REAL CANDIDATE OUTCOMES
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-5xl font-medium text-[#0B1E3D] tracking-tight leading-tight mb-4"
          >
            Trusted by candidates who landed dream roles.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty">
            See how real job seekers transformed their interview confidence and secured offers.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <figure
              key={item.author}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 hover-card-huru flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-amber-500 font-bold text-sm tracking-wider">
                    ★★★★★
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    {item.badge}
                  </span>
                </div>

                <blockquote className="text-base text-slate-700 leading-relaxed font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className={`size-11 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-md`}>
                  {item.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-base font-bold text-[#0B1E3D]">{item.author}</div>
                  <div className="text-xs text-purple-600 font-semibold">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </Container>
    </section>
  );
}
