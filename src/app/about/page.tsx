import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
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
    body: "Traditional mock interview coaching runs at hundreds an hour. A free, accessible plan with real hiring rubrics ensures meritocracy, not gatekeeping.",
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
    <div className="bg-white text-[#0B1E3D] min-h-screen font-sans">
      
      {/* ── Hero Section (Matching AboutSection.tsx Light Theme & Subtle BG Image) ─ */}
      <section className="relative min-h-[65vh] flex items-center justify-center border-b border-slate-200/80 bg-[#F5F7FA] text-[#0B1E3D] overflow-hidden pt-32 pb-24">
        
        {/* Subtle Background Image Layer matching AboutSection */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/about-team.jpg"
            alt="InterVu AI Team Background"
            fill
            className="object-cover object-center opacity-15 filter contrast-125 saturate-110"
            priority
          />
          {/* Light Overlay Mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/90 via-[#F5F7FA]/80 to-[#F5F7FA]/95" />
        </div>

        {/* Ambient Purple Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 30%, rgba(124, 58, 237, 0.08), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-purple-600 block mb-4">
            ABOUT INTERVU AI
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#0B1E3D] tracking-tight leading-tight max-w-4xl mb-6">
            We built the AI interview coach we wished we had during our own job searches.
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl font-normal text-pretty">
            Between the three of us, we have sat on both sides of the table — as candidates who lost great offers to unstructured answers, and as hiring managers watching talented engineers struggle under exam pressure.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl shadow-xl shadow-slate-200/50">
            <p>
              InterVu AI exists to make high-stakes interview preparation accessible, structured, and outcome-driven. Practice anytime, get instant rubric feedback, and know exactly where you stand before the real assessment.
            </p>
          </div>
        </Container>
      </section>

      {/* Principles Section */}
      <Container className="py-20 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <section aria-labelledby="beliefs">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 block mb-2">
            CORE PRINCIPLES
          </span>
          <h2 id="beliefs" className="text-2xl sm:text-4xl font-medium text-[#0B1E3D] tracking-tight mb-10">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {beliefs.map((belief, index) => (
              <div
                key={belief.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover-card-huru flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-medium text-purple-600 block mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-medium text-[#0B1E3D] mb-3">{belief.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{belief.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section aria-labelledby="team" className="mt-24 border-t border-slate-200/80 pt-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 block mb-2">
            LEADERSHIP
          </span>
          <h2 id="team" className="text-2xl sm:text-4xl font-medium text-[#0B1E3D] tracking-tight mb-10">
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover-card-huru flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center size-12 rounded-full bg-purple-600 text-white font-bold text-base shadow-md">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#0B1E3D]">{member.name}</h3>
                      <p className="text-xs font-semibold text-purple-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Careers Banner */}
        <div className="mt-24 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-purple-50 to-slate-50 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider inline-block mb-2">
              WE ARE HIRING
            </span>
            <h3 className="text-2xl font-medium text-[#0B1E3D]">Join the InterVu AI team</h3>
            <p className="mt-1 max-w-lg text-sm text-slate-600">
              Building AI evaluation systems that help candidates land their dream roles.
            </p>
          </div>
          <a
            href="mailto:jobs@intervu.ai"
            className="btn-purple-pill px-8 py-3.5 text-sm uppercase tracking-wider shrink-0 cursor-pointer"
          >
            jobs@intervu.ai
          </a>
        </div>
      </Container>
    </div>
  );
}
