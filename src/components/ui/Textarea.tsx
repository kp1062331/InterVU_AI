import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import {
  FieldShell,
  controlClass,
  describedBy,
  type FieldProps,
} from "./Field";

type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> &
  Omit<FieldProps, "className"> & { fieldClassName?: string };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { id, label, hint, error, optional, className, fieldClassName, ...props },
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
        <textarea
          ref={ref}
          id={id}
          className={controlClass(error, `resize-y min-h-32 ${className ?? ""}`)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy({ id, hint, error })}
          {...props}
        />
      </FieldShell>
    );
  },
);
