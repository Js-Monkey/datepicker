import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './default-options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from './validator/input-element'
import {set, get} from '../store'

export default class Flex {
  options: Options
  static el: HTMLInputElement

  constructor() {
    this.options = new defaultOptions()
  }

  static create(el: HTMLInputElement, options: Options) {
    const inputEl = findInputElement(el)
    if (!isInputElement(inputEl)) return
    if (!validateOptions(options)) return
    set('reference', inputEl)
    return this
  }
}
