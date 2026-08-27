"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Close } from "@/components/ui/icons";

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      }
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
    <section
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-white text-slate-900 pt-24 pb-16 sm:pt-32 sm:pb-24 font-sans"
      aria-label="Hero"
    >
      {/* Ambient Purple Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 75% 55% at 50% 15%, rgba(139, 92, 246, 0.15), transparent 70%),
            radial-gradient(circle 500px at 15% 35%, rgba(124, 58, 237, 0.08), transparent 75%),
            radial-gradient(circle 450px at 85% 65%, rgba(99, 102, 241, 0.06), transparent 75%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Dot Matrix */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #0B1E3D 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Hero Stack */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center">

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 text-xs font-semibold text-slate-800 shadow-sm">
            <span className="text-amber-500 font-bold">★★★★★</span>
            <span className="text-slate-900 font-bold">4.8/5</span>
            <span className="text-slate-500">· 12,500+ candidate evaluations</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 shadow-sm">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>+95% Interview Pass Rate</span>
          </div>
        </div>

        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-purple-600 mb-3 block">
          AI-POWERED INTERVIEW COACH &amp; ASSESSMENT PLATFORM
        </span>

        {/* Hero Headline (Medium font weight for refined thickness) */}
        <h1 className="font-medium text-4xl sm:text-6xl lg:text-7xl text-[#0B1E3D] tracking-tight leading-[1.08] max-w-5xl text-balance mb-6">
          Land your dream job with your personal{" "}
          <span className="font-medium bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            AI Interview Coach.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl text-pretty font-normal mb-10">
          Practice company-specific mock interviews, get instant voice feedback, eliminate weak answers, and enter your real assessment with total confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple-pill px-9 py-4 text-sm sm:text-base uppercase tracking-wider shadow-purple-500/30 cursor-pointer inline-flex items-center gap-3"
          >
            <span>Start Practicing Now</span>
            <span className="text-lg">→</span>
          </a>


        </div>

        {/* Browser Device Frame */}
        <div className="w-full max-w-6xl mx-auto relative group">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-500/30 via-violet-400/30 to-indigo-500/20 opacity-50 blur-2xl group-hover:opacity-75 transition-opacity duration-500" />

          <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(11,30,61,0.18)] overflow-hidden text-left">
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100/90 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
                <div className="ml-4 px-4 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-600 hidden sm:flex items-center gap-2">
                  <span className="text-slate-400">https://</span>
                  <span className="font-semibold text-slate-800">intervu.ai/dashboard/operations-control-center</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="size-2 rounded-full bg-purple-600 animate-pulse" />
                <span className="hidden sm:inline-block">Operations Active</span>
              </div>
            </div>

            <div className="relative w-full overflow-hidden bg-slate-50">
              <Image
                src="/images/dashboard-hero.png"
                alt="InterVu AI Operations Control Center Dashboard"
                width={1400}
                height={750}
                className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.008]"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="InterVu AI Demo Video"
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8 bg-[#0B1E3D]/95 backdrop-blur-xl transition-opacity animate-in fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0B1E3D] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-20 flex items-center justify-center size-10 rounded-full bg-[#132C54] hover:bg-purple-600 text-white border border-purple-500/40 transition-colors cursor-pointer"
              aria-label="Close demo video"
            >
              <Close className="size-5" />
            </button>

            <video
              controls
              autoPlay
              className="size-full object-contain bg-[#0B1E3D]"
              src="/video/1.mp4"
            />
          </div>
        </div>
      )}
    </section>
  );
}
