import {isArray} from './typeOf'
import {on} from './event'
import {CreateElementOptions, eventHandler, eventType, Handler} from '../types/utils'

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
  style: (el, ops) => resetAttr(el, ops.style as string, 'style'),
  children: (el, ops) => {
    ops.children?.forEach(child => {
      el.appendChild(createElement(child))
    })
  },
  name: () => null,
  innerText: (el, ops) => ((el as HTMLElement).innerText = ops.innerText as string),
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

export function createElement(options: CreateElementOptions): Element | HTMLElement {
  const el = options.name === 'svg' ? createSVG(options.innerText as string) : createEL(options.name)
  Object.keys(options).forEach(key => {
    handler[key as keyof CreateElementOptions](el, options)
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

export function addAttr(el: HTMLElement | Element, val: string, name?: string): void {
  if (!name) name = 'class'
  const attr = el.getAttribute(name)
  if (attr && attr.indexOf(val) === -1) val += ' ' + attr
  el.setAttribute(name, val)
}
