import {Types, UtilObject} from '../types/utils'

const toString = Object.prototype.toString
const typeOf = (val: unknown, typeName: keyof Types) => has(toString.call(val), typeName)

export function isNumber(val: unknown): val is number {
    return typeOf(val, 'Number') && !Number.isNaN(val)
}

export function isObject(val: unknown): val is UtilObject {
    return typeOf(val, 'Object')
}

export function isDate(val: unknown): val is UtilObject {
    return typeOf(val, 'Date')
}


export function isFunc<T = string>(val: unknown): val is (...arg: any) => T {
    return typeOf(val, 'Function')
}

export function isString(val: unknown): val is string {
    return typeOf(val, 'String')
}

export function isBoolean(val: unknown): val is boolean {
    return typeOf(val, 'Boolean')
}

export function isArray<T = unknown>(val: unknown): val is T[] {
    return Array.isArray(val)
}

export function has(target: string | string[], val: string | string[]): boolean {
    if (isArray(val)) return val.some(v => has(target, v))
    return target.indexOf(val) > -1
}


export function not(target: string | string[], val: string | string []): boolean {
    if (isArray(val)) return val.every(v => !has(target, v))
    return !has(target, val)
}

