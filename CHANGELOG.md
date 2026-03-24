# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-03-24

### Added

- **Helper modules** (ported from helper-js patterns): `core/number`, `core/string`, `core/value` (`isEmptyValue`), `core/array`, `core/object`, `core/function`, `core/async`, `core/url`, `core/date`, `core/advanced`, `core/tree`, `core/dom`. Each has matching `.d.ts` and `package.json` exports.
- **Fixes vs upstream**: `strPad` returns the padded string; `arrayDiff` duplicate-count branch uses `diff === 1` like the first branch; `debounceImmediate` uses spread `...args`; `TreeData.clone` performs a proper deep clone; `viewportPositionToFixed` sets `top` from `y`.
- **Docs**: `docs/HELPER_INVENTORY.md` maps helper-js concepts to these modules. VuePress **Helpers** page lists subpath imports. Jest tests in `test/helper-modules.test.js`.

### Notes

- **`core/dom`**: intended for browsers; guards avoid throwing when `document` is missing, but prefer not importing DOM helpers in Node-only SSR bundles.
- **`core/types`**: unchanged semantics for existing type helpers (see inventory for name collisions with other libraries).

---

## [2.0.0] - 2026-03-15

### Added

- **TypeScript support**: Declaration files (`.d.ts`) for all public modules (`core/types`, `core/regex`, `core/support`, `core/safe-types`, `core/phones-regex`, `core/currencies-regex`, `core/validate`, `preset/form`). The package includes a `types` field for IDE and TypeScript consumers.
- **Package exports**: Proper `exports` field in `package.json` for subpath resolution (`helping-js/core/types`, `helping-js/core/regex`, etc.) so Node and bundlers resolve entry points correctly.
- **Schema/rule-based validation**: `validate(obj, rules)` in `helping-js/core/validate`. Rules can be a RegExp or a function `(value) => boolean`. Returns `{ valid, errors }`. No dependencies; uses existing types and regex.
- **Form preset**: `helping-js/preset/form` (and `helping-js/core/preset/form`) re-exports type checkers (`isString`, `isNumber`, `isNumeric`, etc.), `RX_EMAIL`, `RX_URL`, `RX_PHONE`, and `validate` for one-line form validation setup.
- **Form validation docs**: New “Form validation” doc page with Vue 3 and React examples using `validate()` and the form preset.
- **Setup / Usage in your project docs**: Expanded “Setup” documentation with many examples per stack: Node (CJS and ESM), Express (routes and middleware), Vue 3 (Composition API, Options API, full form), React (hooks, class component, full form), Vite, Next.js (API routes and client components), Create React App, and CDN. Multiple samples per section (imports, type checkers, validate, regex, preset).
- **Testing**: Jest-based test suite with 50+ unit tests for type checkers, regex patterns, support flags, and `validate()`. Run with `npm test`.
- **Linting and formatting**: ESLint and Prettier for `src/`, with `npm run lint` and `npm run format` scripts.
- **CI**: GitHub Actions workflow (`.github/workflows/ci.yml`) that runs lint, test, and build on push and pull requests.

### Changed

- **Main entry**: `main` now points to `./core/types.js` (no longer the missing `./index.js`). Use subpath imports, e.g. `helping-js/core/types`, `helping-js/core/regex`, `helping-js/core/support`.
- **Support module**: The support module file was renamed from `supoort.js` to `support.js`. Import from `helping-js/core/support` (docs and exports now match; the old path `core/supoort.js` no longer exists).
- **Build**: Upgraded from Babel 6 to Babel 7 (`@babel/cli`, `@babel/core`, `@babel/preset-env`). Build is cross-platform via a Node script (`scripts/clean-core.js`) instead of `rm -rf`.
- **Publish**: Added `prepublishOnly` so `npm run build` runs before every publish, ensuring `core/` is always up to date.
- **RX_IP**: Now correctly matches IPv4 addresses (alias of `RX_IPV4`). Previously it used the same pattern as `RX_URL`.
- **RX_PHONE_GQ**: Fixed Equatorial Guinea phone regex; the pattern now correctly matches prefixes 222–229 (was `[222-229]`, now `22[2-9]`).
- **Comments and docs**: Fixed typos in comments and documentation (e.g. "character", "before", "information", "Internet Explorer", "exists").

### Removed

- **uglify-js**: Removed unused devDependency.
- **Travis badge**: Removed from README; CI is now GitHub Actions.

### Fixed

- Packaging: Only `core/` is published; `main` and `exports` now point to files that exist in the package.
- CDN usage: Docs and README now use the correct unpkg URL (without `browse`) for ESM imports, e.g. `https://unpkg.com/helping-js/core/types.js`.

---

## [1.0.3] - Previous

- Initial public release with type checkers, regex patterns, support flags, and safe-types.

[3.0.0]: https://github.com/parsajiravand/helping-js/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/parsajiravand/helping-js/compare/v1.0.3...v2.0.0
[1.0.3]: https://github.com/parsajiravand/helping-js/releases/tag/v1.0.3
