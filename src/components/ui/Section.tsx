import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  divided?: boolean;
  tone?: "paper" | "surface";
  className?: string;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  children,
  divided = false,
  tone = "paper",
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24",
        tone === "surface" ? "bg-surface" : "bg-paper",
        divided && "border-t border-rule",
        className,
      )}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  lede?: ReactNode;
  aside?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  lede,
  aside,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        centered && "text-center sm:text-center sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2
          id={titleId}
          className={cn("text-display text-ink tracking-tight", eyebrow && "mt-3")}
        >
          {title}
        </h2>
        {lede && (
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">{lede}</p>
        )}
      </div>
      {aside && (
        <div className="shrink-0 text-sm text-ink-soft sm:pb-1 sm:text-right">
          {aside}
        </div>
      )}
    </div>
  );
}
