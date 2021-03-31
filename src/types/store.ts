import Options, {DatepickerType} from './options'
import {Fn} from "./utils"

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export type ComponentStatus =
  'other'
  | 'pre'
  | 'next'
  | 'selected'
  | 'inRange'
  | 'range-start'
  | 'range-end'
  | ''
  | 'range-start range-end'
  | 'today'
  | 'disabled'

export interface DateComponents {
  text: string
  status: ComponentStatus
  date: string
}

export interface MonthOrYearComponents {
  status: ComponentStatus
  date: string
}

export interface stateComponent<T = null | HTMLElement, U = null | Fn> {
  reference: HTMLInputElement | null
  popover: T
  onChange: U
}

export interface DateData {
  date: string | null
  year: number
  month: number
  _date: DateComponents[]
  _month: MonthOrYearComponents[]
  _year: MonthOrYearComponents[]
}

export type RangeStatus = 'complete' | 'selecting'

export interface Range {
  start: string | null
  end: string | null
  status: RangeStatus
}

export interface stateDate<T = Date> {
  range: Range
  start: DateData
  end: DateData
  today: string
  date: (string | null) | (string | null)[]
}

export type pageName = 'date' | 'year' | 'month'

export interface stateUtil {
  options: Options
  visible: boolean
  page: pageName
}

export interface componentsWatchers<T = componentWatcher> {
  reference: T
  popover: T
}

export interface dateWatchers<T = dateWatcher> {
  startDate: T
}

export interface utilWatchers<T = utilWatcher> {
  options: T
  visible: T
  page: T
}

export interface State extends stateComponent, stateUtil, stateDate {
  id: number
  type: keyof DatepickerType
}


export interface States {
  [key: number]: State
}
