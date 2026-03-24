# DOM (`helping-js/core/dom`)

**Browser-only.** Event helpers, class toggling, insertion helpers, and `viewportPositionToFixed`. Functions guard `document` so importing in Node usually does not throw, but **avoid** this module in SSR entry points if you want zero browser assumptions.

## Imports

```javascript
import {
  createElementFromHTML,
  on,
  off,
  once,
  insertBefore,
  insertAfter,
  prependTo,
  appendTo,
  hasClass,
  addClass,
  removeClass,
  viewportPositionToFixed,
} from 'helping-js/core/dom'
```

## API (summary)

| Function | Role |
| --- | --- |
| `createElementFromHTML(html)` | First node from template |
| `on` / `off` / `once` | Listeners; `on` returns unsubscribe |
| `insertBefore` / `insertAfter` / `prependTo` / `appendTo` | Accept selector string or element |
| `hasClass` / `addClass` / `removeClass` | Class helpers |
| `viewportPositionToFixed(el, { x, y })` | Sets `position:fixed` and `left`/`top` (y uses `y`) |

## Samples

**Mount and listen**

```javascript
import { createElementFromHTML, on } from 'helping-js/core/dom'

const node = createElementFromHTML('<button type="button">OK</button>')
document.body.appendChild(node)
const un = on(node, 'click', () => {
  console.log('ok')
  un()
})
```

**Vue / React**

Use in `onMounted` / `useEffect` only on the client:

```javascript
import { addClass } from 'helping-js/core/dom'

addClass(el, 'is-active')
```

**Next.js**

```javascript
'use client'
import { on } from 'helping-js/core/dom'
```

[Back to Helpers overview](/helpers/)
