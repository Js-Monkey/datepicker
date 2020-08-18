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

export default function initState(): State {
  return new Proxy(State(), {
    get(target: State, key: keyof State) {
      // if(['reference'].indexOf(key)>-1){
      //   return target.components[key]
      // }
    },
    set(target: State, key: keyof State, value: any) {
      // target.components[key] = value
      return true
    }
  })
}
