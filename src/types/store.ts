import Options from './options'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export type ComponentStatus = '' | 'pre' | 'next' | 'selected' | 'inRange' | 'range-start' | 'range-end'

export interface DayComponents {
  text: string
  status: ComponentStatus
  date: string
}

export interface stateComponent<T = null | HTMLElement> {
  reference: T
  popover: T
}

export interface DateData {
  date: string
  year: number
  month: number
  day: number | null
  components: DayComponents[]
}

export interface Range {
  start: string | null
  end: string | null
  status: 'complete' | 'selecting'
}

export interface stateDate<T = Date> {
  range: Range
  start: DateData
  end: DateData
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
