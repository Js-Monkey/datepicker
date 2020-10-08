import {isArray, isObject} from './typeOf'
import {on} from './event'
import {CreateElementOptions, eventHandler, eventType, Handler, Style, UtilObject} from '../types/utils'
import {isNode} from './window'
import {get, addDep} from '../store'
const handler: Handler = {
  event: (el, ops) => {
    if (isArray<{name: eventType; handler: eventHandler}>(ops.event)) {
      ops.event.forEach(e => {
        on(el, e.handler, e.name)
      })
    } else {
      on(el, ops.event as eventHandler)
    }
  },
  class: (el, ops) => el.setAttribute('class', ops.class!.join(' ')),
  style: (el, ops) => resetAttr(el, transformStyle(ops.style!), 'style'),
  children: (el, ops) => {
    ops.children?.forEach(child => {
      el.appendChild(createElement(child))
    })
  },
  name: () => null,
  text: (el, ops) => {
    if (isObject(ops.text)) {
      el.innerText = ops.text.output!(get(ops.text.dep))
      addDep(ops.text.dep, {
        el: el,
        fn: ops.text.output!
      }) //依赖收集
    } else {
      el.innerText = ops.text as string
    }
  },
  initial: el => addAttr(el, 'display:none', 'style')
}

export function createEL(tagName?: string): HTMLElement {
  if (!tagName) tagName = 'div'
  return document.createElement(tagName)
}

export default function createSVG(name: string): Element {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${name}`)
  svg.appendChild(use)
  return svg
}

export function createElement<T = HTMLElement>(opt: CreateElementOptions | Node): Node {
  if (isNode(opt)) return opt
  const el = opt.name === 'svg' ? createSVG(opt.text as string) : createEL(opt.name)
  Object.keys(opt).forEach(key => {
    handler[key as keyof CreateElementOptions](el as HTMLElement, opt)
  })
  return el
}

export function appendChild(children: Element | Element[], parent?: Element): void {
  if (!parent) parent = document.body
  if (isArray(children)) {
    children.forEach(child => {
      parent?.appendChild(child)
    })
  } else {
    parent.appendChild(children)
  }
}

export function resetAttr(el: HTMLElement | Element, val: string, name?: string): void {
  if (!name) name = 'class'
  el.setAttribute(name, val)
}

export function transformStyle(sty: Style): string {
  return Object.keys(sty)
    .reduce((acc, key) => acc.concat(`${key}:${sty[key as never]}`), [] as any[])
    .join(';')
}

export function addAttr(el: HTMLElement | Element, val: string | UtilObject, name?: string): void {
  if (!name) name = 'class'
  const attr = el.getAttribute(name)
  if (isObject(val)) val = JSON.stringify(val)
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
