/** @format */

export type Window = {
  innerHeight: number
  offsetHeight: number
  innerWidth: number
  offsetWidth: number
  pageXOffset: number
  pageYOffset: number
  getComputedStyle: typeof getComputedStyle
  addEventListener(type: unknown, listener: unknown, optionsOrUseCapture?: unknown): void
  removeEventListener(type: unknown, listener: unknown, optionsOrUseCapture?: unknown): void
  Element: Element
  HTMLElement: HTMLElement
  Node: Node
  toString(): '[object Window]'
  devicePixelRatio: number
}
