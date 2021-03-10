import Options from '../types/options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from '../utils/check-input-element'
import {createState, removeState} from '../store'
import {mergeOptions} from '../utils/merge'
import {watch} from './watch'
import {State} from "../types/store"
import {createPopover} from "./dom/create-popover"
import {isFunc} from "../utils/typeOf"
import {destroyHook, getDate} from "./util/method"
import {BetterPicker, Callback} from "../types/core"
import {on} from "../utils/event";
import {listenToScrollParents} from "../utils/listenToParents"
import clickOutside from "../utils/clickoutside"
import {_Event} from "../types/event"
import defaultOptions from "./util/default-options"

export default function Picker(): BetterPicker {
  let state: State
  let reference: HTMLElement
  let opt: Options

  function openPopover() {
    state.visible = true
  }

  function clickOutsideClose(e: _Event) {
    clickOutside(state, e)
  }

  function addListener() {
    on(reference, openPopover)
    on(document.body, clickOutsideClose)
    listenToScrollParents(reference, state)
  }

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
    const newOpt = mergeOptions(opt, options)
    if (newOpt) {
      state.options = newOpt
      state.popover = null
    }
  }

  function destroyed() {
    removeState(state.id)
    destroyHook(state)
  }

  function create(): void {
    const inputElement = findInputElement(reference)
    if (!isInputElement(inputElement) || !opt) return
    state = createState(opt)
    watch(opt)
    addListener()
    state.reference = reference
    state.popover = createPopover(state)
  }


  return function (el: HTMLInputElement, options?: Options) {
    reference = el
    opt = mergeOptions(defaultOptions(), options)
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

