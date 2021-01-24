import {Fn} from '../types/utils'

export function Bind(fn: Fn, ...arg: any): Fn {
  function proxyFn() {
    const _arguments = Array.from(arguments)
    let _arg = arg
    const last = _arguments.pop()
    if(last.preventDefault){
      _arg = _arg.concat(last)
    }else{
      _arguments.push(last)
    }
    return  fn(..._arguments.concat(_arg))
  }
  return proxyFn
}
