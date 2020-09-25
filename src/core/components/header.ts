import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'

export function header(type: HeaderType): HTMLElement {
  return createElement({
    class: ['better-header']
  }) as HTMLElement
}
