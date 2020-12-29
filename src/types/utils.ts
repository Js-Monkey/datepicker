import {DayComponents, State} from './store'
import {Sub} from './observer'

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

export interface updateOptions {
  key: (keyof State | keyof DayComponents)[]
  cb: (...arg: any) => string
  handleParams?: (...arg: any) => any[]
  static?: string[]
  childKey?: keyof State
  childIdx?: number
}

export interface CreateElementOptions {
  name?: 'span' | 'div' | 'ul' | 'li' | 'input' | 'svg'
  text?: string | Sub
  class?: updateOptions | string[]
  event?: eventHandler | EventListener[]
  style?: Style
  children?: (CreateElementOptions | CreateElement)[]
}

interface HandlerCb<T> {
  (el: HTMLElement, val: T, state: State): void
}

export interface Handler<> {
  event: HandlerCb<eventHandler | EventListener[]>
  class: HandlerCb<updateOptions | string[]>
  style: HandlerCb<Style>
  children: HandlerCb<CreateElementOptions[]>
  name: () => void
  text: HandlerCb<Sub<string> | string>
}
