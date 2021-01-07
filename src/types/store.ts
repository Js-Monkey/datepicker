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
}

export interface stateDate<T = Date> {
  rangeBegin: null | string
  rangeEnd: null | string
  rangeStatus: 'none' | 'complete' | 'selecting'
  start: {
    date: string
    year: number
    month: number
    day: number
    components: DayComponents[]
  }
  end: {
    date: string
    year: number
    month: number
    day: number | null
    components: DayComponents[]
  }
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

export interface State extends stateComponent, stateUtil, stateDate {
}
