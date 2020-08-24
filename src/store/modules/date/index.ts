import {dateWatchers, stateDate} from '../../../types/store'
import {startDate} from './watcher'

function dateState(): stateDate {
  return {
    startDate: new Date()
  }
}

const watchers: dateWatchers = {
  startDate: startDate
}

const handler = {
  set(target: stateDate, key: keyof stateDate, value: unknown, receiver: unknown) {
    watchers[key](target, key, value)
    return Reflect.set(target, key, value, receiver)
  }
}

export default function (): stateDate {
  return new Proxy(dateState(), handler)
}
