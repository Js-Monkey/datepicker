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

export interface addWatch {
  name: (keyof State)[]
  cb: (...arg: any) => string | void
}

export interface Sub {
  name: (keyof State)[]
  cb: (...arg: any) => string
  type: SubType
}

export interface Watcher {
  addDep(dep: Dep): void
}
