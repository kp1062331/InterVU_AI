"use client";

import { useEffect, useState } from "react";
import { Close } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

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
    id: "coding",
    tabLabel: "MNC Coding & Compiler",
    badge: "Live IDE Round",
    title: "MNC-Grade Automated Coding Assessment",
    description: "Multi-language online compiler with test case runner, time complexity checker, and instant algorithmic score.",
    screen: (
      <div className="bg-[#0D1117] text-white p-4 sm:p-6 font-mono text-xs sm:text-sm">
        {/* Test Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 pb-3 font-sans">
          <div className="flex items-center gap-2">
            <span className="rounded bg-brand/20 px-2 py-0.5 text-xs font-semibold text-brand-tint border border-brand/40">
              Problem #2 of 3 • Hard
            </span>
            <span className="font-semibold text-white">Dynamic Cache Invalidation &amp; LRU Subarray</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 border border-amber-500/20">
              <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
              Time Remaining: 38:42
            </span>
            <span className="rounded bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/30">
              C++ 20 (GCC 12)
            </span>
          </div>
        </div>

        {/* Code Editor Body */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Editor Left */}
          <div className="lg:col-span-8 rounded-lg border border-gray-800 bg-[#161B22] p-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-[11px] text-gray-400">
              <span>solution.cpp</span>
              <span className="text-emerald-400">● Auto-Saved (All Changes Synced)</span>
            </div>
            <pre className="mt-3 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-gray-300 font-mono">
              <code>
                <span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;bits/stdc++.h&gt;</span>{"\n"}
                <span className="text-purple-400">using namespace</span> std;{"\n\n"}
                <span className="text-blue-400">class</span> <span className="text-amber-300">LRUCacheOptimizer</span> &#123;{"\n"}
                &nbsp;&nbsp;<span className="text-purple-400">private</span>:{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;unordered_map&lt;<span className="text-blue-400">int</span>, list&lt;pair&lt;<span className="text-blue-400">int</span>, <span className="text-blue-400">int</span>&gt;&gt;::iterator&gt; cacheMap;{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;list&lt;pair&lt;<span className="text-blue-400">int</span>, <span className="text-blue-400">int</span>&gt;&gt; dll;{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">int</span> capacity;{"\n\n"}
                &nbsp;&nbsp;<span className="text-purple-400">public</span>:{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">int</span> <span className="text-amber-300">getOptimalHitRatio</span>(<span className="text-blue-400">vector</span>&lt;<span className="text-blue-400">int</span>&gt;&amp; stream) &#123;{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// O(1) Lookup with Doubly Linked List eviction</span>{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">return</span> evaluateThroughput(stream, capacity);{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;{"\n"}
                &#125;;
              </code>
            </pre>
          </div>

          {/* Test Case Output & AI Complexity Right Pane */}
          <div className="lg:col-span-4 flex flex-col gap-3 font-sans">
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  15 / 15 Test Cases Passed (100%)
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  Accepted
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded bg-black/40 p-2">
                  <p className="text-[10px] text-gray-400">Runtime</p>
                  <p className="font-mono font-bold text-emerald-300">16 ms (Faster than 96%)</p>
                </div>
                <div className="rounded bg-black/40 p-2">
                  <p className="text-[10px] text-gray-400">Memory</p>
                  <p className="font-mono font-bold text-emerald-300">12.8 MB (Optimal)</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-[#161B22] p-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">AI Complexity Advisor</span>
                <span className="text-[10px] text-brand-tint bg-brand/30 px-2 py-0.5 rounded">MNC Graded</span>
              </div>
              <p className="mt-2 text-[11px] text-gray-300 leading-relaxed">
                Time complexity is strictly <strong className="text-emerald-300">O(N)</strong> with zero recursion stack leaks. Optimal for Tier-1 engineering panels (Google / Amazon / TCS Ninja).
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "aptitude",
    tabLabel: "MNC Aptitude & Reasoning",
    badge: "Sectional Qualifier",
    title: "Multi-Section MNC Placement Assessment",
    description: "Authentic multi-stage tests covering Quantitative Aptitude, Logical Reasoning, and Verbal Comprehension.",
    screen: (
      <div className="bg-[#FAFBFD] text-ink p-4 sm:p-6 font-sans">
        {/* Test Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-3">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-brand px-2.5 py-1 text-xs font-bold text-white">
              TCS &amp; Tier-1 MNC Assessment
            </span>
            <span className="text-sm font-semibold text-ink">National Benchmark Qualifier Test</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="size-2 rounded-full bg-emerald-500" />
              AI Proctor Active • Environment Verified
            </span>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="mt-3 flex flex-wrap gap-2 border-b border-rule pb-2">
          <button className="rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
            Section 1: Quantitative Aptitude (25 Qs)
          </button>
          <button className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted hover:bg-rule">
            Section 2: Logical Reasoning (20 Qs)
          </button>
          <button className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted hover:bg-rule">
            Section 3: Verbal Ability (20 Qs)
          </button>
          <button className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted hover:bg-rule">
            Section 4: Technical &amp; Coding (2 Qs)
          </button>
        </div>

        {/* Question Area */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-xl border border-rule bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-ink-soft">
              <span>Question 14 of 25</span>
              <span className="font-semibold text-brand">Marks: +3.0 / -0.75</span>
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
              A train running at 72 km/h crosses a 260m long platform in 23 seconds. If the train increases its speed by 25% while crossing a bridge of length 380m, how much time will it take to completely cross the bridge?
            </p>

            <div className="mt-4 space-y-2">
              {[
                { opt: "A", text: "21.6 seconds", correct: false },
                { opt: "B", text: "23.2 seconds", correct: true },
                { opt: "C", text: "25.0 seconds", correct: false },
                { opt: "D", text: "19.8 seconds", correct: false },
              ].map((item) => (
                <div
                  key={item.opt}
                  className={`flex items-center gap-3 rounded-lg border p-2.5 text-xs sm:text-sm font-medium transition-all ${item.correct
                    ? "border-brand bg-brand/5 text-ink ring-1 ring-brand"
                    : "border-rule bg-surface text-ink-muted hover:border-rule-strong"
                    }`}
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.correct ? "bg-brand text-white" : "bg-white border border-rule text-ink-muted"
                      }`}
                  >
                    {item.opt}
                  </span>
                  <span>{item.text}</span>
                  {item.correct && (
                    <span className="ml-auto text-xs font-semibold text-brand">Selected Choice ✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Palette on Right */}
          <div className="lg:col-span-4 rounded-xl border border-rule bg-white p-4 shadow-sm">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Question Status Palette</h4>
            <div className="mt-3 grid grid-cols-5 gap-1.5">
              {Array.from({ length: 25 }, (_, i) => {
                const num = i + 1;
                let bg = "bg-emerald-600 text-white"; // answered
                if (num === 14) bg = "bg-brand text-white ring-2 ring-brand ring-offset-1";
                else if (num > 18) bg = "bg-gray-100 text-ink-faint"; // unvisited
                else if (num === 8 || num === 12) bg = "bg-amber-500 text-white"; // marked
                return (
                  <div
                    key={num}
                    className={`flex size-8 items-center justify-center rounded-md text-xs font-bold ${bg}`}
                  >
                    {num}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-ink-muted border-t border-rule pt-3">
              <span className="flex items-center gap-1"><span className="size-2.5 rounded bg-emerald-600" /> Answered (16)</span>
              <span className="flex items-center gap-1"><span className="size-2.5 rounded bg-amber-500" /> Review (2)</span>
              <span className="flex items-center gap-1"><span className="size-2.5 rounded bg-gray-200" /> Left (7)</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "interview",
    tabLabel: "AI Voice & Video Interview",
    badge: "Live Audio & Video",
    title: "Real-Time Adaptive Voice & Video Interview",
    description: "Conversational AI interviewer with live audio waveforms, instant speech-to-text transcript, and STAR metrics.",
    screen: (
      <div className="bg-[#10121B] text-white p-4 sm:p-6 font-sans">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-500 animate-ping" />
            <span className="text-sm font-bold text-white">Live AI Technical Interview — Google SDE Standard</span>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/30">
            Session Duration: 18:45 / 45:00
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* AI Interviewer Side */}
          <div className="lg:col-span-6 rounded-xl border border-white/10 bg-[#171926] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand text-white font-bold shadow-lg">
                  AI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Skillitrix Principal Interviewer</h4>
                  <p className="text-[11px] text-white/60">Adaptive Audio Stream Active</p>
                </div>
              </div>

              {/* Dynamic Sound Wave Bars */}
              <div className="my-4 flex items-center justify-center gap-1.5 h-10 bg-black/30 rounded-lg px-4">
                {[40, 70, 90, 60, 30, 80, 100, 75, 45, 95, 65, 35, 85, 55, 90, 40].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-gradient-to-t from-brand to-cyan-400 animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>

              <div className="rounded-lg bg-black/40 p-3 border border-white/5">
                <p className="text-xs text-brand-tint leading-relaxed">
                  <span className="font-bold text-white">Interviewer:</span> &ldquo;Explain how you would prevent cascading failures in a microservices architecture when payment downstream fails.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400" />
              Listening to candidate audio stream...
            </div>
          </div>

          {/* Candidate Feed & Real-Time Metrics */}
          <div className="lg:col-span-6 rounded-xl border border-white/10 bg-[#171926] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Candidate Video Stream</span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  HD 1080p • 60fps
                </span>
              </div>

              {/* Live Real-time Score Radar Bars */}
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>Voice Clarity &amp; Tone</span>
                    <span className="font-bold text-emerald-400">96%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-emerald-400 w-[96%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>STAR Framework Structure</span>
                    <span className="font-bold text-cyan-400">92%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-cyan-400 w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>Pacing &amp; Filler Word Elimination</span>
                    <span className="font-bold text-amber-400">132 wpm (Optimal)</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-amber-400 w-[88%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-black/40 p-2.5 text-[11px] text-white/70 border border-white/5">
              <span className="font-bold text-cyan-300">Live Transcript:</span> &ldquo;...we implement a Circuit Breaker pattern using Resilience4j with exponential backoff and a fallback queue...&rdquo;
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "report",
    tabLabel: "MNC Scorecard & Benchmark",
    badge: "Detailed Analytics",
    title: "Comprehensive MNC Readiness Scorecard",
    description: "In-depth rubric evaluations calibrated against Google, Microsoft, TCS Digital, and Amazon hiring standards.",
    screen: (
      <div className="bg-[#FAFBFD] text-ink p-4 sm:p-6 font-sans">
        {/* Top Banner */}
        <div className="rounded-xl bg-gradient-to-r from-ink via-[#232738] to-brand p-4 text-white shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                ★ Qualified for Tier-1 MNCs
              </span>
              <h3 className="mt-2 text-base sm:text-lg font-bold">Overall Placement Score: 94 / 100</h3>
              <p className="text-xs text-white/80">Rank: Top 1.8% among 68,000+ benchmarked student candidates</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm border border-white/10">
              <span className="text-xs text-white/70">Offer Readiness</span>
              <p className="text-xl font-bold text-emerald-300">HIGH (95%)</p>
            </div>
          </div>
        </div>

        {/* Sectional Breakdown Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Quantitative Aptitude", score: "96%", grade: "Tier-1 Top 1%" },
            { label: "Logical Reasoning", score: "94%", grade: "High Accuracy" },
            { label: "Core Coding (DSA)", score: "98%", grade: "Optimal O(N)" },
            { label: "Verbal & Communication", score: "90%", grade: "Clear & Structured" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-rule bg-white p-3 shadow-sm">
              <span className="text-[11px] font-medium text-ink-muted">{item.label}</span>
              <p className="mt-1 text-lg font-bold text-ink">{item.score}</p>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-1">
                {item.grade}
              </span>
            </div>
          ))}
        </div>

        {/* MNC Clearance Matrix */}
        <div className="mt-4 rounded-xl border border-rule bg-white p-4 shadow-sm">
          <h4 className="text-xs font-bold text-ink uppercase tracking-wider">MNC Profile Clearance Matrix</h4>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { company: "TCS Digital / Ninja", status: "Cleared with Distinction (98%)", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
              { company: "Amazon SDE-1", status: "Assessment Passed (94%)", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
              { company: "Google SDE Level 3", status: "Qualified for Final Panel (92%)", color: "text-brand bg-brand/5 border-brand/20" },
            ].map((c, i) => (
              <div key={i} className={`rounded-lg border p-2.5 text-xs ${c.color}`}>
                <p className="font-bold text-ink">{c.company}</p>
                <p className="mt-0.5 font-medium">{c.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Typewriter effect state
  const [titleText, setTitleText] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  // 1. Hero Title Typewriter Hook
  useEffect(() => {
    const currentTarget = HERO_TITLES[titleIdx];
    const typingSpeed = isDeleting ? 25 : 50;
    const pauseTime = isDeleting ? 400 : 2400;

    if (!isDeleting && titleText === currentTarget) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && titleText === "") {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % HERO_TITLES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTitleText((prev) =>
        isDeleting
          ? currentTarget.substring(0, prev.length - 1)
          : currentTarget.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [titleText, isDeleting, titleIdx]);

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
    <section className="relative overflow-hidden bg-paper pt-28 pb-16 sm:pt-36 sm:pb-24 font-sans" aria-label="Hero">
      {/* Dotted Matrix Background */}
      <div className="hero-circular-dots" aria-hidden="true" />

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
              className={`animate-float-slow absolute ${slot.positionClass} w-44 xl:w-48 h-[200px] xl:h-[210px] rounded-[22px] ${slot.bgColor} p-3.5 shadow-2xl text-left flex flex-col justify-between transition-all duration-500 backdrop-blur-sm ${isEntered && !isExiting
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 -translate-y-4"
                }`}
              style={{ "--card-rotate": slot.rotation } as React.CSSProperties}
            >
              {/* Card Top / Company Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-[#F4F5F8] border border-black/[0.06] shadow-xs">
                    <CompanyIcon type={profile.iconType} />
                  </div>
                  <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide bg-[#F4F5F8] text-ink border border-black/[0.06]">
                    {profile.company}
                  </span>
                </div>
                {/* Purple Top Right Dot */}
                <span className="size-2 rounded-full bg-brand ring-2 ring-brand/20 shadow-[0_0_6px_rgba(109,40,217,0.35)]" />
              </div>

              {/* Card Middle / Benchmark Metric Off-White Box */}
              <div className="rounded-xl bg-[#F7F8FA] p-2 border border-black/[0.06]">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  {profile.packageOrBand}
                </p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[12px] font-bold text-ink">
                    {profile.metric}
                  </span>
                </div>
              </div>

              {/* Card Bottom / Role Details */}
              <div className="pb-0.5">
                <h4 className="text-[13px] font-bold leading-tight text-ink line-clamp-1">
                  {profile.role}
                </h4>
                <p className="mt-1 text-[10.5px] font-medium text-ink-soft leading-snug line-clamp-1">
                  {profile.skills}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* 1. Modern Linear/Vercel-style Shimmer Gradient Glass Capsule */}
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

        {/* 3. Hero Title with Typewriter Effect */}
        <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[120px] flex items-center justify-center">
          <h1 className="max-w-4xl text-hero text-ink tracking-tight text-balance">
            {titleText}
            <span className="inline-block w-1.5 h-8 sm:h-10 ml-1.5 bg-brand animate-pulse align-middle" />
          </h1>
        </div>

        {/* 4. Description Text */}
        <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
          No random practice. No endless PDFs. Just realistic{" "}
          <strong className="font-semibold text-ink">MNC-grade assessments</strong> across
          Aptitude, Reasoning, Verbal, and Coding — built to help you know what to expect and perform better.
        </p>

        {/* Action CTAs */}
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

        {/* 5. Student Assessment Screen Page Carousel */}
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
                  className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${activeSlide === idx ? "bg-brand text-white" : "bg-rule text-ink-soft"
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
              <div className="flex items-center gap-2 rounded-md border border-rule bg-paper px-4 py-1 font-mono text-xs text-ink-faint">
                <span className="text-emerald-500">🔒</span>
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
            <div className="relative w-full min-h-[380px] bg-surface transition-all duration-300">
              {ASSESSMENT_SCREENS[activeSlide].screen}
            </div>

            {/* Carousel Progress & Footer Indicator */}
            <div className="flex flex-wrap items-center justify-between border-t border-rule bg-white px-4 py-2.5 text-xs text-ink-muted">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{ASSESSMENT_SCREENS[activeSlide].title}</span>
                <span className="hidden sm:inline text-ink-soft">— {ASSESSMENT_SCREENS[activeSlide].description}</span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto">
                {ASSESSMENT_SCREENS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${activeSlide === idx ? "w-6 bg-brand" : "w-1.5 bg-rule hover:bg-rule-strong"
                      }`}
                    aria-label={`Jump to assessment screen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
