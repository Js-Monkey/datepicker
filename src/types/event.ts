import {State} from "./store";

export type eventType = 'click' | 'mouseenter' | 'mouseleave' | 'scroll' | 'resize' | 'focus' | 'blur'

export interface Handler {
  (...arg: any): unknown
}

export interface _Event {
  isTrusted: boolean
  screenX: number
  screenY: number
  clientX: number
  clientY: number
  type: eventType
  offsetX: number
  offsetY: number
  path: any[]
  target: HTMLElement
}

export interface On {
  (handler: Handler, state?: State): void
}

export interface Off {
  (): void
}

export type _EventListener = [On,Off]
