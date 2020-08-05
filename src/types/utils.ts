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
