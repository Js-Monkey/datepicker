import {componentsWatchers, stateComponent} from '../../../types/store'
import {watchReference} from './watcher'

function componentsState(): stateComponent {
  return {
    reference: null
  }
}

const watchers: componentsWatchers = {
  reference: watchReference
}

const handler = {
  set(target: stateComponent, key: keyof stateComponent, value: unknown, receiver: unknown) {
    watchers[key](target, key, value)
    return Reflect.set(target, key, value, receiver)
  }
}

export default function (): stateComponent {
  return new Proxy(componentsState(), handler)
}
