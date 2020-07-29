/** @format */

import {Types} from '../types/utils'

const types: Types = {
  Boolean: '[object Boolean]',
  Number: '[object Number]',
  String: '[object String]',
  Function: '[object Function]',
  Array: '[object Array]',
  Date: '[object Date]',
  RegExp: '[object RegExp]',
  Object: '[object Object]',
  Error: '[object Error]',
  Symbol: '[object Symbol]',
}
const toString = Object.prototype.toString

const class2Type: any = {} as any

Object.keys(types).forEach(key => {
  const value = types[key]
  class2Type[value] = key.toLowerCase()
})

const typeOf = (val: unknown) => {
  if (val === null) {
    return val + ''
  }
  return typeof val === 'object' || typeof val === 'function' ? class2Type[toString.call(val)] || 'object' : typeof val
}

export const isBoolean = (val: unknown): boolean => typeOf(val) === 'boolean'
export const isNumber = (val: unknown): boolean => typeOf(val) === 'number'
export const isString = (val: unknown): boolean => typeOf(val) === 'string'
export const isFunction = (val: unknown): boolean => typeOf(val) === 'function'
export const isArray = (val: unknown): boolean => typeOf(val) === 'array'
export const isDate = (val: unknown): boolean => typeOf(val) === 'date'
export const isRegExp = (val: unknown): boolean => typeOf(val) === 'regexp'
export const isObject = (val: unknown): boolean => typeOf(val) === 'object'
export const isError = (val: unknown): boolean => typeOf(val) === 'error'
export const isSymbol = (val: unknown): boolean => typeOf(val) === 'symbol'
export const isNull = (val: unknown): boolean => typeOf(val) === 'null'
export const isUndefined = (val: unknown): boolean => typeOf(val) === 'undefined'
