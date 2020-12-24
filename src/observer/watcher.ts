import {setTarget, clearTarget} from './deps'
import {addWatch, Dep, Sub} from '../types/observer'
import {get} from '../store'

export default class Watcher {
  watcher: Sub

  constructor(watcher: Sub) {
    this.watcher = watcher
    setTarget(this)
    watcher.name.map(name => get(name))
    clearTarget()
  }

  addDep(dep: Dep): void {
    dep.addSub(this)
  }
}

export function addWatch(sub: addWatch, type = null): void {
  new Watcher(Object.assign(sub, type))
}
