import {setTarget, clearTarget, updateView} from './deps'
import {Sub, Dep, Sub} from '../types/observer'
import {getState} from '../store'

export default class Watcher {
  watcher: Sub

  constructor(watcher: Sub) {
    this.watcher = watcher
    setTarget(this)
    updateView(this.watcher, getState())
    clearTarget()
  }

  addDep(dep: Dep): void {
    dep.addSub(this)
  }
}

export function addWatch<T>(sub: Sub<T>, type = null): void {
  new Watcher(Object.assign(sub, type))
}
