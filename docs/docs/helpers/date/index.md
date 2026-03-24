# Date (`helping-js/core/date`)

Clone, add intervals, month bounds, a simple month grid, and ISO-ish parsing.

## Imports

```javascript
import {
  cloneDate,
  addDate,
  getMonthStart,
  getMonthEnd,
  getCalendar,
  parseISO,
  isIsoFormat,
} from 'helping-js/core/date'
```

## API

| Function | Role |
| --- | --- |
| `cloneDate(date)` | New `Date` with same time |
| `addDate(date, { years, months, days, hours, minutes, seconds })` | Mutable-style copy; returns new date |
| `getMonthStart` / `getMonthEnd` | Start/end of month |
| `getCalendar(year, month)` | Weeks of `{ date, label } | null` cells |
| `parseISO(str)` | `new Date(str)` or `null` if invalid |
| `isIsoFormat(str)` | Loose `YYYY-MM-DD` prefix check |

## Samples

**Shift a deadline**

```javascript
const end = addDate(new Date(), { days: 7 })
```

**Calendar UI month**

```javascript
const weeks = getCalendar(2026, 3) // March 2026
// weeks[0] is first row (7 cells); cells are null or { date, label }
```

**Express: parse date query**

```javascript
import { parseISO, isIsoFormat } from 'helping-js/core/date'

const since = req.query.since
const d = since && isIsoFormat(since) ? parseISO(since) : null
```

**Vue: month range**

```javascript
import { getMonthStart, getMonthEnd } from 'helping-js/core/date'

const start = getMonthStart(selectedDate)
const end = getMonthEnd(selectedDate)
```

[Back to Helpers overview](/helpers/)
