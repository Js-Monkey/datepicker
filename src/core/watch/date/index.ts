import {addWatch} from "../../../observer/watcher"
import Options from "../../../types/options"
import {
  endComponents,
  endLink,
  endLinkStart,
  startLinkEnd,
  hoverDay,
  handleSelecting,
  endLinkToStart
} from "./type/date-range"
import {dateLink, startDays, startLink, startMonth} from "./type/date"

const type = {
  'date-range': [
    startLink,
    startDays,
    endComponents,
    endLink,
    endLinkStart,
    startLinkEnd,
    hoverDay,
    handleSelecting,
    dateLink,
    endLinkToStart
  ],
  date: [startLink, startDays, startMonth, dateLink],
  month: [startLink, startMonth]
}

export function watchDate(options: Options): void {
  addWatch(type[options.type])
}
