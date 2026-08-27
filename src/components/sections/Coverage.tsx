"use client";

import { Container } from "@/components/ui/Container";

const companyPills = [
  { name: "TCS iON NQT", type: "Placement Assessment", count: "120+ Sets" },
  { name: "Infosys InfyTQ", type: "Technical & Coding", count: "95+ Sets" },
  { name: "Cognizant GenC", type: "Aptitude & Technical", count: "80+ Sets" },
  { name: "Accenture Assessment", type: "Coding & Communication", count: "110+ Sets" },
  { name: "Capgemini Excellence", type: "Pseudocode & English", count: "75+ Sets" },
  { name: "Stripe & Big Tech", type: "System Design & Coding", count: "150+ Sets" },
];

export function Coverage() {
  return (
    <section
      id="coverage"
      className="relative py-20 sm:py-28 bg-white text-slate-900 font-sans overflow-hidden border-t border-slate-200/80"
      aria-labelledby="coverage-heading"
    >
      <Container className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 mb-2 block">
            PERFORMANCE INTELLIGENCE &amp; READINESS
          </span>
          <h2
            id="coverage-heading"
            className="text-3xl sm:text-5xl font-medium text-[#0B1E3D] tracking-tight leading-tight mb-4"
          >
            Don&apos;t just practice. Know your exact readiness score.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-pretty">
            Detailed score breakdowns, section accuracy, and targeted weak-area maps delivered right after every round.
          </p>
        </div>

        {/* Readiness Dashboard Mockup Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-2xl shadow-slate-200/60 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Overall Score Gauge */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                OVERALL PLACEMENT READINESS
              </span>
              <div className="relative my-4 flex items-baseline gap-2">
                <span className="text-6xl font-medium text-purple-600 tracking-tight">88%</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  STRONG HIRE
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Top 5% percentile candidate benchmark
              </p>
            </div>

            {/* Section Breakdown Meters */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-800">System Architecture &amp; Design</span>
                  <span className="text-purple-600">92%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-800">Data Structures &amp; Problem Solving</span>
                  <span className="text-purple-600">85%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-800">Behavioral &amp; Communication</span>
                  <span className="text-emerald-600">96%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[96%]" />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs text-slate-500 font-semibold mr-2">Identified Weak Areas:</span>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                  ⚠️ Distributed Locking
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                  ⚠️ Queue Retries
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Company Assessment Tracks Grid */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-purple-600 block mb-2">
              TARGETED ASSESSMENT COVERAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#0B1E3D]">
              Prepared for Tier-1 companies and global tech assessments.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyPills.map((comp) => (
              <div
                key={comp.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover-card-huru flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-medium text-[#0B1E3D] mb-1">{comp.name}</h4>
                  <p className="text-xs text-slate-500">{comp.type}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold">
                  {comp.count}
                </span>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
