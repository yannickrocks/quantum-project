# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Outer Wilds fans who decrypted the site's address and arrive ready to play, ideally having finished the game. They play alone, in their own browser, at their own pace, on desktop or on a phone.

## Product Purpose

OW1128 (outerwilds1128.com) is a finished, fan-made puzzle game set in the Outer Wilds universe, made in 2020–21 by Josh Lane-Trumper (artwork, puzzle and web design, videography) and Yannick Mermet (website code and puzzle implementation). Its job now is to stay playable from start to either ending. It is an archive, not a growing product: maintenance, fixes and upgrades are in scope; new puzzles, screens or chapters are not.

Success means a player who decoded the address can reach the end without bugs, broken links, blank pages or slow loads.

## Positioning

The site is itself the first puzzle: its address had to be decrypted before play starts. Each step leans on knowledge of Outer Wilds (the 22-minute loop, the Quantum Moon, the Nomai and the Ash Twin Project), and the homepage tells players the answers are in the page source but that skipping ahead robs them of the experience.

## Operating Context

- Flow: homepage → `/22minutes` (planet codes) → `/wakeup` → `/wanderingmoon` and `/thewanderingmoon` (Quantum Moon click sequence; on each page load the second route randomly shows one of two variants) → `/wakeupagain` → `/finalvoyage` (warp coordinates, 22-hour countdown stored in a cookie) → `/consciousobserver` (good ending, credits) or `/terriblefate` (bad ending, "One more loop?").
- Each step embeds a YouTube video made for the game.
- Full-page link navigation between steps is deliberate: the Wandering Moon variant is re-rolled on every page load.
- Hosted on Netlify with Netlify DNS; static single-page app built with Vite and React.

## Capabilities and Constraints

- Puzzle answers live in the client bundle on purpose; never hide or move them server-side.
- Puzzle text, answers, routes and the order of steps are fixed.
- Josh's artwork, videos and puzzle images stay as they are. They may be re-encoded or resized for delivery, but never redrawn, restyled or replaced.
- Must work on mobile as well as desktop.
- No backend, accounts or analytics.

## Brand Commitments

- Name/title: OW1128.
- Non-commercial fan project. Keep the disclaimer ("All rights and credit go directly to its rightful owners, no copyright infringement intended.") and the line "© 2020 Mobius Digital, LLC. Published by Annapurna Interactive under exclusive license. All rights reserved." Never present the site as official.
- Voice: in-universe, Outer Wilds tone (Chert's notes, Nomai dialogue, "Clock's ticking, hatchling").
- Credits on the good ending name both creators, with their portfolio links.

## Evidence on Hand

- Artwork, planet and warp images, Nomai figures and masks: `src/assets/` (WebP).
- Fonts: `src/fonts/` (Androcles Opti).
- Warp sound: `src/assets/nomaiWarp.mp3`.
- Videos: YouTube embeds referenced in `src/screens/**`.
- Story text: `src/utils/Constants.tsx`.
- No player counts, testimonials or press are recorded; don't invent any.

## Product Principles

1. Playable end to end beats anything new: every change has to keep the full route (both endings) working.
2. Preserve the original work: art, story text and puzzle design are the product; code and delivery serve them.
3. Respect the puzzle: don't add hints, skips or shortcuts beyond what the original game offers.
4. Stay honest as a fan project: credit the owners, claim nothing official.

## Accessibility & Inclusion

Mobile play is supported. Keyboard and screen-reader play are not an established requirement.
