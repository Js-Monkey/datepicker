import storeDate from './modules/date'

class InitState {
  components: any
  utils: any
  date: any
  constructor() {
    console.log(this.components.reference)
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
