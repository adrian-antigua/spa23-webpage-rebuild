import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PullQuote } from "@/components/ui/PullQuote";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Spa 23 Fitness & Lifestyle",
  description:
    "Family-owned for over 45 years in Pompton Plains, NJ. The story of Spa 23 Fitness & Lifestyle.",
};

const team = [
  {
    name: "Cary Adler",
    role: "Owner",
  },
  {
    name: "Joe Pedatella",
    role: "Owner",
  },
  {
    name: "Lionel Mootoo",
    role: "Health & Wellness Director",
    bio: "Tier 3 Health Coach, ACE Certified PT, ACE Certified Nutrition Specialist, MBA",
  },
  {
    name: "Ricky Russell",
    role: "Group Fitness Director",
    bio: "Tier 2 Health Coach, AFAA Certified Trainer, 9 MOSSA certifications, directs BEYOGA & Gravity",
  },
  {
    name: "Jenna Tulino",
    role: "Member Services Director",
  },
  {
    name: "Dan Hardaker",
    role: "Health Coach (Tier 1)",
    bio: "NASM Certified Personal Trainer, FMS Certified",
  },
  {
    name: "Will Karwatske",
    role: "Health Coach (Tier 1)",
    bio: "NASM Certified PT, BS Exercise Science",
  },
  {
    name: "Stephanie Jobe",
    role: "Health Coach (Tier 1)",
    bio: "ISSA Certified",
  },
  {
    name: "Lou Soto",
    role: "Health Coach (Tier 1)",
    bio: "NASM Certified, Athletes Acceleration Certified, Stick Mobility Specialist",
  },
  {
    name: "Jane Rondin",
    role: "Health Coach (Tier 3)",
    bio: "ACE Certified, FMS Certified, ACE Fitness Nutrition Specialist, Precision Nutrition",
  },
  {
    name: "Joanna Hofbauer",
    role: "Youth Strength & Conditioning Specialist",
    bio: "Also handles Children's Parties",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0">
          <Image
            src="/spa23/hero-exterior.webp"
            alt="Spa 23 exterior at dusk with illuminated sign"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">About Us</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            Family-owned for over 45 years. Dedicated to helping everyone live healthier
            &amp; happier lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <ImageTextSection
        eyebrow="Since 1980"
        heading="The Club for Your Whole Life"
        body="For over 45 years, Spa 23 has been a cornerstone of the Pompton Plains community. What started as a health and racquet club on Route 23 has grown into a full-service fitness and lifestyle destination — pool, spa, yoga studio, CrossFit box, swim academy, kids camp, juice bar, and 80+ weekly classes. Through it all, we've remained family-owned, community-focused, and dedicated to helping everyone who walks through our doors live a healthier, happier life."
        imageSrc="/spa23/front-desk.webp"
        imageAlt="Spa 23 front desk with logo wall"
        imagePosition="right"
      />

      {/* Values */}
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Our Values</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              More Than a Gym
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Family First",
                desc: "We're family-owned, and we treat our members like family. From KidZone to senior programs, there's something for every generation.",
              },
              {
                title: "Community Driven",
                desc: "Members call us their 'home away from home.' We foster real connections — between members, trainers, and staff — that go beyond reps and sets.",
              },
              {
                title: "Superior Service",
                desc: "5-star service in everything we do. Our staff knows your name, your goals, and how to help you get there.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-warm-white p-8">
                <h3 className="font-serif text-2xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-dark">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <PullQuote
        quote="I have been training with Matt for just over two years now, and my experience has been nothing short of amazing. From the start, Matt has been incredibly supportive and tailors each session to my fitness goals. Not only have I seen improvements in my strength and endurance, but improvements in my mental health as well."
        name="Danielle L."
        memberSince="2021"
      />

      {/* Team */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Our Team</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              The People Behind Spa 23
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              Our certified trainers, coaches, and staff are the heart of what makes Spa 23 special.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="border border-charcoal/10 bg-warm-white p-6">
                <div className="flex h-16 w-16 items-center justify-center bg-cream-dark font-serif text-2xl font-semibold text-teal">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal">{member.role}</p>
                {member.bio && (
                  <p className="mt-2 text-xs leading-relaxed text-slate">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peak Performance */}
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">On-Site Partner</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Peak Performance Chiropractic
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              Located within Spa 23, Dr. John M. Liaci has been providing chiropractic care for over
              35 years — at our facility since 1994. Specializing in back &amp; neck pain, headaches,
              sciatica, disc conditions, TMJ, and sports injuries. 200+ 5-star Google reviews.
            </p>
            <p className="mt-4 text-base font-medium text-navy">
              973-831-1000
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
