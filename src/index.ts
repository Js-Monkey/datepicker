import BD from './core'
import extend from './utils/extend'
import Options from './types/options'
import './svg'
import {BetterPicker} from "./types/core"

function createDatePicker() {
  return function (el: HTMLInputElement, options?: Options): BetterPicker {
    const picker = BD()
    const context = new picker(el, options)
    extend(context, picker)
    return picker
  }
}

const better = createDatePicker()

export default better
