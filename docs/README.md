# Docs

This directory contains the main documentation for the dev-portfolio project.

Purpose:

- Project roadmap
- Design decisions
- Architecture notes
- Session closing notes
- Development rules

Rule:
All important decisions must be documented here to maintain consistency across sessions.

## Authority Rule

This directory is secondary.

Primary source of truth:

- AI_ENGINEERING_CONSTITUTION.md
- STYLING_SCOPE_RULES.md
- PROJECT_RULES_AND_ROADMAP.md
- DESIGN_SYSTEM.md

All docs here must follow those rules.

## Component Boundary Rule

- src/components/ui → reusable primitives only
- src/app/home/partials → section-level components only
- No business logic inside UI primitives
- No large data inside sections

## Naming Rule

All section names must reflect personal branding:

- About
- CareerJourney
- Skills
- StandOut

Avoid:

- Services
- Company
- Clients
- Business terms

## Structure Strategy

Current:
src/app/home/partials

Future (optional):
src/components/sections

Migration only allowed during cleanup phase.
