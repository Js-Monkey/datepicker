import Options, {LocaleConfig} from "./options"
import {State} from "./store"
import {WeekRange} from "./utils";

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
    d: (date: Date, locale?: LocaleConfig) => number
    dd: (date: Date, locale?: LocaleConfig) => string
    M: (date: Date, locale?: LocaleConfig) => number
    MM: (date: Date, locale?: LocaleConfig) => string
    yy: (date: Date, locale?: LocaleConfig) => string
    yyyy: (date: Date, locale?: LocaleConfig) => number
    w: (date: Date, locale: LocaleConfig) => number
    ww: (date: Date, locale: LocaleConfig) => number
}

export interface GetStatusFunctions {
    (this: State, date: string, idx: number): string
}

export interface GetStatusFunctionsType {
    year: GetStatusFunctions
    month: GetStatusFunctions
    date: GetStatusFunctions
    week: (date: Date) =>void
}
