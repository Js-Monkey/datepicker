/** @format */

export type Window = {
  innerHeight: number
  offsetHeight: number
  innerWidth: number
  offsetWidth: number
  pageXOffset: number
  pageYOffset: number
  getComputedStyle: typeof getComputedStyle
  addEventListener(type: any, listener: any, optionsOrUseCapture?: any): void
  removeEventListener(type: any, listener: any, optionsOrUseCapture?: any): void
  Element: Element
  HTMLElement: HTMLElement
  Node: Node
  toString(): '[object Window]'
  devicePixelRatio: number
}
