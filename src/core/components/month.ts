import {createElement} from '../../utils/element'
import {monthNames} from '../i18n'
import {month} from '../../utils/classes'
import {toDayPage} from './utils'
import {State} from '../../types/store'

export function Month(state: State): Node {
  return createElement(
    {
      children: monthNames.map((item, idx: number) => {
        return {
          name: 'span',
          text: item,
          event: () => {
            toDayPage(++idx)
          }
        }
      }),
      class: {
        name: ['page'],
        cb(page) {
          return page === 'month' ? 'show' : 'hidden'
        },
        static: [month]
      }
    },
    state
  )
}
