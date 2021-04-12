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
        if (!state) return null
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

    function update(options: Options) {
        opt = mergeOptions(opt, options)
        destroyed()
        create()
    }

    function destroyed() {
        if (!state) return null
        destroyHook(state)
        offBody()
        offRef()
        removeState(state.id)
        state = null
    }

    function create(): void {
        if (!reference) return
        state = createState(opt)
        watch(opt)
        addListener()
        state.reference = reference
        state.popover = createPopover(state)
    }

    function clear(): null | void {
        if (!state) return null
        if (state.reference) state.reference.value = ''
        state.range.start = state.range.end = state.start.date = state.end.date = null
    }

    function open(): null | void {
        if (!state) return null
        state.visible = true
    }

    function close(): null | void {
        if (!state) return null
        state.visible = false
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
            update,
            destroyed,
            clear,
            open,
            close
        }
    }

}

