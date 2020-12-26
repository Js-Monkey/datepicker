import {State} from './store'

export interface ObjectProperty {
  get: () => unknown
  set: (...arg: any) => void
}

export interface Dep {
  depend: () => void
  addSub: (sub: any) => void
  updateView: () => void
}

export interface Sub<T = void> {
  name: (keyof State)[]
  cb: (...arg: any) => T
  handleParams?: (...arg: any) => any[]
}

export interface Watcher {
  addDep(dep: Dep): void
  watcher: Sub
}
