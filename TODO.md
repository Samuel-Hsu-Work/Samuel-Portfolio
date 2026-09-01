# TODO / Working Notes

Working state that isn't visible from the code alone — what's in progress, what's next. Update the **Status** section before ending a work session (or ask Claude to do it) so a new chat or a fresh IDE session can pick up context immediately from this file + `git log`.

**This file is a snapshot, not ground truth.** It may be stale if a session ended without updating it. Before acting on anything below, ground it against the repo: run `git log`/`git status`/`git diff` and spot-check that the files/features mentioned still look the way this file says they do. If it's drifted, fix the entry (or flag the drift) rather than trusting it blindly.

## Status (last updated: 2026-09-01)

- Large **uncommitted** change on `main`: WCAG 2.1 AA accessibility remediation across the whole app (17 files). Tests pass (18/18, including zero jest-axe violations per route) and `npm run build` is clean. Reviewed independently by Codex across two rounds — all confirmed findings fixed except one, deliberately deferred (see below). Not yet committed or pushed — next session should commit this (or ask what's blocking) before starting anything else.

## In progress

- _(nothing — the accessibility work above is finished pending commit/push, not mid-flight)_

## Next up / backlog

- **Commit + push** the accessibility remediation once reviewed to satisfaction.
- **Manual verification** of the remediation — keyboard-only pass, screen reader (VoiceOver), 200%/400% zoom, mobile widths. Deliberately left to the user rather than automated.
- Deferred from Codex's second review: the mobile menu's no-`<dialog>`-support fallback (pre-2022 Safari) only toggles the `open` attribute — it doesn't trap focus or support Escape like `showModal()` does. Accepted as a documented limitation given how small that browser range is for this site; revisit with a real dialog polyfill if that judgment call should change.
- Out of scope, flagged but not done: deleting dead image assets (`Projects/PasswordGenerate.jpg`, `PopQuiz.jpg`, `Scheduler.jpg`, all of `src/image/*`) and the unused `react-scroll` dependency; verifying the external `getform.io` Contact form response page.

## Recently done

- 2026-09-01 — WCAG 2.1 AA accessibility remediation: landmarks/skip link, route-change focus + title management, real `<button>`+`<dialog>` mobile menu (focus containment, Escape, auto-close), heading-level fixes, `prefers-reduced-motion` support, removed an SC 2.2.2-violating infinite CSS animation, contrast/token fixes, Contact form labels, `eslint-plugin-jsx-a11y` + `jest-axe` test infra. Scoped via `/scope`, reviewed twice by Codex.
- 2026-09-01 — Bootstrapped this repo's continuity workspace (`CLAUDE.md`, this file) and an architecture diagram, plus project-wide Claude Code permission/skill tuning (`ground`/`diagram` split, global Auto Mode default).
- 2026 — Replaced "Daily Scheduler" project entry with "AI Calendar Assistant" on the Projects page.
- 2026 — Updated Music Hub demo link.
- 2026 — Several rounds of Projects page content updates.

---
*Format note: keep entries short — this is a pointer to context, not a full changelog (that's what `git log` is for).*
