# Function (`helping-js/core/function`)

Higher-order helpers: resolve getters, limit call count, poll for changes, bind `this`, async `finally`, compose pipelines, and map a tree of plain objects/arrays.

## Imports

```javascript
import {
  resolveValueOrGetter,
  executeWithCount,
  watchChange,
  bindContext,
  applyFinally,
  joinFunctionsByResult,
  joinFunctionsByNext,
  mapObjectTree,
} from 'helping-js/core/function'
```

## API

| Function | Role |
| --- | --- |
| `resolveValueOrGetter(x, ...args)` | Call if function, else return value |
| `executeWithCount(fn, count)` | Stops returning results after `count` calls |
| `watchChange(getValue, fn, intervalMs?)` | `setInterval` poll; calls `fn` when reference changes |
| `bindContext(fn, ctx)` | `fn.bind(ctx)` |
| `applyFinally(asyncFn, onFinally)` | Async wrapper; runs `onFinally` after completion |
| `joinFunctionsByResult(...fns)` | Last result wins (sequential void-ish) |
| `joinFunctionsByNext(...fns)` | Left-to-right `r = fn(r)` reducer |
| `mapObjectTree(obj, mapper)` | Immutable map over nested plain data |

## Samples

**Config or thunk**

```javascript
const port = resolveValueOrGetter(cfg.port, cfg)
```

**Map API payload**

```javascript
const next = mapObjectTree(payload, (value, key) =>
  key === 'email' ? String(value).trim() : value
)
```

**Express middleware with cleanup**

```javascript
import { applyFinally } from 'helping-js/core/function'

const handler = applyFinally(async (req, res) => {
  await work()
}, () => release(req.id))
```

[Back to Helpers overview](/helpers/)
