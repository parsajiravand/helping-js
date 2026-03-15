# Usage

Simple utils for JavaScript: type checkers, regex patterns, and environment support flags.

**helping-js** is vanilla JavaScript with **no external dependencies**. It supports ES5 (CommonJS) and ES modules, and works in Node and browsers.

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
3. You can use from CDN (ESM only). For production, pin a version: `https://unpkg.com/helping-js@2/core/types.js`
```javascript
import { isString } from 'https://unpkg.com/helping-js/core/types.js'

console.log(isString('test')) // true
console.log(isString(true)) // false
```

4. **TypeScript**: The package ships with declaration files (`.d.ts`). Import from `helping-js/core/types` (or other subpaths) and you get full type checking.