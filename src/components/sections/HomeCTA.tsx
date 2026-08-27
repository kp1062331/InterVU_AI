"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HomeCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 font-sans overflow-hidden border-t border-slate-200/80">
      
      {/* ── High-Visibility Light Background Image Layer ─────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/home-cta-bg.jpg"
          alt="InterVu AI CTA Light Background"
          fill
          className="object-cover object-center opacity-25 filter contrast-110 saturate-110"
          priority
        />
        {/* Soft Light Overlay Mask for Clean Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-50/95" />
      </div>

      {/* Ambient Purple Glow Mesh */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle 600px at 50% 50%, rgba(124, 58, 237, 0.12), transparent 70%),
            radial-gradient(circle 400px at 20% 80%, rgba(139, 92, 246, 0.1), transparent 70%)
          `,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow Kicker */}
        <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-purple-600 mb-4 block">
          READY TO PASS YOUR NEXT ASSESSMENT?
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#0B1E3D] tracking-tight leading-tight max-w-4xl mb-6">
          Sit one real round{" "}
          <span className="font-medium bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            before the one that counts.
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl text-pretty mb-10 font-normal">
          The free plan gives you a full scored session with real hiring rubrics. Identify your exact weak areas in under 60 seconds.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple-pill px-10 py-4 text-base uppercase tracking-wider shadow-purple-500/30 cursor-pointer inline-flex items-center gap-3"
          >
            <span>Start Practicing Free</span>
            <span className="text-lg">→</span>
          </a>

          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base uppercase tracking-wider font-medium rounded-full border border-slate-300 bg-white/90 text-slate-800 hover:border-purple-500 hover:text-purple-600 hover:bg-slate-50 transition-all shadow-sm cursor-pointer"
          >
            Explore All Assessments
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 pt-6 border-t border-slate-200/80 w-full max-w-xl">
          <span className="flex items-center gap-2 text-emerald-600">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Free Session Included
          </span>
          <span className="text-slate-300">•</span>
          <span>No Credit Card Required</span>
          <span className="text-slate-300">•</span>
          <span className="text-purple-600 font-bold">51,400+ Sessions Scored</span>
        </div>

      </Container>
    </section>
  );
}
