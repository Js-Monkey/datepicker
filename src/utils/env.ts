export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && UA.indexOf('msie' as string | 'trident') > -1

export function isNative(Ctor: unknown): boolean {
  return typeof Ctor === 'function' && Ctor.toString().indexOf('native code') > -1
}
