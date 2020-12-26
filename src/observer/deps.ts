import {Sub, Watcher} from '../types/observer'
import {State} from '../types/store'

let uid = 0

export function updateView(sub: Sub, state: State): void {
  const params: unknown[] = sub.name.map(name => state[name])
  const {handleParams} = sub
  if (params.findIndex(name => name === null) > -1) return
  if (handleParams) params.push(...handleParams(...params))
  params.push(state)
  sub.cb(...params)
}

export default class Dep {
  static target: any
  id: number
  subs: Watcher[]
  state: State

  constructor(state: State) {
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
      updateView(sub.watcher, this.state)
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
