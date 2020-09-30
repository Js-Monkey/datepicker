import {HeaderType} from '../../types/components'
import {createElement} from '../../utils/element'
import {header} from '../../utils/classes'
import {get} from '../../store'

export function addYear(): void {
  // todo
}

export function Header(type?: HeaderType): HTMLElement {
  return createElement({
    class: [header],
    children: [
      createElement({
        name: 'svg',
        text: 'd-left',
        style: {
          float: 'left',
          'margin-left': '10px'
        },
        event: addYear
      }) as HTMLElement,
      {
        name: 'svg',
        text: 'left',
        style: {
          float: 'left',
          'margin-left': '5px'
        }
      },
      {
        name: 'svg',
        text: 'd-right',
        style: {
          float: 'right',
          'margin-right': '10px'
        }
      },
      {
        name: 'span',
        text: get('startYear') + '年',
        style: {
          padding: '0 4px'
        }
      },
      {
        name: 'span',
        text: get('startMonth') + '月',
        style: {
          padding: '0 4px'
        }
      },
      {
        name: 'svg',
        text: 'right',
        style: {
          float: 'right',
          'margin-right': '5px'
        }
      }
    ]
  }) as HTMLElement
}
