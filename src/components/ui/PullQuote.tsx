import { cn } from "@/lib/cn";

type PullQuoteProps = {
  quote: string;
  name: string;
  memberSince?: string;
  className?: string;
};

export function PullQuote({ quote, name, memberSince, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        "bg-teal-muted px-8 py-16 md:px-16 md:py-20 lg:px-24",
        className
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="block font-serif text-6xl leading-none text-teal select-none" aria-hidden>
          &ldquo;
        </span>
        <p className="mt-2 font-serif text-2xl font-medium italic leading-relaxed text-navy md:text-3xl">
          {quote}
        </p>
        <footer className="mt-8">
          <cite className="not-italic">
            <span className="block text-base font-semibold text-navy">{name}</span>
            {memberSince && (
              <span className="block mt-1 text-sm text-slate">
                Member since {memberSince}
              </span>
            )}
          </cite>
        </footer>
      </div>
    </blockquote>
  );
}
