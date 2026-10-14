import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities — Spa 23 Fitness & Lifestyle",
  description:
    "Pool, whirlpool, sauna, steam rooms, weight floor, cardio, turf area, cafe, lounge, and more — all under one roof.",
};

export default function AmenitiesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0">
          <Image
            src="/spa23/hero-lounge.webp"
            alt="Lounge Twenty Three with warm lighting"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">Amenities</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            Everything Under One Roof
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            More than a gym — a complete fitness, wellness, and lifestyle destination.
          </p>
        </div>
      </section>

      {/* Pool */}
      <ImageTextSection
        eyebrow="Aquatics"
        heading="Indoor Olympic-Style Pool"
        body="Our renovated indoor pool features lap lanes for swimmers of all levels, plus an adjacent hot tub for post-workout recovery. Home to Fins Swim Academy, lap swim, family swim, and water fitness classes."
        imageSrc="/spa23/pool-hottub.webp"
        imageAlt="Indoor pool with hot tub and blue lighting"
        imagePosition="left"
        cta={{ label: "Explore Swim Programs", href: "/programs" }}
      />

      {/* Whirlpool & Sauna */}
      <ImageTextSection
        eyebrow="Recovery"
        heading="Whirlpool, Sauna &amp; Steam Rooms"
        body="Relax and recover in our full-service wet area. Our whirlpool, saunas, and steam rooms are included with every membership — the perfect way to unwind after a workout."
        imageSrc="/spa23/steam-sauna.webp"
        imageAlt="Steam and sauna area with stone tile and glass doors"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* Weight Floor */}
      <ImageTextSection
        eyebrow="Strength"
        heading="Weight Training Floor"
        body="State-of-the-art strength training equipment across a spacious, well-maintained floor. From free weights and dumbbells to cable machines and plate-loaded equipment — everything you need for a complete strength program."
        imageSrc="/spa23/weight-floor.webp"
        imageAlt="Weight training floor with equipment"
        imagePosition="left"
        cta={{ label: "Personal Training", href: "/programs" }}
      />

      {/* Cardio */}
      <ImageTextSection
        eyebrow="Cardio"
        heading="Cardiovascular Center"
        body="Rows of Life Fitness and Precor cardio machines — treadmills, ellipticals, and bikes — each equipped with individual TV screens. Our cardio floor overlooks the main fitness area with plenty of natural light."
        imageSrc="/spa23/cardio-ellipticals.webp"
        imageAlt="Cardio floor with rows of ellipticals and treadmills"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* Group Fitness Studio */}
      <ImageTextSection
        eyebrow="Group Fitness"
        heading="Group Exercise Studios"
        body="Our expansive group fitness studio hosts 80+ classes per week — from yoga and cycling to Group Power, Group Fight, and more. Hardwood floors, professional sound, and energizing lighting create an unmatched studio experience."
        imageSrc="/spa23/group-fitness-studio.webp"
        imageAlt="Group fitness studio with hardwood floor and colored lighting"
        imagePosition="left"
        cta={{ label: "View Class Schedule", href: "/classes" }}
      />

      {/* Cycle House */}
      <ImageTextSection
        eyebrow="Cycling"
        heading="Cycle House"
        body="Our dedicated cycling studio features premium spin bikes in an immersive, dimly-lit environment designed to push your limits. Join a class or ride solo — either way, expect an intense cardio experience."
        imageSrc="/spa23/cycle-house.webp"
        imageAlt="Cycle House entrance with spin bikes visible inside"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* Stretch */}
      <ImageTextSection
        eyebrow="Flexibility"
        heading="Stretch at Spa 23"
        body="Our dedicated Stretch area offers personalized stretching routines including PNF techniques. Work with a specialist to improve your flexibility, reduce soreness, and prevent injuries. Appointments required."
        imageSrc="/spa23/stretch-area.webp"
        imageAlt="Stretch at Spa 23 area with treatment tables"
        imagePosition="left"
      />

      {/* Lounge */}
      <ImageTextSection
        eyebrow="Exclusive"
        heading="Lounge Twenty Three"
        body="Our private members-only lounge for ONYX members features comfortable seating, a pool table, shuffleboard, big-screen TV, private lockers, and a refrigerator. The perfect spot to relax before or after your workout."
        imageSrc="/spa23/lounge-pooltable.webp"
        imageAlt="Lounge Twenty Three with pool table and bar seating"
        imagePosition="right"
        className="bg-cream-dark"
        cta={{ label: "ONYX Membership", href: "/membership" }}
      />

      {/* Cafe */}
      <ImageTextSection
        eyebrow="Nutrition"
        heading="Spa 23 Cafe"
        body="Located in the lobby, our Lifestyle Cafe serves smoothies, freshly made juices, avocado toasts, soups, and grab-and-go snacks. Fuel your workout or refuel after — all without leaving the club."
        imageSrc="/spa23/cafe-counter.webp"
        imageAlt="Spa 23 Cafe counter with menu boards and juicer"
        imagePosition="left"
      />

      {/* Locker Rooms */}
      <ImageTextSection
        eyebrow="Facilities"
        heading="Premium Locker Rooms"
        body="Our marble-tiled locker rooms feature spacious lockers, wooden benches, vanity areas with hair dryers and mirrors, and full access to saunas and steam rooms. Everything you need to freshen up in style."
        imageSrc="/spa23/locker-room-wide.webp"
        imageAlt="Spacious locker room with marble tile and wooden benches"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* CTA */}
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-warm-white md:text-5xl">
            Come See It All for Yourself
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/70">
            Try everything Spa 23 has to offer with a free one-week trial. No commitment, no obligation.
          </p>
          <div className="mt-10">
            <Button href="/contact" size="lg">
              Start Your Free Week
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
