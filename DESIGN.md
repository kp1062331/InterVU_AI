# Intervu AI — Huru.ai-Inspired Design System

A modern SaaS interview & assessment platform visual system designed around confidence, clarity, and outcome-driven candidate preparation.

All tokens and utilities are defined in `src/app/globals.css`.

---

## 1. Visual Position & Tone

- **Feel** — Modern, sleek, outcome-driven SaaS platform. Confident, approachable, and empowering ("land your dream job", "AI-powered coach", "practice with confidence").
- **Theme Signature** — Huru.ai-inspired visual system with rich deep navy backgrounds, vibrant cyan highlights, soft blue-to-cyan radial glows, and clean sans-serif typography throughout.
- **Motion Tier** — L2 Smooth micro-animations, subtle card elevation lifts, glowing mesh backdrops, and interactive state changes.

---

## 2. Color Palette

Every value is referenceable via design tokens in `globals.css`:

```css
--color-navy-dark:    #0B1E3D;  /* Main deep navy background */
--color-navy-card:    #132C54;  /* Deep blue card panels */
--color-navy-light:   #1E3A8A;  /* Soft blue accent surface */
--color-navy-well:    #081428;  /* Recessed wells */

--color-cyan-vibrant: #22D3EE;  /* Bright cyan for highlights & CTAs */
--color-cyan-deep:    #06B6D4;  /* Rich cyan accent */
--color-cyan-soft:    #083344;  /* Backdrop tint */

--color-paper:        #0B1E3D;
--color-surface:      #132C54;
--color-sunk:         #081428;

--color-ink:          #FFFFFF;  /* Headings & primary copy */
--color-ink-muted:    #CBD5E1;  /* Slate-300 body copy */
--color-ink-soft:     #94A3B8;  /* Slate-400 metadata */

--color-positive:     #10B981;  /* Success green for stats (+95% improvement) */
--color-caution:      #F59E0B;  /* Warning yellow */
--color-critical:     #EF4444;  /* Error red */
```

---

## 3. Typography

- **Sans-serif throughout** — Inter & Plus Jakarta Sans stack. **No serif fonts!**
- **Hero Headline** — Very large (56–72px), bold (700–800 weight), tight line-height (1.08).
- **Body Copy** — Regular weight, 16–18px, generous line-height (1.65+), gray-navy tone (`#CBD5E1`).
- **Eyebrows / Small Labels** — Uppercase, letter-spaced (`tracking-widest`), small (12–13px), vibrant cyan (`#22D3EE`).
- **Stat Callouts** — Oversized bold numerals (`56px-72px`) paired with small descriptor text and success green badges.

---

## 4. Components & Buttons

- **Primary Buttons** — Full pill (`rounded-full`), solid cyan or gradient fill (`from-cyan-400 to-cyan-500`), navy bold text (`#0B1E3D`), subtle hover lift & cyan glow shadow (`shadow-cyan-500/25`).
- **Secondary Buttons** — Outlined navy pill (`border-cyan-400/40 bg-[#132C54]/60 text-white`), subtle hover glow.
- **Action-Oriented Copy** — "Start Practicing," "Try It Free," "Get Your Score."
- **Cards & Devices** — 3-column card grids, 12–16px rounded corners (`rounded-2xl`), soft drop shadows (`shadow-xl`), minimal line-style icons, embedded device screenshot/mockup in Hero.
- **Trust Badges** — Star rating pill badge (`4.8/5 ⭐⭐⭐⭐⭐`) + success rate pill badge (`+95% Interview Pass Rate`).
- **Region Selector** — Country flag selector in header & footer (`🇺🇸 US`, `🇬🇧 UK`, `🇮🇳 IN`).

---

## 5. Layout & Structure

- **Full-Width Hero** with oversized headline, benefit-first subtext, two CTAs, trust badges, and interactive device mockup.
- **3-Column Feature Grid** with minimal line icons, title, 1-2 line description, and card hover lift.
- **Numbered 3-Step "How It Works" Section** (01 Select Role, 02 Practice Live AI, 03 Get Score Report).
- **Testimonial Row** with candidate avatars, names, role/company, 5-star ratings, and outcome pill badges.
- **High-Impact Home CTA Banner** with radial gradient mesh backdrop and pill CTA.
