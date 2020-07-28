/** @format */

import {getNodeName} from '../../utils/dom-utils/node'

export function isInputElement($el: HTMLInputElement): boolean {
  return getNodeName($el) === 'input'
}
