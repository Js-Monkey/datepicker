import {setTarget, updateView} from './deps'
import {ReWriteSub, Dep, SubKey, Sub} from '../types/observer'
import {getState} from '../store'
import {isArray, isNumber} from '../utils/typeOf'
import {State} from '../types/store'

export default class Watcher {
  watcher: ReWriteSub
  constructor(watcher: ReWriteSub, state: State, obj: any) {
    this.watcher = watcher
    setTarget(this)
    updateView(this.watcher, state, obj)
  }

  addDep(dep: Dep): void {
    dep.addSub(this)
  }
}

function deepSearch<T>(state: State, sub: ReWriteSub<T>) {
  function search(obj: any, key: SubKey | string[]): any {
    if (isArray(key)) {
      sub.key = key
      return obj
    }
    const {name, idx, childKey} = key
    if (name) obj = obj[name]
    if (isNumber(idx) && isArray(obj)) obj = obj[idx]
    if (childKey) obj = search(obj, childKey)
    return obj
  }

  return search(state, sub.key)
}

export function addWatch<T>(sub: Sub<T>): void {
  const state = getState()
  new Watcher(sub as ReWriteSub, state, deepSearch(state, sub as ReWriteSub))
}

