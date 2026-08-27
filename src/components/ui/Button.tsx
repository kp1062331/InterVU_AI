import Link from "next/link";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "quiet"
  | "link"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-bold transition-all duration-200 ease-standard " +
  "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45 cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:from-purple-500 hover:to-indigo-500 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "rounded-full border border-purple-500/40 bg-[#132C54]/60 text-white hover:bg-purple-500/15 hover:border-purple-400 hover:text-purple-300 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0",
  quiet:
    "rounded-full text-slate-300 hover:bg-purple-500/10 hover:text-purple-300 active:translate-y-0",
  link:
    "text-purple-600 underline decoration-purple-500/40 decoration-1 underline-offset-4 hover:decoration-purple-600 hover:text-purple-700",
  danger:
    "rounded-full bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600 hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs tracking-wide",
  md: "h-11 px-6 text-sm tracking-wide",
  lg: "h-13 px-8 text-base tracking-wide",
};

export function buttonClass({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    base,
    variants[variant],
    variant !== "link" && sizes[size],
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingLabel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      loadingLabel = "Working...",
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClass({ variant, size, className })}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Spinner />}
        {loading ? loadingLabel : children}
      </button>
    );
  },
);

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClass({ variant, size, className })} {...props} />;
}

function Spinner() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-4 shrink-0 animate-spin"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.25"
      />
      <path
        d="M8 1.5A6.5 6.5 0 0 1 14.5 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
