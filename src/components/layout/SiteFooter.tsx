import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-surface font-sans">
      <Container className="pt-14 pb-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pb-12 border-b border-rule sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr_1fr]">
          {/* Logo & Tagline */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 lg:pr-6">
            <Link href="/" className="inline-block" aria-label="Skillitrix — home">
              <Wordmark imgClassName="h-10 sm:h-13" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              AI-powered assessment preparation platform for students and job seekers.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Calibrated for 2026 MNC Hiring Tests</span>
            </div>
          </div>

          {/* Column 1: PRODUCT */}
          <nav aria-label="Product">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
              PRODUCT
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-ink-soft">
              <li>
                <Link href="/#how-it-works" className="transition-colors hover:text-ink">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#features" className="transition-colors hover:text-ink">
                  Assessment practice
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  AI performance insights
                </Link>
              </li>
              <li>
                <a
                  href="https://intervu-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  Score &amp; analytics
                </a>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-ink">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 2: ASSESSMENTS */}
          <nav aria-label="Assessments">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
              ASSESSMENTS
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-ink-soft">
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  TCS NQT
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  Infosys
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  Cognizant GenC
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  Accenture
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  Capgemini
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="transition-colors hover:text-ink">
                  IBM
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="font-semibold text-brand transition-colors hover:underline">
                  More assessments →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: COMING SOON */}
          <nav aria-label="Coming soon">
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
                COMING SOON
              </h3>
              <span className="rounded-full bg-brand/10 px-2 py-0.2 text-[10px] font-bold text-brand">
                Beta
              </span>
            </div>
            <ul className="mt-3.5 space-y-2.5 text-sm text-ink-soft">
              <li className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-brand" />
                AI Interview Coach
              </li>
              <li className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-brand" />
                Company-wise AI Interviews
              </li>
              <li className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-brand" />
                Company-grade Interview Simulations
              </li>
              <li className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-brand" />
                Personalized Interview Feedback
              </li>
              <li className="pt-1 text-xs italic text-ink-muted">
                New companies &amp; features added regularly
              </li>
            </ul>
          </nav>

          {/* Column 4: COMPANY */}
          <nav aria-label="Company">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink">
              COMPANY
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-ink-soft">
              <li>
                <Link href="/about" className="transition-colors hover:text-ink">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="font-semibold text-brand transition-colors hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-ink">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-ink">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-ink">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom copyright & socials */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Skillitrix. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/skillitrix"
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
              href="https://twitter.com/skillitrix"
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
