import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  updateDayDom,
  endLinkStartToMonth,
  startLinkEndToMonth,
  hoverDay,
  rangeLinkPrecisionToDay
} from "./type/day/date-range"
import {startDays} from "./type/day/date"
import {endLinkStartToYear, startLinkEndToYear, updateStartMonth, updateEndMonth, hoverMonth} from "./type/month"
import {handleSelecting, startDate, endDate, date} from './type/public'
import {Listeners} from "../../../types/watch"
import {has} from "../../../utils/has"

const listeners: Listeners = {
  'date-range': [
    startDays,
    updateDayDom,
    endLinkStartToMonth,
    startLinkEndToMonth,
    hoverDay,
    rangeLinkPrecisionToDay,
  ],
  date: [startDays, updateStartMonth],
  month: [updateStartMonth],
  'month-range': [updateStartMonth, endLinkStartToYear, startLinkEndToYear, updateEndMonth, hoverMonth],
}


const currency = [startDate,date]
const range = [handleSelecting,endDate]

export function watchDate(options: Options): void {
  const {type} = options
  let publicListener = currency
  if(has(type, 'range'))publicListener = publicListener.concat(range)
  addWatch(listeners[type].concat(publicListener))
}
