import Options from '../types/options'
import validateOptions from './validator/options'
import defaultOptions from './default-options'
import {findInputElement} from '../utils/findInputElement'
import {isInputElement} from './validator/input-element'
import {pushState, set} from '../store'

export default class better {
  options: Options
  static el: HTMLInputElement

  constructor() {
    this.options = new defaultOptions()
  }

  static create(el: HTMLInputElement, options: Options) {
    const input = findInputElement(el)
    if (!isInputElement(input)) return
    if (!validateOptions(options)) return
    pushState()
    set('reference', input)
    return this
  }
}
