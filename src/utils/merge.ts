import {isArray} from './typeOf'
import Options from "../types/options"
import {checkOptions} from "./checkOptions"
export function mergeOptions(source: any, target = Object.create(null)): Options {
  for (const key in source) {
    const val = target[key]
    if (checkOptions(key as keyof Options, val)) {
      source[key] = val
    }
  }
  return source
}

export function mergeClasses(...args: (string | string[] | undefined)[]): string {
  return (args.reduce((classes: string, arg) => (!arg ? classes : classes + ' ' + (isArray(arg) ? arg.join(' ') : arg)), '') as string).trim()
}
