import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  updateDayDom,
  endLink,
  endLinkStart,
  startLinkEnd,
  hoverDay,
  handleSelecting,
  rangeLinkPrecisionToDay
} from "./type/day/date-range"
import {dateLink, startDays, startLink} from "./type/day/date"
import {startMonth} from "./type/month"

const type = {
  'date-range': [
    startLink,
    startDays,
    updateDayDom,
    endLink,
    endLinkStart,
    startLinkEnd,
    hoverDay,
    handleSelecting,
    dateLink,
    rangeLinkPrecisionToDay
  ],
  date: [startLink, startDays, startMonth, dateLink],
  month: [startLink, startMonth],
  'month-range': [startLink, startMonth],
}

export function watchDate(options: Options): void {
  addWatch(type[options.type])
}
