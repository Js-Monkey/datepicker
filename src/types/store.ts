import Options from './options'

type componentWatcher = (target: stateComponent, key: keyof componentsWatchers, value: unknown) => void
type dateWatcher = (target: stateDate, key: keyof dateWatchers, value: unknown) => void
type utilWatcher = (target: stateUtil, key: keyof utilWatchers, value: unknown) => void

export interface stateComponent<T = null | HTMLElement> {
  reference: T
  popover: T
}

export interface stateDate<T = Date> {
  startDate?: T
}

export interface stateUtil {
  options?: Options
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
}

export interface State {
  components: stateComponent
  utils: stateUtil
  date: stateDate
}

export interface StateExtends extends State, componentsWatchers, dateWatcher, utilWatcher {}

export type Store = State[]
