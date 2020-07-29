/** @format */

import {isObject} from './type-of'

export default function deepMerge(...objs: unknown[]): unknown {
  const target = Object.create(null)
  objs.forEach(source => {
    if (source) {
      Object.keys(source).forEach(key => {
        const sourceVal = source[key]
        const targetVal = target[key]
        target[key] = isObject(sourceVal)
          ? isObject(targetVal)
            ? deepMerge(sourceVal, targetVal)
            : deepMerge(sourceVal)
          : sourceVal
      })
    }
  })
  return target
}

export function mergeOptions<T>(source: T, target?: T): unknown {
  const mergeOptions = deepMerge(Object.create(null), source)
  if (target) {
    for (const key in target) {
      if (typeof target[key] !== 'undefined') {
        mergeOptions[key] = target[key]
      }
    }
  }
  return mergeOptions
}
