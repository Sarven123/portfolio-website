# Portfolio Website — Project Memory

Persistent state summary for resuming work in a new session. Last updated: 2026-09-19 (after Phase 7).

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
8. Cross-device check ← **next**
9. Content placeholder → real content swap (whenever ready)

## Completed Phases (1–7)

- **Phase 1–3:** Vite scaffold, navy design tokens (`--color-*`, `--space-*`, `--text-*`, `--header-height`), full static layout — `Header`, `Footer`, `Section` (layout) + `HeroSection`, `ProjectsSection`, `AboutSection`, `ContactSection`, plus `ui/` primitives (`Button`, `SectionHeading`, `SkillBadge`, `ScrollCue`, `ProjectCard`).
- **Phase 4:** Content moved to `src/data/profile.js` and `src/data/projects.js`. Also centralized name/socials/email there (used by Header/Footer/Hero/About/Contact) — a deliberate small scope extension beyond "hero/about only" to kill duplicated placeholder strings.
- **Phase 5:** Framer Motion added. `Section` does `whileInView` fade+slide; `ProjectsSection` grid staggers cards; `ScrollCue` loops a bounce; new `ScrollGlow` is a fixed, scroll-linked ambient background glow. App wrapped in `MotionConfig(reducedMotion="user")`.
- **Phase 6:** `useActiveSection` hook (IntersectionObserver scrollspy) drives nav active-state; new `ScrollProgress` fixed bar; `scroll-margin-top: var(--header-height)` on `Section` fixes the sticky header covering anchor targets.
- **Phase 7:** Audited first (via Explore agent) before changing anything — found headings, landmarks, alt text, `aria-current`/`aria-label` usage, contrast, and reduced-motion coverage already solid from earlier phases. Two real gaps fixed:
  - New `SkipLink` component (`src/components/layout/SkipLink.jsx` + `.module.css`) — visually-hidden-until-`:focus` link, first element in `App.jsx`, targets a new `id="main-content"` + `tabIndex={-1}` on `<main>`.
  - `ProjectCard`'s "View project"/"Source" links now carry `aria-label` with the project title (`View ${title} project` / `View ${title} source code`) so repeated identical link text is distinguishable out of visual context (e.g. a screen-reader links list).
  - Reviewed `ScrollProgress`'s reduced-motion exemption (its own code comment argues it's a direct scroll-position reflection, not an autoplay animation) and confirmed it as the right call — no change made there.

## Current Status After Phase 7

Code is complete, linted, and building cleanly. All work is committed and pushed. Next unstarted phase is **Phase 8: cross-device check**.

## Git / GitHub Status

- Local path: `/Users/sarvenavci/Documents/MyProjects/portfolio-website`
- GitHub repo: `https://github.com/Sarven123/portfolio-website` (private), remote `origin`, branch `main`
- Working tree: clean, local and remote in sync
- Latest pushed commit: `8203d52` — "Phase 7: accessibility pass — skip link and distinguishable link names"
- Commit history so far: `cf5ce7c` (initial) → `9d33351` (README) → `108912f` (Phase 4) → `6b5f3f5` (Phase 5) → `de3bfa1` (Phase 6) → `c4875d9` (project memory file) → `8203d52` (Phase 7)

## Important Implementation Decisions

- Name/socials/email centralized in `profile.js`, consumed by Header/Footer too (not just Hero/About/Contact as originally scoped).
- `ProjectCard` accepts an optional `image`; falls back to a gradient placeholder when absent.
- Reduced motion: `MotionConfig(reducedMotion="user")` handles one-shot entrance animations app-wide; `ScrollGlow` and `ScrollCue` additionally check `useReducedMotion()` explicitly since their looping/continuous motion isn't covered by `MotionConfig`. `ScrollProgress` is intentionally NOT gated behind reduced motion (it's a direct 1:1 reflection of user scroll input, not an autoplay animation).
- `--header-height` token keeps the header's actual height and the `scroll-margin-top` anchor offset in sync — change one, update the other.

## Known Constraints & Style Rules

- No TypeScript — plain `.jsx`/`.js` only.
- No backend, auth, database, or deployment — local dev only.
- Don't add abstractions/refactors beyond what's asked; e.g., Header/Footer's small duplicated centering CSS was left as-is rather than extracted.
- Git workflow (standing rule, see `[[portfolio-git-workflow]]` memory): checkpoint commit before each phase, commit+push after each completed phase, never destructive git commands without explicit approval, never commit secrets/`.env`/`node_modules`, keep repo private unless told otherwise.

## Lean Workflow Rule (general)

Prefer static, code-verifiable checks over browser round-trips when the change is plain CSS/HTML/JS logic with no custom runtime behavior to doubt:

- Make code changes first, batched — don't verify after every single edit.
- Verify contrast/semantics/alt-text/CSS rules by reading code or the compiled build output, not by screenshotting every state.
- Use the browser for at most 1–2 targeted checks, not iterative back-and-forth.
- Treat one clean verification as sufficient when there's no custom JS logic to doubt — don't chase 100% automated repro of browser-native behavior.
- Skip re-verifying things already proven correct in earlier phases (fonts, colors, layout, scroll offset).

## Exact Prompt to Start Phase 8

> Continue with Phase 8 (cross-device check). Follow the lean workflow noted in `portfolio-website.md`.

## Reminders

- **Don't overuse browser automation.** Screenshots/JS-eval round-trips are the main token cost, not code edits — batch actions, avoid repeated re-verification of the same thing, and don't chase flaky automation artifacts (viewport drift, stray HMR reloads) as if they were app bugs.
- **Commit and push after each stable phase**, not mid-phase — keep `git status` clean before moving on.
- **Synthetic Tab-key presses via the Chrome-extension automation don't reliably reach page focus** (seen in Phase 7: `computer` tool's `Tab` key, sent right after a click or a fresh navigate, did not move focus into the page content — accessibility-tree order and the compiled CSS focus rule were confirmed correct by other means instead, e.g. `read_page` with `filter: "all"` for DOM/tab-order/labels, and grepping the built CSS/JS in `dist/` for the expected rules/markup). Don't burn multiple retries chasing this — verify via `read_page`/build output and, if a real visual confirmation is needed, ask the user to tab through manually.
