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
