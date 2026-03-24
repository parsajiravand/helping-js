# Number (`helping-js/core/number`)

Random numbers, clamping, and left string padding. No dependencies.

## Imports

```javascript
import {
  randInt,
  randChoice,
  between,
  notLessThan,
  notGreaterThan,
  strPad,
} from 'helping-js/core/number'
```

## API

| Function | Role |
| --- | --- |
| `randInt(min, max)` | Inclusive random integer |
| `randChoice(arr)` | Random element from a non-empty array |
| `between(n, min, max)` | Clamp `n` to `[min, max]` |
| `notLessThan(n, min)` | `Math.max(n, min)` |
| `notGreaterThan(n, max)` | `Math.min(n, max)` |
| `strPad(str, length, padChar?)` | Left-pad with `padChar` (default space) until `length` |

## Samples

**IDs and scores**

```javascript
const id = randInt(1000, 9999)
const pick = randChoice(['a', 'b', 'c'])
const pct = between(Number(userInput), 0, 100)
```

**Display**

```javascript
strPad(7, 3, '0') // '007'
strPad('x', 4, '-') // '---x'
```

**Vue: random pick in setup**

```javascript
import { randChoice } from 'helping-js/core/number'

const quotes = ['a', 'b', 'c']
const daily = randChoice(quotes)
```

**Express: clamp pagination**

```javascript
import { between } from 'helping-js/core/number'

const page = between(parseInt(req.query.page, 10) || 1, 1, 1000)
```

[Back to Helpers overview](/helpers/)
