import BD from './core'
import extend from './utils/extend'
import Options from './types/options'
import './svg'
import {BetterPicker} from "./types/core"

export function createDatePicker(el: HTMLInputElement, options?: Options): BetterPicker {
  const picker = BD()
  const context = new picker(el, options)
  extend(context, picker)
  return picker
}

