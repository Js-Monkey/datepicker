import {addWatch} from '../../../observer/watcher'
import {State} from '../../../types/store'
import {daysInAMonth, getPreMonth, joinDate, monthFirstDay} from '../../../utils/date'
import Options from '../../../types/options'
import {Bind} from '../../../utils/bind'

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

export function watchDate(options: Options): void {
  addWatch({
    key: ['startMonth'],
    cb(month: number, state: State): void {
      if (month === 13) {
        state.startMonth = 1
        state.startYear += 1
      }
      if (month === 0) {
        state.startMonth = 12
        state.startYear -= 1
      }
    }
  })
  addWatch({
    key: ['startMonth', 'startYear'],
    cb: updateDayComponents
  })
  if (options.type.indexOf('range') > -1) {
    addWatch({
      key: ['endMonth', 'endYear'],
      cb: Bind(updateDayComponents, 'end')
    })
  }
}
