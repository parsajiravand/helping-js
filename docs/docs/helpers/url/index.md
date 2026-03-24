# URL (`helping-js/core/url`)

Path joining for URLs or POSIX-like segments, and query parameter reading (works with a URL string in Node; uses `window.location` in the browser when `url` is omitted).

## Imports

```javascript
import { pathJoin, getUrlParam } from 'helping-js/core/url'
```

## API

| Function | Role |
| --- | --- |
| `pathJoin(...parts)` | Join with `/`, normalise slashes |
| `getUrlParam(name, url?)` | Query value or `undefined`; in Node without `document`, pass `url` |

## Samples

**Static + route segments**

```javascript
pathJoin('/api', 'v1', 'users') // '/api/v1/users'
pathJoin('https://a.com/', '/b') // 'https://a.com/b'
```

**Express: build redirect or asset URL**

```javascript
import { pathJoin } from 'helping-js/core/url'

const base = process.env.PUBLIC_URL || ''
const asset = pathJoin(base, 'static', 'logo.png')
```

**Browser: read query**

```javascript
import { getUrlParam } from 'helping-js/core/url'

const tab = getUrlParam('tab') // current page
```

**Node: parse arbitrary URL string**

```javascript
const token = getUrlParam('token', 'https://app.example/cb?token=abc')
```

[Back to Helpers overview](/helpers/)
