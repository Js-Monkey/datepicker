import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  updateDayDom,
  rangeEndMonthYearLink,
  endLinkStartToMonth,
  startLinkEndToMonth,
  hoverDay,
  rangeLinkPrecisionToDay
} from "./type/day/date-range"
import {startDays, startLink} from "./type/day/date"
import {endLinkStartToYear, startLinkEndToYear, updateStartMonth, updateEndMonth, hoverMonth} from "./type/month"
import {handleSelecting, startDate} from './type/public'
import {Listeners} from "../../../types/watch"

const listeners: Listeners = {
  'date-range': [
    startDays,
    updateDayDom,
    rangeEndMonthYearLink,
    endLinkStartToMonth,
    startLinkEndToMonth,
    hoverDay,
    handleSelecting,
    rangeLinkPrecisionToDay
  ],
  date: [startDays, updateStartMonth],
  month: [updateStartMonth],
  'month-range': [updateStartMonth, endLinkStartToYear, startLinkEndToYear, updateEndMonth, handleSelecting, hoverMonth],
}


const publicListener = [startLink, startDate]

export function watchDate(options: Options): void {
  addWatch(listeners[options.type].concat(publicListener))
}
