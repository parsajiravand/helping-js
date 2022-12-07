/** @preserve
 * check-javascript-type
 * Creator:parsa jiravand
 * check javascript type simple.
 * MIT License
 */
import{RX_NUMBER}from"./src/regex";import{File}from"./src/safe-types";const toType=i=>typeof i,toRawType=i=>Object.prototype.toString.call(i).slice(8,-1),toRawTypeLC=i=>toRawType(i).toLowerCase(),isUndefined=i=>void 0===i,isNull=i=>null===i,isEmptyString=i=>""===i,isUndefinedOrNull=i=>isUndefined(i)||isNull(i),isUndefinedOrNullOrEmpty=i=>isUndefinedOrNull(i)||isEmptyString(i),isFunction=i=>"function"===toType(i),isBoolean=i=>"boolean"===toType(i),isString=i=>"string"===toType(i),isNumber=i=>"number"===toType(i),isNumeric=i=>RX_NUMBER.test(String(i)),isPrimitive=i=>isBoolean(i)||isString(i)||isNumber(i),isArray=i=>Array.isArray(i),isObject=i=>null!==i&&"object"==typeof i,isPlainObject=i=>"[object Object]"===Object.prototype.toString.call(i),isDate=i=>i instanceof Date,isEvent=i=>i instanceof Event,isFile=i=>i instanceof File,isRegExp=i=>"RegExp"===toRawType(i),isPromise=i=>!isUndefinedOrNull(i)&&isFunction(i.then)&&isFunction(i.catch);export{toType,toRawType,toRawTypeLC,isUndefined,isNull,isEmptyString,isUndefinedOrNull,isUndefinedOrNullOrEmpty,isFunction,isBoolean,isString,isNumber,isNumeric,isPrimitive,isArray,isObject,isPlainObject,isDate,isEvent,isFile,isRegExp,isPromise};