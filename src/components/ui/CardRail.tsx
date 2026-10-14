"use client";

import { cn } from "@/lib/cn";
import { SectionHeading } from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type CardRailProps = {
  eyebrow?: string;
  heading?: string;
  children: React.ReactNode;
  className?: string;
};

export function CardRail({ eyebrow, heading, children, className }: CardRailProps) {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className={cn("py-16 md:py-24 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        {heading && (
          <SectionHeading eyebrow={eyebrow} heading={heading} className="mb-10" />
        )}
      </div>
      <div className="scrollbar-hide flex gap-5 overflow-x-auto px-5 snap-x snap-mandatory md:px-8 lg:px-16">
        {children}
      </div>
    </section>
  );
}
