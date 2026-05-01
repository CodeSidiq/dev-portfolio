# README_NEXT.md

# Modern Portfolio Landing Page

A production-ready, dark-themed, responsive portfolio landing page built with:

- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Zod
- next/image

---

## 1. Project Purpose

This project is a design-system-driven, UI-focused portfolio website based on a Figma design.

Primary goals:

- pixel-faithful Figma implementation
- clean architecture
- strict separation of concerns
- controlled styling governance
- data-driven rendering
- production-ready structure

This is not a throwaway demo.
This project is intended to be maintainable, predictable, and professional.

---

## 2. Governance Documents

This project is governed by the following documents:

1. `AI_ENGINEERING_CONSTITUTION.md`
2. `STYLING_SCOPE_RULES.md`
3. `PROJECT_RULES_AND_ROADMAP.md`
4. section rule documents
5. `DESIGN_SYSTEM.md`

If conflict occurs, the higher document wins.

---

## 3. Core Engineering Principles

- clean architecture
- centralized content via `constants/`
- reusable UI primitives where reuse is real
- clear folder boundaries
- predictable data flow
- controlled styling discipline
- no architectural shortcuts

Working code alone is not sufficient.

---

## 4. Styling Model

This project follows a scope-based styling model.

### Global styling is reserved for:

- design tokens
- semantic theme values
- base/reset rules
- truly reusable utilities

### Local styling is required for:

- section-specific layout details
- section-specific decorations
- section-specific positioning
- one-off visual composition rules

Additional rules:

- no raw hex values inside TSX
- no uncontrolled inline styles
- arbitrary Tailwind values allowed only under controlled policy
- semantic tokens preferred for color and shared design references

See:

- `STYLING_SCOPE_RULES.md`
- `DESIGN_SYSTEM.md`

---

## 5. Folder Structure

```txt
src/
  app/
  components/
    layout/
    sections/
    ui/
  constants/
  types/
  lib/

public/
  assets/
    icons/
    images/
    projects/
    avatars/
    ornaments/

docs/
```
