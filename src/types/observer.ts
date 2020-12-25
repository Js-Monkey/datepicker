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

export type SubType = 'class' | 'text' | null

export interface AddWatch<T = void> {
  name: (keyof State)[]
  cb: (...arg: any) => T
  immediate?: boolean
}

export interface Sub {
  name: (keyof State)[]
  cb: (...arg: any) => string
  immediate?: boolean
  type: SubType
}

export interface Watcher {
  addDep(dep: Dep): void
  watcher: Sub
}
