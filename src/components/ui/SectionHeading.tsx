import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow className="mb-4 block">{eyebrow}</Eyebrow>}
      <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
        {heading}
      </h2>
      {body && (
        <p className="mt-5 text-lg leading-relaxed text-slate-dark">{body}</p>
      )}
    </div>
  );
}
