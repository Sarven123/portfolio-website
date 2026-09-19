# Portfolio Website

A single, long-scroll personal portfolio site: hero introduction, projects, and
an about section flow together as one continuous experience rather than
separate pages. Built with React (JavaScript, no TypeScript) and Vite, styled
with CSS Modules on top of a small dark-navy design-token system, with Framer
Motion for scroll-based transitions.

This project currently runs locally only — there is no hosting or deployment
step yet.

## Install dependencies

```bash
npm install
```

## Run it locally

```bash
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`). The dev
server supports hot module reloading, so edits show up immediately.

## Create a production build

```bash
npm run build
```

Output is written to `dist/`. Preview that build locally with:

```bash
npm run preview
```

## Check Git status

```bash
git status        # see what's changed/staged
git log --oneline # see recent commit history
git diff          # see unstaged changes in detail
```

## Restore an earlier commit safely

To look at an old commit without losing current work:

```bash
git log --oneline          # find the commit hash you want
git stash                  # (optional) shelve any uncommitted changes first
git checkout <commit-hash> # inspect that commit in a detached HEAD state
git checkout main          # return to the latest work when done
```

To undo the most recent commit but keep the changes staged for editing:

```bash
git reset --soft HEAD~1
```

Avoid `git reset --hard` or `git clean -fd` unless you're certain you want to
permanently discard uncommitted work — prefer `git stash` or a new commit
instead, since those are reversible.

## Project structure

```
src/
  components/
    layout/    -- Header, Footer, Section (shared page chrome)
    sections/  -- HeroSection, ProjectsSection, AboutSection, ContactSection
    ui/        -- Button, ProjectCard, SectionHeading, SkillBadge, ScrollCue
  data/        -- profile.js, projects.js (content, kept separate from components)
  styles/      -- tokens.css (design tokens: color, type scale, spacing)
```
