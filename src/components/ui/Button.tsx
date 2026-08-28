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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-semibold rounded-full transition-all duration-200 ease-standard " +
  "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45 cursor-pointer active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#14161F] text-white hover:bg-brand hover:scale-105 hover:shadow-xl shadow-md",
  secondary:
    "border border-rule-strong bg-paper text-ink hover:border-black/30 hover:bg-surface hover:scale-105 hover:shadow-sm",
  quiet: "text-ink-soft hover:bg-sunk hover:text-ink hover:scale-105",
  link: "text-brand underline decoration-brand/30 decoration-1 underline-offset-4 hover:decoration-brand shadow-none rounded-none",
  danger: "bg-critical text-white hover:bg-critical/90 hover:scale-105 shadow-md",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-xs font-semibold",
  md: "h-11 px-6 text-sm font-semibold",
  lg: "h-12 sm:h-13 px-8 text-sm sm:text-base font-semibold",
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

/** For an external `<a>` that should look like a Button — keeps every CTA on one class source. */
export function ButtonAnchor({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return <a className={buttonClass({ variant, size, className })} {...props} />;
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
