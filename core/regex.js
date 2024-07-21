"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// --- General ---

var RX_ARRAY_NOTATION = exports.RX_ARRAY_NOTATION = /\[(\d+)]/g; //get array notation
var RX_DIGITS = exports.RX_DIGITS = /^\d+$/; //digits
var RX_EXTENSION = exports.RX_EXTENSION = /^\..+/; //.test
var RX_HASH = exports.RX_HASH = /^#/; //#test
var RX_HASH_ID = exports.RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/; //#test
var RX_HTML_TAGS = exports.RX_HTML_TAGS = /(<([^>]+)>)/gi; //<div>
var RX_HYPHENATE = exports.RX_HYPHENATE = /\B([A-Z])/g; //teSt
var RX_LOWER_UPPER = exports.RX_LOWER_UPPER = /([a-z])([A-Z])/g; //testTAt lower befoer upper
var RX_NUMBER = exports.RX_NUMBER = /^[0-9]*\.?[0-9]+$/; //123123 just number
var RX_FLOAT_NUMBER = exports.RX_FLOAT_NUMBER = /^\d+(\.\d+)?$|^\d+\.$/; //123.123
var RX_PLUS = exports.RX_PLUS = /\+/g; //get plus
var RX_REGEXP_REPLACE = exports.RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g; //check [-/\\^$*+?.()|[\]{}]
var RX_SPACES = exports.RX_SPACES = /[\s\uFEFF\xA0]+/g; //get spaces
var RX_SPACE_SPLIT = exports.RX_SPACE_SPLIT = /\s+/; //first split spaces
// export const RX_STAR = /\/\*$/
var RX_START_SPACE_WORD = exports.RX_START_SPACE_WORD = /(\s|^)(\w)/g; //get start space+charchter space charachters
var RX_TRIM_LEFT = exports.RX_TRIM_LEFT = /^\s+/; //get spaces from start
var RX_TRIM_RIGHT = exports.RX_TRIM_RIGHT = /\s+$/; //get spaces from end
var RX_UNDERSCORE = exports.RX_UNDERSCORE = /_/g; //get _
var RX_UN_KEBAB = exports.RX_UN_KEBAB = /-(\w)/g; //get -+charchter charchter

// --- Date ---

// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'
var RX_DATE = exports.RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; //get time first slice

// Time string RegEx (optional seconds)
var RX_TIME = exports.RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/;

// --- URL ---

// HREFs must end with a hash followed by at least one non-hash character
var RX_HREF = exports.RX_HREF = /^.*(#[^#]+)$/;

var RX_ENCODED_COMMA = exports.RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = exports.RX_ENCODE_REVERSE = /[!'()*]/g;
var RX_QUERY_START = exports.RX_QUERY_START = /^(\?|#|&)/;

// --- Aspect ---

var RX_ASPECT = exports.RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
var RX_ASPECT_SEPARATOR = exports.RX_ASPECT_SEPARATOR = /[/:]/;

// --- Locale ---

var RX_STRIP_LOCALE_MODS = exports.RX_STRIP_LOCALE_MODS = /-u-.+/; //strip locale unicode extensions
var RX_STRIP_LOCALE_MODS_GLOBAL = exports.RX_STRIP_LOCALE_MODS_GLOBAL = /-u-.+/g; //strip locale unicode extensions
var RX_LOCALE_MODS = exports.RX_LOCALE_MODS = /-u-.+/; //locale unicode extensions
var RX_LOCALE_MODS_GLOBAL = exports.RX_LOCALE_MODS_GLOBAL = /-u-.+/g; //locale unicode extensions
var RX_LOCALE_MODS_START = exports.RX_LOCALE_MODS_START = /^-u-.+/; //locale unicode extensions
var RX_LOCALE_MODS_START_GLOBAL = exports.RX_LOCALE_MODS_START_GLOBAL = /^-u-.+/g; //locale unicode extensions
var RX_LOCALE_MODS_END = exports.RX_LOCALE_MODS_END = /-u-.+$/; //locale unicode extensions
var RX_LOCALE_MODS_END_GLOBAL = exports.RX_LOCALE_MODS_END_GLOBAL = /-u-.+$/g; //locale unicode extensions
var RX_LOCALE_MODS_SPLIT = exports.RX_LOCALE_MODS_SPLIT = /-u-/; //locale unicode extensions
var RX_LOCALE_MODS_SPLIT_GLOBAL = exports.RX_LOCALE_MODS_SPLIT_GLOBAL = /-u-/g; //locale unicode extensions
var RX_LOCALE_MODS_SPLIT_START = exports.RX_LOCALE_MODS_SPLIT_START = /^-u-/; //locale unicode extensions
var RX_LOCALE_MODS_SPLIT_START_GLOBAL = exports.RX_LOCALE_MODS_SPLIT_START_GLOBAL = /^-u-/g; //locale unicode extensions
var RX_LOCALE_MODS_SPLIT_END = exports.RX_LOCALE_MODS_SPLIT_END = /-u-$/; //locale unicode extensions
var RX_LOCALE_MODS_SPLIT_END_GLOBAL = exports.RX_LOCALE_MODS_SPLIT_END_GLOBAL = /-u-$/g; //locale unicode extensions

// --- General ---

var RX_UPPERCASE = exports.RX_UPPERCASE = /^[A-Z]+$/; //uppercase letters
var RX_LOWERCASE = exports.RX_LOWERCASE = /^[a-z]+$/; //lowercase letters
var RX_EMAIL = exports.RX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email format
var RX_URL = exports.RX_URL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL format
var RX_URL_PATH = exports.RX_URL_PATH = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL path format
var RX_URL_QUERY = exports.RX_URL_QUERY = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL query format
var RX_URL_FRAGMENT = exports.RX_URL_FRAGMENT = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL fragment format
var RX_IP = exports.RX_IP = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //IP address
var RX_IPV4 = exports.RX_IPV4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; //IPv4 format
var RX_IPV6 = exports.RX_IPV6 = /([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)$/; //IPv6 format
var RX_HEX_COLOR = exports.RX_HEX_COLOR = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/; //hex color code
var RX_UUID = exports.RX_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i; //UUID format
var RX_UUID_V1 = exports.RX_UUID_V1 = /^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v1 format
var RX_UUID_V2 = exports.RX_UUID_V2 = /^[0-9a-f]{8}-[0-9a-f]{4}-2[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v2 format
var RX_UUID_V3 = exports.RX_UUID_V3 = /^[0-9a-f]{8}-[0-9a-f]{4}-3[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v3 format
var RX_UUID_V4 = exports.RX_UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v4 format
var RX_UUID_V5 = exports.RX_UUID_V5 = /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v5 format
var RX_PHONE = exports.RX_PHONE = /^\+?[0-9]{1,4}?[-. ]?\(?[0-9]{1,3}\)?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}$/; //phone number
var RX_CREDIT_CARD = exports.RX_CREDIT_CARD = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/; //credit card number
var RX_SSN = exports.RX_SSN = /^\d{3}-\d{2}-\d{4}$/; //social security number
var RX_SSN_PARTIAL = exports.RX_SSN_PARTIAL = /^\d{3}-\d{2}-\d{1,4}$/; //partial social security number
var RX_SSN_LAST_FOUR = exports.RX_SSN_LAST_FOUR = /^\d{4}$/; //last four of social security number
var RX_SSN_FULL = exports.RX_SSN_FULL = /^\d{9}$/; //full social security number
var RX_SSN_FULL_DASH = exports.RX_SSN_FULL_DASH = /^\d{3}-\d{2}-\d{4}$/; //full social security number with dashes
var RX_SSN_FULL_SPACE = exports.RX_SSN_FULL_SPACE = /^\d{3} \d{2} \d{4}$/; //full social security number with spaces


// --- Date ---

// ISO 8601 date format
var RX_ISO_DATE = exports.RX_ISO_DATE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/; // ISO date format
var RX_ISO_DATE_TIME = exports.RX_ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/; // ISO date time format
var RX_ISO_DATE_TIME_MS = exports.RX_ISO_DATE_TIME_MS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{1,3}$/; // ISO date time with milliseconds
var RX_ISO_DATE_TIME_TZ = exports.RX_ISO_DATE_TIME_TZ = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z|[+-]\d{2}:\d{2}$/; // ISO date time with time zone


// --- Time ---

// 12-hour time format (with optional AM/PM)
var RX_TIME_12H = exports.RX_TIME_12H = /^(0?[1-9]|1[0-2]):[0-5][0-9] ?([AaPp][Mm])?$/;
var RX_TIME_24H = exports.RX_TIME_24H = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
var RX_TIME_24H_SECONDS = exports.RX_TIME_24H_SECONDS = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
var RX_TIME_24H_MS = exports.RX_TIME_24H_MS = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.\d{1,3}$/;
var RX_TIME_24H_MS_TZ = exports.RX_TIME_24H_MS_TZ = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.\d{1,3}Z|[+-]\d{2}:\d{2}$/;

// --- HTML ---

// HTML comments
var RX_HTML_COMMENT = exports.RX_HTML_COMMENT = /<!--(.*?)-->/gs;
var RX_HTML_TAG = exports.RX_HTML_TAG = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/gi;
var RX_HTML_TAG_NAME = exports.RX_HTML_TAG_NAME = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_CONTENT = exports.RX_HTML_TAG_CONTENT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_ATTRIBUTES = exports.RX_HTML_TAG_ATTRIBUTES = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_ATTRIBUTE = exports.RX_HTML_TAG_ATTRIBUTE = /([a-z]+)="([^"]*)"/gi;
var RX_HTML_TAG_ATTRIBUTE_NAME = exports.RX_HTML_TAG_ATTRIBUTE_NAME = /([a-z]+)="([^"]*)"/i;
var RX_HTML_TAG_ATTRIBUTE_VALUE = exports.RX_HTML_TAG_ATTRIBUTE_VALUE = /([a-z]+)="([^"]*)"/i;
var RX_HTML_TAG_SELF_CLOSING = exports.RX_HTML_TAG_SELF_CLOSING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_OPENING = exports.RX_HTML_TAG_OPENING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_CLOSING = exports.RX_HTML_TAG_CLOSING = /<\/([a-z]+)>/i;
var RX_HTML_TAG_TEXT = exports.RX_HTML_TAG_TEXT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_CONTENT = exports.RX_HTML_TAG_TEXT_CONTENT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_ATTRIBUTES = exports.RX_HTML_TAG_TEXT_ATTRIBUTES = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_ATTRIBUTE = exports.RX_HTML_TAG_TEXT_ATTRIBUTE = /([a-z]+)="([^"]*)"/gi;
var RX_HTML_TAG_TEXT_ATTRIBUTE_NAME = exports.RX_HTML_TAG_TEXT_ATTRIBUTE_NAME = /([a-z]+)="([^"]*)"/i;
var RX_HTML_TAG_TEXT_ATTRIBUTE_VALUE = exports.RX_HTML_TAG_TEXT_ATTRIBUTE_VALUE = /([a-z]+)="([^"]*)"/i;
var RX_HTML_TAG_TEXT_SELF_CLOSING = exports.RX_HTML_TAG_TEXT_SELF_CLOSING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_OPENING = exports.RX_HTML_TAG_TEXT_OPENING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_CLOSING = exports.RX_HTML_TAG_TEXT_CLOSING = /<\/([a-z]+)>/i;
var RX_HTML_TAG_TEXT_TEXT = exports.RX_HTML_TAG_TEXT_TEXT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_TEXT_CONTENT = exports.RX_HTML_TAG_TEXT_TEXT_CONTENT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_TEXT_ATTRIBUTES = exports.RX_HTML_TAG_TEXT_TEXT_ATTRIBUTES = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
var RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE = exports.RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE = /([a-z]+)="([^"]*)"/gi;
var RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE_NAME = exports.RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE_NAME = /([a-z]+)="([^"]*)"/i;
var RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE_VALUE = exports.RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE_VALUE = /([a-z]+)="([^"]*)"/i;

// --- File ---

// File path (basic, platform-independent)
var RX_FILE_PATH = exports.RX_FILE_PATH = /^(\/?[\w\-]+)+\/?$/;
var RX_FILE_PATH_WINDOWS = exports.RX_FILE_PATH_WINDOWS = /^(?:[a-zA-Z]:)?[\\/](?:[^\\/]+[\\/])*[^\\/]+$/;
var RX_FILE_PATH_UNIX = exports.RX_FILE_PATH_UNIX = /^\/(?:[^/]+\/)*[^/]+$/;
var RX_FILE_PATH_MAC = exports.RX_FILE_PATH_MAC = /^\/(?:[^/]+\/)*[^/]+$/;

// --- JavaScript Identifiers ---

var RX_JS_IDENTIFIER = exports.RX_JS_IDENTIFIER = /^[$A-Z_][0-9A-Z_$]*$/i; //valid JavaScript identifier

// --- Whitespace ---

// Leading and trailing whitespace
var RX_LEADING_TRAILING_WHITESPACE = exports.RX_LEADING_TRAILING_WHITESPACE = /^\s+|\s+$/g;

// --- JSON ---

// JSON string
var RX_JSON_STRING = exports.RX_JSON_STRING = /"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"/;
var RX_JSON_NUMBER = exports.RX_JSON_NUMBER = /-?\d*\.?\d+/;
var RX_JSON_BOOLEAN = exports.RX_JSON_BOOLEAN = /true|false/;
var RX_JSON_NULL = exports.RX_JSON_NULL = /null/;
var RX_JSON_OBJECT = exports.RX_JSON_OBJECT = /{.*}/;
var RX_JSON_ARRAY = exports.RX_JSON_ARRAY = /\[.*]/;
var RX_JSON_VALUE = exports.RX_JSON_VALUE = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*])/;
var RX_JSON_PAIR = exports.RX_JSON_PAIR = /"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*":(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*])/;
var RX_JSON_ARRAY_ELEMENT = exports.RX_JSON_ARRAY_ELEMENT = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;
var RX_JSON_ARRAY_ELEMENT_LAST = exports.RX_JSON_ARRAY_ELEMENT_LAST = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;
var RX_JSON_ARRAY_ELEMENT_FIRST = exports.RX_JSON_ARRAY_ELEMENT_FIRST = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;
var RX_JSON_ARRAY_ELEMENT_MIDDLE = exports.RX_JSON_ARRAY_ELEMENT_MIDDLE = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;

// --- Password ---

// Password (minimum 8 characters, at least one letter and one number)
var RX_PASSWORD = exports.RX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var RX_PASSWORD_UPPERCASE = exports.RX_PASSWORD_UPPERCASE = /^(?=.*[A-Z])/;
var RX_PASSWORD_LOWERCASE = exports.RX_PASSWORD_LOWERCASE = /^(?=.*[a-z])/;
var RX_PASSWORD_NUMBER = exports.RX_PASSWORD_NUMBER = /^(?=.*\d)/;
var RX_PASSWORD_SPECIAL = exports.RX_PASSWORD_SPECIAL = /^(?=.*[!@#$%^&*])/;