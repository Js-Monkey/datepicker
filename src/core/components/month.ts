import {createElement} from '../../utils/element'
import {monthNames} from '../i18n'
import {month} from '../../utils/classes'
import {toDayPage} from './utils'

export function Month(): Node {
  return createElement({
    class: [month],
    children: monthNames.map((item, idx: number) => {
      return {
        name: 'span',
        text: item,
        event: {
          cb: toDayPage,
          params: [++idx]
        }
      }
    }),
    deps: [
      {
        name: ['page'],
        classCb(page) {
          if (page === 'month') return 'show'
          return 'hidden'
        }
      }
    ]
  })
}
