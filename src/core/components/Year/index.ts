import {createElement, visible} from '../../../utils/element'
import {pageName, State} from '../../../types/store'
import {selectYear, utilStyle} from '../utils'
import {getMinInTen} from '../../../utils/date'
import {CreateElementOptions} from "../../../types/utils"
import _for from "../../../utils/for"

const rows = 3
const cols = 4

function tbody(): CreateElementOptions {
  return {
    name: 'tbody',
    children: tr()
  }
}

function tr(): CreateElementOptions[] {
  return _for(( idx) => {
    return {
      name: 'tr',
      children: td(idx)
    }
  },rows)
}

function td(row: number): CreateElementOptions[] {
  return Array.from({length: cols}).map((_, col) => {
    const idx = row * cols + col - 1
    return {
      name: 'td',
      event: selectYear,
      text: {
        key: {
          name: 'start',
          childKey: ['year']
        },
        cb: (year: number) => String(getMinInTen(year) + idx)
      }
    }
  })
}

export function Year(state: State): Node {
  return createElement(
    {
      name: 'table',
      children: [tbody()],
      class: ['year'],
      style: utilStyle,
      $style: {
        display: {
          key: ['page'],
          cb: (page: pageName) => visible(page === 'year')
        }
      }
    },
    state
  )
}
