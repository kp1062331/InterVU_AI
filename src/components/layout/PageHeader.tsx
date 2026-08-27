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
    <div className="border-b border-slate-200/80 bg-slate-50 text-slate-900 font-sans">
      <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-600 block mb-3">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#0B1E3D] tracking-tight max-w-4xl leading-tight">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {lede}
          </p>
        )}
        {meta && (
          <p className="mt-4 text-xs font-semibold text-purple-600">{meta}</p>
        )}
      </Container>
    </div>
  );
}
