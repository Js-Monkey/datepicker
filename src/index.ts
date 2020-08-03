import Flex from './core'
import extend from './utils/extend'
import Options from './types/options'
import {UtilFn} from './types/utils'

function createInstance(): UtilFn {
  return function (el: HTMLInputElement, options: Options) {
    const context = new Flex()
    const instance: any = Flex.create.call(context, el, options)
    extend(context, instance)
    return instance
  }
}

const flex = createInstance()
flex.create = function create(el: HTMLInputElement, options: Options) {
  return Flex.create.call(this, el, options)
}

export default flex
