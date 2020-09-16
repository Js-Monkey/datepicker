import {getNodeName} from '../../utils/window'

export function isInputElement(el: HTMLElement | null): boolean {
  return getNodeName(el) === 'input'
}
