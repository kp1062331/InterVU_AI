import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  divided?: boolean;
  className?: string;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  children,
  divided = false,
  className,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        divided && "border-t border-purple-500/10",
        className,
      )}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  lede?: ReactNode;
  aside?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  index,
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
        <p className={cn("flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-purple-600 font-sans", centered && "justify-center")}>
          {index && (
            <span className="font-mono text-purple-500/70" data-figure>
              {index}
            </span>
          )}
          <span aria-hidden="true" className="h-px w-6 bg-purple-500/40" />
          {eyebrow}
        </p>
        <h2
          id={titleId}
          className="mt-3.5 font-sans text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0B1E3D] tracking-tight leading-tight"
        >
          {title}
        </h2>
        {lede && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">{lede}</p>
        )}
      </div>
      {aside && (
        <div className="shrink-0 text-sm text-slate-500 sm:pb-1 sm:text-right">
          {aside}
        </div>
      )}
    </div>
  );
}
