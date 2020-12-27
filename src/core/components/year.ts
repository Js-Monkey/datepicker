import {createElement} from '../../utils/element'
import {year} from '../../utils/classes'
import {pageName, State} from '../../types/store'
import {toMonthPage} from './utils'

export function Year(state: State): Node {
  return createElement(
    {
      children: Array.from({length: 10}).map((_, idx) => {
        return {
          name: 'span',
          event() {
            toMonthPage(state.startYear, idx)
          },
          text: {
            name: ['startYear'],
            cb(year: number) {
              return year + idx
            }
          }
        }
      }),
      class: {
        name: ['page'],
        cb(page: pageName) {
          console.log(page === 'year' ? 'show' : 'hidden')
          return page === 'year' ? 'show' : 'hidden'
        },
        static: [year]
      }
    },
    state
  )
}
