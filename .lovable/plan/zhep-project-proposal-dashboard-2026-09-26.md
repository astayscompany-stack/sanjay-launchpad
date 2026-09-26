# ZHEP Project Proposal Dashboard

## Goal
Build a responsive, app-like proposal command center for Sanjay with five instant-switching screens and no pricing, payment, or currency content.

## Experience
- Persistent dark sidebar on desktop and compact bottom navigation on mobile.
- Shared header identifying the ZHEP digital project, Sanjay, and a clearly marked freelancer placeholder.
- Client-side screen switching with restrained fade-and-slide motion and no long-page navigation.
- ZHEP-informed language drawn from the provided presentation while excluding all commercial figures.

## Screens
1. **Overview** — four clickable platform tiles, feature counts, and a timeline shortcut.
2. **What We’re Building** — four platform tabs with concise, expandable feature cards and progress indicators.
3. **Timeline** — an interactive metro-style roadmap with six selectable stations, phase details, parallel-build visualization, and the 14–17 week total.
4. **Tech Approach** — plain-language stack cards and one concise rationale.
5. **Next Steps** — connected three-step sequence and freelancer contact placeholders.

## Visual Direction
- Bright neutral workspace against a deep charcoal navigation rail.
- Electric teal as the single action and progress accent, with restrained green supporting signals inspired by ZHEP’s wellness identity.
- Crisp sans-serif typography, compact information hierarchy, outline icons, modest card radii, and soft shadows.
- Responsive layouts sized to avoid page-level scrolling where practical, with local scrolling only when small screens need it.

## Technical Notes
- Implement the experience as one React route with internal view state for instant transitions.
- Use Lucide outline icons and semantic design tokens defined in the global stylesheet.
- Add route-specific metadata and replace template branding.
- Preserve accessibility through labeled controls, visible focus states, reduced-motion handling, and keyboard-operable navigation.
- Verify the result at desktop and mobile viewport sizes, plus check the project diagnostics after implementation.
