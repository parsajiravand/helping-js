# Regex

Check Regex Patterns in JavaScript with helping-js. 

##### 🚀 Features

- 🎪 **Regex Patterns**: Check regex patterns in JavaScript
- 🦾 **Include Most Useful**:  Include most useful regex patterns
- 🌎 **No bundler required**: Usable via CDN
- 🔩 **Flexible**: Configurable event filters and targets

## Usage

1. You can import in your js file es6 (modules,vue,react,...)

```javascript
import { RX_HREF } from "helping-js/core/regex"; // Check URL

const value = "https://github.com/parsajiravand/helping-js";
if (RX_HREF.test(value)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
```

2. You can import in your js file es5 (nodejs)

```javascript
const { RX_HREF } = require("helping-js/core/regex"); // Check URL

const value = "https://github.com/parsajiravand/helping-js";
if (RX_HREF.test(value)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
```

3. You can usage from CDN (only modules)

```javascript
import { RX_HREF } from "https://unpkg.com/browse/helping-js/core/regex.js";

const value = "https://github.com/parsajiravand/helping-js";
if (RX_HREF.test(value)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
```

## Sample
#### RX_ARRAY_NOTATION

This constant represents a regular expression pattern for checking array notation.

Example usage:

```javascript
import { RX_ARRAY_NOTATION } from "helping-js/core/regex";
const regex = RX_ARRAY_NOTATION;
const str = "array[0]";
console.log(regex.test(str)); // Output: true
```

#### RX_DIGITS

This constant represents a regular expression pattern for checking digits.

Example usage:

```javascript
import { RX_DIGITS } from "helping-js/core/regex";
const regex = RX_DIGITS;
const str = "123";
console.log(regex.test(str)); // Output: true
```

#### RX_EXTENSION

This constant represents a regular expression pattern for checking file extension.

Example usage:
```javascript
import { RX_EXTENSION } from "helping-js/core/regex";
const regex = RX_EXTENSION;
const str = '.js';
console.log(regex.test(str)); // Output: true
```

#### RX_HASH

This constant represents a regular expression pattern for checking hash.

Example usage:
```javascript
import { RX_HASH } from "helping-js/core/regex";
const regex = RX_HASH;
const str = '#test';
console.log(regex.test(str)); // Output: true
```

#### RX_HASH_ID

This constant represents a regular expression pattern for checking hash id.

Example usage:
```javascript
import { RX_HASH_ID } from "helping-js/core/regex";
const regex = RX_HASH_ID;
const str = '#test';
console.log(regex.test(str)); // Output: true
```

#### RX_HTML_TAGS

This constant represents a regular expression pattern for checking HTML tags.

Example usage:
```javascript
import { RX_HTML_TAGS } from "helping-js/core/regex";
const regex = RX_HTML_TAGS;
const str = '<div>';
console.log(regex.test(str)); // Output: true
```

#### RX_HYPHENATE

This constant represents a regular expression pattern for checking hyphenate.

Example usage:
```javascript
import { RX_HYPHENATE } from "helping-js/core/regex";
const regex = RX_HYPHENATE;
const str = 'teSt';
console.log(regex.test(str)); // Output: true
```

#### RX_LOWER_UPPER

This constant represents a regular expression pattern for checking lower upper.

Example usage:
```javascript
import { RX_LOWER_UPPER } from "helping-js/core/regex";
const regex = RX_LOWER_UPPER;
const str = 'testTAt';
console.log(regex.test(str)); // Output: true
```

#### RX_NUMBER

This constant represents a regular expression pattern for checking number.

Example usage:
```javascript
import { RX_NUMBER } from "helping-js/core/regex";
const regex = RX_NUMBER;
const str = '123123';
console.log(regex.test(str)); // Output: true
```

#### RX_PLUS

This constant represents a regular expression pattern for checking plus.

Example usage:
```javascript
import { RX_PLUS } from "helping-js/core/regex";
const regex = RX_PLUS;
const str = '+';
console.log(regex.test(str)); // Output: true
```

#### RX_REGEXP_REPLACE

This constant represents a regular expression pattern for checking regexp replace.

Example usage:
```javascript
import { RX_REGEXP_REPLACE } from "helping-js/core/regex";
const regex = RX_REGEXP_REPLACE;
const str = '[-/\\^$*+?.()|[\]{}]';
console.log(regex.test(str)); // Output: true
```

#### RX_SPACES

This constant represents a regular expression pattern for checking spaces.

Example usage:
```javascript
import { RX_SPACES } from "helping-js/core/regex";
const regex = RX_SPACES;
const str = '[\s\uFEFF\xA0]';
console.log(regex.test(str)); // Output: true
```

#### RX_SPACE_SPLIT

This constant represents a regular expression pattern for checking space split.

Example usage:
```javascript
import { RX_SPACE_SPLIT } from "helping-js/core/regex";
const regex = RX_SPACE_SPLIT;
const str = '\s+';
console.log(regex.test(str)); // Output: true
```

#### RX_START_SPACE_WORD

This constant represents a regular expression pattern for checking start space word.

Example usage:
```javascript
import { RX_START_SPACE_WORD } from "helping-js/core/regex";
const regex = RX_START_SPACE_WORD;
const str = 'test';
console.log(regex.test(str)); // Output: true
```

#### RX_TRIM_LEFT

This constant represents a regular expression pattern for checking trim left.

Example usage:
```javascript
import { RX_TRIM_LEFT } from "helping-js/core/regex";
const regex = RX_TRIM_LEFT;
const str = '\s+';
console.log(regex.test(str)); // Output: true
```

#### RX_TRIM_RIGHT

This constant represents a regular expression pattern for checking trim right.

Example usage:
```javascript
import { RX_TRIM_RIGHT } from "helping-js/core/regex";
const regex = RX_TRIM_RIGHT;
const str = '\s+';
console.log(regex.test(str)); // Output: true
```

#### RX_UNDERSCORE

This constant represents a regular expression pattern for checking underscore.

Example usage:
```javascript
import { RX_UNDERSCORE } from "helping-js/core/regex";
const regex = RX_UNDERSCORE;
const str = '\_';
console.log(regex.test(str)); // Output: true
```

#### RX_UN_KEBAB

This constant represents a regular expression pattern for checking un kebab.

Example usage:
```javascript
import { RX_UN_KEBAB } from "helping-js/core/regex";
const regex = RX_UN_KEBAB;
const str = '-+charchter charchter';
console.log(regex.test(str)); // Output: true
```

#### RX_DATE

This constant represents a regular expression pattern for checking date.

Example usage:
```javascript
import { RX_DATE } from "helping-js/core/regex";
const regex = RX_DATE;
const str = '1999-01-20T22:51:49.118Z';
console.log(regex.test(str)); // Output: true
```

#### RX_TIME

This constant represents a regular expression pattern for checking time.

Example usage:
```javascript
import { RX_TIME } from "helping-js/core/regex";
const regex = RX_TIME;
const str = '13:00:00';
console.log(regex.test(str)); // Output: true
```

#### RX_HREF

This constant represents a regular expression pattern for checking href.

Example usage:
```javascript
import { RX_HREF } from "helping-js/core/regex";
const regex = RX_HREF;
const str = 'www.google.com';
console.log(regex.test(str)); // Output: true
```

#### RX_ENCODED_COMMA

This constant represents a regular expression pattern for checking encoded comma.

Example usage:
```javascript
import { RX_ENCODED_COMMA } from "helping-js/core/regex";
const regex = RX_ENCODED_COMMA;
const str = '%2C';
console.log(regex.test(str)); // Output: true
```

#### RX_ENCODE_REVERSE

This constant represents a regular expression pattern for checking encode reverse.

Example usage:
```javascript
import { RX_ENCODE_REVERSE } from "helping-js/core/regex";
const regex = RX_ENCODE_REVERSE;
const str = '!';
console.log(regex.test(str)); // Output: true
```

#### RX_QUERY_START

This constant represents a regular expression pattern for checking query start.

Example usage:
```javascript
import { RX_QUERY_START } from "helping-js/core/regex";
const regex = RX_QUERY_START;
const str = '?';
console.log(regex.test(str)); // Output: true
```

#### RX_ASPECT

This constant represents a regular expression pattern for checking aspect.

Example usage:
```javascript
import { RX_ASPECT } from "helping-js/core/regex";
const regex = RX_ASPECT;
const str = '1:1';
console.log(regex.test(str)); // Output: true
```

#### RX_ASPECT_SEPARATOR

This constant represents a regular expression pattern for checking aspect separator.

Example usage:
```javascript
import { RX_ASPECT_SEPARATOR } from "helping-js/core/regex";
const regex = RX_ASPECT_SEPARATOR;
const str = ':';
console.log(regex.test(str)); // Output: true
```

#### RX_STRIP_LOCALE_MODS

This constant represents a regular expression pattern for checking strip locale mods.

Example usage:
```javascript
import { RX_STRIP_LOCALE_MODS } from "helping-js/core/regex";
const regex = RX_STRIP_LOCALE_MODS;
const str = '-u-';
console.log(regex.test(str)); // Output: true
```
