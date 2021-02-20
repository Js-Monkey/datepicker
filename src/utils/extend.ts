import {UtilObject} from '../types/utils'
export default function extend<T>(sourceObj: T, targetObj: T): T & UtilObject {
  for (const key in sourceObj) {
    targetObj[key] = sourceObj[key]
  }
  return targetObj as T & UtilObject
}
