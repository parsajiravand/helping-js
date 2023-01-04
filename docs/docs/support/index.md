# Support

check your browser or server or phone support global variables.

## Usage
1. You can import in your js file es6 (modules,vue,react,...)

```javascript
import { HAS_WINDOW_SUPPORT } from 'helping-js/core/support'

console.log(HAS_WINDOW_SUPPORT) // true
```
2. You can import in your js file es5 (nodejs)
```javascript
var { HAS_WINDOW_SUPPORT } = require('helping-js/core/support')

console.log(HAS_WINDOW_SUPPORT) // true
```
3. You can usage from CDN (only modules)
```javascript
import { HAS_WINDOW_SUPPORT } from 'https://unpkg.com/browse/helping-js/core/support.js'

console.log(HAS_WINDOW_SUPPORT) // true
```

## Options

| Functions                    | Description                                                                    | 
| --------------------------   | ------------------------------------------------------------------------------ | 
| HAS_WINDOW_SUPPORT           | Return Boolean if support window object       | 
| HAS_DOCUMENT_SUPPORT         | Return Boolean if support document object       | 
| HAS_NAVIGATOR_SUPPORT        | Return Boolean if support navigator object       | 
| HAS_PROMISE_SUPPORT          | Return Boolean if support Promise        | 
| HAS_MUTATION_OBSERVER_SUPPORT| Return Boolean if support MutationObserver       | 
| IS_BROWSER                   | check if you are in browser or server       | 
 
| IS_JSDOM                     | Return Boolean if javascript dom is exist     | 
| IS_IE                        | Return Boolean if you are in InterntExplore or not       | 
| HAS_TOUCH_SUPPORT            | Return Boolean if touch support       | 
| HAS_POINTER_EVENT_SUPPORT    | Return Boolean if PointerEvent support       | 
| HAS_INTERACTION_OBSERVER_SUPPORT | Return Boolean if IntersectionObserverEntry support         | 
