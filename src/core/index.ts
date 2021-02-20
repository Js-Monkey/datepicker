import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './util/default-options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from './validator/input-element'
import {createState} from '../store'
import {mergeOptions} from '../utils/merge'
import {watch} from './watch'
import {State} from "../types/store"
import {createPopover} from "./dom/create-popover"
import {isFunc} from "../utils/typeOf"
import {getDate} from "./util/hook"
import {BetterPicker} from "../types/core"

export default function Picker(): BetterPicker {
  let state: State

  class better {
    options: Options

    constructor(el: HTMLInputElement, options?: Options) {
      this.options = mergeOptions(new defaultOptions(), options) as Options
      better.create(el, this.options)
    }

    static create(el: HTMLInputElement, options: Options): void {
      const input = findInputElement(el)
      if (!isInputElement(input) || !validateOptions(options)) return
      state = createState(options)
      watch(options)
      state.reference = input
      state.popover = createPopover(state)
    }

    getDate() {
      return getDate(state)
    }

    onChange(cb: (...arg: any) => any) {
      if (isFunc(cb)) {
        state.onChange = cb
      } else {
        console.error('Invalid argument provided. They must be a Function')
      }
    }
  }

  return better
}

