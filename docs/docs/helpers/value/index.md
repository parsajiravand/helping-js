# Value (`helping-js/core/value`)

Single helper: **`isEmptyValue`** — “empty” in the sense of common form defaults (aligned with helper-js `empty`), not `Object.is` empty.

## Import

```javascript
import { isEmptyValue } from 'helping-js/core/value'
```

## Semantics

Returns `true` for:

- `null`, `undefined`
- `''` (empty string)
- `[]` (empty array)
- `{}` (empty plain object)
- `false`
- `0`
- `NaN`

Returns `false` for non-empty strings, non-zero numbers, non-empty arrays/objects, `true`, etc.

## Samples

**Form validation**

```javascript
if (isEmptyValue(form.email)) {
  errors.email = 'Required'
}
```

**React: disable submit**

```jsx
import { isEmptyValue } from 'helping-js/core/value'

<button disabled={isEmptyValue(value)}>Save</button>
```

**Express: optional body field**

```javascript
import { isEmptyValue } from 'helping-js/core/value'

if (!isEmptyValue(req.body.notes)) {
  await saveNotes(req.body.notes)
}
```

For **type** checks (`isString`, `isPlainObject`, …) use [`helping-js/core/types`](/types/) instead.

[Back to Helpers overview](/helpers/)
