import {MonthOrYearComponents, State} from './store'
import {CreateElement, CreateElementOptions, eventHandler} from './utils'
import {_EventListener} from "./utils"
import {DatepickerType, DateType, MonthType, YearType} from "./options"
import {Sub} from "./observer";

export type HeaderType = 'start' | 'end'

export type ComponentsName = 'month' | 'year'
export type RangeComponentName  = ComponentsName | 'date'

export interface createMonthOrYearComponentsFunction{
  (state: State, t: HeaderType): Node
}


export interface UpdateCbType {
  text: (res: string) => void
  cls: (res: string) => void
  style: (res: string) => void
}

export type PopoverType = DatepickerType<(CreateElementOptions | CreateElement)[]>

export type DayEvent = DateType<(this: State) => void, _EventListener[]>

export type MonthEvent = MonthType<(this: State) => void, _EventListener[]>

export type YearEvent = YearType<(this: State) => void, _EventListener[]>

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

export interface CreateMonthOrYearComponentsOptions{
  month: {
    listener: (child: MonthOrYearComponents, state:State)=>eventHandler
    children: (text:string)=>(CreateElementOptions | CreateElement)[]
  },
  year:{
    listener: (child: MonthOrYearComponents, state:State)=>eventHandler
    children: (idx:number)=>(CreateElementOptions | CreateElement)[]
  }
}

export interface HeaderDateComponentsType{
  date:Sub<string>
  year:Sub<string>
  month:Sub<string>
}
