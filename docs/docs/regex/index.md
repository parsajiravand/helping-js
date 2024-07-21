# Regex

Check Regex Patterns in JavaScript with helping-js.

##### 🚀 Features

- 🎪 **Regex Patterns**: Check regex patterns in JavaScript
- 🦾 **Include Most Useful**: Include most useful regex patterns
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


# JavaScript Regex Constants

| Title| Const                           | Regex                        | Sample            | Description                   |
|-----------------------------|---------------------------------|------------------------------|-------------------|-----------------------------------------------|
| Array Notation      | RX_ARRAY_NOTATION               |  `/\[(\d+)]/g`               | `array[0]`        | Get array notation                            |
| Digits              | RX_DIGITS                       |  `/^\d+$/`                   | `123`             | Digits                                        |
| Extension           | RX_EXTENSION                    |  `/^\..+/`                   | `.test`           | File extension                                |
| Hash                | RX_HASH                         |  `/^#/`                      | `#test`           | Hash                                          |
| Hash ID             | RX_HASH_ID                      |  `/^#[A-Za-z]+[\w\-:.]*$/`   | `#test`           | Hash ID                                       |
| HTML Tags           | RX_HTML_TAGS                    |  `/(<([^>]+)>)/gi`           | `<div>`           | HTML tags                                     |
| Hyphenate           | RX_HYPHENATE                    |  `/\B([A-Z])/g`              | `teSt`            | Hyphenate                                     |
| Lower Upper         | RX_LOWER_UPPER                  |  `/([a-z])([A-Z])/g`         | `testTAt`         | Lower before upper                            |
| Number              | RX_NUMBER                       |  `/^[0-9]*\.?[0-9]+$/`       | `123123`          | Just number                                   |
| Float Number        | RX_FLOAT_NUMBER                 |  `/^\d+(\.\d+)?$|^\d+\.$/`   | `123.123`         | Float number                                  |
| Plus                | RX_PLUS                         |  `/\+/g`                     | `+`               | Get plus                                      |
| Regexp Replace      | RX_REGEXP_REPLACE                |  `/[-/\\^$*+?.()|[\]{}]/g`   | `[-/\\^$*+?.()|[]{}]` | Check [-/\\^$*+?.()|[\]{}] |
| Spaces              | RX_SPACES                       |  `/[\s\uFEFF\xA0]+/g`        | `[s\uFEFF\xA0]`   | Get spaces                                    |
| Space Split         | RX_SPACE_SPLIT                  |  `/\s+/`                     | `s+`              | First split spaces                            |
| Start Space Word    | RX_START_SPACE_WORD             |  `/(^)(\w)/g`                | `test`            | Get start space+charchter space charachters  |
| Trim Left           | RX_TRIM_LEFT                    |  `/^\s+/`                    | `s+`              | Get spaces from start                         |
| Trim Right          | RX_TRIM_RIGHT                   |  `/\s+$/`                    | `s+`              | Get spaces from end                           |
| Underscore          | RX_UNDERSCORE                   |  `/_/g`                      | `_`               | Get _                                         |
| Un Kebab            | RX_UN_KEBAB                     |  `/-\w/g`                    | `-\w`             | Get -+charchter charchter                     |
| Date                | RX_DATE                         |  `/^\d+-\d\d?-\d\d?(?:\s|T|$)/` | `1999-01-20T22:51:49.118Z` | Get time first slice |
| Time                | RX_TIME                         |  `/^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/` | `13:00:00` | Time string RegEx (optional seconds) |
| Href                | RX_HREF                         |  `/^.*(#[^#]+)$/`            | `www.google.com`  | HREFs must end with a hash followed by at least one non-hash character |
| Encoded Comma       | RX_ENCODED_COMMA                |  `/%2C/g`                    | `%2C`            | Encoded comma                                 |
| Aspect              | RX_ASPECT                       |  `/^\d+(\.\d*)?[/:]\d+(\.\d*)?$/` | `1.5`         | Aspect                                        |
| Aspect Separator    | RX_ASPECT_SEPARATOR             |  `/[/:]/`                    | `:`               | Aspect separator                              |
| Strip Locale Mods   | RX_STRIP_LOCALE_MODS            |  `/-u-.+/`                   | `-u-`             | Strip locale unicode extensions               |
| Strip Locale Mods Global | RX_STRIP_LOCALE_MODS_GLOBAL |  `/-u-.+/g`                  | `-u-`             | Strip locale unicode extensions global        |
| Locale Mods         | RX_LOCALE_MODS                  |  `/-u-.+/`                   | `-u-`             | Locale unicode extensions                     |
| Locale Mods Global  | RX_LOCALE_MODS_GLOBAL           |  `/-u-.+/g`                  | `-u-`             | Locale unicode extensions global              |
| Locale Mods Start   | RX_LOCALE_MODS_START            |  `/^-u-.+/`                  | `-u-`             | Locale unicode extensions start               |
| Locale Mods Start Global | RX_LOCALE_MODS_START_GLOBAL |  `/^-u-.+/g`                 | `-u-`             | Locale unicode extensions start global        |
| Locale Mods End     | RX_LOCALE_MODS_END              |  `/-u-.+$/`                  | `-u-`             | Locale unicode extensions end                 |
| Locale Mods End Global | RX_LOCALE_MODS_END_GLOBAL     |  `/-u-.+$/g`                 | `-u-`             | Locale unicode extensions end global          |
| Locale Mods Split   | RX_LOCALE_MODS_SPLIT            |  `/-u-/`                     | `-u-`             | Locale unicode extensions split               |
| Locale Mods Split Global | RX_LOCALE_MODS_SPLIT_GLOBAL |  `/-u-/g`                    | `-u-`             | Locale unicode extensions split global        |
| Locale Mods Split Start | RX_LOCALE_MODS_SPLIT_START    |  `/^-u-/`                    | `-u-`             | Locale unicode extensions split start         |
| Locale Mods Split Start Global | RX_LOCALE_MODS_SPLIT_START_GLOBAL |  `/^-u-/g` | `-u-` | Locale unicode extensions split start global |
| Locale Mods Split End | RX_LOCALE_MODS_SPLIT_END      |  `/-u-$/`                    | `-u-`             | Locale unicode extensions split end           |
| Locale Mods Split End Global | RX_LOCALE_MODS_SPLIT_END_GLOBAL |  `/-u-$/g`                 | `-u-`             | Locale unicode extensions split end global    |
| Uppercase           | RX_UPPERCASE                    |  `/^[A-Z]+$/`                | `TEST`            | Uppercase letters                             |
| Lowercase           | RX_LOWERCASE                    |  `/^[a-z]+$/`                | `test`            | Lowercase letters                             |
| Email               | RX_EMAIL                        |  `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | `
| URL                 | RX_URL                          |  `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i` | `https://www.google.com` | URL format |
| URL Path            | RX_URL_PATH                     |  `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i` | `https://www.google.com` | URL path format |
| URL Query           | RX_URL_QUERY                    |  `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i` | `https://www.google.com` | URL query format |
| URL Fragment        | RX_URL_FRAGMENT                 |  `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i` | `https://www.google.com` | URL fragment format |
| IP                  | RX_IP                           |  `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i` | `https://www.google.com` | IP address |
| IPv4                | RX_IPV4                         |  `/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/` | `
| IPv6                | RX_IPV6                         |  `/([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)$/` | `
| Hex Color           | RX_HEX_COLOR                    |  `/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/` | `#000` | Hex color code |
| UUID                | RX_UUID                         |  `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i` | `00000000-0000-0000-0000-000000000000` | UUID format |
| UUID V1             | RX_UUID_V1                      |  `/^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i` | `00000000-0000-1000-8000-000000000000` | UUID v1 format |
| UUID V2             | RX_UUID_V2                      |  `/^[0-9a-f]{8}-[0-9a-f]{4}-2[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i` | `00000000-0000-2000-8000-000000000000` | UUID v2 format |
| UUID V3             | RX_UUID_V3                      |  `/^[0-9a-f]{8}-[0-9a-f]{4}-3[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i` | `00000000-0000-3000-8000-000000000000` | UUID v3 format |
| UUID V4             | RX_UUID_V4                      |  `/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i` | `00000000-0000-4000-8000-000000000000` | UUID v4 format |
| UUID V5             | RX_UUID_V5                      |  `/^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i` | `00000000-0000-5000-8000-000000000000` | UUID v5 format |
| Phone               | RX_PHONE                        |  `/^\+?[0-9]{1,4}?[-. ]?\(?[0-9]{1,3}\)?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}$/` | `+1 (555) 555-5555` | Phone number |
| Credit Card         | RX_CREDIT_CARD                  |  `/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/` | `4111111111111111` | Credit card number |
| SSN                 | RX_SSN                          |  `/^\d{3}-\d{2}-\d{4}$/`    | `123-45-6789`     | Social security number |
| SSN Partial         | RX_SSN_PARTIAL                  |  `/^\d{3}-\d{2}-\d{1,4}$/`  | `123-45-6`       | Partial social security number |
| SSN Last Four       | RX_SSN_LAST_FOUR                |  `/^\d{4}$/`                 | `6789`            | Last four of social security number |
| SSN Full            | RX_SSN_FULL                     |  `/^\d{9}$/`                 | `123456789`       | Full social security number |
| SSN Full Dash       | RX_SSN_FULL_DASH                |  `/^\d{3}-\d{2}-\d{4}$/`     | `123-45-6789`     | Full social security number with dashes |
| SSN Full Space      | RX_SSN_FULL_SPACE               |  `/^\d{3} \d{2} \d{4}$/`     | `123 45 6789`     | Full social security number with spaces |
| ISO Date            | RX_ISO_DATE                     |  `/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/` | `1999-01-20T22:51:49.118Z` | ISO date format |
| ISO Date Time       | RX_ISO_DATE_TIME                |  `/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/` | `1999-01-20T22:51:49` | ISO date time format |
| ISO Date Time MS    | RX_ISO_DATE_TIME_MS             |  `/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{1,3}$/` | `1999-01-20T22:51:49.118` | ISO date time with milliseconds |
| ISO Date Time TZ    | RX_ISO_DATE_TIME_TZ             |  `/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z|[+-]\d{2}:\d{2}$/` | `1999-01-20T22:51:49Z` | ISO date time with time zone |
| ISO Date Time MS TZ | RX_ISO_DATE_TIME_MS_TZ          |  `/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{1,3}Z|[+-]\d{2}:\d{2}$/` | `1999-01-20T22:51:49.118Z` | ISO date time with milliseconds and time zone |
| Time 24H            | RX_TIME_24H                     |  `/^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/` | `13:00` | 24-hour time format |
| Time 24H MS         | RX_TIME_24H_MS                  |  `/^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9].\d{1,3}$/` | `13:00:00.000` | 24-hour time format with milliseconds |
| Time 24H TZ         | RX_TIME_24H_TZ                  |  `/^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]Z|[+-]\d{2}:\d{2}$/` | `13:00:00Z` | 24-hour time format with time zone |
| HTML Comment     | RX_HTML_COMMENT                 |  /<!--(.*?)-->/g | `<!-- test -->` | HTML comment |
| HTML Tag         | RX_HTML_TAG                     |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag |
| HTML Tag Attribute | RX_HTML_TAG_ATTRIBUTE          |  /([a-z-]+)="([^"]*)"/gi | `class="test"` | HTML tag attribute |
| HTML Tag ID      | RX_HTML_TAG_ID                  |  /id="([^"]*)"/gi | `id="test"` | HTML tag ID |
| HTML Tag Class   | RX_HTML_TAG_CLASS               |  /class="([^"]*)"/gi | `class="test"` | HTML tag class |
| HTML Tag Name    | RX_HTML_TAG_NAME                |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag name |
| HTML Tag Content | RX_HTML_TAG_CONTENT             |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag content |
| HTML Tag Self Closing | RX_HTML_TAG_SELF_CLOSING     |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag self closing |
| HTML Tag Start   | RX_HTML_TAG_START               |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag start |
| HTML Tag End     | RX_HTML_TAG_END                 |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag end |
| HTML Tag Empty   | RX_HTML_TAG_EMPTY               |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag empty |
| HTML Tag Comment | RX_HTML_TAG_COMMENT             |  /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gi | `<div>test</div>` | HTML tag comment |
| File Path        | RX_FILE_PATH                    |  /^(\/?[\w\-]+)+\/?$/ | `/path/to/file` | File path |
| File Path Windows | RX_FILE_PATH_WINDOWS            |  /^(?:[a-zA-Z]:)?[\\/](?:[^\\/]+[\\/])*[^\\/]+$/ | `C:\path\to\file` | File path for Windows |
| File Path Unix   | RX_FILE_PATH_UNIX               |  /^\/(?:[^/]+\/)*[^/]+$/ | `/path/to/file` | File path for Unix |
| File Path Mac    | RX_FILE_PATH_MAC                |  /^\/(?:[^/]+\/)*[^/]+$/ | `/path/to/file` | File path for Mac |
| JS Identifier    | RX_JS_IDENTIFIER                |  /^[$A-Z_][0-9A-Z_$]*$/i | `test` | Valid JavaScript identifier |
| Leading Trailing Whitespace | RX_LEADING_TRAILING_WHITESPACE |  /^\s+|\s+$/g | ` test ` | Leading and trailing whitespace |
| JSON String      | RX_JSON_STRING                  |  /"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"/ | `"test"` | JSON string |
| JSON Number      | RX_JSON_NUMBER                  |  /-?\d*\.?\d+/ | `123` | JSON number |
| JSON Boolean     | RX_JSON_BOOLEAN                 |  /true|false/ | `true` | JSON boolean |
| JSON Null        | RX_JSON_NULL                    |  /null/ | `null` | JSON null |
| JSON Object      | RX_JSON_OBJECT                  |  /{.*}/ | `{ "test": "test" }` | JSON object |
| JSON Array       | RX_JSON_ARRAY                   |  /\[.*]/ | `[1, 2, 3]` | JSON array |
| JSON Value       | RX_JSON_VALUE                   |  /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*)/ | `123` | JSON value |
| JSON Pair        | RX_JSON_PAIR                    |  /"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*":(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*)/ | `"test": "test"` | JSON pair |
| JSON Array Element | RX_JSON_ARRAY_ELEMENT          |  /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/ | `1, 2, 3` | JSON array element |
| JSON Array Element Last | RX_JSON_ARRAY_ELEMENT_LAST  |  /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/ | `1, 2, 3` | JSON array element last |
| JSON Array Element First | RX_JSON_ARRAY_ELEMENT_FIRST |  /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/ | `1, 2, 3` | JSON array element first |
| JSON Array Element Middle | RX_JSON_ARRAY_ELEMENT_MIDDLE |  /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/ | `1, 2, 3` | JSON array element middle |
| Password         | RX_PASSWORD                     |  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ | `test123` | Password (minimum 8 characters, at least one letter and one number) |
| Password Uppercase | RX_PASSWORD_UPPERCASE          |  /^(?=.*[A-Z])/ | `TEST` | Password uppercase |
| Password Lowercase | RX_PASSWORD_LOWERCASE          |  /^(?=.*[a-z])/ | `test` | Password lowercase |
| Password Number  | RX_PASSWORD_NUMBER              |  /^(?=.*\d)/ | `123` | Password number |
| Password Special | RX_PASSWORD_SPECIAL             |  /^(?=.*[!@#$%^&*])/ | `!@#$%^&*` | Password special |

<!-- Create list of this regex -->



                                                               
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
const str = ".js";
console.log(regex.test(str)); // Output: true
```

#### RX_HASH

This constant represents a regular expression pattern for checking hash.

Example usage:

```javascript
import { RX_HASH } from "helping-js/core/regex";
const regex = RX_HASH;
const str = "#test";
console.log(regex.test(str)); // Output: true
```

#### RX_HASH_ID

This constant represents a regular expression pattern for checking hash id.

Example usage:

```javascript
import { RX_HASH_ID } from "helping-js/core/regex";
const regex = RX_HASH_ID;
const str = "#test";
console.log(regex.test(str)); // Output: true
```

#### RX_HTML_TAGS

This constant represents a regular expression pattern for checking HTML tags.

Example usage:

```javascript
import { RX_HTML_TAGS } from "helping-js/core/regex";
const regex = RX_HTML_TAGS;
const str = "<div>";
console.log(regex.test(str)); // Output: true
```

#### RX_HYPHENATE

This constant represents a regular expression pattern for checking hyphenate.

Example usage:

```javascript
import { RX_HYPHENATE } from "helping-js/core/regex";
const regex = RX_HYPHENATE;
const str = "teSt";
console.log(regex.test(str)); // Output: true
```

#### RX_LOWER_UPPER

This constant represents a regular expression pattern for checking lower upper.

Example usage:

```javascript
import { RX_LOWER_UPPER } from "helping-js/core/regex";
const regex = RX_LOWER_UPPER;
const str = "testTAt";
console.log(regex.test(str)); // Output: true
```

#### RX_NUMBER

This constant represents a regular expression pattern for checking number.

Example usage:

```javascript
import { RX_NUMBER } from "helping-js/core/regex";
const regex = RX_NUMBER;
const str = "123123";
console.log(regex.test(str)); // Output: true
```

#### RX_FLOAT_NUMBER

This constant represents a regular expression pattern for checking float number.

Example usage:

```javascript
import { RX_FLOAT_NUMBER } from "helping-js/core/regex";
const regex = RX_FLOAT_NUMBER;
console.log(regex.test("123.123")); // Output: true
console.log(regex.test("60")); // Output:  true
console.log(regex.test("60.5")); // Output:  true
console.log(regex.test("60.")); // Output:  true
console.log(regex.test(".5")); // Output:  false
console.log(regex.test("abc")); // Output:  false
console.log(regex.test("123.456")); // Output:  true
console.log(regex.test("0.456")); // Output:  true
```

#### RX_PLUS

This constant represents a regular expression pattern for checking plus.

Example usage:

```javascript
import { RX_PLUS } from "helping-js/core/regex";
const regex = RX_PLUS;
const str = "+";
console.log(regex.test(str)); // Output: true
```

#### RX_REGEXP_REPLACE

This constant represents a regular expression pattern for checking regexp replace.

Example usage:

```javascript
import { RX_REGEXP_REPLACE } from "helping-js/core/regex";
const regex = RX_REGEXP_REPLACE;
const str = "[-/\\^$*+?.()|[]{}]";
console.log(regex.test(str)); // Output: true
```

#### RX_SPACES

This constant represents a regular expression pattern for checking spaces.

Example usage:

```javascript
import { RX_SPACES } from "helping-js/core/regex";
const regex = RX_SPACES;
const str = "[s\uFEFF\xA0]";
console.log(regex.test(str)); // Output: true
```

#### RX_SPACE_SPLIT

This constant represents a regular expression pattern for checking space split.

Example usage:

```javascript
import { RX_SPACE_SPLIT } from "helping-js/core/regex";
const regex = RX_SPACE_SPLIT;
const str = "s+";
console.log(regex.test(str)); // Output: true
```

#### RX_START_SPACE_WORD

This constant represents a regular expression pattern for checking start space word.

Example usage:

```javascript
import { RX_START_SPACE_WORD } from "helping-js/core/regex";
const regex = RX_START_SPACE_WORD;
const str = "test";
console.log(regex.test(str)); // Output: true
```

#### RX_TRIM_LEFT

This constant represents a regular expression pattern for checking trim left.

Example usage:

```javascript
import { RX_TRIM_LEFT } from "helping-js/core/regex";
const regex = RX_TRIM_LEFT;
const str = "s+";
console.log(regex.test(str)); // Output: true
```

#### RX_TRIM_RIGHT

This constant represents a regular expression pattern for checking trim right.

Example usage:

```javascript
import { RX_TRIM_RIGHT } from "helping-js/core/regex";
const regex = RX_TRIM_RIGHT;
const str = "s+";
console.log(regex.test(str)); // Output: true
```

#### RX_UNDERSCORE

This constant represents a regular expression pattern for checking underscore.

Example usage:

```javascript
import { RX_UNDERSCORE } from "helping-js/core/regex";
const regex = RX_UNDERSCORE;
const str = "_";
console.log(regex.test(str)); // Output: true
```

#### RX_UN_KEBAB

This constant represents a regular expression pattern for checking un kebab.

Example usage:

```javascript
import { RX_UN_KEBAB } from "helping-js/core/regex";
const regex = RX_UN_KEBAB;
const str = "-+charchter charchter";
console.log(regex.test(str)); // Output: true
```

#### RX_DATE

This constant represents a regular expression pattern for checking date.

Example usage:

```javascript
import { RX_DATE } from "helping-js/core/regex";
const regex = RX_DATE;
const str = "1999-01-20T22:51:49.118Z";
console.log(regex.test(str)); // Output: true
```

#### RX_TIME

This constant represents a regular expression pattern for checking time.

Example usage:

```javascript
import { RX_TIME } from "helping-js/core/regex";
const regex = RX_TIME;
const str = "13:00:00";
console.log(regex.test(str)); // Output: true
```

#### RX_HREF

This constant represents a regular expression pattern for checking href.

Example usage:

```javascript
import { RX_HREF } from "helping-js/core/regex";
const regex = RX_HREF;
const str = "www.google.com";
console.log(regex.test(str)); // Output: true
```

#### RX_ENCODED_COMMA

This constant represents a regular expression pattern for checking encoded comma.

Example usage:

```javascript
import { RX_ENCODED_COMMA } from "helping-js/core/regex";
const regex = RX_ENCODED_COMMA;
const str = "%2C";
console.log(regex.test(str)); // Output: true
```

#### RX_ENCODE_REVERSE

This constant represents a regular expression pattern for checking encode reverse.

Example usage:

```javascript
import { RX_ENCODE_REVERSE } from "helping-js/core/regex";
const regex = RX_ENCODE_REVERSE;
const str = "!";
console.log(regex.test(str)); // Output: true
```

#### RX_QUERY_START

This constant represents a regular expression pattern for checking query start.

Example usage:

```javascript
import { RX_QUERY_START } from "helping-js/core/regex";
const regex = RX_QUERY_START;
const str = "?";
console.log(regex.test(str)); // Output: true
```

#### RX_ASPECT

This constant represents a regular expression pattern for checking aspect.

Example usage:

```javascript
import { RX_ASPECT } from "helping-js/core/regex";
const regex = RX_ASPECT;
const str = "1:1";
console.log(regex.test(str)); // Output: true
```

#### RX_ASPECT_SEPARATOR

This constant represents a regular expression pattern for checking aspect separator.

Example usage:

```javascript
import { RX_ASPECT_SEPARATOR } from "helping-js/core/regex";
const regex = RX_ASPECT_SEPARATOR;
const str = ":";
console.log(regex.test(str)); // Output: true
```

#### RX_STRIP_LOCALE_MODS

This constant represents a regular expression pattern for checking strip locale mods.

Example usage:

```javascript
import { RX_STRIP_LOCALE_MODS } from "helping-js/core/regex";
const regex = RX_STRIP_LOCALE_MODS;
const str = "-u-";
console.log(regex.test(str)); // Output: true
```
