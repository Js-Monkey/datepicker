import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './util/default-options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from './validator/input-element'
import {createState, removeState} from '../store'
import {mergeOptions} from '../utils/merge'
import {watch} from './watch'
import {State} from "../types/store"
import {createPopover} from "./dom/create-popover"
import {isFunc} from "../utils/typeOf"
import {getDate} from "./util/hook"
import {BetterPicker, Callback} from "../types/core"

function checkOptions(pre: Options, cur?: Options) {
  const opt = mergeOptions(pre, cur) as Options
  return validateOptions(opt) ? opt : null
}

export default function Picker(): BetterPicker {
  let state: State

  function getCurrentDate() {
    return getDate(state)
  }

  function onChange(cb: Callback) {
    if (isFunc(cb)) {
      state.onChange = cb
    } else {
      console.error('Invalid argument provided. They must be a Function')
    }
  }

  function updateOptions(options: Options) {
    const newOpt = checkOptions(state.options, options)
    if (newOpt) {
      state.options = newOpt
      state.popover = null
    }
  }

  function destroyed() {
    removeState(state.id)
  }

  return function (el: HTMLInputElement, options?: Options) {
    function create(): void {
      const input = findInputElement(el)
      const opt = checkOptions(defaultOptions(), options)
      if (!isInputElement(input) || !opt) return
      state = createState(opt)
      watch(opt)
      state.reference = input
      state.popover = createPopover(state)
    }

    create()
    return {
      options,
      create,
      getCurrentDate,
      onChange,
      updateOptions,
      destroyed
    }
  }

}

