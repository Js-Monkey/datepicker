export interface UtilObject {
  [key: string]: any
}

export interface UtilFn extends UtilObject {
  (...arg: never): unknown
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

export interface NodeOptions<T = (el: HTMLElement, options: unknown) => unknown> {
  event: T
  class: T
  style: T
  update: T
  children: T
  name: () => void
  val: T
  initial: T
}
