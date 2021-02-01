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
import {dateLink, startComponents, startLink} from "./type/date"

const type = {
  'date-range': [
    startLink,
    startComponents,
    endComponents,
    endLink,
    endLinkStart,
    startLinkEnd,
    hoverDay,
    handleSelecting,
    dateLink,
    endLinkToStart
  ],
  date: [startLink, startComponents, dateLink]
}

export function watchDate(options: Options): void {
  addWatch(type[options.type])
}
