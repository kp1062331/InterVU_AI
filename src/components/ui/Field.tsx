import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  className?: string;
}

export function hintId(id: string) {
  return `${id}-hint`;
}

export function errorId(id: string) {
  return `${id}-error`;
}

export function describedBy({
  id,
  hint,
  error,
}: Pick<FieldProps, "id" | "hint" | "error">) {
  if (error) return errorId(id);
  return hint ? hintId(id) : undefined;
}

export function controlClass(error?: string, className?: string) {
  return cn(
    "w-full rounded-sm border bg-paper px-3.5 py-2.5 text-sm text-ink font-sans",
    "placeholder:text-ink-faint",
    "transition-colors duration-150 ease-standard",
    "focus:outline-none focus:ring-2",
    "disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-70",
    error
      ? "border-critical focus:border-critical focus:ring-critical/15"
      : "border-rule hover:border-rule-strong focus:border-brand focus:ring-brand/15",
    className,
  );
}

export function FieldShell({
  id,
  label,
  hint,
  error,
  optional,
  className,
  children,
}: FieldProps & { children: ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-1.5 font-sans", className)}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 text-sm font-medium text-ink"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-ink-faint">Optional</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={errorId(id)} className="text-xs font-medium text-critical">
          {error}
        </p>
      ) : (
        hint && (
          <p id={hintId(id)} className="text-xs text-ink-soft">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
