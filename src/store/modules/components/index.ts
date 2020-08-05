class componentsState {
  reference: any
  popover: any

  constructor() {
    this.reference = null
  }
}

const handler = {
  set(target: any, key: any, value: any, receiver: any) {
    return Reflect.set(target, key, value, receiver)
  }
}

export default function storeComponents(): ProxyConstructor {
  return new Proxy(new componentsState(), handler)
}
