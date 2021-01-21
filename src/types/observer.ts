import {State} from './store'

export interface Dep {
  depend: () => void
  addSub: (sub: any) => void
  updateView: () => void
}

export interface keyIsArray {
  name: keyof State
  index: number
}

export interface SubKey {
  name: string
  childKey: SubKey | string[]
  idx?: number
}

export interface Sub<T = void> {
  key: SubKey | string[]
  cb: (this: State, ...arg: any) => T
  notImmediate?: boolean
}

export interface ReWriteSub<T = void> {
  key: string[]
  cb: (...arg: any) => T
  notImmediate?: boolean
}

export interface Watcher {
  addDep(dep: Dep): void
  watcher: ReWriteSub
}
