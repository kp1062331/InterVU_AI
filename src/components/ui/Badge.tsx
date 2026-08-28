import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone =
  | "neutral"
  | "brand"
  | "positive"
  | "caution"
  | "critical";

const tones: Record<BadgeTone, string> = {
  neutral: "border-rule bg-surface text-ink-soft",
  brand: "border-brand/25 bg-brand/8 text-brand",
  positive: "border-positive/20 bg-positive-tint text-positive",
  caution: "border-caution/25 bg-caution-tint text-caution",
  critical: "border-critical/20 bg-critical-tint text-critical",
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
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase font-sans",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
