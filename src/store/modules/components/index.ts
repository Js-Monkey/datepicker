import {componentsWatchers, stateComponent} from '../../../types/store'
import {watchReference, watchPopover} from './watcher'

function componentsState(): stateComponent {
  return {
    reference: null,
    popover: null
  }
}

const watchers: componentsWatchers = {
  reference: watchReference,
  popover: watchPopover
}

export default function (): stateComponent {
  return new Proxy(componentsState(), {
    set(target: stateComponent, key: keyof stateComponent, value: unknown, receiver: unknown) {
      watchers[key](target, key, value)
      return Reflect.set(target, key, value, receiver)
    }
  })
}
