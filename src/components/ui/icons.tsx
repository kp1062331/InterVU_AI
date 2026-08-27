import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/**
 * A deliberately small in-house icon set: one 16px grid, one 1.5px stroke,
 * round caps and joins. Six glyphs cover the whole site — anything that needs
 * a seventh probably does not need an icon at all.
 */
type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function Icon({ className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-4 shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2.5 8h11M9.5 4l4 4-4 4" />
  </Icon>
);

export const Check = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 8.5 6.25 12 13 4.5" />
  </Icon>
);

export const Dash = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 8h8" />
  </Icon>
);

export const ChevronDown = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3.5 6 8 10.5 12.5 6" />
  </Icon>
);

export const Menu = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
  </Icon>
);

export const Close = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 4l8 8M12 4l-8 8" />
  </Icon>
);

export const Play = (props: IconProps) => (
  <Icon {...props}>
    <polygon points="5 3 13 8 5 13 5 3" fill="currentColor" strokeWidth="0" />
  </Icon>
);

export const ArrowDown = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8 2.5v11M4 9.5l4 4 4-4" />
  </Icon>
);

