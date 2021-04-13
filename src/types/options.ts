export type Placement = 'top' | 'left' | 'bottom' | 'right'

export interface MonthType<T = unknown, U = unknown> {
    date: T
    month: T
    'month-range': T | U
}

export interface YearType<T = unknown, U = unknown> {
    date: T
    year: T
    'year-range': T | U
}

export interface DateType<T = unknown, U = unknown> {
    date: T
    week: T
    'date-range': T | U

}

export interface DatepickerType<T = unknown, U = any> extends DateType, MonthType, YearType {
    date: T
    'date-range': T | U
    week: T
    month: T
    'month-range': T | U
    year: T
    'year-range': T | U
}

export interface PickerOptions {
    placement?: Placement
    type?: keyof DatepickerType
    unlinkPanels?: boolean
    offset?: number
    zIndex?: number
    format?: string
    insertTo?: 'body' | 'parent'
    binding?: boolean
    disabledDate?: ((date: Date) => boolean) | null
    disabled?: boolean
    themeColor?: string
    rangeBgColor?: string
    tdColor?: string
    thColor?: string
}

export default interface Options {
    placement: Placement
    type: keyof DatepickerType
    unlinkPanels: boolean
    offset: number
    zIndex: number
    format: string
    insertTo: 'body' | 'parent'
    binding: boolean
    disabledDate?: ((date: Date) => boolean) | null
    disabled: boolean
    themeColor: string
    rangeBgColor: string
    tdColor: string
    thColor: string
}

export interface AcceptOptions<T = (val: unknown) => boolean> {
    placement: Placement[]
    type: (keyof DatepickerType)[]
    unlinkPanels: T
    offset: T
    zIndex: T
    format: T
    binding: T
    insertTo: ('body' | 'parent')[]
    disabledDate: (date: Date) => boolean
    disabled: T
    themeColor: T
    rangeBgColor: T
    tdColor: T
    thColor: T
}


export interface LocaleConfig {
    name: 'en' | 'zh_CN'
    weekdays: string[]
    months: string[]
    weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6
    yearFormat: string
}
