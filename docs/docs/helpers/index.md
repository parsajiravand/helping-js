---
title: Helper modules (v3+)
description: helping-js core/number, string, array, object, async, url, date, advanced, tree, dom — import paths, API overview, and Vue, React, and Express examples.
---
# Helpers (v3+)

Optional modules beyond **types**, **regex**, and **validate**. Tree-shake by importing only the subpaths you need: `helping-js/core/<module>`.

## Module docs (samples on each page)

| Doc page | npm import |
| --- | --- |
| [Number](/helpers/number/) | `helping-js/core/number` |
| [String](/helpers/string/) | `helping-js/core/string` |
| [Value](/helpers/value/) | `helping-js/core/value` |
| [Array](/helpers/array/) | `helping-js/core/array` |
| [Object](/helpers/object/) | `helping-js/core/object` |
| [Function](/helpers/function/) | `helping-js/core/function` |
| [Async](/helpers/async/) | `helping-js/core/async` |
| [URL](/helpers/url/) | `helping-js/core/url` |
| [Date](/helpers/date/) | `helping-js/core/date` |
| [Advanced](/helpers/advanced/) | `helping-js/core/advanced` |
| [Tree](/helpers/tree/) | `helping-js/core/tree` |
| [DOM](/helpers/dom/) | `helping-js/core/dom` (browser) |

## Module overview (source)

| Subpath | What it gives you |
| --- | --- |
| [core/number](https://github.com/parsajiravand/helping-js/blob/master/src/number.js) | `randInt`, `randChoice`, `between`, `notLessThan`, `notGreaterThan`, `strPad` |
| [core/string](https://github.com/parsajiravand/helping-js/blob/master/src/string.js) | `camelCase`, `kebabCase`, `snakeCase`, `studlyCase`, `titleCase`, `camelToWords`, `randString`, `reverseString` |
| [core/value](https://github.com/parsajiravand/helping-js/blob/master/src/value.js) | `isEmptyValue` — treats `null`, `undefined`, `''`, `[]`, `{}`, `false`, `0`, `NaN` as empty |
| [core/array](https://github.com/parsajiravand/helping-js/blob/master/src/array.js) | `arrayRemove`, `arrayDiff`, `splitArray`, `groupArray`, `arrayDistinct`, `arrayFlat`, `toArrayIfNot`, … |
| [core/object](https://github.com/parsajiravand/helping-js/blob/master/src/object.js) | `dotGet`, `dotSet` (blocks `__proto__` / `constructor` / `prototype` paths), `objectOnly`, `objectExcept`, `cloneObject`, … |
| [core/function](https://github.com/parsajiravand/helping-js/blob/master/src/function.js) | `resolveValueOrGetter`, `bindContext`, `mapObjectTree`, composition helpers |
| [core/async](https://github.com/parsajiravand/helping-js/blob/master/src/async.js) | `debounceTrailing`, `debounceImmediate`, `retry`, `promiseTimeout`, `executePromiseGetters`, … |
| [core/url](https://github.com/parsajiravand/helping-js/blob/master/src/url.js) | `pathJoin` (Node-safe), `getUrlParam` (optional URL string or current page in the browser) |
| [core/date](https://github.com/parsajiravand/helping-js/blob/master/src/date.js) | `cloneDate`, `addDate`, `getMonthStart` / `getMonthEnd`, `getCalendar`, `parseISO`, `isIsoFormat` |
| [core/advanced](https://github.com/parsajiravand/helping-js/blob/master/src/advanced.js) | `binarySearch`, `Cache`, `ArrayKeyMap`, `attachCache`, `easeInOutQuad`, `windowLoaded`, … |
| [core/tree](https://github.com/parsajiravand/helping-js/blob/master/src/tree.js) | `walkTreeData`, `TreeData` with safe `clone()` |
| [core/dom](https://github.com/parsajiravand/helping-js/blob/master/src/dom.js) | **Browser only** — `on`, `off`, `addClass`, `viewportPositionToFixed`, … Do not import in pure Node SSR bundles. |

Naming conflicts with other libraries: `core/types` keeps existing semantics (`isNumber`, `isNumeric`, …). See [HELPER_INVENTORY.md](https://github.com/parsajiravand/helping-js/blob/master/docs/HELPER_INVENTORY.md).

---

## Minimal examples

```javascript
import { strPad, between } from 'helping-js/core/number'
import { kebabCase } from 'helping-js/core/string'
import { dotSet, dotGet } from 'helping-js/core/object'
import { isEmptyValue } from 'helping-js/core/value'

const state = {}
dotSet(state, 'user.profile.id', 42)
console.log(kebabCase('FooBar'))       // 'foo-bar'
console.log(strPad('7', 3, '0'))        // '007'
console.log(between(150, 0, 100))      // 100
console.log(isEmptyValue(state.user)) // false
```

---

## Vue 3 (Composition API)

Debounce user input, format labels, and read nested config with `dotGet`:

```vue
<script setup>
import { ref, watch } from 'vue'
import { debounceTrailing } from 'helping-js/core/async'
import { titleCase } from 'helping-js/core/string'
import { dotGet } from 'helping-js/core/object'

const props = defineProps({ config: Object })
const query = ref('')
const heading = ref('')

const runSearch = debounceTrailing((q) => {
  heading.value = titleCase(q.trim() || 'search')
  // e.g. call API with q
}, 300)

watch(query, (v) => runSearch(v))

const apiBase = () => dotGet(props.config, 'api.baseUrl')
</script>
```

---

## React (hooks)

Memoize derived data with array/object helpers:

```jsx
import { useMemo, useState } from 'react'
import { arrayDistinct, splitArray } from 'helping-js/core/array'
import { objectOnly } from 'helping-js/core/object'

export function TagList({ items }) {
  const [page, setPage] = useState(0)
  const unique = useMemo(() => arrayDistinct(items), [items])
  const pages = useMemo(() => splitArray(unique, 10), [unique])
  const slice = pages[page] ?? []

  return (
    <ul>
      {slice.map((id) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  )
}

// Pick a subset of props for a child
export function passThemeProps(full) {
  return objectOnly(full, ['mode', 'density'])
}
```

---

## Express (Node)

Join path segments safely and reuse type helpers in middleware:

```javascript
const express = require('express')
const path = require('path')
const { pathJoin } = require('helping-js/core/url')
const { isString } = require('helping-js/core/types')

const app = express()
const publicDir = pathJoin(__dirname, 'public')

app.use(express.static(publicDir))

app.get('/health', (req, res) => {
  const tag = req.query.tag
  if (tag != null && !isString(tag)) {
    return res.status(400).json({ error: 'tag must be a string' })
  }
  res.json({ ok: true })
})
```

`pathJoin` normalizes slashes for URL-like segments; for filesystem paths you can still use `path.join` from Node — use whichever fits the use case.

---

## Browser-only (`core/dom`)

Import only in client code (Vite `import.meta.env.SSR`, Next.js `'use client'`, or Vue client components):

```javascript
import { on, addClass } from 'helping-js/core/dom'

const el = document.querySelector('#app')
if (el) {
  addClass(el, 'is-ready')
  const un = on(el, 'click', () => {
    console.log('clicked')
    un()
  })
}
```

---

## See also

- [Usage](/usage/) — install and ESM/CJS
- [Types](/types/) — type checkers
- [Form validation](/form-validation/) — `validate()` and preset
- [CHANGELOG](https://github.com/parsajiravand/helping-js/blob/master/CHANGELOG.md) — v3 helper modules
