import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  updateDayDom,
  linkMonth,
} from "./type/day/date-range"
import {startDays} from "./type/day/date"
import {LinkYear, wacthYM} from "./type/month&year"
import {handleSelecting, startDate, endDate, date, startMonthAndYear,hoverSelect} from './type/public'
import {Listeners} from "../../../types/watch"
import {has} from "../../../utils/has"

const listeners: Listeners = {
  'date-range': [
    startDays,
    updateDayDom,
    linkMonth(),
    linkMonth('end'),
    hoverSelect('date')
  ],
  date: [startDays, wacthYM(false),wacthYM(),startMonthAndYear],
  month: [wacthYM()],
  'month-range': [wacthYM(), LinkYear(), LinkYear('end'), wacthYM(true,'end'), hoverSelect()],
  year: [wacthYM(false)],
  'year-range':[wacthYM(false), wacthYM(false,'end'), LinkYear('start', true), LinkYear('end',true),hoverSelect('year')]
}


const currency = [startDate, date]
const range = [handleSelecting, endDate]

export function watchDate(options: Options): void {
  const {type} = options
  let publicListener = currency
  if (has(type, 'range')) publicListener = publicListener.concat(range)
  addWatch(listeners[type].concat(publicListener))
}
