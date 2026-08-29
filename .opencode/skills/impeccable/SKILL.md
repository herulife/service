---
name: impeccable
description: UI/UX design reviewer and anti-AI-slop quality gate for frontend work. Use before shipping any UI change. Enforces specificity over decoration, intentionality over trend, hierarchy over symmetry, product design over Dribbble aesthetics.
---

# Impeccable — Design Quality Gate

Apply this gate on every frontend change in this project. The goal is output that
looks designed by a human product designer, never like an AI template.

## Workflow
DESIGN → IMPLEMENT → AUDIT → FIX → VERIFY. Do not code before understanding the
existing UI and the design direction in DESIGN.md.

## Anti-slop rules (hard bans)
- No generic purple/blue gradients, no gradient text by default.
- No glassmorphism for its own sake, no excessive rounded cards, no heavy shadows.
- No Inter/Roboto as default without reason. No pure black (#000) or pure gray text — always tint.
- No gray text on colored backgrounds (contrast + legibility).
- No icon-circle/tile above every heading. No decorative blobs.
- No 3-card feature grid as the default reflex. No dashboard-that-looks-like-SaaS-template.
- No cards-inside-cards-inside-cards. No meaningless whitespace.
- No bounce/elastic easing. Motion must be purposeful (<=200ms, ease-out).
- No generic AI copy ("Empowering your journey…"). Write for the actual user.

## Commands (run mentally / explicitly)
audit (a11y, responsive, perf) · critique (hierarchy, clarity) · polish (final pass)
layout (spacing, rhythm) · typeset (font + scale) · colorize (strategic color)
harden (error/empty/loading states, overflow) · distill (strip to essence)

## Quality bar — must all pass before "done"
Build OK · no runtime/console errors · responsive (375/390/430/768/1024/1280/1440)
· mobile + desktop checked · a11y checked (semantic, labels, focus, contrast)
· loading/empty/error states present · UI hierarchy clear · typography/spacing consistent
· design identity clear · does NOT look like a template.
