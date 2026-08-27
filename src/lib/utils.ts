/**
 * Joins class names and drops falsy values. The project has no conditional
 * class conflicts to resolve, so this stays a four-line function rather than
 * a dependency.
 */
export function cn(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}
