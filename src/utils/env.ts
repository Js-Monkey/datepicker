import {has} from "./typeOf"

export function isNative(Ctor: unknown): boolean {
    return typeof Ctor === 'function' && has(Ctor.toString(), 'native code')
}


export function canIUseAnimation(): boolean {
    const sheet = document.styleSheets
    if (!sheet) return false
    const rules = sheet[0]
    const div = document.createElement('div')
    return rules && rules.rules && typeof document.onanimationend !== 'undefined' && typeof div.style.animationName !== 'undefined'
}
