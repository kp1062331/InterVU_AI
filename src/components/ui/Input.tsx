import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import {
  FieldShell,
  controlClass,
  describedBy,
  type FieldProps,
} from "./Field";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> &
  Omit<FieldProps, "className"> & { fieldClassName?: string };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
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
      <input
        ref={ref}
        id={id}
        className={controlClass(error, className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy({ id, hint, error })}
        {...props}
      />
    </FieldShell>
  );
});
