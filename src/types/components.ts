import {State} from './store'
import {CreateElement, CreateElementOptions} from './utils'
import {EventListener} from "./utils"
import {DatepickerType} from "./options"

export type HeaderType = 'start' | 'end'

export type Components = (state: State, ...arg: any) => Node

export type PopoverType = DatepickerType<(CreateElementOptions | CreateElement)[]>

export type DayEvent = DatepickerType<(this: State) => void, EventListener[]>

export interface RangeClickEvent {
  complete: {
    plt: HeaderType
    status: 'selecting'
  }
  selecting: {
    plt: HeaderType
    status: 'complete'
  }
}
