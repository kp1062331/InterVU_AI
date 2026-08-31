"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    __skillitrixIntroHasPlayed?: boolean;
  }

}

/**
 * A brief brand intro shown once per browser session, before the home page
 * content underneath. Four phrases cube-rotate through on one axis (a real
 * `perspective` + `rotateX` cube, not a fake slide), then settle on the
 * wordmark and fade away.
 *
 * Skippable (the "Skip intro" control, a click anywhere, or Escape), off
 * entirely under `prefers-reduced-motion`, and it never blocks anything:
 * the real page is already in the DOM underneath. The decorative phrases
 * are `aria-hidden` — a screen reader goes straight to the real content
 * instead of waiting through four seconds of marketing copy — but the
 * skip control itself stays a normal, focusable, labeled button.
 */

const PREFIXES = [
  "Skill UP !",
  "LIT UP !!",
  "Tricks UP !!!",
] as const;

const CUBE_MS = 2800;
const REVEAL_MS = 900;
const EXIT_MS = 400;

type Phase = "idle" | "cube" | "reveal" | "exit" | "done";

export function IntroSplash() {
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introDone = window.__skillitrixIntroHasPlayed === true;
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent);

    if (reduced || introDone || isBot) {
      Promise.resolve().then(() => {
        setPhase("done");
        window.dispatchEvent(new CustomEvent("intro-complete"));
      });
      return;
    }

    Promise.resolve().then(() => setPhase("cube"));
    timers.current.push(setTimeout(() => setPhase("reveal"), CUBE_MS));
    timers.current.push(setTimeout(() => setPhase("exit"), CUBE_MS + REVEAL_MS));
    timers.current.push(
      setTimeout(() => {
        setPhase("done");
        window.__skillitrixIntroHasPlayed = true;
        window.dispatchEvent(new CustomEvent("intro-complete"));
      }, CUBE_MS + REVEAL_MS + EXIT_MS),
    );

    const currentTimers = timers.current;
    return () => {
      currentTimers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (phase === "idle" || phase === "done" || phase === "exit") return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") skip();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [phase]);

  function skip() {
    timers.current.forEach(clearTimeout);
    setPhase("exit");
    setTimeout(() => {
      setPhase("done");
      window.__skillitrixIntroHasPlayed = true;
      window.dispatchEvent(new CustomEvent("intro-complete"));
    }, EXIT_MS);
  }

  if (phase === "idle" || phase === "done") return null;

  return (
    <div
      className={
        "fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0C0E14] font-sans transition-opacity duration-500 ease-standard " +
        (phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100")
      }
      onClick={skip}
    >
      {phase === "cube" && (
        <div
          aria-hidden="true"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6"
          style={{ ["--intro-face-h" as string]: "clamp(3.5rem, 8vw, 5rem)" }}
        >
          {/* Rotating 3D Cube with the changing prefixes */}
          <div className="intro-cube-scene w-60 sm:w-72">
            <div className="intro-cube">
              {PREFIXES.map((prefix, i) => (
                <div
                  key={prefix}
                  className={`intro-face intro-face--${i + 1} justify-center sm:justify-end`}
                >
                  <span className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90 font-sans whitespace-nowrap">
                    {prefix}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider bar */}

        </div>
      )}

      {phase === "reveal" && (
        <div aria-hidden="true" className="intro-reveal flex items-center justify-center gap-3.5 px-6">
          <Image
            src="/images/skillitrix-icon.png"
            alt="SkillitriX"
            width={72}
            height={72}
            className="size-12 sm:size-16 object-contain drop-shadow-[0_0_25px_rgba(99,102,241,0.45)]"
            priority
          />
          <div className="h-10 sm:h-12 w-px bg-white/30" />
          <span className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Skillitri<span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">X</span>
          </span>
        </div>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
      >
        Skip intro
      </button>
    </div>
  );
}
