import Options from "./options"

export interface BetterPicker {
  new(el: HTMLInputElement, options?: Options): BetterPickerInstance
}


export interface BetterPickerInstance {
  options: Options
}
