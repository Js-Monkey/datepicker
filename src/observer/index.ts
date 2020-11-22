import {UtilObject} from '../types/utils'
import Dep from './deps'
import {State} from '../types/store'

export function observe(obj: State): State {
  console.log(obj)
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key as keyof State])
  })
  return obj
}

function defineReactive(obj: UtilObject, key: keyof UtilObject, val: any) {
  const dep = new Dep(key)
  if (arguments.length === 2) {
    val = obj[key]
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) dep.depend()
      return val
    },
    set(newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}
