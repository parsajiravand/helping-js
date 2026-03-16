# Safe Type

Safe access to browser globals (window, document, navigator, Element, File, etc.) without throwing in Node or unsupported environments.

## Usage
1. You can import in your js file es6 (modules,vue,react,...)

```javascript
import { WINDOW } from 'helping-js/core/safe-types'

console.log(WINDOW) //{all data in window object OR empty object(if not support window)}
```
2. You can import in your js file es5 (nodejs)
```javascript
var { WINDOW } = require('helping-js/core/safe-types')

console.log(WINDOW) // {all data in window object OR empty object (if window is not supported)}
```
3. You can use from CDN (ESM only)
```javascript
import { WINDOW } from 'https://unpkg.com/helping-js/core/safe-types.js'

console.log(WINDOW) // {all data in window object OR empty object (if window is not supported)}
```

## Options

| Functions                    | Description                                                                    | 
| --------------------------   | ------------------------------------------------------------------------------ | 
| WINDOW                       | safe call to window object (doesn't throw an error if the window doesn't exist)      | 
| DOCUMENT                     | safe call to document object (doesn't throw an error if the document doesn't exist)       | 
| NAVIGATOR                    | safe call to navigator object (doesn't throw an error if the navigator doesn't exist)      | 
| USER_AGENT                   | safe call to navigator.userAgent object (doesn't throw an error if the userAgent doesn't exist)    | 
| Element                       | safe call to Element object (doesn't throw an error if the window doesn't exist)      | 
| HTMLElement                       | safe call to HTMLElement object (doesn't throw an error if the window doesn't exist)      | 
| SVGElement                       | safe call to SVGElement object (doesn't throw an error if the window doesn't exist)      | 
| File                       | safe call to File object (doesn't throw an error if the window doesn't exist)      | 

