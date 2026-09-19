# Portfolio Website — Project Memory

Persistent state summary for resuming work in a new session. Last updated: 2026-09-19 (after Phase 8 + a targeted post-Phase-8 fix).

## Purpose & Stack

Single-page, long-scroll personal portfolio (Hero → Projects → About → Contact), designed to feel like one continuous visual experience rather than separate pages. Local-only for now — no hosting/deployment.

- React (JavaScript, no TypeScript) + Vite
- CSS Modules + a small design-token system (`src/styles/tokens.css`)
- Framer Motion for scroll/entrance animation
- Dark-mode-first navy palette with one accent color

## Approved Plan Summary

Full plan lives at `~/.claude/plans/pasted-content-id-4d3d-i-want-compressed-anchor.md`. Nine phases:

1. Scaffold (Vite + React, folder structure)
2. Design tokens & global styles
3. Static layout (Header/Footer/Section + 4 sections, placeholder content)
4. Data wiring (`src/data/profile.js`, `src/data/projects.js`)
5. Motion pass (Framer Motion entrance/scroll animations)
6. Nav & scroll polish (active-section highlighting, scroll progress, anchor offset)
7. Accessibility & reduced-motion pass
8. Cross-device check
9. Content placeholder → real content swap (whenever ready) ← **next**

## Completed Phases (1–8)

- **Phase 1–3:** Vite scaffold, navy design tokens (`--color-*`, `--space-*`, `--text-*`, `--header-height`), full static layout — `Header`, `Footer`, `Section` (layout) + `HeroSection`, `ProjectsSection`, `AboutSection`, `ContactSection`, plus `ui/` primitives (`Button`, `SectionHeading`, `SkillBadge`, `ScrollCue`, `ProjectCard`).
- **Phase 4:** Content moved to `src/data/profile.js` and `src/data/projects.js`. Also centralized name/socials/email there (used by Header/Footer/Hero/About/Contact) — a deliberate small scope extension beyond "hero/about only" to kill duplicated placeholder strings.
- **Phase 5:** Framer Motion added. `Section` does `whileInView` fade+slide; `ProjectsSection` grid staggers cards; `ScrollCue` loops a bounce; new `ScrollGlow` is a fixed, scroll-linked ambient background glow. App wrapped in `MotionConfig(reducedMotion="user")`.
- **Phase 6:** `useActiveSection` hook (IntersectionObserver scrollspy) drives nav active-state; new `ScrollProgress` fixed bar; `scroll-margin-top: var(--header-height)` on `Section` fixes the sticky header covering anchor targets.
- **Phase 7:** Audited first (via Explore agent) before changing anything — found headings, landmarks, alt text, `aria-current`/`aria-label` usage, contrast, and reduced-motion coverage already solid from earlier phases. Two real gaps fixed:
  - New `SkipLink` component (`src/components/layout/SkipLink.jsx` + `.module.css`) — visually-hidden-until-`:focus` link, first element in `App.jsx`, targets a new `id="main-content"` + `tabIndex={-1}` on `<main>`.
  - `ProjectCard`'s "View project"/"Source" links now carry `aria-label` with the project title (`View ${title} project` / `View ${title} source code`) so repeated identical link text is distinguishable out of visual context (e.g. a screen-reader links list).
  - Reviewed `ScrollProgress`'s reduced-motion exemption (its own code comment argues it's a direct scroll-position reflection, not an autoplay animation) and confirmed it as the right call — no change made there.
- **Phase 8:** Cross-device check — no code changes needed, everything already responsive. Verified via a mix of source review (all `@media` rules: `Header` 480px, `AboutSection`/`ProjectsSection` 768px, `ProjectsSection` 1024px) and live computed-style/overflow checks in the browser at ~500px, ~820px (2-col Projects grid confirmed), and native desktop width — no horizontal overflow, no cramped/overlapping content, grids collapse 3→2→1 and 2→1 as designed, fluid `clamp()` typography holds up, nav fits with room to spare even at the narrowest width the automation tooling could reach this session (~500px; see browser-automation caveat below on `resize_window` not reliably hitting true phone widths like 375px — compensated with an explicit box-width arithmetic check that confirmed no overflow at 375px either).

## Post-Phase-8 Fix: LinkedIn removal + functional Contact/Footer buttons

The user had already started swapping in real content directly into `src/data/profile.js` (name, bio, skills, email, GitHub username) ahead of formal Phase 9, leaving `socials.linkedin` absent and `socials.github` as a bare username (`'Sarven123'`, not a URL) — which left the LinkedIn buttons pointing at `undefined` and the GitHub buttons pointing at an invalid relative path.

Fixed narrowly scoped, in `Footer.jsx` and `ContactSection.jsx` only (no data file changes needed — LinkedIn was already absent from the data, so removal was just deleting the two dead JSX links/buttons that still referenced it):
- Removed every LinkedIn link/button from `Footer` and `ContactSection` — both were plain flex-row children, so removing them was layout-safe (no empty gap left behind).
- GitHub links/buttons now build the full URL inline — `` `https://github.com/${profile.socials.github}` `` — matching the existing inline `` `mailto:${profile.contact.email}` `` convention already used for Email — and open with `target="_blank" rel="noopener noreferrer"`.
- Email button/link was already a working `mailto:` link; no change needed there.

This `profile.js` content swap (name, bio, skills, email, GitHub username) is now committed — see Phase 9 note below.

## Phase 9 (in progress): content placeholder → real content swap

- `src/data/profile.js` real content committed: name, role (`'Student'`), eyebrow/intro, bio (2 real paragraphs), skills list, contact email, GitHub username. Still placeholder: `resumeUrl: '#'`.
- `src/data/projects.js` is still all placeholder ("Project One/Two/Three") — not yet swapped (user doesn't have real project entries ready yet, as of 2026-09-19).

## Current Status

Code is complete, linted, and building cleanly. Everything through the Phase 9 profile-content commit is pushed. Working tree is clean. Remaining Phase 9 work: real `projects.js` entries, and a decision on `resumeUrl` (whenever ready — not blocking anything else).

## Git / GitHub Status

- Local path: `/Users/sarvenavci/Documents/MyProjects/portfolio-website`
- GitHub repo: `https://github.com/Sarven123/portfolio-website` (**public** as of 2026-09-19), remote `origin`, branch `main`
- Working tree: clean, local and remote in sync
- Latest pushed commit: `06ecf5f` — "Phase 9: add role to profile content"
- Commit history so far: `cf5ce7c` (initial) → `9d33351` (README) → `108912f` (Phase 4) → `6b5f3f5` (Phase 5) → `de3bfa1` (Phase 6) → `c4875d9` (project memory file) → `8203d52` (Phase 7) → `e5fd0d3` (memory update) → `a93ab1d` (Phase 8) → `ef5260d` (memory fix) → `60dd23f` (LinkedIn removal + functional buttons) → `edd5b80` (memory update) → `48531e8` (Phase 9 profile content) → `403831b` (memory update) → `06ecf5f` (Phase 9 role)

## Public-Visibility Security Review (2026-09-19)

Before making the repo public, ran a full audit — result: **clean, no changes needed**.

- **Secrets/credentials:** grepped working tree + full `git log --all -p` history for API keys, tokens, passwords, private-key headers, and known cloud-provider key patterns (AWS, GitHub PAT, Google, Slack) — no matches. The only hits for words like "secret"/"token" were `.gitignore` entries and unrelated design-"tokens" terminology.
- **File-history diff:** compared the set of files ever added across all commits (`git log --all --diff-filter=A`) against currently tracked files — identical sets, so nothing sensitive was ever committed and later removed (which would still be exposed via history).
- **`.gitignore`:** already correctly excludes `node_modules`, `dist`/`dist-ssr`, `.env`/`.env.*`, `*.pem`/`*.key`/`*.cert`, `secrets.json`, `credentials.json`, and OS/editor cruft.
- **Personal info:** `src/data/profile.js` has name, age/university, bio, skills, and a contact email — all intentional, public-facing portfolio content (the point of the site), not an inadvertent leak.
- **Large/generated files:** no blobs over 500KB anywhere in history.
- **Build:** `npm run build` succeeds cleanly (455 modules, no errors) — verified after review, before flipping visibility.
- **Outcome:** repository visibility changed from private → public via `gh repo edit --visibility public`; no cleanup commits were necessary since nothing unsafe was found.

## Important Implementation Decisions

- Name/socials/email centralized in `profile.js`, consumed by Header/Footer too (not just Hero/About/Contact as originally scoped).
- `ProjectCard` accepts an optional `image`; falls back to a gradient placeholder when absent.
- Reduced motion: `MotionConfig(reducedMotion="user")` handles one-shot entrance animations app-wide; `ScrollGlow` and `ScrollCue` additionally check `useReducedMotion()` explicitly since their looping/continuous motion isn't covered by `MotionConfig`. `ScrollProgress` is intentionally NOT gated behind reduced motion (it's a direct 1:1 reflection of user scroll input, not an autoplay animation).
- `--header-height` token keeps the header's actual height and the `scroll-margin-top` anchor offset in sync — change one, update the other.

## Known Constraints & Style Rules

- No TypeScript — plain `.jsx`/`.js` only.
- No backend, auth, database, or deployment — local dev only.
- Don't add abstractions/refactors beyond what's asked; e.g., Header/Footer's small duplicated centering CSS was left as-is rather than extracted.
- Git workflow (standing rule, see `[[portfolio-git-workflow]]` memory): checkpoint commit before each phase, commit+push after each completed phase, never destructive git commands without explicit approval, never commit secrets/`.env`/`node_modules`. Repo is now public (as of 2026-09-19, after a clean security review) — no code/design changes to accommodate that beyond the review itself.

## Lean Workflow Rule (general)

Prefer static, code-verifiable checks over browser round-trips when the change is plain CSS/HTML/JS logic with no custom runtime behavior to doubt:

- Make code changes first, batched — don't verify after every single edit.
- Verify contrast/semantics/alt-text/CSS rules by reading code or the compiled build output, not by screenshotting every state.
- Use the browser for at most 1–2 targeted checks, not iterative back-and-forth.
- Treat one clean verification as sufficient when there's no custom JS logic to doubt — don't chase 100% automated repro of browser-native behavior.
- Skip re-verifying things already proven correct in earlier phases (fonts, colors, layout, scroll offset).

## Exact Prompt to Start Phase 9

> Continue with Phase 9 (content placeholder → real content swap) once real project entries, bio copy, and social links are ready — swap them into `src/data/profile.js` and `src/data/projects.js`.

## Reminders

- **Don't overuse browser automation.** Screenshots/JS-eval round-trips are the main token cost, not code edits — batch actions, avoid repeated re-verification of the same thing, and don't chase flaky automation artifacts (viewport drift, stray HMR reloads) as if they were app bugs.
- **Commit and push after each stable phase**, not mid-phase — keep `git status` clean before moving on.
- **Synthetic Tab-key presses via the Chrome-extension automation don't reliably reach page focus** (seen in Phase 7: `computer` tool's `Tab` key, sent right after a click or a fresh navigate, did not move focus into the page content — accessibility-tree order and the compiled CSS focus rule were confirmed correct by other means instead, e.g. `read_page` with `filter: "all"` for DOM/tab-order/labels, and grepping the built CSS/JS in `dist/` for the expected rules/markup). Don't burn multiple retries chasing this — verify via `read_page`/build output and, if a real visual confirmation is needed, ask the user to tab through manually.
- **`resize_window` doesn't reliably hit the requested width in this environment** (seen in Phase 8: requesting 375px landed at 500px on one tab and requesting 768px/1024px both landed at 820px on a fresh tab — seems to clamp to some environment-imposed floor/ceiling rather than the exact target). Don't burn retries chasing an exact pixel width; treat whatever width you actually land at as a valid data point (check `window.innerWidth` after each resize), pick a few naturally-reachable widths that straddle the breakpoints you care about, and fall back to arithmetic (element widths vs. container width from `getBoundingClientRect`) for widths the tool won't reach. Ask the user to spot-check true phone-width (e.g. real device or a manual DevTools resize) if exact-width confirmation is ever critical.
