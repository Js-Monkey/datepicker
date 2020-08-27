import {isArray} from './typeOf'
import {on} from './event'
import {CreateElementOptions, eventHandler, eventType, Handler} from '../types/utils'

const handler: Handler = {
  event: (el, ops) => {
    if (isArray<{name: eventType; handler: eventHandler}>(ops.event)) {
      ops.event.forEach(e => {
        on(el, e.name, e.handler)
      })
    } else {
      on(el, 'click', ops.event as eventHandler)
    }
  },
  class: () => {
    //todo
  },
  style: () => {
    //todo
  },
  children: () => {
    //todo
  },
  name: () => {
    //todo
  },
  innerText: () => {
    //todo
  },
  initial: () => {
    //todo
  }
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
    parent.appendChild(children as Element)
  }
}

export function resetAttr(el: HTMLElement, val: string, name?: string) {
  if (!name) name = 'class'
  el.setAttribute(name, val)
}

export function addAttr(el: HTMLElement, val: string, name?: string) {
  if (!name) name = 'class'
  const attr = el.getAttribute(name)
  if (attr) {
    if (attr.indexOf(val) === -1) {
      val += ' ' + attr
      el.setAttribute(name, val)
    }
  } else {
    el.setAttribute(name, val)
  }
}
