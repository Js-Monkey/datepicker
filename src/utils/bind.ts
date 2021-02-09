import {Fn} from '../types/utils'

export function Bind(fn: Fn, ...arg: any): Fn {
  function proxyFn() {
    return fn.apply(this, arg.concat(Array.from(arguments)))
  }
  return proxyFn
}
