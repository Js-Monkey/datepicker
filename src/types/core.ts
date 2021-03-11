import Options from "./options"

export interface BetterPicker {
  (el: HTMLInputElement, options?: Options): BetterPickerInstance | undefined
}

export type GetDateType = (string | null) | (string | null)[]


export type Callback = (...arg: any) => any

export interface BetterPickerInstance {
  getCurrentDate: () => GetDateType
  onChange: (cb: Callback) => void
  updateOptions: (options: Options)=> void
  destroyed: ()=> void
}


export interface Formats {
  d: (date: Date) => number
  dd: (date: Date) => string
  M: (date: Date) => number
  MM: (date: Date) => string
  yy: (date: Date) => string
  yyyy: (date: Date) => number
}
