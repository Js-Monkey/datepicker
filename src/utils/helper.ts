import {Fn} from '../types/utils'

export function Bind(fn: Fn, ...arg: any): Fn {
  function proxyFn(...argument: any) {
    fn(...Array.from(argument).concat(arg))
  }

  return proxyFn
}

export function isHas(str: string, name: string): boolean {
  return str.indexOf(name) > -1
}
