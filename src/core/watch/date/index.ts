import {addWatch} from '../../../observer/watcher'
import {State} from '../../../types/store'
import {daysInAMonth, getPreMonth, joinDate, monthFirstDay} from '../../../utils/date'
import Options from '../../../types/options'
import {Bind, isHas} from '../../../utils/helper'

function updateDayComponents(month: number, year: number, state: State, type?: 'end'): void {
  const {preYear, preMonth} = getPreMonth(month, year)
  const preDays = daysInAMonth(preYear, preMonth)
  const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
  state[type ? 'endDayComponent' : 'startDayComponent'].forEach((item, index) => {
    const idx = index + 1
    const day = index < fd ? preDays - fd + idx : index < fd + days ? idx - fd : idx - fd - days
    item.text = String(day)
    item.status =
      index < fd ? 'pre' : idx > fd + days ? 'next' : joinDate(year, month, day) === state.startDate ? 'selected' : ''
  })
}

function monthYearLink(month: number, state: State, m: 'startMonth' = 'startMonth', y: 'startYear' = 'startYear') {
  if (month === 13) {
    state[m] = 1
    state[y] += 1
  }
  if (month === 0) {
    state[m] = 12
    state[y] -= 1
  }
}

function endStartLink(em: number, ey: number, state: State): void {
  const {preMonth, preYear} = getPreMonth(em, ey)
  state.startMonth = preMonth
  state.startYear = preYear
}

export function watchDate(options: Options): void {
  addWatch({
    key: ['startMonth'],
    cb: monthYearLink
  })
  addWatch({
    key: ['startMonth', 'startYear'],
    cb: updateDayComponents
  })
  if (isHas(options.type, 'range')) {
    addWatch({
      key: ['endMonth', 'endYear'],
      cb: Bind(updateDayComponents, 'end')
    })
    addWatch({
      key: ['endMonth'],
      cb: Bind(monthYearLink, 'endMonth', 'endYear')
    })
    addWatch({
      key: ['endMonth', 'endYear'],
      cb: endStartLink
    })
  }
}
