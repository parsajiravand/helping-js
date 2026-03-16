
<br>
<p align="center">
  <a href="https://github.com/parsajiravand/helping-js"><img src="https://i.ibb.co/7RkRvX0/helping-js-icon.png" alt="Demo" width="160"></a>
  <h2 align="center">helping-js</h2>
  <p align="center">simple utils for javascript</p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/helping-js">
    <img src="https://img.shields.io/npm/v/helping-js.svg?style=flat-square" alt="version">
  </a>
  <a href="https://github.com/parsajiravand/helping-js/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/helping-js.svg?style=flat-square" alt="MIT license">
  </a>
  <a href="http://npmcharts.com/compare/helping-js">
    <img src="https://img.shields.io/npm/dm/helping-js.svg?style=flat-square" alt="downloads">
  </a>
  <br>
  <a href="https://unpkg.com/helping-js/core/">
    <img src="http://img.badgesize.io/https://unpkg.com/helping-js/core?compression=gzip&label=gzip%20size&style=flat-square" alt="gzip size">
  </a>
  <a href="https://github.com/parsajiravand/helping-js/blob/master/package.json">
    <img src="https://img.shields.io/badge/dependencies-none-lightgrey.svg?style=flat-square" alt="no dependencies">
  </a>
  <a href="https://github.com/parsajiravand/helping-js/actions">
    <img src="https://github.com/parsajiravand/helping-js/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
</p>

<p align="center">
  <br>
  <strong>
  <a style="font-size:24px" href="https://helping-js.netlify.app/usage/#installation"> 📚 Document</a> ・
  <a style="font-size:24px" href="https://helping-js.netlify.app/usage/#installation">🔎 Demos</a> ・
  <a style="font-size:24px" href="https://helping-js.netlify.app/usage/#installation"> 🔬 Playground</a> ・
  <a style="font-size:24px" href="https://github.com/parsajiravand/helping-js/blob/master/CHANGELOG.md"> 📋 Changelog</a>
  </strong>
</p>

**v2** adds TypeScript types, proper package exports, tests, lint/format, and CI. See [CHANGELOG.md](CHANGELOG.md) for details.

## Dependencies
- No need Dependency

## Installation
```bash
npm install helping-js --save
```
```bash
yarn add helping-js
```
## Usage
1. You can import in your js file es6 (modules,vue,react,...)

```javascript
import { isString } from 'helping-js/core/types'

console.log(isString('test')) // true
console.log(isString(true)) // false
```
2. You can import in your js file es5 (nodejs)
```javascript
var { isString } = require('helping-js/core/types')

console.log(isString('test')) // true
console.log(isString(true)) // false
```
3. You can use from CDN (ESM only). Pin a version for production: `https://unpkg.com/helping-js@2/core/types.js`
```javascript
import { isString } from 'https://unpkg.com/helping-js/core/types.js'

console.log(isString('test')) // true
console.log(isString(true)) // false
```

4. TypeScript: the package includes `.d.ts` files; types work automatically when you import from `helping-js/core/*`.

## Validate forms

Lightweight validation without validator.js: use `validate(obj, rules)` with RegExp or predicate functions.

```javascript
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';

const result = validate(
  { email: 'user@example.com', age: 25 },
  { email: RX_EMAIL, age: isNumber }
);
// result.valid === true, result.errors === {}

// Or import only validate and use your own rules:
import { validate } from 'helping-js/core/validate';
import { RX_EMAIL } from 'helping-js/core/regex';
```

Rules can be a **RegExp** (tests `String(value)`) or a **function** `(value) => boolean`. Returns `{ valid: true, errors: {} }` or `{ valid: false, errors: { field: false, ... } }`.

## Usage in your project

No extra config; install and import.

- **Node (CJS):** `const { isString } = require('helping-js/core/types');`
- **Node (ESM):** `import { isString } from 'helping-js/core/types';` (use `"type": "module"` in package.json or `.mjs` extension).
- **Vite:** `import { isString } from 'helping-js/core/types';`
- **Next.js:** `import { isString } from 'helping-js/core/types';` (client or server).
- **Create React App:** `import { isString } from 'helping-js/core/types';`

## Regex Usage
### You can access all regex patterns from the `helping-js/core/regex` module. (More Than 50 Patterns)

Example usage:
```javascript
import { RX_HASH } from "helping-js/core/regex";
const regex = RX_HASH;
const str = '#test';
console.log(regex.test(str)); // Output: true
```
