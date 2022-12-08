
<br>
<p align="center">
  <a href="https://github.com/parsajiravand/helping-js"><img src="https://i.postimg.cc/1fF5NyVV/captcha.png" alt="Demo" width="160"></a>
  <h2 align="center">helping-js</h2>
  <p align="center">simple utils for javascriptr</p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/helping-js">
    <img src="https://img.shields.io/npm/v/helping-js.svg?style=flat-square" alt="version">
  </a>
  <a href="https://github.com/parsajiravand/helping-js/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/helping-js.svg?style=flat-square" alt="MIT license">
  </a>
  <a href="http://npmcharts.com/compare/helping-js">
    <img src="https://img.shields.io/npm/dm/helping-js.svg?style=flat-square" alt="downloads">
  </a>
  <br>
  <a href="https://unpkg.com/helping-js/core/">
    <img src="http://img.badgesize.io/https://unpkg.com/helping-js/core?compression=gzip&label=gzip%20size&style=flat-square" alt="gzip size">
  </a>
  <a href="https://github.com/parsajiravand/helping-js/blob/master/package.json">
    <img src="https://img.shields.io/badge/dependencies-none-lightgrey.svg?style=flat-square" alt="no dependencies">
  </a>
  <a href="https://travis-ci.org/parsajiravand/helping-js">
    <img src="https://img.shields.io/travis/parsajiravand/helping-js.svg?style=flat-square" alt="travis">
  </a>
</p>

<p align="center">
  <br>
  <strong>
  <a style="font-size:20px" href="https://github.com/parsajiravand/helping-js"> 📚Document</a> ・
  <a style="font-size:20px" href="https://github.com/parsajiravand/helping-js">🔎 Demos</a> ・
  <a style="font-size:20px" href="https://github.com/parsajiravand/helping-js"> 🔬 Playground</a>
  </strong>
</p>

## Dependencies
- No need Dependency

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
const { isString } = require('helping-js/core/types')

console.log(isString('test')) // true
console.log(isString(true)) // false
```
3. You can usage from CDN
```javascript
import { isString } from 'https://unpkg.com/browse/helping-js/core/types.js'

console.log(isString('test')) // true
console.log(isString(true)) // false
```