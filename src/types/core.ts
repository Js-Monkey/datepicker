import Options, {LocaleConfig} from "./options"
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

export interface FormatValidator<R = number, P = unknown> {
    (date: Date, ...arg: P[]): R
}

export interface Formats {
    d: FormatValidator
    dd: FormatValidator<string>
    M: FormatValidator
    MM: FormatValidator<string>
    yy: FormatValidator<string>
    yyyy: FormatValidator
    w: FormatValidator<number, LocaleConfig>
    ww: FormatValidator<number, LocaleConfig>
}

export interface GetStatusFunctions {
    (this: State, date: string, idx: number): string
}

export interface GetStatusFunctionsType {
    year: GetStatusFunctions
    month: GetStatusFunctions
    date: GetStatusFunctions
    week: (date: Date) => void
}
