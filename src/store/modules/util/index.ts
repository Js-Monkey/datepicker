import {stateUtil, utilWatchers} from '../../../types/store'
import {options} from './watcher'

function utilState(): stateUtil {
  return {
    options: {
      placement: 'bottom'
    }
  }
}

const watchers: utilWatchers = {
  options: options
}

export default function (): stateUtil {
  return new Proxy(utilState(), {
    set(target: stateUtil, key: keyof stateUtil, value: unknown, receiver: unknown) {
      watchers[key] && watchers[key](target, key, value)
      return Reflect.set(target, key, value, receiver)
    }
  })
}
