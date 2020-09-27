export interface UtilObject {
  [key: string]: any
}

export interface UtilFn extends UtilObject {
  (...arg: any): any
}

export interface Types {
  Number: string
  String: string
  Function: string
  Array: string
  Date: string
  Object: string
}

export interface Rect<T = number> {
  width: T
  height: T
  left: T
  top: T
}

export interface Transform<T = string> {
  top: T
  left: T
  bottom: T
  right: T
}

export type eventType = 'click' | 'mouseenter' | 'mouseleave' | 'focus'

export type eventHandler = (e: Event) => unknown

export interface EventListener {
  name: eventType
  handler: eventHandler
}

export interface Style {
  float?: 'left' | 'right'
  color?: string
  backgroundColor?: string
}

export interface CreateElementOptions {
  name?: 'svg' | 'span' | 'div' | 'ul' | 'li' | 'input'
  el?: (...arg: any) => HTMLElement
  text?: string
  event?: eventHandler | EventListener[]
  class?: string[]
  style?: Style
  children?: CreateElementOptions[]
  initial?: 'hidden'
}

export interface Handler<T = (el: HTMLElement | Element, options: CreateElementOptions) => void> {
  event: T
  class: T
  el: T
  style: T
  children: T
  name: () => void
  text: T
  initial: T
}
