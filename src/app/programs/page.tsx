import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — Spa 23 Fitness & Lifestyle",
  description:
    "Fins Swim Academy, BEYOGA, CrossFit Pequannock, Pure Massage, Camp Spa 23, KidZone, Personal Training, and more.",
};

export default function ProgramsPage() {
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
          <Eyebrow className="mb-4 block text-teal-muted">Programs</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            Something for Everyone
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            From swim lessons to massage therapy — programs for every age and every goal.
          </p>
        </div>
      </section>

      {/* Fins Swim Academy */}
      <ImageTextSection
        eyebrow="Aquatics"
        heading="Fins Swim Academy"
        body="Swim lessons for kids and adults in our indoor Olympic-style pool. Our 9-level program — from Sea Spray (parent/child, ages 6 months–3 years) through Tsunami — teaches all four competitive strokes. Children earn brag tags as they progress through each level."
        imageSrc="/spa23/pool-lanes.webp"
        imageAlt="Indoor pool with lap lanes and blue lighting"
        imagePosition="left"
      />

      {/* BEYOGA */}
      <ImageTextSection
        eyebrow="Mind & Body"
        heading="BEYOGA Studio"
        body="Our dedicated yoga studio offers Hatha, Vinyasa Flow, Hot Yoga, and Restore classes for all ages and abilities. Private sessions, workshops, and meditation also available. Modifications offered for every level."
        imageSrc="/spa23/yoga-room.webp"
        imageAlt="BEYOGA yoga room with tree mural and bamboo floor"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* CrossFit */}
      <ImageTextSection
        eyebrow="Strength & Conditioning"
        heading="CrossFit Pequannock"
        body="Our CrossFit box within Spa 23 features Rogue equipment, pull-up rigs, climbing ropes, and a full range of free weights. Included with Premier and ONYX memberships — strength and conditioning in a supportive community environment."
        imageSrc="/spa23/crossfit.webp"
        imageAlt="CrossFit Pequannock area with racks and Rogue equipment"
        imagePosition="left"
      />

      {/* Pure Massage */}
      <ImageTextSection
        eyebrow="Spa & Wellness"
        heading="Pure Massage"
        body="Our on-site massage spa offers licensed, experienced therapists for relaxation, recovery, and rejuvenation. Choose from our Pure Signature Massage (60 min, $125 / $89.99 member rate), targeted Pure Focus sessions, or add enhancements for scalp, face, hands, feet, and more."
        imageSrc="/spa23/massage-room.webp"
        imageAlt="Massage treatment room with warm candlelight"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* Personal Training */}
      <ImageTextSection
        eyebrow="Training"
        heading="Personal Training &amp; Health Coaching"
        body="Our certified trainers and tiered Health Coaching system provide personalized programs tailored to your goals. Every new membership includes 5 free sessions with a Certified Personal Trainer. Our Health Coaching process: Get to know you, Starting point assessment, Personalized program, Results."
        imageSrc="/spa23/free-weights.webp"
        imageAlt="Free weight rack with dumbbells and exercise balls"
        imagePosition="left"
      />

      {/* KidZone */}
      <ImageTextSection
        eyebrow="Kids & Family"
        heading="KidZone"
        body="In-club childcare for ages 6 months to 10 years. Two playrooms: a jungle-themed room with fitness, music, and hands-on activities, plus an 18-foot multi-level soft play system. CPR & AED certified staff. Day camps available during school breaks."
        imageSrc="/spa23/kidzone-jungle.webp"
        imageAlt="KidZone jungle-themed playroom with colorful mural"
        imagePosition="right"
        className="bg-cream-dark"
      />

      {/* Camp Spa 23 */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/spa23/kidzone-softplay.webp"
              alt="KidZone soft play system with climbing structure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <Eyebrow className="mb-4 block">Summer</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Camp Spa 23
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              State-certified summer camp for ages 5–16. A 10-week program held at PV Park in
              Pompton Plains, 9 AM – 4 PM, Monday to Friday. Activities include sports, swim
              lessons, recreational swimming, nature walks, arts and crafts, group games, and
              weekly themes.
            </p>
            <p className="mt-3 text-sm text-slate">
              Contact: campspa23@spa23.com
            </p>
          </div>
        </div>
      </section>

      {/* Gravity Training & Stretch */}
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">More Programs</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Specialized Training
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Gravity Training",
                desc: "Total body workout using percentage of body weight for resistance. Music-driven, suitable for all levels. 1-on-1 private and partner sessions available.",
                contact: "ricky@spa23.com",
              },
              {
                title: "Stretch Therapy",
                desc: "Personalized stretching routines and PNF techniques. Improve flexibility, reduce soreness, and prevent injuries. Appointment required.",
                contact: "memberservices@spa23.com",
              },
              {
                title: "ATHLETE30",
                desc: "High-intensity 30-minute training sessions included with Premier and ONYX memberships. Efficient, effective workouts that fit any schedule.",
                contact: "memberservices@spa23.com",
              },
              {
                title: "Private Swim Lessons",
                desc: "One-on-one instruction for all ages and skill levels. Semi-private options for friends and family. Starting at $48/session (30 min).",
                contact: "swimschool@spa23.com",
              },
              {
                title: "Adult Swim Programs",
                desc: "Specialized one-on-one lessons from beginners to triathletes. Two or three swimmer group options available. Starting at $48/lesson.",
                contact: "swimschool@spa23.com",
              },
              {
                title: "Children&rsquo;s Parties",
                desc: "Birthday parties available at Spa 23. Contact Joanna Hofbauer to plan your celebration.",
                contact: "parties@spa23.com",
              },
            ].map((p) => (
              <div key={p.title} className="bg-warm-white p-8">
                <h3 className="font-serif text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-dark" dangerouslySetInnerHTML={{ __html: p.desc }} />
                <p className="mt-3 text-xs text-slate">{p.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-warm-white md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/70">
            Try any of our programs with a free one-week trial membership.
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
