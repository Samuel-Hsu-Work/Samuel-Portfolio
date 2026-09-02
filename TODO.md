# TODO / Working Notes

Working state that isn't visible from the code alone — what's in progress, what's next. Update the **Status** section before ending a work session (or ask Claude to do it) so a new chat or a fresh IDE session can pick up context immediately from this file + `git log`.

**This file is a snapshot, not ground truth.** It may be stale if a session ended without updating it. Before acting on anything below, ground it against the repo: run `git log`/`git status`/`git diff` and spot-check that the files/features mentioned still look the way this file says they do. If it's drifted, fix the entry (or flag the drift) rather than trusting it blindly.

## Status (last updated: 2026-09-02)

- `main`'s last pushed/deployed commit is `6929b8a`. On top of that, the Router-`basename` fix (see below) is implemented and Codex-reviewed clean, but **not yet committed** — `src/App.js`, `src/App.a11y.test.js`, `package.json` are uncommitted in the working tree, pending the user's go-ahead to commit/push/redeploy.

## In progress

- _(nothing mid-flight)_

## Next up / backlog

- **Manual verification** of the WCAG remediation — keyboard-only pass, screen reader (VoiceOver), 200%/400% zoom, mobile widths. Deliberately left to the user rather than automated.
- **Commit, push, and redeploy** the Router-`basename` + GitHub Pages 404 fallback fix (see Recently done) once the user gives the go-ahead.
- **No CI automation**: found via `/audit`. No `.github/workflows`; `npm run build` only enforces the documented `CI=true` jsx-a11y-as-error gate when that env var happens to be set, and `npm test` never runs as part of the deploy flow at all. Suggested: a minimal GitHub Actions workflow running `CI=true npm test -- --watchAll=false` and `CI=true npm run build` on push to `main`.
- `About.js`'s own `projects` array is stale vs. `Projects.js` (missing the "AI Calendar Assistant" entry) — flagged during this session's resume sync, not resume-related, not yet fixed.
- Deferred from Codex's second review of the a11y work: the mobile menu's no-`<dialog>`-support fallback (pre-2022 Safari) only toggles the `open` attribute — no focus trap / Escape like `showModal()` gives. Accepted as a documented limitation given how small that browser range is for this site; revisit with a real dialog polyfill if that judgment call should change.
- Out of scope, flagged but not done: deleting dead image assets (`Projects/PasswordGenerate.jpg`, `PopQuiz.jpg`, `Scheduler.jpg`, all of `src/image/*`) and the unused `react-scroll` dependency; verifying the external `getform.io` Contact form response page.

## Recently done

- 2026-09-02 — Fixed the Router `basename` bug: added `basename={process.env.PUBLIC_URL}` to `src/App.js`'s `<Router>` so client-side nav keeps the `/Samuel-Portfolio` prefix, plus a `build/404.html` GitHub Pages SPA-fallback (`predeploy` now runs `cp build/index.html build/404.html`) so a direct load/refresh of a nested route no longer 404s before the app ever boots — Codex's first review caught that the `basename` fix alone didn't cover that server-side 404 case. Added a regression test (`src/App.a11y.test.js`) mounting the real `App` (not just `AppShell`) to assert a deep-linked path isn't redirected home. Scoped via `/scope`, reviewed twice by Codex (first pass: P1 finding on the missing 404 fallback, addressed; second pass clean). Tests pass (20/20), `CI=true npm run build` clean. Not yet committed.
- 2026-09-02 — Shipped and deployed the current `main` (`6929b8a`) to GitHub Pages: tests (19/19) and `CI=true npm run build` verified green, `npm run deploy` published successfully. No uncommitted work and no unpushed commits at the time, so nothing new went through Codex review this pass.
- 2026-09-01 — Made all pages and shared components responsive from 320px to desktop (Tailwind utilities across Home/About/Projects/Contact, hardened mobile dialog, hero breakpoint fix). Scoped via `/scope`, reviewed twice by Codex (first pass flagged an xl-breakpoint regression, addressed; second pass clean). Tests pass (19/19). Committed and pushed as `6929b8a`.
- 2026-09-01 — Replaced the resume PDF and synced `About.js`'s experience/skills/certification content with it, plus added a new Education section that didn't exist before. Scoped via `/scope` (Explore agent diffed resume vs. page, ambiguous content calls resolved with the user), reviewed by Codex (clean, no findings), tests pass (18/18). Committed as `40e06ea`, not yet pushed.
- 2026-09-01 — WCAG 2.1 AA accessibility remediation: landmarks/skip link, route-change focus + title management, real `<button>`+`<dialog>` mobile menu (focus containment, Escape, auto-close), heading-level fixes, `prefers-reduced-motion` support, removed an SC 2.2.2-violating infinite CSS animation, contrast/token fixes, Contact form labels, `eslint-plugin-jsx-a11y` + `jest-axe` test infra. Scoped via `/scope`, reviewed twice by Codex. Committed (`09e37ba`) and pushed.
- 2026-09-01 — Bootstrapped this repo's continuity workspace (`CLAUDE.md`, this file) and an architecture diagram, plus project-wide Claude Code permission/skill tuning (`ground`/`diagram` split, global Auto Mode default).
- 2026 — Replaced "Daily Scheduler" project entry with "AI Calendar Assistant" on the Projects page.
- 2026 — Updated Music Hub demo link.
- 2026 — Several rounds of Projects page content updates.

---
*Format note: keep entries short — this is a pointer to context, not a full changelog (that's what `git log` is for).*
