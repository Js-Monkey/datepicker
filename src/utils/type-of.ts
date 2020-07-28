import {Types} from "../types/utils"
const types:Types= {
    Date: '[object Date]',
    Object: '[object Object]',
    Array: '[object Array]',
    String: '[object String]',
    Number: '[object Number]',
    Function: '[object Function]'
}
const toString = Object.prototype.toString
const typeOf = (val:any, typeName:string)=> toString.call(val) === types[typeName]

export const isNumber = (val:any):val is number => typeOf(val, 'Number') && !Number.isNaN(val)
export const isObject = (val:any) => typeOf(val, 'Object')
export const isFunc = (val:any):val is Function => typeOf(val, 'Function')
export const isString = (val:any):val is string => typeOf(val, 'String')
export const isArray = (val:any):val is any[] => typeOf(val, 'Array')
