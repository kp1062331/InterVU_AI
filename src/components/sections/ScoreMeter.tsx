import { cn } from "@/lib/utils";

const SCALE = [1, 2, 3, 4, 5] as const;

/**
 * A five-step rubric mark. Segments rather than a bar, because the underlying
 * score is an integer band and a continuous bar would imply precision the
 * rubric does not have. Bands of 2 or below read as a weakness, so the whole
 * mark shifts tone rather than colouring individual steps.
 */
export function ScoreMeter({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const tone = value <= 2 ? "bg-caution" : "bg-brand";

  return (
    <span
      role="img"
      aria-label={label}
      className="flex shrink-0 items-center gap-[3px]"
    >
      {SCALE.map((step) => (
        <span
          key={step}
          className={cn("h-1.5 w-4 rounded-xs", step <= value ? tone : "bg-rule")}
        />
      ))}
    </span>
  );
}
