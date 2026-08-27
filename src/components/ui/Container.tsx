import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  /** `text` narrows to a comfortable reading measure for prose-led pages. */
  width?: "default" | "text";
  className?: string;
}

/**
 * The single place page gutters and the maximum content width are defined.
 * Nothing else in the app should set `max-w-*` on a page-level wrapper.
 */
export function Container({
  children,
  width = "default",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        width === "text" ? "max-w-[46rem]" : "max-w-8xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
