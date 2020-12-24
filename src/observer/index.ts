import Dep from './deps'
import {State} from '../types/store'

export function observe(obj: State): State {
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key as keyof State, obj[key as keyof State])
  })
  return obj
}

function defineReactive(obj: State, key: keyof State, val: any) {
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
