import {setTarget, clearTarget, updateView} from './deps'
import {Sub, Dep} from '../types/observer'
import {getState} from '../store'
import {isArray} from '../utils/typeOf'

export default class Watcher {
  watcher: Sub

  constructor(watcher: Sub, state: any) {
    this.watcher = watcher
    setTarget(this)
    updateView(this.watcher, state)
    clearTarget()
  }

  addDep(dep: Dep): void {
    dep.addSub(this)
  }
}

export function addWatch<T>(sub: Sub<T>, key?: string, idx?: number): void {
  let state = getState()
  if (key) state = state[key]
  if (isArray(state)) {
    state = state[idx!]
  }
  new Watcher(sub, state)
}
