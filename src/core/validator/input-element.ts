import {getNodeName} from '../../utils/getNodeName'

export function isInputElement(el: Node | null): boolean {
  return getNodeName(el) === 'input'
}
