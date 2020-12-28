import Dep from './deps'
import {State} from '../types/store'
import {isArray} from '../utils/typeOf'

export function observe<T = State>(obj: T): T {
  Object.keys(obj).forEach(key => {
    const val = obj[key as keyof T]
    if (isArray(val)) {
      val.forEach(v => observe(v))
    } else {
      defineReactive<T>(obj, key as keyof T, val)
    }
  })

  return obj
}

function defineReactive<T>(obj: T, key: keyof T, val: any) {
  const dep = new Dep(obj)
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
