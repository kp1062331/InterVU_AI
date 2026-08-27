"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  badge?: string;
}

const featuresList: FeatureCard[] = [
  {
    id: "feature-1",
    tag: "AI VOICE COACHING",
    title: "Real-Time AI Voice Interviewer",
    description:
      "Speak naturally in live timed sessions. The AI listens, analyzes speech pace, and asks adaptive probing follow-up questions.",
    badge: "Voice & Audio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: "feature-2",
    tag: "COMPANY RUBRICS",
    title: "Calibrated Hiring Rubrics",
    description:
      "Evaluated on exact 5-point assessment bands used by TCS, Infosys, Stripe, Google, and Fortune 500 engineering panels.",
    badge: "5-Point Band",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "feature-3",
    tag: "INSTANT DIAGNOSTICS",
    title: "Line-by-Line Feedback Report",
    description:
      "Get complete scorecards in <60 seconds showing exact sentences where structure slipped and actionable next steps.",
    badge: "<60s Report",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "feature-4",
    tag: "ROLE TRACKS",
    title: "500+ Calibrated Question Bank",
    description:
      "Dedicated tracks across Software Engineering, System Design, Behavioral STAR format, Product Management, and Data.",
    badge: "500+ Tracks",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "feature-5",
    tag: "TIMED SIMULATION",
    title: "Exam Condition Timers",
    description:
      "Simulate real 15, 30, and 60-minute high-stakes conditions to build composure and prevent mid-interview rambling.",
    badge: "Real Clock",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "feature-6",
    tag: "WEAKNESS TRACKING",
    title: "Continuous Progress Loop",
    description:
      "Track your performance over time. Identify specific weak areas (e.g. System Design trade-offs) and practice targeted fixes.",
    badge: "+95% Boost",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 bg-white text-slate-900 font-sans overflow-hidden border-t border-slate-200/80"
      aria-labelledby="features-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 30%, rgba(124, 58, 237, 0.08), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-2 block">
            CORE PLATFORM CAPABILITIES
          </span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-5xl font-medium text-[#0B1E3D] tracking-tight leading-tight mb-4"
          >
            Everything you need to master your interview performance.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty">
            Engineered around authentic hiring rubrics to turn interview anxiety into structured, high-scoring responses.
          </p>
        </div>

        {/* 3-Column Card-Based Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresList.map((card) => (
            <div
              key={card.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xl shadow-slate-200/50 hover-card-huru flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-13 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    {card.icon}
                  </div>
                  {card.badge && (
                    <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-semibold">
                      {card.badge}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-600 mb-1.5 block">
                  {card.tag}
                </span>

                <h3 className="text-xl font-medium text-[#0B1E3D] tracking-tight mb-3 group-hover:text-purple-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-600 group-hover:text-purple-700 transition-colors uppercase tracking-wider">
                  Learn More
                </span>
                <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple-pill px-8 py-3.5 text-sm uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore All Feature Modules</span>
            <span>→</span>
          </a>
        </div>

      </Container>
    </section>
  );
}
