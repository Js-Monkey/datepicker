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
import {dateLink, startDays, startLink} from "./type/day/date"
import {endLinkStartToYear, startLinkEndToYear, updateStartMonth, updateEndMonth, hoverMonth} from "./type/month"
import {handleSelecting} from './type/public'

const type = {
  'date-range': [
    startLink,
    startDays,
    updateDayDom,
    rangeEndMonthYearLink,
    endLinkStartToMonth,
    startLinkEndToMonth,
    hoverDay,
    handleSelecting,
    dateLink,
    rangeLinkPrecisionToDay
  ],
  date: [startLink, startDays, updateStartMonth, dateLink],
  month: [startLink, updateStartMonth],
  'month-range': [startLink, updateStartMonth, endLinkStartToYear, startLinkEndToYear, updateEndMonth, handleSelecting, hoverMonth],
}

export function watchDate(options: Options): void {
  addWatch(type[options.type])
}
