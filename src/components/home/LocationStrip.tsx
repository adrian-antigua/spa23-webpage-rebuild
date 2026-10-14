import { CONTACT, HOURS } from "@/lib/constants";

export function LocationStrip() {
  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
        {/* Address & Contact */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Visit Us
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {CONTACT.name}
          </h2>
          <address className="mt-6 not-italic text-lg leading-relaxed text-slate-dark">
            <p>{CONTACT.address}</p>
            <p className="mt-2">
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-teal transition-colors hover:text-teal-dark"
              >
                {CONTACT.phone}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-teal transition-colors hover:text-teal-dark"
              >
                {CONTACT.email}
              </a>
            </p>
          </address>
          <p className="mt-4 text-sm text-slate">
            Minutes from I-287, Rt. 46, I-80, and Rt 3.
          </p>
        </div>

        {/* Hours */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Hours
          </span>
          <ul className="mt-4 space-y-3 text-lg">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-charcoal/10 pb-3">
                <span className="font-medium text-navy">{h.day}</span>
                <span className="text-slate-dark">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
