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
  key: (keyof State | keyIsArray)[]
  cb: (...arg: any) => T
  handleParams?: (...arg: any) => any[]
}

export interface Watcher {
  addDep(dep: Dep): void

  watcher: Sub
}
