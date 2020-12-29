import {Sub, Watcher} from '../types/observer'
import {State} from '../types/store'

let uid = 0

export function updateView<T = State>(sub: Sub, state: T): void {
  const params: unknown[] = sub.key.map(key => state[key as keyof T])
  if (params.findIndex(name => name === null) > -1) return
  params.push(state)
  sub.cb(...params)
}

export default class Dep<T = State> {
  static target: any
  id: number
  subs: Watcher[]
  state: T

  constructor(state: T) {
    this.id = uid++
    this.subs = []
    this.state = state
  }

  addSub(sub: Watcher): void {
    this.subs.push(sub)
  }

  depend(): void {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify(): void {
    this.subs.forEach(sub => {
      updateView<T>(sub.watcher, this.state)
    })
  }
}

Dep.target = null

export function setTarget(target: Watcher): void {
  Dep.target = target
}

export function clearTarget(): void {
  Dep.target = null
}
