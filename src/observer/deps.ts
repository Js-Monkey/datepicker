import {ReWriteSub, Watcher} from '../types/observer'
import {State} from '../types/store'

let uid = 0

export function updateView<T = State>(sub: ReWriteSub, state: T, obj: any): void {
  const params: unknown[] = sub.key.map(key => obj[key as keyof T])
  clearTarget()
  params.push(obj)
  sub.cb.call(state, ...params)
}

export default class Dep<T = State> {
  static target: any
  id: number
  subs: Watcher[]
  state: T
  obj: any

  constructor(obj: any, state: T) {
    this.id = uid++
    this.subs = []
    this.state = state
    this.obj = obj
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
      updateView(sub.watcher, this.state, this.obj)
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
