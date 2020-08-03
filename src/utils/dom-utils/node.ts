import {Window} from '../../types/windows'

export function getNodeName(element: Node | Window): string | null {
  return element ? (('nodeName' in element && element.nodeName) || '').toLowerCase() : null
}
