import Options from './options'
import {UtilObject} from './utils'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export interface stateComponent<T = null | HTMLElement> {
  reference: T
  popover: T
  dayComponents?: any[]
}

export interface stateDate<T = Date> {
  startDate?: T | Date
  startYear?: T | number
  startMonth?: T | number
}

export interface depWatcher<T = dependencies> {
  startDate: T
  startMonth: T
  startYear: T
  page: T
}

export type pageName = 'day' | 'year' | 'mouth'

export interface stateUtil {
  options: Options
  visible: boolean
  page: pageName
}

export interface dependence {
  el: HTMLElement
  name: (keyof depWatcher)[]
  textCb?: (...arg: any) => string | number
  classCb?: (...arg: any) => string
  paramsCb?: (...arg: any) => UtilObject
  class?: string[]
}

export type dependencies = dependence[]

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

export interface State {
  components: stateComponent
  utils: stateUtil
  date: stateDate
}

export interface WatchersFn<T> {
  (target: T, key: keyof T, value: unknown, receiver: StateExtends): void
}

export type componentsWatcherFn = stateComponent<WatchersFn<stateComponent>>

export type utilsWatcherFn = util<WatchersFn<stateUtil>>

export interface Watchers {
  components: componentsWatcherFn
  utils: utilsWatcherFn
  date: UtilObject
}

export interface StateExtends extends State, stateDate, stateUtil, stateComponent {}

export type Store = State[]
