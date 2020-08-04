import {Window} from '../types/windows'

export function getNodeName(el: Node | Window | null): string | null {
  return el ? (('nodeName' in el && el.nodeName) || '').toLowerCase() : null
}
