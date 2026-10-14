"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const slides = [
  { src: "/spa23/hero-pool.webp", alt: "Indoor pool with lap lanes, blue light, and wood beam ceiling" },
  { src: "/spa23/hero-lounge.webp", alt: "Lounge Twenty Three with sectional seating and warm lighting" },
  { src: "/spa23/hero-beyoga.webp", alt: "BEYOGA reception with marble walls and orchids" },
  { src: "/spa23/hero-studio.webp", alt: "Group fitness studio with hardwood floor and purple lighting" },
  { src: "/spa23/hero-exterior.webp", alt: "Spa 23 exterior at dusk with illuminated sign" },
];

export function HomeHero() {
  const [showScroll, setShowScroll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy">
      {/* Image slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              i === currentIndex ? "opacity-100" : "opacity-0"
            )}
            style={{
              animation: i === currentIndex ? "kenburns 5s ease-out forwards" : "none",
            }}
          />
        ))}
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
        <h1 className="font-serif text-5xl font-semibold uppercase leading-none tracking-wide text-warm-white md:text-6xl lg:text-7xl">
          More Than a Gym
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80 md:text-xl">
          Fitness, spa, pool, and family — all under one roof for over 45 years.
        </p>
        <div className="mt-10">
          <Button href="/contact" size="lg">
            Start Your Free Week
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-opacity duration-500",
          showScroll ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-warm-white/60">
            Scroll
          </span>
          <svg
            className="h-6 w-6 animate-bounce text-warm-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
