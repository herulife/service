# DESIGN.md — Benua Komputer

Design direction for the Benua Komputer site (service laptop Tasikmalaya). This file is
the single source of truth for UI decisions. Read it before changing any frontend file.

## Brand lane
Local, trustworthy, hands-on repair shop. Confident and crafted — not a generic SaaS or
AI-generated landing page. Voice: direct, helpful, in Indonesian, specific to Tasikmalaya.

## Typography
- Display / headings: **Space Grotesk** (technical, characterful, not overused).
- Body / UI: **Manrope** (calm, legible). Avoid Inter/Roboto as default.
- Scale: h1 clamp(2.1rem, 5vw, 3.2rem); h2 clamp(1.5rem, 3vw, 2.1rem); body 1rem/1.7.
- Weights: 500/600 for headings, 400/500 body. No pure-black text — use --ink.

## Color
- --ink:#1C1B19 (warm near-black, text + headings)
- --bg:#F4F1EA (warm paper background)
- --surface:#FFFFFF
- --muted:#6E6A60 (muted text — never on colored backgrounds)
- --border:#E6E1D6
- --accent:#C8553D (terracotta — energy, local, repair)
- --accent-strong:#A8432E (hover)
- --trust:#2F5D50 (deep green — success/trust)
- --warning:#B7791F --error:#C0392B
No purple/blue gradients. Accent used sparingly (CTA, active states, key rules).

## Layout
- Container max 1120px, side padding 24px (20px on mobile).
- Spacing scale (4px base): 4/8/12/16/24/32/48/64/96.
- Grid: 12-col on desktop, fluid stacks on mobile. Intentional asymmetry allowed.
- Radius 10px (cards/buttons), inputs 8px. No excessive rounding.
- One focal point per section.

## Component language
- Cards: 1px --border, no shadow at rest; soft shadow only on hover (translateY -2px).
- Buttons: solid accent (primary), outline ink (secondary). Hover darken + 1px lift.
- Inputs: 1px border, focus ring = accent. Clear <label> always.
- Badges: minimal, one per status, trust green for done.
- No icon-circle tiles above every heading. Use real photos of the shop/work.

## Motion
- Transitions 150–200ms ease-out. No bounce/elastic. Hover lift only.
- Respect `prefers-reduced-motion`. Entrance fades subtle, capped.

## Responsive (must pass)
375 / 390 / 430 (mobile), 768 (tablet), 1024 / 1280 / 1440 (desktop).
No horizontal overflow, no clipped text, nav collapses to a simple menu, tables scroll-x.

## Accessibility
Semantic HTML, visible focus, contrast AA, labelled forms, logical heading order,
keyboard navigable, aria where needed.

## UI states (every key component)
loading · empty · error · success · disabled · hover · focus · active.

## Quality gate
See `.opencode/skills/impeccable/SKILL.md`. DESIGN → IMPLEMENT → AUDIT → FIX → VERIFY.
