import {createElement} from '../../../utils/element'
import {monthNames} from '../../i18n'
import {month} from '../../../utils/classes'
import {selectMonth, toDayPage, utilStyle} from '../utils'
import {State} from '../../../types/store'
import {Bind} from "../../../utils/bind"

export function Month(state: State): Node {
  const eventHandler = state.type === 'month' ? selectMonth : toDayPage
  return createElement(
    {
      children: monthNames.map((item, idx: number) => {
        return {
          name: 'span',
          text: item,
          event: Bind(eventHandler, idx),
          class: {
            key: {
              name: 'start',
              childKey: {
                name: '_month',
                idx,
                childKey: ['status']
              }
            },
            cb: (val: string) => val
          }
        }
      }),
      class: [month],
      style: utilStyle,
      visible: {
        key: ['page'],
        cb: (page) => page === 'month'
      }
    },
    state
  )
}
