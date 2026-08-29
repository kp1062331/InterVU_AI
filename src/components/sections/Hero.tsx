"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Close } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Typewriter Hero Titles
const HERO_TITLES = [
  "Be Ready When the Opportunity Comes.",
  "Practice for the Companies You Want to Join.",
  "The Offer Starts With Being Ready.",
  "Your Placement Prep Just Got Real.",
];

// Sequence order for floating cards: 1 (Top Left) -> 4 (Mid Right) -> 2 (Top Right) -> 3 (Mid Left)
const CARD_CYCLE_ORDER = [0, 3, 1, 2]; // indices in floatingCardSlots

interface MNCJobProfile {
  company: string;
  badgeColor: string;
  role: string;
  packageOrBand: string;
  metric: string;
  skills: string;
  iconType: "google" | "microsoft" | "amazon" | "tcs" | "deloitte" | "goldman" | "infosys" | "accenture" | "jpmorgan";
}

interface CardSlotConfig {
  id: string;
  positionClass: string;
  rotation: string;
  bgColor: string;
  textColor: string;
  profiles: MNCJobProfile[];
}

const floatingCardSlots: CardSlotConfig[] = [
  // Slot 0: Card 1 (Top Left)
  {
    id: "card-1",
    positionClass: "top-14 xl:top-28 left-2 xl:left-8 2xl:left-26",
    rotation: "8deg",
    bgColor: "bg-white border border-black/[0.12] shadow-xl shadow-slate-900/5",
    textColor: "text-ink",
    profiles: [
      {
        company: "Google",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Senior SDE & Distributed Systems",
        packageOrBand: "L5 Level Benchmark",
        metric: "96% Assessment Match",
        skills: "DSA & System Concurrency",
        iconType: "google",
      },
      {
        company: "Microsoft",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Azure Cloud Architect",
        packageOrBand: "SDE II Track",
        metric: "94% Assessment Match",
        skills: "Microservices & C# .NET",
        iconType: "microsoft",
      },
      {
        company: "Amazon",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "SDE II — Core Platform",
        packageOrBand: "Tier-1 MNC Standard",
        metric: "95% Assessment Match",
        skills: "System Scale & DynamoDB",
        iconType: "amazon",
      },
    ],
  },
  // Slot 1: Card 2 (Top Right)
  {
    id: "card-2",
    positionClass: "top-16 xl:top-22 right-2 xl:right-8 2xl:right-28",
    rotation: "-8deg",
    bgColor: "bg-white border border-black/[0.12] shadow-xl shadow-slate-900/5",
    textColor: "text-ink",
    profiles: [
      {
        company: "Amazon",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "AWS Backend Specialist",
        packageOrBand: "SDE-1 Hiring Standard",
        metric: "95% Passing Score",
        skills: "Leadership Principles & LLD",
        iconType: "amazon",
      },
      {
        company: "Infosys",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Specialist Programmer (SP)",
        packageOrBand: "Tier-1 Calibrated",
        metric: "Top 2% Percentile",
        skills: "Hard Dynamic Programming",
        iconType: "infosys",
      },
      {
        company: "Microsoft",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "AI & Cognitive Engineer",
        packageOrBand: "SWE Grade Level",
        metric: "93% Passing Score",
        skills: "LLMs, Python & PyTorch",
        iconType: "microsoft",
      },
    ],
  },
  // Slot 2: Card 3 (Mid/Bottom Left)
  {
    id: "card-3",
    positionClass: "top-[330px] xl:top-[380px] left-1 xl:left-6 2xl:left-25",
    rotation: "-10deg",
    bgColor: "bg-white border border-black/[0.12] shadow-xl shadow-slate-900/5",
    textColor: "text-ink",
    profiles: [
      {
        company: "Accenture",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Advanced App Engineer",
        packageOrBand: "ASE Prime Track",
        metric: "94% Band Score",
        skills: "Reasoning & Full-Stack",
        iconType: "accenture",
      },
      {
        company: "J.P. Morgan",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Software Engineer Program",
        packageOrBand: "Quant & Tech Level",
        metric: "96% Assessment Score",
        skills: "Java, Concurrency & SQL",
        iconType: "jpmorgan",
      },
      {
        company: "Google",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Frontend Engineer III",
        packageOrBand: "L4 Benchmark",
        metric: "92% Band Score",
        skills: "Web Vitals, DOM & React",
        iconType: "google",
      },
    ],
  },
  // Slot 3: Card 4 (Mid/Bottom Right)
  {
    id: "card-4",
    positionClass: "top-[320px] xl:top-[380px] right-1 xl:right-6 2xl:right-25",
    rotation: "10deg",
    bgColor: "bg-white border border-black/[0.12] shadow-xl shadow-slate-900/5",
    textColor: "text-ink",
    profiles: [
      {
        company: "TCS Digital",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "System Architect & Ninja",
        packageOrBand: "NQT Advanced Track",
        metric: "Top 1% Rank",
        skills: "Aptitude & Speed Coding",
        iconType: "tcs",
      },
      {
        company: "Deloitte",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Technology Consultant",
        packageOrBand: "USI Advisory Level",
        metric: "93% Case Score",
        skills: "STAR & Tech Problem Solving",
        iconType: "deloitte",
      },
      {
        company: "Goldman Sachs",
        badgeColor: "bg-[#F4F5F8] text-ink border border-black/[0.06]",
        role: "Quantitative Tech Analyst",
        packageOrBand: "Global Markets",
        metric: "97% Accuracy",
        skills: "Math, Logic & Algorithms",
        iconType: "goldman",
      },
    ],
  },
];

function CompanyIcon({ type }: { type: MNCJobProfile["iconType"] }) {
  switch (type) {
    case "google":
      return (
        <svg className="size-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      );
    case "microsoft":
      return (
        <svg className="size-5" viewBox="0 0 24 24">
          <rect x="1" y="1" width="10" height="10" fill="#F25022" />
          <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
          <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
          <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
        </svg>
      );
    case "amazon":
      return (
        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.4 17.5c-3.1 2.3-7.6 3.5-11.5 2.2-.5-.2-1-.6-.5-1.1.4-.4 1-.1 1.4.1 3.3 1.1 7.3.1 9.9-1.8.4-.3.9.1.7.6zM17 15.6c-.3-.4-1.6-.2-2.2-.1-.2 0-.2-.2 0-.3 1.1-.9 2.9-.6 3.2-.2.3.4-.2 2.2-1.3 3.1-.2.1-.3.1-.3-.1.2-.7.8-2 .6-2.4zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-3.2 0-5.8-2.6-5.8-5.8S9.8 4.9 13 4.9s5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z" />
        </svg>
      );
    case "tcs":
    case "infosys":
    case "accenture":
    case "deloitte":
    case "goldman":
    case "jpmorgan":
    default:
      return (
        <div className="flex size-5 items-center justify-center rounded-full bg-ink font-bold text-[10px] text-white">
          {type[0].toUpperCase()}
        </div>
      );
  }
}

// Student Assessment Mock Screens Data for Carousel
const ASSESSMENT_SCREENS = [
  {
    id: "login",
    tabLabel: "Split Portal Login",
    badge: "Secure Authentication",
    title: "Split-Panel Candidate Login Gate",
    description: "Clean credentials panel with integrated single sign-on (SSO) and brand marketing carousel.",
    image: "/images/hero-login.png",
  },
  {
    id: "dashboard",
    tabLabel: "Candidate Portal",
    badge: "Student Dashboard",
    title: "Candidate Evaluation Portal",
    description: "Track active evaluations, score timeline trends, domain competency, and practice attempts in one place.",
    image: "/images/hero-dashboard.png",
  },
  {
    id: "catalog",
    tabLabel: "Assessment Catalog",
    badge: "Practice Papers",
    title: "MNC-Specific Assessment Library",
    description: "Explore, search, and practice mock tests calibrated against Google, Infosys, and TCS Digital patterns.",
    image: "/images/hero-assessments.png",
  },
  {
    id: "exam",
    tabLabel: "Exam Simulator",
    badge: "Live Test Environment",
    title: "Proctored Adaptive Exam Client",
    description: "A secure, clean browser test console with split screens, question palettes, and live timing checks.",
    image: "/images/hero-test.png",
  },
  {
    id: "analytics",
    tabLabel: "Analytics & Mastery",
    badge: "Performance Insights",
    title: "MNC Readiness Scorecard & Insights",
    description: "In-depth cohort comparisons, difficulty breakdown metrics, and topic-wise mastery analytics.",
    image: "/images/hero-analytics.png",
  },
];

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Title rotation state
  const [titleIdx, setTitleIdx] = useState(0);

  // Floating cards state
  // cardProfileIndices holds the current profile index for each of the 4 card slots
  const [cardProfileIndices, setCardProfileIndices] = useState<number[]>([0, 0, 0, 0]);
  // activeSlotExiting tracks which card slot is currently fading out to change content
  const [exitingSlot, setExitingSlot] = useState<number | null>(null);
  // Staggered entrance tracker (1, 4, 2, 3 come 1 by 1)
  const [enteredSlots, setEnteredSlots] = useState<boolean[]>([false, false, false, false]);

  // Assessment Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sync animation reveals with IntroSplash brand entry animation
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    const introDone = sessionStorage.getItem("skillitrix-intro-done") === "true";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (introDone || prefersReducedMotion) {
      Promise.resolve().then(() => setIntroCompleted(true));
      return;
    }

    const handleIntroComplete = () => {
      setIntroCompleted(true);
    };

    window.addEventListener("intro-complete", handleIntroComplete);

    const fallbackTimer = setTimeout(() => {
      setIntroCompleted(true);
    }, 5000);

    return () => {
      window.removeEventListener("intro-complete", handleIntroComplete);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // 1. Rotate Hero Titles with slide/fade transition
  useEffect(() => {
    if (!introCompleted) return;

    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % HERO_TITLES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [introCompleted]);

  // 2. Initial Staggered Entrance for Floating Cards: Order 1 (slot 0) -> 4 (slot 3) -> 2 (slot 1) -> 3 (slot 2)
  useEffect(() => {
    const entranceOrder = [0, 3, 1, 2];
    const timers: NodeJS.Timeout[] = [];

    entranceOrder.forEach((slotIdx, i) => {
      const timer = setTimeout(() => {
        setEnteredSlots((prev) => {
          const updated = [...prev];
          updated[slotIdx] = true;
          return updated;
        });
      }, 200 + i * 300);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  // 3. Floating Cards Sequential Disappear & Reappear with Different MNC Content
  // Sequence: 1 (slot 0) -> 4 (slot 3) -> 2 (slot 1) -> 3 (slot 2) -> repeat
  useEffect(() => {
    let currentStep = 0;

    const interval = setInterval(() => {
      const targetSlot = CARD_CYCLE_ORDER[currentStep];

      // Phase 1: Fade out the card
      setExitingSlot(targetSlot);

      // Phase 2: Swap content and fade back in
      setTimeout(() => {
        setCardProfileIndices((prev) => {
          const updated = [...prev];
          const totalProfiles = floatingCardSlots[targetSlot].profiles.length;
          updated[targetSlot] = (updated[targetSlot] + 1) % totalProfiles;
          return updated;
        });
        setExitingSlot(null);
      }, 500);

      currentStep = (currentStep + 1) % CARD_CYCLE_ORDER.length;
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  // 4. Assessment Carousel Auto-Rotation (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ASSESSMENT_SCREENS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Lightbox escape handler
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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper py-28 sm:py-46 font-sans" aria-label="Hero">
      {/* Texture Background */}
      <div className="hero-bg-texture" aria-hidden="true" />

      {/* Fine Grid Background */}
      <div className="hero-grid-lines" aria-hidden="true" />

      {/* Radial Light Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(109, 40, 217, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Floating MNC Job Profile Cards (z-index is strictly in the back: z-0 pointer-events-none) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-0 hidden lg:block" aria-hidden="true">
        {floatingCardSlots.map((slot, slotIdx) => {
          const profile = slot.profiles[cardProfileIndices[slotIdx]];
          const isEntered = enteredSlots[slotIdx];
          const isExiting = exitingSlot === slotIdx;

          return (
            <div
              key={slot.id}
              className={`animate-float-slow absolute hero-floating-card ${slot.positionClass} w-44 xl:w-48 h-[200px] xl:h-[210px] rounded-[22px] p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] text-left flex flex-col justify-between backdrop-blur-md bg-white/75 border border-black/[0.08] transition-all duration-500 ${isEntered && !isExiting
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 -translate-y-4"
                }`}
              style={{ "--card-rotate": slot.rotation } as React.CSSProperties}
            >
              {/* Card Top / Company Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-white border border-black/[0.06] shadow-2xs">
                    <CompanyIcon type={profile.iconType} />
                  </div>
                  <span className="text-[12px] font-bold text-ink tracking-tight">
                    {profile.company}
                  </span>
                </div>
                {/* Purple Top Right Dot */}
                <span className="status-dot size-2 rounded-full bg-brand ring-2 ring-brand/20 shadow-[0_0_6px_rgba(109,40,217,0.35)] transition-all duration-300" />
              </div>

              {/* Card Middle / Benchmark Metric Gradient Box */}
              <div className="rounded-xl bg-gradient-to-br from-white/95 to-[#F7F8FA] p-2 border border-black/[0.05] shadow-2xs">
                <p className="text-[9.5px] font-bold uppercase tracking-wider text-ink-soft">
                  {profile.packageOrBand}
                </p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[11.5px] font-bold text-ink tracking-tight leading-none">
                    {profile.metric}
                  </span>
                </div>
              </div>

              {/* Card Bottom / Role Details */}
              <div className="pb-0.5">
                <h4 className="text-[12.5px] font-bold leading-tight text-ink line-clamp-1">
                  {profile.role}
                </h4>
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="text-[9.5px] inline-flex items-center gap-1 font-medium text-ink-soft bg-surface border border-rule px-1.5 py-0.5 rounded-full">
                    <span className="size-1 rounded-full bg-ink-faint" />
                    {profile.skills}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Container className="relative z-10 w-full flex flex-col items-center text-center">
        {/* 1. Modern Linear/Vercel-style Shimmer Gradient Glass Capsule */}
        <ScrollReveal delay={0} duration={800} active={introCompleted}>
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-7 inline-flex items-center rounded-full p-[1px] bg-gradient-to-r from-brand/40 via-purple-500/20 to-blue-500/40 shadow-xs hover:from-brand/60 hover:to-blue-500/60 hover:shadow-md hover:shadow-brand/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2.5 rounded-full bg-white/95 px-3.5 py-1.5 backdrop-blur-xl">
              {/* Spark Chip */}
              <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-indigo-600 px-2.5 py-0.5 text-[10.5px] font-bold text-white shadow-xs">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                Tier-1 MNC
              </span>

              {/* Label */}
              <span className="text-xs font-semibold text-ink">
                MNC-Graded Placement Benchmark
              </span>

              {/* Divider */}
              <span className="h-3 w-px bg-rule-strong" aria-hidden="true" />

              {/* Right Action */}
              <span className="flex items-center gap-1 text-xs font-bold text-brand group-hover:text-brand-hover">
                Practice Now
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </a>
        </ScrollReveal>

        {/* 3. Hero Title with Smooth Slide-Up Fade Transition */}
        <ScrollReveal delay={100} duration={800} active={introCompleted}>
          <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[120px] flex items-center justify-center">
            <h1
              key={titleIdx}
              className="max-w-4xl text-hero text-ink tracking-tight text-balance animate-title-reveal"
            >
              {HERO_TITLES[titleIdx]}
            </h1>
          </div>
        </ScrollReveal>

        {/* 4. Description Text */}
        <ScrollReveal delay={200} duration={800} active={introCompleted}>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
            No random practice. No endless PDFs. Just realistic{" "}
            <strong className="font-semibold text-ink">MNC-grade assessments</strong> across
            Aptitude, Reasoning, Verbal, and Coding — built to help you know what to expect and perform better.
          </p>
        </ScrollReveal>

        {/* Action CTAs */}
        <ScrollReveal delay={300} duration={800} active={introCompleted}>
          <div className="mt-8 mb-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://intervu-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#14161F] hover:bg-black px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-[0.98]"
            >
              Start practicing now
            </a>
          </div>
        </ScrollReveal>

        {/* 5. Student Assessment Screen Page Carousel */}
        <ScrollReveal delay={400} duration={1000} className="w-full flex flex-col items-center" active={introCompleted}>
          <div
            className="perspective-1000 w-full max-w-5xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Assessment Screen Selector Tabs */}
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              {ASSESSMENT_SCREENS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${activeSlide === idx
                    ? "bg-ink text-white shadow-md scale-105"
                    : "border border-rule bg-white/90 text-ink-muted hover:bg-surface hover:text-ink"
                    }`}
                >
                  <span>{item.tabLabel}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${activeSlide === idx ? "bg-[#4c1d95] text-white" : "bg-rule text-ink-soft"
                      }`}
                  >
                    {item.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Screen Display Container */}
            <div className="parallax-drift overflow-hidden rounded-2xl border border-rule bg-paper shadow-2xl transition-transform duration-500 hover:rotate-x-0 text-left">
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between border-b border-rule bg-surface px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-rose-400" />
                  <span className="size-3 rounded-full bg-amber-400" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-rule bg-paper px-4 py-1 font-mono text-xs text-ink-muted">
                  <span className="text-emerald-700">🔒</span>
                  <span>skillitrix.com/assessment/{ASSESSMENT_SCREENS[activeSlide].id}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide(
                        (prev) => (prev - 1 + ASSESSMENT_SCREENS.length) % ASSESSMENT_SCREENS.length
                      )
                    }
                    className="flex size-7 items-center justify-center rounded-md border border-rule bg-white text-xs font-bold text-ink-muted hover:bg-surface"
                    aria-label="Previous assessment screen"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((prev) => (prev + 1) % ASSESSMENT_SCREENS.length)
                    }
                    className="flex size-7 items-center justify-center rounded-md border border-rule bg-white text-xs font-bold text-ink-muted hover:bg-surface"
                    aria-label="Next assessment screen"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Screen Content */}
              <div className="relative w-full aspect-video min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-[#0C0E14] overflow-hidden transition-all duration-300">
                <Image
                  src={ASSESSMENT_SCREENS[activeSlide].image}
                  alt={ASSESSMENT_SCREENS[activeSlide].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover object-top select-none"
                  priority={activeSlide === 0}
                />
              </div>

              {/* Carousel Progress & Footer Indicator */}
              <div className="flex flex-wrap items-center justify-between border-t border-rule bg-white px-4 py-2.5 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-ink">{ASSESSMENT_SCREENS[activeSlide].title}</span>
                  <span className="hidden sm:inline text-ink-muted">— {ASSESSMENT_SCREENS[activeSlide].description}</span>
                </div>
                <div className="flex items-center ml-auto">
                  {ASSESSMENT_SCREENS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className="p-2 -mr-1 last:mr-0 group flex items-center justify-center"
                      aria-label={`Jump to assessment screen ${idx + 1}`}
                    >
                      <span
                        className={`h-1.5 rounded-full transition-all duration-200 ${
                          activeSlide === idx
                            ? "w-6 bg-brand"
                            : "w-1.5 bg-rule group-hover:bg-rule-strong"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Skillitrix demo video"
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
