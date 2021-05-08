import {MonthOrYearComponents, RangeType, State} from './store'
import {CreateElement, CreateElementOptions, eventHandler} from './utils'
import {_EventListener} from "./utils"
import {DatepickerType, DateType, MonthType, YearType} from "./options"
import {Sub} from "./observer"

export interface createMonthOrYearComponentsFunction {
    (state: State, t: keyof RangeType): Partial<CreateElementOptions>
}


export interface UpdateCbType {
    text: (res: string) => void
    cls: (res: string) => void
    style: (res: string) => void
}

export type PopoverType = DatepickerType<(CreateElementOptions | CreateElement)[]>

type EventMethod = (this: State) => void

export type DayEvent = DateType<EventMethod, _EventListener[]>

export type MonthEvent = MonthType<EventMethod, _EventListener[]>

export type YearEvent = YearType<EventMethod, _EventListener[]>

export interface RangeClickEvent {
    complete: {
        plt: keyof RangeType
        status: 'selecting'
    }
    selecting: {
        plt: keyof RangeType
        status: 'complete'
    }
}

interface CreateComponentsOptions {
    listener: (child: MonthOrYearComponents, state: State) => eventHandler
    children: (idx: number, months: string[]) => (Partial<CreateElementOptions> | CreateElement)[]
}


export interface DateComponentsType<S = Sub<string>> {
    date: S
    year: S
    month: S
}


export interface ComponentsType<C = never> {
    month: C
    year: C
}

export type CreateMonthOrYearComponentsOptions = ComponentsType<CreateComponentsOptions>
