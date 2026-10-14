"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost-light" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantStyles = {
  solid:
    "bg-teal text-warm-white hover:bg-teal-dark transition-colors",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-warm-white transition-colors",
  "ghost-light":
    "border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy transition-colors",
  text: "text-teal hover:text-teal-dark underline underline-offset-4 transition-colors",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

export function Button({
  variant = "solid",
  size = "md",
  href,
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase font-sans",
    variantStyles[variant],
    variant !== "text" && sizeStyles[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
