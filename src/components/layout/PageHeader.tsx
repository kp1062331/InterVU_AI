import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  meta?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  meta,
  imageSrc,
  imageAlt = "",
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-rule bg-surface font-sans">
      {imageSrc && (
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center lg:object-right"
            priority
          />
          {/* Left fade gradient overlay blending into section background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent lg:from-surface lg:via-surface/85 lg:to-transparent"
            aria-hidden="true"
          />
        </div>
      )}
      <Container className="relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16">
        <ScrollReveal className="flex flex-col items-start lg:w-3/5 lg:pr-10">
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
        </ScrollReveal>
      </Container>
    </div>
  );
}
