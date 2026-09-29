# Web Platform Design Concepts

## Goal
Add three complete, clickable web-platform design concepts to the proposal, matching the landing-concept experience while keeping ZHEP’s identity distinct and easy to use.

## What will be built
- Add a “Web platform phase” concepts section beneath the Web feature list.
- Present three directions focused on familiar, high-quality commerce patterns:
  1. **Wellness Marketplace** — fast discovery, search, categories, product cards, cart, and checkout.
  2. **Guided Wellness Store** — goal-led browsing, recommendations, product detail, and simple ordering.
  3. **Member & Partner Hub** — shopping plus wallet, referrals, club progress, orders, and account tools.
- Open every direction in a full-screen, independently scrollable preview.
- Keep an always-visible close control, top return control, and Escape-key support.
- Show the complete promised web scope across the concepts: login, products, ordering, secure payment, wallet, referrals, club tracking, and administration views.
- Use ZHEP’s existing product imagery and brand facts selectively, without filling every section with images.

## Experience
- Familiar marketplace navigation inspired by leading delivery and commerce apps, without copying their branding.
- Clear search, category filters, product discovery, account access, order progress, and direct calls to action.
- Responsive desktop and phone layouts with stable controls and readable content.

## Verification
- Test all three concepts at desktop and phone sizes.
- Verify opening, scrolling, closing, and returning to the proposal.
- Confirm all seven web features are represented and no pricing or currency appears.
- Check the latest build and browser error signals.

## Technical details
- Keep the proposal as one route with internal state.
- Add a dedicated web-concepts presentation module and connect it only to the Web tab.
- Reuse the existing semantic color tokens, image paths, transition patterns, and full-screen preview behavior.
