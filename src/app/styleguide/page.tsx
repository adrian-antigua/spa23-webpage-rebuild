import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PullQuote } from "@/components/ui/PullQuote";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StyleguideClient } from "./StyleguideClient";

const COLORS = [
  { name: "navy", hex: "#1B2433" },
  { name: "navy-light", hex: "#2A3545" },
  { name: "charcoal", hex: "#2E3138" },
  { name: "cream", hex: "#FAF7F2" },
  { name: "cream-dark", hex: "#F0EBE3" },
  { name: "warm-white", hex: "#FDFCFA" },
  { name: "teal", hex: "#2A7C8A" },
  { name: "teal-dark", hex: "#1E5F6A" },
  { name: "teal-muted", hex: "#E8F4F6" },
  { name: "slate", hex: "#6B7280" },
  { name: "slate-dark", hex: "#4B5563" },
];

const PLACEHOLDER = "/placeholder.svg";

export default function StyleguidePage() {
  return (
    <>
      <Nav />

      <main className="pt-20">
        {/* 1. Colors */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
            <SectionHeading eyebrow="Design System" heading="Color Palette" align="left" />
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {COLORS.map((c) => (
                <div key={c.name}>
                  <div
                    className="aspect-square rounded border border-charcoal/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-2 text-sm font-medium text-navy">{c.name}</p>
                  <p className="text-xs text-slate">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Typography */}
        <section className="bg-cream-dark py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
            <SectionHeading eyebrow="Typography" heading="Type Scale" align="left" />
            <div className="mt-10 space-y-8">
              <div>
                <Eyebrow>Eyebrow Label</Eyebrow>
                <p className="mt-1 text-xs text-slate">
                  12px / uppercase / tracking 0.2em / DM Sans semibold / teal
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed">
                  Body text at 16px with 1.6 line-height. DM Sans regular weight. Used for
                  paragraphs and general content throughout the site.
                </p>
                <p className="mt-1 text-xs text-slate">16px / 1.6 line-height / DM Sans</p>
              </div>
              <div>
                <p className="text-lg leading-relaxed">
                  Large body text at 18px. Used for introductory paragraphs and
                  emphasized content blocks.
                </p>
                <p className="mt-1 text-xs text-slate">18px / 1.6 line-height / DM Sans</p>
              </div>
              <div>
                <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
                  Section Heading
                </h2>
                <p className="mt-1 text-xs text-slate">
                  36px mobile / 48px desktop / Cormorant Garamond semibold
                </p>
              </div>
              <div>
                <h1 className="font-serif text-5xl font-semibold leading-tight text-navy md:text-6xl">
                  Hero Heading
                </h1>
                <p className="mt-1 text-xs text-slate">
                  48px mobile / 60px desktop / Cormorant Garamond semibold
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-10: Client components with interactivity */}
        <StyleguideClient placeholderSrc={PLACEHOLDER} />

        {/* 7. Pull Quote */}
        <PullQuote
          quote="Spa 23 is my home away from home. The staff truly cares about every member,
          and the facilities keep getting better year after year."
          name="Sarah M."
          memberSince="2019"
        />

        {/* 8. Video Embed */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
            <SectionHeading
              eyebrow="Video"
              heading="Video Embed"
              body="Embedded YouTube player using the facility tour video."
              align="left"
            />
            <div className="mt-10 max-w-3xl">
              <VideoEmbed videoId="dQw4w9WgXcQ" title="Facility Tour" />
            </div>
          </div>
        </section>

        {/* Card samples (server-rendered) */}
        <section className="bg-cream-dark py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
            <SectionHeading eyebrow="Cards" heading="Card Components" align="left" />
            <div className="mt-10 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
              {["Pool & Swim Academy", "BEYOGA Studio", "CrossFit Box", "Pure Massage", "Group Fitness"].map(
                (label, i) => (
                  <Card
                    key={label}
                    imageSrc={PLACEHOLDER}
                    imageAlt={`[Photo: ${label}]`}
                    label={label}
                    description="Experience world-class facilities and expert instruction."
                  />
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
