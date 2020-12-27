import Dep from './deps'
import {State} from '../types/store'

export function observe<T = State>(obj: T): T {
  Object.keys(obj).forEach(key => {
    defineReactive<T>(obj, key as keyof T, obj[key as keyof T])
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
      console.log(newVal)
      val = newVal
      dep.notify()
    }
  })
}
