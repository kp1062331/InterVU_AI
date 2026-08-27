"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const stats = [
  {
    value: "+95%",
    label: "Score improvement",
    detail: "Candidates gain 2 full rubric bands within 3 practice sessions",
    highlight: true,
  },
  {
    value: "12.5k+",
    label: "Offers landed",
    detail: "At Stripe, TCS, Google, Infosys, Amazon & Fortune 500s",
    highlight: false,
  },
  {
    value: "<60s",
    label: "Report speed",
    detail: "Instant rubric feedback and per-sentence suggestions",
    highlight: false,
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#F5F7FA] text-[#0B1E3D] font-sans overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* ── Full Background Image Layer for About Section ────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/home-about-lab.jpg"
          alt="InterVu AI About Section Background"
          fill
          className="object-cover object-center opacity-15 filter contrast-125 saturate-110"
        />
        {/* Soft Light Overlay Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/90 via-[#F5F7FA]/80 to-[#F5F7FA]/95" />
      </div>

      <Container className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-2 block">
            THE AI-POWERED ADVANTAGE
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-5xl font-medium text-[#0B1E3D] tracking-tight leading-tight mb-5"
          >
            Built for candidates who want real results, not canned advice.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-pretty mb-6">
            Traditional interview prep is passive — reading questions without knowing if your actual spoken response would pass a hiring panel. InterVu AI acts as your dedicated performance coach, evaluating structure, technical depth, and delivery in real time.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
          >
            <span>Read our full founding story</span>
            <span>→</span>
          </Link>
        </div>

        {/* 3 Stat Callouts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-slate-200/50 hover-card-huru flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                  {stat.highlight && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      Proven Result
                    </span>
                  )}
                </div>
                <div className="text-5xl sm:text-6xl font-medium tracking-tight mb-3">
                  <span className={stat.highlight ? "text-emerald-600 font-medium" : "text-purple-600 font-medium"}>
                    {stat.value}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-4">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1E3D] text-white shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider inline-block">
                Why It Works
              </span>
              <h3 className="text-2xl sm:text-4xl font-medium text-white tracking-tight leading-snug">
                Adaptive follow-ups that challenge vague answers before the real interviewer does.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                If your technical explanation drops crucial trade-offs or rambles without structure, InterVu AI immediately probes deeper — just like a Staff Engineer or Hiring Lead would.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="https://intervu-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple-pill px-8 py-3.5 text-sm uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
              >
                <span>Try Free Assessment</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
