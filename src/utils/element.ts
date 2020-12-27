import {isArray, isFunc, isString} from './typeOf'
import {on} from './event'
import {CreateElementOptions, updateOptions, eventHandler, eventType, Handler} from '../types/utils'
import {State} from '../types/store'
import {addWatch} from '../observer/watcher'
import {resetAttr, transformStyle} from './attribute'
import {mergeClasses} from './merge'

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
    update(el, cls, 'cls')
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
      update(el, text)
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

export function update<T>(el: HTMLElement, opt: updateOptions | string[], type?: 'cls'): void {
  if (isArray(opt)) return el.setAttribute('class', opt.join(' '))
  const {name, handleParams, cb} = opt
  const updateCb =
    type === 'cls'
      ? (...arg: any) => resetAttr(el, mergeClasses(cb(...arg), opt.static))
      : (...arg: any) => (el.innerText = cb.call(null, ...arg))
  addWatch({
    name,
    cb(...arg: any): void {
      updateCb(...arg)
    },
    handleParams
  })
}
