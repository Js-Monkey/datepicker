import Options from "./options"
import {State} from "./store"

export interface BetterPicker {
    (el: HTMLInputElement, options?: Options): BetterPickerInstance | undefined
}

export type GetDateType = (Date | null) | (Date | null)[]


export type Callback = (...arg: any) => any

export interface BetterPickerInstance {
    getCurrentDate: () => GetDateType
    onChange: (cb: Callback) => void
    update: (options: Options) => void
    destroyed: () => void
    clear: () => void | null
}


export interface Formats {
    d: (date: Date) => number
    dd: (date: Date) => string
    M: (date: Date) => number
    MM: (date: Date) => string
    yy: (date: Date) => string
    yyyy: (date: Date) => number
}

export interface GetStatusFunctions {
    (state: State, date: string, idx: number): string
}

export interface GetStatusFunctionsType {
    year: GetStatusFunctions
    month: GetStatusFunctions
    date: GetStatusFunctions
    week: GetStatusFunctions
}
