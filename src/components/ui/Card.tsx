import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  description?: string;
  href?: string;
  className?: string;
};

export function Card({
  imageSrc,
  imageAlt,
  label,
  description,
  href,
  className,
}: CardProps) {
  const content = (
    <div
      className={cn(
        "w-72 flex-shrink-0 snap-start overflow-hidden bg-warm-white",
        href && "group cursor-pointer",
        className
      )}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            href && "group-hover:scale-105"
          )}
          sizes="288px"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-navy">{label}</h3>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-slate">{description}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
