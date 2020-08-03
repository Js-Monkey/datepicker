/** @format */

import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './default-options'

export default class Flex {
  options: Options
  static el: HTMLInputElement
  constructor() {
    this.options = new defaultOptions()
  }
  static create(el: HTMLInputElement, options: Options) {
    if (!validateOptions(options)) return
    return this
  }
}
