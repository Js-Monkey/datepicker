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
}

export interface stateDate<T = Date> {
  startDate: T | Date
  startYear: number
  startMonth: number
}

export type pageName = 'day' | 'year' | 'month'

export interface stateUtil {
  options: Options
  visible: boolean
  page: pageName
}

export interface util<T> {
  options: T
  visible: T
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

export interface WatchersFn<T> {
  (target: T, key: keyof T, value: unknown, receiver: StateExtends): void
}

export type componentsWatcherFn = stateComponent<WatchersFn<stateComponent>>

export type utilsWatcherFn = util<WatchersFn<stateUtil>>

export interface StateExtends extends State, stateDate, stateUtil, stateComponent {}

export type Store = State[]
