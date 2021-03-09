import Options from "./options"

export interface BetterPicker {
  (el: HTMLInputElement, options?: Options): BetterPickerInstance
}

export type GetDateType = (string | null) | (string | null)[]


export type Callback = (...arg: any) => any

export interface BetterPickerInstance {
  create: (el: HTMLInputElement, options: Options) => void
  getCurrentDate: () => GetDateType
  onChange: (cb: Callback) => void
}
