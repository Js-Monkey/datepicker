import Dep from './deps'
import {State} from '../types/store'
import {isArray, isObject} from '../utils/typeOf'

export default function ObserveState(state: State): State {
  function observe<T = State>(obj: T): T {
    Object.keys(obj).forEach(key => {
      const val = obj[key as keyof T]
      if (isArray(val)) {
        val.forEach(v => observe(v))
      } else if (isObject(val)) {
        observe(val)
      } else {
        defineReactive<T>(obj, key as keyof T, val)
      }
    })
    return obj
  }

  function defineReactive<T>(obj: T, key: keyof T, val: unknown) {
    const dep = new Dep(obj, state)
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

  return observe(state)
}
