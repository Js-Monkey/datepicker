import {State} from './store'
import {CreateElement, CreateElementOptions} from './utils'
import {EventListener} from "./utils";

export type HeaderType = 'start' | 'end'

export type Components = (state: State, ...arg: any) => Node

export interface PopoverType {
  date: (CreateElementOptions | CreateElement)[]
  'date-range': (CreateElementOptions | CreateElement)[]
}

export interface DayEvent {
  date: (this: State) => void
  'date-range': EventListener[]
}

export interface RangeClickEvent {
  complete:{
    plt: HeaderType
    status: 'selecting'
  }
  selecting:{
    plt: HeaderType
    status: 'complete'
  }
}
