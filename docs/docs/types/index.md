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
```

## Options

| Functions                | Description                                                            | 
| -------------------------- | ------------------------------------------------------------------------------ | 
| toType                     | Get Type of Value       | 
| toRawType                  | Ensure all props option syntax are normalized into the Object-based format. | 
| toRawTypeLC                | LowerCase  toRawType() function     | 
| isUndefined                | Check Undefined Type       | 
| isNull                     | Check Null Type       | 
| isEmptyString              | Check EmptyString      | 
| isUndefinedOrNull          | Check UndefinedOrNull Type       | 
| isUndefinedOrNullOrEmpty   | Check UndefinedOrNullOrEmpty  Type       | 
| isFunction                 | Check Fcuntion Type       | 
| isBoolean                  | Check Boolean Type       | 
| isString                   | Check String Type       | 
| isNumber                   | Check Number Type       | 
| isNumeric                  | Check Numeric                                  | 
| isPrimitive                | Check primitive                                   | 
| isArray                    | Check Array type                                   | 
| isObject                   | Check Object  type                                    | 
| isPlainObject              | Check PlainObject type ([object Object])                           | 
| isDate                     | Check Date                                    | 
| isEvent                    | Check Event                                    | 
| isFile                     | Check File                                   | 
| isRegExp                   | Check RegExp                                   | 
| isPromise                  | Check Promise                                    | 