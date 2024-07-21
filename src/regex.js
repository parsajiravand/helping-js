// --- General ---

export const RX_ARRAY_NOTATION = /\[(\d+)]/g; //get array notation
export const RX_DIGITS = /^\d+$/; //digits
export const RX_EXTENSION = /^\..+/; //.test
export const RX_HASH = /^#/; //#test
export const RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/; //#test
export const RX_HTML_TAGS = /(<([^>]+)>)/gi; //<div>
export const RX_HYPHENATE = /\B([A-Z])/g; //teSt
export const RX_LOWER_UPPER = /([a-z])([A-Z])/g; //testTAt lower befoer upper
export const RX_NUMBER = /^[0-9]*\.?[0-9]+$/; //123123 just number
export const RX_FLOAT_NUMBER = /^\d+(\.\d+)?$|^\d+\.$/; //123.123
export const RX_PLUS = /\+/g; //get plus
export const RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g; //check [-/\\^$*+?.()|[\]{}]
export const RX_SPACES = /[\s\uFEFF\xA0]+/g; //get spaces
export const RX_SPACE_SPLIT = /\s+/; //first split spaces
// export const RX_STAR = /\/\*$/
export const RX_START_SPACE_WORD = /(\s|^)(\w)/g; //get start space+charchter space charachters
export const RX_TRIM_LEFT = /^\s+/; //get spaces from start
export const RX_TRIM_RIGHT = /\s+$/; //get spaces from end
export const RX_UNDERSCORE = /_/g; //get _
export const RX_UN_KEBAB = /-(\w)/g; //get -+charchter charchter

// --- Date ---

// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'
export const RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; //get time first slice

// Time string RegEx (optional seconds)
export const RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/;

// --- URL ---

// HREFs must end with a hash followed by at least one non-hash character
export const RX_HREF = /^.*(#[^#]+)$/;

export const RX_ENCODED_COMMA = /%2C/g;
export const RX_ENCODE_REVERSE = /[!'()*]/g;
export const RX_QUERY_START = /^(\?|#|&)/;

// --- Aspect ---

export const RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
export const RX_ASPECT_SEPARATOR = /[/:]/;

// --- Locale ---

export const RX_STRIP_LOCALE_MODS = /-u-.+/; //strip locale unicode extensions
export const RX_STRIP_LOCALE_MODS_GLOBAL = /-u-.+/g; //strip locale unicode extensions
export const RX_LOCALE_MODS = /-u-.+/; //locale unicode extensions
export const RX_LOCALE_MODS_GLOBAL = /-u-.+/g; //locale unicode extensions
export const RX_LOCALE_MODS_START = /^-u-.+/; //locale unicode extensions
export const RX_LOCALE_MODS_START_GLOBAL = /^-u-.+/g; //locale unicode extensions
export const RX_LOCALE_MODS_END = /-u-.+$/; //locale unicode extensions
export const RX_LOCALE_MODS_END_GLOBAL = /-u-.+$/g; //locale unicode extensions
export const RX_LOCALE_MODS_SPLIT = /-u-/; //locale unicode extensions
export const RX_LOCALE_MODS_SPLIT_GLOBAL = /-u-/g; //locale unicode extensions
export const RX_LOCALE_MODS_SPLIT_START = /^-u-/; //locale unicode extensions
export const RX_LOCALE_MODS_SPLIT_START_GLOBAL = /^-u-/g; //locale unicode extensions
export const RX_LOCALE_MODS_SPLIT_END = /-u-$/; //locale unicode extensions
export const RX_LOCALE_MODS_SPLIT_END_GLOBAL = /-u-$/g; //locale unicode extensions

// --- General ---

export const RX_UPPERCASE = /^[A-Z]+$/; //uppercase letters
export const RX_LOWERCASE = /^[a-z]+$/; //lowercase letters
export const RX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email format
export const RX_URL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL format
export const RX_URL_PATH = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL path format
export const RX_URL_QUERY = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL query format
export const RX_URL_FRAGMENT = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //URL fragment format
export const RX_IP = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; //IP address
export const RX_IPV4 =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; //IPv4 format
export const RX_IPV6 =
  /([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)$/; //IPv6 format
export const RX_HEX_COLOR = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/; //hex color code
export const RX_UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i; //UUID format
export const RX_UUID_V1 = /^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v1 format
export const RX_UUID_V2 = /^[0-9a-f]{8}-[0-9a-f]{4}-2[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v2 format
export const RX_UUID_V3 = /^[0-9a-f]{8}-[0-9a-f]{4}-3[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v3 format
export const RX_UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v4 format
export const RX_UUID_V5 = /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; //UUID v5 format
export const RX_PHONE = /^\+?[0-9]{1,4}?[-. ]?\(?[0-9]{1,3}\)?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}$/; //phone number
export const RX_CREDIT_CARD =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/; //credit card number
export const RX_SSN = /^\d{3}-\d{2}-\d{4}$/; //social security number
export const RX_SSN_PARTIAL = /^\d{3}-\d{2}-\d{1,4}$/; //partial social security number
export const RX_SSN_LAST_FOUR = /^\d{4}$/; //last four of social security number
export const RX_SSN_FULL = /^\d{9}$/; //full social security number
export const RX_SSN_FULL_DASH = /^\d{3}-\d{2}-\d{4}$/; //full social security number with dashes
export const RX_SSN_FULL_SPACE = /^\d{3} \d{2} \d{4}$/; //full social security number with spaces


// --- Date ---

// ISO 8601 date format
export const RX_ISO_DATE =/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/; // ISO date format
export const RX_ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/; // ISO date time format
export const RX_ISO_DATE_TIME_MS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{1,3}$/; // ISO date time with milliseconds
export const RX_ISO_DATE_TIME_TZ = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z|[+-]\d{2}:\d{2}$/; // ISO date time with time zone



// --- Time ---

// 12-hour time format (with optional AM/PM)
export const RX_TIME_12H = /^(0?[1-9]|1[0-2]):[0-5][0-9] ?([AaPp][Mm])?$/;
export const RX_TIME_24H = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
export const RX_TIME_24H_SECONDS = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
export const RX_TIME_24H_MS = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.\d{1,3}$/;
export const RX_TIME_24H_MS_TZ = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.\d{1,3}Z|[+-]\d{2}:\d{2}$/;


// --- HTML ---

// HTML comments
export const RX_HTML_COMMENT = /<!--(.*?)-->/gs;
export const RX_HTML_TAG = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/gi;
export const RX_HTML_TAG_NAME = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_CONTENT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_ATTRIBUTES = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_ATTRIBUTE = /([a-z]+)="([^"]*)"/gi;
export const RX_HTML_TAG_ATTRIBUTE_NAME = /([a-z]+)="([^"]*)"/i;
export const RX_HTML_TAG_ATTRIBUTE_VALUE = /([a-z]+)="([^"]*)"/i;
export const RX_HTML_TAG_SELF_CLOSING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_OPENING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_CLOSING = /<\/([a-z]+)>/i;
export const RX_HTML_TAG_TEXT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_CONTENT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_ATTRIBUTES = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_ATTRIBUTE = /([a-z]+)="([^"]*)"/gi;
export const RX_HTML_TAG_TEXT_ATTRIBUTE_NAME = /([a-z]+)="([^"]*)"/i;
export const RX_HTML_TAG_TEXT_ATTRIBUTE_VALUE = /([a-z]+)="([^"]*)"/i;
export const RX_HTML_TAG_TEXT_SELF_CLOSING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_OPENING = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_CLOSING = /<\/([a-z]+)>/i;
export const RX_HTML_TAG_TEXT_TEXT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_TEXT_CONTENT = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_TEXT_ATTRIBUTES = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)/i;
export const RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE = /([a-z]+)="([^"]*)"/gi;
export const RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE_NAME = /([a-z]+)="([^"]*)"/i;
export const RX_HTML_TAG_TEXT_TEXT_ATTRIBUTE_VALUE = /([a-z]+)="([^"]*)"/i;


// --- File ---

// File path (basic, platform-independent)
export const RX_FILE_PATH = /^(\/?[\w\-]+)+\/?$/;
export const RX_FILE_PATH_WINDOWS = /^(?:[a-zA-Z]:)?[\\/](?:[^\\/]+[\\/])*[^\\/]+$/;
export const RX_FILE_PATH_UNIX = /^\/(?:[^/]+\/)*[^/]+$/;
export const RX_FILE_PATH_MAC = /^\/(?:[^/]+\/)*[^/]+$/;



// --- JavaScript Identifiers ---

export const RX_JS_IDENTIFIER = /^[$A-Z_][0-9A-Z_$]*$/i; //valid JavaScript identifier

// --- Whitespace ---

// Leading and trailing whitespace
export const RX_LEADING_TRAILING_WHITESPACE = /^\s+|\s+$/g;

// --- JSON ---

// JSON string
export const RX_JSON_STRING = /"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"/;
export const RX_JSON_NUMBER = /-?\d*\.?\d+/;
export const RX_JSON_BOOLEAN = /true|false/;    
export const RX_JSON_NULL = /null/;
export const RX_JSON_OBJECT = /{.*}/;
export const RX_JSON_ARRAY = /\[.*]/;
export const RX_JSON_VALUE = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*])/;
export const RX_JSON_PAIR = /"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*":(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*])/;
export const RX_JSON_ARRAY_ELEMENT = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;
export const RX_JSON_ARRAY_ELEMENT_LAST = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;
export const RX_JSON_ARRAY_ELEMENT_FIRST = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;
export const RX_JSON_ARRAY_ELEMENT_MIDDLE = /(?:"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"|true|false|null|-?\d*\.?\d+|{.*}|\[.*),?/;


// --- Password ---

// Password (minimum 8 characters, at least one letter and one number)
export const RX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const RX_PASSWORD_UPPERCASE = /^(?=.*[A-Z])/;
export const RX_PASSWORD_LOWERCASE = /^(?=.*[a-z])/;
export const RX_PASSWORD_NUMBER = /^(?=.*\d)/;
export const RX_PASSWORD_SPECIAL = /^(?=.*[!@#$%^&*])/;
