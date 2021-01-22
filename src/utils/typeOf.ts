import {Types, UtilObject} from '../types/utils'

const types: Types = {
  Date: '[object Date]',
  Object: '[object Object]',
  Array: '[object Array]',
  String: '[object String]',
  Number: '[object Number]',
  Function: '[object Function]'
}
const toString = Object.prototype.toString
const typeOf = (val: unknown, typeName: keyof Types) => toString.call(val) === types[typeName]

export function isNumber(val: unknown): val is number {
  return typeOf(val, 'Number') && !Number.isNaN(val)
}

export function isObject(val: unknown): val is UtilObject {
  return typeOf(val, 'Object')
}

export function isFunc<T = string>(val: unknown): val is (...arg: any) => T {
  return typeOf(val, 'Function')
}

export function isString(val: unknown): val is string {
  return typeOf(val, 'String')
}

export function isArray<T = unknown>(val: unknown): val is T[] {
  return typeOf(val, 'Array')
}
