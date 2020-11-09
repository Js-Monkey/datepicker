import {createElement} from '../../utils/element'
import {monthNames} from '../i18n'
import {month} from '../../utils/classes'

export function Month(): Node {
  return createElement({
    class: [month],
    children: monthNames.map(item => {
      return {
        name: 'span',
        text: item
      }
    }),
    deps: [
      {
        name: ['page'],
        classCb(page) {
          if (page === 2) return 'show'
          return 'hidden'
        }
      }
    ]
  })
}
