# Object (`helping-js/core/object`)

Pick/omit, deep path get/set, JSON clone, and iteration over plain objects. **`dotSet` rejects `__proto__`, `constructor`, and `prototype` segments** to avoid prototype pollution.

## Imports

```javascript
import {
  cloneObject,
  objectMap,
  objectOnly,
  objectExcept,
  iterateAll,
  findAll,
  dotGet,
  dotSet,
  unset,
  assign,
  objectAssign,
  objectAssignField,
  withoutUndefined,
  objectDefineProxyProperty,
  mapObjects,
  joinRows,
} from 'helping-js/core/object'
```

## Highlights

| Function | Role |
| --- | --- |
| `dotGet(obj, path)` | `path` string (`'a.b'`) or array of keys |
| `dotSet(obj, path, value)` | Creates nested plain objects; unsafe keys no-op |
| `objectOnly(obj, keys)` | Pick existing keys |
| `objectExcept(obj, keys)` | Omit keys |
| `cloneObject(obj)` | `JSON.parse(JSON.stringify(obj))` |
| `mapObjects(rows, keyField)` | `{ [id]: row }` |

## Samples

**Nested config**

```javascript
const cfg = {}
dotSet(cfg, 'server.port', 3000)
dotGet(cfg, 'server.port') // 3000
```

**API response subset**

```javascript
const publicUser = objectOnly(user, ['id', 'name', 'email'])
```

**Express: merge defaults**

```javascript
import { objectAssign } from 'helping-js/core/object'

const opts = objectAssign({ limit: 10 }, req.query)
```

**React: row map by id**

```javascript
import { mapObjects } from 'helping-js/core/object'

const byId = mapObjects(rows, 'id')
const row = byId[selectedId]
```

[Back to Helpers overview](/helpers/)
