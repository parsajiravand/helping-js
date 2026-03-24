# Array (`helping-js/core/array`)

Array utilities: indexing, diffing, chunking, deduping, filtering. Uses `Array.isArray` via [`isArray` from `core/types`](/types/).

## Imports

```javascript
import {
  arrayRemove,
  arrayRemoveBySortedIndexes,
  arrayAt,
  arrayFirst,
  arrayLast,
  arrayDiff,
  indexesOf,
  getArrayItemSiblingsByOffsets,
  toArrayIfNot,
  splitArray,
  groupArray,
  arrayDistinct,
  arrayBetween,
  arrayWithoutEnd,
  arrayFlat,
  arrayFilter,
  arrayWithout,
} from 'helping-js/core/array'
```

## Highlights

| Function | Role |
| --- | --- |
| `arrayAt(arr, n)` | Supports negative indices |
| `arrayDiff(a, b)` | Sorted multiset diff `[onlyInA, onlyInB]` |
| `splitArray(arr, n)` | Fixed-size chunks |
| `groupArray(arr, getMark)` | `Map` of groups |
| `arrayDistinct(arr)` | Unique values (Set) |
| `arrayWithout(arr, ...items)` | Exclude values |

## Samples

**Pagination chunks**

```javascript
const pages = splitArray(items, 20)
const page0 = pages[0] ?? []
```

**Remove duplicates**

```javascript
const ids = arrayDistinct(rawIds)
```

**Sorted diff (inputs must be sorted)**

```javascript
const [onlyLeft, onlyRight] = arrayDiff([1, 2, 2], [2, 3])
```

**React: normalise prop to array**

```javascript
import { toArrayIfNot } from 'helping-js/core/array'

const list = toArrayIfNot(props.id) // string | string[] -> string[]
```

**Vue: neighbours**

```javascript
import { getArrayItemSiblingsByOffsets } from 'helping-js/core/array'

const [prev, next] = getArrayItemSiblingsByOffsets(rows, activeRow, [-1, 1])
```

[Back to Helpers overview](/helpers/)
