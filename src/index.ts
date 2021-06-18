import BD from './core'
import Options from './types/options'
import {BetterPickerInstance} from "./types/core"
import {changeOpt} from "./core/util/default-options"
import {pickerLocale} from "./store/modules/options"
import {destroyed} from "./store"

export function createDatePicker(el: HTMLInputElement, options?: Partial<Options>): BetterPickerInstance {
    const picker = BD()
    return <BetterPickerInstance>picker(el, options)
}

export const defaultOptions = changeOpt

export const locale = pickerLocale

export const destroy = destroyed
