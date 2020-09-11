import {isObject} from './typeOf'
import {UtilObject} from '../types/utils'

export default function deepMerge(...objs: UtilObject[]): UtilObject {
  const target = Object.create(null)
  objs.forEach(source => {
    if (isObject(source)) {
      Object.keys(source).forEach(key => {
        const sourceVal = source[key]
        const targetVal = target[key]
        target[key] = isObject(sourceVal) ? deepMerge(sourceVal, targetVal) : sourceVal
      })
    }
  })
  return target
}

export function mergeOptions(source: UtilObject, target?: UtilObject): UtilObject {
  const mergeOptions: UtilObject = deepMerge(Object.create(null), source)
  if (target) {
    for (const key in target) {
      if (typeof target[key] !== 'undefined') {
        mergeOptions[key] = target[key]
      }
    }
  }
  return mergeOptions
}
