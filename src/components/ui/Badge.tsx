import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone =
  | "neutral"
  | "brand"
  | "positive"
  | "caution"
  | "critical";

const tones: Record<BadgeTone, string> = {
  neutral: "border-slate-700/60 bg-[#132C54]/80 text-slate-300",
  brand: "border-purple-500/30 bg-purple-500/15 text-purple-300",
  positive: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
  caution: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  critical: "border-red-500/30 bg-red-500/15 text-red-300",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase font-sans backdrop-blur-sm",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
