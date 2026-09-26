# ZHEP Project Hub

Build an interactive, app-like project proposal dashboard for a freelance CTO pitching a 

digital project to a client named "Sanjay." This must NOT be a single long scrolling page — 

it should feel like navigating a clean internal tool/app, with tab-based or card-based 

navigation where clicking reveals content. No pricing or cost mentioned anywhere.



CONCEPT

Think of this like a "project command center" — client lands on an overview screen with 

big clickable cards, and each card opens into its own detailed view (like opening an app 

screen or flipping to a new page), not scrolling further down. Use smooth transitions 

(slide/fade) between views so it feels alive and modern, not like a static brochure.



OVERALL LAYOUT

- Persistent left sidebar (or top tab bar on mobile) with 5 nav items, each with an icon:

  1. Overview

  2. What We're Building

  3. Timeline

  4. Tech Approach

  5. Next Steps

- Clicking a nav item swaps the main content area with a smooth transition — no page scroll 

  jumps, everything fits/adjusts within the viewport per section

- Persistent header: small logo/title "ZHEP Digital Project — Prepared for Sanjay" + 

  freelancer name placeholder



DESIGN STYLE

- Modern SaaS dashboard aesthetic — think Linear, Notion, or Stripe's product pages

- Dark sidebar, light or dark main content area (pick one and stay consistent)

- One accent color (electric blue or teal) used for active states, progress indicators, CTAs

- Rounded cards with soft shadows, generous padding, clear hierarchy

- Icons throughout (use a clean icon set — outline style)

- Micro-animations on hover/click (card lift, subtle scale, color shift)



SCREEN 1 — OVERVIEW

- Large heading: "Your Digital Platform, Mapped Out"

- Subtext: one or two lines explaining this is the full plan — what's being built and when

- 4 large clickable tiles in a grid (2x2), each representing a deliverable:

  - Landing Page 🌐

  - Web Platform 💻

  - Android App 🤖

  - iOS App 🍎

- Each tile shows a one-line description and a small "X features" counter

- Clicking a tile jumps to that platform's detail view within "What We're Building"

- Bottom of screen: a slim horizontal progress-style banner: "Estimated Timeline: 14-17 weeks" 

  with a "View Timeline →" link



SCREEN 2 — WHAT WE'RE BUILDING

- Top: 4 pill/tab buttons (Landing Page | Web Platform | Android | iOS) to switch between views

- Selected platform shows its features as a clean checklist-style card grid (not paragraphs):

  

  LANDING PAGE tab shows cards like:

  - "Brand Story & Product Showcase"

  - "Health Awareness Content"

  - "Partnership Program Explainer"

  - "Contact & Enquiry Forms"

  

  WEB PLATFORM tab shows cards like:

  - "User Login & Registration"

  - "E-Wallet System"

  - "Product Catalog & Ordering"

  - "Referral Network Dashboard"

  - "Club Tier & Bonus Tracker"

  - "Admin Panel"

  

  ANDROID / iOS tabs show cards like:

  - "Full Feature Parity with Web"

  - "Push Notifications"

  - "Biometric Login"

  - "Offline Browsing" (Android) / "Face ID Login" (iOS)

  

- Each feature card: icon + short title + 1-line description, flip or expand slightly on 

  hover to reveal a bit more detail

- Small progress dots at top showing "1 of 4 platforms" style navigation feel



SCREEN 3 — TIMELINE (make this the most visually impressive screen)

- Interactive horizontal roadmap — NOT a plain list. Style it like a game-board path or 

  a train-track/metro-line diagram with stations

- 6 stations/nodes along a connected line, left to right (or top to bottom on mobile):

  1. Discovery & Design — 2 weeks

  2. Landing Page Build — 2 weeks

  3. Web Platform Build — 3-4 weeks

  4. Mobile App Build (Android + iOS) — 5-6 weeks

  5. Testing & QA — 2 weeks

  6. Launch — 1-2 weeks

- Each node is clickable — clicking expands a small card/tooltip above or below showing 

  what happens in that phase (2-3 bullet points)

- Visually indicate that Phase 3 and Phase 4 overlap/run in parallel (e.g. a small bracket 

  or "runs alongside" connector between those two nodes)

- Big total banner below or above: "Total Estimated Delivery: 14-17 Weeks"

- No cost or pricing anywhere on this screen



SCREEN 4 — TECH APPROACH

- Simple card row (4-5 cards) showing stack choices in plain language, icon + label only:

  - "Web: React / Next.js"

  - "Mobile: Cross-platform build (single codebase, Android + iOS)"

  - "Backend: Node.js API"

  - "Database: PostgreSQL / Firebase"

  - "Hosting: Cloud (AWS/Vercel)"

- One short sentence under the cards: why this approach = faster delivery, easier to maintain, 

  scalable as the business grows



SCREEN 5 — NEXT STEPS

- 3-step visual (not a list — use connected circles/cards): 

  1. Confirm Scope 

  2. Kickoff Discovery Phase 

  3. Weekly Progress Check-ins

- Clean closing statement, freelancer name/contact placeholder

- No forms requiring real data, no payment/cost information



INTERACTION REQUIREMENTS

- All navigation should feel instant and app-like — use client-side view switching, not 

  full page reloads

- Add subtle entrance animations when switching views (fade + slight slide)

- Make the Timeline screen the standout, most polished piece of interaction on the site

- Fully responsive: sidebar collapses to a bottom tab bar or hamburger on mobile

- Absolutely no pricing, cost, currency symbols, or payment info anywhere in the entire app



TONE

- Confident, clear, non-technical-jargon-heavy — someone with zero tech background should 

  be able to click through this in 3 minutes and understand exactly what's being built and 

  when it'll be ready

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sanjay-launchpad.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f13c6bc3-3ab7-4ca1-ad9d-b0e8439fc7ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
