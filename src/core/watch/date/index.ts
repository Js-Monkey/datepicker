import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  updateDayDom,
  linkMonth,
  hoverDay,
} from "./type/day/date-range"
import {startDays} from "./type/day/date"
import {LinkYear, watchMonth, hoverMonth} from "./type/month"
import {handleSelecting, startDate, endDate, date, startMonthAndYear} from './type/public'
import {watchYear} from "./type/year"
import {Listeners} from "../../../types/watch"
import {has} from "../../../utils/has"

const listeners: Listeners = {
  'date-range': [
    startDays,
    updateDayDom,
    linkMonth(),
    linkMonth('end'),
    hoverDay
  ],
  date: [startDays, watchYear(),watchMonth(),startMonthAndYear],
  month: [watchMonth()],
  'month-range': [watchMonth(), LinkYear(), LinkYear('end'), watchMonth('end'), hoverMonth],
  year: [watchYear()],
  'year-range':[watchYear()]
}


const currency = [startDate, date]
const range = [handleSelecting, endDate]

export function watchDate(options: Options): void {
  const {type} = options
  let publicListener = currency
  if (has(type, 'range')) publicListener = publicListener.concat(range)
  addWatch(listeners[type].concat(publicListener))
}
