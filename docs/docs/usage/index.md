# Usage

Simple utils for javascript

vue-client-recaptcha is a vannila-javascript with **no external depenendcies** which simplifies method
and usable variables,with supported es5 and new feature from javascript.



## Installation
```bash
npm install helping-js --save
```
```bash
yarn add helping-js
```
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