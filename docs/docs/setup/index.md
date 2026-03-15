# Usage in your project

helping-js works in Node (CJS and ESM), Vite, Next.js, Create React App, and other bundlers. No extra config — install and import.

## Node (CommonJS)

```javascript
const { isString } = require('helping-js/core/types');
const { validate } = require('helping-js/core/validate');
const { RX_EMAIL } = require('helping-js/core/regex');
```

## Node (ESM)

Use `"type": "module"` in your `package.json` or use the `.mjs` extension.

```javascript
import { isString } from 'helping-js/core/types';
import { validate } from 'helping-js/core/validate';
import { RX_EMAIL } from 'helping-js/core/regex';
```

## Vite

```javascript
import { isString } from 'helping-js/core/types';
import { validate, RX_EMAIL } from 'helping-js/preset/form';
```

## Next.js

Same ESM imports; works in both client and server components.

```javascript
import { isString } from 'helping-js/core/types';
import { validate, RX_EMAIL } from 'helping-js/preset/form';
```

## Create React App

```javascript
import { isString } from 'helping-js/core/types';
import { validate, RX_EMAIL, isNumber } from 'helping-js/preset/form';
```

## CDN (browser ESM)

For browser-only usage without a bundler, use unpkg (pin a version in production).

```javascript
import { isString } from 'https://unpkg.com/helping-js/core/types.js';
import { validate, RX_EMAIL } from 'https://unpkg.com/helping-js/preset/form.js';
```
