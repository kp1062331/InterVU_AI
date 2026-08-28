import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/**
 * A deliberately small in-house icon set: one 16px grid, one 1.5px stroke,
 * round caps and joins. Every glyph here is used to distinguish an actual
 * product concept somewhere in the UI — this file grows only when a new
 * concept needs telling apart from the others at a glance.
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

/** Voice / live interview */
export const Mic = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8 1.5a2 2 0 0 0-2 2v4.25a2 2 0 0 0 4 0v-4.25a2 2 0 0 0-2-2z" />
    <path d="M4 7.25v.75a4 4 0 0 0 8 0v-.75M8 12v2.5M6 14.5h4" />
  </Icon>
);

/** Rubric / scored checklist */
export const ClipboardCheck = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3.5" y="2.5" width="9" height="12" rx="1.25" />
    <path d="M6 2.5V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5M5.75 8.5l1.5 1.5 2.75-3" />
  </Icon>
);

/** Feedback report */
export const FileText = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 1.75h5.25L12 4.5v9.75a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75V2.5c0-.41.34-.75.75-.75Z" />
    <path d="M9 1.75V4.5h2.75M5.5 8h5M5.5 10.5h5" />
  </Icon>
);

/** Question bank / tracks */
export const Layers = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8 1.75 14 5 8 8.25 2 5Z" />
    <path d="m2 8 6 3.25L14 8M2 11l6 3.25L14 11" />
  </Icon>
);

/** Timed simulation */
export const Clock = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="8" cy="8" r="6.25" />
    <path d="M8 4.75V8l2.5 1.5" />
  </Icon>
);

/** Progress over time */
export const TrendUp = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2 12.5 6.25 8l2.5 2.5L14 5" />
    <path d="M10 5h4v4" />
  </Icon>
);
