import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DemoForm } from "@/components/ui/DemoForm";
import { PullQuote } from "@/components/ui/PullQuote";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership — Spa 23 Fitness & Lifestyle",
  description:
    "Membership options to fit every need. No long-term commitment, 1-week money-back guarantee, convenient monthly billing.",
};

const tiers = [
  {
    name: "Silver",
    description: "Entry-level membership",
    features: [
      "Unlimited use of weight room, cardio floor, and fitness centers",
      "Olympic-style swimming pool access",
      "Locker rooms with steam room and sauna",
      "Cafe access",
      "5 FREE sessions with a Certified Personal Trainer",
      "5 FREE Success Meetings with Member Services",
    ],
  },
  {
    name: "Premier",
    highlight: true,
    description: "Everything in Silver, plus:",
    features: [
      "Unlimited weekly Group Exercise classes (80+)",
      "Unlimited BeYoga classes",
      "Unlimited CrossFit classes",
      "30-minute monthly massage at Pure Massage",
      "Unlimited ATHLETE30 training sessions",
    ],
  },
  {
    name: "ONYX",
    description: "Everything in Premier, plus:",
    features: [
      "Exclusive access to Lounge Twenty Three",
      "One 60-minute massage each month at Pure Massage",
      "8 personal training sessions upon joining",
      "One monthly nutrition session with a wellness coach",
    ],
  },
];

const youthTiers = [
  {
    name: "Youth Silver",
    age: "Ages 11–17",
    features: [
      "5 free personal training sessions",
      "Unlimited club use including pool",
    ],
  },
  {
    name: "Youth Premier",
    age: "Ages 11–17",
    features: [
      "All Youth Silver benefits",
      "Unlimited Group Fitness, CrossFit, and BeYoga",
    ],
  },
];

const faqs = [
  {
    q: "Is there a long-term commitment?",
    a: "No. We offer convenient monthly billing with no long-term contracts.",
  },
  {
    q: "What if I change my mind?",
    a: "We offer a 1-week money-back guarantee on all memberships.",
  },
  {
    q: "Can I try the club before joining?",
    a: "Yes! We offer a free one-week trial so you can experience everything Spa 23 has to offer.",
  },
  {
    q: "Is childcare included?",
    a: "KidZone is available as an add-on: $30/month for one child, $50/month for two or more. Non-members are welcome for an additional fee.",
  },
  {
    q: "Do you offer massage-only memberships?",
    a: "Yes. Our Pure Massage Membership is $89.99/month and includes one 60-minute Swedish massage every month, plus a new-member welcome package.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0">
          <Image
            src="/spa23/hero-pool.webp"
            alt="Indoor pool with lap lanes and blue lighting"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">Membership</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            Add Years to Your Life
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            Membership options to fit every need. No long-term commitment.
            1-week money-back guarantee. Convenient monthly billing.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Choose Your Membership</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Three Tiers, One Club
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col border p-8 ${
                  tier.highlight
                    ? "border-teal bg-teal/5 ring-2 ring-teal"
                    : "border-charcoal/10 bg-warm-white"
                }`}
              >
                {tier.highlight && (
                  <span className="mb-4 inline-block self-start bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-widest text-warm-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-3xl font-semibold text-navy">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-slate">{tier.description}</p>
                <p className="mt-4 font-serif text-2xl font-semibold text-navy">
                  [TBD]
                  <span className="text-base font-normal text-slate">
                    /month
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-dark">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-8 w-full" variant={tier.highlight ? "solid" : "outline"}>
                  Start Your Free Week
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Memberships */}
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Youth Memberships</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              For Ages 11–17
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-2xl gap-8 md:grid-cols-2">
            {youthTiers.map((tier) => (
              <div key={tier.name} className="border border-charcoal/10 bg-warm-white p-8">
                <h3 className="font-serif text-2xl font-semibold text-navy">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate">{tier.age}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-dark">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Add-Ons</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Customize Your Experience
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl gap-8 md:grid-cols-2">
            <div className="border border-charcoal/10 bg-warm-white p-8">
              <h3 className="font-serif text-2xl font-semibold text-navy">Pure Massage Membership</h3>
              <p className="mt-2 font-serif text-2xl font-semibold text-teal">$89.99<span className="text-base font-normal text-slate">/month</span></p>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                One 60-minute Swedish massage every month. New-member welcome package includes a free 60-minute massage,
                free stretch therapy sessions, and free personal training sessions.
              </p>
            </div>
            <div className="border border-charcoal/10 bg-warm-white p-8">
              <h3 className="font-serif text-2xl font-semibold text-navy">KidZone</h3>
              <p className="mt-2 font-serif text-2xl font-semibold text-teal">$30<span className="text-base font-normal text-slate">/month</span></p>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                In-club childcare for ages 6 months to 10 years. $50/month for two or more children.
                Non-members welcome for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">Limited Time Offer</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-warm-white md:text-5xl">
            Join Now &amp; Get Your First Month Free
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/70">
            Plus a complimentary onboarding package valued at over $400: 5 Personal Training Sessions,
            1 Complimentary Massage, and 1 Complimentary Assisted Stretch Session.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              Claim Your Free Week
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">FAQ</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <dl className="mx-auto mt-14 max-w-3xl divide-y divide-charcoal/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="text-lg font-semibold text-navy">{faq.q}</dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-dark">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <div>
            <Eyebrow className="mb-4 block">Free Trial</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Try Spa 23 for Free
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              Experience everything we have to offer — pool, classes, spa, and more — with a
              complimentary one-week trial. No obligation.
            </p>
          </div>
          <div className="bg-warm-white p-8">
            <h3 className="font-serif text-2xl font-semibold text-navy">Request Your Free Week</h3>
            <DemoForm className="mt-6">
              <input type="text" placeholder="Full Name" className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              <input type="tel" placeholder="Phone" className="w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm focus:border-teal focus:outline-none" />
              <Button type="submit" className="w-full">
                Start My Free Week
              </Button>
            </DemoForm>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
