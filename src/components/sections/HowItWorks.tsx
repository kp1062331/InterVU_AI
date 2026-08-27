"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    title: "Select Your Role & Company",
    description:
      "Choose your target role (Software Engineer, System Design, Product, PM), seniority level, and company assessment format.",
    tag: "Track & Format",
    detail: "500+ Question Tracks · Timed Clock",
  },
  {
    step: "02",
    title: "Sit the Live AI Interview",
    description:
      "Answer by voice or text in real time. The AI interviewer adapts dynamically, probing deeper when explanations lack technical rigor.",
    tag: "Voice & Real-Time",
    detail: "Adaptive Probing · Real Timer",
  },
  {
    step: "03",
    title: "Get Your Score & Action Plan",
    description:
      "In under 60 seconds, receive your 5-point rubric score, line-by-line transcript feedback, and targeted weak-area exercise plan.",
    tag: "Instant Feedback",
    detail: "<60s Report · Weak Area Map",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 font-sans border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124, 58, 237, 0.08), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-2 block">
            SIMPLE 3-STEP WORKFLOW
          </span>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-5xl font-medium text-[#0B1E3D] tracking-tight leading-tight mb-4"
          >
            How InterVu AI prepares you to pass.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty">
            From setup to scored feedback report in 15 minutes. Build real exam composure with zero guess work.
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 hover-card-huru flex flex-col justify-between relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-300 z-20" />
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1 rounded-full bg-purple-600 text-white font-bold text-sm shadow-md shadow-purple-500/20">
                    Step {item.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-[#0B1E3D] tracking-tight mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center flex flex-col items-center gap-4">
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple-pill px-10 py-4 text-base uppercase tracking-wider shadow-purple-500/30 cursor-pointer inline-flex items-center gap-3"
          >
            <span>Start Your First Free Session</span>
            <span className="text-lg">→</span>
          </a>
          <span className="text-xs font-medium text-slate-500">
            No credit card required · Full rubric report included
          </span>
        </div>

      </Container>
    </section>
  );
}