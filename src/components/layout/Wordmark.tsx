import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1 font-sans", className)}>
      <span
        className={cn(
          "text-lg sm:text-xl font-bold tracking-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        InterVu
      </span>
      <span className={cn("text-lg sm:text-xl font-bold text-brand")}>AI</span>
    </span>
  );
}
