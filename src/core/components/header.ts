import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'

export function createHeader(type?: HeaderType): HTMLElement {
  return createElement({
    class: [header],
    children: [
      {
        name: 'svg',
        text: 'd-left'
      },
      {
        name: 'svg',
        text: 'left'
      },
      {
        name: 'svg',
        text: 'right'
      },
      {
        name: 'svg',
        text: 'd-right'
      }
    ]
  }) as HTMLElement
}
