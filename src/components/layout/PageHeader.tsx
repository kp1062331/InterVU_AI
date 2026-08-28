import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  meta?: ReactNode;
}

export function PageHeader({ eyebrow, title, lede, meta }: PageHeaderProps) {
  return (
    <div className="border-b border-rule bg-surface font-sans">
      <Container className="pt-28 pb-12 sm:pt-32 sm:pb-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-hero text-ink tracking-tight">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft">
            {lede}
          </p>
        )}
        {meta && <p className="mt-4 text-xs font-medium text-ink-faint">{meta}</p>}
      </Container>
    </div>
  );
}
