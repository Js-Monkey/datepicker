import {createElement} from '../../utils/element'
import {year} from '../../utils/classes'
import {pageName, State} from '../../types/store'
import {toMonthPage} from './utils'

export function Year(state: State): Node {
  return createElement(
    {
      class: [year],
      children: Array.from({length: 10}).map((_, idx) => {
        return {
          name: 'span',
          event() {
            toMonthPage(state.startYear, idx)
          }
        }
      })
    },
    state
  )
}
