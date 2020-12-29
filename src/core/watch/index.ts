import {on} from '../../utils/event'
import {set} from '../../store'
import clickOutside from '../../utils/clickoutside'
import {listenToScrollParents} from '../../utils/listenToParents'
import {isInBody} from '../../utils/isInBody'
import {createPopover, updatePopover} from '../dom/create-popover'
import {appendChild} from '../../utils/element'
import {setPopoverStyle} from '../dom/create-popover'
import {addWatch} from '../../observer/watcher'
import Options from '../../types/options'
import {State} from '../../types/store'
import {daysInAMonth, getPreMonth, joinDate, monthFirstDay} from '../../utils/date'

export function watch(): void {
  addWatch({
    key: ['reference'],
    cb(ref: HTMLElement, state: State): void {
      on(ref, () => (state.visible = true))
      on(document.body, clickOutside.bind(null, state as any))
      listenToScrollParents(ref, state)
      set('popover', createPopover(state))
    }
  })
  addWatch({
    key: ['popover', 'options'],
    cb(pop: HTMLElement, options: Options): void {
      if (!isInBody(pop)) {
        appendChild(pop as Element)
        const {zIndex} = options
        setPopoverStyle(pop as HTMLElement, zIndex as number)
      }
    }
  })
  addWatch({
    key: ['popover', 'visible'],
    cb(pop: HTMLElement, show: boolean, state: State): void {
      updatePopover(pop, show, state)
    }
  })
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
    cb(month: number, year: number, state: State): void {
      const {preYear, preMonth} = getPreMonth(month, year)
      const preDays = daysInAMonth(preYear, preMonth)
      const [fd, days] = [monthFirstDay(year, month), daysInAMonth(year, month)]
      state.startDayComponent.forEach((item, index) => {
        const idx = index + 1
        const day = index < fd ? preDays - fd + idx : index < fd + days ? idx - fd : idx - fd - days
        item.text = String(day)
        item.status =
          index < fd
            ? 'pre'
            : idx > fd + days
            ? 'next'
            : joinDate(year, month, day) === state.startDate
            ? 'selected'
            : ''
      })
    }
  })
}
