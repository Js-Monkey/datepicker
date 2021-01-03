import {Fn} from '../types/utils'

export function Bind(fn: Fn, ...arg: any): Fn {
  function proxyFn() {
    fn(...((arguments as unknown) as any[]).concat(arg))
  }

  return proxyFn
}
