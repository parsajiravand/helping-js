# helper-js → helping-js integration inventory

Maps helper-js exports to helping-js modules. **Skip** = use existing API; **Reuse** = import from existing module; **Port** = implemented in new file.

## Existing helping-js (do not duplicate behavior)

| helper-js | helping-js | Action |
|-----------|------------|--------|
| isArray, isString, isFunction, … | `core/types` | **Reuse** imports |
| glb, isDocumentExisted | `core/support`, `core/safe-types` | **Skip** — use `globalThis`, `HAS_DOCUMENT_SUPPORT` |
| isNumber / isNumeric / isObject / isPromise (different semantics) | `core/types` | **Skip** new names; optional future: `isBoxedNumber`, `isFiniteNumeric` |

## Phase 1 — `core/number`, `core/string`, `core/value`

| helper-js | Target | Notes |
|-----------|--------|-------|
| randInt, randChoice, between, notLessThan, notGreaterThan, strPad | `number.js` | strPad returns padded string (bug fixed) |
| studlyCase, kebabCase, snakeCase, camelCase, camelToWords, titleCase, randString, reverseString | `string.js` | Uses randChoice from number |
| empty | `value.js` as **isEmptyValue** | Avoid reserved name `empty` |

## Phase 2 — `core/array`, `core/object`

| helper-js | Target | Notes |
|-----------|--------|-------|
| arrayRemove, arrayRemoveBySortedIndexes, arrayAt, arrayFirst, arrayLast, arrayDiff, indexesOf, getArrayItemSiblingsByOffsets, toArrayIfNot, splitArray, groupArray, arrayDistinct, arrayBetween, arrayWithoutEnd, arrayFlat, arrayFilter, arrayWithout | `array.js` | arrayDiff second branch fixed to mirror first |
| cloneObject, objectMap, objectOnly, objectExcept, iterateAll, findAll, dotGet, dotSet, unset, assign*, objectAssign*, withoutUndefined, objectDefineProxyProperty, mapObjects, joinRows | `object.js` | dotSet keeps proto pollution guards |

## Phase 3 — `core/function`, `core/async`, `core/url`, `core/date`

| helper-js | Target | Notes |
|-----------|--------|-------|
| resolveValueOrGetter, executeWithCount, watchChange, bindContext, applyFinally, joinFunctionsByResult, joinFunctionsByNext | `function.js` | iterateAll imported from object |
| promiseTimeout, promisePin, waitTime, waitFor, retry, debounceTrailing, debounceImmediate, executePromiseGetters | `async.js` | debounceImmediate uses `...args` |
| pathJoin, getUrlParam | `url.js` | getUrlParam guarded for no document |
| cloneDate, addDate, getMonthStart/End, getCalendar, parseISO, isIsoFormat | `date.js` | |

## Phase 4 — `core/advanced`

| helper-js | Target | Notes |
|-----------|--------|-------|
| binarySearch, ArrayKeyMap, Cache, attachCache, easeInOutQuad, resolveArgsByType, waitTime (re-export if needed) | `advanced.js` | |
| mapObjectTree, walkTreeData, TreeData, findTreeData, … | Deferred or `tree.js` | High complexity; partial port optional |

## Phase 5 — `core/dom` (browser-only)

| helper-js | Target | Notes |
|-----------|--------|-------|
| on, off, once, createElementFromHTML, insertBefore/After, prependTo, appendTo, hasClass, addClass, removeClass, … | `dom.js` | Document “browser only”; no import in Node tests |

## Deferred / separate package

- CrossWindowEventProcessor, extended storage, full DOM surface — optional future package `helping-js-dom`.
