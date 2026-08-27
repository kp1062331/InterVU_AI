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
    "w-full rounded-xl border bg-[#132C54] px-4 py-3 text-sm text-white font-sans",
    "placeholder:text-slate-400",
    "transition-all duration-150 ease-standard",
    "focus:outline-none focus:ring-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-purple-500/30 hover:border-purple-400/60 focus:border-purple-500 focus:ring-purple-500/20",
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
        className="flex items-baseline justify-between gap-3 text-sm font-semibold text-slate-200"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-slate-400">Optional</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={errorId(id)} className="text-xs text-red-400 font-medium">
          {error}
        </p>
      ) : (
        hint && (
          <p id={hintId(id)} className="text-xs text-slate-400">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
