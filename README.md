# OW1128 — an Outer Wilds spin-off puzzle

A fan-made puzzle game set in the universe of [Outer Wilds](https://www.mobiusdigitalgames.com/outer-wilds.html).

Josh Lane-Trumper and I spent many months designing and building the game, its artwork and its videos. Please enjoy the work we created, because we know we have.

Go on an adventure, and roam free...

**Play:** [outerwilds1128.com](https://www.outerwilds1128.com/). The game works best if you've finished Outer Wilds, and finding the address is part of the puzzle.

There's more to explore [here](https://imgur.com/a/7QbjPH9) ;)

Good luck.

## Credits

- **Josh Lane-Trumper**: artwork, puzzle and web design, videography ([ArtStation](https://www.artstation.com/joshlanetrumper), [Behance](https://www.behance.net/JoshLaneTrumper))
- **Yannick Mermet**: website code and puzzle implementation ([GitHub](https://github.com/yannickrocks))

This is a non-commercial fan project. All rights and credit go to their rightful owners; no copyright infringement is intended. Outer Wilds © 2020 Mobius Digital, LLC. Published by Annapurna Interactive under exclusive license. All rights reserved.

## Development

Requires Node 24 and npm.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

| Script              | What it does                                                                    |
| ------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                                                       |
| `npm run build`     | Typecheck, then build to `dist/`                                                |
| `npm run preview`   | Serve the production build locally                                              |
| `npm run typecheck` | Run the TypeScript compiler without emitting                                    |
| `npm test`          | Run the unit tests (Vitest + Testing Library)                                   |
| `npm run e2e`       | Build, serve on port 4173 and play the game end to end in Chromium (Playwright) |
| `npm run prettier`  | Format `ts`, `tsx` and `css` files                                              |

The first time you run the e2e tests, install the browser with `npx playwright install chromium`.

## How it's built

- React 19, TypeScript and Vite. Routing uses react-router; styles use typestyle; animation uses motion.
- Each step of the game is a screen in `src/screens/`, and shared pieces live in `src/components/`. Story text, answers and asset lists are in `src/utils/`.
- Screens link to each other with full page loads on purpose: one step picks a random variant on every load.
- The puzzle answers ship in the client bundle on purpose. The homepage tells players so.
- Images are WebP files in `src/assets/`.

## Tests and CI

- `npm test` covers the puzzle logic, the countdown timer and the routing.
- `npm run e2e` plays from the homepage to both endings and checks that the puzzles can't be skipped and that the timer expiring leads to the right ending.
- GitHub Actions (`.github/workflows/ci.yml`) runs the typecheck, unit tests and e2e suite on every pull request and on pushes to `master`.

## Deployment

The site is hosted on Netlify, which also serves its DNS. `netlify.toml` sets the build (`npm test && npm run build`, published from `dist/`, Node 24) and long-lived cache headers for hashed assets. `public/_redirects` sends every path to the app. Pushing to `master` deploys production, and pull requests into `master` get a deploy preview.

## Repository history

Commits up to the Vite upgrade stored images in Git LFS. Check those out with [git-lfs](https://git-lfs.com/) installed; current `master` doesn't need it.

`PRODUCT.md` records who the game is for and the constraints any change has to respect.
