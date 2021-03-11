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
import {getEventListener} from "../utils/event";
import {listenToScrollParents} from "../utils/listenToParents"
import clickOutside from "../utils/clickoutside"
import {Off} from "../types/event"
import defaultOptions from "./util/default-options"
import {Bind} from "../utils/bind"

const destroyedMsg = 'The date-picker has been destroyed'

export default function Picker(): BetterPicker {
  let state: State | null, reference: HTMLInputElement, opt: Options
  let onRef, offRef: Off, onBody, offBody: Off

  function openPopover() {
    if (state) state.visible = true
  }

  function addListener() {
    [onRef, offRef] = getEventListener(reference)
    ;[onBody, offBody] = getEventListener(document.body)
    onRef(openPopover)
    onBody(Bind(clickOutside, state))
    if (state) listenToScrollParents(reference, state)
  }

  function getCurrentDate() {
    if (!state) {
      console.error(destroyedMsg)
      return null
    }
    return getDate(state)
  }

  function onChange(cb: Callback) {
    if (!state) return
    if (isFunc(cb)) {
      state.onChange = cb
    } else {
      console.error('Invalid argument provided. They must be a Function')
    }
  }

  function updateOptions(options: Options) {
    opt = mergeOptions(opt, options)
    destroyed()
    create()
  }

  function destroyed() {
    if (!state) return console.error(destroyedMsg)
    destroyHook(state)
    offBody()
    offRef()
    removeState(state.id)
    state = null
  }

  function create(): void {
    if(!reference) return
    state = createState(opt)
    watch(opt)
    addListener()
    state.reference = reference
    state.popover = createPopover(state)
  }

  return function (el: HTMLInputElement, options?: Options) {
    const inputElement = findInputElement(el)
    if (!isInputElement(inputElement)) return
    reference = inputElement
    opt = mergeOptions(defaultOptions(), options)
    create()
    return {
      options,
      getCurrentDate,
      onChange,
      updateOptions,
      destroyed
    }
  }

}

