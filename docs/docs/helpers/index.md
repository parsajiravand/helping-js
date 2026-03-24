# Helpers

Additional utilities (number, string, collections, async, dates, URL, tree, DOM). Import from `helping-js/core/<name>`.

| Subpath | Description |
| --- | --- |
| `core/number` | Random int/choice, clamping, `strPad` |
| `core/string` | Case transforms, `randString`, `reverseString` |
| `core/value` | `isEmptyValue` (null, `''`, `[]`, `{}`, `false`, `0`, `NaN`) |
| `core/array` | Remove, diff, split, distinct, flat, … |
| `core/object` | `dotGet` / `dotSet` (safe from `__proto__`), pick/omit, … |
| `core/function` | Getters, composition, `mapObjectTree` |
| `core/async` | Debounce, retry, batched promise getters |
| `core/url` | `pathJoin`, `getUrlParam` (URL string or browser `location`) |
| `core/date` | Clone, add, month bounds, `getCalendar`, `parseISO` |
| `core/advanced` | `binarySearch`, `Cache`, `ArrayKeyMap`, `windowLoaded` |
| `core/tree` | `walkTreeData`, `TreeData` |
| `core/dom` | **Browser** — events, classes, `viewportPositionToFixed` |

Conflict notes: existing `core/types` helpers keep their semantics; see [HELPER_INVENTORY.md](https://github.com/parsajiravand/helping-js/blob/master/docs/HELPER_INVENTORY.md) for cross-library naming.

```javascript
import { strPad } from 'helping-js/core/number'
import { kebabCase } from 'helping-js/core/string'
import { dotSet } from 'helping-js/core/object'

dotSet({}, 'user.name', 'Ada')
console.log(kebabCase('fooBar'), strPad('5', 3, '0'))
```
