import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ClassSchedule } from "@/components/classes/ClassSchedule";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes — Spa 23 Fitness & Lifestyle",
  description:
    "80+ free weekly group exercise classes with Premier membership. Yoga, cycling, CrossFit, Group Fight, Group Power, and more.",
};

const categories = [
  {
    name: "Group Exercise",
    classes: ["Group Power", "Group Fight", "Group Core", "Balance & Mobility", "Pilates", "Certergy"],
    image: "/spa23/group-fitness-studio.webp",
    imageAlt: "Group fitness studio with hardwood floor and colored lighting",
    desc: "MOSSA-certified group exercise system. High-energy, music-driven classes for every fitness level.",
  },
  {
    name: "BEYOGA",
    classes: ["Hatha", "Vinyasa Flow", "Hot Yoga", "Restore"],
    image: "/spa23/yoga-room.webp",
    imageAlt: "BEYOGA yoga room with tree mural and bamboo floor",
    desc: "Mind-body practice in our dedicated studio. All ages and abilities welcome, with modifications at every level.",
  },
  {
    name: "Cycling",
    classes: ["Spin", "Group Ride", "R30"],
    image: "/spa23/cycle-house.webp",
    imageAlt: "Cycle House entrance with spin bikes",
    desc: "Ride in our Cycle House — an immersive, dedicated cycling studio with premium spin bikes.",
  },
  {
    name: "CrossFit",
    classes: ["CrossFit WOD", "CrossFit Fundamentals"],
    image: "/spa23/crossfit.webp",
    imageAlt: "CrossFit Pequannock area with racks and equipment",
    desc: "Strength and conditioning in our dedicated CrossFit box. Included with Premier and ONYX memberships.",
  },
  {
    name: "Strength & Conditioning",
    classes: ["ATHLETE30", "Gravity Training", "TRX"],
    image: "/spa23/crossfit-wide.webp",
    imageAlt: "CrossFit and strength training area",
    desc: "Targeted training programs for strength, power, and athletic performance.",
  },
  {
    name: "Aquatics",
    classes: ["Water Fitness", "Lap Swim", "Family Swim"],
    image: "/spa23/pool-wide.webp",
    imageAlt: "Indoor swimming pool wide shot",
    desc: "Pool-based fitness and recreation. Family Swim every Sunday 2:30–3:30 PM.",
  },
];

export default function ClassesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0">
          <Image
            src="/spa23/hero-studio.webp"
            alt="Group fitness studio with purple lighting"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">Classes</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            80+ Weekly Classes
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            From yoga and cycling to CrossFit and Group Power — free with Premier membership.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Class Categories</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Find Your Class
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              We offer group exercise in every format — from high-intensity strength to restorative yoga.
              All classes are included with Premier and ONYX memberships.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat.name} className="overflow-hidden bg-warm-white">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-navy">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-dark">{cat.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.classes.map((c) => (
                      <span
                        key={c}
                        className="bg-cream-dark px-3 py-1 text-xs font-medium text-navy"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Schedule */}
      <ClassSchedule />

      {/* CTA */}
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-warm-white md:text-5xl">
            Unlimited Classes with Premier
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/70">
            Get access to all 80+ weekly classes, BeYoga, CrossFit, and more with your Premier membership.
            Start with a free one-week trial.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/membership" size="lg">
              View Membership Options
            </Button>
            <Button variant="ghost-light" href="/contact" size="lg">
              Start Your Free Week
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
