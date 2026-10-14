import Link from "next/link";
import { CONTACT, HOURS, SOCIAL_LINKS, FOOTER_NAV } from "@/lib/constants";

function SocialIcon({ label }: { label: string }) {
  if (label === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  return null;
}

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-warm-white/80 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-4 lg:gap-8 lg:px-16">
        {/* Column 1: Logo + contact */}
        <div className="lg:col-span-1">
          <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-warm-white">
            SPA 23
          </Link>
          <address className="mt-6 not-italic text-sm leading-relaxed">
            <p>{CONTACT.address}</p>
            <p className="mt-2">
              <a href={`tel:${CONTACT.phone}`} className="hover:text-warm-white transition-colors">
                {CONTACT.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-warm-white transition-colors">
                {CONTACT.email}
              </a>
            </p>
          </address>
          <div className="mt-6 flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-warm-white/60 transition-colors hover:text-warm-white"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {FOOTER_NAV.map((col) => (
          <div key={col.heading}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-warm-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Hours */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white">
            Hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-warm-white/60">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-warm-white/10 px-5 pt-6 md:px-8 lg:px-16">
        <p className="text-xs text-warm-white/40">
          &copy; 2026 {CONTACT.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
