// React Router tolerates a trailing slash when matching which route to
// render, but doesn't strip it from `location.pathname` — so exact-string
// comparisons against a path (route titles, active-nav-link checks) miss
// for a URL like "/about/" unless both sides are normalized first.
export function normalizePath(path) {
    return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}
