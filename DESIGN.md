# Intervu AI — Design System

A marketing site for an AI interview-preparation product. The visual language
is deliberately restrained: one brand accent used with intent, a real
typographic hierarchy, and elevation that means something — not a generic
purple/gradient SaaS template.

All tokens live in `src/app/globals.css` under `@theme`. Nothing in a
component should introduce a color, radius or shadow that isn't one of these
tokens.

---

## 1. Position & tone

Confident and outcome-driven, not hyped. The product's credibility comes from
real hiring rubrics and a scored report — the design should read the same
way: precise, a little clinical, not decorated. Sans-serif throughout (Inter
for text, Plus Jakarta Sans for headings), white ground, one purple accent
used only where it means "this is the primary action" or "this is the
brand."

## 2. Color

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#FFFFFF` | Page background |
| `--color-surface` | `#F7F7F9` | Recessed sections, panels, table heads |
| `--color-sunk` | `#F0F1F4` | Deeper recess (rare) |
| `--color-ink` | `#14161F` | Headings, primary text |
| `--color-ink-muted` | `#43475A` | Body copy |
| `--color-ink-soft` | `#6B7086` | Secondary text, metadata |
| `--color-ink-faint` | `#9A9EB0` | Placeholder, disabled, footnotes |
| `--color-rule` | `#E3E4EA` | Default border |
| `--color-rule-strong` | `#C7C9D4` | Emphasis border (input hover, dividers) |
| `--color-brand` | `#6D28D9` | Links, focus rings, the one primary button per view |
| `--color-brand-hover` | `#5B21B6` | Brand hover state |
| `--color-brand-tint` | `#F4F0FC` | Rarely-used brand background wash |
| `--color-positive` / `-tint` | `#15803D` / `#EBF6EF` | Success, "included," proof points |
| `--color-caution` / `-tint` | `#A85B00` / `#FBF0DE` | Weak-area flags |
| `--color-critical` / `-tint` | `#B42318` / `#FBEAE8` | Form errors |

**Rule:** the brand purple fills at most one control per screen (the primary
CTA). Everywhere else it's text, a border, or a small tint — never a
gradient, never a glow.

## 3. Typography

Inter (`--font-sans`) for body and UI, Plus Jakarta Sans (`--font-heading`)
for headings, loaded via `next/font/google` in `app/layout.tsx`. A tabular
monospace stack (`--font-mono`, system UI mono — no webfont) is used only for
figures: prices, percentages, step numbers, table stats — via the `.figure`
utility class.

| Token | Size | Weight | Used for |
|---|---|---|---|
| `text-hero` | 44–64px | 600 | Hero H1, page-header H1 |
| `text-display` | 34–48px | 600 | Section H2 |
| `text-title` | 26–34px | 600 | Subsection H2/H3 |
| `text-head` | 20–24px | 600 | Card-level H3 |
| `text-body` | 16px | 400 | Paragraph copy |
| `text-micro` | 12px | 600, uppercase, tracked | Eyebrows, labels (`.eyebrow` utility) |

Headings are never both maximally bold and maximally large at once — weight
tops out at 600 (semibold), never 700+/black. Hierarchy comes from the
combination of size, weight and color (ink vs. ink-soft), not decoration.

## 4. Components

- **Buttons** (`components/ui/Button.tsx`) — rectangular controls (`rounded-md`,
  10px), not pills. `primary` (solid brand fill, one per view), `secondary`
  (outlined), `quiet` (ghost, for a paired secondary action like "watch demo"),
  `link` (underlined text), `danger`. No gradients, no glow shadow, no
  translateY hover lift — hover is a flat color change only. External CTAs
  that aren't Next `Link`/`button` use `ButtonAnchor` or `buttonClass()` so
  every call-to-action on the site shares one source of styling.
- **Badge** (`components/ui/Badge.tsx`) — small pill, the one place `rounded-full`
  is correct (a true tag/status chip). Five tones tied to the signal tokens.
- **Cards / panels** — `rounded-lg` (14px), a single `border-rule`, no shadow
  unless the panel is genuinely floating above content (see Elevation). Not
  every group of information is a card: the coverage/company grid and the
  about-page stats use a shared-border grid (`border-t border-l` on the
  container, `border-r border-b` per cell) instead of individual boxed cards.
- **Forms** (`Field`, `Input`, `Select`, `Textarea`) — `rounded-sm` (6px)
  controls, `border-rule` default, `border-brand` + `ring-brand/15` on focus,
  `border-critical` on error. Labels are `text-ink`, hints `text-ink-soft`.
- **Table** (`components/ui/Table.tsx`) — hairline row rules, a `bg-surface`
  header band, no per-row cards.
- **Icons** (`components/ui/icons.tsx`) — one in-house set, 16px grid, 1.5px
  stroke, round caps. No icon library dependency. A glyph is added only when
  it distinguishes a real product concept (the six Features-section icons
  each map to a distinct capability).

## 5. Layout

- `Container` is the only place a page sets `max-w-*` — `88rem` default, `46rem`
  for prose-width text.
- Section vertical rhythm: `py-16` mobile / `py-24` desktop, set once in
  `Section`. Section boundaries are a `border-t` rule, not a background-color
  change — sections alternate `bg-paper` / `bg-surface` sparingly, only where
  it helps group content (e.g. "How it works" sits on `surface` between two
  `paper` sections).

## 6. Elevation

Two levels, no color tint:

- `--shadow-sm` — barely-there card definition (rarely needed; a border
  usually does the job instead).
- `--shadow-raised` — for things that actually float: the header once
  scrolled, the mobile nav drawer, the video lightbox.

Nothing else carries a shadow. No `shadow-purple-500/30`-style tinted glow.

## 7. Motion

`--ease-standard` for all transitions. Hover/focus are color and border
transitions only (150ms) — no scale, no translate, no blur. The header
hides on scroll-down and reveals on scroll-up (a functional pattern, not
decoration). `prefers-reduced-motion: reduce` disables `scroll-behavior:
smooth` and clamps all animation/transition durations site-wide.

One deliberate scroll-linked moment: the `.parallax-drift` utility (bottom
of `globals.css`), applied to the Hero product screenshot. It's a native CSS
scroll-driven animation (`animation-timeline: view()`) — a few percent of
translateY over the element's time in the viewport, no scroll listener, no
JS, no layout thrash. Gated behind `@supports`, so browsers without the
feature just render it static (a deliberate fallback, not a bug), and
explicitly disabled under `prefers-reduced-motion`. This is the only
scroll-linked effect on the site — it's tied to real content (the actual
product screenshot), not a decorative shape, and should stay that way if
more scroll motion is ever considered.

## 8. Do's and don'ts

**Do**
1. Reference every color/radius/shadow through a token or the `.eyebrow` /
   `.figure` utilities — no arbitrary hex in a component.
2. Keep one primary (filled) button per view; everything else is secondary,
   quiet or a text link.
3. Use `rounded-sm` for controls, `rounded-md` for buttons, `rounded-lg` for
   panels, `rounded-full` only for true pills (badges, avatars, status dots).
4. Let borders do section and card separation; reach for a shadow only when
   something is genuinely elevated above the page.
5. Size icons and stroke weight consistently from `icons.tsx` — never mix in
   an emoji or a differently-stroked inline SVG.

**Don't**
1. No gradients on text, buttons or backgrounds.
2. No glow / colored shadows (`shadow-purple-500/*` and friends).
3. No hover-lift (`translateY`) on cards that aren't links.
4. No pill-shaped buttons — pills are for tags only.
5. No "ambient mesh" background glows or dot-matrix textures behind content.
6. No backdrop-blur "glassmorphism" panels.
7. No decorative background photography with color filters that don't
   communicate product information (product screenshots are the exception —
   they earn their place).
8. No uppercase-tracked button labels ("START PRACTICING") — sentence case.

## 9. Responsive

Two breakpoints matter most: the `sm` (640px) collapse of multi-column grids
to one column, and the `lg` (1024px) point where the header switches from
the mobile drawer to inline navigation and the pricing table switches from
a stacked `<dl>` to the full comparison table. Touch targets are ≥44px
(buttons, the mobile nav toggle, table row links). No layout scrolls
horizontally except the (rare) wide table, which scrolls in its own
container.
