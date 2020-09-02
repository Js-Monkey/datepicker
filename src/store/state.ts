import date from './modules/date'
import components from './modules/components'
import utils from './modules/util'
import {State} from '../types/store'

function State(): State {
  return {
    components: components(),
    utils: utils(),
    date: date()
  }
}

const proxyName = (target: State, key: keyof State) => Object.keys(target).find(k => key in target[k as never])

export default function initState(): State {
  return new Proxy(State(), {
    get(target: State, key: keyof State) {
      const name = proxyName(target, key) as keyof State
      return (target as never)[name][key]
    },
    set(target: State, key: keyof State, value: unknown, receiver) {
      const name = proxyName(target, key) as keyof State
      console.log(target)
      return Reflect.set(target[name], key, value, receiver)
    }
  })
}
