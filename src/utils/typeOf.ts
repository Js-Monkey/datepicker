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

export const isNumber = (val: unknown): val is number => typeOf(val, 'Number') && !Number.isNaN(val)
export const isObject = (val: unknown): val is UtilObject => typeOf(val, 'Object')
export const isFunc = (val: unknown): val is () => string => typeOf(val, 'Function')
export const isString = (val: unknown): val is string => typeOf(val, 'String')
export const isArray = <T = unknown>(val: unknown): val is T[] => typeOf(val, 'Array')
