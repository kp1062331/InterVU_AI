"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Close, Menu } from "@/components/ui/icons";
import { Wordmark } from "./Wordmark";

const navigation = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

function isCurrent(href: string, pathname: string) {
  return href.startsWith("/#") ? pathname === "/" : pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollYRef = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = prevScrollYRef.current;
      const scrollDifference = currentScrollY - prevScrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY <= 30) {
        setVisible(true);
      } else if (!menuOpen) {
        if (scrollDifference > 8 && currentScrollY > 80) {
          setVisible(false);
        } else if (scrollDifference < -8) {
          setVisible(true);
        }
      }

      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const close = useCallback((returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen, close]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 transform font-sans",
        visible ? "translate-y-0" : "-translate-y-full",
        "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 sm:h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label={`${siteConfig.name} — home`}
        >
          <Wordmark light={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center lg:flex gap-8">
          <ul className="flex items-center gap-7 text-sm font-semibold">
            {navigation.map((item) => {
              const current = isCurrent(item.href, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "transition-colors duration-150 py-2 inline-flex items-center gap-1",
                      current
                        ? "text-purple-600 font-bold"
                        : "text-slate-700 hover:text-purple-600"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Secondary Contact Link */}
          <Link
            href="/contact"
            className="text-xs font-semibold px-3 py-2 text-slate-700 hover:text-purple-600 transition-colors"
          >
            Contact Sales
          </Link>

          {/* Primary Purple Pill CTA */}
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple-pill px-6 py-2.5 text-xs sm:text-sm uppercase tracking-wide inline-flex items-center justify-center cursor-pointer"
          >
            Start Practicing
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          className="flex items-center rounded-lg p-2 lg:hidden text-slate-800 hover:text-purple-600 transition-colors"
        >
          {menuOpen ? <Close className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          ref={panelRef}
          id="site-menu"
          className="border-t border-slate-200 bg-white/98 backdrop-blur-xl text-slate-900 shadow-2xl lg:hidden"
        >
          <nav aria-label="Primary Mobile" className="px-6 py-6 space-y-4">
            <ul className="divide-y divide-slate-100 text-sm font-semibold">
              {[...navigation, { label: "Contact", href: "/contact" }].map(
                (item) => {
                  const current = isCurrent(item.href, pathname);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center justify-between py-2",
                          current ? "text-purple-600 font-bold" : "text-slate-800"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://intervu-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple-pill w-full text-center py-3 text-sm font-bold uppercase tracking-wider block"
              >
                Start Practicing
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
