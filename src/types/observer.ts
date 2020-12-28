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

export interface Sub<T = void> {
  key: any[]
  cb: (...arg: any) => T
  handleParams?: (...arg: any) => any[]
  childKey?: keyof State
  childIdx?: number
}

export interface Watcher {
  addDep(dep: Dep): void
  watcher: Sub
}
