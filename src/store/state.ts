import storeDate from './modules/date'
import storeComponents from './modules/components'

class InitState {
  components: any
  utils: any
  date: any
  constructor() {
    this.components = storeComponents()
    this.utils = null
    this.date = new storeDate()
  }
}

export default function initState(): ProxyConstructor {
  return new Proxy(new InitState(), {
    get(target: any, key: any) {
      return target.components[key]
    },
    set(target: any, key: any, value: any) {
      target.components[key] = value
      return true
    }
  })
}
