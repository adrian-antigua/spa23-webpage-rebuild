"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { Button } from "./Button";

type NavProps = {
  transparent?: boolean;
};

export function Nav({ transparent = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const showSolid = !transparent || scrolled;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          showSolid ? "bg-navy/95 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-warm-white">
            SPA 23
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-warm-white/80 transition-colors hover:text-warm-white"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-sm text-warm-white/60">{CONTACT.phone}</span>
            <Button size="sm" href="/contact">
              Free Trial
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-warm-white transition-transform duration-300",
                menuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-warm-white transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-warm-white transition-transform duration-300",
                menuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy transition-opacity duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl font-medium text-warm-white transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-4">
            Free Trial
          </Button>
          <span className="mt-4 text-sm text-warm-white/60">{CONTACT.phone}</span>
        </div>
      </div>
    </>
  );
}
