import {isArray} from "./typeOf"

export function has(target: string | string[], val: string| string[]): boolean {
  if(isArray(val)) return val.some(v=> has(target,v))
  return target.indexOf(val) > -1
}


export function not(target: string | string[], val: string| string []): boolean {
  if(isArray(val)) return val.every(v=> !has(target,v))
  return !has(target,val)
}

