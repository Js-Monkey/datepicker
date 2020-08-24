export interface UtilObject {
  [key: string]: any
}

export interface UtilFn extends UtilObject {
  (...arg: any): unknown
}

export interface Types {
  Number: string
  String: string
  Function: string
  Array: string
  Date: string
  Object: string
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
