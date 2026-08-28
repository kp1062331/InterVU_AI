"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Close, Menu } from "@/components/ui/icons";
import { buttonClass } from "@/components/ui/Button";
import { Wordmark } from "./Wordmark";

const navigation = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Blogs", href: "/blogs" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

function isCurrent(href: string, pathname: string) {
  if (href.startsWith("/#")) {
    return false;
  }
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        "fixed top-0 inset-x-0 z-50 font-sans transition-all duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-rule/80 shadow-xs"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 sm:h-20 w-full max-w-8xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-brand"
          aria-label={`${siteConfig.name} — home`}
        >
          <Wordmark imgClassName="h-9 sm:h-11.5" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          <ul className="flex items-center gap-9 text-sm font-medium">
            {navigation.map((item) => {
              const current = isCurrent(item.href, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "relative inline-flex items-center py-2 text-sm font-medium transition-colors duration-150",
                      "after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:rounded-full after:bg-brand after:transition-transform after:duration-200 after:ease-out",
                      current
                        ? "font-semibold text-ink after:scale-x-100"
                        : "text-ink-soft hover:text-ink after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Contact sales
          </Link>
          <a
            href="https://intervu-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ size: "sm" })}
          >
            Start practicing
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          className="flex items-center rounded-sm p-2 text-ink lg:hidden"
        >
          {menuOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="site-menu"
          className="border-t border-rule bg-paper shadow-raised lg:hidden"
        >
          <nav aria-label="Primary mobile" className="px-5 py-4">
            <ul className="divide-y divide-rule text-sm font-medium">
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
                          current ? "text-brand" : "text-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                },
              )}
            </ul>

            <a
              href="https://intervu-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonClass({ size: "lg" }), "mt-4 w-full")}
            >
              Start practicing
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
