import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30 active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-navy to-navy-2 text-white shadow-sm shadow-slate-900/10 hover:shadow-md hover:shadow-slate-900/15",
  secondary:
    "bg-white text-slate-950 ring-1 ring-slate-900/10 shadow-sm shadow-slate-900/5 hover:bg-slate-50 hover:shadow-md hover:shadow-slate-900/10",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}

