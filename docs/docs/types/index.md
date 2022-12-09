# Types

check your code type and return Booleans

## Usage
1. You can import in your js file es6 (modules,vue,react,...)

```javascript
import { isString } from 'helping-js/core/types'

console.log(isString('test')) // true
console.log(isString(true)) // false
```
2. You can import in your js file es5 (nodejs)
```javascript
var { isString } = require('helping-js/core/types')

console.log(isString('test')) // true
console.log(isString(true)) // false
```
3. You can usage from CDN (only modules)
```javascript
import { isString } from 'https://unpkg.com/browse/helping-js/core/types.js'

console.log(isString('test')) // true
console.log(isString(true)) // false
