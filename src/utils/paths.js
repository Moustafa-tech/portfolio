// Resolves a public-folder asset path against Vite's configured `base`.
//
// Why this exists: Vite only rewrites asset URLs it processes at build time
// (e.g. <link>/<script> tags in index.html, or `import` statements). Plain
// runtime string literals like '/images/profile/profile.jpg' stored in data
// files are NOT rewritten, so on a GitHub Pages *project* site — served
// under a sub-path such as /portfolio/ instead of the domain root — a
// hardcoded leading-slash path would incorrectly resolve to the domain root
// and 404.
//
// `import.meta.env.BASE_URL` always reflects the current `base` config
// (e.g. '/portfolio/' in production, '/' in local dev) and always ends
// with a trailing slash, so this works correctly in both environments
// without any manual configuration.
export function withBase(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
