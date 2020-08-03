/** @format */

import {TypeName, Types} from '../types/utils'

const types: Types = {
  Date: '[object Date]',
  Object: '[object Object]',
  Array: '[object Array]',
  String: '[object String]',
  Number: '[object Number]',
  Function: '[object Function]'
}
const toString = Object.prototype.toString
const typeOf = (val: any, typeName: TypeName) => toString.call(val) === types[typeName]

export const isNumber = (val: unknown): val is number => typeOf(val, 'Number') && !Number.isNaN(val)
export const isObject = (val: unknown) => typeOf(val, 'Object')
export const isFunc = (val: unknown): val is () => string => typeOf(val, 'Function')
export const isString = (val: unknown): val is string => typeOf(val, 'String')
export const isArray = (val: unknown): val is any[] => typeOf(val, 'Array')
