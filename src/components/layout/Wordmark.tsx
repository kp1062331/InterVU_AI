import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-sans", className)}>
      <span
        className={cn(
          "text-xl sm:text-2xl font-extrabold tracking-tight",
          light ? "text-white" : "text-[#0B1E3D]"
        )}
      >
        InterVu<span className="text-purple-600">.</span>
      </span>
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm",
          light
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/30"
            : "bg-purple-600 text-white shadow-purple-500/20"
        )}
      >
        AI
      </span>
    </span>
  );
}
