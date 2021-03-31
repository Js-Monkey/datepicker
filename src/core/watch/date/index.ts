import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  updateDayDom,
  linkMonth,
  hoverDay,
} from "./type/day/date-range"
import {startDays} from "./type/day/date"
import {LinkYear, monthOrYear, hover} from "./type/month&year"
import {handleSelecting, startDate, endDate, date, startMonthAndYear} from './type/public'
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
  date: [startDays, monthOrYear(false),monthOrYear(),startMonthAndYear],
  month: [monthOrYear()],
  'month-range': [monthOrYear(), LinkYear(), LinkYear('end'), monthOrYear(true,'end'), hover()],
  year: [monthOrYear(false)],
  'year-range':[monthOrYear(false), monthOrYear(false,'end'), LinkYear('start', true), LinkYear('end',true),hover('year')]
}


const currency = [startDate, date]
const range = [handleSelecting, endDate]

export function watchDate(options: Options): void {
  const {type} = options
  let publicListener = currency
  if (has(type, 'range')) publicListener = publicListener.concat(range)
  addWatch(listeners[type].concat(publicListener))
}
