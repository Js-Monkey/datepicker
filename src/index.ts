import Better from './core'
import extend from './utils/extend'
import Options from './types/options'
import {UtilFn} from './types/utils'

function createInstance(): UtilFn {
  return function (el: HTMLInputElement, options: Options) {
    const context = new Better()
    const instance: any = Better.create.call(context, el, options)
    extend(context, instance)
    return instance
  }
}

const better = createInstance()
better.create = function create(el: HTMLInputElement, options: Options) {
  return better.create.call(this, el, options)
}

export default better
