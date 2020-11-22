import {dependence, depWatcher} from './store'

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

export type eventHandler = (...arg: any) => unknown

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

export interface Dependence<T = string> {
  name: (keyof depWatcher)[]
  cb?: (...arg: any) => T
}

export interface classOptions {
  static?: string[]
  dep: Dependence
}

export interface CreateElementOptions {
  name?: 'span' | 'div' | 'ul' | 'li' | 'input' | 'svg'
  text?: string | Dependence
  event?: {
    cb: eventHandler | EventListener[]
    params?: (keyof depWatcher | number)[]
  }
  class?: string[] | classOptions
  style?: Style
  children?: (CreateElementOptions | CreateElement)[]
}

interface HandlerCb<T> {
  (el: HTMLElement, val: T, opt: CreateElementOptions): void
}

export interface Handler<> {
  event: HandlerCb<{
    cb: eventHandler | EventListener[]
    params?: (keyof depWatcher | number)[]
  }>
  class: HandlerCb<string[]>
  style: HandlerCb<Style>
  children: HandlerCb<CreateElementOptions[]>
  name: () => void
  text: HandlerCb<string>
}
