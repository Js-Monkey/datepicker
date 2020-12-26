import {isArray, isFunc, isString} from './typeOf'
import {on} from './event'
import {CreateElementOptions, CreateElementOptionsClass, eventHandler, eventType, Handler} from '../types/utils'
import {State} from '../types/store'
import {addWatch} from '../observer/watcher'
import {resetAttr, transformStyle} from './attribute'
import {mergeClasses} from './merge'
import {Sub} from '../types/observer'

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
  class: (el, cls) => {
    updateClasses(el, cls)
  },
  style: (el, sty) => resetAttr(el, transformStyle(sty), 'style'),
  children(el, children, state) {
    children.forEach(child => {
      el.appendChild(createElement(child, state))
    })
  },
  name: () => null,
  text: (el, text) => {
    if (isString(text)) {
      el.innerText = text
    } else {
      updateText(el, text)
    }
  }
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

export function updateText(el: HTMLElement, text: Sub<string>): void {
  const {name, handleParams, cb} = text
  addWatch({
    name,
    cb(...arg: any): void {
      el.innerText = cb.apply(this, arg)
    },
    handleParams
  })
}

export function updateClasses(el: HTMLElement, cls: CreateElementOptionsClass | string[]): void {
  if (isArray(cls)) return el.setAttribute('class', cls.join(' '))
  const {name, handleParams, cb} = cls
  addWatch({
    name,
    cb(...arg: any): void {
      resetAttr(el, mergeClasses(cb(...arg), cls.static))
    },
    handleParams
  })
}
