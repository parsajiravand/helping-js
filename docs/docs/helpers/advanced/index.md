# Advanced (`helping-js/core/advanced`)

Binary search, simple LRU-style cache, keyed maps, easing, argument resolution, and optional `window` load promise.

## Imports

```javascript
import {
  binarySearch,
  ArrayKeyMap,
  Cache,
  attachCache,
  easeInOutQuad,
  resolveArgsByType,
  windowLoaded,
} from 'helping-js/core/advanced'
```

## API

| Export | Role |
| --- | --- |
| `binarySearch(arr, target, compare?)` | Index or `-1` (numeric order default) |
| `ArrayKeyMap` | `set(item)`, `get(key)` by `keyFn(item)` |
| `Cache` | LRU-ish `get`/`set` with max size |
| `attachCache(fn, cache?)` | Memoize by `JSON.stringify(args)` |
| `easeInOutQuad(t)` | Easing for `t` in `[0,1]` |
| `resolveArgsByType(args, types)` | Simple overload-style parsing |
| `windowLoaded()` | Resolves when `load` fired or already complete; no-op in Node |

## Samples

**Sorted array lookup**

```javascript
const idx = binarySearch([1, 3, 5, 7], 5)
```

**Memoize expensive pure function**

```javascript
import { attachCache } from 'helping-js/core/advanced'

const expensive = attachCache((n) => fib(n))
```

**Browser: run after load**

```javascript
import { windowLoaded } from 'helping-js/core/advanced'

windowLoaded().then(() => initCharts())
```

**Express: not applicable** for `windowLoaded`; use `Cache` / `binarySearch` in any environment.

[Back to Helpers overview](/helpers/)
