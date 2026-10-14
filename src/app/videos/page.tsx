import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos — Spa 23 Fitness & Lifestyle",
  description:
    "Wellness made doable. Quick tips, healthy habits, and real-life inspiration from Spa 23.",
};

export default function VideosPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <Eyebrow className="mb-4 block text-teal-muted">Videos</Eyebrow>
          <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl">
            Wellness Made Doable
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80">
            Quick tips, healthy habits, and real-life inspiration to level up your mind + body.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="bg-navy pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-16">
          <VideoEmbed
            videoId="cMQzE3umsiI"
            title="Spa 23 Health &amp; Racquet Club Video Tour"
          />
          <p className="mt-4 text-center text-sm text-warm-white/60">
            Spa 23 Facility Tour — take a look inside our 45+ year old club
          </p>
        </div>
      </section>

      {/* Channel Link */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">More Videos</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Follow Us on YouTube
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              Subscribe to our channel for workout tips, nutrition advice, member stories,
              and behind-the-scenes looks at life at Spa 23.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="https://www.youtube.com/@spa23fitnessandlifestyle" size="lg">
                Visit Our YouTube Channel
              </Button>
              <Button variant="outline" href="https://www.instagram.com/spa_23" size="lg">
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
