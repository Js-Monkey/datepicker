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
    updateView(watcher, state, obj, !watcher.notImmediate)
  }

  addDep(dep: Dep): void {
    dep.addSub(this)
  }
}

function deepSearch<T>(state: State, sub: Sub<T>): ReWriteSub {
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

function watch<T>(sub: Sub<T>, state: State) {
  const _sub = Object.assign({}, sub)
  new Watcher(_sub as ReWriteSub, state, deepSearch(state, _sub))
}

export function addWatch<T>(subs: Sub<T> | Sub<T>[]): void {
  const state = getState()
  if (isArray(subs)) {
    subs.forEach(sub => watch(sub, state))
  } else {
    watch(subs, state)
  }
}

