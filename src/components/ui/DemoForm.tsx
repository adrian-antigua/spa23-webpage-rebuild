"use client";

import { useToast } from "@/components/providers/ToastProvider";
import { cn } from "@/lib/cn";

type DemoFormProps = {
  children: React.ReactNode;
  toastMessage?: string;
  className?: string;
};

export function DemoForm({
  children,
  toastMessage = "Demo mode: this form isn't connected yet.",
  className,
}: DemoFormProps) {
  const { showToast } = useToast();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        showToast(toastMessage);
      }}
      className={cn("space-y-4", className)}
    >
      {children}
    </form>
  );
}
