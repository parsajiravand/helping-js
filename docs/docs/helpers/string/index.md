# String (`helping-js/core/string`)

Case conversion, random string, and reversal. Uses `randInt` internally for `randString`.

## Imports

```javascript
import {
  studlyCase,
  kebabCase,
  snakeCase,
  camelCase,
  camelToWords,
  titleCase,
  randString,
  reverseString,
} from 'helping-js/core/string'
```

## API

| Function | Role |
| --- | --- |
| `studlyCase(str)` | Uppercase first character |
| `kebabCase(str)` | `foo-bar-baz` |
| `snakeCase(str)` | `foo_bar_baz` |
| `camelCase(str)` | `fooBarBaz` |
| `camelToWords(str)` | Inserts spaces before capitals (string) |
| `titleCase(str)` | Title-cases words |
| `randString(length)` | Random alphanumeric string |
| `reverseString(str)` | Reverses characters |

## Samples

**CSS / JSON keys**

```javascript
kebabCase('userName') // 'user-name'
camelCase('hello world') // 'helloWorld'
```

**React: className from prop**

```javascript
import { kebabCase } from 'helping-js/core/string'

function Field({ name }) {
  return <div className={`field-${kebabCase(name)}`} />
}
```

**Vue: display title**

```javascript
import { titleCase } from 'helping-js/core/string'

const label = titleCase('hello world') // 'Hello World'
```

**Unique token**

```javascript
import { randString } from 'helping-js/core/string'

const token = randString(32)
```

[Back to Helpers overview](/helpers/)
