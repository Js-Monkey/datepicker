import Components from './modules/components'

class InitState {
  components: any
  utils: any

  constructor() {
    this.components = new Components()
    this.utils = null
  }
}

const handler = {
  get(target: any, key: any, receiver: any) {
    return target.components[key]
  },
  set(target: any, key: any, value: any, receiver: any) {
    return Reflect.set(target, key, value, receiver)
  }
}

export default function initState(): ProxyConstructor {
  return new Proxy(new InitState(), handler)
}
