import {isArray, isObject} from './typeOf'
import Options from "../types/options"
import {checkOptions} from "./checkOptions"
export function mergeOptions(source: any, target?: any): Options {
  if(isObject(target)){
    for (const key in source) {
      const val = target[key]
      if (checkOptions(key as keyof Options, val)) {
        source[key] = val
      }
    }
  }else{
    console.error('Invalid argument provided.Options must be an object')
  }
  return source
}

export function mergeClasses(...args: (string | string[] | undefined)[]): string {
  return (args.reduce((classes: string, arg) => (!arg ? classes : classes + ' ' + (isArray(arg) ? arg.join(' ') : arg)), '') as string).trim()
}
