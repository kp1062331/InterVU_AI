import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  FieldShell,
  controlClass,
  describedBy,
  type FieldProps,
} from "./Field";

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> &
  Omit<FieldProps, "className"> & { fieldClassName?: string };

/**
 * A native select. The chevron is drawn alongside it rather than the control
 * being reimplemented, so keyboard and mobile behaviour stay native.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      id,
      label,
      hint,
      error,
      optional,
      className,
      fieldClassName,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <FieldShell
        id={id}
        label={label}
        hint={hint}
        error={error}
        optional={optional}
        className={fieldClassName}
      >
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={controlClass(
              error,
              cn("appearance-none pr-9", className),
            )}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy({ id, hint, error })}
            {...props}
          >
            {children}
          </select>
          <svg
            viewBox="0 0 12 12"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 text-ink-soft"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" />
          </svg>
        </div>
      </FieldShell>
    );
  },
);
