import {getNodeName} from './window'

export function isInputElement(el: HTMLElement | null): boolean {
  return getNodeName(el) === 'input'
}
