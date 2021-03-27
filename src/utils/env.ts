import {has} from "./has"

export function isNative(Ctor: unknown): boolean {
  return typeof Ctor === 'function' && has(Ctor.toString(), 'native code')
}
