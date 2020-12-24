import {isArray, isFunc, isObject} from './typeOf'
import {on} from './event'
import {CreateElementOptions, eventHandler, eventType, Handler, Style, UtilObject} from '../types/utils'
import {State} from '../types/store'

const handler: Handler = {
  event(el, listener, state) {
    if (isArray<{name: eventType; handler: eventHandler}>(listener)) {
      listener.forEach(e => {
        on(el, e.handler, e.name, state)
      })
    } else {
      on(el, listener, 'click', state)
    }
  },
  class: (el, cls) => el.setAttribute('class', cls.join(' ')),
  style: (el, sty) => resetAttr(el, transformStyle(sty), 'style'),
  children(el, children, state) {
    children.forEach(child => {
      el.appendChild(createElement(child, state))
    })
  },
  name: () => null,
  text: (el, text) => (el.innerText = text)
}

export function createEL(tagName = 'div'): HTMLElement {
  return document.createElement(tagName)
}

export default function createSVG(name: string): Element {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${name}`)
  svg.appendChild(use)
  return svg
}

export function createElement<T = HTMLElement>(opt: CreateElementOptions, state: State): Node {
  if (isFunc<Node>(opt)) return opt(state)
  const el = opt.name === 'svg' ? createSVG(opt.text as string) : createEL(opt.name)
  Object.keys(opt).forEach(key => {
    handler[key as keyof CreateElementOptions](el as HTMLElement, (opt as any)[key], state)
  })
  return el
}

export function appendChild(children: Element | Element[], parent: Element = document.body): void {
  if (isArray(children)) {
    children.forEach(child => parent?.appendChild(child))
  } else {
    parent.appendChild(children)
  }
}

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
