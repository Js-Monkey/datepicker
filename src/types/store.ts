import Options from './options'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export type ComponentStatus = '' | 'pre' | 'next' | 'selected'

export interface DayComponents {
  text: string
  status: ComponentStatus
}

export interface stateComponent<T = null | HTMLElement> {
  reference: T
  popover: T
  startDayComponent: DayComponents[]
  endDayComponent: DayComponents[]
}

export interface stateDate<T = Date> {
  startDate: string
  startYear: number
  startMonth: number
  startDay: number
  endDate: string
  endYear: number
  endMonth: number
  endDay: number | null
  rangeBegin: null | string
  rangeEnd: null | string
  rangeStatus: 'none' | 'complete' | 'selecting'
}

export type pageName = 'day' | 'year' | 'month'

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

export interface State extends stateComponent, stateUtil, stateDate {}
