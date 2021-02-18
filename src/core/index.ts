import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './default-options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from './validator/input-element'
import {createState} from '../store'
import {mergeOptions} from '../utils/merge'
import {watch} from './watch'
import {State} from "../types/store"
import {createPopover} from "./dom/create-popover";

export default function Picker(): any {
  let state: State

  class better {

    constructor(el: HTMLInputElement, options?: Options) {
      const opt = mergeOptions(new defaultOptions(), options) as Options
      this.create(el, opt)
    }

    create(el: HTMLInputElement, options: Options): void {
      const input = findInputElement(el)
      if (!isInputElement(input) || !validateOptions(options)) return
      state = createState(options)
      watch(options)
      state.reference = input
      state.popover = createPopover(state)
    }

    getDate() {
      const isRange = state.options.type.indexOf('range') > -1
      const startDate = state.start.date
      const endDate = state.end.date
      if (isRange) {
        return [startDate, endDate]
      } else {
        return startDate
      }
    }

    onChange(cb: (...arg: any) => any) {
       //todo
    }
  }

  return better
}

