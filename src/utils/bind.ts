import {Fn} from '../types/utils'

export function Bind(fn: Fn, ...arg: any): Fn {
  function proxyFn() {
    fn(...Array.from(arguments).concat(arg))
  }

  return proxyFn
}
