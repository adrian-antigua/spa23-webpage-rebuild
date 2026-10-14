import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { CardRail } from "@/components/ui/CardRail";
import { Card } from "@/components/ui/Card";
import { PullQuote } from "@/components/ui/PullQuote";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HomeHero } from "@/components/home/HomeHero";
import { LocationStrip } from "@/components/home/LocationStrip";

export default function Home() {
  return (
    <>
      <Nav transparent />

      {/* 1. Video Hero */}
      <HomeHero />

      {/* 2. Intro — 45 years, family-owned */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">45+ Years in Pompton Plains</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Dedicated to Helping Everyone Live Healthier &amp; Happier Lives
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-dark">
              Spa 23 Fitness &amp; Lifestyle is a family-owned multipurpose health club
              on Route 23 in Pompton Plains, NJ — minutes from I-287, Rt. 46, I-80, and
              Rt 3. For over 45 years, we&rsquo;ve been the club for your whole life:
              fitness, spa, pool, and family, all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* 3. "Everything under one roof" CardRail */}
      <section className="bg-cream-dark">
        <CardRail eyebrow="One Club, Everything" heading="Everything Under One Roof">
          <Card
            imageSrc="/spa23/pool-wide.webp"
            imageAlt="Indoor Olympic-style swimming pool with lap lanes"
            label="Indoor Pool"
            description="Olympic-style swimming pool with adjacent hot tub."
          />
          <Card
            imageSrc="/brand/pure-massage-room.png"
            imageAlt="Pure Massage treatment room with warm candlelight"
            label="Pure Massage"
            description="Licensed therapists. Relaxation, recovery, and rejuvenation."
          />
          <Card
            imageSrc="/spa23/yoga-room.webp"
            imageAlt="BEYOGA yoga room with tree mural and bamboo floor"
            label="BEYOGA Studio"
            description="Hatha, Vinyasa Flow, Hot Yoga, and Restore."
          />
          <Card
            imageSrc="/spa23/crossfit.webp"
            imageAlt="CrossFit Pequannock area with racks and Rogue equipment"
            label="CrossFit Pequannock"
            description="Strength and conditioning in our dedicated box."
          />
          <Card
            imageSrc="/spa23/weight-floor.webp"
            imageAlt="Weight training floor with state-of-the-art equipment"
            label="Weight &amp; Cardio"
            description="State-of-the-art equipment with individual TVs."
          />
          <Card
            imageSrc="/spa23/steam-sauna.webp"
            imageAlt="Steam and sauna area with stone tile and glass doors"
            label="Whirlpool &amp; Sauna"
            description="Whirlpool, saunas, and steam rooms."
          />
          <Card
            imageSrc="/brand/lounge-pool-table.jpg"
            imageAlt="Lounge Twenty Three with pool table and bar seating"
            label="Lounge Twenty Three"
            description="Private members-only lounge with pool table and shuffleboard."
          />
          <Card
            imageSrc="/brand/cafe-glass.jpg"
            imageAlt="Spa 23 Cafe with glass wall seating area"
            label="Spa 23 Cafe"
            description="Smoothies, juices, avocado toasts, and more."
          />
        </CardRail>
      </section>

      {/* 4a. Pool & Swim Academy */}
      <ImageTextSection
        eyebrow="Pool & Swim Academy"
        heading="Fins Swim Academy"
        body="Swim lessons for kids and adults in our indoor Olympic-style pool. Our 9-level program teaches all four competitive strokes — Freestyle, Backstroke, Breaststroke, and Butterfly — while children earn brag tags as they progress through each level."
        imageSrc="/spa23/pool-lanes.webp"
        imageAlt="Indoor pool with lap lanes and blue lighting"
        imagePosition="left"
        cta={{ label: "Explore Swim Programs", href: "/programs" }}
      />

      {/* 4b. Spa & Recovery */}
      <ImageTextSection
        eyebrow="Spa & Recovery"
        heading="Pure Massage &amp; Wellness"
        body="Unwind in our on-site Pure Massage studio with licensed, experienced therapists. Choose from our Pure Signature Massage, targeted Pure Focus sessions, or add enhancements. Complete your recovery with our whirlpool, saunas, and steam rooms."
        imageSrc="/spa23/massage-room.webp"
        imageAlt="Massage treatment room with warm candlelight and relaxing ambiance"
        imagePosition="right"
        cta={{ label: "Learn About Pure Massage", href: "/programs" }}
        className="bg-cream-dark"
      />

      {/* 4c. Kids & Family */}
      <ImageTextSection
        eyebrow="Kids & Family"
        heading="Something for Everyone in the Family"
        body="KidZone offers two playrooms for ages 6 months to 10 years, including a jungle-themed room and an 18-foot multi-level soft play system. Camp Spa 23 is our state-certified summer camp for ages 5 to 16. And Fins Swim Academy gives kids the confidence to thrive in the water."
        imageSrc="/spa23/kidzone-jungle.webp"
        imageAlt="KidZone jungle-themed playroom with colorful mural"
        imagePosition="left"
        cta={{ label: "Kids &amp; Family Programs", href: "/programs" }}
      />

      {/* 5. Video Section */}
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-teal-muted font-sans">Wellness Made Doable</span>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-warm-white md:text-5xl">
              Take a Look Inside
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-warm-white/70">
              Quick tips, healthy habits, and real-life inspiration to level up your
              mind + body.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <VideoEmbed
              videoId="cMQzE3umsiI"
              title="Spa 23 Health &amp; Racquet Club Video Tour"
            />
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section>
        <PullQuote
          quote="I joined Spa 23 to get in shape after having my son. I take classes, do cardio, do weight training, and take personal training with Becky. I love the environment and the people are nice and friendly. Spa 23 has helped me become more active and aware of my health."
          name="Aileen E."
          memberSince="2015"
        />
        <PullQuote
          quote="I was 80 pounds overweight when we started working together 3 months ago. Through Lionel's expertise and collaborative teaching, I have lost almost 20 pounds and losing more each week. The biggest surprise through this process is that I am spending about the same amount of time at the gym and not doing that much more 'work'. Since the program is tailored specifically for me, my time working out is more effective causing the weight loss to occur."
          name="Ivan T."
          memberSince="2023"
          className="bg-cream-dark"
        />
      </section>

      {/* 7. Membership CTA Band */}
      <section className="bg-navy py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-teal-muted font-sans">Membership</span>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-warm-white md:text-5xl">
            Add Years to Your Life — and Life to Your Years
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-white/70">
            No long-term commitment. 1-week money-back guarantee. Convenient monthly
            billing. Membership options to fit every need.
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

      {/* 8. Location Strip */}
      <LocationStrip />

      <Footer />
    </>
  );
}
