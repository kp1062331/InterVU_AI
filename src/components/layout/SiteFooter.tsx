import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";

const columns = [
  {
    title: "Product",
    links: [
      { label: "AI voice coach", href: "/#features" },
      { label: "Hiring rubrics", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Score analytics", href: "/#coverage" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Assessments",
    links: [
      { label: "Software engineering", href: "/pricing" },
      { label: "System design", href: "/pricing" },
      { label: "Behavioral (STAR)", href: "/pricing" },
      { label: "Product management", href: "/pricing" },
      { label: "TCS & Infosys", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Preparation guides", href: "/about" },
      { label: "Interview rubrics", href: "/about" },
      { label: "Candidate stories", href: "/about" },
      { label: "Help & FAQ", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "mailto:jobs@intervu.ai" },
      { label: "Privacy policy", href: "/contact" },
      { label: "Terms of service", href: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-surface font-sans">
      <Container className="pt-14 pb-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pb-10 border-b border-rule sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 lg:pr-6">
            <Link href="/" className="inline-block" aria-label="InterVu AI — home">
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              The AI-powered interview preparation platform, evaluated on
              company-specific hiring rubrics — not generic advice.
            </p>
            <p className="mt-4 text-xs text-ink-faint">
              Available for candidates in the US, UK and India.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} InterVu AI. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/intervuai"
              target="_blank"
              rel="noreferrer noopener"
              className="flex size-8 items-center justify-center rounded-sm text-ink-soft transition-colors hover:text-brand"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/intervuai"
              target="_blank"
              rel="noreferrer noopener"
              className="flex size-8 items-center justify-center rounded-sm text-ink-soft transition-colors hover:text-brand"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
