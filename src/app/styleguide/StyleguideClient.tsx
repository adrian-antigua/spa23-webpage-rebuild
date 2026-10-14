"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { DemoForm } from "@/components/ui/DemoForm";
import { useToast } from "@/components/providers/ToastProvider";

export function StyleguideClient({ placeholderSrc }: { placeholderSrc: string }) {
  const { showToast } = useToast();

  return (
    <>
      {/* 3. Buttons */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <SectionHeading eyebrow="Components" heading="Buttons" align="left" />
          <div className="mt-10 space-y-8">
            <div>
              <p className="mb-4 text-sm font-medium text-slate">Solid (sm / md / lg)</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-medium text-slate">Outline (sm / md / lg)</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="outline" size="sm">Small</Button>
                <Button variant="outline" size="md">Medium</Button>
                <Button variant="outline" size="lg">Large</Button>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-medium text-slate">Text link</p>
              <Button variant="text">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SectionHeading variants */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Section Heading"
            heading="Left-Aligned Heading"
            body="A supporting paragraph that provides additional context beneath the heading. Two to three sentences max."
            align="left"
          />
          <div className="mt-16" />
          <SectionHeading
            eyebrow="Section Heading"
            heading="Center-Aligned Heading"
            body="A supporting paragraph that provides additional context beneath the heading. Two to three sentences max."
            align="center"
          />
        </div>
      </section>

      {/* 5. ImageTextSection */}
      <ImageTextSection
        eyebrow="Amenities"
        heading="Olympic-Style Indoor Pool"
        body="Dive into our year-round heated pool, perfect for lap swimming, aqua fitness classes, and family fun. Our Fins Swim Academy offers lessons for all ages and skill levels."
        imageSrc={placeholderSrc}
        imageAlt="[Photo: lap swimmer in indoor pool, morning light]"
        imagePosition="left"
        cta={{ label: "Explore the Pool", href: "/amenities" }}
      />

      <ImageTextSection
        eyebrow="Wellness"
        heading="Pure Massage & Recovery"
        body="Unwind with a professional massage in our on-site Pure Massage studio. From deep tissue to relaxation, our licensed therapists help you recover and recharge."
        imageSrc={placeholderSrc}
        imageAlt="[Photo: massage therapy room with warm lighting]"
        imagePosition="right"
        cta={{ label: "Book a Session", href: "/programs" }}
        className="bg-cream-dark"
      />

      {/* 9. Demo Form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Forms"
            heading="Demo Form"
            body="All forms show a toast notification on submit. Nothing is sent."
            align="left"
          />
          <div className="mt-10 max-w-md">
            <DemoForm>
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium text-navy">
                  Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  className="mt-1 block w-full border border-charcoal/20 bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  className="mt-1 block w-full border border-charcoal/20 bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-slate focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  placeholder="you@example.com"
                />
              </div>
              <Button type="submit">Submit</Button>
            </DemoForm>
          </div>
        </div>
      </section>

      {/* 10. Toast trigger */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Feedback"
            heading="Toast Notification"
            body="Click the button to trigger a toast notification that auto-dismisses after 4 seconds."
            align="left"
          />
          <div className="mt-10">
            <Button onClick={() => showToast("This is a sample toast notification.")}>
              Show Toast
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
