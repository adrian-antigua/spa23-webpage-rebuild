import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DemoForm } from "@/components/ui/DemoForm";
import { CONTACT, HOURS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Spa 23 Fitness & Lifestyle",
  description:
    "Get in touch with Spa 23 Fitness & Lifestyle in Pompton Plains, NJ. Free trial, membership info, and more.",
};

const departments = [
  { name: "General", email: "spa23@spa23.com", phone: "973-839-8823" },
  { name: "Member Services", email: "memberservices@spa23.com", phone: "973-839-8823" },
  { name: "Pure Massage", email: "pure@spa23.com" },
  { name: "BEYOGA / Group Fitness", email: "ricky@spa23.com" },
  { name: "Health & Wellness", email: "lionel@spa23.com" },
  { name: "Swim School / Aquatics", email: "SwimSchool@spa23.com", phone: "973-839-8823 opt. #3" },
  { name: "Camp Spa 23", email: "campspa23@spa23.com" },
  { name: "KidZone / Parties", email: "parties@spa23.com", phone: "973-839-8823 ext. 5" },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">Contact</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            Questions about membership, programs, or scheduling? We&rsquo;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
          {/* Form */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy">Send Us a Message</h2>
            <DemoForm className="mt-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none"
              />
              <select className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm text-slate-dark focus:border-teal focus:outline-none">
                <option value="">I&rsquo;m interested in...</option>
                <option>Membership Information</option>
                <option>Free One-Week Trial</option>
                <option>Personal Training</option>
                <option>Swim Lessons</option>
                <option>Pure Massage</option>
                <option>BEYOGA</option>
                <option>CrossFit</option>
                <option>Camp Spa 23</option>
                <option>KidZone</option>
                <option>Children&rsquo;s Parties</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none"
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </DemoForm>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy">Visit Us</h2>
            <address className="mt-6 not-italic text-lg leading-relaxed text-slate-dark">
              <p className="font-medium text-navy">{CONTACT.name}</p>
              <p className="mt-2">{CONTACT.address}</p>
              <p className="mt-2">
                <a href={`tel:${CONTACT.phone}`} className="text-teal transition-colors hover:text-teal-dark">
                  {CONTACT.phone}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${CONTACT.email}`} className="text-teal transition-colors hover:text-teal-dark">
                  {CONTACT.email}
                </a>
              </p>
            </address>
            <p className="mt-4 text-sm text-slate">
              Minutes from I-287, Rt. 46, I-80, and Rt 3.
            </p>

            {/* Hours */}
            <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-teal">Hours</h3>
            <ul className="mt-4 space-y-2">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-charcoal/10 pb-2 text-sm">
                  <span className="font-medium text-navy">{h.day}</span>
                  <span className="text-slate-dark">{h.hours}</span>
                </li>
              ))}
            </ul>

            {/* Map placeholder */}
            <div className="mt-10 flex aspect-video items-center justify-center bg-cream-dark">
              <p className="text-sm text-slate">[Map: 381 Route 23 South, Pompton Plains, NJ 07444]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Form */}
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-4 block">Free Trial</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Request Your Free Week
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              Experience everything Spa 23 has to offer with a complimentary one-week guest pass.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-lg bg-warm-white p-8">
            <DemoForm>
              <input type="text" placeholder="Full Name" className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              <Button type="submit" className="w-full">
                Request Free Week
              </Button>
            </DemoForm>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Departments</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Contact by Department
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {departments.map((dept) => (
              <div key={dept.name} className="border border-charcoal/10 bg-warm-white p-5">
                <h3 className="font-semibold text-navy">{dept.name}</h3>
                <p className="mt-1 text-sm text-teal">
                  <a href={`mailto:${dept.email}`} className="hover:text-teal-dark transition-colors">
                    {dept.email}
                  </a>
                </p>
                {dept.phone && (
                  <p className="mt-0.5 text-xs text-slate">{dept.phone}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
