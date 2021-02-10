import {isArray, isFunc, isString} from './typeOf'
import {on} from './event'
import {CreateElementOptions, updateOptions, eventHandler, eventType, Handler} from '../types/utils'
import {State} from '../types/store'
import {addWatch} from '../observer/watcher'
import {resetAttr, transformStyle} from './attribute'
import {mergeClasses} from './merge'
import {UpdateCbType} from "../types/components"

const handler: Handler = {
  event(el, listener, state) {
    if (isArray<{ name: eventType; handler: eventHandler }>(listener)) {
      listener.forEach(e => on(el, e.handler, e.name, state))
    } else {
      on(el, listener, 'click', state)
    }
  },
  class: (el, cls) => update(el, cls, 'cls'),
  style: (el, sty) => resetAttr(el, transformStyle(sty), 'style'),
  children(el, children, state) {
    children.forEach(child => el.appendChild(createElement(child, state)))
  },
  name: () => null,
  text(el, text) {
    if (isString(text)) {
      el.innerText = text
    } else {
      update(el, text)
    }
  },
  visible: (el, vis) => update<boolean>(el, vis, 'sty')
}

export function createEL(tagName = 'div'): HTMLElement {
  return document.createElement(tagName)
}

export default function createSVG(name: string): Element {
  const url = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(url, 'svg')
  const use = document.createElementNS(url, 'use')
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${name}`)
  svg.appendChild(use)
  return svg
}

export function createElement(opt: CreateElementOptions, state: State): Node {
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

export function update<T>(el: HTMLElement, opt: updateOptions<T> | string[], type: keyof UpdateCbType = 'text'): void {
  if (isArray(opt)) return el.setAttribute('class', opt.join(' '))
  const {key, cb} = opt
  const callbacks: UpdateCbType = {
    cls: (res: string) => resetAttr(el, mergeClasses(res, opt.static)),
    text: (res: string) => el.innerText = res,
    sty: (vis: boolean) => el.style.display = vis ? 'inline-block' : 'none'
  }

  addWatch(
    {
      key,
      cb(): void {
        const res = cb.apply(this, arguments as any) as never
        callbacks[type](res)
      }
    }
  )
}
