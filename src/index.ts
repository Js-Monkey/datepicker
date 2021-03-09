import BD from './core'
import Options from './types/options'
import {BetterPickerInstance} from "./types/core"

export function createDatePicker(el: HTMLInputElement, options?: Options): BetterPickerInstance {
  const picker = BD()
  return picker(el, options)
}


