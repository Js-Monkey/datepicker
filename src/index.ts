/** @format */

import Flex from './core'
import extend from './utils/extend'
import Options from './types/options'

function createInstance(): any {
  return function (el: HTMLElement, options: Options, ...args: unknown[]) {
    const context = new Flex()
    const instance = Flex.create.apply(context, args)
    extend(context, instance)
    return instance
  }
}
const flex = createInstance()
flex.create = function create(el: HTMLElement, options: Options, ...args: unknown[]) {
  return Flex.create.apply(this, args)
}

export default flex
