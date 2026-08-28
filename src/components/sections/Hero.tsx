"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, Close, Mic, Layers, ClipboardCheck, TrendUp } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <section className="relative overflow-hidden bg-paper pt-28 pb-16 sm:pt-36 sm:pb-24 font-sans" aria-label="Hero">
      {/* 3D Perspective Grid Background */}
      <div className="hero-perspective-grid" aria-hidden="true" />

      {/* Radial Light Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(109, 40, 217, 0.07) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Floating Tilted Cards (Matching reference screenshot card design) */}
        <div className="pointer-events-none absolute inset-x-0 top-2 bottom-0 hidden lg:block" aria-hidden="true">
          {/* Card 1: Top Left - System Architecture (Teal) */}
          <div
            className="animate-float-slow absolute top-2 left-0 xl:left-4 w-44 xl:w-48 rounded-[22px] bg-[#50A6B7] p-3.5 shadow-xl text-left transition-transform"
            style={{ "--card-rotate": "12deg" } as React.CSSProperties}
          >
            <div className="relative mb-3 flex h-24 w-full items-center justify-center rounded-[16px] bg-white/20 p-2 overflow-hidden">
              <svg className="size-16 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="14" fill="#FFE0B2" />
                <circle cx="17" cy="18" r="4" fill="#FFB74D" />
                <circle cx="47" cy="18" r="4" fill="#FFB74D" />
                <circle cx="27" cy="23" r="4" stroke="#1E293B" strokeWidth="2" fill="white" />
                <circle cx="27" cy="23" r="1.5" fill="#1E293B" />
                <circle cx="37" cy="23" r="4" stroke="#1E293B" strokeWidth="2" fill="white" />
                <circle cx="37" cy="23" r="1.5" fill="#1E293B" />
                <path d="M31 23H33" stroke="#1E293B" strokeWidth="2" />
                <path d="M29 31C30.5 32 33.5 32 35 31" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 56C16 44 23 40 32 40C41 40 48 44 48 56" fill="#1E293B" />
                <path d="M28 40L32 47L36 40" fill="white" />
                <path d="M31 44L32 54L33 44" fill="#50A6B7" />
              </svg>
            </div>
            <h4 className="text-xs sm:text-sm font-bold leading-tight text-white">
              System Architecture &amp; Design
            </h4>
            <p className="mt-1 text-[11px] font-medium text-white/85">
              120+ Scenarios
            </p>
          </div>

          {/* Card 2: Top Right - Voice Mock (Lime Green) */}
          <div
            className="animate-float-slow absolute top-4 right-0 xl:right-4 w-44 xl:w-48 rounded-[22px] bg-[#96D62E] p-3.5 shadow-xl text-left transition-transform"
            style={{ "--card-rotate": "-12deg", animationDelay: "-1.5s" } as React.CSSProperties}
          >
            <div className="relative mb-3 flex h-24 w-full items-center justify-center rounded-[16px] bg-black/10 p-2 overflow-hidden">
              <svg className="size-16 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="14" fill="#FFE0B2" />
                <circle cx="17" cy="18" r="4" fill="#6EE7B7" />
                <circle cx="47" cy="18" r="4" fill="#6EE7B7" />
                <circle cx="27" cy="23" r="4" stroke="#064E3B" strokeWidth="2" fill="white" />
                <circle cx="27" cy="23" r="1.5" fill="#064E3B" />
                <circle cx="37" cy="23" r="4" stroke="#064E3B" strokeWidth="2" fill="white" />
                <circle cx="37" cy="23" r="1.5" fill="#064E3B" />
                <path d="M31 23H33" stroke="#064E3B" strokeWidth="2" />
                <path d="M29 31C30.5 32 33.5 32 35 31" stroke="#064E3B" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 56C16 44 23 40 32 40C41 40 48 44 48 56" fill="#064E3B" />
                <path d="M28 40L32 47L36 40" fill="white" />
                <path d="M31 44L32 54L33 44" fill="#96D62E" />
              </svg>
            </div>
            <h4 className="text-xs sm:text-sm font-bold leading-tight text-emerald-950">
              Voice Mock &amp; Audio Prep
            </h4>
            <p className="mt-1 text-[11px] font-medium text-emerald-900/90">
              Real-Time Adaptive AI
            </p>
          </div>

          {/* Card 3: Mid/Left - Behavioral (Coral Red/Orange) */}
          <div
            className="animate-float-slow absolute top-54 left-0 xl:left-2 w-44 xl:w-48 rounded-[22px] bg-[#F36B4A] p-3.5 shadow-xl text-left transition-transform"
            style={{ "--card-rotate": "-14deg", animationDelay: "-2.5s" } as React.CSSProperties}
          >
            <div className="relative mb-3 flex h-24 w-full items-center justify-center rounded-[16px] bg-white/20 p-2 overflow-hidden">
              <svg className="size-16 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="14" fill="#FFE0B2" />
                <circle cx="17" cy="18" r="4" fill="#FF8A65" />
                <circle cx="47" cy="18" r="4" fill="#FF8A65" />
                <circle cx="27" cy="23" r="4" stroke="#7C2D12" strokeWidth="2" fill="white" />
                <circle cx="27" cy="23" r="1.5" fill="#7C2D12" />
                <circle cx="37" cy="23" r="4" stroke="#7C2D12" strokeWidth="2" fill="white" />
                <circle cx="37" cy="23" r="1.5" fill="#7C2D12" />
                <path d="M31 23H33" stroke="#7C2D12" strokeWidth="2" />
                <path d="M29 31C30.5 32 33.5 32 35 31" stroke="#7C2D12" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 56C16 44 23 40 32 40C41 40 48 44 48 56" fill="#7C2D12" />
                <path d="M28 40L32 47L36 40" fill="white" />
                <path d="M31 44L32 54L33 44" fill="#F36B4A" />
              </svg>
            </div>
            <h4 className="text-xs sm:text-sm font-bold leading-tight text-white">
              Business &amp; Behavioral STAR
            </h4>
            <p className="mt-1 text-[11px] font-medium text-white/85">
              80+ Calibrated Rubrics
            </p>
          </div>

          {/* Card 4: Mid/Right - Company Placement (Yellowish) */}
          <div
            className="animate-float-slow absolute top-58 right-0 xl:right-2 w-44 xl:w-48 rounded-[22px] bg-[#EAB308] p-3.5 shadow-xl text-left transition-transform"
            style={{ "--card-rotate": "14deg", animationDelay: "-3.5s" } as React.CSSProperties}
          >
            <div className="relative mb-3 flex h-24 w-full items-center justify-center rounded-[16px] bg-black/10 p-2 overflow-hidden">
              <svg className="size-16 drop-shadow-md" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="24" r="14" fill="#FFE0B2" />
                <circle cx="17" cy="18" r="4" fill="#FDE047" />
                <circle cx="47" cy="18" r="4" fill="#FDE047" />
                <circle cx="27" cy="23" r="4" stroke="#713F12" strokeWidth="2" fill="white" />
                <circle cx="27" cy="23" r="1.5" fill="#713F12" />
                <circle cx="37" cy="23" r="4" stroke="#713F12" strokeWidth="2" fill="white" />
                <circle cx="37" cy="23" r="1.5" fill="#713F12" />
                <path d="M31 23H33" stroke="#713F12" strokeWidth="2" />
                <path d="M29 31C30.5 32 33.5 32 35 31" stroke="#713F12" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 56C16 44 23 40 32 40C41 40 48 44 48 56" fill="#713F12" />
                <path d="M28 40L32 47L36 40" fill="white" />
                <path d="M31 44L32 54L33 44" fill="#EAB308" />
              </svg>
            </div>
            <h4 className="text-xs sm:text-sm font-bold leading-tight text-amber-950">
              Company Placement Tests
            </h4>
            <p className="mt-1 text-[11px] font-medium text-amber-900/90">
              TCS, Infosys, Stripe
            </p>
          </div>
        </div>

        {/* Dual Capsule Top Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rule bg-paper/90 p-1.5 pr-4 shadow-sm backdrop-blur-md transition-transform hover:scale-[1.02]">
          <span className="rounded-full bg-ink px-3.5 py-1 text-xs font-semibold text-white">
            #1 AI-Powered Video &amp; Voice Interview Prep
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-ink-muted">
            +95% Pass Rate <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* Main Headline (Reverted to old font and styling) */}
        <h1 className="mt-4 max-w-4xl text-hero text-ink tracking-tight text-balance">
          Land your dream job with your personal{" "}
          <span className="text-brand">AI interview coach</span>.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
          Practice company-specific mock interviews, get instant voice feedback,
          eliminate weak answers, and enter your real assessment with total confidence.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 mb-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#14161F] hover:bg-black px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-[0.98]"
          >
            Start practicing now
          </a>

        </div>

        {/* Social Proof (Candidate Avatar Stack & Rating) */}
        <div className="mb-14 flex items-center justify-center gap-3">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="inline-flex size-8 items-center justify-center rounded-full border-2 border-white bg-violet-600 text-[10px] font-bold text-white shadow-xs">AK</div>
            <div className="inline-flex size-8 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-[10px] font-bold text-white shadow-xs">SP</div>
            <div className="inline-flex size-8 items-center justify-center rounded-full border-2 border-white bg-emerald-600 text-[10px] font-bold text-white shadow-xs">RJ</div>
            <div className="inline-flex size-8 items-center justify-center rounded-full border-2 border-white bg-amber-600 text-[10px] font-bold text-white shadow-xs">ML</div>
          </div>
          <div className="flex flex-col items-start text-xs text-left">
            <div className="flex items-center gap-0.5 text-amber-400 font-bold text-sm leading-none">
              ★★★★★
            </div>
            <span className="mt-0.5 font-medium text-ink-soft">
              Rated <strong className="text-ink font-bold">4.8/5</strong> by 12,500+ candidate interviews
            </span>
          </div>
        </div>

        {/* Dashboard Screenshot Preview with Perspective Container */}
        <div className="perspective-1000 w-full max-w-5xl">
          <div className="parallax-drift overflow-hidden rounded-2xl border border-rule bg-paper shadow-2xl transition-transform duration-500 hover:rotate-x-0">
            <div className="flex items-center justify-between border-b border-rule bg-surface px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-md border border-rule bg-paper px-4 py-1 font-mono text-xs text-ink-faint">
                intervu.ai/report
              </div>
              <div className="w-12" />
            </div>
            <div className="relative w-full bg-surface">
              <Image
                src="/images/dashboard-hero.png"
                alt="InterVu AI scored feedback report after a mock interview"
                width={1400}
                height={750}
                className="h-auto w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="InterVu AI demo video"
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-white/10 bg-black shadow-raised"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-3 right-3 z-20 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close demo video"
            >
              <Close className="size-4" />
            </button>
            <video controls autoPlay className="size-full object-contain" src="/video/1.mp4" />
          </div>
        </div>
      )}
    </section>
  );
}
