import storeDate from './modules/date'
import storeComponents from './modules/components'
import storeUtil from './modules/util'
import {State} from '../types/store'

function State(): State {
  return {
    components: storeComponents(),
    utils: storeUtil(),
    date: storeDate()
  }
}

const proxyName = (target: State, key: keyof State) => Object.keys(target).find(k => key in target[k as never])

export default function initState(): State {
  return new Proxy(State(), {
    get(target: State, key: keyof State) {
      const name = proxyName(target, key) as keyof State
      return (target as never)[name][key]
    },
    set(target: State, key: keyof State, value: unknown) {
      const name = proxyName(target, key) as keyof State
      ;(target as any)[name][key] = value
      return true
    }
  })
}
