import Options from "../types/options"
import {checkOptions} from "./checkOptions"
import {logo} from "./classes"
import {isArray,has} from "./typeOf"

export function mergeOptions(source: any, target = Object.create(null)): Options {
  for (const key in source) {
    const val = target[key]
    if (checkOptions(key as keyof Options, val)) {
      source[key] = val
    }
  }
  return source
}

function addLogo(str: string) {
  return has(str, logo) ? str : logo + '-' + str
}

export function mergeClasses(...args: (string | string[] | undefined)[]): string {
  return args.filter(item => item).map(arg => isArray(arg) ? mergeClasses(...arg) : addLogo(arg as string)).join(' ')
}

