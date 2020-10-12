import date, {dw} from './modules/date'
import components, {cw} from './modules/components'
import utils, {updateDeps, uw} from './modules/util'
import {State, Watchers} from '../types/store'

function State(): State {
  return {
    components: components(),
    utils: utils(),
    date: date()
  }
}

const watchers: Watchers = {
  components: cw,
  utils: uw,
  date: dw
}

const proxyName = (target: State, key: keyof State): keyof State =>
  Object.keys(target).find(k => key in target[k as never]) as keyof State

export default function initState(): State {
  return new Proxy(State(), {
    get(target: State, key: keyof State) {
      const name = proxyName(target, key)
      return (target as never)[name][key]
    },
    set(target: State, key: keyof State, val: unknown) {
      const name = proxyName(target, key)
      const watcher = watchers[name] as any
      const proxy: any = target[name]
      if (proxy[key] === val) return true
      if (key in target.utils.deps) {
        updateDeps((target.utils.deps as any)[key])
      }
      watcher[key](proxy, key, val, target) //todo any的写法有待改进，这会放弃其他的所有检查
      return Reflect.set(proxy, key, val)
    }
  })
}
