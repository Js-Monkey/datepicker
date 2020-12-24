import {Style, UtilObject} from '../types/utils'
import {isObject} from './typeOf'

export function resetAttr(el: HTMLElement | Element, val: string, name = 'class'): void {
  el.setAttribute(name, val)
}

export function transformStyle(sty: Style): string {
  return Object.keys(sty)
    .reduce((acc, key) => acc.concat(`${key}:${sty[key as never]}`), [] as any[])
    .join(';')
}

export function addAttr(el: HTMLElement | Element, val: string | UtilObject, name = 'class'): void {
  const attr = el.getAttribute(name)
  if (isObject(val)) {
    val = Object.keys(val).reduce((c, key) => c + key + ':' + val[key as keyof void] + ';', '')
  }
  if (attr && attr.indexOf(val) === -1) val += ' ' + attr
  el.setAttribute(name, val)
}

export function toggleCls(el: HTMLElement, cls: [string, string], vis: boolean | number): void {
  const classes = el.getAttribute('class') || ' '
  const pre = cls[Number(!vis)]
  const source = cls[Number(vis)]
  const newCls = classes
    .split(' ')
    .filter(item => item !== pre && item !== source)
    .concat([pre])
    .join(' ')
  el.setAttribute('class', newCls)
}
