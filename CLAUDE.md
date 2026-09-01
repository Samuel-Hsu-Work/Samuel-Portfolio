# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Check [TODO.md](./TODO.md) at the start of a session for current work-in-progress status and next steps — it's the mutable counterpart to this file's static architecture notes.

Architecture diagram: https://claude.ai/code/artifact/bfb4f937-7814-49eb-8f9d-e2a7e7bc9284

## Commands

- `npm start` — run the dev server (Create React App / react-scripts, http://localhost:3000)
- `npm run build` — production build to `build/`
- `npm test` — run the Jest/React Testing Library + jest-axe suite (`CI=true npm test -- --watchAll=false` for a single non-interactive run)
- `npm run deploy` — build and publish `build/` to GitHub Pages via `gh-pages` (deploys to the `homepage` URL in package.json)

ESLint extends `react-app` plus `plugin:jsx-a11y/recommended`, enforced (as errors, via `CI=true`) during `npm run build`.

## Architecture

This is a single-page personal portfolio site built with Create React App, React Router, Tailwind CSS, and Framer Motion.

- **Routing**: `src/App.js` wraps `AppShell` (the skip link, background pattern, header/Navbar, and routes) in a `Router`; `AppShell` is exported separately so tests can mount it inside their own `MemoryRouter`. `src/components/AnimatedRoutes/AnimatedRoute.js` defines the four routes (`/`, `/About`, `/Projects`, `/Contact`) inside a persistent `<main id="main-content">` landmark, wraps them in Framer Motion's `AnimatePresence` for page-transition animations, and — on every navigation after the first — sets `document.title` and moves focus to the new page's `<h1>`. Every page component follows the same pattern — a top-level `motion.div`/`motion.section` with `initial`/`animate`/`exit` opacity transitions, each gated through Framer Motion's `useReducedMotion()` so the transition (and Home's mouse-parallax effect) is skipped for users who prefer reduced motion.
- **Theme**: Dark/light mode is global state via React Context (`src/components/ThemeContext/ThemeContext.js`), persisted to `localStorage` and mirrored onto `document.body`'s `data-theme` attribute (used by CSS for theme-specific styling rather than Tailwind's dark mode classes). `src/components/DarkMode/DarkMode.js` is the toggle UI. Theme-aware design tokens (`--muted-text-color`, `--link-color`, `--focus-ring-color`, `--control-border-color`, `--gradient-start`/`-end`) live in `src/index.css` alongside `--text-color`/`--accent-color`, scoped per `body[data-theme]`.
- **Navbar**: `src/components/Navbar/Navbar.js`'s mobile menu is a native `<dialog>` opened via `showModal()` (with an attribute-based fallback for browsers that lack it) — real modal semantics (focus containment, Escape-to-close) rather than a CSS-only slide-in panel. It closes itself on route change and when the viewport crosses the desktop breakpoint.
- **Pages**: Each route has its own directory under `src/components/` (`Home`, `About`, `Projects`, `Contacts`) pairing a `.js` component with a co-located `.css` file for page-specific styles, while Tailwind utility classes handle layout.
- **Projects page**: `src/components/Projects/Projects.js` renders project data from an inline array (`name`, `description`, `image`, `imageAlt`, `stack`, `demo`) — there's no CMS or external data source; adding a project means editing this array and adding an image asset alongside it.
- **Static assets**: resume PDF, project screenshots, and skill icons are imported directly as ES modules from within `src/components/*` and `src/image/`.
- **Tests**: `src/App.a11y.test.js` — jest-axe scans per route plus structural/behavioral accessibility assertions (landmarks, heading order, skip link, route-change focus/title, `aria-current`, the mobile menu dialog, the theme toggle, Contact form labels). `src/setupTests.js` polyfills `window.matchMedia` and `HTMLDialogElement`, neither of which jsdom implements.
