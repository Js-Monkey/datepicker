import Better from './core'
import extend from './utils/extend'
import Options from './types/options'

function createInstance(): typeof Better {
  return function (el: HTMLInputElement, options?: Options) {
    const context = new Better(el, options)
    const instance = Better
    extend(context, instance)
    return instance
  } as never
}

const better = createInstance()
better.create = function create(el: HTMLInputElement, options: Options) {
  return Better.create.call(this, el, options)
}

export default better
