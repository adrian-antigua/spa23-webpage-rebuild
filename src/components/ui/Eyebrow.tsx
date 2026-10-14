import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.2em] text-teal font-sans",
        className
      )}
    >
      {children}
    </span>
  );
}
