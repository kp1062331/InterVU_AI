import type { ReactNode, ThHTMLAttributes, TdHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Table primitives. Rows are rows — not cards — with hairline rules,
 * a sunk header band, and figures aligned on the decimal.
 */

export function Table({
  children,
  caption,
  className,
}: {
  children: ReactNode;
  /** Visually hidden by default; screen readers still get the summary. */
  caption?: string;
  className?: string;
}) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <table
        className={cn(
          "w-full min-w-[36rem] border-collapse text-left text-sm",
          className,
        )}
      >
        {caption && <caption className="sr-only">{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return (
    <thead className="border-y border-rule bg-sunk/60">{children}</thead>
  );
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TR({
  children,
  interactive = false,
  className,
}: {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
}) {
  return (
    <tr
      className={cn(
        "border-b border-rule last:border-b-0",
        interactive && "transition-colors duration-150 hover:bg-sunk/50",
        className,
      )}
    >
      {children}
    </tr>
  );
}

export function TH({
  children,
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement> & { children: ReactNode }) {
  return (
    <th
      scope="col"
      className={cn(
        "px-3 py-2.5 text-micro uppercase text-ink-soft first:pl-0 last:pr-0",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TD({
  children,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement> & { children: ReactNode }) {
  return (
    <td
      className={cn(
        "px-3 py-3.5 align-top text-ink-muted first:pl-0 last:pr-0",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
}
