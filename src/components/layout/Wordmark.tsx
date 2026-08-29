import Image from "next/image";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  imgClassName,
  light = false,
}: {
  className?: string;
  imgClassName?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src="/images/skillitrix-logo.png"
        alt="SkillitriX"
        width={240}
        height={65}
        className={cn(
          "h-9 sm:h-11.5 w-auto object-contain transition-opacity hover:opacity-90",
          imgClassName,
          light && "brightness-0 invert"
        )}
        priority
      />
    </span>
  );
}
