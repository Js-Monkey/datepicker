import {depWatcher} from './store'

export interface UtilObject {
  [key: string]: any
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
  height?: string
  width?: string
  float?: 'left' | 'right'
  color?: string
  backgroundColor?: string
  margin?: string
  'margin-left'?: string
  'margin-right'?: string
  'margin-top'?: string
  'margin-bottom'?: string
  padding?: string
}

export interface CreateElement {
  (...arg: any): Node
}

export interface dependenceWatcher {
  name: (keyof depWatcher)[]
  textCb?: (...arg: any) => number | string
  classCb?: (...arg: any) => string[]
}

export interface CreateElementOptions {
  name?: 'span' | 'div' | 'ul' | 'li' | 'input' | 'svg'
  text?: string
  event?: eventHandler | EventListener[]
  class?: string[]
  style?: Style
  children?: (CreateElementOptions | CreateElement)[]
  deps?: dependenceWatcher[]
}

export interface Handler<
  T = (el: HTMLElement | Element, val: any, options: CreateElementOptions) => void,
  U = HTMLElement
> {
  event: T
  class: T
  style: T
  children: T
  name: () => void
  text: (el: HTMLElement, text: string) => void
  deps: (el: HTMLElement, deps: dependenceWatcher[]) => void
}
