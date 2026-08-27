import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="relative z-20 bg-slate-50 text-slate-800 border-t border-slate-200/80 pt-16 pb-12 font-sans overflow-hidden">
      <Container className="w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-200/80">
          
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center pr-4">
            <Link href="/" className="group inline-block mb-4" aria-label="InterVu AI — Home">
              <Wordmark light={false} />
            </Link>
            <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-sm">
              InterVu AI is the AI-powered interview preparation platform built to help candidates land their dream job. Practice realistic mock interviews evaluated on company-specific hiring rubrics.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-purple-600">
              <span>🇺🇸 US</span>
              <span className="text-slate-300">•</span>
              <span>🇬🇧 UK</span>
              <span className="text-slate-300">•</span>
              <span>🇮🇳 IN</span>
            </div>
          </div>

          {/* Column 2: PRODUCT (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-3">
              PRODUCT
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/#features" className="hover:text-purple-600 transition-colors">AI Voice Coach</Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-purple-600 transition-colors">Hiring Rubrics</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/#coverage" className="hover:text-purple-600 transition-colors">Score Analytics</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-600 transition-colors">Pricing Plans</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ASSESSMENTS (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-3">
              ASSESSMENTS
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              {["Software Engineering", "System Design", "Behavioral STAR", "Product Management", "TCS & Infosys", "Stripe & Tech"].map((item) => (
                <li key={item}>
                  <Link href="/pricing" className="hover:text-purple-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: RESOURCES (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-3">
              RESOURCES
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">Preparation Guides</Link></li>
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">Interview Rubrics</Link></li>
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">Candidate Stories</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Help &amp; FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5: COMPANY (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-3">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@intervu.ai" className="hover:text-purple-600 transition-colors">Careers</a></li>
              <li className="pt-1"><Link href="/privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Social & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} <span className="text-purple-600 font-bold">InterVu AI</span>. All rights reserved. Land your dream job with confidence.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/intervuai"
              target="_blank"
              rel="noreferrer noopener"
              className="size-9 rounded-full bg-white hover:bg-purple-600 text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center transition-colors shadow-sm"
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
              className="size-9 rounded-full bg-white hover:bg-purple-600 text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center transition-colors shadow-sm"
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
