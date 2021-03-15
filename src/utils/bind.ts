import {Fn} from '../types/utils'
import {isArray} from "./typeOf";

export function Bind(fn: Fn,arg: any[] | any): Fn {
  if(!isArray(arg)) arg = [arg]
  function proxyFn() {
    return fn.apply(this, arg.concat(Array.from(arguments)))
  }
  return proxyFn
}
