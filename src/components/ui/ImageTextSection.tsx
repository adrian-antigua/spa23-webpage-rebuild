"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ImageTextSectionProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  cta?: { label: string; href: string };
  className?: string;
};

export function ImageTextSection({
  eyebrow,
  heading,
  body,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  cta,
  className,
}: ImageTextSectionProps) {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className={cn("py-16 md:py-24 lg:py-32", className)}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <div
          className={cn(
            imagePosition === "right" && "lg:order-2"
          )}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          {eyebrow && <Eyebrow className="mb-4 block">{eyebrow}</Eyebrow>}
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-dark">
            {body}
          </p>
          {cta && (
            <Button variant="text" href={cta.href} className="mt-6">
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
