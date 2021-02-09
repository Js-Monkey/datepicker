import {createElement} from '../../../utils/element'
import {year} from '../../../utils/classes'
import {pageName, State} from '../../../types/store'
import {selectYear, utilStyle} from '../utils'
import {getMinInTen} from '../../../utils/date'

export function Year(state: State): Node {
  return createElement(
    {
      children: Array.from({length: 10}).map((_, idx) => {
        return {
          name: 'span',
          event: selectYear,
          text: {
            key: {
              name: 'start',
              childKey: ['year']
            },
            cb: (year: number) => String(getMinInTen(year) + idx)
          }
        }
      }),
      class: [year],
      style: utilStyle,
      visible: {
        key: ['page'],
        cb: (page: pageName) => page === 'year'
      }
    },
    state
  )
}
