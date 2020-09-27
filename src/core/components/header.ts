import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'

export function createHeader(type?: HeaderType): HTMLElement {
  return createElement({
    class: [header],
    children: [
      {
        name: 'svg',
        text: 'd-left',
        style: {
          float: 'left'
        }
      },
      {
        name: 'svg',
        text: 'left',
        style: {
          float: 'left'
        }
      },
      {
        name: 'svg',
        text: 'right',
        style: {
          float: 'right'
        }
      },
      {
        name: 'svg',
        text: 'd-right',
        style: {
          float: 'right'
        }
      }
    ]
  }) as HTMLElement
}
