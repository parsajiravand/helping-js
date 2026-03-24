# Async (`helping-js/core/async`)

Promises, delays, polling, debounce, retries, and batched async calls.

## Imports

```javascript
import {
  promiseTimeout,
  promisePin,
  waitTime,
  waitFor,
  retry,
  debounceTrailing,
  debounceImmediate,
  executePromiseGetters,
  continuous,
} from 'helping-js/core/async'
```

## API

| Function | Role |
| --- | --- |
| `promiseTimeout(ms, value?)` | Resolve after `ms` |
| `promisePin(promise)` | Returns getter for settled value / error |
| `waitTime(ms)` | Same as `promiseTimeout(ms)` |
| `waitFor(condition, interval?, timeout?)` | Poll async/sync predicate |
| `retry(fn, times?, delay?)` | Retry failed async `fn` |
| `debounceTrailing(fn, wait)` | Trailing debounce |
| `debounceImmediate(fn, wait)` | Leading + trailing pattern |
| `executePromiseGetters(getters)` | Run in batches of 10 |
| `continuous(fn, interval)` | Loop `fn` until stopper called |

## Samples

**Debounce search**

```javascript
import { debounceTrailing } from 'helping-js/core/async'

const search = debounceTrailing((q) => api.search(q), 300)
input.addEventListener('input', (e) => search(e.target.value))
```

**Vue 3**

```javascript
import { debounceTrailing } from 'helping-js/core/async'

const emitSearch = debounceTrailing((q) => emit('search', q), 250)
```

**React**

```javascript
import { useMemo, useRef } from 'react'
import { debounceTrailing } from 'helping-js/core/async'

const debounced = useMemo(
  () => debounceTrailing((q) => setResult(q), 300),
  []
)
```

**Retry flaky fetch**

```javascript
import { retry } from 'helping-js/core/async'

const data = await retry(() => fetch('/api/x').then((r) => r.json()), 3, 200)
```

[Back to Helpers overview](/helpers/)
